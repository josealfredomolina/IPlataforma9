import { Module } from '@nestjs/common';
import { SerieService } from './serie.service';
import { SerieResolver } from './serie.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Serie } from './entities/serie.entity';


@Module({
  providers: [SerieResolver, SerieService],
  imports:[
    TypeOrmModule.forFeature([Serie])
  ]
})
export class SerieModule {}
