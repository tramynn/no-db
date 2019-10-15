// create an array of objects to store quiz questions
const quizQuestions = [
  {
    id: 1,
    question:
      "I discuss issues with others to try to find solutions that meet everyone’s needs."
  },
  {
    id: 2,
    question:
      "I try to negotiate and use a give-and-take approach to problem situations."
  },
  {
    id: 3,
    question: "I try to meet the expectations of others."
  },
  {
    id: 4,
    question:
      "I would argue my case and insist on the advantages of my point of view."
  },
  {
    id: 5,
    question:
      "When there is a disagreement, I gather as much information as I can and keep the lines of communication open."
  },
  {
    id: 6,
    question:
      "When I find myself in an argument, I usually say very little and try to leave as soon as possible."
  },
  {
    id: 7,
    question:
      "I try to see conflicts from both sides. What do I need? What does the other person need? What are the issues involved?"
  },
  {
    id: 8,
    question: "I prefer to compromise when solving problems and just move on."
  },
  {
    id: 9,
    question:
      "I find conflicts exhilarating; I enjoy the battle of wits that usually follows."
  },
  {
    id: 10,
    question:
      "Being in a disagreement with other people makes me feel uncomfortable and anxious."
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
    question:
      "I may not get what I want but it’s a small price to pay for keeping the peace."
  },
  {
    id: 15,
    question:
      "I avoid hard feelings by keeping my disagreements with others to myself."
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
};

let animals = {
  collaboratingStyle: {
    animal: "Owl",
    style: "Collaborating"
  },
  competingStyle: {
    animal: "Shark",
    style: "Competing"
  },
  avoidingStyle: {
    animal: "Turtle",
    style: "Avoiding"
  },
  accommodatingStyle: {
    animal: "Teddy Bear",
    style: "Accommodating"
  },
  compromisingStyle: {
    animal: "Fox",
    style: "Compromising"
  }
};

let userConflictStyle;

// retrieve user answers user answers and send a response
const addAnswers = (req, res) => {
  let {
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
  } = req.body;

  let collaboratingStyle = +answer1 + +answer5 + +answer7;
  let competingStyle = +answer4 + +answer9 + +answer12;
  let avoidingStyle = +answer6 + +answer10 + +answer15;
  let accommodatingStyle = +answer3 + +answer11 + +answer14;
  let compromisingStyle = +answer2 + +answer8 + +answer13;

  let styles = [
    collaboratingStyle,
    competingStyle,
    avoidingStyle,
    accommodatingStyle,
    compromisingStyle
  ];
  let highestNumber = Math.max(...styles);
  console.log(highestNumber);

  if (highestNumber === collaboratingStyle) {
    userConflictStyle = animals.collaboratingStyle;
  } else if (highestNumber === competingStyle) {
    userConflictStyle = animals.competingStyle;
  } else if (highestNumber === avoidingStyle) {
    userConflictStyle = animals.avoidingStyle;
  } else if (highestNumber === accommodatingStyle) {
    userConflictStyle = animals.accommodatingStyle;
  } else if (highestNumber === compromisingStyle) {
    userConflictStyle = animals.compromisingStyle;
  } else {
    console.log("No results");
  }
  res.sendStatus(200);
};

const getResults = (req, res) => {
  res.status(200).json(userConflictStyle);
};

// grab the quiz questions and render on the card
const getQuizQuestions = (req, res) => {
  res.status(200).json(quizQuestions);
};

// erase answers in user answers array
const deleteAnswers = (req, res) => {
  userAnswers = [];
  res.status(200).json(userAnswers);
};

// updating answers
const updateAnswers = (req, res) => {
  let { name } = req.params;
  let { answer } = req.body;
  userAnswers[name] = Number(answer);
  res.sendStatus(200);
};

module.exports = {
  getQuizQuestions,
  addAnswers,
  getResults,
  deleteAnswers,
  updateAnswers
};
