FROM node:18-alpine AS base

WORKDIR /app

ARG CORE_API_URL
ARG CLIENT_KEY
ENV CORE_API_URL=$CORE_API_URL
ENV CLIENT_KEY=$CLIENT_KEY

COPY ./.next/standalone/ /app/
COPY ./.next/static /app/.next/static
COPY ./messages /app/
COPY ./public /app/public

EXPOSE 3000

CMD ["node", "server.js"]
