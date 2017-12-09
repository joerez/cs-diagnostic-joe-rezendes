#start
#print sequence of numbers
#determine if numbers are divisible by 3, and replace with fizz if true
#determine if numbers are divisible by 5, and replace with buzz if true
#determine if numbers can be divisible by both 3 and 5, and replace with fizzbuzz if true
#otherwise print the number as is
#end

def fizzBuzz(n):

    if n % 3 == 0:
        print('fizz')
    elif n % 5 == 0:
        print('buzz')
    elif n % 3 && n % 5 == 0:
        print('fizzbuzz')
    else:
        print(n)

fizzBuzz(25)
