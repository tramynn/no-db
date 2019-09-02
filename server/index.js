const express = require("express");
const quizController = require("./controllers/quizController/quizController");
const app = express();

app.use(express.json());

app.get("/api/quiz", quizController.getQuizQuestions);
app.get("/api/result", quizController.getResults);
app.post("/api/quiz", quizController.addAnswers);
app.put("/api/quiz/:name", quizController.updateAnswers)
app.delete("/api/quiz", quizController.deleteAnswers);

const PORT = 5225;
app.listen(PORT, 
    () => console.log(`Listening on PORT: ${PORT}`)
);