import requests
import json

def check_sahhan_connectivity():
    # مفتاح السيادة الخاص بك
    api_key = "AIzaSyDyT7cnCIin8qyAI5lmsNoqto0XE10gKMI"
    
    # الرابط العالمي الذي يدعم كافة النسخ (v1beta)
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}"
    
    headers = {'Content-Type': 'application/json'}
    payload = {
        "contents": [{"parts": [{"text": "أنت عقل سحّان. هل تسمعني يا نواتي؟"}]}]
    }
    
    print("📡 جاري فحص استجابة النواة بالمسار العالمي (v1beta)...")
    try:
        response = requests.post(url, headers=headers, json=payload)
        if response.status_code == 200:
            print("✅ تم الارتباط السيادي بنجاح!")
            print(f"رد النواة: {response.json()['candidates'][0]['content']['parts'][0]['text']}")
        else:
            print(f"❌ فشل الاتصال. الكود: {response.status_code}")
            print(f"التفاصيل: {response.text}")
    except Exception as e:
        print(f"⚠️ خطأ تقني: {e}")

if __name__ == "__main__":
    check_sahhan_connectivity()

