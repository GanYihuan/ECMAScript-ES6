function fun() {
	return [1, 2, 3]
}
var [x, y, z] = fun()
console.log(fun()) // [1, 2, 3]
console.log(x) // 1
console.log(y) // 2
console.log(z) // 3

function run() {
	return {
		id: '007',
		name: 'Conan',
		age: 28
	}
}
var { id, name, age } = run()
console.log(id) // 007
console.log(name) // Conan
console.log(age) // 28

var { id: person_id, name: person_name, age: person_age } = run()
console.log(person_id) // 007
console.log(person_name) // Conan
console.log(person_age) // 28
