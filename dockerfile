FROM node:16

WORKDIR /app

ADD . .

RUN yarn install

RUN yarn build

EXPOSE 3000

CMD ["yarn", "serve", "dist"]