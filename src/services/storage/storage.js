export const getArray = (key) => {
    try{
        let jsonString = localStorage.getItem(key) ?? "[]";
        return JSON.parse(jsonString);
    }
    catch(e){
        return [];
    }
};

export const setArray = (key, newArray) => {
    let jsonString = JSON.stringify(newArray);
    localStorage.setItem(key, jsonString);
}