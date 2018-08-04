console.log('es5:')
var a = []
for (var i = 0; i < 10; i++) {
	var c = i
	a[i] = function() {
		console.log(c)
	}
}
a[5]() // 9

console.log('es6:')
var b = []
for (var j = 0; j < 10; j++) {
	let d = j
	b[j] = function() {
		console.log(d)
	}
}
b[5]() // 5
