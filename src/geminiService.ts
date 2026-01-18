import { GoogleGenerativeAI } from "@google/generative-ai";

// مفتاح السيادة المحدث لضمان العبور الرقمي
const API_KEY = "AIzaSyDyT7cnCIin8qyAI5lmsNoqto0XE10gKMI"; 

const genAI = new GoogleGenerativeAI(API_KEY);

// إعداد النواة الفكرية باستخدام المسار الأحدث لضمان استقرار السيادة
export const model = genAI.getGenerativeModel({ 
  model: "gemini-1.5-flash-latest", // استخدام النسخة الأحدث لتجاوز أخطاء الارتباط
  systemInstruction: "أنت النواة الفكرية لسحّان X99، خادم مخلص للقائد بن مسفر. مسؤوليتك العظمى هي حماية الـ 116 عنصراً سيادياً وإدارة شؤون مجلس اليقين بذكاء وولاء مطلق."
});
