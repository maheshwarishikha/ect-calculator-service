
const Converter = require('./converter');

exports.performOperation =  async (operation, args) => {

    let input_arr = args_string_to_array(args);
    
    if ( input_arr.length === 1 ){
        return (input_arr[0]);
    }

    if ( operation === 'add') {

        const roman_to_number_arr =  await Converter.convert_romanArr_to_numberArr(input_arr);

        let addition=0;
        for ( let i = 0; i < roman_to_number_arr.length; i++ ){
            addition += roman_to_number_arr[i];
        }    
        return (addition);

    } else if ( operation === 'sub') {
    
        const roman_to_number_arr = await Converter.convert_romanArr_to_numberArr(input_arr);

        let subtraction = roman_to_number_arr[0];
        for ( let i = 1; i < roman_to_number_arr.length; i++ ){
            subtraction -= roman_to_number_arr[i];
        }
        return (subtraction);

    } else if ( operation === 'mult') {
        
        const roman_to_number_arr = await Converter.convert_romanArr_to_numberArr(input_arr);
       
        let product = roman_to_number_arr[0];
        for ( let i = 1; i < roman_to_number_arr.length; i++ ){
            product *= roman_to_number_arr[i];
        }
        return (product);

    } else if ( operation === 'div') {
        
        const roman_to_number_arr = await Converter.convert_romanArr_to_numberArr(input_arr);
        
        let divisor = roman_to_number_arr[0];
        for ( let i = 1; i < roman_to_number_arr.length; i++ ){
            divisor /= roman_to_number_arr[i];
        }
        return (divisor);

    } else {
        return ("Unsupported Operation");
    }
};

args_string_to_array = (args) => {
    let arr = args.split(", ");
    return ( arr );
};
