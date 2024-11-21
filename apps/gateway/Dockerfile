FROM node:20.16.0 As development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build gateway

FROM node:20.16.0 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY --from=development /app/dist ./dist
COPY --from=development /app/prisma ./prisma
COPY --from=development /app/migration.sh ./migration.sh

RUN npx prisma generate

RUN chmod +x /app/migration.sh
ENTRYPOINT ["/app/migration.sh"]

CMD ["node", "dist/apps/gateway/main"]
