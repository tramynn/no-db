const express = require("express");
const quizController = require("./controllers/quiz controllers/quizController");
const app = express();

app.use(express.json());

app.get("/api/quiz", quizController.getQuizQuestions);

const PORT = 5555;
app.listen(PORT, 
    () => console.log(`Listening on PORT: ${PORT}`)
);