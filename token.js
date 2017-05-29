const jwt = require('jsonwebtoken');
const secret = process.env.TOKEN_SECRET || 'token_secret';

function create(data) {
	return jwt.sign(data, secret, {expiresIn:(process.env.TOKEN_EXPIRES_IN || "1 hour")});
}

function verify(token) {
	try { 
		return token && jwt.verify(token, secret); 
	}
	catch (err) {
		// jwt.verify throws an exception if token is expired
		return;
	}
}

exports.create = create;
exports.verify = verify;
