import { Request, Response } from "express";
import { User } from "../entities/User";
import bcryptjs from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

export const Register = async (req: Request, res: Response) => {
  const { name, lastname, email, password } = req.body;
  try {
    const user = await User.insert({
      name,
      lastname,
      email,
      password: await bcryptjs.hash(password, 12),
    });

    return res.status(201).json({
      message: "User created successfully",
    });
  } catch (error: any) {
    return res.status(400).send({
      message: error.message,
    });
  }
};

export const Login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: {
      email: email,
    },
  });

  if (!user) {
    return res.status(400).send({
      message: "Invalid User",
    });
  }

  if (!(await bcryptjs.compare(password, user.password))) {
    return res.status(400).send({
      message: "Invalid Password",
    });
  }

  const accessToken = sign(
    {
      id: user.id,
    },
    "access_secret",
    { expiresIn: 60 * 60 }
  );

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, //equivalent to 1 day
  });

  res.send({
    message: "success",
  });
};

export const AuthenticatedUser = async (req: Request, res: Response) => {
  try {
    const accessToken = req.cookies["accessToken"];

    const payload: any = verify(accessToken, "access_secret");

    if (!payload) {
      return res.status(401).send({
        message: "Unauthenticated",
      });
    }

    const user = await User.findOne({
      where: {
        id: payload.id,
      },
    });

    if (!user) {
      return res.status(401).send({
        message: "Unauthenticated",
      });
    }

    const { password, ...data } = user;

    res.send(data);
  } catch (e) {
    console.log(e);
    return res.status(401).send({
      message: "Unauthenticated",
    });
  }
};
