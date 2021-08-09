import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const microserviceOptions = {
    name: 'SEAGAME_TEST_SERVICE',
    transport: Transport.REDIS,
    options: {
      url: 'redis://localhost:6379',
    },
  };
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  // Web App
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  await app.listen();
}
bootstrap();
