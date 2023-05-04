import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('breakfast')
export class BreakfastController {
    @Get()
    BreakfastController(@Res() res: Response) {
    return res.render(
      'main.ejs',
      { path: './partials/src/breakfast.ejs' },
    );
  }
}
