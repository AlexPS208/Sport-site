import { Test, TestingModule } from '@nestjs/testing';
import { BreakfastController } from './breakfast.controller';

describe('BreakfastController', () => {
  let controller: BreakfastController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BreakfastController],
    }).compile();

    controller = module.get<BreakfastController>(BreakfastController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
