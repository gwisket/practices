FROM node:20.2.0-alpine3.16

RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY app /home/node/app
RUN npm install

CMD ["node", "/home/node/app/server.js"]

