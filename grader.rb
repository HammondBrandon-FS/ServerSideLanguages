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

class Grader
    # Constructor
    def initialize()
        # Get answers to questions and save them into variables
        puts "What is your name? "
        @name = gets

        puts "What is the name of the assignment? "
        @assignment = gets

        puts "What is your number grade? "
        # Convert the grade to a float
        @grade = gets.to_f
    end

    # Convert grade to letter grade
    def getLetter()
        letter = ""
        # Determine letter grade based on grade value
        if @grade >= 90
            letter = "A"
        elsif @grade >= 80
            letter = "B"
        elsif @grade >= 70
            letter = "C"
        elsif @grade >= 60
            letter = "D"
        else
            letter = "F"
        end
        # Output results
        puts @name + " your made a " + letter + " on " + @assignment
    end
end

# New instance of grader class
grades = Grader.new
# Run the getLetter method
print(grades.getLetter())