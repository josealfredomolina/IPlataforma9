import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

@InputType()
export class CreateSerieInput {
 

  @Field(()=>String )
  @IsNotEmpty()
  nombre:string;

  @Field(()=>String )
  @IsNotEmpty()
  clasificacion:string;



  @Field(()=>Boolean )
  @IsOptional()
  estado:boolean;

}
