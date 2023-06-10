import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSerieDto } from './dtoSerie/create-serie.dto';
import { UpdateSerieDto } from './dtoSerie/update-serie.dto';
import { Serie } from './entities/serie.entity';

@Injectable()
export class SerieService {

  private serie: Serie[]=[
    {id:1 , nombreSerie:'molina', clasificacion:'mayores'},
    {id:2 , nombreSerie:'molina', clasificacion:'mayores'},
  ]

  create(createSerieDto: CreateSerieDto) {
    const serie = new Serie();
    serie.id=  Math.max( ... this.serie.map(elemento => elemento.id),0 )+1 ;
    serie.nombreSerie= createSerieDto.nombreSerie;
    serie.clasificacion= createSerieDto.clasificacion;
    this.serie.push(serie);
    return serie;
  }

  findAll() : Serie[] {
    return this.serie;
  }

  findOne(id: number) {
    const serie =  this.serie.find(serie=> serie.id===id);
    if (!serie) throw new NotFoundException(`ID ${id} not found`)
    return serie;
  }

  update(id: number, updateMeseroDto: UpdateSerieDto) {
    const { nombreSerie, clasificacion  } = updateMeseroDto;
    const serie = this.findOne(id);
    if (nombreSerie) serie.nombreSerie= nombreSerie;
    if (clasificacion) serie.clasificacion= clasificacion;
    this.serie =  this.serie.map( elemento=> {
      if (elemento.id===id) return serie;
      return elemento;
    } )

    return serie;

  }

  remove(id: number) {
    this.findOne(id);
    this.serie =  this.serie.filter(elemento=> elemento.id!== id);
  }
}
