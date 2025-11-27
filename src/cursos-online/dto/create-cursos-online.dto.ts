import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateCursoOnlineDto {
  @IsString()
  name: string;

  @IsNumber()
  codigo: number;

  @IsString()
  titulo: string;

  @IsString()
  subtitulo: string;

  @IsString()
  descripcion: string;

  @IsString()
  nivel: string;

  @IsString()
  duracion_horas: string;

  @IsNumber()
  costo: number;

  @IsString()
  modalidad: string;

  @IsString()
  fecha_inicio: string;

  @IsString()
  estado: string;
}
