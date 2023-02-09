# JS-Day-15A
Kelvin Weather

This code I learned from Codecademy calculates the temperature in both Fahrenheit and Newton scales, given a temperature in Kelvin (constant and set to 0).

The temperature in Celsius is calculated by subtracting 273 from the constant kelvin: const celsius = kelvin - 273.

The temperature in Fahrenheit is calculated by first initializing a variable fahrenheit with the formula celsius * (9/5) + 32. The resulting value is then rounded down to the nearest integer using the Math.floor() method.

The temperature in Newton is calculated by first initializing a variable newton with the formula celsius * (33 / 100). The resulting value is then rounded down to the nearest integer using the Math.floor() method.

Both temperatures are logged to the console using string interpolation to display the final result.