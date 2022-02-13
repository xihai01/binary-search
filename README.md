# Title
## Introduction
Suppose you are searching for a person named "Vincent" in one of those big telephone directory books (I know, I'm old). These books can have 100's of pages and it would be tedious to start searching from the first page and search each page in a linear fashion until you found that person. Fortunatly, the book is sorted alphabetically.

Imagine opening the book in the middle. You look at the page and see names starting with "S". Knowing that "V" is after "S", you tear the book in half and discard the half of the book with names below "S". Now you are left with a smaller book to deal with.

Next, you open the remaining book halfway again. You look at where you landed and see names starting with "X". You tear the book in half again and discard the half with names above "X".

Keep repeating this procedure and "Vincent" will be found.

[gif of book ripping]

This is the concept of **binary search**. Binary search is an efficient algorithm for searching values in a **sorted** array or list. It is part of a large category of algorithms called *divde and conquer*. These classes of algorithms take a complex problem and divide it into smaller chunks of subproblems that are easier to solve. For binary search, at each stage of the solution, the problem is mostly halved each time.

## Idea
To illustrate the process of this algorithm, let's say we want to find 47 in the following ordered array of numbers.

[pic of array with ordered numbers + index]

We start by looking at the middle value. The middle value is 40 and it isn't the value we want. Because we know 40 < 47 and the array is sorted, we can eliminate the left half of the array (every value before and including 40). Our problem size has halved.

[pic of array - halved]

The process repeats again. We look at a value in the middle. The middle value is either 52 or 56 since there is no exact middle. Say 52 is chosen as the middle value, then we know that 52 > 47 and the right half of the array can be eliminated from the search.

[pic of array - halved again]

Process repeats again. The middle value is 44. We see 44 < 47, and so we elminate the right half of the array. Now we are left with the following values.

[pic of array]

We repeat the process again. The middle value is 47. We see 47 = 47 and therefore, the problem is solved and we found the value!

A linear search algorithm would have taken us 11 steps, but binary search only took us 4 steps to find 47. For smaller arrays, the computation time between the two algorithms will be neglliglible. However, for large datasets - were talking millions of values, binary search is more efficient than linear search. [link to article khan academy]

## Psuedocode
The steps of binary search can be written as:
1. Initialize a variable called "bottom" to 0 which points to the lowerbound of subarray
2. Initialize a variable called "top" to (array length - 1) which points to upperbound of subarray
3. Declare a "middle" variable to hold the value in the middle of subarray
4. While bottom <= top, do the following:
   - Calculate the middle value
   - If middle value = target value, return the index
   - if middle value < target value, set bottom = middle + 1
   - If middle value > target value, set top = middle - 1
5. The target value does not exist in array and return null

[binary search implementation gist]

## Guessing game
This game demonstrates the binary search idea visually. The target value is the number we are trying to guess and the guesses the user makes is the middle value in our binary search algorithm.

[link to site once completed]
