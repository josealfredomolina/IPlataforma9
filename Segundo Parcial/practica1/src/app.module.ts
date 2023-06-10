import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudianteModule } from './estudiante/estudiante.module';
import { MeseroModule } from './estudiante/mesero.module';
import { SerieModule } from './estudiante/serie.module';

@Module({
  imports: [EstudianteModule, MeseroModule, SerieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
