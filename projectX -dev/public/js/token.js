let char = 'abcdefghijklmnopqrstuvwxyz0123456789'

const generateToken = key => {
	let token = ''
	for (let i = 0; i < key.length; i++) {
		let index = char.indexOf(key[i]) || char.length / 2;
		let randomIndex = Math.floor(Math.random() * index);
		token += char[randomIndex] + char[index - randomIndex];
	}
	return token;
}

const compareToken = (key, token) => {
	let string = ''
	for (let i = 0; i < token.length; i++) {
		let index1 = char.indexOf(token[i]);
		let index2 = char.indexOf(token[i+1]);
		string += char[(index1 + index2)];

	}
	if ( string === key){
		return true;
	}
	return false;
}