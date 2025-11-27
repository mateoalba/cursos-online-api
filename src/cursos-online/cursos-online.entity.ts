import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cursos-online')
export class CursoOnline {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  codigo: number;

  @Column()
  titulo: string;

  @Column()
  subtitulo: string;

  @Column()
  descripcion: string;

  @Column()
  nivel: string;

  @Column()
  duracion_horas: string;

  @Column()
  costo: number;

  @Column()
  modalidad: string;

  @Column()
  fecha_inicio: string;

  @Column()
  estado: string;



  


}
