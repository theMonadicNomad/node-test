const assert = require("chai").assert;

const names = [
    "Michael Daniel Jäger",
    "LINUS HARALD christer WAHLGREN",
    "Pippilotta Viktualia Rullgardina Krusmynta Efraimsdotter LÅNGSTRUMP",
    "Kalle Anka",
    "Ghandi"
];

const expected = [
    { first: "Michael", middle: ["Daniel"], last: "Jäger" },
    { first: "Linus", middle: ["Harald", "Christer"], last: "Wahlgren" },
    { first: "Pippilotta", middle: ["Viktualia", "Rullgardina", "Krusmynta", "Efraimsdotter"], last: "Långstrump" },
    { first: "Kalle", middle: [], last: "Anka" },
    { first: "Ghandi", middle: [], last: null },
];

const validate = (result) => {
    try {
        assert.deepEqual(result, expected);
    } catch (e) {
        console.error("Failed", e);
    }
};

const capitalizeFirstLetter = (name) =>
{
    return name.charAt(0).toUpperCase() + name.slice(1);

}

const splitName = (fullname) =>
{
    let x = fullname.toLowerCase().split(" ").map(capitalizeFirstLetter);
    var news = { first: x[0],
        middle: x.length >2 ? fullname.toLowerCase().split(" ", x.length-1).map(capitalizeFirstLetter).slice(1)   :[],
        last: x.length >1 ? x[x.length-1]: null,  
    }
    return news;

}


// implement code generating result
const result = names.map(splitName);

// At the end call validate
validate(result);
