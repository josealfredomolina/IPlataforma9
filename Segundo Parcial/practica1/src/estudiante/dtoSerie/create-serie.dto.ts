import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSerieDto {
    @IsString()
    @IsNotEmpty()
    nombreSerie:string;

    @IsString()
    @IsNotEmpty()
    clasificacion:string;
}
