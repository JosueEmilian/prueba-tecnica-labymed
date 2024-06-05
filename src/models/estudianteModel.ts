import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm"
import { TB_CURSO } from "./cursoModel"
import { TB_CURSO_ESTUDIANTE } from "./cursoestudianteModel"

@Entity()
export class TB_ESTUDIANTE extends BaseEntity{
    @PrimaryGeneratedColumn()
    idEstudiante: number

    @Column()
    nombre: string

    @Column()
    apellido: string

    @Column()
    nivel: string

    @Column()
    seccion: string

    @OneToMany(() => TB_ESTUDIANTE, (estudiante) => estudiante.curso)
    curso: TB_ESTUDIANTE
}

