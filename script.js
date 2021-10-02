var dateInput = document.querySelector('#date-input');
var showBtn = document.querySelector('#show-btn');
var output = document.querySelector('#output');

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