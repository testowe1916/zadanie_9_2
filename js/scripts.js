var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = maleNames.concat(femaleNames);
var newName = 'Marian';
var newName2 = 'Asia';
if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
	alert('Dodane nowe imię Marian')
} else {
	console.log("Duplikat imienia");
	alert('Duplikat imienia Marian')
};
if (allNames.indexOf(newName2) === -1) {
	allNames.push(newName2);
	alert('Dodane nowe imię Asia')
} else {
	console.log("Duplikat imienia");
	alert('Duplikat imienia Asia')
};
console.log(allNames);
alert(allNames)