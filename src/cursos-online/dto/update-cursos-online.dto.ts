import { IsDate, IsNumber, IsString } from 'class-validator';

export class UpdateCursoOnlineDto {
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

  @IsDate()
  duracion_horas: Date;

  @IsNumber()
  costo: number;

  @IsString()
  modalidad: string;

  @IsDate()
  fecha_inicio: Date;

  @IsString()
  estado: string;
}
