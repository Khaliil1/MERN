var hello;
console.log(hello);
hello = 'world';
// undefined
// ******************************************

var needle;
function test() {
    var needle;
    needle = 'magnet';
    console.log(needle);
}

needle = 'haystack';

test();
// magnet
// *****************************************

var brendan;
function print() {
    brendan = 'only okay';
    console.log(brendan);
}

brendan = 'super cool';
console.log(brendan);

// supercool
// ****************************************

var food;
function eat() {
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}

food = 'chicken';
console.log(food);
eat();


// half-Chicken
// ****************************************
var mean;
// mean();
console.log(food);
mean = function () {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food);
//chicken
// fish
// *****************************************
var genre;
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}

console.log(genre);
genre = "disco";
rewind();
console.log(genre);
// rock
// r&b
// disco
// ****************************************

var dojo;
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// seattle
// burbank
// san jose

// *****************************************
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;

    if (dojo.students > 50) {
        dojo.hiring = true;
    } else if (dojo.students <= 0) {
        dojo.status = "closed for now";
    }

    return dojo;
}

// { name: 'Chicago', students: 65, hiring: true }




