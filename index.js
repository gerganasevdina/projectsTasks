function running() {
   return "Running";
}
function category(run, type) {
    console.log(run() + "" + type);
}
category(running, "sprintGeri");


let person = {};
person.name = "Geri";
console.log(person);