import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm"
import { TB_ESTUDIANTE } from "./estudianteModel"
import { TB_CURSO } from "./cursoModel"

@Entity()
export class TB_CURSO_ESTUDIANTE extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    idCurso: number

    @Column()
    idEstudiante: number

    
    @ManyToOne(() => TB_CURSO_ESTUDIANTE, (curso) => curso.cursos)
    cursos: [];

    @ManyToOne(() => TB_CURSO_ESTUDIANTE, (estudiante) => estudiante.estudiantes)
    estudiantes: [];
}

