import { model } from "./geminiService";

// دالة استنطاق النواة
async function askSahhan(prompt: string) {
  const result = await model.generateContent(prompt);
  const response = await result.response;
  console.log("رد سحّان:", response.text());
}
