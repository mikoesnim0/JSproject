const faqData = [
    {
        id: 1,
        question: "What is your name?",
        answer: "Hello! I'm Minseo Kim, a passionate designer of the world."
    },
    {
        id: 2,
        question: "What do you do?",
        answer: "I specialize in web design, creating beautiful and functional user interfaces."
    },
    {
        id: 3,
        question: "How can I contact you?",
        answer: "You can reach me via email at minseo@example.com or connect with me on LinkedIn."
    }
];

// document.addEventListener('DOMContentLoaded', function() {
//     const buttons = document.querySelectorAll('.accordion-button');
//     buttons.forEach(button => {
//         button.addEventListener('click', function() {
//             const content = this.nextElementSibling;
//             if (content.style.maxHeight) {
//                 content.style.maxHeight = null;
//             } else {
                
//             }
//         });

//         if (content.style.display === 'block'){
//             content.style.display='none';
//         } else {
//             content.style.display='block';
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.accordion-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;

            // Toggle the content's maxHeight to open/close the accordion
            if (content.style.maxHeight) {
                content.style.maxHeight = null; // Close the accordion
            } else {
                content.style.maxHeight = content.scrollHeight + "px"; // Open the accordion
            }
        });
    });
});