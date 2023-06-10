"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerieService = void 0;
const common_1 = require("@nestjs/common");
const serie_entity_1 = require("./entities/serie.entity");
let SerieService = class SerieService {
    constructor() {
        this.serie = [
            { id: 1, nombreSerie: 'molina', clasificacion: 'mayores' },
            { id: 2, nombreSerie: 'molina', clasificacion: 'mayores' },
        ];
    }
    create(createSerieDto) {
        const serie = new serie_entity_1.Serie();
        serie.id = Math.max(...this.serie.map(elemento => elemento.id), 0) + 1;
        serie.nombreSerie = createSerieDto.nombreSerie;
        serie.clasificacion = createSerieDto.clasificacion;
        this.serie.push(serie);
        return serie;
    }
    findAll() {
        return this.serie;
    }
    findOne(id) {
        const serie = this.serie.find(serie => serie.id === id);
        if (!serie)
            throw new common_1.NotFoundException(`ID ${id} not found`);
        return serie;
    }
    update(id, updateMeseroDto) {
        const { nombreSerie, clasificacion } = updateMeseroDto;
        const serie = this.findOne(id);
        if (nombreSerie)
            serie.nombreSerie = nombreSerie;
        if (clasificacion)
            serie.clasificacion = clasificacion;
        this.serie = this.serie.map(elemento => {
            if (elemento.id === id)
                return serie;
            return elemento;
        });
        return serie;
    }
    remove(id) {
        this.findOne(id);
        this.serie = this.serie.filter(elemento => elemento.id !== id);
    }
};
SerieService = __decorate([
    (0, common_1.Injectable)()
], SerieService);
exports.SerieService = SerieService;
//# sourceMappingURL=serie.service.js.map