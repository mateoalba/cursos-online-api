import { Test, TestingModule } from '@nestjs/testing';
import { CursosOnlineController } from './cursos-online.controller';

describe('CursosOnlineController', () => {
  let controller: CursosOnlineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CursosOnlineController],
    }).compile();

    controller = module.get<CursosOnlineController>(CursosOnlineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
