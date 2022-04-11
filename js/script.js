// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
// BONUS
// 1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
// 2- popolare le options della select della milestone 
// 3- dinamicamente.
const icon = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];
// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome 
// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.dell'icona e l'icona stessa.
const container = document.querySelector('.container');

// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
let selezione = document.getElementById("selezione");

function selezionaIcone(){
    container.innerHTML='';
    let indiceOpzione = selezione.selectedIndex;
    let opzione =selezione.options[indiceOpzione].value;
    console.log(opzione)
    if(opzione === 'animals'){
        const animals = icon.filter((element)=> element.type ==='animal');
        console.log(animals)
        animals.forEach((element)=>{
            const cards = document.createElement('div');
            cards.setAttribute('class','card');
            cards.innerHTML=`
            <i class="${element.family} ${element.prefix}${element.name}" style="color:${element.color}"></i>
            <p>${element.name}</p>
            `;
            container.append(cards)
         })
    }else if(opzione === 'vegetables'){
        container.innerHTML='';
        const vegetables = icon.filter((element)=> element.type ==='vegetable');
        console.log(vegetables)
        vegetables.forEach((element)=>{
            const cards = document.createElement('div');
            cards.setAttribute('class','card');
            cards.innerHTML=`
            <i class="${element.family} ${element.prefix}${element.name}" style="color:${element.color}"></i>
            <p>${element.name}</p>
            `;
            container.append(cards)
         })
    }else if(opzione === 'users'){
        container.innerHTML+='';
        const users = icon.filter((element)=> element.type === 'user');
        console.log(users)
        users.forEach((element)=>{
            const cards = document.createElement('div');
            cards.setAttribute('class','card');
            cards.innerHTML=`
            <i class="${element.family} ${element.prefix}${element.name}" style="color:${element.color}"></i>
            <p>${element.name}</p>
            `;
            container.append(cards)
         })
    }else{
        icon.forEach((element)=>{
            container.innerHTML+='';
            const cards = document.createElement('div');
            cards.setAttribute('class','card');
            cards.innerHTML=`
            <i class="${element.family} ${element.prefix}${element.name}" style="color:${element.color}"></i>
            <p>${element.name}</p>
            `;
            container.append(cards)
         })
    }
   
}


selezione.addEventListener('change', selezionaIcone);

// filtro le icone per tipo 

