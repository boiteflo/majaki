const express = require('express');
const helperJsonFile = require("../helper/helperJsonFile");

const fileUser = `./back/data/user`;

class managerLogin{
    createRoute=() => {
        const router = express.Router();
       
        router.post('/', async (req, res) => {
            console.log('login.post');
            res.send(await managerLogin.login(req.body.Mail, req.body.Password));
        });

        return router;
    }

    static async login(mail, password){
        const data = await helperJsonFile.readPath(fileUser + '.json');
        const user = data.find(x=> !x.Disabled && x.Mail.toLowerCase() === mail.toLowerCase());

        if(!user)
            return null;

        if(password != user.Password){
            if(!user.TryLogin)
                user.TryLogin = 1;
            else
                user.TryLogin++;
            
            if(user.TryLogin > 3)
                user.Disabled = true;

            const newData = data.map(x=> x.Mail === mail ? user : x);
            helperJsonFile.save(fileUser, newData);
            return null;
        }

        delete user.Password;
        return user;
    }
    
  }
   
  module.exports = managerLogin;
  