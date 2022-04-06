FROM mongo:latest

COPY . .

RUN ["chmod", "+x", "mongoimport.sh"]

CMD ./mongoimport.sh

FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD yarn dev