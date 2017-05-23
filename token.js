const jwt = require('jsonwebtoken');
const secret = process.env.TOKEN_SECRET || 'token_secret';

// TODO - handle expiration

function create(data) {
	return jwt.sign(data, secret);
}

function verify(token) {
	return token && jwt.verify(token, secret);
}

exports.create = create;
exports.verify = verify;
