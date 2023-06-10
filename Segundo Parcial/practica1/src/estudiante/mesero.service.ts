import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMeseroDto } from './dtoMesero/create-mesero.dto';
import { UpdateMeseroDto } from './dtoMesero/update-meseo.dto';
import { Mesero } from './entities/mesero.entity';

@Injectable()
export class MeseroService {

  private mesero: Mesero[]=[
    {id:1 , nombre:'Uno', sueldoBasico:'10', nivel:'1'},
    {id:2 , nombre:'Dos', sueldoBasico:'20', nivel:'2'},
  ]

  create(createMeseroDto: CreateMeseroDto) {
    const mesero = new Mesero();
    mesero.id=  Math.max( ... this.mesero.map(elemento => elemento.id),0 )+1 ;
    mesero.nombre= createMeseroDto.nombre;
    mesero.sueldoBasico= createMeseroDto.sueldoBasico;
    mesero.nivel= createMeseroDto.nivel;
    this.mesero.push(mesero);
    return mesero;
  }

  findAll() : Mesero[] {
    return this.mesero;
  }

  findOne(id: number) {
    const mesero =  this.mesero.find(mesero=> mesero.id===id);
    if (!mesero) throw new NotFoundException(`ID ${id} not found`)
    return mesero;
  }

  update(id: number, updateMeseroDto: UpdateMeseroDto) {
    const { nombre, sueldoBasico, nivel   } = updateMeseroDto;
    const mesero = this.findOne(id);
    if (nombre) mesero.nombre= nombre;
    if (sueldoBasico) mesero.sueldoBasico= sueldoBasico;
    if (nivel) mesero.nivel= nivel;
    this.mesero =  this.mesero.map( elemento=> {
      if (elemento.id===id) return mesero;
      return elemento;
    } )

    return mesero;

  }

  remove(id: number) {
    this.findOne(id);
    this.mesero =  this.mesero.filter(elemento=> elemento.id!== id);
  }
}
