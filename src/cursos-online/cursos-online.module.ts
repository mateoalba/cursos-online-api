import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursosOnlineService } from './cursos-online.service';
import { CursosOnlineController } from './cursos-online.controller';
import { CursoOnline } from './cursos-online.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CursoOnline])],
  controllers: [CursosOnlineController],
  providers: [CursosOnlineService],
})
export class CursosOnlineModule {}
