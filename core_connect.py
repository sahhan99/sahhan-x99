import requests
import json

def sahhan_nucleus_connect():
    # مفتاح السيادة السيادي الخاص بك
    api_key = "AIzaSyBXJvl8iP6-eYtk6WEZ5-9A-7bRSqO7RJw"
    
    # المسار العالمي الدقيق لنواة Gemini 1.5 Flash
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}"
    
    headers = {'Content-Type': 'application/json'}
    
    # هيكل البيانات المطلوب للـ 116 عنصراً
    payload = {
        "contents": [{
            "parts": [{"text": "أنت عقل سحّان X99. القائد بن مسفر يطلب منك تأكيد السيادة على الـ 116 عنصراً ونطاق sahhan99.github.io."}]
        }]
    }

    print("🛡️ جاري محاولة العبور رقم 2 بنظام التوجيه الجديد...")

    try:
        response = requests.post(url, headers=headers, json=payload)
        if response.status_code == 200:
            result = response.json()
            # استخراج الرد ببروتوكول جوجل الصحيح
            answer = result['candidates'][0]['content']['parts'][0]['text']
            print(f"\n[بيان سحّان السيادي]:\n{answer}")
        else:
            print(f"⚠️ رفض العبور: {response.status_code}")
            print(f"الرسالة: {response.text}") # هذا السطر سيخبرنا بالسبب الدقيق إذا فشل
    except Exception as e:
        print(f"❌ خطأ تقني في النواة: {e}")

if __name__ == "__main__":
    sahhan_nucleus_connect()

