FROM node:14-alpine

WORKDIR /usr/src/client

COPY package*.json ./

RUN npm install

COPY . .

# CMD ["npm", "run", "build"]
CMD ["npm", "start"]
