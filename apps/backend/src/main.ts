import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:5173',
      'http://localhost:5174',
      'https://task-manager-0d77.onrender.com',
      /^https:\/\/.*\.vercel\.app$/,
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  const configService = app.get(ConfigService);
  const PORT = process.env.PORT || configService.get<number>('PORT') || 4000;

  console.log(`Server starting on port ${PORT}`);
  await app.listen(PORT, '0.0.0.0');
}
bootstrap();
