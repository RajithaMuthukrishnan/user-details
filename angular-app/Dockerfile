FROM node:16

WORKDIR /usr/src/app/angular-app

COPY package*.json ./

RUN npm install

RUN chown -R 1000660000:0 "npm"

EXPOSE 8080

CMD ["npm", "start"]
