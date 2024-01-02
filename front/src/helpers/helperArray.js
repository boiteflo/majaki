class helperArray {
    static initOrderIndex= (array) => {
        let filterElement = array
            .filter(x=> x.orderIndex);        
           
        let max = filterElement.length < 1 ? 1
            : Math.max(...filterElement
                .map(x=> x.orderIndex));
               
        let min = filterElement.length < 1 ? 0
        : Math.min(...filterElement
            .map(x=> x.orderIndex));
       
        array.forEach(element => {
            element.orderIndex = element.orderIndex && element.orderIndex >0
                ? element.orderIndex - min
                : ++max;
        });


        return this.sortInteger(array, "orderIndex");
    };


    static setId= (array) => {
        const alreadyUsedId = [];
        let currentId = 1;        
        if(!array || array.length < 1)
            return [];


        array.forEach(x=> {
            if(x.id === undefined || x.id < 1 || alreadyUsedId.includes(x.id)){
                x.id = currentId;
                currentId++;
            }
            alreadyUsedId.push(x.id);
        });
        return array;
    }


    static sort= (array, property, isAscending=true) => {
        return array.sort((a,b)=> isAscending ? b[property] - a[property] : a[property] - b[property])
    }
    
    static getSortResult = (result) => result.find(x=> x!= 0) ?? 0;
    static getSortPropertyValue = (a,b,x, ascending) => ascending ? (a[x] > b[x]) - (a[x] < b[x]) : (b[x] > a[x]) - (b[x] < a[x]);

    static sortByProperties(array, sortPropertiesString){
        let properties = sortPropertiesString
            .split(',');

        return array.sort((a,b) => {
            const result = this.getSortResult(properties
                .map(x=> this.getSortPropertyValue(a,b,x.substring(1),x[0] ==='<')));
            return result;
        });
    }

    static sortInverse= (array, property) => {
        return array.sort((a,b)=> a[property] - b[property])
    }

    static sortInteger= (array, property) => {
        return array.sort((a,b)=> parseInt(a[property]) - parseInt(b[property]))
    }

    static sortIntegerDesc= (array, property) => {
        return array.sort((a,b)=> parseInt(b[property]) - parseInt(a[property]))
    }


    static removeElement =(array, element) => {
        array.splice(array.indexOf(element), 1);
    }


    static getElementByProperty = (array, value, property) => {
        return array.find(x=> x[property] == value);
    }


    static getElementsByProperty = (array, value, property) => {
        return array.filter(x=> x[property] == value);
    }


    static removeElementByProperty =(array, value, property) => {
        let element = this.getElementByProperty(array, value, property);
        this.removeElement(array, element);
    }

    static move(array, idProperty, item, pitch){
        if(array == null || !array.find(x=> x[idProperty] === item[idProperty]))
            return array;
        
        let result = [];
        for(let i=0; i< array.length; i++){
            let current = array[i];
            let next = i === array.length-1 ? null : array[i+1];

            if(next && next[idProperty] == item[idProperty] && pitch === -1){
                result.push(next);
                result.push(current);
                i++;
            }
            else if (next && current[idProperty] == item[idProperty] && pitch === 1){
                result.push(next);
                result.push(current);
                i++;
            }
            else
                result.push(current);
        }

        return result;
    }
    
    static removeDuplicatesObjects = (array, property)=> {
        let result = [];
        let ids = [];

        array.forEach(x=> {
            let id = x[property];
            if(!ids.includes(id)){
                ids.push(id);
                result.push(x);
            }
        });

        return result;
    }

    static removeDuplicates = (array)=> {
        let result = [];

        array.forEach(x=> {
            if(!result.includes(x)){
                result.push(x);
            }
        });

        return result;
    }

    static getMatch(array1, array2){
        return array1.filter(x=> array2.includes(x));
    }

    static addMissing(array1, array2, propertyId){
        const arrayIds = [ ...new Set(array1.map(x=> x[propertyId]))];
        return array1.concat(array2.filter(x=> !arrayIds.includes(x[propertyId])));
    }
  }
 
  module.exports = helperArray;
