import { Module } from '@nestjs/common';
import { CursosOnlineController } from './cursos-online.controller';
import { CursosOnlineService } from './cursos-online.service';

@Module({
  controllers: [CursosOnlineController],
  providers: [CursosOnlineService]
})
export class CursosOnlineModule {}
