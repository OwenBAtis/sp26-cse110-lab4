1. 3 is returned in the console log because i is a var, thus being global, and i is incremented until it is equal to 3, when the loop would end. 
2. 150 is returned in the console log because discountedPrice is a var, thus being global, and the last value it was set as was the discounted price of the last item in the prices list. 
3. 150 is returned int he console log as the final price variable is global and the last calculation it did would be for the last variable in the prices list. 
4. [50, 100, 150] is returned because discounted is a var, thus being global, and all items in the prices list were set to their discounted price. 
5. The console will produce an error as i is a let variable and thus does not exist in the context of line 12. 
6. The console will produce an error as the discountedPrice let variable was only decalred within the loop code block. 
7. 150 as the finalPrice variable does exist in the context of the block code and can be accessed in line 14. 
8. [50, 100, 150] is returned as the discounted variable exists within the context of the return call in line 16. 
9. The console will produce an error as i is a let variable and thus does not exist in the context of line 11. i only exists in the block code of the loop. 
10. 3 will be returned as that is the length of the prices variable and is never changed throughout the loop's excecution. 
11. An error will be produced as the empty list discounted is being attempted to be altered, which a const variable prevents. 
12. Data Types
- student.name;
- student['Grad Year'];
- student[greeting];
- student['Favorite Teacher'].name;
- student.courseLoad[1]; 
13. Arithmetic
- '3' + 2 > 32 because integers are able to map to their exact string representation. 
- '3' - 2 > 1 because the string is also able to map to it's integer representation and do the subtraction. 
- 3 + null > 3 because null is able to be mapped to 0 as an integer. 
- '3' + null > 3null because the null variable is able to be mapped to the string null and be concatinated to '3'. 
- true + 3 > 4 because true is mapped to 1. 
- false + null > 0 becuase both false and null are mapped to 0 as integer representations. 
- '3' + undefined > 3undefined because undefined is able to read undefined as a string and concatinate it with '3'
- '3' - undefined > NaN as there is no context for subtracting to be trasnlated as a string, thus the result is NaN. 
14. Comparison
- '2' > 1 > true, as the '2' is able to be read as an integer. 
- '2' < '12' > false due to a dictionary comparison. 
- 2 == '2' > true as the '2' is able to be mapped to the integer representation. 
- 2 === '2' > false as the two comparitors are not the same type. 
- true == 2 > false as true maps to 1 and is not equal to 2. 
- true === Boolean(2) > true as both types are the same. 
15. The == operator compares the value of the two comparitors while the === operator compares the types of them comparitors. 
16. See the js file. 
17. [2,4,6] - I arrived to this conclusion as the modifyArray loop goes through each item in the loop and calls the doSomething function to multiply the item by 2 and push that result into the new array. 
18. See the JS file. 
19. 1432