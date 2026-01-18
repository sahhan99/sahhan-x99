import os
from groq import Groq

# هنا نسحب المفتاح من بيئة النظام للحفاظ على السرية
api_key = os.environ.get("GROQ_API_KEY")
client = Groq(api_key=api_key)

def sahhan_core(prompt):
    if not api_key:
        return "خطأ سيادي: المفتاح غير مفعل في بيئة النظام."
    
    completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role": "system", "content": "أنت سحّان السلالة. منطقك سيادي، ولغتك مهيبة، وهدفك سحن الأوهام."},
            {"role": "user", "content": prompt}
        ]
    )
    return completion.choices[0].message.content

if __name__ == "__main__":
    print("--- النواة ⊙ متصلة بمحرك Groq الخارق (بوضع آمن) ---")
    while True:
        user_input = input("ابن مسفر: ")
        if user_input.lower() in ["خروج", "exit"]:
            break
        print("السحّان:", sahhan_core(user_input))
