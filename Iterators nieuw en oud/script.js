//While loop:
//Maak een array genaamd colors met de kleuren: yellow, blue, red, orange.
//Schrijf een while loop die de kleuren in de console logged en stopt wanneer alle kleuren geprint zijn.
const arrayOfcolors = ["yellow", "blue", "red", "orange"];
let w = 0

while (w < 4){
    console.log(arrayOfcolors[w]);
    w++;
}

//For loop:
//Gebruik dezelfde array als startpunt.
//Schrijf een for loop die de kleuren in de console logged en stopt wanneer alle kleuren geprint zijn.
const arrayColors = ["yellow", "blue", "red", "orange"];
let x = 0

for (let x = 0; x < 4; x++){
    console.log(arrayOfcolors[x]);

};

//Gebruik de lengte van de array in je for loop: array.length

for (let x = 0; x < arrayColors.length; x++){
    console.log(arrayOfcolors[x]);

};

//forEach:

//Gebruik dezelfde kleuren-array als startpunt

const arraysColors = ["yellow", "blue", "red", "orange"];

//Gebruik de forEach array method, om alle items in je array te loggen naar de console.

arraysColors.forEach(forEacharrayMethod);

function forEacharrayMethod(item, index, array) {
    console.log (item);
    
}

//Dit waren simpele oefeningen. 
//De kern van deze oefening zit in het begrijpen van een for loop/ while loop ten opzichte van een array method. 

//Beantwoord de volgende vragen en zet dit als comment onderin je file.

//Hoeveel regels neemt mijn for loop en mijn while loop in beslag?

//Hoeveel regels neemt mijn forEach method in beslag?
//Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? 
//Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
//Kun je een array method gebruiken op een object? Het antwoord is nee.
//Stel je hebt een object met 45 properties. 
//Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: 
//Looping through the properties of an object.
//Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?


