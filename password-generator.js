var generator = require('generate-password');

var password = generator.generate({
	length: 30,
	numbers: true
});

// 'uEyMTw32v9'
console.log(password);