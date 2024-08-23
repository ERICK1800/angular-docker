FROM node:alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]

# docker build -t angular-docker:1.1 .
# docker run -p angular-docker:1.1

# docker build -t erick1800/angular-docker:1.2 .
# docker run -p 4201:4200 erick1800/angular-docker:1.2
