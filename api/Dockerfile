FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD npm run seed:question ; npm run dev