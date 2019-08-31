// create an array of objects to store quiz questions
const quizQuestions = [
    {
        id: 1,
        question: "I discuss issues with others to try to find solutions that meet everyone’s needs."
    },
    {
        id: 2,
        question: "I try to negotiate and use a give-and-take approach to problem situations."
    },
    {
        id: 3,
        question: "I try to meet the expectations of others."
    },
    {
        id: 4,
        question: "I would argue my case and insist on the advantages of my point of view."
    },
    {
        id: 5,
        question: "When there is a disagreement, I gather as much information as I can and keep the lines of communication open."
    },
    {
        id: 6,
        question: "When I find myself in an argument, I usually say very little and try to leave as soon as possible."
    },
    {
        id: 7,
        question: "I try to see conflicts from both sides. What do I need? What does the other person need? What are the issues involved?"
    },
    {
        id: 8,
        question: "I prefer to compromise when solving problems and just move on."
    },
    {
        id: 9,
        question: "I find conflicts exhilarating; I enjoy the battle of wits that usually follows."
    },
    {
        id: 10,
        question: "Being in a disagreement with other people makes me feel uncomfortable and anxious."
    },
    {
        id: 11,
        question: "I try to meet the wishes of my friends and family."
    },
    {
        id: 12,
        question: "I can figure out what needs to be done and I am usually right."
    },
    {
        id: 13,
        question: "To break deadlocks, I would meet people halfway."
    },
    {
        id: 14,
        question: "I may not get what I want but it’s a small price to pay for keeping the peace."
    },
    {
        id: 15,
        question: "I avoid hard feelings by keeping my disagreements with others to myself."
    }
];

const userAnswers = [];

const displayAnswers = [{
    mostPreferredStyle: '',
    leastPreferredStyle: ''
}]

// create an empty array to store user answers
const getUserConflictStyle = (req, res) => {

}

// calculate user answers and alert their results
const calculateResults = (req, res) => {
    //
}

// grab the quiz questions and render on the card
const getQuizQuestions = (req, res) => {
    res.status(200).json(quizQuestions);
}

const addAnswers = (req, res) => {
    userAnswers.push(req.body);
    res.json(userAnswers);
}

const deleteAnswers = (req, res) => {
    userAnswers = [];
    res.json(userAnswers);
}

const getError = (req, res) => {
    res.status(400).json(console.log('ERROR'));
}

module.exports = {
    getQuizQuestions,
    addAnswers,
    calculateResults,
    getUserConflictStyle,
    deleteAnswers,
    getError
}