import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Serie {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    
   

    @Column('varchar',{
        unique:true
    })
    nombre:string;

    @Column('text', {nullable:true})
    clasificacion:string;


    @Column('boolean', {default:true})
    estado:boolean;
}
