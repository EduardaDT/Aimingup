import fastifyCookie from '@fastify/cookie';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

import { AppModule } from './app.module';

async function bootstrap() {
  const fastify = new FastifyAdapter({ logger: true });

  const app = await NestFactory.create<NestFastifyApplication>(AppModule, fastify);

  await app.register(fastifyCookie, {
    secret: process.env.JWT_SECRET, // for cookies signature
  });

  app.enableShutdownHooks();

  app.enableCors({
    methods: ['GET', 'POST'],
    origin: ['https://defischool.atitude247.com.br'],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(4000, '0.0.0.0');
}
bootstrap();
