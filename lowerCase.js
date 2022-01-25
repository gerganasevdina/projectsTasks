function solve(data) {
    return [
       ...new Set(data
    .join("")
    .toLowerCase()
    .match(/\w+/gim))
       ]
       .join(",")
    }
console.log(
    solve([
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
           " Pellentesque quis hendrerit dui.",
            "Quisque fringilla est urna, vitae efficitur urna vestibulum",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
           " Pellentesque quis hendrerit dui.",
            "Quisque fringilla est urna, vitae efficitur urna vestibulum"
            
    ])
)