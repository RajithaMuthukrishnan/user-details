FROM node:16

WORKDIR /usr/src/app/angular-app

COPY package*.json ./

RUN npm install

RUN chown -R /opt/app-root/src/.npm

EXPOSE 8080

CMD ["npm", "start"]
