(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
}((function () { 'use strict';

	const myarray = [ '1', '2'];

	const array2 = [...myarray, '3', '4'];


	console.log('veio aqui', array2);

})));
