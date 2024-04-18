import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify
import textwrap, json

import google.generativeai as genai

from IPython.display import display
from IPython.display import Markdown

load_dotenv()

api_key = os.getenv("API_KEY")

if not api_key:
  print("Error: API_KEY environment variable not set")
  exit(1)

print(f"API Key: {api_key}")  # Consider hiding API keys for security

app = Flask(__name__)

@app.route('/api/test', methods=['GET'])
def test():
  data = {
    "message": "Hello, World!",
    "status": "success"
  }
  return jsonify(data)

GOOGLE_API_KEY = api_key

genai.configure(api_key=GOOGLE_API_KEY)

model = genai.GenerativeModel('gemini-pro')

def to_markdown(text):
  text = text.replace('•', '  *')
  return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))

prompt = '''You are a general doctor and doing basic diagnosis on patient data
I am providing patient details, can you tell me what is the probably disease and medicines needed
Data:
gender = {}
age = {}
bodyTemp = {}
pulseRate = {}
respirationRate = {}
bloodPressure = {}
bloodOxygenLevel = {}
weight = {}
bloodGlucoseLevel = {}

Output:
probable diseases & medicines needed within 2 lines
'''

@app.route('/api/predict/', methods=['POST'])
def predict():
  if request.method == 'POST' and request.is_json:
    data = request.get_json()
    if len(data) == 9:
      gender = data['gender']
      age = data['age']
      bodyTemp = data['bodyTemp']
      pulseRate = data['pulseRate']
      respirationRate = data['respirationRate']
      bloodPressure = data['bloodPressure']
      bloodOxygenLevel = data['bloodOxygenLevel']
      weight = data['weight']
      bloodGlucoseLevel = data['bloodGlucoseLevel']
      
      retries = 1
      while True:
        temp = prompt.format(*[i for i in data.values()]) # Generated Prompt 
        response = model.generate_content(temp)
        try:
          if "sorry" not in response.text.lower().split() and "not" not in response.text.lower().split():
            print("GEMINI WORKED")
            break
        except json.JSONDecodeError:
          print(retries)
          retries += 1
          pass

      return jsonify({
        "prompt": temp,
        "response": response.text
      })
    else:
      return jsonify({'error': 'Missing required data in request body'}), 400
  else:
    return jsonify({'error': 'Invalid request method. Use POST'}), 405

if __name__ == '__main__':
  app.run(debug=True)
