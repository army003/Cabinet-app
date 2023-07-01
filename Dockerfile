# Intermediary nodejs container
FROM node:16-alpine AS builder

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . ./

RUN yarn build --mode development

FROM nginx:1.21.0

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist .
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
