FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm init

COPY . .

EXPOSE 8080

CMD ["node" , "index.js"]