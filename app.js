//1. Easy Going
//let i = 0;

//for(let i = 1; i <= 20; i++) {
//   console.log(i)
//}


//2. Get even 
//for(let i = 0; i <= 200; i += 2){
//   console.log(i)
//}



//3. Excited Kitted
//for(i = 0; i < 20; i++) {
//    console.log("Love me, pet me! HSSSSSS!" )
//}

//4. FizzBuzz
//function fizzbuzz() {
//  for (let i = 1; i < 101; i++) {
//    if (i % 3 === 0 && i % 5 === 0) {
//        console.log("FizzBuzz")
//} else if (i % 3 === 0) {
//     console.log("Fizz")
//} else if (i % 5 === 0) {
//  console.log("Buzz")

// } else
//   console.log(i)
//}
//}

//console.log(fizzbuzz());

//5.Getting to know you

//const kenny = ["Kenny", 1000, "Austin"];
//const jimHaff = ["Jim H", 16, "All cities"];
//const reuben = ["Reuben", 22, "Durham"];
//const jimClark = ["Jim C", 186, "LA"];
//const ryan = ["Ryan", 65, "Denver"];

//kenny[0] = "Gameboy";//
//console.log(kenny[0]);

//jimClark[1] = 187;
//console.log(jimClark[1]);

//ryan[2] = "Gotham City";
//console.log(ryan[2]);

//jimHaff.splice(2, 1, 'Cleveland', 'Austin', 'Boulder');
//console.log(jimHaff);


// 6. Yell at the Ninja Turtles

const nTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];


for (let i = 0; i < nTurtles.length; i++) {
    //let turtle = console.log(nTurtles[i]);
    //console.log(turtle.toUppercase())
    console.log()
}

//7. Return of the closets

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];

kristynsCloset.shift()
let kristynsShoe = 'left shoe'

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
        // These are Thom's shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
    ], [
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ], [
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];

thomsCloset[2].push(kristynsCloset)
console.log(thomsCloset[2])

//9. Dirty Laundry




for (let i = 1; i < 1000; i++) {
    let sum = 0;
    if (i % 3 === 0 || i % 5 === 0) {
        sum = sum + i;
        console.log(sum);

    }

}

//10. Triangles

let tri = 4

for (let i = 0; i <= 7; i++) {
    if (i === 1) {
        console.log("#")
    } else if (i === 2) { console.log("##") }
    else if (i === 3) { console.log("###") }
    else if (i === 4) { console.log("####") }
    else if (i === 5) { console.log("#####") }
    else if (i === 6) { console.log("######") }
    else if (i === 7){ console.log("#######") }
}

for (let i = 0; i <= 7; i++) {
    if (i === 1) {
        console.log("      #")
    } else if (i === 2) { console.log("     ##") }
    else if (i === 3) { console.log("    ###") }
    else if (i === 4) { console.log("   ####") }
    else if (i === 5) { console.log("  #####") }
    else if (i === 6) { console.log(" ######") }
    else if (i === 7){ console.log("#######") }
}

for (let i = 0; i <= 7; i++) {
    if (i === 1) {
        console.log("#######")
    } else if (i === 2) { console.log(" ######") }
    else if (i === 3) { console.log("  #####") }
    else if (i === 4) { console.log("   ####") }
    else if (i === 5) { console.log("    ###") }
    else if (i === 6) { console.log("     ##") }
    else if (i === 7){ console.log("      #") }
}

//11. Find the median 

const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18,12, 17, 12, 71, 18, 15, 12];
 
const median = nums => {
    let middle = Math.floor(arr.length / 2);
    nums.sort((a, b) => a - b);
    return nums.length % 2 !== 0 ? nums[middle] : (nums[middle - 1]+ nums[middle])
};