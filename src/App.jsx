import React, { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import WeekLesson from './pages/WeekLesson';
import ProfilePage from './pages/ProfilePage';
import AdminDashboard from './pages/AdminDashboard';


const App = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [currentUser, setCurrentUser] = useState(null);
  const [students, setStudents] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);


  // Load students from localStorage on mount
  useEffect(() => {
    const savedStudents = localStorage.getItem('taif_db_students');
    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
    }
    
    const savedUser = localStorage.getItem('taif_db_current_user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
      setCurrentPage('home');
    }
  }, []);

  // Save students to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('taif_db_students', JSON.stringify(students));
  }, [students]);

  // Save current user
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('taif_db_current_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('taif_db_current_user');
    }
  }, [currentUser]);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleRegister = (studentData) => {
    // Check if student number already exists
    const exists = students.find(s => s.studentNumber === studentData.studentNumber);
    if (exists) {
      return { success: false, message: 'Student number already registered!' };
    }

    // Create new student with initial progress
    const newStudent = {
      ...studentData,
      id: Date.now(),
      registeredAt: new Date().toISOString(),
      progress: {
        week1: { completed: false, score: 0, attempts: 0 },
        week2: { completed: false, score: 0, attempts: 0 },
        week3: { completed: false, score: 0, attempts: 0 },
        week4: { completed: false, score: 0, attempts: 0 },
        week5: { completed: false, score: 0, attempts: 0 },
        week6: { completed: false, score: 0, attempts: 0 },
        week7: { completed: false, score: 0, attempts: 0 },
        week8: { completed: false, score: 0, attempts: 0 },
        week9: { completed: false, score: 0, attempts: 0 },
        week10: { completed: false, score: 0, attempts: 0 },
        week11: { completed: false, score: 0, attempts: 0 },
        week12: { completed: false, score: 0, attempts: 0 },
        week13: { completed: false, score: 0, attempts: 0 },
      },
      totalScore: 0,
      overallGrade: 'N/A'
    };

    setStudents([...students, newStudent]);
    return { success: true, message: 'Registration successful!' };
  };

  const handleLogin = (studentNumber, password) => {
    // ✅ Admin login check - THIS IS WHERE IT BELONGS
    if (studentNumber === 'admin' && password === 'Saad@1234') {
      setIsAdmin(true);
      setCurrentPage('admin');
      return { success: true };
    }

    const student = students.find(
      s => s.studentNumber === studentNumber && s.password === password
    );
    
    if (student) {
      setCurrentUser(student);
      setCurrentPage('home');
      return { success: true };
    }
    return { success: false, message: 'Invalid student number or password!' };
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAdmin(false);
    setCurrentPage('login');
  };

  const calculateGrade = (score) => {
    if (score >= 90) return 'A+';
    if (score >= 85) return 'A';
    if (score >= 80) return 'B+';
    if (score >= 75) return 'B';
    if (score >= 70) return 'C+';
    if (score >= 65) return 'C';
    if (score >= 60) return 'D+';
    if (score >= 50) return 'D';
    return 'F';
  };

  const handleExerciseComplete = (weekNum, score) => {
    if (!currentUser) return;

    const weekKey = `week${weekNum}`;
    const updatedStudents = students.map(student => {
      if (student.studentNumber === currentUser.studentNumber) {
        const newProgress = {
          ...student.progress,
          [weekKey]: {
            completed: true,
            score: Math.max(student.progress[weekKey].score, score),
            attempts: student.progress[weekKey].attempts + 1,
            completedAt: new Date().toISOString()
          }
        };

        // Calculate total score (average of all completed weeks)
        const completedWeeks = Object.values(newProgress).filter(w => w.completed);
        const totalScore = completedWeeks.length > 0
          ? Math.round(completedWeeks.reduce((sum, w) => sum + w.score, 0) / completedWeeks.length)
          : 0;

        const updatedStudent = {
          ...student,
          progress: newProgress,
          totalScore,
          overallGrade: calculateGrade(totalScore)
        };

        setCurrentUser(updatedStudent);
        return updatedStudent;
      }
      return student;
    });

    setStudents(updatedStudents);
  };

  const renderPage = () => {
    // ✅ Admin dashboard check - AT THE TOP, BEFORE other checks
    if (isAdmin && currentPage === 'admin') {
      return <AdminDashboard students={students} onNavigate={handleNavigate} onLogout={handleLogout} />;
    }

    if (!currentUser && currentPage !== 'login' && currentPage !== 'register') {
      return <LoginPage onNavigate={handleNavigate} onLogin={handleLogin} />;
    }

    switch (currentPage) {
      case 'login':
        return <LoginPage onNavigate={handleNavigate} onLogin={handleLogin} />;
      case 'register':
        return <RegisterPage onNavigate={handleNavigate} onRegister={handleRegister} />;
      case 'home':
        return <HomePage user={currentUser} onNavigate={handleNavigate} onLogout={handleLogout} />;
      case 'profile':
        return <ProfilePage user={currentUser} onNavigate={handleNavigate} onLogout={handleLogout} />;
      case 'week1':
      case 'week2':
      case 'week3':
      case 'week4':
      case 'week5':
      case 'week6':
      case 'week7':
      case 'week8':
      case 'week9':
      case 'week10':
      case 'week11':
      case 'week12':
      case 'week13':
        const weekNum = parseInt(currentPage.replace('week', ''));
        return (
          <WeekLesson 
            weekNum={weekNum} 
            user={currentUser}
            onNavigate={handleNavigate} 
            onExerciseComplete={handleExerciseComplete}
            onLogout={handleLogout}
          />
        );
      default:
        return <HomePage user={currentUser} onNavigate={handleNavigate} onLogout={handleLogout} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderPage()}
    </div>
  );
};

export default App;
