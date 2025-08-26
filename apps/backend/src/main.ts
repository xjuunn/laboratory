import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from '@laboratory/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.backend_port ?? 8080);
}
bootstrap();
