/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
    //starting string
    let string = "1";

    //loop n-1 times, since n = 1 is the starting string
    for (let index = 1; index < n; ++index){
        let newString = "";
        
        for (let i = 0; i < string.length; ++i){
            let num = string[i];
            let count = 0;
            
            //count the number of continuous times a number shows up
            let j = i;
            while (j < string.length && string[j] == num){
                ++count;
                ++j;
            }
            
            //continue the loop from the last non-equal number
            i = j-1;
            
            //add the count of nums to the new string
            newString += count + num;
        }
        
        //string at n = index is equal to the new string
        string = newString;
    }
    
    return string;
};
