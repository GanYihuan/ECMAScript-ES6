// module.js
export const varName = "variantName";
export const intvarName = 123;
export const floatvarName = 3.14;


// 引用全部
// use.js
import * as variant from "./module";
console.log(variant.varName);
console.log(variant.intvarName);
console.log(variant.floatvarName);


// 只引用一个
// OneUse.js
import floatvarName from './module';
console.log(variant.floatvarName);


// 引用两个
// doubleUse.js
import {floatvarName, intvarName} from './module'
console.log(variant.floatvarName);
console.log(variant.intvarName);
