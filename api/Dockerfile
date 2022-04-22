FROM node:alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build



FROM node:alpine

WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY --from=builder /app/dist ./

COPY ./src/routes/swagger.json /app/src/routes/swagger.json

RUN npm install pm2 -g

CMD [ "pm2-runtime","index.js" ]