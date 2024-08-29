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
const accordionWrapper = document.querySelector('.accordion');

function createAccordionData() {
    accordionWrapper.innerHTML = faqData.map(faq => {
        return `
            <div class="accordion-item">
                <button class="accordion-button">${faq.question}</button>
                
                <div class="accordion-content">${faq.answer}</div>
                <i class="fa-solid fa-arrow-up"></i>
            </div>
        `;
    }).join("");
}