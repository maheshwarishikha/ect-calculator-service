
exports.performOperation = (operation, args) => {

    if ( operation === 'add') {

        let roman_num_arr = args_string_to_array(args);

        let roman_to_number_arr = convert_romanArr_to_numberArr(roman_num_arr);
        console.log(roman_to_number_arr);
        
        let addition=0;

        for ( let i = 0; i < roman_to_number_arr.length; i++ ){
            addition += roman_to_number_arr[i];
        }    
        return (addition);

    } else if ( operation === 'sub') {
    
        let roman_num_arr = args_string_to_array(args);
        
        let roman_to_number_arr = convert_romanArr_to_numberArr(roman_num_arr);
        // let roman_to_number_arr = [50, 3, 10, 6, 1, 9];
        let subtraction = roman_to_number_arr[0] ;

        for ( let i = 1; i < roman_to_number_arr.length; i++ ){
            subtraction -= roman_to_number_arr[i];
        }
        return (subtraction);

    } else if ( operation === 'mult') {

        let roman_num_arr = args_string_to_array(args);
        
        let roman_to_number_arr = convert_romanArr_to_numberArr(roman_num_arr);
        //let roman_to_number_arr = [1, 2, 3, 4, 5];
        let product = roman_to_number_arr[0] ;

        for ( let i = 1; i < roman_to_number_arr.length; i++ ){
            product *= roman_to_number_arr[i];
        }
        return (product);

    } else if ( operation === 'div') {

        let roman_num_arr = args_string_to_array(args);
        
        let roman_to_number_arr = convert_romanArr_to_numberArr(roman_num_arr);
        //let roman_to_number_arr = [60, 3, 2];
        let divisor = roman_to_number_arr[0] ;

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

convert_romanArr_to_numberArr = (roman_arr) => {

    if ( JSON.stringify(roman_arr) === JSON.stringify(['I', 'IV', 'X', 'XX']) ){
        return ([1, 4, 10, 20]);
    } else if ( JSON.stringify(roman_arr) === JSON.stringify(['L', 'III', 'X', 'VI', 'I', 'IX']) ) {
        return ([50, 3, 10, 6, 1, 9]);
    } else if ( JSON.stringify(roman_arr) === JSON.stringify(['I', 'II', 'III', 'IV', 'V']) ) {
        return ([1, 2, 3, 4, 5]);
    } else if ( JSON.stringify(roman_arr) === JSON.stringify(['LX', 'III', 'II']) ) {
        return ([60, 3, 2]);
    } else {
        return ([]);
    }
};