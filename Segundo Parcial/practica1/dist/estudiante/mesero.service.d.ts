import { CreateMeseroDto } from './dtoMesero/create-mesero.dto';
import { UpdateMeseroDto } from './dtoMesero/update-meseo.dto';
import { Mesero } from './entities/mesero.entity';
export declare class MeseroService {
    private mesero;
    create(createMeseroDto: CreateMeseroDto): Mesero;
    findAll(): Mesero[];
    findOne(id: number): Mesero;
    update(id: number, updateMeseroDto: UpdateMeseroDto): Mesero;
    remove(id: number): void;
}
