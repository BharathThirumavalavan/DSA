
//     // Code
//     // Testcase
//     // Testcase
//     // Test Result
//     // Leet
//     // 328. Odd Even Linked List
//     // Medium
//     // Topics
//     // premium lock icon
//     // Companies
//     // Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

//     // The first node is considered odd, and the second node is even, and so on.

//     // Note that the relative order inside both the even and odd groups should remain as it was in the input.

//     // You must solve the problem in O(1) extra space complexity and O(n) time complexity.

    

//     // Example 1:


//     // Input: head = [1,2,3,4,5]
//     // Output: [1,3,5,2,4]
//     // Example 2:


//     // Input: head = [2,1,3,5,6,4,7]
//     // Output: [2,3,6,7,1,5,4]
    

//     // Constraints:

//     // The number of nodes in the linked list is in the range [0, 104].
//     // -106 <= Node.val <= 106


//     /**
//  * Definition for singly-linked list.
//  * class ListNode {
//  *     val: number
//  *     next: ListNode | null
//  *     constructor(val?: number, next?: ListNode | null) {
//  *         this.val = (val===undefined ? 0 : val)
//  *         this.next = (next===undefined ? null : next)
//  *     }
//  * }
//  */


// NOT MY SOLUTION
function oddEvenList(head: ListNode | null): ListNode | null {
    // If list is empty or only has one/two nodes, no reordering needed
    if (!head || !head.next) return head;

    let odd = head;           // Starts at node 1
    let even = head.next;     // Starts at node 2
    const evenHead = even;    // Save the start of the even list to connect later

    // We move while there is an even node and another odd node ahead of it
    while (even !== null && even.next !== null) {
        // 1. Connect odd node to the next odd node
        odd.next = even.next;
        // 2. Move odd pointer forward
        odd = odd.next;

        // 3. Connect even node to the next even node
        even.next = odd.next;
        // 4. Move even pointer forward
        even = even.next;
    }

    // Connect the end of the Odd chain to the beginning of the Even chain
    odd.next = evenHead;

    return head;
}

// [1,2,3,4,5,6,7,8,9,10]


const head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4, // <--- This is the one we want to delete!
                next: {
                    val: 5,
                    next: {
                        val: 6,
                        next: {
                            val: 7,
                            next: null // The end of the hunt
                        }
                    }
                }
            }
        }
    }
};

oddEvenList(head)