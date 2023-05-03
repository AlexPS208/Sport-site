import { Controller, Get, Render } from '@nestjs/common';

@Controller('breakfast')
export class BreakfastController {
    @Get()
    @Render('')
    BreakfastController() {

    }
}
