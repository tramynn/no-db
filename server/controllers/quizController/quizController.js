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

let userAnswers = {
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer5: "",
    answer6: "",
    answer7: "",
    answer8: "",
    answer9: "",
    answer10: "",
    answer11: "",
    answer12: "",
    answer13: "",
    answer14: "",
    answer15: ""
}

let animals = {
    collaboratingStyle: {
        animal: "Owl",
        style: "Collaborating",
        description: ""
    },
    competingStyle: {
        animal: "Turtle",
        style: "Avoiding",
        description: ""
    },
    avoidingStyle: {
        animal: "Shark",
        style: "Competing",
        description: ""
    },
    accommodatingStyle: {
        animal: "Teddy Bear",
        style: "Accommodating",
        description: ""
    },
    compromisingStyle: {
        animal: "Fox",
        style: "Compromising",
        description: ""
    }
}

// calculate user answers and alert their results
const getResults = (req, res) => {
    const { 
        answer1,
        answer2,
        answer3,
        answer4,
        answer5,
        answer6,
        answer7,
        answer8,
        answer9,
        answer10,
        answer11,
        answer12,
        answer13,
        answer14,
        answer15
    } = userAnswers;

    let collaboratingStyle = Number(answer1) + Number(answer5) + Number(answer7);
    let competingStyle = Number(answer4) + Number(answer9) + Number(answer12);
    let avoidingStyle = Number(answer6) + Number(answer10) + Number(answer15);
    let accommodatingStyle = Number(answer3) + Number(answer11) + Number(answer14);
    let compromisingStyle = Number(answer2) + Number(answer8) + Number(answer13);

    if (collaboratingStyle > competingStyle &&
        collaboratingStyle > avoidingStyle &&
        collaboratingStyle > accommodatingStyle &&
        collaboratingStyle > compromisingStyle) {
            res.status(200).json(animals.collaboratingStyle);
        }
        else if (competingStyle > collaboratingStyle &&
                 competingStyle > avoidingStyle &&
                 competingStyle > accommodatingStyle &&
                 competingStyle > compromisingStyle) 
                 {
                    res.status(200).json(animals.competingStyle);
                 }
        else if (avoidingStyle > collaboratingStyle &&
                avoidingStyle > competingStyle &&
                avoidingStyle > accommodatingStyle &&
                avoidingStyle > compromisingStyle) 
                {
                    res.status(200).json(animals.avoidingStyle);
                }
        else if (accommodatingStyle > collaboratingStyle &&
                accommodatingStyle > competingStyle &&
                accommodatingStyle > avoidingStyle &&
                accommodatingStyle > compromisingStyle) 
                {
                    res.status(200).json(animals.accommodatingStyle);
                }
        else if (compromisingStyle > collaboratingStyle &&
                compromisingStyle > competingStyle &&
                compromisingStyle > avoidingStyle &&
                compromisingStyle > accommodatingStyle)
                {
                    res.status(200).json(animals.compromisingStyle)
                }
    }
// grab the quiz questions and render on the card
const getQuizQuestions = (req, res) => {
    res.status(200).json(quizQuestions);
}

const addAnswers = (req, res) => {
    userAnswers = req.body;
    res.status(200).json(userAnswers);
}

const deleteAnswers = (req, res) => {
    userAnswers = [];
    res.status(200).json(userAnswers);
}

const updateAnswers = (req, res) => {
    let { name } = req.params;
    let { answer } = req.body;
    userAnswers[name] = Number(answer);
    res.sendStatus(200);
}

module.exports = {
    getQuizQuestions,
    addAnswers,
    getResults,
    deleteAnswers,
    updateAnswers
}