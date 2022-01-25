function solve(input) {
    let juices = {};
    let bottles = {};

   input
    .forEach((line) => {
        let [ name, quantity ] = line.split ('=>');
        quantity = Number(quantity);

        if (!juices.hasOwnProperty(name)) {
            juices[name] = 0;
        }

    juices[name] += quantity;
    let currentQuantity = juices[name];

    if (currentQuantity >=1000) {
        bottles[name] = Math.trunc(currentQuantity / 1000);
    }
});

console.log(bottles);
}

solve(['orange => 2000',
'peach => 1432',
'banana => 540',
'peach => 600',
'strawberry=> 549'
]
);