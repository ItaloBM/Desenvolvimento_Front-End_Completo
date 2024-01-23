"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Veiculo {
}
class Automovel extends Veiculo {
    abrirPortaMalas() {
        console.log("Porta Malas aberto.");
    }
}
class Aeronave extends Veiculo {
    ContatarCentral() {
        console.log("Central na linha.");
    }
}

