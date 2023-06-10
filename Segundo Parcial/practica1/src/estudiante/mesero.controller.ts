import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { MeseroService } from './mesero.service';
import { CreateMeseroDto } from './dtoMesero/create-mesero.dto'
import { UpdateMeseroDto } from './dtoMesero/update-meseo.dto';
import { Mesero } from './entities/mesero.entity';

@Controller('mesero')
export class MeseroController {
  constructor(private readonly meseroService: MeseroService) {}

  @Post()
  create(@Body() createMesoerDto: CreateMeseroDto) {
    return this.meseroService.create(createMesoerDto);
  }

  @Get()
  findAll() : Mesero[] {
    return this.meseroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.meseroService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMeseroDto: UpdateMeseroDto) {
    return this.meseroService.update(+id, updateMeseroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.meseroService.remove(+id);
  }
}
