

var td = new Date(); 

day = td.getDay();

// day = 6;

if (day==0) {day = 7}

// document.write (day);




var nextSunday= new Date(td.getFullYear(),td.getMonth(),td.getDate()+(7-day)); 
// document.write(nextSunday);

var dd = nextSunday.getDate();
var mm = nextSunday.getMonth()+1; //January is 0!

var yyyy = nextSunday.getFullYear();
if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} 

var yy = yyyy - 2000;

printSunday = yyyy+mm+dd;
 
printUSCCB = mm+dd+yy;


// document.write("8 digit code: "+printUSCCB);

sundayURL = "http://www.universalis.com/" +printSunday+ "/USA.Sunday/jsonpmass.js?callback=universalisCallback";

// document.write("<p>Sunday URL: " +sundayURL);

sundayURL2 = "http://www.universalis.com/" +printSunday+ "/USA.Sunday/mass.htm#texts";

sundayURL3 = "http://www.usccb.org/bible/readings/" +printUSCCB+ ".cfm";





