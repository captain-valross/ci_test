FROM node:18.17.1
ENV TZ Europe/Stockholm

WORKDIR /src

COPY . .

RUN npm ci
RUN npm run build

ENTRYPOINT [ "node", "./dist/index.js" ]
