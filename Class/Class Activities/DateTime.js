// Date Basics
let myDate = new Date();
console.log(myDate);
console.log(myDate.toString()); // Converts date to readable string with time & timezone
console.log(myDate.toDateString()); // Shows only date (Day Month Date Year), when time is not required
console.log(myDate.toISOString()); // ISO format
console.log(myDate.toLocaleDateString()); // Shows date based on local region
console.log(typeof(myDate));
console.log(myDate.getFullYear()); // Current year

let mycreatedDate = new Date(2026,1,21);
console.log(mycreatedDate);
console.log(mycreatedDate.toString());

// Creating date using string format
let mycreatedDate2 = new Date("01-21-2026");
console.log(mycreatedDate2);
console.log(mycreatedDate2.toLocaleString());

// Timestamps
/* A timestamp is the number of milliseconds passed since:
   January 1, 1970, 00:00:00 UTC
   (known as Unix Epoch)
*/
let myTimeStamp = Date.now() // Returns milliseconds
console.log(myTimeStamp);
console.log(Date.now() / 1000); 

console.log(mycreatedDate2.getTime()); // Converts specific date to timestamp,Useful for comparison between two dates
console.log(Math.floor(Date.now()/ 1000)); // Conversts milliseconds into seconds

let newDate = new Date;
console.log(newDate.getDay()); // Day of week (0 = Sunday)
console.log(newDate.getDate()); // Day of month (1–31)
console.log(newDate.getFullYear()); //Current year
console.log(newDate.getMonth()); // Month index (0–11)
console.log(newDate.getUTCDate()); // Returns date according to UTC timezone
console.log(newDate.toLocaleString('default',{weekday:"long"})); // Returns weekday name

// Why Date & Time Methods Are Used
/* 
   Date & Time methods are used to:
   1.Track current time
   2.Store created / updated timestamps
   3.Compare dates (expiry, deadlines)
   4.Display user-friendly date & time
   5.Handle time zones
*/
