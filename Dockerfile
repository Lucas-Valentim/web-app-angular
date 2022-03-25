FROM nginx:alpine
COPY ./dist/web-app-angular/ /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf