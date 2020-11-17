# docker build -f Dockerfile -t driver-ratings-client .
# docker run --rm -it -p 8080:80 driver-ratings-client
# http://localhost:8080
FROM node:12.18.1 as builder
WORKDIR /app
COPY /build /app

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app .

ENTRYPOINT ["nginx", "-g", "daemon off;"]