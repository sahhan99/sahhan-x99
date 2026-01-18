import { model } from '../geminiService';

export async function processCommand(command: string): Promise<string> {
  try {
    const result = await model.generateContent(command);

    const text =
      result?.response?.text?.() ??
      result?.text?.() ??
      "⚠️ لم يتمكن النظام من استخراج الرد.";

    return text;

  } catch (err) {
    console.error("Core Error:", err);
    return "⚠️ خطأ في النواة الرئيسية.";
  }
}
