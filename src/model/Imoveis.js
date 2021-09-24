const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    titulo: [],
    imagens: [],
    localizacao: String,
    quartos: Number,
    pessoas: Number,
    suites: {
        total: Number,
        camas: Number,
        casal: Number,
        solteiro: Number
    },
    banheiros: Number,
    video: String,
    regras: [
        ["É permitido crianças (0 - 12 anos)?", Boolean],
        ["É permitido fumar?", Boolean]
        ["É permitido eventos?", Boolean],
        ["Horários para saída?", String],
        ["É permitido bebês?", Boolean],
        ["Idade mínima para fazer reserva?", Number],
        ["É permitido animais?", Boolean],
        ["Horários para chegada", String],
        ["mais", String],
    ],
    comodidades: [],
    valor: [],
});

const imovel = mongoose.model('Imovel',DataSchema);
module.exports = imovel;