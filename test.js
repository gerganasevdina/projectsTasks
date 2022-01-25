let foo = {
    prop1: 1,
    prop2: 2
};

let bar = Object.create(foo);
bar.prop3 = 3;

console.log(foo, bar, bar.prop1, bar.prop2);

console.log(
    Object.keys(foo),
    Object.keys(bar)
)

for (let i in bar) {
    if (bar.hasOwnProperty(i)) {
        console.log(i)
    }
}