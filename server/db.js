const categories = [];

let categoryId = 0;

const getCategories = () => {
    return categories;
}

const getCategory = (catName) => {
    const cat = categories.find(element => element.catName === catName);
    return cat;
}

const createCategory = (catName, sLimit) => {
    const catId = categoryId ++;
    const newCategory = {
        id: catId,
        catName: catName,
        sLimit: sLimit,
        balance: sLimit,
        sLogs: []
    }
    console.log(newCategory);
    console.log(catName);
    categories.push(newCategory);
    return newCategory;
}

const createSLog = (catName, spendName, spend) => {
    const cat = getCategory(catName);
    const spendObject = {
        spendName: spendName,
        spend: spend
    }
    cat.sLogs.push(spendObject);
    cat.balance -= spend;
    return spendObject;
}

module.exports = {
    getCategories,
    getCategory,
    createCategory,
    createSLog
};