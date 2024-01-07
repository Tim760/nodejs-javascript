'use strict';

let temperature = process.argv[2];

if(temperature < 20)
{
    console.log("Activating Heating");
} 

else if (temperature > 40)
{
    console.log("Danger, possible fire hazard!");
} 

else if (temperature > 21)
{
    console.log("De-activating Heating");
} 

else {
    console.log("Temperature is ideal, no changes to heating");
}