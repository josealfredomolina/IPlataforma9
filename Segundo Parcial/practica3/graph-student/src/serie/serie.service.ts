import { Injectable , NotFoundException} from '@nestjs/common';
import { CreateSerieInput } from './dto/create-serie.input';
import { UpdateSerieInput } from './dto/update-serie.input';
import { Serie } from './entities/serie.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SerieService {
  constructor( 
    @InjectRepository(Serie)
    private readonly seriesRepository:Repository<Serie> ){}

  async create(createSerieInput: CreateSerieInput): Promise<Serie>  {
    const newSerie= this.seriesRepository.create(createSerieInput);
    return await this.seriesRepository.save(newSerie); 
  }

  async findAll(): Promise<Serie[]> {
    return this.seriesRepository.find();
  }

  async findOne(id: string): Promise<Serie> {
     const serie= await  this.seriesRepository.findOneBy({id});
     if (!serie) throw new NotFoundException(`Not found`)
     return serie;
  }

  async update(id: string, updateSerieInput: UpdateSerieInput): Promise<Serie> {
    
    const serie = await this.seriesRepository.preload(updateSerieInput);
    if (!serie) throw new NotFoundException(`Not found`)
    return this.seriesRepository.save(serie);

  }

  async remove(id: string): Promise<Serie> {

    const serie= await  this.findOne(id);

     await this.seriesRepository.update({id:id},{estado:false  });

    //await this.seriesRepository.remove(serie);

    return {...serie, id};

  }
}
