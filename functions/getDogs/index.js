const {sendResponse} = require('../../responses/index');

var dogs = [
    {
        id: 5762364,
        breed: "Golden Retriever",
        age: 3,
        color: "Golden",
        weight_kg: 30
    },
    {
        id: 9320475,
        breed: "Siberian Husky",
        age: 4,
        color: "Black and White",
        weight_kg: 25
    },
    {
        id: 450968,
        breed: "Labrador Retriever",
        age: 2,
        color: "Black",
        weight_kg: 28
    }
];

    

exports.handler = async (event, context) => {

    return sendResponse(200, dogs);


}