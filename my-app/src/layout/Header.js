
import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={headerStyle}>
      <Link to="/">홈</Link>
      &nbsp;&nbsp; | &nbsp;&nbsp;
      <Link to="/board">게시판</Link>
      <hr />
    </header>
  );
};

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px 0'
};

export default Header;
