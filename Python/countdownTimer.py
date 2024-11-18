import time

def countdown_timer(seconds):
    while seconds > 0:
        mins, secs = divmod(seconds, 60)
        timer_format = '{:02d}:{:02d}'.format(mins, secs)
        print(timer_format, end='\r')
        time.sleep(1)
        seconds -= 1

    print("Time's up!")

# User input for the number of seconds
try:
    total_seconds = int(input("Enter the number of seconds to countdown: "))
    countdown_timer(total_seconds)
except ValueError:
    print("Invalid input. Please enter an integer value.")