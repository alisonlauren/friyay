user_input = int(input("Give me a number: "))

for num in range(1, user_input):
    #or you can use 15
    if num % 3 and 5 == 0:
        print("FizzBuzz")
    elif num % 3 == 0:
        print("Fizz")
    elif num % 5 == 0:
        print("Buzz")
    else:
        print(num)