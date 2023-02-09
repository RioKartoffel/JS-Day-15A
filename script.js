//kelvin will stay constant
const kelvin = 0;
//celsius is equals to kelvin -273
const celsius = kelvin - 273;
//this code's value is changeable
let fahrenheit = celsius * (9/5) + 32;
// built-in Math Object to round down the fahrenheit temp
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// Convert to Newton
let newton = celsius * (33 / 100);
 
// Round down
newton = Math.floor(newton);
 
console.log(`The temperature is ${newton} degrees Newton.`);