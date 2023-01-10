FROM node:14

WORKDIR /NICASOURCE_CHALLENGE
COPY package.json .
RUN npm install
COPY . .
CMD npm run dev