# 使用官方 Node 镜像作为构建阶段
FROM node:18-alpine AS build

# 设置工作目录
WORKDIR /app

# 复制依赖文件
COPY package.json pnpm-lock.yaml ./

# 开启 corepack，安装依赖
RUN corepack enable && pnpm install --frozen-lockfile

# 复制项目文件
COPY . .

# 运行 Nuxt 静态生成，默认输出目录 .output/public
RUN pnpm generate

# 使用 nginx 镜像托管静态资源
FROM nginx:stable-alpine

# 拷贝构建好的静态资源
COPY --from=build /app/.output/public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
