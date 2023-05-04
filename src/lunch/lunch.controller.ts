import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('lunch')
export class LunchController {
    @Get()
    LunchController(@Res() res: Response) {
        res.render(
            'main.ejs', 
            { path: './partials/src/lunch.ejs' }
        )
    }
}
