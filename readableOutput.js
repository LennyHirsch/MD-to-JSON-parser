{"difficulty": "2.5", "tasks": [

[{"heading": "Integers and floating point (real) numbers",
"instructions": [
{"content": "\nThe first two types we will learn about are both numbers:\n\nIntegers (or ints) are whole numbers with no decimal point. They can be positive or negative:\n\n",
"option": "text"}, 

{"content": ["\n\n\nan_integer = 14\n\n\nanother_integer = -243"],
"option": "code"}, 

{"content": "\nFloating point numbers (or floats) represent real numbers. They have a decimal place and thus allow us to define numbers to a higher level of precision. Floats can also be used to represent scientific numbers, with E indicating the power of 10:\n\n",
"option": "text"}, 

{"content": ["\n\n\na_float = 3.1415\n\n\na_bigger_float = 6.63E4 #equal to 66,300"],
"option": "code"}]}], 


[{"heading": "Task:",
"instructions": [
{"content": "\nMake a variable called <code>my_integer</code> that has a data type of integer, and a variable called <code>my_float</code> that has a data type of float.\n\n",
"option": "text"}, 

{"content": ["\n\n\nmy_integer =\n\n\n my_float =\n\n\n\n check: if type(my_integer) is int and type(my_float) is float: pass"],
"option": "code"}]}], 


[{"heading": "Characters and strings",
"instructions": [
{"content": "\nAny value enclosed in quotes is a string. Usually strings are used to represent letters or words, but numbers can be stored in strings too.\nPython treats single quotes the same as double quotes. Creating a string variable is simple: just enclose its value in quotes!:\n\n",
"option": "text"}, 

{"content": ["\n\n\na_string = \"Hello world!\"\n\n\nanother_string = 'Strings in Python are as easy as 123.'\n\n\nthis_is_a_string_too = '846'"],
"option": "code"}, 

{"content": "\nPython doesn't have a character type: single characters are just treated as strings of length one.\n\n",
"option": "text"}]}], 


[{"heading": "Task:",
"instructions": [
{"content": "\nMake a string variable called <code>my_name</code> containing your name.\n\n",
"option": "text"}, 

{"content": ["\n\n\nmy_name =\n\n\n\n check: if type(my_name) is str: pass"],
"option": "code"}]}], 


[{"heading": "Booleans",
"instructions": [
{"content": "\nBoolean variables are variables that can have only one of two values: <code>True</code> or <code>False</code>, <code>1</code> or <code>0</code>.\n\n",
"option": "text"}, 

{"content": ["\n\n\na_boolean = True\n\n\nanother_boolean = False"],
"option": "code"}, 

{"content": "\nBooleans are used for situations where we need to answer a Yes or No question.\nFor example, if we want to write down the result of a coin flip in Python, we can use a boolean:\n\n",
"option": "text"}, 

{"content": ["\n\n\ncoin_landed_on_heads = True"],
"option": "code"}, 

{"content": "\nEither the coin lands on heads (<code>True</code>), or it doesn't (<code>False</code>; it lands on tails).\n\nBooleans are simple, but very powerful: they are used in all sorts of logic-based scenarios, many of which we will learn about soon!\n\n",
"option": "text"}]}], 


[{"heading": "Task:",
"instructions": [
{"content": "\nFill in the answer variables with the correct datatype (A, B, C or D) for each of the following variables:\n\n",
"option": "text"}, 

{"content": ["\n\n\nA = 'string'\n\n\nB = 'boolean'\n\n\nC = 'integer'\n\n\nD = 'float'\n\n\n\nexample = 'I am a string'\n\n\nexample_answer = A\n\n\n\nvariable1 = 'hi there'\n\n\nanswer1 =\n\n\n\n variable2 = False\n\n\nanswer2 =\n\n\n\nvariable3 = 85\n\n\nanswer3 =\n\n\n\n variable4 = '42'\n\n\nanswer4 =\n\n\n\n variable5 = 32.529\n\n\nanswer5 =\n\n\n\n check: if answer1 == A and answer2 == B and answer3 == C and answer4 == A and answer5 == D: pass"],
"option": "code"}]}], 


[{"heading": "Casting",
"instructions": [
{"content": "\nSometimes we define a variable with a certain data type, only to find that later on we need that variable in a different type. For example, we may have put a number inside a string, which is fine, but now we want to work with our variable as a number! We can turn our string into a number by <b>casting</b> the variable:\n\n",
"option": "text"}, 

{"content": ["\n\n\nnumber_as_string = '42'\n\n\nnumber_as_integer = int(number_as_string)"],
"option": "code"}, 

{"content": "\nNow we can use the <code>number_as_integer</code> variable to work with our number as an integer!\nLet's say we have the reverse scenario: we have an integer, but we want a string; perhaps we want to <code>print</code> the integer with another string variable. In this case we can cast our integer variable to a string:\n\n",
"option": "text"}, 

{"content": ["\n\n\nan_integer = 52\n\n\ninteger_as_string = str(an_integer)"],
"option": "code"}, 

{"content": "\nThe <code>integer_as_string</code> variable is now a string containing our original integer!\n\n",
"option": "text"}]}], 


[{"heading": "Task:",
"instructions": [
{"content": "\nCreate a variable called <code>my_number</code> containing a number (int or float).\nIn a new variable called <code>my_string</code>, cast <code>my_number</code> to a string.\nFinally, in another variable called <code>my_bool</code>, cast <code>my_string</code> to a boolean value. <code>my_bool</code> should have a <code>True</code> value.\n\n",
"option": "text"}, 

{"content": ["\n\n\nmy_number =\n\n\n my_string =\n\n\n my_bool =\n\n\n\n check: if type(my_number) is int or float and type(my_string) is str and and type(my_bool) is bool and my_bool: pass"],
"option": "code"}]}], 


[{"heading": "More casting",
"instructions": [
{"content": "\nWe can also cast other data types:\n\n",
"option": "text"}, 

{"content": ["\n\n\nan_integer = 72\n\n\na_float = float(an_integer) # equals 72.0\n\n\n\nanother_integer = 0\n\n\ntrue_or_false = bool(another_integer) #equals False\n\n\n\na_string = 'eggs'\n\n\ntruth = bool(a_string) #equals True"],
"option": "code"}, 

{"content": "\nThis last example is interesting: we have just cast a string to a boolean value! We must be careful with this because any non-empty string will become a <code>True</code> value when cast to a boolean. Any empty string (</code>a_string = ''</code>) will become a <code>False</code> boolean value. The same goes for numbers: <code>0</code> turned into a <code>False</code> boolean value, while any other non-zero number will become a <code>True</code> boolean.\n\n<b>Note</b>: If we cast incorrectly, Python will throw errors at us! This happens if the variable we are trying to cast cannot be cast into the desired data type. For example, if we have a number inside a string, we can cast it to an integer, a float or a boolean. However, if the string includes letter characters, we won't be able to cast it to a number:\n\n",
"option": "text"}, 

{"content": ["\n\n\na_number_in_string = '96'\n\n\nan_integer = int(a_number_in_string)\n\n\n\nanother_string = 'I have 96 pairs of socks in my sock drawer'\n\n\nthis_wont_work = int(another_string) #this won't work!"],
"option": "code"}, 

{"content": "\nThe second example will spit errors at us because there are letter characters in our string as well as numbers!\n\n",
"option": "text"}]}], 


[{"heading": "Task:",
"instructions": [
{"content": "\nCan you figure out what the following variables become when cast? Fill out the answer variables with the values of A, B, C and D.\n\n",
"option": "text"}, 

{"content": ["\n\n\nexample = str(76.2)\n\n\nexample_answer = '76.2'\n\n\n\nA = bool('antelope')\n\n\nanswerA =\n\n\n\n B = float('342')\n\n\nanswerB =\n\n\n\n C = int(32.124)\n\n\nanswerC =\n\n\n\n D = str(98)\n\n\nanswerD =\n\n\n\n check: if answerA == True and answerB == 342.0 and answerC == 32 and answerD == '98': pass"],
"option": "code"}]}]], "description": "An introduction to data types in Python", "title": "Data Types"}
