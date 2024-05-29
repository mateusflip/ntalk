module.exports = (app) =>{
    const {telaTeste} = app.controllers;
    app.get('/telaTeste', telaTeste.renderizar);
}