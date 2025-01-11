/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
//  positive one goes right and negative one goes left 
var asteroidCollision = function(asteroids) {
    const stack = []
    for (let i of asteroids) {
        if (stack.length == 0) {
            stack.push(i);
        } else {
            if (i * stack[stack.length - 1] > 0) {
                stack.push(i);
            } else {
                if (i < 0 && stack[stack.length - 1] > 0) {
                    while (stack.length != 0 && i * stack[stack.length - 1] < 0 && Math.abs(stack[stack.length - 1]) < Math.abs(i)) {
                        stack.pop();
                    }
                    if (stack.length == 0) {
                        stack.push(i);
                        continue;
                    }
                    if (i * stack[stack.length - 1] < 0 && Math.abs(stack[stack.length - 1]) == Math.abs(i)) {
                        stack.pop();
                        continue;
                    } 
                    if (i * stack[stack.length - 1] < 0 && Math.abs(stack[stack.length - 1]) > Math.abs(i)) {
                        continue;
                    }    
                    stack.push(i);    
                } else {
                    stack.push(i);
                }
            }
        }
    }
    return stack;


};