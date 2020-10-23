//Nomes dos métodos para implementação:
const models = require("../models/maravilhosas-models")


//getMaravilhosas

const getMaravilhosas = ( request, response) => {
    //response.status(200).send(maravilhosas)
    const { error, data } = model.selectAllData()
    if ( error === null) {
                res.status(200).json(data);
        }else{
            res.status(400).json({"message": error.message});
        }
    }



      //response.status(200).send(models.selectAllData())



//getMaravilhosaById

    const getMaravilhosaByID = (request, response) => {
        const id = request.params.id
        const dadoEncontrado = model.selectDataByID(id)
        
        if(dadoEncontrado) {
            response.status(200).send(dadoEncontrado)
        } else {
        
            response.status(404).send({message: 'Não localizei a maravilhosa.'})
        }
    
    } 
    

//addMaravilhosa 

const addMaravilhosa = ( request, response) => {
    const {error} = model.insertData(request.body)
    if(error === null) {
        response.status(201).json("Maravilhosa adicionada com sucesso");
    } else {
        response.status(400).json({"message": error.message})
    }
}

//updateMaravilhosa 


const updateMaravilhosa = ( request, response) => {
    const {error, data} = model.updateData(request.params.id, request.body  )
     if(error=== null) {
         response.status(201).send(data)
    } else {
        response.status(404).json({"message": error.message})
    }
}

//deleteMaravilhosa

const deleteMaravilhosaByID = ( request, response) => {
    const {error} = model.deleteData(request.params.id)
    if(error===null) {
        response.status(204).send("Maravilhosa removida com sucesso.")
    } else {
        response.status(404).json({"message": error.message})
    }
}

module.exports = { 
    getMaravilhosas,
    getMaravilhosaByID,
    addMaravilhosa,
    updateMaravilhosa,
    deleteMaravilhosaByID
}
