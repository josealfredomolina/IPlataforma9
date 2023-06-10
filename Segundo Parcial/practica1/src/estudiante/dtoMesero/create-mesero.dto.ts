import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMeseroDto {
    @IsString()
    @IsNotEmpty()
    nombre:string;

    @IsString()
    @IsNotEmpty()
    sueldoBasico:string;
    
    @IsString()
    @IsNotEmpty()
    nivel:string;

}
