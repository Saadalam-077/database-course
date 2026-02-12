import React, { useState } from 'react';

const WeekLesson = ({ weekNum, user, onNavigate, onExerciseComplete, onLogout }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showExercise, setShowExercise] = useState(false);
  const [exerciseAnswers, setExerciseAnswers] = useState({});
  const [exerciseSubmitted, setExerciseSubmitted] = useState(false);
  const [exerciseScore, setExerciseScore] = useState(0);

  // Week content data
  const weekData = {
    1: {
      titleEn: "Introduction to Databases",
      titleAr: "مقدمة في قواعد البيانات",
      icon: "🗄️",
      content: [
        {
          type: "concept",
          titleEn: "What is a Database?",
          titleAr: "ما هي قاعدة البيانات؟",
          contentEn: "A database is an organized collection of structured data stored electronically.",
          contentAr: "قاعدة البيانات هي مجموعة منظمة من البيانات المهيكلة المخزنة إلكترونياً."
        },
        {
          type: "concept",
          titleEn: "What is a DBMS?",
          titleAr: "ما هو DBMS؟",
          contentEn: "A Database Management System (DBMS) is software that manages databases. Examples: MySQL, PostgreSQL, SQL Server.",
          contentAr: "نظام إدارة قواعد البيانات هو برنامج يدير قواعد البيانات. أمثلة: MySQL، PostgreSQL، SQL Server."
        },
        {
          type: "hands-on",
          titleEn: "Install MySQL & MySQL Workbench",
          titleAr: "تثبيت MySQL و MySQL Workbench",
          steps: [
            "Download MySQL from dev.mysql.com/downloads",
            "Install MySQL Server",
            "Download MySQL Workbench",
            "Connect to localhost:3306"
          ]
        }
      ],
      exercises: [
        { q: "What does DBMS stand for?", qAr: "ماذا يعني DBMS؟", options: ["Database Management System", "Data Base Main Server", "Digital Base Memory System", "Data Binary Management Software"], correct: 0 },
        { q: "Which is NOT a DBMS?", qAr: "أي مما يلي ليس DBMS؟", options: ["MySQL", "PostgreSQL", "Microsoft Word", "Oracle"], correct: 2 },
        { q: "What is the default MySQL port?", qAr: "ما هو منفذ MySQL الافتراضي؟", options: ["8080", "3306", "80", "443"], correct: 1 },
        { q: "A database stores data:", qAr: "قاعدة البيانات تخزن البيانات:", options: ["On paper", "Electronically", "In memory only", "Temporarily"], correct: 1 },
        { q: "MySQL Workbench is used to:", qAr: "يستخدم MySQL Workbench لـ:", options: ["Write documents", "Create spreadsheets", "Manage MySQL databases", "Browse the internet"], correct: 2 }
      ]
    },
    2: {
      titleEn: "Creating a Database",
      titleAr: "إنشاء قاعدة بيانات",
      icon: "📁",
      content: [
        {
          type: "sql",
          titleEn: "CREATE DATABASE Command",
          titleAr: "أمر CREATE DATABASE",
          code: "CREATE DATABASE UniversityDB;",
          explanation: "Creates a new database named UniversityDB"
        },
        {
          type: "sql",
          titleEn: "USE Database Command",
          titleAr: "أمر USE",
          code: "USE UniversityDB;",
          explanation: "Selects the database to work with"
        }
      ],
      exercises: [
        { q: "Which command creates a new database?", qAr: "أي أمر ينشئ قاعدة بيانات جديدة؟", options: ["NEW DATABASE", "CREATE DATABASE", "MAKE DATABASE", "ADD DATABASE"], correct: 1 },
        { q: "What does USE command do?", qAr: "ماذا يفعل أمر USE؟", options: ["Creates a database", "Deletes a database", "Selects a database", "Shows databases"], correct: 2 },
        { q: "SQL statements end with:", qAr: "تنتهي أوامر SQL بـ:", options: ["Period (.)", "Semicolon (;)", "Colon (:)", "Comma (,)"], correct: 1 },
        { q: "CREATE DATABASE UniversityDB; - What is 'UniversityDB'?", qAr: "في CREATE DATABASE UniversityDB; - ما هو 'UniversityDB'؟", options: ["A command", "The database name", "A table", "A column"], correct: 1 },
        { q: "To see all databases, use:", qAr: "لعرض جميع قواعد البيانات، استخدم:", options: ["LIST DATABASES", "SHOW DATABASES", "VIEW DATABASES", "GET DATABASES"], correct: 1 }
      ]
    },
    3: {
      titleEn: "Creating Tables (Part 1)",
      titleAr: "إنشاء الجداول (الجزء 1)",
      icon: "📋",
      content: [
        {
          type: "sql",
          titleEn: "CREATE TABLE Students",
          titleAr: "إنشاء جدول الطلاب",
          code: `CREATE TABLE Students (
  StudentID INT PRIMARY KEY AUTO_INCREMENT,
  FirstName VARCHAR(50),
  LastName VARCHAR(50),
  DateOfBirth DATE,
  EnrollmentDate DATE
);`,
          explanation: "Creates a Students table with ID, names, and dates"
        }
      ],
      exercises: [
        { q: "PRIMARY KEY ensures:", qAr: "PRIMARY KEY يضمن:", options: ["Values can be null", "Values are unique", "Values are text", "Values are dates"], correct: 1 },
        { q: "AUTO_INCREMENT does what?", qAr: "ماذا يفعل AUTO_INCREMENT؟", options: ["Decreases value", "Automatically increases ID", "Deletes rows", "Creates tables"], correct: 1 },
        { q: "VARCHAR(50) means:", qAr: "VARCHAR(50) يعني:", options: ["Exactly 50 characters", "Up to 50 characters", "50 numbers", "50 rows"], correct: 1 },
        { q: "DATE type stores:", qAr: "نوع DATE يخزن:", options: ["Text", "Numbers", "Date values", "Boolean"], correct: 2 },
        { q: "INT type stores:", qAr: "نوع INT يخزن:", options: ["Text", "Integer numbers", "Decimal numbers", "Dates"], correct: 1 }
      ]
    },
    4: {
      titleEn: "Creating Tables (Part 2)",
      titleAr: "إنشاء الجداول (الجزء 2)",
      icon: "🔗",
      content: [
        {
          type: "sql",
          titleEn: "CREATE TABLE with FOREIGN KEY",
          titleAr: "إنشاء جدول مع مفتاح خارجي",
          code: `CREATE TABLE Instructors (
  InstructorID INT PRIMARY KEY AUTO_INCREMENT,
  Name VARCHAR(100),
  DepartmentID INT,
  FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);`,
          explanation: "Creates Instructors table linked to Departments"
        }
      ],
      exercises: [
        { q: "FOREIGN KEY is used to:", qAr: "يستخدم FOREIGN KEY لـ:", options: ["Create unique values", "Link to another table", "Store dates", "Delete data"], correct: 1 },
        { q: "REFERENCES keyword specifies:", qAr: "كلمة REFERENCES تحدد:", options: ["Column name", "Table name to link to", "Data type", "Primary key"], correct: 1 },
        { q: "A foreign key value must exist in:", qAr: "يجب أن توجد قيمة المفتاح الخارجي في:", options: ["Same table", "Referenced table", "Any table", "No table"], correct: 1 },
        { q: "DepartmentID INT means:", qAr: "DepartmentID INT يعني:", options: ["Text column", "Integer column", "Date column", "Boolean column"], correct: 1 },
        { q: "Tables are linked through:", qAr: "ترتبط الجداول من خلال:", options: ["Names", "Keys", "Dates", "Text"], correct: 1 }
      ]
    },
    5: {
      titleEn: "Creating Tables (Part 3)",
      titleAr: "إنشاء الجداول (الجزء 3)",
      icon: "📊",
      content: [
        {
          type: "sql",
          titleEn: "Enrollments Table",
          titleAr: "جدول التسجيلات",
          code: `CREATE TABLE Enrollments (
  EnrollmentID INT PRIMARY KEY AUTO_INCREMENT,
  StudentID INT,
  CourseID INT,
  FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
  FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);`,
          explanation: "Junction table linking Students and Courses"
        }
      ],
      exercises: [
        { q: "A junction table:", qAr: "جدول الربط:", options: ["Has no keys", "Links two tables", "Stores only dates", "Has one column"], correct: 1 },
        { q: "Multiple FOREIGN KEYs in one table is:", qAr: "عدة مفاتيح خارجية في جدول واحد:", options: ["Not allowed", "Allowed", "Error", "Warning"], correct: 1 },
        { q: "CHAR(1) stores:", qAr: "CHAR(1) يخزن:", options: ["One number", "One character", "One word", "One sentence"], correct: 1 },
        { q: "Enrollments links:", qAr: "Enrollments يربط:", options: ["Students and Courses", "Only Students", "Only Courses", "Departments"], correct: 0 },
        { q: "Constraints ensure:", qAr: "القيود تضمن:", options: ["Data is deleted", "Data integrity", "Tables are empty", "Columns are hidden"], correct: 1 }
      ]
    },
    6: {
      titleEn: "Inserting Data (Part 1)",
      titleAr: "إدراج البيانات (الجزء 1)",
      icon: "✏️",
      content: [
        {
          type: "sql",
          titleEn: "INSERT INTO Command",
          titleAr: "أمر INSERT INTO",
          code: `INSERT INTO Students (FirstName, LastName, DateOfBirth, EnrollmentDate)
VALUES ('John', 'Doe', '2000-01-15', '2024-09-01');`,
          explanation: "Inserts a new student record"
        }
      ],
      exercises: [
        { q: "INSERT INTO adds:", qAr: "INSERT INTO يضيف:", options: ["Tables", "Databases", "Records/Rows", "Columns"], correct: 2 },
        { q: "VALUES keyword contains:", qAr: "كلمة VALUES تحتوي:", options: ["Column names", "Data to insert", "Table names", "Conditions"], correct: 1 },
        { q: "Date format in MySQL:", qAr: "صيغة التاريخ في MySQL:", options: ["DD-MM-YYYY", "YYYY-MM-DD", "MM/DD/YYYY", "YYYY/DD/MM"], correct: 1 },
        { q: "Text values are enclosed in:", qAr: "القيم النصية تحاط بـ:", options: ["Brackets []", "Parentheses ()", "Single quotes ''", "Double quotes \"\""], correct: 2 },
        { q: "AUTO_INCREMENT columns:", qAr: "أعمدة AUTO_INCREMENT:", options: ["Must be specified", "Are auto-filled", "Cannot be used", "Store text"], correct: 1 }
      ]
    },
    7: {
      titleEn: "Inserting Data (Part 2)",
      titleAr: "إدراج البيانات (الجزء 2)",
      icon: "📝",
      content: [
        {
          type: "sql",
          titleEn: "INSERT with Foreign Keys",
          titleAr: "إدراج مع المفاتيح الخارجية",
          code: `INSERT INTO Enrollments (StudentID, CourseID, EnrollmentDate)
VALUES (1, 1, '2024-09-01');`,
          explanation: "Foreign key values must exist in referenced tables"
        }
      ],
      exercises: [
        { q: "Foreign key values must:", qAr: "قيم المفتاح الخارجي يجب:", options: ["Be null", "Exist in parent table", "Be text", "Be auto-generated"], correct: 1 },
        { q: "Inserting invalid FK causes:", qAr: "إدراج FK غير صالح يسبب:", options: ["Success", "Warning", "Error", "Nothing"], correct: 2 },
        { q: "Parent table must be filled:", qAr: "الجدول الأب يجب ملؤه:", options: ["Last", "First", "Never", "Randomly"], correct: 1 },
        { q: "INSERT adds how many rows?", qAr: "INSERT يضيف كم صف؟", options: ["Multiple", "One at a time", "All rows", "No rows"], correct: 1 },
        { q: "StudentID 1 refers to:", qAr: "StudentID 1 يشير إلى:", options: ["First student", "Last student", "No student", "All students"], correct: 0 }
      ]
    },
    8: {
      titleEn: "Query Basics (Part 1)",
      titleAr: "أساسيات الاستعلام (الجزء 1)",
      icon: "🔍",
      content: [
        {
          type: "sql",
          titleEn: "SELECT Statement",
          titleAr: "عبارة SELECT",
          code: `SELECT * FROM Students;
SELECT CourseName FROM Courses WHERE Credits = 3;`,
          explanation: "Retrieves data from tables with optional filtering"
        }
      ],
      exercises: [
        { q: "SELECT * returns:", qAr: "SELECT * يرجع:", options: ["One column", "All columns", "No columns", "First column"], correct: 1 },
        { q: "WHERE clause is used to:", qAr: "جملة WHERE تستخدم لـ:", options: ["Sort data", "Filter data", "Delete data", "Insert data"], correct: 1 },
        { q: "FROM specifies:", qAr: "FROM تحدد:", options: ["Columns", "Table name", "Conditions", "Order"], correct: 1 },
        { q: "= in WHERE means:", qAr: "= في WHERE تعني:", options: ["Assignment", "Comparison/Equals", "Greater than", "Less than"], correct: 1 },
        { q: "SELECT retrieves data:", qAr: "SELECT يسترجع البيانات:", options: ["And deletes it", "Without changing it", "And modifies it", "And copies it"], correct: 1 }
      ]
    },
    9: {
      titleEn: "Query Basics (Part 2)",
      titleAr: "أساسيات الاستعلام (الجزء 2)",
      icon: "🔗",
      content: [
        {
          type: "sql",
          titleEn: "JOIN and GROUP BY",
          titleAr: "JOIN و GROUP BY",
          code: `SELECT Students.FirstName, Courses.CourseName
FROM Students
JOIN Enrollments ON Students.StudentID = Enrollments.StudentID
JOIN Courses ON Enrollments.CourseID = Courses.CourseID;`,
          explanation: "Combines data from multiple tables"
        }
      ],
      exercises: [
        { q: "JOIN combines:", qAr: "JOIN يجمع:", options: ["Columns", "Tables", "Databases", "Values"], correct: 1 },
        { q: "ON specifies:", qAr: "ON تحدد:", options: ["Table name", "Join condition", "Column type", "Sort order"], correct: 1 },
        { q: "GROUP BY groups:", qAr: "GROUP BY يجمع:", options: ["Tables", "Databases", "Rows", "Columns"], correct: 2 },
        { q: "COUNT(*) returns:", qAr: "COUNT(*) يرجع:", options: ["Sum", "Average", "Number of rows", "Maximum"], correct: 2 },
        { q: "INNER JOIN returns:", qAr: "INNER JOIN يرجع:", options: ["All rows", "Matching rows only", "Non-matching rows", "Empty result"], correct: 1 }
      ]
    },
    10: {
      titleEn: "Advanced Queries (Part 1)",
      titleAr: "الاستعلامات المتقدمة (الجزء 1)",
      icon: "🧩",
      content: [
        {
          type: "sql",
          titleEn: "Subqueries",
          titleAr: "الاستعلامات الفرعية",
          code: `SELECT FirstName FROM Students
WHERE StudentID IN (SELECT StudentID FROM Enrollments WHERE CourseID = 1);`,
          explanation: "Query inside another query"
        }
      ],
      exercises: [
        { q: "A subquery is:", qAr: "الاستعلام الفرعي هو:", options: ["Query inside query", "Empty query", "Delete query", "Create query"], correct: 0 },
        { q: "IN operator checks:", qAr: "عامل IN يتحقق:", options: ["Greater than", "Less than", "Value in list", "Value not in list"], correct: 2 },
        { q: "AVG() calculates:", qAr: "AVG() تحسب:", options: ["Sum", "Count", "Average", "Maximum"], correct: 2 },
        { q: "Subquery runs:", qAr: "الاستعلام الفرعي يعمل:", options: ["Last", "First (inner to outer)", "Never", "Randomly"], correct: 1 },
        { q: "Subquery must be in:", qAr: "الاستعلام الفرعي يجب أن يكون في:", options: ["Brackets []", "Parentheses ()", "Quotes ''", "Braces {}"], correct: 1 }
      ]
    },
    11: {
      titleEn: "Advanced Queries (Part 2)",
      titleAr: "الاستعلامات المتقدمة (الجزء 2)",
      icon: "🔄",
      content: [
        {
          type: "sql",
          titleEn: "Transactions",
          titleAr: "المعاملات",
          code: `BEGIN;
UPDATE Students SET LastName = 'Doe-Jones' WHERE StudentID = 1;
DELETE FROM Enrollments WHERE EnrollmentID = 1;
COMMIT;`,
          explanation: "Group operations that succeed or fail together"
        }
      ],
      exercises: [
        { q: "BEGIN starts:", qAr: "BEGIN يبدأ:", options: ["Database", "Transaction", "Table", "Query"], correct: 1 },
        { q: "COMMIT does:", qAr: "COMMIT يفعل:", options: ["Cancels changes", "Saves changes", "Deletes data", "Creates table"], correct: 1 },
        { q: "ROLLBACK does:", qAr: "ROLLBACK يفعل:", options: ["Saves changes", "Undoes changes", "Commits data", "Creates backup"], correct: 1 },
        { q: "UPDATE modifies:", qAr: "UPDATE يعدل:", options: ["Table structure", "Existing data", "Database name", "Column types"], correct: 1 },
        { q: "DELETE removes:", qAr: "DELETE يحذف:", options: ["Tables", "Databases", "Rows", "Columns"], correct: 2 }
      ]
    },
    12: {
      titleEn: "Database Design & Normalization",
      titleAr: "تصميم قواعد البيانات والتطبيع",
      icon: "🏗️",
      content: [
        {
          type: "concept",
          titleEn: "Normalization Forms",
          titleAr: "أشكال التطبيع",
          contentEn: "1NF: No repeating groups. 2NF: No partial dependencies. 3NF: No transitive dependencies.",
          contentAr: "1NF: لا توجد مجموعات متكررة. 2NF: لا توجد تبعيات جزئية. 3NF: لا توجد تبعيات متعدية."
        }
      ],
      exercises: [
        { q: "1NF eliminates:", qAr: "1NF يزيل:", options: ["Repeating groups", "All data", "Primary keys", "Foreign keys"], correct: 0 },
        { q: "Normalization reduces:", qAr: "التطبيع يقلل:", options: ["Performance", "Redundancy", "Tables", "Columns"], correct: 1 },
        { q: "Primary key must be:", qAr: "المفتاح الأساسي يجب أن يكون:", options: ["Null", "Unique", "Repeated", "Empty"], correct: 1 },
        { q: "Good design has:", qAr: "التصميم الجيد لديه:", options: ["Redundant data", "No relationships", "Proper relationships", "No keys"], correct: 2 },
        { q: "3NF depends on:", qAr: "3NF يعتمد على:", options: ["1NF only", "2NF only", "1NF and 2NF", "Nothing"], correct: 2 }
      ]
    },
    13: {
      titleEn: "Final Project",
      titleAr: "المشروع النهائي",
      icon: "🎓",
      content: [
        {
          type: "concept",
          titleEn: "Project Requirements",
          titleAr: "متطلبات المشروع",
          contentEn: "Create UniversityDB with: Students, Courses, Instructors, Departments, Enrollments, Grades tables.",
          contentAr: "أنشئ UniversityDB مع جداول: الطلاب، المقررات، المدرسين، الأقسام، التسجيلات، الدرجات."
        }
      ],
      exercises: [
        { q: "Final project includes:", qAr: "المشروع النهائي يتضمن:", options: ["Only tables", "Tables and data and queries", "Only queries", "Nothing"], correct: 1 },
        { q: "UniversityDB has how many main tables?", qAr: "UniversityDB لديها كم جدول رئيسي؟", options: ["2", "4", "6", "8"], correct: 2 },
        { q: "Submission includes:", qAr: "التسليم يتضمن:", options: ["Schema only", "Data only", "Schema, scripts, and queries", "Nothing"], correct: 2 },
        { q: "Relationships are defined by:", qAr: "العلاقات تحدد بواسطة:", options: ["Names", "Foreign keys", "Dates", "Text"], correct: 1 },
        { q: "Sample queries should:", qAr: "الاستعلامات النموذجية يجب:", options: ["Be empty", "Show results", "Delete data", "Create errors"], correct: 1 }
      ]
    }
  };

  const week = weekData[weekNum];
  const totalSteps = week.content.length + 1; // content steps + summary

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    if (!exerciseSubmitted) {
      setExerciseAnswers({ ...exerciseAnswers, [questionIndex]: answerIndex });
    }
  };

  const handleSubmitExercise = () => {
    let correct = 0;
    week.exercises.forEach((ex, i) => {
      if (exerciseAnswers[i] === ex.correct) {
        correct++;
      }
    });
    const score = Math.round((correct / week.exercises.length) * 100);
    setExerciseScore(score);
    setExerciseSubmitted(true);
    onExerciseComplete(weekNum, score);
  };

  const renderContent = () => {
    if (showExercise) {
      return (
        <div className="p-6">
          <div className="text-center mb-6">
            <span className="text-4xl mb-2 block">📝</span>
            <h2 className="text-2xl font-bold text-white">Week {weekNum} Exercise</h2>
            <p className="text-amber-300/70 font-arabic">تمرين الأسبوع {weekNum}</p>
          </div>

          {!exerciseSubmitted ? (
            <div className="max-w-3xl mx-auto space-y-6">
              {week.exercises.map((ex, i) => (
                <div key={i} className="bg-slate-700/30 rounded-xl p-5 border border-slate-600">
                  <p className="text-white font-semibold mb-1">
                    {i + 1}. {ex.q}
                  </p>
                  <p className="text-amber-300/60 text-sm font-arabic mb-4" dir="rtl">{ex.qAr}</p>
                  
                  <div className="space-y-2">
                    {ex.options.map((opt, j) => (
                      <button
                        key={j}
                        onClick={() => handleAnswerSelect(i, j)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                          exerciseAnswers[i] === j
                            ? 'bg-amber-600 text-white'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        <span className="font-semibold mr-2">{String.fromCharCode(65 + j)}.</span>
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <button
                onClick={handleSubmitExercise}
                disabled={Object.keys(exerciseAnswers).length < week.exercises.length}
                className="w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Answers | إرسال الإجابات
              </button>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              <div className={`text-center p-8 rounded-2xl mb-6 ${
                exerciseScore >= 60 ? 'bg-emerald-900/30 border-2 border-emerald-500/50' : 'bg-red-900/30 border-2 border-red-500/50'
              }`}>
                <span className="text-6xl block mb-4">{exerciseScore >= 60 ? '🎉' : '😔'}</span>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {exerciseScore >= 60 ? 'Great Job!' : 'Keep Practicing!'}
                </h3>
                <p className={`text-5xl font-black ${exerciseScore >= 90 ? 'text-emerald-400' : exerciseScore >= 60 ? 'text-amber-400' : 'text-red-400'}`}>
                  {exerciseScore}%
                </p>
                <p className="text-slate-400 mt-2">
                  {Object.values(exerciseAnswers).filter((a, i) => a === week.exercises[i].correct).length} / {week.exercises.length} correct
                </p>
              </div>

              {/* Show correct answers */}
              <div className="space-y-4 mb-6">
                {week.exercises.map((ex, i) => {
                  const isCorrect = exerciseAnswers[i] === ex.correct;
                  return (
                    <div key={i} className={`p-4 rounded-xl ${isCorrect ? 'bg-emerald-900/20' : 'bg-red-900/20'}`}>
                      <p className="text-white font-semibold mb-2">{i + 1}. {ex.q}</p>
                      <p className={`text-sm ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                        {isCorrect ? '✓ Correct' : `✗ Correct answer: ${ex.options[ex.correct]}`}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setShowExercise(false);
                    setExerciseAnswers({});
                    setExerciseSubmitted(false);
                  }}
                  className="flex-1 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl"
                >
                  Review Lesson
                </button>
                <button
                  onClick={() => onNavigate('home')}
                  className="flex-1 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-xl"
                >
                  Back to Course
                </button>
              </div>
            </div>
          )}
        </div>
      );
    }

    if (currentStep < week.content.length) {
      const content = week.content[currentStep];
      return (
        <div className="p-6">
          <div className="text-center mb-6">
            <span className="px-3 py-1 bg-blue-600/30 rounded-full text-blue-300 text-sm">
              {content.type === 'sql' ? '💻 SQL' : content.type === 'hands-on' ? '🛠️ Hands-On' : '📖 Concept'}
            </span>
            <h2 className="text-2xl font-bold text-white mt-4 mb-1">{content.titleEn}</h2>
            <p className="text-amber-300/70 font-arabic">{content.titleAr}</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {content.type === 'sql' && (
              <>
                <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-600 mb-4">
                  <div className="bg-slate-800 px-4 py-2 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-slate-400 text-sm">SQL</span>
                  </div>
                  <pre className="p-6 text-cyan-300 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
                    {content.code}
                  </pre>
                </div>
                <div className="bg-slate-700/30 rounded-xl p-4">
                  <p className="text-slate-300">{content.explanation}</p>
                </div>
              </>
            )}

            {content.type === 'concept' && (
              <div className="bg-slate-700/30 rounded-xl p-6">
                <p className="text-lg text-slate-200 mb-4">{content.contentEn}</p>
                <p className="text-lg text-slate-400 font-arabic" dir="rtl">{content.contentAr}</p>
              </div>
            )}

            {content.type === 'hands-on' && content.steps && (
              <div className="space-y-3">
                {content.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-700/30 rounded-lg p-4">
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                      {i + 1}
                    </div>
                    <p className="text-white">{step}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      );
    }

    // Summary step
    return (
      <div className="p-6 text-center">
        <span className="text-5xl block mb-4">✅</span>
        <h2 className="text-2xl font-bold text-white mb-2">Lesson Complete!</h2>
        <p className="text-amber-300/70 font-arabic mb-6">اكتمل الدرس!</p>
        
        <div className="max-w-md mx-auto">
          <p className="text-slate-400 mb-6">
            Now take the exercise to test your knowledge and earn your grade!
          </p>
          <button
            onClick={() => setShowExercise(true)}
            className="w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold rounded-xl text-lg"
          >
            📝 Start Exercise | ابدأ التمرين
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col">
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('home')}
              className="px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm"
            >
              ← Back
            </button>
            <div>
              <h1 className="font-bold text-white">Week {weekNum}: {week.titleEn}</h1>
              <p className="text-xs text-amber-300/70 font-arabic">{week.titleAr}</p>
            </div>
          </div>
          <span className="text-3xl">{week.icon}</span>
        </div>
      </header>

      {/* Progress */}
      {!showExercise && (
        <div className="bg-slate-800/50 border-b border-slate-700">
          <div className="max-w-6xl mx-auto px-4 py-2">
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all"
                style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 max-w-6xl mx-auto w-full">
        {renderContent()}
      </div>

      {/* Navigation */}
      {!showExercise && (
        <div className="bg-slate-800/80 border-t border-slate-700 p-4 sticky bottom-0">
          <div className="max-w-6xl mx-auto flex justify-between">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className={`px-6 py-2 rounded-lg ${currentStep === 0 ? 'bg-slate-700 text-slate-500' : 'bg-slate-700 text-white hover:bg-slate-600'}`}
            >
              ← Previous
            </button>
            
            {currentStep < totalSteps - 1 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="px-6 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg"
              >
                Next →
              </button>
            ) : (
              <button
                onClick={() => setShowExercise(true)}
                className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg"
              >
                📝 Take Exercise
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeekLesson;
وع الثاني عشر!",
          contentEn: "In our final lesson week, we'll learn about database design principles and normalization to create efficient, well-structured databases.",
          contentAr: "في أسبوع الدرس الأخير، سنتعلم عن مبادئ تصميم قواعد البيانات والتطبيع لإنشاء قواعد بيانات فعالة ومنظمة جيداً."
        },
        {
          type: "concept",
          titleEn: "What is Normalization?",
          titleAr: "ما هو التطبيع؟",
          contentEn: "Normalization is the process of organizing data to reduce redundancy and improve data integrity. It involves dividing large tables into smaller, related tables.",
          contentAr: "التطبيع هو عملية تنظيم البيانات لتقليل التكرار وتحسين سلامة البيانات. يتضمن تقسيم الجداول الكبيرة إلى جداول أصغر مرتبطة.",
          keyPoints: [
            { en: "1NF: No repeating groups - each cell has one value", ar: "1NF: لا مجموعات متكررة - كل خلية لها قيمة واحدة" },
            { en: "2NF: No partial dependencies - all non-key columns depend on the entire primary key", ar: "2NF: لا تبعيات جزئية - جميع الأعمدة غير المفتاحية تعتمد على المفتاح الأساسي بالكامل" },
            { en: "3NF: No transitive dependencies - non-key columns don't depend on other non-key columns", ar: "3NF: لا تبعيات متعدية - الأعمدة غير المفتاحية لا تعتمد على أعمدة غير مفتاحية أخرى" }
          ]
        },
        {
          type: "concept",
          titleEn: "Good Database Design Principles",
          titleAr: "مبادئ تصميم قواعد البيانات الجيدة",
          contentEn: "Follow these principles for a well-designed database:",
          contentAr: "اتبع هذه المبادئ لتصميم قاعدة بيانات جيدة:",
          keyPoints: [
            { en: "Each table should represent ONE entity (Students, Courses, etc.)", ar: "كل جدول يجب أن يمثل كياناً واحداً (طلاب، مقررات، إلخ)" },
            { en: "Use meaningful names for tables and columns", ar: "استخدم أسماء ذات معنى للجداول والأعمدة" },
            { en: "Every table should have a primary key", ar: "كل جدول يجب أن يكون له مفتاح أساسي" },
            { en: "Use foreign keys to create relationships", ar: "استخدم المفاتيح الخارجية لإنشاء العلاقات" },
            { en: "Avoid storing calculated data (calculate when needed)", ar: "تجنب تخزين البيانات المحسوبة (احسب عند الحاجة)" }
          ]
        }
      ],
      exercises: [
        { q: "What does 1NF (First Normal Form) eliminate?", qAr: "ماذا يزيل 1NF (الشكل العادي الأول)؟", options: ["All data", "Repeating groups", "Primary keys", "Foreign keys"], correct: 1 },
        { q: "Normalization helps reduce:", qAr: "التطبيع يساعد في تقليل:", options: ["Tables", "Performance", "Data redundancy", "Columns"], correct: 2 },
        { q: "A well-designed table should represent:", qAr: "الجدول المصمم جيداً يجب أن يمثل:", options: ["Multiple entities", "One entity", "No entities", "Random data"], correct: 1 },
        { q: "3NF requires satisfying which normal forms first?", qAr: "3NF يتطلب تحقيق أي أشكال عادية أولاً؟", options: ["None", "1NF only", "1NF and 2NF", "Only 2NF"], correct: 2 },
        { q: "Which is a good practice in database design?", qAr: "أي من هذه ممارسة جيدة في تصميم قواعد البيانات؟", options: ["Storing calculated values", "Using meaningful names", "Having no primary keys", "Putting all data in one table"], correct: 1 }
      ]
    }
  };

  const week = weekData[weekNum];
  if (!week) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl">Week {weekNum} content coming soon!</p>
          <button onClick={() => onNavigate('home')} className="mt-4 px-6 py-2 bg-amber-600 rounded-lg">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const totalSteps = week.content.length + 2; // content + videos + summary

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    if (!exerciseSubmitted) {
      setExerciseAnswers({ ...exerciseAnswers, [questionIndex]: answerIndex });
    }
  };

  const handleSubmitExercise = () => {
    let correct = 0;
    week.exercises.forEach((ex, i) => {
      if (exerciseAnswers[i] === ex.correct) correct++;
    });
    const score = Math.round((correct / week.exercises.length) * 100);
    setExerciseScore(score);
    setExerciseSubmitted(true);
    onExerciseComplete(weekNum, score);
  };

  const renderContent = () => {
    if (showExercise) {
      return (
        <div className="p-6">
          <div className="text-center mb-6">
            <span className="text-4xl mb-2 block">📝</span>
            <h2 className="text-2xl font-bold text-white">Week {weekNum} Exercise</h2>
            <p className="text-amber-300/70 font-arabic">تمرين الأسبوع {weekNum}</p>
          </div>

          {!exerciseSubmitted ? (
            <div className="max-w-3xl mx-auto space-y-6">
              {week.exercises.map((ex, i) => (
                <div key={i} className="bg-slate-700/30 rounded-xl p-5 border border-slate-600">
                  <p className="text-white font-semibold mb-1">{i + 1}. {ex.q}</p>
                  <p className="text-amber-300/60 text-sm font-arabic mb-4" dir="rtl">{ex.qAr}</p>
                  <div className="space-y-2">
                    {ex.options.map((opt, j) => (
                      <button
                        key={j}
                        onClick={() => handleAnswerSelect(i, j)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                          exerciseAnswers[i] === j
                            ? 'bg-amber-600 text-white'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        <span className="font-semibold mr-2">{String.fromCharCode(65 + j)}.</span>
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <button
                onClick={handleSubmitExercise}
                disabled={Object.keys(exerciseAnswers).length < week.exercises.length}
                className="w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold rounded-xl disabled:opacity-50"
              >
                Submit Answers | إرسال الإجابات
              </button>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              <div className={`text-center p-8 rounded-2xl mb-6 ${exerciseScore >= 60 ? 'bg-emerald-900/30 border-2 border-emerald-500/50' : 'bg-red-900/30 border-2 border-red-500/50'}`}>
                <span className="text-6xl block mb-4">{exerciseScore >= 60 ? '🎉' : '😔'}</span>
                <h3 className="text-3xl font-bold text-white mb-2">{exerciseScore >= 60 ? 'Great Job!' : 'Keep Practicing!'}</h3>
                <p className={`text-5xl font-black ${exerciseScore >= 90 ? 'text-emerald-400' : exerciseScore >= 60 ? 'text-amber-400' : 'text-red-400'}`}>{exerciseScore}%</p>
              </div>
              <div className="space-y-4 mb-6">
                {week.exercises.map((ex, i) => {
                  const isCorrect = exerciseAnswers[i] === ex.correct;
                  return (
                    <div key={i} className={`p-4 rounded-xl ${isCorrect ? 'bg-emerald-900/20' : 'bg-red-900/20'}`}>
                      <p className="text-white font-semibold mb-2">{i + 1}. {ex.q}</p>
                      <p className={`text-sm ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                        {isCorrect ? '✓ Correct' : `✗ Correct: ${ex.options[ex.correct]}`}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-4">
                <button onClick={() => { setShowExercise(false); setExerciseAnswers({}); setExerciseSubmitted(false); }} className="flex-1 py-3 bg-slate-700 text-white rounded-xl">Review Lesson</button>
                <button onClick={() => onNavigate('home')} className="flex-1 py-3 bg-amber-600 text-white rounded-xl">Back to Course</button>
              </div>
            </div>
          )}
        </div>
      );
    }

    // Video step
    if (currentStep === week.content.length) {
      return (
        <div className="p-6">
          <div className="text-center mb-6">
            <span className="text-4xl mb-2 block">🎬</span>
            <h2 className="text-2xl font-bold text-white">Video Tutorials</h2>
            <p className="text-amber-300/70 font-arabic">فيديوهات تعليمية</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {week.youtubeVideos.map((video, i) => (
              <div key={i} className="bg-slate-700/30 rounded-xl overflow-hidden border border-slate-600">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.titleEn}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold">{video.titleEn}</h3>
                  <p className="text-amber-300/70 font-arabic">{video.titleAr}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Summary step
    if (currentStep === week.content.length + 1) {
      return (
        <div className="p-6 text-center">
          <span className="text-5xl block mb-4">✅</span>
          <h2 className="text-2xl font-bold text-white mb-2">Lesson Complete!</h2>
          <p className="text-amber-300/70 font-arabic mb-6">اكتمل الدرس!</p>
          <div className="max-w-md mx-auto">
            <p className="text-slate-400 mb-6">Take the exercise to test your knowledge and earn your grade!</p>
            <button onClick={() => setShowExercise(true)} className="w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold rounded-xl text-lg">
              📝 Start Exercise | ابدأ التمرين
            </button>
          </div>
        </div>
      );
    }

    // Content steps
    const content = week.content[currentStep];
    return (
      <div className="p-6">
        <div className="text-center mb-6">
          <span className="px-3 py-1 bg-blue-600/30 rounded-full text-blue-300 text-sm">
            {content.type === 'hands-on' ? '🛠️ Hands-On' : content.type === 'sql-explanation' ? '💻 SQL' : '📖 Concept'}
          </span>
          <h2 className="text-2xl font-bold text-white mt-4 mb-1">{content.titleEn}</h2>
          <p className="text-amber-300/70 font-arabic">{content.titleAr}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {content.contentEn && (
            <div className="bg-slate-700/30 rounded-xl p-6 mb-6">
              <p className="text-lg text-slate-200 mb-3">{content.contentEn}</p>
              <p className="text-slate-400 font-arabic" dir="rtl">{content.contentAr}</p>
            </div>
          )}

          {content.keyPoints && (
            <div className="bg-slate-700/30 rounded-xl p-6 mb-6">
              <h4 className="text-amber-400 font-semibold mb-4">📌 Key Points | النقاط الرئيسية</h4>
              <div className="space-y-3">
                {content.keyPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 bg-slate-800/50 rounded-lg p-3">
                    <span className="text-emerald-400">✓</span>
                    <div>
                      <span className="text-white">{point.en}</span>
                      <p className="text-amber-300/70 text-sm font-arabic" dir="rtl">{point.ar}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {content.benefits && (
            <div className="bg-emerald-900/20 rounded-xl p-6 mb-6 border border-emerald-500/30">
              <h4 className="text-emerald-400 font-semibold mb-4">✅ Benefits | الفوائد</h4>
              <div className="space-y-2">
                {content.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400">•</span>
                    <div>
                      <span className="text-white text-sm">{b.en}</span>
                      <p className="text-amber-300/60 text-xs font-arabic" dir="rtl">{b.ar}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {content.items && (
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {content.items.map((item, i) => (
                <div key={i} className={`p-4 rounded-xl border-2 ${item.recommended ? 'bg-amber-900/30 border-amber-500/50' : 'bg-slate-700/30 border-slate-600'}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="text-white font-bold">{item.name}</h4>
                      {item.recommended && <span className="text-xs px-2 py-0.5 bg-amber-500 text-white rounded-full">Recommended</span>}
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm">{item.descEn}</p>
                  <p className="text-slate-500 text-xs font-arabic" dir="rtl">{item.descAr}</p>
                </div>
              ))}
            </div>
          )}

          {content.dataTypes && (
            <div className="bg-slate-700/30 rounded-xl p-6 mb-6">
              <h4 className="text-amber-400 font-semibold mb-4">📊 Data Types | أنواع البيانات</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {content.dataTypes.map((dt, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-lg p-3">
                    <code className="text-cyan-300 font-mono">{dt.type}</code>
                    <p className="text-slate-400 text-sm mt-1">{dt.descEn}</p>
                    <p className="text-slate-500 text-xs font-arabic" dir="rtl">{dt.descAr}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(content.code || content.syntax || content.example) && (
            <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-600 mb-6">
              <div className="bg-slate-800 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-slate-400 text-sm">SQL</span>
              </div>
              <pre className="p-6 text-cyan-300 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
                {content.code || content.syntax || content.example}
              </pre>
            </div>
          )}

          {content.breakdown && (
            <div className="bg-slate-700/30 rounded-xl p-6 mb-6">
              <h4 className="text-amber-400 font-semibold mb-4">🔍 Code Breakdown | تحليل الكود</h4>
              <div className="space-y-3">
                {content.breakdown.map((b, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-lg p-3">
                    <code className="text-cyan-300 font-mono text-sm">{b.part}</code>
                    <p className="text-slate-300 text-sm mt-1">{b.descEn}</p>
                    <p className="text-amber-300/60 text-xs font-arabic" dir="rtl">{b.descAr}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {content.steps && (
            <div className="space-y-3 mb-6">
              {content.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-slate-700/30 rounded-lg p-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">{i + 1}</div>
                  <div>
                    <p className="text-white">{step.en}</p>
                    <p className="text-amber-300/70 text-sm font-arabic" dir="rtl">{step.ar}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {content.warning && (
            <div className="bg-red-900/30 border border-red-500/50 rounded-xl p-4 mb-6">
              <p className="text-red-300 font-semibold">{content.warning.en}</p>
              <p className="text-red-400/70 font-arabic" dir="rtl">{content.warning.ar}</p>
            </div>
          )}

          {content.examples && (
            <div className="space-y-3 mb-6">
              {content.examples.map((ex, i) => (
                <div key={i} className="bg-slate-700/30 rounded-lg p-4">
                  <code className="text-cyan-300 font-mono">{ex.code}</code>
                  <p className="text-slate-400 text-sm mt-2">{ex.descEn}</p>
                  <p className="text-slate-500 text-xs font-arabic" dir="rtl">{ex.descAr}</p>
                </div>
              ))}
            </div>
          )}

          {content.commands && (
            <div className="space-y-3 mb-6">
              {content.commands.map((cmd, i) => (
                <div key={i} className="bg-slate-700/30 rounded-lg p-4">
                  <code className="text-cyan-300 font-mono">{cmd.code}</code>
                  <p className="text-slate-400 text-sm mt-2">{cmd.descEn}</p>
                  <p className="text-slate-500 text-xs font-arabic" dir="rtl">{cmd.descAr}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col">
      <header className="bg-slate-800/80 backdrop-blur border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => onNavigate('home')} className="px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm">← Back</button>
            <div>
              <h1 className="font-bold text-white">Week {weekNum}: {week.titleEn}</h1>
              <p className="text-xs text-amber-300/70 font-arabic">{week.titleAr}</p>
            </div>
          </div>
          <span className="text-3xl">{week.icon}</span>
        </div>
      </header>

      {!showExercise && (
        <div className="bg-slate-800/50 border-b border-slate-700">
          <div className="max-w-6xl mx-auto px-4 py-2">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Step {currentStep + 1} of {totalSteps}</span>
              <span>{Math.round(((currentStep + 1) / totalSteps) * 100)}%</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all" style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }} />
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 max-w-6xl mx-auto w-full overflow-auto">{renderContent()}</div>

      {!showExercise && (
        <div className="bg-slate-800/80 border-t border-slate-700 p-4 sticky bottom-0">
          <div className="max-w-6xl mx-auto flex justify-between">
            <button onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0} className={`px-6 py-2 rounded-lg ${currentStep === 0 ? 'bg-slate-700 text-slate-500' : 'bg-slate-700 text-white hover:bg-slate-600'}`}>← Previous</button>
            {currentStep < totalSteps - 1 ? (
              <button onClick={() => setCurrentStep(currentStep + 1)} className="px-6 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg">Next →</button>
            ) : (
              <button onClick={() => setShowExercise(true)} className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg">📝 Take Exercise</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeekLesson;
