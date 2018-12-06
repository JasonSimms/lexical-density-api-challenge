# Lexical Density Api by Jason Simms


# To Use:
Requires: node and mongoDB

1. clone this repository
2. cd lexical-density && npm install
3. with a local mongoDB instance running - $ npm run seed
4. npm start

5.  Make a post request to : http://localhost:3000/api/complexity/
with a body key "userInput" 
& a value of a single sentance string.

- endpoint http://localhost:3000/api/complexity/verbose will handle paragraph inputs after some debugging.



## Project Requirements: 
Route / complexity calculates complexity of a string
- output: {"data": {
    overall_ld: 0.42
    }
    }

Route /complexity?mode=verbose returns multiple sentances and an overall lexical density:
- output: {
    data: {
        sentance_ld: [0.23, 0.1, 1.0, 0.0],
        overall_ld: 0.42
    }
}

ERRORS: 100 words maximum or 1000 characters are valid inputs

## Plan: 3 hour time target
1. Create a function that calculates Lexical Density.
- Prep: A string needs to be split into words, remove numbers since they are not words.
- Record the total number of words
- Filter the array of words against the list "non lexical words" as provided.
- Divide remaining array length against initial word Count.

2. Create a mongoDB instance containing all the words in the "non lexical" list.
- Create routing paths for Create, Read, Delete.
- create a seed file for non lexical words provided.

3. Integrate an express API that pulls words from the database and then applies user post requests into calculation of Lexical Density Calculator.

4. Test Case: 
"Kim loves going to the cinema" = 67% density( to and the are non lexical)
