import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CursosOnlineService } from './cursos-online.service';
import { CreateCursoOnlineDto } from './dto/create-cursos-online.dto';
import { UpdateCursoOnlineDto } from './dto/update-cursos-online.dto';

@Controller('cursosOnline')
export class CursosOnlineController {
  constructor(private readonly cursosOnlineService: CursosOnlineService) {}

  @Post()
  create(@Body() createCursoOnlineDto: CreateCursoOnlineDto) {
    return this.cursosOnlineService.create(createCursoOnlineDto);
  }

  @Get()
  findAll() {
    return this.cursosOnlineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cursosOnlineService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCursoOnlineDto: UpdateCursoOnlineDto) {
    return this.cursosOnlineService.update(id, updateCursoOnlineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cursosOnlineService.remove(id);
  }

  
  @Post('horas-semanales')
  calcularHoras(@Body() body: { horasPorDia: number[] }) {
    return this.cursosOnlineService.calcularHoras(body.horasPorDia);
  }
}
