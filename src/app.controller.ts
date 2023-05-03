import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('main.ejs')
  root(): object {
    return {
      message: 'Hello there'
    };
  }
}