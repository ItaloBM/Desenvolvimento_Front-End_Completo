export {};

class Veiculo {
    Modelo!: string;
    Combustivel!: number;
    qtdPassageiros!: number;
}

class Automovel extends Veiculo {
    eFlex!: boolean;
    qtdAgua!: number;
    sit4rodas!: string[];
    abrirPortaMalas(): void {
        console.log("Porta Malas aberto.");
    }
}

class Aeronave extends Veiculo {
    sitHelice!: string;
    qtdAeromocas!: number;
    sitTdP!: string;
    ContatarCentral(): void {
        console.log("Central na linha.");
    }
}