from flask import Flask, request, render_template, redirect, url_for
from flask_mail import Mail, Message
import random
import os

app = Flask(__name__)

# Cấu hình Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'your-email@gmail.com'
app.config['MAIL_PASSWORD'] = 'your-email-password'

mail = Mail(app)

otp_store = {}

def generate_otp():
    return random.randint(100000, 999999)

@app.route('/send_otp', methods=['POST'])
def send_otp():
    email = request.form['email']
    otp = generate_otp()
    otp_store[email] = otp
    
    msg = Message('Your OTP Code', sender='your-email@gmail.com', recipients=[email])
    msg.body = f'Your OTP code is {otp}'
    mail.send(msg)
    
    return redirect(url_for('verify_otp', email=email))

@app.route('/verify_otp/<email>', methods=['GET', 'POST'])
def verify_otp(email):
    if request.method == 'POST':
        entered_otp = request.form['otp']
        if otp_store.get(email) == int(entered_otp):
            return "OTP Verified! Access Granted."
        else:
            return "Invalid OTP. Try Again."
    return render_template('verify_otp.html', email=email)

if __name__ == '__main__':
    app.run(debug=True)

if otp_store.get(email) == int(entered_otp):
    return redirect(url_for('protected_content'))
else:
    return "Invalid OTP. Try Again."

@app.route('/protected_content')
def protected_content():
    return "This is the protected content."
