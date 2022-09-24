/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    var stk=[]
    for(var i=0; i<s.length; i++){
        if(s[i]=="]"&&stk[stk.length-1 ]=="["||s[i]==")"&&stk[stk.length-1 ]=="("||s[i]=="}"&&stk[stk.length-1 ]=="{"){
            stk.pop()
        }
        else{
            stk.push(s[i])
            // console.log(stk)
        }
    }
    if(stk.length==0){
        return true
    }
    else{
        return false
    }
};