import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { verify } from "jsonwebtoken";
import { User } from "../entities/User";
import { Task } from "../entities/Task";

export const createTask = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const token = req.cookies.accessToken;
  const { id } = verify(token, "access_secret") as any;

  const user = await User.findOne({
    where: {
      id: id,
    },
  });

  if (!user) {
    return res.status(400).send({
      message: "Invalid User",
    });
  }

  try {
    const task = await Task.save({
      title,
      description,
      user,
    });

    return res.status(201).json({
      message: "Task created successfully",
    });
  } catch (error: any) {
    return res.status(400).send({
      message: error.message,
    });
  }
};

export const getTasks = async (req: Request, res: Response) => {
  const token = req.cookies.accessToken;
  const { id } = verify(token, "access_secret") as any;

  try {
    const tasks = await Task.find({
      where: {
        user: id,
      },
    });

    return res.status(200).json({
      tasks,
    });
  } catch (error: any) {
    return res.status(400).send({
      message: error.message,
    });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const { title, description, status } = req.body;
  const token = req.cookies.accessToken;
  const { id } = verify(token, "access_secret") as any;

  const user = await User.findOne({
    where: {
      id: id,
    },
  });

  if (!user) {
    return res.status(400).send({
      message: "Invalid User",
    });
  }

  try {
    const task = await Task.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!task) {
      return res.status(400).send({
        message: "Invalid Task",
      });
    }

    await Task.update(
      {
        id: req.params.id,
      },
      {
        title,
        description,
        status,
      }
    );

    return res.status(200).json({
      message: "Task updated successfully",
    });
  } catch (error: any) {
    return res.status(400).send({
      message: error.message,
    });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const token = req.cookies.accessToken;
  const { id } = verify(token, "access_secret") as any;
  const { taskId } = req.params;

  const user = await User.findOne({
    where: {
      id: id,
    },
  });

  if (!user) {
    return res.status(400).send({
      message: "Invalid User",
    });
  }

  try {
    const task = await Task.findOne({
      where: {
        id: taskId,
      },
    });

    if (!task) {
      return res.status(400).send({
        message: "Invalid Task",
      });
    }

    await Task.delete({
      id: taskId,
    });

    return res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error: any) {
    return res.status(400).send({
      message: error.message,
    });
  }
};
