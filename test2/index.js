const assert = require("chai").assert;

const database = {
    621: { id: 621, name: "XxDragonSlayerxX", friends: [123, 251, 631] },
    123: { id: 123, name: "FriendNo1", friends: [621, 631] },
    251: { id: 251, name: "SecondBestFriend", friends: [621] },
    631: { id: 631, name: "ThirdWh33l", friends: [621, 123, 251] }
};

const getUser = id => new Promise((res, rej) => {
    setTimeout(() => {
        database[id] ? res(database[id]) : rej(new Error("not_found"))
    }, 300);
});

const expected = [
    { id: 621, name: "XxDragonSlayerxX", friends: [
        { id: 123, name: "FriendNo1", friends: [621, 631] },
        { id: 251, name: "SecondBestFriend", friends: [621] },
        { id: 631, name: "ThirdWh33l", friends: [621, 123, 251] }
    ] },
    { id: 123, name: "FriendNo1", friends: [
        { id: 621, name: "XxDragonSlayerxX", friends: [123, 251, 631] },
        { id: 631, name: "ThirdWh33l", friends: [621, 123, 251] }
    ] },
    { id: 251, name: "SecondBestFriend", friends: [
        { id: 621, name: "XxDragonSlayerxX", friends: [123, 251, 631] }
    ] },
    { id: 631, name: "ThirdWh33l", friends: [
        { id: 621, name: "XxDragonSlayerxX", friends: [123, 251, 631] },
        { id: 123, name: "FriendNo1", friends: [621, 631] },
        { id: 251, name: "SecondBestFriend", friends: [621] },
    ] },
];

const validate = (result) => {
    try {
        assert.deepEqual(result, expected);
    } catch (e) {
        console.error("Failed", e);
    }
};

// implement a method to create this result
const result = [];

// At the end call validate
validate(result);
