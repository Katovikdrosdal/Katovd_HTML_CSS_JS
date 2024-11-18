import datetime
import time
from playsound import playsound

def set_alarm():
    alarm_time = input("Enter the alarm time in HH:MM:SS format: ")
    try:
        alarm_hour, alarm_minute, alarm_second = map(int, alarm_time.split(':'))
    except ValueError:
        print("Invalid time format. Please use HH:MM:SS.")
        return

    print(f"Alarm set for {alarm_time}.")

    while True:
        now = datetime.datetime.now()
        current_time = now.strftime("%H:%M:%S")

        if current_time == alarm_time:
            print("Time to wake up!")
            try:
                playsound('alarm_sound.mp3')  # Make sure you have an 'alarm_sound.mp3' file in the same directory
            except Exception as e:
                print(f"Error playing sound: {e}")
            break
        time.sleep(1)

if __name__ == "__main__":
    set_alarm()
