import Groq from "groq-sdk";
import dotenv from "dotenv";
dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function ChatCompletion(prompt) {
  const chatCompletion = await groq.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "llama3-8b-8192",
  });
  return chatCompletion.choices[0].message.content;
}

export default ChatCompletion;
