FROM node:18-alpine AS build

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN corepack enable \
  && corepack prepare pnpm@8.14.3 --activate \
  && pnpm install --frozen-lockfile

COPY . .

RUN pnpm run generate

FROM nginx:stable-alpine

COPY --from=build /app/.output/public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
