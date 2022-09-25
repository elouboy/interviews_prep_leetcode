/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    
    let ans = [];
    let par = []; // stack
    function operateBack( openN, closeN ){
        if(openN==n && closeN==n ){
            ans.push( par.join("") ); 
            return;
        }
        if( openN < n) {
            par.push("(");
            operateBack(openN+1, closeN);
            par.pop();
        }  
        if( openN > closeN) {
            par.push(")");
            operateBack(openN , closeN+1);
            par.pop();
        }
    }
    operateBack(0,0);
    return ans;
    
};