const express = require('express');
const router = express.Router();
const controller = require('../controllers/maravilhosas-controller')
const cors = require('cors')

//get /maravilhosas

router.get("/maravilhosas", cors(), controller.getMaravilhosas);

//post /maravilhosas

router.post("/maravilhosas", cors(), controller.addMaravilhosa)

//get /maravilhosas/id

router.get("/maravilhosas/:id", cors(), controller.getMaravilhosaByID);

//put /maravilhosas/id

router.put("/maravilhosas/:id", cors(), controller.updateMaravilhosa);

//delete /maravilhosas/id

router.delete("/maravilhosas/:id", cors(), controller.deleteMaravilhosaByID);

module.exports = router;





