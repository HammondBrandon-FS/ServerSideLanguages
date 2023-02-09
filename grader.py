# Create a class "Grader"
# Create methods to output a valid grade
# Using the command line ask user a question for students name
# Using the command line ask user a question for assignment name
# Using the command line ask user a question for grade in numbers
# Return the letter grade for the assignment
# Assign letter grades based on points earned. Using if/else/elseif statements, create a function that returns a letter grade based on the following point breakdowns when called:
# 100-90=A, 80-89=B, 79-70=C, 69-60=D, <60=F
# To test your function, try it with these 5 point values and echo the result back out from the value returned from the function:
# 1. 94
# 2. 54
# 3. 89.9
# 4. 60.01
# 5. 102.1
# Hint: Think about the order in which if/elseif/else evaluates your conditions. Do you test for an "A" condition first and work your way down, or test for "F" and work your way up?
# Show errors in command line if there are any.

class Grader:
    def __init__(self):
        self.name = raw_input("What is your name? ")
        self.assignment = raw_input("What is the name of the assignment? ")
        self.grade = float(raw_input("What is your number grade? "))

    def getGrade(self):
        letter = "N/A"
        if self.grade <= 100 and self.grade >= 90:
            letter = "A"
        elif self.grade < 90 and self.grade >= 80:
            letter = "B"
        elif self.grade < 80 and self.grade >= 70:
            letter = "C"
        elif self.grade < 70 and self.grade >= 60:
            letter = "D"
        elif self.grade > 100:
            return self.name + " you got bonus points, but still an A."
        else:
            letter = "F"
        
        return self.name + " you made a " + letter + " on your " + self.assignment + " assignment."

grades = Grader()
print(grades.getGrade())