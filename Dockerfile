FROM node:18-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY /app/. ./
EXPOSE 5000
CMD ["npm", "run", "pm2"]
