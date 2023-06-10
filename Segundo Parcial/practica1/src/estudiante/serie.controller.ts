import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { SerieService } from './serie.service';
import { CreateSerieDto } from './dtoSerie/create-serie.dto'
import { UpdateSerieDto } from './dtoSerie/update-serie.dto';
import { Serie } from './entities/serie.entity';

@Controller('serie')
export class SerieController {
  constructor(private readonly SerieService: SerieService) {}

  @Post()
  create(@Body() createSerieDto: CreateSerieDto) {
    return this.SerieService.create(createSerieDto);
  }

  @Get()
  findAll() : Serie[] {
    return this.SerieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.SerieService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateSerieDto: UpdateSerieDto) {
    return this.SerieService.update(+id, UpdateSerieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.SerieService.remove(+id);
  }
}
