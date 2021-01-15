
#we already know the first few values of the FS, so i have them initialized here.
first_num = 0
second_num = 1
#asking for userinput, making sure it only accepts integers.
user_input = int(input("Fibonacci sequence from 0 to: "))
#if that user inputs 0, it wont run because there's nothing to print since the seq starts at 0
if user_input <= 0:
    print("Not possible, too small of a number, that's where the sequence starts.")
    #if user inputs 1, well it wont be a long list, just show me the first num in sequence
elif user_input == 1:
    print(first_num)
    #ok finally, now if user inputs 2 or greater, we have something to actually work with
elif user_input >= 2:
    #print these numbers because we already know the first two number in sequence, no reason to add
    #math in to this when we don't have to.
    print(f"{first_num}, {second_num}")
    #so, for the elements in range 2 to whatever number you put in...
    for i in range(2, user_input):
        # we know the following number has to be the sum of its two previous numbers
        next_num = first_num + second_num
        #so give me the next num, and continue to loop until my range is met.
        print(f" {next_num}")
        #this is used to help the loop cycle, aka 0 = 1, 1 = the next num, it just ensures
        #the loop runs on the next number, and then the next.
        first_num = second_num
        second_num = next_num



        





