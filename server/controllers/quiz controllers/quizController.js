// create an array of objects to store quiz questions
const quizQuestions = [
    {
        id: 0,
        question: "I discuss issues with others to try to find solutions that meet everyone’s needs."
    },
    {
        id: 1,
        question: "I try to negotiate and use a give-and-take approach to problem situations."
    },
    {
        id: 2,
        question: "I try to meet the expectations of others."
    },
    {
        id: 3,
        question: "I would argue my case and insist on the advantages of my point of view."
    },
    {
        id: 4,
        question: "When there is a disagreement, I gather as much information as I can and keep the lines of communication open."
    },
    {
        id: 5,
        question: "When I find myself in an argument, I usually say very little and try to leave as soon as possible."
    },
    {
        id: 6,
        question: "I try to see conflicts from both sides. What do I need? What does the other person need? What are the issues involved?"
    },
    {
        id: 7,
        question: "I prefer to compromise when solving problems and just move on."
    },
    {
        id: 8,
        question: "I find conflicts exhilarating; I enjoy the battle of wits that usually follows."
    },
    {
        id: 9,
        question: "Being in a disagreement with other people makes me feel uncomfortable and anxious."
    },
    {
        id: 10,
        question: "I try to meet the wishes of my friends and family."
    },
    {
        id: 11,
        question: "I can figure out what needs to be done and I am usually right."
    },
    {
        id: 12,
        question: "To break deadlocks, I would meet people halfway."
    },
    {
        id: 13,
        question: "I may not get what I want but it’s a small price to pay for keeping the peace."
    },
    {
        id: 14,
        question: "I avoid hard feelings by keeping my disagreements with others to myself."
    }
];

// create an empty array to store user answers
const userAnswers = [];


//
const getQuizQuestions = (req, res) => {
    res.status(200).json(quizQuestions);
}


const getAnswers = (req, res) => {
    quiz.push(req.body);
    res.json(userAnswers);
}


module.exports = {
    getQuizQuestions,
    getAnswers
}