const app = require('express')
const delivery = require('../database/delivery/deliverySchema')
const port = 3000

app.get('/', async (req, res) => {
    const pk = await Parking.create({
        user:'tiago',
        email:'tiago2008.1@hotmail.com',
        password: '123456',
    
    })
});
app.listen(port, () => {
    console.log('api do Banco do Aplicação criada com sucesso ${port}')
});