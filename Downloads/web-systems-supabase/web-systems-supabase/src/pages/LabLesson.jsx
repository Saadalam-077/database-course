import React, { useState } from 'react';

const LabLesson = ({ labNum, user, onNavigate, onExerciseComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showExercise, setShowExercise] = useState(false);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const labData = {
    1: {
      title: "Introduction to HTML",
      titleAr: "مقدمة في HTML",
      icon: "🌐",
      videos: [
        { id: "UB1O30fR-EE", title: "HTML Crash Course for Beginners" },
        { id: "qz0aGYrrlhU", title: "HTML Tutorial for Beginners" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 1", text: "Learn the basics of HTML - the language that structures web pages." },
        { type: "concept", title: "What is HTML?", text: "HTML (HyperText Markup Language) is the standard language for creating web pages.", points: ["HTML describes the structure of a web page", "HTML consists of elements (tags)", "Browsers read HTML and display content", "HTML files have .html extension"] },
        { type: "code", title: "Basic HTML Structure", code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>My First Page</title>\n</head>\n<body>\n    <h1>Hello World!</h1>\n    <p>This is my first web page.</p>\n</body>\n</html>", text: "Every HTML page has this basic structure" },
        { type: "concept", title: "HTML Tags Explained", text: "Let's understand each part:", points: ["<!DOCTYPE html> - Declares HTML5", "<html> - Root element", "<head> - Meta information", "<title> - Browser tab title", "<body> - Visible content", "<h1> - Largest heading", "<p> - Paragraph"] },
        { type: "handson", title: "Try It Yourself", text: "Create your first HTML file:", steps: ["Open Notepad or VS Code", "Type the basic HTML structure", "Save as 'index.html'", "Double-click to open in browser"] }
      ],
      exercises: [
        { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], correct: 0 },
        { q: "Which tag is the root of HTML?", options: ["<body>", "<head>", "<html>", "<root>"], correct: 2 },
        { q: "Where does <title> go?", options: ["In <body>", "In <head>", "After </html>", "Before <!DOCTYPE>"], correct: 1 },
        { q: "Largest heading tag?", options: ["<h6>", "<h3>", "<h1>", "<heading>"], correct: 2 },
        { q: "Which creates a paragraph?", options: ["<paragraph>", "<text>", "<para>", "<p>"], correct: 3 }
      ]
    },
    2: {
      title: "HTML Elements & Tags",
      titleAr: "عناصر ووسوم HTML",
      icon: "📝",
      videos: [
        { id: "salY_Sm6mv4", title: "Learn HTML in 12 Minutes" },
        { id: "PlxWf493en4", title: "HTML Tags Tutorial" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 2", text: "Learn about HTML elements for text, images, and links." },
        { type: "concept", title: "Text Elements", text: "HTML tags for text formatting:", points: ["<h1> to <h6> - Headings", "<p> - Paragraphs", "<strong> - Bold", "<em> - Italic", "<br> - Line break", "<hr> - Horizontal line"] },
        { type: "code", title: "Links", code: '<a href="https://google.com">Click Here</a>\n<a href="page2.html">Go to Page 2</a>', text: "The <a> tag creates clickable links" },
        { type: "code", title: "Images", code: '<img src="photo.jpg" alt="My Photo">\n<img src="image.png" alt="Description" width="300">', text: "The <img> tag displays images" },
        { type: "code", title: "Lists", code: '<ul>\n  <li>Bullet 1</li>\n  <li>Bullet 2</li>\n</ul>\n\n<ol>\n  <li>First</li>\n  <li>Second</li>\n</ol>', text: "<ul> for bullets, <ol> for numbers" }
      ],
      exercises: [
        { q: "Which tag creates a link?", options: ["<link>", "<a>", "<href>", "<url>"], correct: 1 },
        { q: "Link destination attribute?", options: ["src", "link", "href", "url"], correct: 2 },
        { q: "Which displays an image?", options: ["<image>", "<pic>", "<photo>", "<img>"], correct: 3 },
        { q: "'alt' attribute does?", options: ["Adds link", "Describes image", "Changes size", "Adds border"], correct: 1 },
        { q: "Numbered list uses?", options: ["<ul>", "<nl>", "<ol>", "<list>"], correct: 2 }
      ]
    },
    3: {
      title: "HTML Forms",
      titleAr: "نماذج HTML",
      icon: "📋",
      videos: [
        { id: "fNcJuPIZ2WE", title: "HTML Forms Tutorial" },
        { id: "frAGrGN00OA", title: "Form Elements" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 3", text: "Create interactive forms for user input." },
        { type: "code", title: "Basic Form", code: '<form action="/submit" method="POST">\n  <label for="name">Name:</label>\n  <input type="text" id="name" name="name">\n  <button type="submit">Submit</button>\n</form>', text: "Forms collect and send user data" },
        { type: "concept", title: "Input Types", text: "HTML5 input types:", points: ["text - Regular text", "password - Hidden", "email - Email validation", "number - Numbers only", "date - Date picker", "checkbox - Multiple choices", "radio - Single choice"] },
        { type: "code", title: "Form Elements", code: '<input type="text" placeholder="Name">\n<input type="email" placeholder="Email">\n<input type="password" placeholder="Password">\n<select>\n  <option>Option 1</option>\n  <option>Option 2</option>\n</select>\n<textarea rows="4">Message</textarea>', text: "Various form elements" }
      ],
      exercises: [
        { q: "Which creates a form?", options: ["<input>", "<form>", "<submit>", "<field>"], correct: 1 },
        { q: "Hidden password input?", options: ["hidden", "secret", "password", "private"], correct: 2 },
        { q: "Dropdown uses?", options: ["<dropdown>", "<list>", "<option>", "<select>"], correct: 3 },
        { q: "Multi-line text uses?", options: ["<input>", "<text>", "<textarea>", "<multiline>"], correct: 2 },
        { q: "'required' attribute?", options: ["Optional field", "Must fill", "Adds border", "Changes color"], correct: 1 }
      ]
    },
    4: {
      title: "Introduction to CSS",
      titleAr: "مقدمة في CSS",
      icon: "🎨",
      videos: [
        { id: "yfoY53QXEnI", title: "CSS Crash Course" },
        { id: "1PnVor36_40", title: "Learn CSS in 20 Minutes" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 4", text: "Learn CSS to style your web pages." },
        { type: "concept", title: "What is CSS?", text: "CSS controls how HTML looks.", points: ["Colors and backgrounds", "Fonts and text", "Spacing and layout", "Animations"] },
        { type: "code", title: "CSS Syntax", code: "selector {\n  property: value;\n}\n\nh1 {\n  color: blue;\n  font-size: 24px;\n}", text: "CSS rules have selector and declarations" },
        { type: "code", title: "3 Ways to Add CSS", code: '/* Inline */\n<p style="color: red;">Red</p>\n\n/* Internal */\n<style>\n  p { color: red; }\n</style>\n\n/* External (best) */\n<link rel="stylesheet" href="style.css">', text: "External CSS is recommended" },
        { type: "concept", title: "Common Properties", text: "Frequently used:", points: ["color - Text color", "background-color", "font-size", "margin - Outside space", "padding - Inside space", "border"] }
      ],
      exercises: [
        { q: "CSS stands for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Sheets"], correct: 1 },
        { q: "Best way to add CSS?", options: ["Inline", "Internal", "External file", "JavaScript"], correct: 2 },
        { q: "Text color property?", options: ["text-color", "font-color", "color", "foreground"], correct: 2 },
        { q: "'margin' controls?", options: ["Inside spacing", "Outside spacing", "Border", "Text size"], correct: 1 },
        { q: "Selector for all <p>?", options: [".p", "#p", "p", "*p"], correct: 2 }
      ]
    },
    5: {
      title: "CSS Box Model & Layout",
      titleAr: "نموذج الصندوق",
      icon: "📦",
      videos: [
        { id: "rIO5326FgPE", title: "CSS Box Model Explained" },
        { id: "M6coJNLFBWI", title: "Learn CSS Box Model" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 5", text: "Understand the CSS Box Model." },
        { type: "concept", title: "The Box Model", text: "Every element is a box:", points: ["Content - The actual content", "Padding - Space inside border", "Border - Line around element", "Margin - Space outside border"] },
        { type: "code", title: "Box Model CSS", code: ".box {\n  width: 200px;\n  height: 100px;\n  padding: 20px;\n  border: 2px solid black;\n  margin: 10px;\n}", text: "Total = width + padding + border + margin" },
        { type: "code", title: "Spacing Shortcuts", code: "padding: 10px; /* all sides */\npadding: 10px 20px; /* top/bottom, left/right */\npadding: 10px 20px 15px 25px; /* top, right, bottom, left */", text: "Multiple ways to set spacing" }
      ],
      exercises: [
        { q: "Box Model order (inside out)?", options: ["Margin, Border, Padding, Content", "Content, Padding, Border, Margin", "Content, Margin, Padding, Border", "Border, Content, Padding, Margin"], correct: 1 },
        { q: "Padding is space:", options: ["Outside border", "Inside border", "Between elements", "In content"], correct: 1 },
        { q: "padding: 10px 20px means?", options: ["All 10px 20px", "Top/Bottom 10px, Left/Right 20px", "Top 10px, Bottom 20px", "Left 10px, Right 20px"], correct: 1 },
        { q: "display: none does?", options: ["Transparent", "Hides completely", "Removes border", "Centers"], correct: 1 },
        { q: "Full width display?", options: ["inline", "inline-block", "block", "flex"], correct: 2 }
      ]
    },
    6: {
      title: "CSS Flexbox",
      titleAr: "CSS Flexbox",
      icon: "📐",
      videos: [
        { id: "fYq5PXgSsbE", title: "Flexbox in 20 Minutes" },
        { id: "JJSoEo8JSnc", title: "Flexbox Tutorial" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 6", text: "Master Flexbox for layouts." },
        { type: "concept", title: "What is Flexbox?", text: "Easy layout method:", points: ["Easy alignment", "Flexible sizing", "Row or column", "Responsive design"] },
        { type: "code", title: "Enable Flexbox", code: ".container {\n  display: flex;\n}", text: "Add display: flex to parent" },
        { type: "code", title: "Flexbox Properties", code: ".container {\n  display: flex;\n  flex-direction: row; /* or column */\n  justify-content: center; /* horizontal */\n  align-items: center; /* vertical */\n  flex-wrap: wrap;\n}", text: "Common flexbox properties" },
        { type: "code", title: "Center Everything", code: ".center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}", text: "Easiest way to center!" }
      ],
      exercises: [
        { q: "Enable flexbox?", options: ["display: flexbox", "display: flex", "flex: on", "flexbox: true"], correct: 1 },
        { q: "flex-direction: column?", options: ["Left to right", "Right to left", "Top to bottom", "Random"], correct: 2 },
        { q: "justify-content aligns?", options: ["Vertically", "Horizontally", "Diagonally", "Circularly"], correct: 1 },
        { q: "space-between does?", options: ["Space at start", "Equal space between", "Removes space", "Centers"], correct: 1 },
        { q: "align-items: center?", options: ["Centers horizontally", "Centers vertically", "Centers both", "Aligns top"], correct: 1 }
      ]
    },
    7: {
      title: "Introduction to JavaScript",
      titleAr: "مقدمة في JavaScript",
      icon: "⚡",
      videos: [
        { id: "W6NZfCO5SIk", title: "JavaScript for Beginners" },
        { id: "hdI2bqOjy3c", title: "JavaScript Crash Course" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 7", text: "Learn JavaScript for interactivity." },
        { type: "concept", title: "What is JavaScript?", text: "Programming language for web:", points: ["Makes pages interactive", "Responds to actions", "Changes HTML/CSS", "Runs in browser"] },
        { type: "code", title: "Adding JavaScript", code: '<!-- Internal -->\n<script>\n  alert("Hello!");\n</script>\n\n<!-- External -->\n<script src="script.js"></script>', text: "Add before </body>" },
        { type: "code", title: "Variables", code: 'let name = "John";\nlet age = 25;\nconst PI = 3.14;\n\nconsole.log(name);\nconsole.log("Age: " + age);', text: "let can change, const cannot" },
        { type: "code", title: "Functions", code: 'function greet(name) {\n  return "Hello, " + name;\n}\n\nlet msg = greet("Ahmed");\nconsole.log(msg);', text: "Reusable code blocks" }
      ],
      exercises: [
        { q: "JavaScript makes pages:", options: ["Slower", "Interactive", "Colorful", "Bigger"], correct: 1 },
        { q: "Changeable variable?", options: ["const", "let", "var", "fixed"], correct: 1 },
        { q: "Show in console?", options: ["print()", "console.log()", "display()", "show()"], correct: 1 },
        { q: "Function is:", options: ["A color", "Reusable code", "Variable type", "HTML tag"], correct: 1 },
        { q: "Where add <script>?", options: ["In <head> only", "Before </body>", "After </html>", "In <title>"], correct: 1 }
      ]
    },
    8: {
      title: "JavaScript DOM",
      titleAr: "التعامل مع DOM",
      icon: "🔧",
      videos: [
        { id: "0ik6X4DJKCc", title: "JavaScript DOM Tutorial" },
        { id: "y17RuWkWdn8", title: "DOM Manipulation" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 8", text: "Change HTML with JavaScript." },
        { type: "concept", title: "What is DOM?", text: "Document Object Model:", points: ["HTML as tree of objects", "JS can access/modify", "Change content, styles", "React to user actions"] },
        { type: "code", title: "Selecting Elements", code: 'let el = document.getElementById("title");\nlet items = document.getElementsByClassName("item");\nlet btn = document.querySelector(".btn");\nlet all = document.querySelectorAll(".btn");', text: "Select elements first" },
        { type: "code", title: "Changing Content", code: 'element.textContent = "New text";\nelement.innerHTML = "<b>Bold</b>";\nelement.style.color = "red";\nelement.classList.add("active");', text: "Modify elements" }
      ],
      exercises: [
        { q: "DOM stands for:", options: ["Document Object Model", "Data Object Method", "Digital Output", "Document Order"], correct: 0 },
        { q: "Select by ID:", options: ["querySelector()", "getElementById()", "getElement()", "selectById()"], correct: 1 },
        { q: "Change text:", options: ["element.text", "element.textContent", "element.content", "element.value"], correct: 1 },
        { q: "Change style:", options: ["element.css", "element.style.color", "element.color", "setStyle()"], correct: 1 },
        { q: "Add CSS class:", options: ["addClass()", "class.add()", "classList.add()", "addClassName()"], correct: 2 }
      ]
    },
    9: {
      title: "JavaScript Events",
      titleAr: "أحداث JavaScript",
      icon: "🎯",
      videos: [
        { id: "YiOlaiscqDY", title: "JavaScript Events" },
        { id: "e57ReoUn6kM", title: "Event Listeners" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 9", text: "Respond to user actions." },
        { type: "concept", title: "What are Events?", text: "Actions on a page:", points: ["click - User clicks", "mouseover - Mouse hovers", "keydown - Key pressed", "submit - Form submitted", "load - Page loaded"] },
        { type: "code", title: "Event Listeners", code: 'let btn = document.querySelector("#btn");\n\nbtn.addEventListener("click", function() {\n  alert("Clicked!");\n});', text: "addEventListener is modern" },
        { type: "code", title: "Event Object", code: 'btn.addEventListener("click", function(event) {\n  console.log(event.target);\n  event.preventDefault();\n});', text: "Event gives you details" }
      ],
      exercises: [
        { q: "Button click event:", options: ["press", "click", "push", "tap"], correct: 1 },
        { q: "Modern event method:", options: ["onclick", "addEventListener", "attachEvent", "onEvent"], correct: 1 },
        { q: "preventDefault() does:", options: ["Prevents events", "Stops default action", "Removes element", "Reloads"], correct: 1 },
        { q: "event.target is:", options: ["Event name", "Element clicked", "Event time", "Parent"], correct: 1 },
        { q: "Form submit event:", options: ["send", "post", "submit", "form"], correct: 2 }
      ]
    },
    10: {
      title: "Building Complete Web Page",
      titleAr: "بناء صفحة ويب كاملة",
      icon: "🚀",
      videos: [
        { id: "G3e-cpL7ofc", title: "Build a Website" },
        { id: "p0bGHP-PXD4", title: "Complete Web Project" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 10", text: "Put everything together!" },
        { type: "concept", title: "Project Structure", text: "Organize your files:", points: ["index.html - Main HTML", "style.css - All styles", "script.js - JavaScript", "images/ - Image folder"] },
        { type: "code", title: "HTML Structure", code: '<!DOCTYPE html>\n<html>\n<head>\n  <title>My Site</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <header><nav>Nav</nav></header>\n  <main><section>Content</section></main>\n  <footer>Footer</footer>\n  <script src="script.js"></script>\n</body>\n</html>', text: "Semantic HTML structure" },
        { type: "concept", title: "Best Practices", text: "Tips:", points: ["Use semantic HTML", "Keep CSS organized", "Comment your code", "Test on browsers", "Make it responsive"] }
      ],
      exercises: [
        { q: "Styles file:", options: ["index.html", "script.js", "style.css", "images/"], correct: 2 },
        { q: "Navigation tag:", options: ["<div>", "<nav>", "<menu>", "<links>"], correct: 1 },
        { q: "box-sizing: border-box:", options: ["Adds border", "Includes padding in width", "Removes margins", "Centers"], correct: 1 },
        { q: "Best <script> location:", options: ["In <head>", "Start of <body>", "Before </body>", "After </html>"], correct: 2 },
        { q: "max-width: 1200px:", options: ["Minimum width", "Exact width", "Maximum limit", "No effect"], correct: 2 }
      ]
    }
  };

  const lab = labData[labNum];
  if (!lab) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <p>Lab {labNum} coming soon!</p>
          <button onClick={() => onNavigate('home')} className="mt-4 px-6 py-2 bg-blue-600 rounded-lg">Back</button>
        </div>
      </div>
    );
  }

  const totalSteps = lab.content.length + 2;

  const handleAnswer = (qi, ai) => { if (!submitted) setAnswers({...answers, [qi]: ai}); };

  const handleSubmit = () => {
    let c = 0;
    lab.exercises.forEach((e, i) => { if (answers[i] === e.correct) c++; });
    const s = Math.round((c / lab.exercises.length) * 100);
    setScore(s);
    setSubmitted(true);
    onExerciseComplete(labNum, s);
  };

  if (showExercise) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 text-white p-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Lab {labNum} Exercise | تمرين المعمل {labNum}</h2>
          </div>
          {!submitted ? (
            <div className="space-y-6">
              {lab.exercises.map((ex, i) => (
                <div key={i} className="bg-slate-700/30 rounded-xl p-4">
                  <p className="text-white font-semibold mb-3">{i+1}. {ex.q}</p>
                  <div className="space-y-2">
                    {ex.options.map((opt, j) => (
                      <button key={j} onClick={() => handleAnswer(i, j)} className={`w-full text-left px-4 py-2 rounded-lg ${answers[i] === j ? 'bg-blue-600' : 'bg-slate-800 hover:bg-slate-700'}`}>
                        {String.fromCharCode(65+j)}. {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <button onClick={handleSubmit} disabled={Object.keys(answers).length < 5} className="w-full py-3 bg-emerald-600 rounded-xl font-bold disabled:opacity-50">Submit | إرسال</button>
            </div>
          ) : (
            <div className="text-center">
              <div className={`p-8 rounded-2xl mb-6 ${score >= 60 ? 'bg-emerald-900/30' : 'bg-red-900/30'}`}>
                <p className="text-5xl mb-2">{score >= 60 ? '🎉' : '😔'}</p>
                <p className="text-4xl font-bold">{score}%</p>
                <p className="text-slate-400 mt-2">{score >= 60 ? 'Great job! | أحسنت!' : 'Keep trying! | حاول مرة أخرى!'}</p>
              </div>
              <div className="space-y-3 mb-6 text-left">
                {lab.exercises.map((ex, i) => (
                  <div key={i} className={`p-3 rounded-lg ${answers[i] === ex.correct ? 'bg-emerald-900/30' : 'bg-red-900/30'}`}>
                    <p>{i+1}. {ex.q}</p>
                    <p className="text-sm">{answers[i] === ex.correct ? '✓ Correct' : `✗ Answer: ${ex.options[ex.correct]}`}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => onNavigate('home')} className="px-6 py-3 bg-blue-600 rounded-xl">Back to Course | العودة للدورة</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  const renderContent = () => {
    if (currentStep === lab.content.length) {
      return (
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Video Tutorials | فيديوهات تعليمية</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {lab.videos.map((v, i) => (
              <div key={i} className="bg-slate-700/30 rounded-xl overflow-hidden">
                <div className="aspect-video">
                  <iframe src={`https://www.youtube.com/embed/${v.id}`} title={v.title} className="w-full h-full" allowFullScreen></iframe>
                </div>
                <p className="p-3 font-semibold">{v.title}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
    if (currentStep === lab.content.length + 1) {
      return (
        <div className="p-6 text-center">
          <p className="text-5xl mb-4">✅</p>
          <h2 className="text-2xl font-bold mb-2">Lab Complete!</h2>
          <p className="text-blue-300/70 font-arabic mb-6">اكتمل المعمل!</p>
          <button onClick={() => setShowExercise(true)} className="px-8 py-4 bg-emerald-600 rounded-xl font-bold text-lg">Start Exercise | ابدأ التمرين</button>
        </div>
      );
    }
    const c = lab.content[currentStep];
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <span className="px-3 py-1 bg-blue-600/30 rounded-full text-blue-300 text-sm">{c.type === 'handson' ? '🛠️ Hands-On' : c.type === 'code' ? '💻 Code' : '📖 Concept'}</span>
          <h2 className="text-2xl font-bold mt-4">{c.title}</h2>
        </div>
        {c.text && <div className="bg-slate-700/30 rounded-xl p-6 mb-6"><p>{c.text}</p></div>}
        {c.points && <div className="bg-slate-700/30 rounded-xl p-6 mb-6">{c.points.map((p,i) => <p key={i} className="mb-2">✓ {p}</p>)}</div>}
        {c.code && <div className="bg-slate-900 rounded-xl p-6 mb-6 overflow-x-auto"><pre className="text-cyan-300 font-mono text-sm whitespace-pre-wrap">{c.code}</pre></div>}
        {c.steps && <div className="space-y-3">{c.steps.map((s,i) => <div key={i} className="flex gap-3 bg-slate-700/30 rounded-lg p-4"><span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">{i+1}</span><span>{s}</span></div>)}</div>}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 text-white flex flex-col">
      <header className="bg-slate-800/80 border-b border-slate-700 p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => onNavigate('home')} className="px-3 py-2 bg-slate-700 rounded-lg">← Back</button>
            <div>
              <h1 className="font-bold">Lab {labNum}: {lab.title}</h1>
              <p className="text-xs text-blue-300/70 font-arabic">{lab.titleAr}</p>
            </div>
          </div>
          <span className="text-3xl">{lab.icon}</span>
        </div>
      </header>
      <div className="bg-slate-800/50 border-b border-slate-700 px-4 py-2">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between text-xs text-slate-400 mb-1">
            <span>Step {currentStep + 1} / {totalSteps}</span>
            <span>{Math.round(((currentStep+1)/totalSteps)*100)}%</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 transition-all" style={{width: `${((currentStep+1)/totalSteps)*100}%`}}></div>
          </div>
        </div>
      </div>
      <div className="flex-1">{renderContent()}</div>
      <div className="bg-slate-800/80 border-t border-slate-700 p-4 sticky bottom-0">
        <div className="max-w-6xl mx-auto flex justify-between">
          <button onClick={() => setCurrentStep(Math.max(0, currentStep-1))} disabled={currentStep === 0} className={`px-6 py-2 rounded-lg ${currentStep === 0 ? 'bg-slate-700 text-slate-500' : 'bg-slate-700 hover:bg-slate-600'}`}>← Previous</button>
          {currentStep < totalSteps - 1 ? (
            <button onClick={() => setCurrentStep(currentStep+1)} className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg">Next →</button>
          ) : (
            <button onClick={() => setShowExercise(true)} className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg">Take Exercise | ابدأ التمرين</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LabLesson;
