FROM node:9.11.1

WORKDIR /app

ADD . /app

RUN npm install

EXPOSE 80

CMD ["npm", "start"]