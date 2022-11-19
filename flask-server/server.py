from flask import Flask,render_template,request,url_for,redirect,session
import pymongo



app=Flask(__name__)

@app.route("/")
def my_index():
    return "placeholder"
