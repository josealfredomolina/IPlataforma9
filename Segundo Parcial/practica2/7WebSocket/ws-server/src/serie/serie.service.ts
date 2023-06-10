import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { Serie } from './entities/serie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SerieService {
  private readonly logger = new Logger('SerieService');

  constructor( 
    @InjectRepository(Serie) 
    private readonly serieRepository: Repository<Serie>,

    ){}

  
  async create(createSerieDto: CreateSerieDto) {
    try {
      const serie =  this.serieRepository.create(createSerieDto);
      await this.serieRepository.save(serie);
      return serie;
    } catch (error) {
      console.log(error)
      if (error.code==='23505')
        throw new BadRequestException(error.detail)
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado')
    }
    
  }

  findAll() {
    return this.serieRepository.find({});
  }

  async findOne(id: string) {
    const serie= await  this.serieRepository.findOneBy ({ id });
    if (!serie)
      throw new NotFoundException(`Serie ${id} no encontrado`);
    return serie;

  }

  async update(id: string, updateSereiDto: UpdateSerieDto) {
    const serie = await this.serieRepository.preload({
      id: id,
      ...updateSereiDto
    });
    if (!serie) throw new NotFoundException(`Serie ${id} no encontrado`)

    try {
      await  this.serieRepository.save(serie)
      return serie;
      
    } catch (error) {
      console.log(error)
    }

  }

  async remove(id: string) {
    const serie = await this.findOne(id);
    await this.serieRepository.remove(serie);

  }
  prueba():String[]{
    return ['uno','dos','tres'];
  }
}

