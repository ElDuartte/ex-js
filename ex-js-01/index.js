function randomNum() {
	return Math.floor(Math.random() * 101);
}

function check() {
	let first = randomNum();
	let second = randomNum();

	if (first === 100) {
		return console.log(
			`True the First number (${first}) is above or equal to 100`
		);
	} else if (second === 100) {
		return console.log(
			`True the Second number (${second}) is above or equal to 100`
		);
	} else if (first + second === 100) {
		return console.log("True the sum of the two numbers is 100");
	} else {
		return console.log("Nope");
	}
}

check();
