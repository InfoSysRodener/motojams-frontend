export default class StorageServices {
    set(key,data){
        return  localStorage.setItem(key, typeof data !== "string" ? JSON.stringify(data) : data);
    }
    get(key){
        let data = localStorage.getItem(key);
        return typeof data !== "string" ? JSON.parse(data) : data;
    }
    remove(key){
       return localStorage.removeItem(key);
    }
    clear(){
        return localStorage.clear();
    }
};