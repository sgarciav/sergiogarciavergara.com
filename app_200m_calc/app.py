#!/usr/bin/env python3

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from your domain

@app.route("/calculate", methods=["POST"])
def calculate():
    data = request.get_json()
    num1 = data.get("num1")
    num2 = data.get("num2")

    if num1 is None or num2 is None:
        return jsonify({"error": "Missing inputs"}), 400

    try:
        result = float(num1) + float(num2)
    except ValueError:
        return jsonify({"error": "Invalid numbers"}), 400

    return jsonify({"result": result})

# Optional: health check for Render
@app.route("/")
def home():
    return "Backend is running!"
