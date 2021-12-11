
const axios = require('axios');


exports.convert_romanArr_to_numberArr = async (roman_arr) => {

    // console.log(roman_arr);
    let api="http://localhost:3000/to-number?value=";
    let number_arr = [];

    for (let i=0; i < roman_arr.length; i++) {
        let url = api + roman_arr[i];
        try{
            const response = await axios.get(url);
            // console.log(response.data);
            number_arr.push(response.data);
        } catch {
            return ('Bad request');
        }
    }
    
    return (number_arr);
    
    // if ( JSON.stringify(roman_arr) === JSON.stringify(['I', 'IV', 'X', 'XX']) ){
    //     return ([1, 4, 10, 20]);
    // } else if ( JSON.stringify(roman_arr) === JSON.stringify(['L', 'III', 'X', 'VI', 'I', 'IX']) ) {
    //     return ([50, 3, 10, 6, 1, 9]);
    // } else if ( JSON.stringify(roman_arr) === JSON.stringify(['I', 'II', 'III', 'IV', 'V']) ) {
    //     return ([1, 2, 3, 4, 5]);
    // } else if ( JSON.stringify(roman_arr) === JSON.stringify(['LX', 'III', 'II']) ) {
    //     return ([60, 3, 2]);
    // } else {
    //     return ([]);
    // }
};

exports.convert_number2Roman = async (number) => {

    let api="http://localhost:3000/to-roman?value=";

    let url = api + number;
    try{
        const response = await axios.get(url);
        // console.log(response.data);
        return(response.data);
    } catch {
            return ('Bad request');
    }
}