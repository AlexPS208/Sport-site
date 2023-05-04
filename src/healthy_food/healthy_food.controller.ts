import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('healthy_food')
export class HealthyFoodController {
    @Get()
    HealthyFoodController(@Res() res: Response) {
        res.render(
            'main.ejs',
            { path: './partials/src/healthy_food.ejs' }
        )
    }
}
