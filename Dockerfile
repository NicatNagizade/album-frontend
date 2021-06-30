FROM node:16-alpine

WORKDIR /usr/src/app/my-app

ENV PATH /usr/src/app/my-app/node_modules/.bin:$PATH

COPY . .

RUN npm install

CMD ["npm", "start"]