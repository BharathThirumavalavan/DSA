// 735. Asteroid Collision
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// We are given an array asteroids of integers representing asteroids in a row. The indices of the asteroid in the array represent their relative position in space.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.



// Example 1:

// Input: asteroids = [5,10,-5]
// Output: [5,10]
// Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
// Example 2:

// Input: asteroids = [8,-8]
// Output: []
// Explanation: The 8 and -8 collide exploding each other.
// Example 3:

// Input: asteroids = [10,2,-5]
// Output: [10]
// Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
// Example 4:

// Input: asteroids = [3,5,-6,2,-1,4]​​​​​​​
// Output: [-6,2,4]
// Explanation: The asteroid -6 makes the asteroid 3 and 5 explode, and then continues going left. On the other side, the asteroid 2 makes the asteroid -1 explode and then continues going right, without reaching asteroid 4.


// Constraints:

// 2 <= asteroids.length <= 104
// -1000 <= asteroids[i] <= 1000
// asteroids[i] != 0


function asteroidCollision(asteroids: number[]): number[] {
    let currentIndex = 0;

    while (currentIndex < asteroids.length) {
        let currentAsteroid = (asteroids[currentIndex] as number)
        // asteroid moving right
        if ((asteroids[currentIndex] as number) >= 0) {
            if (currentIndex + 1 < asteroids.length) {
                let nextAsteroid = asteroids[currentIndex + 1] as number;
                if (nextAsteroid < 0) {
                    nextAsteroid = Math.abs(nextAsteroid);
                    if (nextAsteroid === currentAsteroid) {
                        asteroids.splice(currentIndex, 2);
                    } else if (nextAsteroid > currentAsteroid) {
                        asteroids.splice(currentIndex, 1)
                    } else {
                        asteroids.splice(currentIndex + 1, 1)
                    }

                } else {
                    currentIndex++
                }
            } else {
                currentIndex++
            }
        } else {
            // asteroid moving left
            if (currentIndex - 1 >= 0) {
                let prevAsteroid = asteroids[currentIndex - 1] as number;
                if (prevAsteroid <= 0) {
                    currentIndex++
                } else {
                    prevAsteroid = Math.abs(prevAsteroid);
                    currentAsteroid = Math.abs(currentAsteroid)
                    if (prevAsteroid === currentAsteroid) {
                        asteroids.splice(currentIndex - 1, 2);
                        currentIndex--; // removed prev index
                    } else if (prevAsteroid > currentAsteroid) {
                        asteroids.splice(currentIndex, 1)
                    } else {
                        asteroids.splice(currentIndex - 1, 1)
                    }
                    currentIndex--; // removed prev index
                }
            } else {
                currentIndex++
            }
        }
    }
    return asteroids
};


// Better algo
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
// var asteroidCollision = function(asteroids) {
//     const res = []
    
//     for (let i = 0; i < asteroids.length; i++) {
//         const last = res[res.length - 1]
//         const cur = asteroids[i]
        
//         if (!res.length || last < 0 || cur > 0) {
//             res.push(cur)
//         } else if (-cur == last) {
//             res.pop()
//         } else if (-cur > last) {
//             res.pop()
//             i--
//         }
//     }
    
//     return res  
// };

const asteroids = [8, -8]

const result = asteroidCollision(asteroids)
console.log(result);