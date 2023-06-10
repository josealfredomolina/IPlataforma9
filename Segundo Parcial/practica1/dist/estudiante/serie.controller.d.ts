import { SerieService } from './serie.service';
import { CreateSerieDto } from './dtoSerie/create-serie.dto';
import { UpdateSerieDto } from './dtoSerie/update-serie.dto';
import { Serie } from './entities/serie.entity';
export declare class SerieController {
    private readonly SerieService;
    constructor(SerieService: SerieService);
    create(createSerieDto: CreateSerieDto): Serie;
    findAll(): Serie[];
    findOne(id: number): Serie;
    update(id: string, UpdateSerieDto: UpdateSerieDto): Serie;
    remove(id: string): void;
}
