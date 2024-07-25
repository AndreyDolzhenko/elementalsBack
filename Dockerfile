FROM node:alpine

# Install bash

WORKDIR /app

COPY package.json yarn.lock ./

RUN npm i

COPY . .

CMD ["npm", "start"]

EXPOSE 5000