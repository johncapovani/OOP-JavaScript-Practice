//Declaring objects
//Draw is a method
//Radius, location, x, y are all properties
//Properties are used to hold values
//Object Literal Syntax
// let circle = {

//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },

//     draw: function () {

//         console.log('draw')

//     }
// };

//We can access members of the object using .notation
// circle.draw()

//Create a circle with a factory function instead of just a static object declaration

//If the Object has behavior we need to use a factory function

function createCircle(radius) {


    return {

        radius,

        draw: function () {

            console.log('draw')

        }
    };

}

let circle = createCircle(1)

console.log(circle)

//Constructor Function

function Circle(radius) {

    this.radius = radius

    this.draw = function () {

        console.log('draw')
    }
}

const another = new Circle(1)

