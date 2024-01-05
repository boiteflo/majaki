const axios = require('axios');

let urlBack = 'http://localhost:3000/api/';
if (process.env.NODE_ENV === 'production') {
    urlBack = 'https://mayaki.onrender.com/api/';
}

class ServiceBack {
    static getUrl(url){
        return urlBack + url + '/';
    }

    static getAll(url) {
        return new Promise((resolve, reject) => {
            try{
                axios.get(ServiceBack.getUrl(url)).then(res => {
                    resolve(res.data);
                })
            }
            catch(err){
                reject(err);
            }
        });
    }
    
    static get(url, id) {
        return new Promise((resolve, reject) => {
            try{
                axios.get(ServiceBack.getUrl(url) + id).then(res => {
                    resolve(res.data);
                })
            }
            catch(err){
                reject(err);
            }
        });
    }

    static post(url, obj){
        return this.insert(url,obj);
    }
    static insert(url, obj){
        return axios.post(ServiceBack.getUrl(url), obj);
    }

    static update(url, obj){
        return axios.put(ServiceBack.getUrl(url), obj);
    }

    static delete(url, id){
        return axios.delete(`${ServiceBack.getUrl(url)}${id}`);
    }
}

export default ServiceBack;
