const imovel = require('../model/Imoveis');

module.exports = {
    async index(req,res){
        const imoveis = await imovel.find()
        res.json(imoveis);
    },
    async store(req,res){
        const {titulo,localizacao,quartos,pessoas,camas,suites,banheiros,video,imagens,regras,comodidades,valor} = req.body;
        let dataCreate = {};
        dataCreate = {
            titulo,
            localizacao,
            quartos,
            pessoas,
            camas,
            suites,
            banheiros,
            video,
            imagens,
            regras,
            comodidades,
            valor
        }
        const imoveis = await imovel.create(dataCreate)
        res.json(imoveis);
    },
    async detail(req,res){
        const { _id } = req.params;
        const imoveis = await imovel.findOne({_id});
        res.json(imoveis);
    },
    async delete(req,res){
        const { _id } = req.params;
        const imoveis = await imovel.findByIdAndDelete({_id});
        res.json(imoveis);
    },
    async update(req,res){
        const {_id,titulo,localizacao,quartos,pessoas,camas,suites,banheiros,video,imagens,regras,comodidades,valor} = req.body;
        let dataCreate = {};
        dataCreate = {
            titulo,
            localizacao,
            quartos,
            pessoas,
            camas,
            suites,
            banheiros,
            video,
            imagens,
            regras,
            comodidades,
            valor
        }
        const imoveis = await imovel.findByIdAndUpdate({_id},dataCreate,{new: true})
        res.json(imoveis);
    },
}