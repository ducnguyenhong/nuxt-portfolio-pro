# Dockerfile
FROM node:18

# Tạo thư mục làm việc
WORKDIR /app

# Sao chép package.json và package-lock.json
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install --legacy-peer-deps

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Xây dựng ứng dụng Nuxt
RUN npm run build

# Mở cổng 7000
EXPOSE 7000

# Lệnh chạy ứng dụng
CMD ["npm", "run", "start"]
