import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { SerieService } from './serie.service';
import { Serie } from './entities/serie.entity';
import { CreateSerieInput } from './dto/create-serie.input';
import { UpdateSerieInput } from './dto/update-serie.input';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Serie)
export class SerieResolver {
  constructor(private readonly serieService: SerieService) {}

  @Mutation(() => Serie)
  async createSerie(@Args('createSerieInput') createSerieInput: CreateSerieInput)
  :Promise<Serie> {
    return this.serieService.create(createSerieInput);
  }

  @Query(() => [Serie], { name: 'series' })
  async findAll():Promise<Serie[]> {
    return this.serieService.findAll();
  }

  @Query(() => Serie, { name: 'serie' })
  findOne(@Args('id', { type: () => ID}, ParseUUIDPipe ) id: string): Promise<Serie> {
    return this.serieService.findOne(id);
  }

  @Mutation(() => Serie)
  updateSerie(@Args('updateSerieInput') updateSerieInput: UpdateSerieInput): Promise<Serie> {
    return this.serieService.update(updateSerieInput.id, updateSerieInput);
  }


  @Mutation(() => Serie)
  removeSerie(@Args('id', { type: () => ID }) id: string): Promise<Serie> {
    return this.serieService.remove(id);
  }
}
