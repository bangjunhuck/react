import React, { useState } from 'react';
import { useNavigate, Route, Routes } from "react-router-dom";
import '../css/new.css'
import HeaderAdmin from './Header/Header admin';
import Footer from './Footer/Footer';
import LoginForm from './LoginForm';  
import Register from './Register/Register'
import R095_reactThrottle from './reactThrottle';
import MyPage from './MyPage'

const App = () => {
  const [name, setName] = useState('');
  const [mode, setMode] = useState('login'); // login, info
  const userData = {
    id: 'bang',
    password: 'bang1',
    name: '방준혁',
  }
  const navigate = useNavigate();

  // 수정된 changeMode 함수
  const changeMode = (e, username) => {
    e.preventDefault();
    setName(username); // 사용자 이름 설정
    setMode('info');
    navigate('/Throttle');
    console.log(mode);
    console.log(userData.name);
  }

  return (
    <div className="App">
      <HeaderAdmin userName={userData.name} name={name} /> {/* 사용자 이름 전달 */}
      <Routes>
        <Route
          path='/'
          element={
            <LoginForm
              userData={userData}
              changeMode={changeMode}
              setName={setName}
            />
          }
        />
        <Route
          path='/Throttle'
          element={<R095_reactThrottle name={name} navigate={navigate} />}
        />
        <Route
          path='/register_check'
          element={<Register name={name} navigate={navigate} />}
        />
      <Route
          path='/UserApproval'
          element={<MyPage name={name} navigate={navigate} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;