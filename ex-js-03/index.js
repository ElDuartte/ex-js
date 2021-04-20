function incrementStrLetters(str) {
	let newStr = "";
	for (let i = 0; i < str.length; i++) {
		// fromCharCode convierte el string a tipo UTF-16
		// charCodeAt usa el index de la string necesita indicar
		// desde donde empieza el index
		newStr += String.fromCharCode(str.charCodeAt(i) + 1);
	}
	return newStr;
}

console.log(incrementStrLetters("z"));
