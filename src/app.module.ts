import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { HealthyFoodController } from './healthy_food/healthy_food.controller';
import { TrainingController } from './training/training.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'main'),
    }),
    ConfigModule.forRoot(),
  ],
  controllers: [
    AppController,
    HealthyFoodController,
    TrainingController,
  ],
  providers: [AppService],
})
export class AppModule {}
