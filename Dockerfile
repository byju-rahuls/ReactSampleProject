FROM node:19-alpine as builder

WORKDIR /clc
COPY package.json .
RUN npm install

COPY . .
EXPOSE 3000
CMD ["npm","start"]