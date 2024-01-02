const express = require('express');

class helperRoute {
    static createRoute=(manager) => {
        const router = express.Router();
        const name = manager.constructor.name;
       
        router.get('/', async (req, res) => {
            console.log(name + '.get');
            manager.get(req,res);
        });
        
        router.get('/:id', async (req, res) => { 
            console.log(name + '.getById');
            manager.getById(req.params.id,req,res);    
        });
        
        router.put('/', async (req, res) => {
            console.log(name + '.put');
            manager.put(req,res);
        });
        
        router.post('/', async (req, res) => {
            console.log(name + '.post');
            manager.post(req,res);
        });
        
        router.delete('/', async (req, res) => {
            console.log(name + '.deleteById');
            manager.deleteById(req.params.id,req,res);
        });

        return router;
    }
  }
 
  module.exports = helperRoute;