import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RecoveryPage from './pages/RecoveryPage';
import HomePage from './pages/HomePage';
import WeekLesson from './pages/WeekLesson';
import ProfilePage from './pages/ProfilePage';
import AdminDashboard from './pages/AdminDashboard';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [currentUser, setCurrentUser] = useState(null);
  const [students, setStudents] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load students from Supabase on mount
  useEffect(() => {
    const initApp = async () => {
      await loadStudents();
      
      // Check for saved user session
      try {
        const savedUser = localStorage.getItem('taif_db_current_user');
        if (savedUser) {
          const parsedUser = JSON.parse(savedUser);
          // Verify user still exists in database
          const { data: verifiedUser, error } = await supabase
            .from('students')
            .select('id, student_number, student_name, section_number, progress, total_score, overall_grade, registered_at')
            .eq('id', parsedUser.id)
            .single();
          
          if (verifiedUser && !error) {
            // Update with fresh data from database
            const freshUser = {
              id: verifiedUser.id,
              studentNumber: verifiedUser.student_number,
              studentName: verifiedUser.student_name,
              sectionNumber: verifiedUser.section_number,
              progress: verifiedUser.progress || getInitialProgress(),
              totalScore: verifiedUser.total_score || 0,
              overallGrade: verifiedUser.overall_grade || 'N/A',
              registeredAt: verifiedUser.registered_at
            };
            setCurrentUser(freshUser);
            localStorage.setItem('taif_db_current_user', JSON.stringify(freshUser));
            setCurrentPage('home');
          } else {
            // Clear invalid session
            localStorage.removeItem('taif_db_current_user');
          }
        }
      } catch (err) {
        console.error('Error restoring session:', err);
        localStorage.removeItem('taif_db_current_user');
      }
      
      setLoading(false);
    };
    
    initApp();
  }, []);

  // Load all students from Supabase
  const loadStudents = async () => {
    try {
      const { data, error } = await supabase
        .from('students')
        .select('id, student_number, student_name, section_number, progress, total_score, overall_grade, registered_at')
        .order('registered_at', { ascending: false });

      if (error) {
        console.error('Error loading students:', error);
        return;
      }

      // Transform data to match our app structure
      const transformedStudents = data.map(student => ({
        id: student.id,
        studentNumber: student.student_number,
        studentName: student.student_name,
        sectionNumber: student.section_number,
        progress: student.progress || getInitialProgress(),
        totalScore: student.total_score || 0,
        overallGrade: student.overall_grade || 'N/A',
        registeredAt: student.registered_at
      }));

      setStudents(transformedStudents);
      console.log('Loaded', transformedStudents.length, 'students from Supabase');
    } catch (err) {
      console.error('Failed to load students:', err);
    }
  };

  // Get initial progress structure
  const getInitialProgress = () => ({
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
  });

  // Save current user to localStorage
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('taif_db_current_user', JSON.stringify(currentUser));
    }
  }, [currentUser]);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleRegister = async (studentData) => {
    try {
      const { data: result, error } = await supabase.rpc('db_register_student', {
        p_student_name: studentData.studentName.trim(),
        p_student_number: studentData.studentNumber.trim(),
        p_section_number: studentData.sectionNumber,
        p_password: studentData.password
      });

      if (error) {
        console.error('Registration error:', error);
        return 'error';
      }
      if (!result?.success) return false;

      // Reload students list
      await loadStudents();
      setTimeout(() => setCurrentPage('login'), 1500);
      return true;
    } catch (err) {
      console.error('Registration error:', err);
      return 'error';
    }
  };

  const handleLogin = async (studentNumber, password) => {
    // Admin login check
    if (studentNumber === 'admin' && password === 'Saad@1234') {
      setIsAdmin(true);
      await loadStudents(); // Refresh students list for admin
      setCurrentPage('admin');
      return { success: true };
    }

    try {
      // Find student in Supabase
      const { data: student, error } = await supabase.rpc('db_student_login', {
        p_student_number: studentNumber.trim(),
        p_password: password
      });

      if (error) {
        console.error('Login query error:', error);
        return { success: false, message: 'Login failed. Please try again. | فشل تسجيل الدخول. حاول مرة أخرى.' };
      }

      if (!student?.success) {
        return { success: false, message: 'Invalid student number or password! | الرقم الجامعي أو كلمة المرور غير صحيحة!' };
      }

      // Transform to app structure
      const transformedStudent = {
        id: student.id,
        studentNumber: student.student_number,
        studentName: student.student_name,
        sectionNumber: student.section_number,
        progress: student.progress || getInitialProgress(),
        totalScore: student.total_score || 0,
        overallGrade: student.overall_grade || 'N/A',
        registeredAt: student.registered_at
      };

      setCurrentUser(transformedStudent);
      setCurrentPage('home');
      return { success: true };
    } catch (err) {
      console.error('Login error:', err);
      return { success: false, message: 'Login failed. Please try again. | فشل تسجيل الدخول. حاول مرة أخرى.' };
    }
  };

  const handlePasswordRecovery = async (studentNumber, recoveryCode, newPassword) => {
    const { data, error } = await supabase.rpc('db_reset_student_password', {
      p_student_number: studentNumber.trim(),
      p_recovery_code: recoveryCode.trim(),
      p_new_password: newPassword
    });
    if (error) {
      console.error('Password recovery error:', error);
      return false;
    }
    return data === true;
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAdmin(false);
    localStorage.removeItem('taif_db_current_user');
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

  const handleExerciseComplete = async (weekNum, score) => {
    if (!currentUser) return;

    const weekKey = `week${weekNum}`;
    
    // Calculate new progress
    const newProgress = {
      ...currentUser.progress,
      [weekKey]: {
        completed: true,
        score: Math.max(currentUser.progress[weekKey]?.score || 0, score),
        attempts: (currentUser.progress[weekKey]?.attempts || 0) + 1,
        completedAt: new Date().toISOString()
      }
    };

    // Calculate total score (average of all completed weeks)
    const completedWeeks = Object.values(newProgress).filter(w => w.completed);
    const totalScore = completedWeeks.length > 0
      ? Math.round(completedWeeks.reduce((sum, w) => sum + w.score, 0) / completedWeeks.length)
      : 0;
    const overallGrade = calculateGrade(totalScore);

    try {
      // Update in Supabase
      const { error } = await supabase
        .from('students')
        .update({
          progress: newProgress,
          total_score: totalScore,
          overall_grade: overallGrade
        })
        .eq('id', currentUser.id);

      if (error) {
        console.error('Error updating progress:', error);
        return;
      }

      // Update local state
      const updatedUser = {
        ...currentUser,
        progress: newProgress,
        totalScore,
        overallGrade
      };

      setCurrentUser(updatedUser);

      // Update students list
      setStudents(students.map(s => 
        s.id === currentUser.id ? updatedUser : s
      ));

    } catch (err) {
      console.error('Error updating progress:', err);
    }
  };

  // Loading screen
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/30 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  const renderPage = () => {
    // Admin dashboard
    if (isAdmin && currentPage === 'admin') {
      return <AdminDashboard students={students} onNavigate={handleNavigate} onLogout={handleLogout} onRefresh={loadStudents} />;
    }

    if (!currentUser && currentPage !== 'login' && currentPage !== 'register' && currentPage !== 'recover') {
      return <LoginPage onNavigate={handleNavigate} onLogin={handleLogin} />;
    }

    switch (currentPage) {
      case 'login':
        return <LoginPage onNavigate={handleNavigate} onLogin={handleLogin} />;
      case 'register':
        return <RegisterPage onNavigate={handleNavigate} onRegister={handleRegister} />;
      case 'recover':
        return <RecoveryPage onNavigate={handleNavigate} onRecover={handlePasswordRecovery} />;
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
