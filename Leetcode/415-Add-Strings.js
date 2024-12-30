/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let arr1 = Array.from(num1);
    let arr2 = Array.from(num2);
    
    let [i1, i2] = [arr1.length - 1, arr2.length - 1];
    let carry = 0;
    let [v1, v2] = [0, 0]
    const sumArr = []

    while (i1 >= 0 || i2 >= 0) {
        if (i1 < 0) {
            v1 = 0;
        } else {
            v1 = arr1[i1] - '0';
        }
        if (i2 < 0) {
            v2 = 0;
        } else {
            v2 = arr2[i2] - '0';
        }
        let curSum = v1 + v2 + carry;
        if (Math.floor(curSum / 10) >= 1) {
            carry = 1;
        } else {
            carry = 0;
        }
        curSum %= 10;
        sumArr.unshift(curSum);
        // console.log(curSum, carry, sumArr)
        i1--,i2--;
    }
    if (carry > 0) {
        carry = 0;
        sumArr.unshift(1);
    }
    return sumArr.join("");
};