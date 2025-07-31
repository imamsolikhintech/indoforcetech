# build stage
FROM node:18-alpine3.21 as build-stage
WORKDIR /app
RUN node -v
VOLUME /app/node_modules
COPY ./package.json package.json
RUN npm install
COPY . .
COPY ./.env.pos .env
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage

ENV TZ=Asia/Jakarta
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY --from=build-stage /app/dist /usr/share/nginx/html
# Copy built static files and nginx configuration
# COPY ./dist /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/nginx.conf
COPY ./config/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]