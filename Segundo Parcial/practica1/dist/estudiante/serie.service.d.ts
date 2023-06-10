import { CreateSerieDto } from './dtoSerie/create-serie.dto';
import { UpdateSerieDto } from './dtoSerie/update-serie.dto';
import { Serie } from './entities/serie.entity';
export declare class SerieService {
    private serie;
    create(createSerieDto: CreateSerieDto): Serie;
    findAll(): Serie[];
    findOne(id: number): Serie;
    update(id: number, updateMeseroDto: UpdateSerieDto): Serie;
    remove(id: number): void;
}
