const express = require("express");
const quizController = require("./controllers/quizController/quizController");
const app = express();

app.use(express.json());

app.get("/api/quiz", quizController.getQuizQuestions);
app.post("/api/quiz", quizController.addAnswers);
app.delete("/api/quiz", quizController.deleteAnswers);

const PORT = 3001;
app.listen(PORT, 
    () => console.log(`Listening on PORT: ${PORT}`)
);