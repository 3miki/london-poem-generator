import express from "express";
// import chatCompletion from './services/openai.js';
// import chatCompletion from "./services/gemini.js";
import chatCompletion from "./services/groq.js";

const app = express();

app.use(express.static("public"));

// app.get(
//     '/',
//     (req, res) => {
//         res.send('Hello from my server!');
//     }
// );

app.get("/get-poem", async (req, res) => {
  const response = await chatCompletion(
    "Write a short, impressive poem about London, as if you are in cold, groomy city. Just four lines!"
  );
  res.send({ poem: response });
});

app.get("/test", async (req, res) => {
  const response = await chatCompletion("Provide an amusing sentence.");
  res.send(response);
});
export default app;
