import {
  Module
} from '@nestjs/common';
import {
  AppController
} from './app.controller';
import {
  AppService
} from './app.service';
import {
  ServeStaticModule
} from '@nestjs/serve-static';
import {
  join
} from 'path';
import {
  ConfigModule
} from '@nestjs/config';
import { BreakfastController } from './breakfast/breakfast.controller';
import { LunchController } from './lunch/lunch.controller';
import { DinnerController } from './dinner/dinner.controller';

@Module({
  imports: [ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'main'),
    }),
    ConfigModule.forRoot()
  ],
  controllers: [AppController, BreakfastController, LunchController, DinnerController],
  providers: [AppService],
})
export class AppModule {}