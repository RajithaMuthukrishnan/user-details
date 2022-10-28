# FROM node:16

# WORKDIR /usr/src/app/express-api

# COPY package*.json ./

# RUN npm install

# EXPOSE 8081

# CMD ["npm", "run", "dev"]


FROM node:16
WORKDIR /usr/src/app/express-api
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 8081
CMD ["npm", "run", "prod"]
