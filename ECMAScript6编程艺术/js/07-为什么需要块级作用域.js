// First Scenario
var time = new Date();
function fun() {
  console.log(time);
  if (false) {
    var time = "hello!";
  }
}
fun(); // undefined

// Second Scenario
var string = "hello world!";
for (var i = 0; i < string.length; i++) {
  console.log(string[i]);
}
console.log("end");
// 12, i jump to itselft code block!
console.log(i);

// es5
console.log("es5: ");
function frun() {
  var num = 100;
  if (true) {
    var num = 200; // Cover above num
  }
  console.log(num);
}
frun(); // 200

// es6
console.log("es6: ");
function run() {
  let num = 100;
  if (true) {
    // Independent scopes
    let num = 200; // don't cover above num
  }
  console.log(num);
}
run(); // 100

// Execute function now
{
  /* <script type="js/javascript"></script> */
}
console.log("es5:");
function ex() {
  console.log("i am outside");
}
// 立即执行函数会将里面的ex()提出来, 覆盖掉外面的ex()
(function() {
  if (false) {
    // Will replace the outside ex ()
    function ex() {
      console.log("i am inside");
    }
  }
  ex(); // i am inside
})();

{
  /* <script type="text/traceur"> */
}
console.log("es6:");
function exe() {
  console.log("i am outside");
}
(function() {
  if (false) {
    // Will replace the outside ex ()
    function ex() {
      console.log("i am inside");
    }
  }
  ex(); // i am inside
})();
