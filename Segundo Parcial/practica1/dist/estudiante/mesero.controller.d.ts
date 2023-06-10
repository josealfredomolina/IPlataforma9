import { MeseroService } from './mesero.service';
import { CreateMeseroDto } from './dtoMesero/create-mesero.dto';
import { UpdateMeseroDto } from './dtoMesero/update-meseo.dto';
import { Mesero } from './entities/mesero.entity';
export declare class MeseroController {
    private readonly meseroService;
    constructor(meseroService: MeseroService);
    create(createMesoerDto: CreateMeseroDto): Mesero;
    findAll(): Mesero[];
    findOne(id: number): Mesero;
    update(id: string, updateMeseroDto: UpdateMeseroDto): Mesero;
    remove(id: string): void;
}
