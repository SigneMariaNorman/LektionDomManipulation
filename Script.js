/* DOM = Document Object Model. Innehåller alla HTML-element i en trädbaserad datastruktur.
Ligger i ett objekt som heter document (testa att skriva document i konsolen.)
Har en hel del egenskaper och metoder som går att använda.
let elem = document.querySelectorAll(cssSelector);
let elem = document.getElementsByClassName('myClass);
let elem = document.getElementsByTagName('P');
let elem = document.getElementById('MyId');
let buttonElem = document.querySelectorAll('button');
buttonElem.addEventListener('click', function(event) {
//Körs när ett klick-event körs
});
Man kan inte sätta en addEventListener på en array.
Man ser det genom att Console logga tex buttonElem (ser det på [])
buttonElem[0].addEventListener('click', () => {}) Detta funkar.
Funkade för att det sattes på själva button.
name.push("chris") Funkar ej för att det är en sträng och push funkar inte på sträng.
querySelector eller querySelectorAll löser alla problem?
Rent tekniskt ingen skillnad på knapp och p-tagg, man kan göra allt klickbart. 
document.createElement(HTML-tagg) - skapar ett nytt HTML-element
appendChild(), removeChild()- lägger till eller tar bort ett HTML-element.
Observera att createElement() inte lägger till element i DOM:en
Använd detta när du behöver dynamiskt kunna skapa upp HTML-element. 

let bodyElem = document.querySelector('body');
let heading = document.createElement('h1');
bodyElem.appendChild(heading);
.innerHTML - komma åt innehåll i HTML-tagg
.className/.classList - hämta/lägga till/ta bort CSS-klasser
.setAttribute(name, value)/.getAttribute(name) - lägga till,
eller hämta attribut som tex. id, class, type="text" etc.
.style - modifiera CSS properties.
*/
const todoListElem = document.querySelector('#todo-list');
function createTodo(task) {
    const todoElem = document.createElement('li');
  todoElem.textContent = task;
  console.log(todoElem);

  todoListElem.appendChild(todoElem);
}
createTodo('Köpa kaffe');
createTodo('Köp kaka');
createTodo('Drick kaffe');
createTodo('Brygg  mer kaffe');
createTodo('Köp Morots- och apelsinjuice utan fruktkött');
/* EVENTS:
* JavaScript är ett event-drivet språk då mycket sker på anvämndarens input.
För att veta om användaren har klickat med musen eller tryckt på ex enter-tangent kan vi använda oss av events.
Vi sätter eventListener på HTML-dokument för att
prenumenera på uppdateringar och definierar en funktion som ska köras.
(Händelselyssnare) ska trigga en funktion när ett element trycks på.

let buttonElem = document.querySelector('button');
buttonElem.addEventListener('click', function(event) {
//Körs när ett klick-event körs.
});

Nedan: Skapar två <li>-element och lägger dem i <ul>-listan.

let listElem = document.querySelector('ul'); // Första <ul>-elementet på sidan hittas och lagras i variabeln listElem.
for(let i=0;i<2;i++) { // Loop som körs två ggr; (i=0 och i=1)
let listItem = document.createElement('li'); //Skapar ett nytt <li>-element
listItem.innerHTML = i; //Sätter innehållet i <li>-elementet till i(0 och sedan 1).
//Två skapade <li>-element kommer att innehålla texten "0" och "1".

listElem.appendChild(listItem); //Lägger till <li>-elementet i listan (<ul>).
Efter att loopen körts två ggr kommer listan att ha två <li>-element med innehållet: <ul>
                                                                                     <li>0</li
                                                                                    <li>1</li>         
}


Unobtrusive JavaScript
En generell approach till JavaScript på webben
* Separation of functionality.

*/