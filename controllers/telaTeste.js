module.exports = (app) =>{
    const telaTesteController = {
    renderizar(req, res){
        res.render('telaTeste');
    }
};
return telaTesteController;
}