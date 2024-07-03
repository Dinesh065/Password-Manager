// Define the pins for the stepper motor
int stepPin = 5;
int dirPin = 2;
int enpin = 8;
int stepsPerRevolution = 200; // Number of steps per revolution of the motor
int gearRatio = 10; // Gear ratio of 1:10
float degreesPerStep = 360.0 / (stepsPerRevolution * gearRatio); // Degrees per step

void setup() {
  // Set the motor pins as outputs
  pinMode(stepPin, OUTPUT);
  pinMode(dirPin, OUTPUT); 
}

void loop() {
  // Rotate the motor degrees in one direction
  digitalWrite(dirPin, HIGH); // Set the direction to clockwise
  int stepsToRotate = int(15.3846154 / degreesPerStep); // Calculate the number of steps to rotate degrees
  for (int i = 0; i < stepsToRotate * gearRatio; i++) {
    digitalWrite(stepPin, HIGH);
    delayMicroseconds(250);
    digitalWrite(stepPin, LOW);
    delayMicroseconds(250);
  }
  delay(60000);
}