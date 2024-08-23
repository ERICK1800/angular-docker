FROM node:alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist/angular-docker/browser usr/share/nginx/html
COPY nginx.conf ect/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# docker build -t angular-docker:1.1 .
# docker run -p angular-docker:1.1

# docker build -t erick1800/angular-docker:1.3 .
# docker push erick1800/angular-docker:1.3
# docker run -p 8080:80 erick1800/angular-docker:1.3
