import { CreateMeseroDto } from './create-mesero.dto';
declare const UpdateMeseroDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateMeseroDto>>;
export declare class UpdateMeseroDto extends UpdateMeseroDto_base {
    estado?: boolean;
}
export {};
