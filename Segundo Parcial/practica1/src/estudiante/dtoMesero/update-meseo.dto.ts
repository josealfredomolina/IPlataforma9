import { PartialType } from '@nestjs/mapped-types';
import { CreateMeseroDto } from './create-mesero.dto';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateMeseroDto extends PartialType(CreateMeseroDto) {
    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}
