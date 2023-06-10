"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeseroService = void 0;
const common_1 = require("@nestjs/common");
const mesero_entity_1 = require("./entities/mesero.entity");
let MeseroService = class MeseroService {
    constructor() {
        this.mesero = [
            { id: 1, nombre: 'Uno', sueldoBasico: '10', nivel: '1' },
            { id: 2, nombre: 'Dos', sueldoBasico: '20', nivel: '2' },
        ];
    }
    create(createMeseroDto) {
        const mesero = new mesero_entity_1.Mesero();
        mesero.id = Math.max(...this.mesero.map(elemento => elemento.id), 0) + 1;
        mesero.nombre = createMeseroDto.nombre;
        mesero.sueldoBasico = createMeseroDto.sueldoBasico;
        mesero.nivel = createMeseroDto.nivel;
        this.mesero.push(mesero);
        return mesero;
    }
    findAll() {
        return this.mesero;
    }
    findOne(id) {
        const mesero = this.mesero.find(mesero => mesero.id === id);
        if (!mesero)
            throw new common_1.NotFoundException(`ID ${id} not found`);
        return mesero;
    }
    update(id, updateMeseroDto) {
        const { nombre, sueldoBasico, nivel } = updateMeseroDto;
        const mesero = this.findOne(id);
        if (nombre)
            mesero.nombre = nombre;
        if (sueldoBasico)
            mesero.sueldoBasico = sueldoBasico;
        if (nivel)
            mesero.nivel = nivel;
        this.mesero = this.mesero.map(elemento => {
            if (elemento.id === id)
                return mesero;
            return elemento;
        });
        return mesero;
    }
    remove(id) {
        this.findOne(id);
        this.mesero = this.mesero.filter(elemento => elemento.id !== id);
    }
};
MeseroService = __decorate([
    (0, common_1.Injectable)()
], MeseroService);
exports.MeseroService = MeseroService;
//# sourceMappingURL=mesero.service.js.map