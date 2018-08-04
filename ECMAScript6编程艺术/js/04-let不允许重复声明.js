{
	var a = 100
	var a = 200
	console.log(a)
}
{
	// different modules unaffected
	let a = 300
	console.log(a)
}
{
	// within modules can't duplicate same let
	// var b = 100;
	let b = 200
	console.log(b)
}
