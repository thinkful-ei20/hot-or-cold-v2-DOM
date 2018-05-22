FROM node:9.11.1

WORKDIR /app

ADD . /app

RUN npm install

CMD ["npm", "start"]