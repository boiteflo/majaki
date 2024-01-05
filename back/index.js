const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const helperRoute = require("./helper/helperRoute");
const managerMain = require("./manager/managerMain");
const managerLogin = require("./manager/managerLogin");
const managerDeposit = require("./manager/managerDeposit");
const helperRouteJsonGet = require("./helper/helperRouteJsonGet");

String.prototype.stringify = function(obj) {
    return JSON.stringify(obj, null, "\t");
}
String.prototype.replaceMany = function(searchTxt, replaceTxt) {
    const regex = new RegExp(searchTxt, 'g');
    return this.replace(regex, replaceTxt) ;
}
String.prototype.guid = function() {
    var d = new Date().getTime();
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;
        if(d > 0){
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/waste', helperRouteJsonGet.createDalRoute('back/data/waste', 'Id'));
app.use('/api/site', helperRouteJsonGet.createDalRoute('back/data/site', 'Id'));
app.use('/api/deposit', helperRoute.createRoute(new managerDeposit()));
app.use('/api/login', new managerLogin().createRoute());

app.use(express.static(__dirname + '/public/'));
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
const port = process.env.PORT || 3000;

app.listen(port, () => {
    managerMain.refresh();
    console.log(`Server started on port ${port}`);
});


