import { Module } from '@nestjs/common';
import { MensajesWsService } from './mensajes-ws.service';
import { MensajesWsGateway } from './mensajes-ws.gateway';
import { SerieModule } from '../serie/serie.module';
//  'src/Serie/Serie.module';

@Module({
  providers: [MensajesWsGateway, MensajesWsService],
  imports:[SerieModule]
})
export class MensajesWsModule {}
