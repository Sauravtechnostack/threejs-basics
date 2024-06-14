// Function to convert degree to radians.

/**
 * Soo what is a degree and why do circle has 360 degrees ??
 * Reason 1: Soo it goes back to babylons where their number system was of base 60 unlike ours which is of base 10 so they decided to divide the circle by 360 as this was the number that was divisible by many numbers like 1,2,3,4,5,6,8,9 etc.
 * Reason 2: When the sailors used to use the sky for their reference and they noticed that as the same stars repeated in the sky roughly after every 360 days. (Also the number of days in which the earth completes one rotation.).
 * There is not particular reason for this number apart from this.
 * The circumfarance of the circle is 2*PI*R.
 * Now while doing some advanced calculation we use the arc of the circle i.e. like travel the 1/4th of the circle so at that time dealing with degrees becomes quite numbersome and increases calculations soo what we have come up for this is "Radians".
 * Radians is defined from a arc on the circle which is equal to the radius of the circle.And we know that if we consider the whole circle it will be 2xPIxR soo we can divide the whole circle in 2*PI*R/R (as one arc is equal to R and whole arc is 2*PI*R so we can repeat the small arc R, 2*PI number of times to form the whole circle.)
 * Lets convert degrees to radians:
 * 360deg = 2*PI radian
 * 1 deg = (2*PI/360)radian
 * x deg = x (2*PI/360) radian
 * x deg = (x * PI/ 180) radian
 */

export const degreeToRadian = (degree) => {
  return (degree * Math.PI) / 180;
};
