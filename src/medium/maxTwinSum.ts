// 2130. Maximum Twin Sum of a Linked List
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

// For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
// The twin sum is defined as the sum of a node and its twin.

// Given the head of a linked list with even length, return the maximum twin sum of the linked list.



// Example 1:


// Input: head = [5,4,2,1]
// Output: 6
// Explanation:
// Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
// There are no other nodes with twins in the linked list.
// Thus, the maximum twin sum of the linked list is 6. 
// Example 2:


// Input: head = [4,2,2,3]
// Output: 7
// Explanation:
// The nodes with twins present in this linked list are:
// - Node 0 is the twin of node 3 having a twin sum of 4 + 3 = 7.
// - Node 1 is the twin of node 2 having a twin sum of 2 + 2 = 4.
// Thus, the maximum twin sum of the linked list is max(7, 4) = 7. 
// Example 3:


// Input: head = [1,100000]
// Output: 100001
// Explanation:
// There is only one node with a twin in the linked list having twin sum of 1 + 100000 = 100001.


// Constraints:

// The number of nodes in the list is an even integer in the range [2, 105].
// 1 <= Node.val <= 105



/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// my Solution
function pairSum(head: ListNode | null): number {
    let curr = head;
    let prev = null;
    let next = head;
    const arr = []
    while (curr?.next !== undefined) {
        next = curr.next;
        arr.push(curr.val)
        curr.next = prev;
        prev = curr
        curr = next;

    }
    let maxSum = 0;
    let currIter = 0;
    while (prev?.next !== undefined) {
        const curr_sum = arr[currIter] as number + prev.val as number;
        if (maxSum < curr_sum) {
            maxSum = curr_sum as number
        }
        prev = prev.next
        currIter++

    }
    return maxSum
};

// Algo from leet code
function pairSumBetter(head: ListNode | null): number {
    let slow = head;
    let fast = head;
    // getting the middle of the 
    while (fast?.next !== undefined) {
        slow = slow.next;
        fast = fast?.next?.next;
    }
    // We just split the head in the middle
    console.log(slow);

    let prev = null;
    let curr = head
    fast = head;
    // reversing the first half
    while (fast?.next !== undefined) {
        fast = fast?.next?.next
        const temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    let max_sum = 0
    while (prev?.next !== undefined) {
        const curr_pair_sum = Number(prev.val) + Number(slow.val);
        if (curr_pair_sum > max_sum && !isNaN(curr_pair_sum)) {
            max_sum = curr_pair_sum
        }
        prev = prev.next;
        slow = slow.next
    }
    return max_sum
}

const head = {
    val: 1,
    next: {
        val: 7,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: {
                        val: 6,
                        next: {
                            val: 7,
                            next: {
                                val: 8,
                                next: null // The end of the head
                            }
                        }
                    }
                }
            }
        }
    }
};


const result = pairSumBetter(head)
console.log(result);