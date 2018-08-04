/**
 * 冻结对象的通用函数
 * @param {*} obj
 */
var constantize = obj => {
	Object.freeze(obj)
	Object.keys(obj).forEach((key, value) => {
		if (typeof obj[key] === 'object') {
			constantize(obj[key])
		}
	})
}
