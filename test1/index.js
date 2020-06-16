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

const splitName = (fullname) =>
{

    let x = fullname.split(" ");
    var news = { first: x[0],
        middle: x.length >2 ? fullname.split(" ", x.length-1).slice(1)   :[],
  
        last: x.length >1 ? x[x.length-1]: null,
  
    }
    return news;

}

// const newRese = names.map(splitName);
// console.log(newRese);


// implement code generating result
const result = names.map(splitName);;

// At the end call validate
validate(result);
