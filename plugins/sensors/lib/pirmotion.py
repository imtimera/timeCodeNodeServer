import RPi.GPIO as GPIO
import json

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

Pin=27
GPIO.setup(Pin,GPIO.IN)
i=GPIO.input(Pin)
print json.dumps({'presence':i})

