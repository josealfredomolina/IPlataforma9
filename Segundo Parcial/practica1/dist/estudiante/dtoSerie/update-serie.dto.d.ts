import { CreateSerieDto } from './create-serie.dto';
declare const UpdateSerieDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateSerieDto>>;
export declare class UpdateSerieDto extends UpdateSerieDto_base {
    estado?: boolean;
}
export {};
