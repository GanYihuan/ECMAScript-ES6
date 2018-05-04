var jsonData = {
  id: "007",
  name: "Conan",
  age: 20,
  score: [98, 148],
  job: {
    doctor: "120",
    police: "110"
  }
};
console.log(jsonData);
console.log("es5: ");
console.log("person number: " + jsonData.name); // Canan
console.log("person number: " + jsonData.score[0]); // 98
console.log("person number: " + jsonData.score[1]); // 148
console.log("person number: " + jsonData.job.doctor); // 120

console.log("es6: ");
let { id: number, name, job: job } = jsonData;
console.log(number); // 007
console.log(name); // Conan
console.log(job.doctor); // 120
