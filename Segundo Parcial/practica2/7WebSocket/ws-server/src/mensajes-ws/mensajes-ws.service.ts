import { Injectable } from '@nestjs/common';
import {Socket} from 'socket.io'
import { Serie } from '../serie/entities/serie.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SerieService } from 'src/serie/serie.service';

interface ConnectedClients {
    [id:string]: {
       socket: Socket,
       serie: Serie
    }
}

@Injectable()
export class MensajesWsService {
    private connectedClients: ConnectedClients={}

    constructor( @InjectRepository(Serie)
     private readonly serieRepository: Repository<Serie>,
     private readonly serieService: SerieService
      ){}

    async registerClient(client:Socket, name: string){
        console.log(this.serieService.prueba());
        const serie =await  this.serieRepository.findOneBy({ nombre: name });
        if (!serie) throw new Error('Serie no encontrada');
        if (!serie.estado) throw new Error('No activo');

        
        this.connectedClients[client.id]= {socket:client, serie: serie};
    }
    removeClient(clientId:string){
        delete this.connectedClients[clientId];
    }
    getConnectedClients():string[]{
        // return Object.keys(this.connectedClients).length;
        // console.log(this.connectedClients)
         return Object.keys(this.connectedClients);
    }
    getStudentFullName(id:string){
        return this.connectedClients[id].serie.nombre;
    }
}
