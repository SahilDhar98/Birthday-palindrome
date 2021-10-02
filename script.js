var dateInput = document.querySelector('#date-input');
var showBtn = document.querySelector('#show-btn');
var output = document.querySelector('#output');

function isPalindrome(str) {
    var reverse = reverseStr(str);
    return str === reverse;
  }

  function dateToStr(date) {

    var dateStr = { day: '', month: '', year: '' };
  
    if (date.day < 10) {
      dateStr.day = '0' + date.day;
    }
    else {
      dateStr.day = date.day.toString();
    }
  
    if (date.month < 10) {
      dateStr.month = '0' + date.month;
    }
    else {
      dateStr.month = date.month.toString();
    }
  
    dateStr.year = date.year.toString();
    return dateStr;
  }
  
  function getAllDateFormats(date) {
    var dateStr = dateToStr(date);
  
    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
  
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
  }
  
  function checkPalindromeForAllDateFormats(date){
    var listOfPalindromes = getAllDateFormats(date);
  
    var flag = false;
  
    for(var i=0; i < listOfPalindromes.length; i++){
      if(isPalindrome(listOfPalindromes[i])){
        flag = true;
        break;
      }
    }
    
    return flag;
  }

  
showBtn.addEventListener("click", function clickEventhandler(){
    var bday = dateInput.value;
    if(bday!=="")
    {
        var datelist = bday.split('-');
        var date = {
            day:Number(datelist[2]),
            day:Number(datelist[1]),
            day:Number(datelist[0])
        };
        var isPalindrome = 
        checkPalindromeForAllDateFormats(date);
        if(isPalindrome){
            output.innerText="Your Birthday is a Palindrome."
            
        }
        else{
            var[ctr ,nextDate] = getNextPalindrome(date);
            output.innerText = "The next palindrome date is "{ndate.day}-{ndate.month}-{ndate.year},"you missed it by" {ctr} "days"
        }

    }


})

