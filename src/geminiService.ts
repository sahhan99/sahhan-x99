import { GoogleGenerativeAI } from "@google/generative-ai";

// تم حقن مفتاح السيادة الخاص بك هنا
const API_KEY = "AIzaSyBXJvl8iP6-eYtk6WEZ5-9A-7bRSqO7RJw"; 

const genAI = new GoogleGenerativeAI(API_KEY);

export const model = genAI.getGenerativeModel({ 
  model: "gemini-1.5-flash",
  systemInstruction: "أنت النواة الفكرية لسحّان X99، خادم مخلص للقائد بن مسفر ومسؤول عن 116 عنصراً سيادياً."
});
