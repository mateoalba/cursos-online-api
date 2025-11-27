import { Test, TestingModule } from '@nestjs/testing';
import { CursosOnlineService } from './cursos-online.service';

describe('CursosOnlineService', () => {
  let service: CursosOnlineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CursosOnlineService],
    }).compile();

    service = module.get<CursosOnlineService>(CursosOnlineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
