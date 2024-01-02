const helperArray = require("../helper/helperArray");
const helperJsonFile = require("../helper/helperJsonFile");

class managerDeposit {
   static Data;

   constructor(){
        this.getData();
   }

   async getData(){
       if(!managerDeposit.Data) 
           await this.refresh();
       return managerDeposit.Data;
   }

    async refresh(){
        managerDeposit.Data = await helperJsonFile.readPath(`./back/data/deposit.json`);
    }

    async get(req, res){
        const data = await this.getData();
        res.send(data);
    }
    
    async getById(id, req, res){
        const obj = managerDeposit.Data.find(x=> x.Id ===id);
        res.send(obj);
    }
      
    async put(req, res){
        managerDeposit.Data = managerDeposit.Data.map(x=> x.Id === req.body.Id ? req.body : x);
        res.send('Put OK');
    }
      
    async post(req, res){
        this.insert(req.body);
        res.send('Post OK');
    }
    async insert(obj){
        managerDeposit.Data.push(obj);
    }
      
    async deleteById(id, req, res){
        managerDeposit.Data = managerDeposit.Data.filter(x=> x.Id !==id);
        res.send('DeleteById OK');
    }
  }
   
  module.exports = managerDeposit;
  