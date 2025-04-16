// Dates

let my_date = new Date();
console.log(my_date);                       // 2025-04-16T18:19:00.767Z
console.log(my_date.toString());            // Wed Apr 16 2025 23:49:51 GMT+0530 (India Standard Time)
console.log(my_date.toDateString());        // Wed Apr 16 2025
console.log(my_date.toLocaleString());      // 16/4/2025, 11:51:20 pm
console.log(typeof my_date);                // object


// Date.now() STATIC method returns the number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.

const start = Date.now();
console.log("starting timer...");                                       // Expected output: "starting timer..."
setTimeout(() => {
    const millis = Date.now() - start;
    console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);        // Expected output: "seconds elapsed = 2"
}, 2000);


// getDate() method of Date instances returns the day of the month for this date according to local time.
const birthday = new Date("August 19, 1975 23:15:30");
const date1 = birthday.getDate();
console.log(date1);         // Expected output: 19

