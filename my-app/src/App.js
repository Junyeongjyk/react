// src/App.js
import './App.css';
import './App.scss';
import React, { useState, useEffect } from 'react';
import LoadingSpinner from './utils/Loading'; // 로딩 스피너 컴포넌트를 불러옵니다
import { Route, Routes } from 'react-router-dom';
import BoardList from "./routes/BoardList";
import Home from "./routes/Home";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 3초 후에 로딩 상태를 false로 변경
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<BoardList />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
