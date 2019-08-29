const quiz = [
    {
        id: 1,
        question: "I discuss issues with others to try to find solutions that meet everyone’s needs.",
        answer: ""
    },
    {
        id: 2,
        question: "I try to negotiate and use a give-and-take approach to problem situations.",
        answer: ""
    },
    {
        id: 3,
        question: "I try to meet the expectations of others.",
        answer: ""
    },
    {
        id: 4,
        question: "I would argue my case and insist on the advantages of my point of view.",
        answer: ""
    },
    {
        id: 5,
        question: "When there is a disagreement, I gather as much information as I can and keep the lines of communication open.",
        answer: ""
    },
    {
        id: 6,
        question: "When I find myself in an argument, I usually say very little and try to leave as soon as possible.",
        answer: ""
    },
    {
        id: 7,
        question: "I try to see conflicts from both sides. What do I need? What does the other person need? What are the issues involved?",
        answer: ""
    },
    {
        id: 8,
        question: "I prefer to compromise when solving problems and just move on.",
        answer: ""
    },
    {
        id: 9,
        question: "I find conflicts exhilarating; I enjoy the battle of wits that usually follows.",
        answer: ""
    },
    {
        id: 10,
        question: "Being in a disagreement with other people makes me feel uncomfortable and anxious.",
        answer: ""
    },
    {
        id: 11,
        question: "I try to meet the wishes of my friends and family.",
        answer: ""
    },
    {
        id: 12,
        question: "I can figure out what needs to be done and I am usually right.",
        answer: ""
    },
    {
        id: 13,
        question: "To break deadlocks, I would meet people halfway.",
        answer: ""
    },
    {
        id: 14,
        question: "I may not get what I want but it’s a small price to pay for keeping the peace.",
        answer: ""
    },
    {
        id: 15,
        question: "I avoid hard feelings by keeping my disagreements with others to myself.",
        answer: ""
    }
];

const getQuizQuestions = (req, res) => {
    res.status(200).json(quiz);
}


const deleteQuizAnswers = (req, res) = {
    
}

module.exports = {
    getQuizQuestions,
    deleteQuizAnswers
}