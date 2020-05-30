const expect = require('chai').expect;

expect(true).to.be.true;

function titleCase (title) {
	return title.toUpperCase();
}

expect(titleCase('the great mouse detective')).to.be.a('string');
//most complex test should be placed last