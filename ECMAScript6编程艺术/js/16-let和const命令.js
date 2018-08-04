let [a, b, c] = new Set(['a', 'b', 'c'])
console.log(a) // a
console.log(b) // b
console.log(c) // c

// ? 指针
function* fibs() {
	let a = 0
	let b = 1
	while (true) {
		yield a
		;[a, b] = [b, a + b]
	}
}
var [first, second, third, fourth, fifth, sixth] = fibs()
console.log(sixth) // 5
