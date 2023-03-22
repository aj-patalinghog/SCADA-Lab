# This is just a very lazy program that demonstrates how to use the GPIO pins on the raspberry PIs.
# This program should be a file named "gpio_testing.py" on the Raspberry PI labeled "PI-07" which is connected to the light sensor.

import RPi.GPIO as GPIO # import GPIO library

inPin = 11
outPin = 29 # See Raspberry PI pinout for pin numbering and accetable pins

GPIO.setmode(GPIO.BOARD)        #Set GPIO numbering mode
GPIO.setup(inPin, GPIO.IN)      #Set pin inPin (11) to be an input
GPIO.setup(outPin, GPIO.OUT)    #Set pin outPin (29) to be an output

try:
    while True:         #this will run until you stop the program
        inPin_status = GPIO.input(inPin)    #Get status (0 or 1) of a GPIO pin setup in input mode
        print(inPin_status)
        GPIO.output(outPin, inPin_status)   #Set outPin to the value of inPin_status (0 or 1)

finally:                 #will always happen
    GPIO.cleanup()                  #cleanup the GPIO pins before ending
