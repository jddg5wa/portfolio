import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header.js';
import Journal from './pages/Journal.js';



export default function App() {
  var [currentPage, setCurrentPage] = useState('journal');
  var [pages, setPages] = useState({'journal': <Journal />});

  return (
    <>
    <Header setPage={setCurrentPage}/>
    <div id="header-spacer" style={{height: "70px"}}></div>
    <div className="center">
      {pages[currentPage]}
    </div>
    </>
  );
}