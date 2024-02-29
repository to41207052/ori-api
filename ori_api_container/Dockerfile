# docker build -f ./container/Dockerfile -t theory-api-st-repository .
FROM debian:stable-slim

RUN apt-get update && \
  apt-get -y upgrade && \
  DEBIAN_FRONTEND=noninteractive apt-get install -y -qq --no-install-recommends \
  iputils-ping ca-certificates gettext-base curl && \
  curl -o nodejs.deb https://deb.nodesource.com/node_14.x/pool/main/n/nodejs/nodejs_14.16.1-deb-1nodesource1_amd64.deb && \
  apt install -y ./nodejs.deb && \
  rm nodejs.deb && \
  apt-get clean && \
  rm -rf /var/cache/apt/ && \
  rm -rf /var/lib/apt/lists/ && \
  ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime
WORKDIR /app
COPY . /app
RUN rm -rf /app/node_modules && \
  rm -rf /aws && \
  rm -rf /dist && \
  rm -rf /.vscode && \
  npm ci && \
  npm run build
ENV NODE_ENV=staging
CMD [ "npm", "run", "start:st"]