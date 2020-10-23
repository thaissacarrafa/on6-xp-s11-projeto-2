// selectAllData
const data = require('../data/data.json')
const selectAllData = () => data


//selectDataById
const selectDataById = (id) => {
    const databyID = data.find(item => item.id == id) 
    if (databyID){
    return {databyID}
} else {
    return {message:"Dado não encontrado"}
}
}
 
//insertData

const insertData = ( newMaravilhosa) => {
    const maravilhosaFound = allData.find(maravilhosa => maravilhosa.name == newMaravilhosa.name)     
    
    if (!newMaravilhosa.id) {
        newMaravilhosa.id = Math.random().toString(36).substr(-8)
    }
 
    if(maravilhosaFound) {
       return {error: {message: "Ops, registro duplicado"}} 
    } else {
        fs.writeFileSync('./src/data/data.json', JSON.stringify([...allData, newMaravilhosa]), 'utf8', (err) => {
            if (err) {
                console.log(err)
            }
        })
    
        return {error: null}
    }
}

//updateData
const updateData = (id, dataToUpdate) => {
    const maravilhosaId = id
    const maravilhosaFound = allData.find(item => item.id == maravilhosaId) 
    const maravilhosaIndex = allData.indexOf(maravilhosaFound) 

    if (maravilhosaIndex >= 0) { 
        allData.splice(maravilhosaIndex, 1, dataToUpdate)
        fs.writeFileSync('./src/data/data.json', JSON.stringify([allData]), 'utf8', (err) => {
            if (err) {
                console.log(err)
            }
        })

        return {error: null, data: selectDataById(id)}
    } else {
        return {error: {message: "Ops, não encontrei esse registro para poder alterá-lo"}, data: null}
    }
}
//deleteData */

const deleteData = (id) => {
    const maravilhosaId = id
    const maravilhosaFound = allData.find(item => item.id == maravilhosaId) 
    const deleteMaravilhosaByID = allData.indexOf(maravilhosaFound) 



    if (deleteMaravilhosaByID >= 0) { 
        allData.splice(deleteMaravilhosaByID, 1)
        fs.writeFileSync('./src/data/data.json', JSON.stringify([allData]), 'utf8', (err) => {
            if (err) {
                console.log(err)
            }
        })
        return {error: null}
    } else {
        return {error: {message: "Ops, não encontrei esse registro para poder deletá-lo"}}
    }
}

module.exports =  {
    selectAllData,
    selectDataById,
    insertData, 
    updateData, 
    deleteData
}





/*
router.post("/maravilhosas", cors(), controller.addMaravilhosa)
const creatPost = (request, response) => {
    let { title, content, tags } = request.body;

    let newPost = {
        id: helper.getId(postagens),
        createDate: new Date().toString(),
        title: title,
        content: content,
        tags: tags
     */ 
