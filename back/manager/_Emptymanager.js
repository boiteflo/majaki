
class managerEmpty {
    static async get(req, res){
      console.log('get empty');
    }
    
    static async getById(id, req, res){
        console.log('getById empty');
    }
      
    static async put(req, res){
        console.log('put empty');
    }
      
    static async post(req, res){
        console.log('post empty');
    }
      
    static async delete(req, res){
        console.log('delete empty');
    }
  }
   
  module.exports = managerEmpty;
  