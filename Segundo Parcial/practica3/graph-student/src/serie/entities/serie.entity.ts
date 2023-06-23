import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'series'})
@ObjectType()
export class Serie {
  @PrimaryGeneratedColumn('uuid')
  @Field(()=> ID)
  id:string;
  


  @Column()
  @Field(()=>String)
  nombre:string;

  @Column()
  @Field(()=>String)
  clasificacion:string;


  @Column()
  @Field(()=>Boolean)
  estado:boolean;
}
