import React, { useState } from 'react';

const WeekLesson = ({ weekNum, user, onNavigate, onExerciseComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showExercise, setShowExercise] = useState(false);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const weekData = {
    1: {
      title: "Introduction to Databases",
      titleAr: "مقدمة في قواعد البيانات",
      icon: "🗄️",
      videos: [
        { id: "HXV3zeQKqGY", title: "What is a Database?" },
        { id: "ztHopE5Wnpc", title: "MySQL Tutorial for Beginners" }
      ],
      content: [
        { type: "intro", title: "Welcome to Week 1", text: "Learn the fundamentals of databases and set up MySQL." },
        { type: "concept", title: "What is a Database?", text: "A database is an organized collection of data stored electronically. Think of it as a digital filing cabinet.", points: ["Organized collection of data", "Stored electronically", "Easy to search", "Can handle millions of records"] },
        { type: "concept", title: "What is a DBMS?", text: "Database Management System - software that manages databases. Examples: MySQL, PostgreSQL, Oracle.", points: ["MySQL - Free, popular", "PostgreSQL - Advanced features", "SQL Server - Microsoft", "Oracle - Enterprise"] },
        { type: "handson", title: "Install MySQL", text: "Follow these steps to install MySQL:", steps: ["Go to dev.mysql.com/downloads", "Download MySQL Installer", "Run installer, choose Developer Default", "Set root password (remember it!)", "Complete installation"] },
        { type: "handson", title: "Connect with Workbench", text: "Open MySQL Workbench and connect:", steps: ["Open MySQL Workbench", "Click Local instance MySQL", "Enter your root password", "Click OK to connect"] }
      ],
      exercises: [
        { q: "What does DBMS stand for?", options: ["Database Management System", "Data Base Main Server", "Digital Base Memory", "Data Binary Management"], correct: 0 },
        { q: "Which is NOT a DBMS?", options: ["MySQL", "PostgreSQL", "Microsoft Word", "Oracle"], correct: 2 },
        { q: "Default MySQL port?", options: ["8080", "3306", "80", "443"], correct: 1 },
        { q: "Database stores data:", options: ["On paper", "Electronically", "In memory only", "Temporarily"], correct: 1 },
        { q: "MySQL Workbench is for:", options: ["Writing docs", "Spreadsheets", "Managing MySQL", "Browsing web"], correct: 2 }
      ]
    },
    2: {
      title: "Creating a Database",
      titleAr: "إنشاء قاعدة بيانات",
      icon: "📁",
      videos: [
        { id: "7S_tz1z_5bA", title: "CREATE DATABASE Tutorial" },
        { id: "EN6Dx22cPRI", title: "SQL Basics" }
      ],
      content: [
        { type: "intro", title: "Welcome to Week 2", text: "Learn to create databases using SQL commands." },
        { type: "concept", title: "What is SQL?", text: "SQL (Structured Query Language) is the standard language for databases.", points: ["Standard language", "Create, Read, Update, Delete", "Used by all DBMS", "Commands end with ;"] },
        { type: "sql", title: "CREATE DATABASE", code: "CREATE DATABASE UniversityDB;", text: "Creates a new database named UniversityDB" },
        { type: "sql", title: "USE Database", code: "USE UniversityDB;", text: "Selects the database to work with" },
        { type: "handson", title: "Practice", text: "Try these commands:", steps: ["Open MySQL Workbench", "Type: CREATE DATABASE UniversityDB;", "Click lightning bolt to execute", "Type: USE UniversityDB;", "Execute again"] }
      ],
      exercises: [
        { q: "Command to create database?", options: ["NEW DATABASE", "CREATE DATABASE", "MAKE DATABASE", "ADD DATABASE"], correct: 1 },
        { q: "USE command does?", options: ["Creates DB", "Deletes DB", "Selects DB", "Shows DBs"], correct: 2 },
        { q: "SQL statements end with:", options: ["Period .", "Semicolon ;", "Colon :", "Comma ,"], correct: 1 },
        { q: "CREATE DATABASE StudentDB; - StudentDB is?", options: ["Command", "Database name", "Table", "Column"], correct: 1 },
        { q: "Show all databases:", options: ["LIST DATABASES", "SHOW DATABASES", "VIEW DATABASES", "GET DATABASES"], correct: 1 }
      ]
    },
    3: {
      title: "Creating Tables (Part 1)",
      titleAr: "إنشاء الجداول - الجزء 1",
      icon: "📋",
      videos: [
        { id: "EaRj0S3K32Y", title: "CREATE TABLE Statement" },
        { id: "9Pzj7Aj25lw", title: "SQL Data Types" }
      ],
      content: [
        { type: "intro", title: "Welcome to Week 3", text: "Learn to create tables to store data." },
        { type: "concept", title: "What is a Table?", text: "Tables store data in rows and columns, like a spreadsheet.", points: ["Rows = records", "Columns = fields", "Each column has a data type"] },
        { type: "concept", title: "Data Types", text: "Common MySQL data types:", points: ["INT - whole numbers", "VARCHAR(n) - text up to n chars", "DATE - dates YYYY-MM-DD", "DECIMAL - decimal numbers"] },
        { type: "sql", title: "CREATE TABLE Students", code: "CREATE TABLE Students (\n  StudentID INT PRIMARY KEY AUTO_INCREMENT,\n  FirstName VARCHAR(50),\n  LastName VARCHAR(50),\n  DateOfBirth DATE,\n  EnrollmentDate DATE\n);", text: "Creates Students table with ID, names, and dates" },
        { type: "concept", title: "PRIMARY KEY", text: "Uniquely identifies each row. AUTO_INCREMENT generates IDs automatically.", points: ["Must be unique", "Cannot be NULL", "One per table", "Usually an ID"] }
      ],
      exercises: [
        { q: "PRIMARY KEY ensures:", options: ["Values can be null", "Values are unique", "Values are text", "Values are dates"], correct: 1 },
        { q: "AUTO_INCREMENT does:", options: ["Decreases value", "Auto generates IDs", "Deletes rows", "Creates tables"], correct: 1 },
        { q: "VARCHAR(50) means:", options: ["Exactly 50 chars", "Up to 50 chars", "50 numbers", "50 rows"], correct: 1 },
        { q: "INT stores:", options: ["Text", "Whole numbers", "Decimals", "Dates"], correct: 1 },
        { q: "Show table structure:", options: ["SHOW TABLE", "VIEW TABLE", "DESCRIBE", "STRUCTURE"], correct: 2 }
      ]
    },
    4: {
      title: "Creating Tables (Part 2)",
      titleAr: "إنشاء الجداول - الجزء 2",
      icon: "🔗",
      videos: [
        { id: "9WP35xwZ3tk", title: "Foreign Keys Explained" },
        { id: "4q-keGvUnag", title: "Table Relationships" }
      ],
      content: [
        { type: "intro", title: "Welcome to Week 4", text: "Learn about FOREIGN KEYS to link tables." },
        { type: "concept", title: "What is a FOREIGN KEY?", text: "Links one table to another by referencing a PRIMARY KEY.", points: ["Links two tables", "References PRIMARY KEY", "Ensures data integrity", "Parent table must exist first"] },
        { type: "sql", title: "CREATE Departments", code: "CREATE TABLE Departments (\n  DepartmentID INT PRIMARY KEY AUTO_INCREMENT,\n  DepartmentName VARCHAR(100)\n);", text: "Simple table, no foreign keys" },
        { type: "sql", title: "CREATE Instructors", code: "CREATE TABLE Instructors (\n  InstructorID INT PRIMARY KEY AUTO_INCREMENT,\n  Name VARCHAR(100),\n  DepartmentID INT,\n  FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)\n);", text: "Links to Departments table" }
      ],
      exercises: [
        { q: "FOREIGN KEY does:", options: ["Creates unique values", "Links tables", "Stores dates", "Deletes data"], correct: 1 },
        { q: "REFERENCES specifies:", options: ["Column name", "Table to link to", "Data type", "Primary key"], correct: 1 },
        { q: "Which table create first?", options: ["Any table", "Parent table", "Child table", "Alphabetically"], correct: 1 },
        { q: "FK value must exist in:", options: ["Same table", "Referenced table", "Any table", "No table"], correct: 1 },
        { q: "INT stores:", options: ["Text", "Integers", "Dates", "Booleans"], correct: 1 }
      ]
    },
    5: {
      title: "Creating Tables (Part 3)",
      titleAr: "إنشاء الجداول - الجزء 3",
      icon: "📊",
      videos: [
        { id: "1eUn6Y-JqI4", title: "Many-to-Many Relationships" },
        { id: "C3icLzBtg5A", title: "Junction Tables" }
      ],
      content: [
        { type: "intro", title: "Welcome to Week 5", text: "Create junction tables for many-to-many relationships." },
        { type: "concept", title: "Junction Tables", text: "Connect two tables in many-to-many relationship.", points: ["Links 2 tables", "Has FKs to both", "Has own PK"] },
        { type: "sql", title: "CREATE Enrollments", code: "CREATE TABLE Enrollments (\n  EnrollmentID INT PRIMARY KEY AUTO_INCREMENT,\n  StudentID INT,\n  CourseID INT,\n  EnrollmentDate DATE,\n  FOREIGN KEY (StudentID) REFERENCES Students(StudentID),\n  FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)\n);", text: "Links Students and Courses" },
        { type: "sql", title: "CREATE Grades", code: "CREATE TABLE Grades (\n  GradeID INT PRIMARY KEY AUTO_INCREMENT,\n  EnrollmentID INT,\n  Grade CHAR(1),\n  FOREIGN KEY (EnrollmentID) REFERENCES Enrollments(EnrollmentID)\n);", text: "Stores grades for enrollments" }
      ],
      exercises: [
        { q: "Junction table is for:", options: ["Deleting data", "Many-to-many links", "Storing passwords", "Backups"], correct: 1 },
        { q: "Enrollments has how many FKs?", options: ["0", "1", "2", "3"], correct: 2 },
        { q: "CHAR(1) stores:", options: ["One number", "One character", "One word", "One sentence"], correct: 1 },
        { q: "Grades references:", options: ["Students", "Courses", "Enrollments", "Departments"], correct: 2 },
        { q: "Enrollments connects:", options: ["Students & Instructors", "Students & Courses", "Courses & Grades", "Depts & Instructors"], correct: 1 }
      ]
    },
    6: {
      title: "Inserting Data (Part 1)",
      titleAr: "إدراج البيانات - الجزء 1",
      icon: "✏️",
      videos: [
        { id: "G6HKoasSMPE", title: "SQL INSERT Statement" },
        { id: "0PHAJddEwdk", title: "Inserting Data into Tables" }
      ],
      content: [
        { type: "intro", title: "Welcome to Week 6", text: "Learn INSERT INTO to add data." },
        { type: "sql", title: "INSERT Syntax", code: "INSERT INTO table_name (col1, col2)\nVALUES (val1, val2);", text: "Basic INSERT syntax" },
        { type: "sql", title: "INSERT Student", code: "INSERT INTO Students (FirstName, LastName, DateOfBirth, EnrollmentDate)\nVALUES ('John', 'Doe', '2000-01-15', '2024-09-01');", text: "Add a student record" },
        { type: "sql", title: "INSERT Course", code: "INSERT INTO Courses (CourseName, Credits)\nVALUES ('Database Systems', 3);", text: "Add a course" },
        { type: "concept", title: "Important Notes", text: "Remember these rules:", points: ["Text in single quotes", "Dates: YYYY-MM-DD", "AUTO_INCREMENT cols are automatic", "End with semicolon"] }
      ],
      exercises: [
        { q: "INSERT INTO adds:", options: ["Tables", "Databases", "Records/Rows", "Columns"], correct: 2 },
        { q: "Text values need:", options: ["Double quotes", "Single quotes", "Parentheses", "Brackets"], correct: 1 },
        { q: "MySQL date format:", options: ["DD-MM-YYYY", "YYYY-MM-DD", "MM/DD/YYYY", "YYYY/DD/MM"], correct: 1 },
        { q: "AUTO_INCREMENT columns:", options: ["Must specify", "Are automatic", "Cannot use", "Store text"], correct: 1 },
        { q: "View all data:", options: ["SHOW ALL", "VIEW table", "SELECT * FROM", "GET ALL"], correct: 2 }
      ]
    },
    7: {
      title: "Inserting Data (Part 2)",
      titleAr: "إدراج البيانات - الجزء 2",
      icon: "📝",
      videos: [
        { id: "7S_tz1z_5bA", title: "Inserting with Foreign Keys" }
      ],
      content: [
        { type: "intro", title: "Welcome to Week 7", text: "Insert data into tables with foreign keys." },
        { type: "concept", title: "FK Rules", text: "Foreign key values must exist in parent table!", points: ["Parent data first", "FK must match existing PK", "Invalid FK = Error"] },
        { type: "sql", title: "Insert Dept", code: "INSERT INTO Departments (DepartmentName)\nVALUES ('Computer Science');", text: "Insert parent first" },
        { type: "sql", title: "Insert Instructor", code: "INSERT INTO Instructors (Name, DepartmentID)\nVALUES ('Dr. Smith', 1);", text: "FK=1 must exist in Departments" },
        { type: "sql", title: "Insert Enrollment", code: "INSERT INTO Enrollments (StudentID, CourseID, EnrollmentDate)\nVALUES (1, 1, '2024-09-01');", text: "Both FKs must exist" }
      ],
      exercises: [
        { q: "FK values must:", options: ["Be null", "Exist in parent", "Be text", "Auto-generate"], correct: 1 },
        { q: "Invalid FK causes:", options: ["Success", "Warning", "Error", "Nothing"], correct: 2 },
        { q: "Which insert first?", options: ["Child", "Parent", "Any", "Random"], correct: 1 },
        { q: "INSERT adds how many rows?", options: ["Multiple", "One at a time", "All rows", "None"], correct: 1 },
        { q: "StudentID 1 refers to:", options: ["First student", "Last student", "No student", "All"], correct: 0 }
      ]
    },
    8: {
      title: "Query Basics (Part 1)",
      titleAr: "أساسيات الاستعلام - الجزء 1",
      icon: "🔍",
      videos: [
        { id: "7GVFYt6_ZFM", title: "SQL SELECT Statement" },
        { id: "hwvcj3aCAxA", title: "WHERE Clause" }
      ],
      content: [
        { type: "intro", title: "Welcome to Week 8", text: "Learn SELECT to retrieve data." },
        { type: "sql", title: "SELECT All", code: "SELECT * FROM Students;", text: "Get all columns from Students" },
        { type: "sql", title: "SELECT Specific", code: "SELECT FirstName, LastName FROM Students;", text: "Get only names" },
        { type: "sql", title: "WHERE Clause", code: "SELECT * FROM Students WHERE StudentID = 1;", text: "Filter by condition" },
        { type: "sql", title: "WHERE with Text", code: "SELECT * FROM Courses WHERE Credits = 3;", text: "Filter courses" }
      ],
      exercises: [
        { q: "SELECT * returns:", options: ["One column", "All columns", "No columns", "First column"], correct: 1 },
        { q: "WHERE is for:", options: ["Sorting", "Filtering", "Deleting", "Inserting"], correct: 1 },
        { q: "FROM specifies:", options: ["Columns", "Table name", "Conditions", "Order"], correct: 1 },
        { q: "= in WHERE means:", options: ["Assignment", "Equals/Match", "Greater", "Less"], correct: 1 },
        { q: "SELECT retrieves:", options: ["And deletes", "Without changing", "And modifies", "And copies"], correct: 1 }
      ]
    },
    9: {
      title: "Query Basics (Part 2)",
      titleAr: "أساسيات الاستعلام - الجزء 2",
      icon: "🔗",
      videos: [
        { id: "G3lJAxg1cy8", title: "SQL JOINs Explained" },
        { id: "KTvYHEntvn8", title: "GROUP BY Tutorial" }
      ],
      content: [
        { type: "intro", title: "Welcome to Week 9", text: "Learn JOIN and GROUP BY." },
        { type: "sql", title: "JOIN Tables", code: "SELECT Students.FirstName, Courses.CourseName\nFROM Students\nJOIN Enrollments ON Students.StudentID = Enrollments.StudentID\nJOIN Courses ON Enrollments.CourseID = Courses.CourseID;", text: "Combine multiple tables" },
        { type: "sql", title: "COUNT and GROUP BY", code: "SELECT CourseName, COUNT(*) AS StudentCount\nFROM Enrollments\nJOIN Courses ON Enrollments.CourseID = Courses.CourseID\nGROUP BY CourseName;", text: "Count students per course" }
      ],
      exercises: [
        { q: "JOIN combines:", options: ["Columns", "Tables", "Databases", "Values"], correct: 1 },
        { q: "ON specifies:", options: ["Table name", "Join condition", "Column type", "Sort order"], correct: 1 },
        { q: "GROUP BY groups:", options: ["Tables", "Databases", "Rows", "Columns"], correct: 2 },
        { q: "COUNT(*) returns:", options: ["Sum", "Average", "Number of rows", "Maximum"], correct: 2 },
        { q: "INNER JOIN returns:", options: ["All rows", "Matching only", "Non-matching", "Empty"], correct: 1 }
      ]
    },
    10: {
      title: "Advanced Queries (Part 1)",
      titleAr: "الاستعلامات المتقدمة - الجزء 1",
      icon: "🧩",
      videos: [
        { id: "HXV3zeQKqGY", title: "SQL Subqueries" }
      ],
      content: [
        { type: "intro", title: "Welcome to Week 10", text: "Learn subqueries - queries inside queries." },
        { type: "sql", title: "Subquery with IN", code: "SELECT FirstName FROM Students\nWHERE StudentID IN (\n  SELECT StudentID FROM Enrollments WHERE CourseID = 1\n);", text: "Find students in course 1" },
        { type: "sql", title: "Subquery with AVG", code: "SELECT CourseName FROM Courses\nWHERE Credits > (SELECT AVG(Credits) FROM Courses);", text: "Courses above average credits" }
      ],
      exercises: [
        { q: "Subquery is:", options: ["Deleted query", "Query in query", "Failed query", "Backup query"], correct: 1 },
        { q: "IN checks value in:", options: ["Greater than", "List of values", "Less than", "One value"], correct: 1 },
        { q: "AVG() calculates:", options: ["Sum", "Count", "Average", "Max"], correct: 2 },
        { q: "Subqueries use:", options: ["Brackets []", "Parentheses ()", "Braces {}", "Quotes ''"], correct: 1 },
        { q: "Which runs first?", options: ["Outer", "Inner/Subquery", "Both", "Random"], correct: 1 }
      ]
    },
    11: {
      title: "Advanced Queries (Part 2)",
      titleAr: "الاستعلامات المتقدمة - الجزء 2",
      icon: "🔄",
      videos: [
        { id: "HqDh7PmfHts", title: "UPDATE and DELETE" },
        { id: "wuH5bD-mTDg", title: "SQL Transactions" }
      ],
      content: [
        { type: "intro", title: "Welcome to Week 11", text: "Learn UPDATE, DELETE, and transactions." },
        { type: "sql", title: "UPDATE", code: "UPDATE Students\nSET LastName = 'Smith'\nWHERE StudentID = 1;", text: "Modify existing data" },
        { type: "sql", title: "DELETE", code: "DELETE FROM Enrollments\nWHERE EnrollmentID = 1;", text: "Remove data" },
        { type: "sql", title: "Transaction", code: "BEGIN;\nUPDATE Students SET LastName = 'Jones' WHERE StudentID = 1;\nCOMMIT;", text: "Group operations" },
        { type: "concept", title: "Warning!", text: "Always use WHERE with UPDATE/DELETE!", points: ["Without WHERE = ALL rows affected!", "COMMIT saves changes", "ROLLBACK undoes changes"] }
      ],
      exercises: [
        { q: "UPDATE without WHERE:", options: ["Does nothing", "Updates one", "Updates ALL", "Error"], correct: 2 },
        { q: "COMMIT does:", options: ["Starts transaction", "Cancels", "Saves permanently", "Deletes"], correct: 2 },
        { q: "ROLLBACK does:", options: ["Saves", "Undoes changes", "Deletes tables", "Backups"], correct: 1 },
        { q: "DELETE removes:", options: ["Columns", "Tables", "Rows", "Databases"], correct: 2 },
        { q: "To change data use:", options: ["INSERT", "SELECT", "UPDATE", "DELETE"], correct: 2 }
      ]
    },
    12: {
      title: "Database Design & Normalization",
      titleAr: "تصميم قواعد البيانات والتطبيع",
      icon: "🏗️",
      videos: [
        { id: "GFQaEYEc8_8", title: "Database Normalization" },
        { id: "UrYLYV7WSHM", title: "1NF, 2NF, 3NF Tutorial" }
      ],
      content: [
        { type: "intro", title: "Welcome to Week 12", text: "Learn database design and normalization." },
        { type: "concept", title: "Normalization", text: "Organizing data to reduce redundancy.", points: ["1NF: No repeating groups", "2NF: No partial dependencies", "3NF: No transitive dependencies"] },
        { type: "concept", title: "Good Design", text: "Follow these principles:", points: ["One entity per table", "Use meaningful names", "Every table has PK", "Use FKs for relationships"] }
      ],
      exercises: [
        { q: "1NF eliminates:", options: ["All data", "Repeating groups", "Primary keys", "Foreign keys"], correct: 1 },
        { q: "Normalization reduces:", options: ["Tables", "Performance", "Redundancy", "Columns"], correct: 2 },
        { q: "Good table represents:", options: ["Multiple entities", "One entity", "No entities", "Random data"], correct: 1 },
        { q: "3NF requires:", options: ["Nothing", "1NF only", "1NF and 2NF", "2NF only"], correct: 2 },
        { q: "Good practice:", options: ["Store calculated values", "Meaningful names", "No primary keys", "All in one table"], correct: 1 }
      ]
    }
  };

  const week = weekData[weekNum];
  if (!week) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <p>Week {weekNum} coming soon!</p>
          <button onClick={() => onNavigate('home')} className="mt-4 px-6 py-2 bg-amber-600 rounded-lg">Back</button>
        </div>
      </div>
    );
  }

  const totalSteps = week.content.length + 2;

  const handleAnswer = (qi, ai) => { if (!submitted) setAnswers({...answers, [qi]: ai}); };

  const handleSubmit = () => {
    let c = 0;
    week.exercises.forEach((e, i) => { if (answers[i] === e.correct) c++; });
    const s = Math.round((c / week.exercises.length) * 100);
    setScore(s);
    setSubmitted(true);
    onExerciseComplete(weekNum, s);
  };

  if (showExercise) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Week {weekNum} Exercise</h2>
          </div>
          {!submitted ? (
            <div className="space-y-6">
              {week.exercises.map((ex, i) => (
                <div key={i} className="bg-slate-700/30 rounded-xl p-4">
                  <p className="text-white font-semibold mb-3">{i+1}. {ex.q}</p>
                  <div className="space-y-2">
                    {ex.options.map((opt, j) => (
                      <button key={j} onClick={() => handleAnswer(i, j)} className={`w-full text-left px-4 py-2 rounded-lg ${answers[i] === j ? 'bg-amber-600' : 'bg-slate-800 hover:bg-slate-700'}`}>
                        {String.fromCharCode(65+j)}. {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <button onClick={handleSubmit} disabled={Object.keys(answers).length < 5} className="w-full py-3 bg-emerald-600 rounded-xl font-bold disabled:opacity-50">Submit</button>
            </div>
          ) : (
            <div className="text-center">
              <div className={`p-8 rounded-2xl mb-6 ${score >= 60 ? 'bg-emerald-900/30' : 'bg-red-900/30'}`}>
                <p className="text-5xl mb-2">{score >= 60 ? '🎉' : '😔'}</p>
                <p className="text-4xl font-bold">{score}%</p>
              </div>
              <div className="space-y-3 mb-6">
                {week.exercises.map((ex, i) => (
                  <div key={i} className={`p-3 rounded-lg text-left ${answers[i] === ex.correct ? 'bg-emerald-900/30' : 'bg-red-900/30'}`}>
                    <p>{i+1}. {ex.q}</p>
                    <p className="text-sm">{answers[i] === ex.correct ? '✓ Correct' : `✗ Answer: ${ex.options[ex.correct]}`}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => onNavigate('home')} className="px-6 py-3 bg-amber-600 rounded-xl">Back to Course</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  const renderContent = () => {
    if (currentStep === week.content.length) {
      return (
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Video Tutorials</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {week.videos.map((v, i) => (
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
    if (currentStep === week.content.length + 1) {
      return (
        <div className="p-6 text-center">
          <p className="text-5xl mb-4">✅</p>
          <h2 className="text-2xl font-bold mb-6">Lesson Complete!</h2>
          <button onClick={() => setShowExercise(true)} className="px-8 py-4 bg-emerald-600 rounded-xl font-bold text-lg">Start Exercise</button>
        </div>
      );
    }
    const c = week.content[currentStep];
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <span className="px-3 py-1 bg-blue-600/30 rounded-full text-blue-300 text-sm">{c.type === 'handson' ? '🛠️ Hands-On' : c.type === 'sql' ? '💻 SQL' : '📖 Concept'}</span>
          <h2 className="text-2xl font-bold mt-4">{c.title}</h2>
        </div>
        {c.text && <div className="bg-slate-700/30 rounded-xl p-6 mb-6"><p>{c.text}</p></div>}
        {c.points && <div className="bg-slate-700/30 rounded-xl p-6 mb-6">{c.points.map((p,i) => <p key={i} className="mb-2">✓ {p}</p>)}</div>}
        {c.code && <div className="bg-slate-900 rounded-xl p-6 mb-6 overflow-x-auto"><pre className="text-cyan-300 font-mono">{c.code}</pre></div>}
        {c.steps && <div className="space-y-3">{c.steps.map((s,i) => <div key={i} className="flex gap-3 bg-slate-700/30 rounded-lg p-4"><span className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center font-bold">{i+1}</span><span>{s}</span></div>)}</div>}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col">
      <header className="bg-slate-800/80 border-b border-slate-700 p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => onNavigate('home')} className="px-3 py-2 bg-slate-700 rounded-lg">← Back</button>
            <div>
              <h1 className="font-bold">Week {weekNum}: {week.title}</h1>
              <p className="text-xs text-amber-300/70">{week.titleAr}</p>
            </div>
          </div>
          <span className="text-3xl">{week.icon}</span>
        </div>
      </header>
      <div className="bg-slate-800/50 border-b border-slate-700 px-4 py-2">
        <div className="max-w-6xl mx-auto">
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-amber-500 transition-all" style={{width: `${((currentStep+1)/totalSteps)*100}%`}}></div>
          </div>
        </div>
      </div>
      <div className="flex-1">{renderContent()}</div>
      <div className="bg-slate-800/80 border-t border-slate-700 p-4 sticky bottom-0">
        <div className="max-w-6xl mx-auto flex justify-between">
          <button onClick={() => setCurrentStep(Math.max(0, currentStep-1))} disabled={currentStep === 0} className={`px-6 py-2 rounded-lg ${currentStep === 0 ? 'bg-slate-700 text-slate-500' : 'bg-slate-700'}`}>← Previous</button>
          {currentStep < totalSteps - 1 ? (
            <button onClick={() => setCurrentStep(currentStep+1)} className="px-6 py-2 bg-amber-600 rounded-lg">Next →</button>
          ) : (
            <button onClick={() => setShowExercise(true)} className="px-6 py-2 bg-emerald-600 rounded-lg">Take Exercise</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeekLesson;
