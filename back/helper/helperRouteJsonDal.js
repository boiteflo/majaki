const express = require('express');
const helperArray = require("./helperArray");
const helperJsonFile = require("./helperJsonFile");


class helperRouteJsonDal {
    static createDalRoute=(name, defaultValue, forceOverride) => {
        const router = express.Router();


        const initValue = defaultValue ? defaultValue : [];
        let data = helperArray.setId(initValue);
        data = helperArray.initOrderIndex(data);


        if(forceOverride || !helperJsonFile.exists(name)){
            helperJsonFile.save(name, data);
        } else {
            helperJsonFile.read(name).then(value => {
                data = helperArray.setId(value);
                data = helperArray.initOrderIndex(data);
            });
        }
       
        router.get('/', async (req, res) => {
            console.log(name + '.get');
            res.send(data);
        });


        router.get('/:id', async (req, res) => {
            console.log(name + '.getById');
            res.send(helperArray.getElementByProperty(data, req.params.id, "id"));
        });


        router.get('/:name/:value', async (req, res) => {
            console.log(name + '.getByNameAndValue');
            res.send(helperArray.getElementsByProperty(data, req.params.value, req.params.name));
        });
       
        router.post('/', async (req, res) => {
            console.log(name + '.post');
            data.push(req.body);
            helperJsonFile.save(name, data);
            res.status(201).send();
        });
       
        router.delete('/:id', async (req, res) => {
            console.log(name + '.delete');
            helperArray.removeElementByProperty(data, req.params.id, "id");
            helperJsonFile.save(name, data);
            res.status(200).send();
        });


        return router;
    }
  }
 
  module.exports = helperRouteJsonDal;