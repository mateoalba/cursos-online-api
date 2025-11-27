import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CursoOnline } from './cursos-online.entity';
import { CreateCursoOnlineDto } from './dto/create-cursos-online.dto';
import { UpdateCursoOnlineDto } from './dto/update-cursos-online.dto';

@Injectable()
export class CursosOnlineService {
  constructor(
    @InjectRepository(CursoOnline)
    private readonly cursoonlineRepository: Repository<CursoOnline>,
  ) {}

  create(createCursoOnlineDto: CreateCursoOnlineDto) {
    const cursoonline = this.cursoonlineRepository.create(createCursoOnlineDto);
    return this.cursoonlineRepository.save(cursoonline);
  }

  findAll() {
    return this.cursoonlineRepository.find();
  }

  findOne(id: string) {
    return this.cursoonlineRepository.findOne({ where: { id } });
  }

  async update(id: string, updateCursoOnlineDto: UpdateCursoOnlineDto) {
    const cursoonline = await this.cursoonlineRepository.findOne({ where: { id } });
    if (!cursoonline) return null;
    Object.assign(cursoonline, updateCursoOnlineDto);
    return this.cursoonlineRepository.save(cursoonline);
  }

  async remove(id: string) {
    const cursoonline = await this.cursoonlineRepository.findOne({ where: { id } });
    if (!cursoonline) return null;
    return this.cursoonlineRepository.remove(cursoonline);
  }




  calcularHoras(horasPorDia: number[]) {
    if (!Array.isArray(horasPorDia) || horasPorDia.length !== 7) {
      return { error: 'El arreglo horasPorDia debe tener exactamente 7 números.' };
    }

    let totalHoras = 0;
    for (let i = 0; i < horasPorDia.length; i++) {
      totalHoras += horasPorDia[i];
    }

    const promedio = totalHoras / 7;

    let mensaje = '';
    if (promedio < 1) mensaje = 'Estás estudiando muy poco';
    else if (promedio >= 1 && promedio <= 3) mensaje = 'Buen ritmo de estudio';
    else mensaje = 'Excelente dedicación';

    return {
      totalHoras,
      promedio: Number(promedio.toFixed(2)),
      mensaje,
    };
  }


  evaluarAprobacion(notas: number[], notaMinima: number) {
  if (!Array.isArray(notas) || notas.length < 3 || notas.length > 5) {
    return { error: 'El arreglo notas debe tener entre 3 y 5 valores numéricos.' };
  }

  if (typeof notaMinima !== 'number') {
    return { error: 'notaMinima debe ser un número.' };
  }

  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }

  const promedio = suma / notas.length;

  const estado = promedio >= notaMinima ? 'APROBADO' : 'REPROBADO';
  return {
    notas,
    notaMinima,
    promedio: Number(promedio.toFixed(2)),
    estado,
  };
}

}
