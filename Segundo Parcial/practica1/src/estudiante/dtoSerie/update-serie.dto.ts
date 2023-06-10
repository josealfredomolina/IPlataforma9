import { PartialType } from '@nestjs/mapped-types';
import { CreateSerieDto } from './create-serie.dto';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateSerieDto extends PartialType(CreateSerieDto) {
    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}
