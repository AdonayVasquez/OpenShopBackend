const mongoose = require('mongoose');

const bddConexion = async() => {
    try {
        await mongoose.connect('mongodb+srv://bdd_usuario:admin123@cluster0.wtzw7.mongodb.net/openshop', 
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('BDD conectada');
    } catch (error) {
        console.log(error);
        throw new Error('Error de conexion a BDD');        
    }
}

module.exports = {
    bddConexion
}