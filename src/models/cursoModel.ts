import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm"

@Entity()
export class TB_CURSO extends BaseEntity{
    @PrimaryGeneratedColumn()
    idCurso: number

    @Column()
    nombre: string

    @Column()
    descripcion: string

    @Column()
    catedratico: string

    @OneToMany(() => TB_CURSO, (curso) => curso.curso)
    curso: TB_CURSO
}

