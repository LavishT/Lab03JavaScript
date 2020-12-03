// defining person
let person = require('../models/person.json');

exports.index = async (req, res, next) => {
	try {
		res.status(200).json(person);
	} 
	catch (error) {
		next(error);
	}	
}
exports.show = async (req, res, next) => {
	
    try {

		for( let p of person )
		{
			if(p.id === Number(req.params.id))
			{
				res.status(200).json(p);
			}
		}

		// error if the id was not found
		var error = new Error(`Person with Id ${req.params.id} Not Found.`);
		error.statusCode = 404;
		error.stack = `Person with Id ${req.params.id} Not Found.`;
		throw error;
	} 
	catch (error) {
        next(error);
    }
}
