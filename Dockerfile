FROM nginx
LABEL Author="Urgen Tamang"
LABEL Project="CICD Bluescope"
COPY . /usr/share/nginx/html
