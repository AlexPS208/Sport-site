import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('dinner')
export class DinnerController {
    @Get()
    DinnerController(@Res() res: Response) {
        return res.render(
            'main.ejs',
            { path: './partials/src/dinner.ejs' },
          );
    }
}
