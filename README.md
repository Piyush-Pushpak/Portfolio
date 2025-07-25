# 💼 Piyush Pushpak — Developer Portfolio

Welcome to my personal developer portfolio — designed to showcase my projects, skills, and contact details, all in a clean and responsive interface.

---

## 🚀 Tech Stack

- ⚛️ **React.js** (with Vite)
- 🎨 **Tailwind CSS**
- 📧 **EmailJS** (for contact form)
- 🌙 **Dark Mode Support**
- 🖼️ **Responsive Design**

---

## 📸 Features

- ✅ Elegant landing page
- ✅ Dynamic About, Skills, Projects, Services, and Contact sections
- ✅ Project modals with preview & tech stack
- ✅ Scroll-to-top & theme toggle buttons
- ✅ Resume download button
- ✅ Live contact form (EmailJS-powered)
- ✅ GitHub and LinkedIn integration

---

## 📁 Folder Structure

<pre> <code>
portfolio/
├── public/
│ ├── favicon.png
│ └── index.html
├── src/
│ ├── assets/
│ ├── components/
│ ├── sections/
│ ├── App.jsx
│ └── main.jsx
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md
  </code> </pre>


---

## 🧪 Getting Started Locally

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio

2. Install Dependencies
npm install

3. Run the Dev Server
npm run dev

4. Build for Production
npm run build

5 Contact Form Setup (EmailJS)
This project uses EmailJS for frontend-only email sending.

a.) Setup Steps:
Create an account at https://emailjs.com

Create:
a Service
an Email Template (use fields: from_name, from_email, message)
get your Public Key

Add your credentials in Contact.jsx:
emailjs.sendForm(
  "service_XXXXXXX",     // Replace with your Service ID
  "template_XXXXXXX",    // Replace with your Template ID
  form.current,
  "YOUR_PUBLIC_KEY"
);
