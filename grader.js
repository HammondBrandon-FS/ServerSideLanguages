// Create a class "Grader"
// Create methods to output a valid grade
// Using the command line ask user a question for students name
// Using the command line ask user a question for assignment name
// Using the command line ask user a question for grade in numbers
// Return the letter grade for the assignment
// Assign letter grades based on points earned. Using if/else/elseif statements, create a function that returns a letter grade based on the following point breakdowns when called:
// 100-90=A, 80-89=B, 79-70=C, 69-60=D, <60=F
// To test your function, try it with these 5 point values and echo the result back out from the value returned from the function:
// 1. 94
// 2. 54
// 3. 89.9
// 4. 60.01
// 5. 102.1
// Hint: Think about the order in which if/elseif/else evaluates your conditions. Do you test for an "A" condition first and work your way down, or test for "F" and work your way up?
// Show errors in command line if there are any.

class Grader{
    constructor() {
        const rl = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question("What is your name? ",(name)=>{
            rl.question("What is the name of the assignment? ",(assignment)=>{
                rl.question("What is your number grade? ",(grade)=>{
                    grade = parseFloat(grade);
                    this.displayGrade(name, assignment, grade);
                    rl.close();
                })
                
            })
        })
    }

    displayGrade(n,a,g) {
        let letter;
        if (g >= 90) {
            letter = "A";
        }
        else if (g >= 80) {
            letter = "B";
        }
        else if (g >= 70) {
            letter = "C";
        }
        else if (g >= 60) {
            letter = "D";
        }
        else {
            letter = "F";
        }
        console.log(n + " you made a " + letter + " on " + a);
    }
}

let grades = new Grader()