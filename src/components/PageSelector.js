import React, {useState} from 'react';
import './styles/PageSelector.css';


export default function PageSelector({pageNumber, setPageNumber, entries}) {
  var setPage = (e) => {
    var id = e.target.id;
    var newPage;
    if (id === "page-left" && pageNumber > 1) {
      newPage = pageNumber - 1;
    } else if (id === "page-right" && pageNumber < Object.keys(entries).length) {
      newPage = pageNumber + 1;
    } else if (id.includes("page-number-")) {
      newPage = Number(e.target.id.split('-')[2]);
    }
    setPageNumber(newPage);
  }


  return (
    <>
      <div className="page-selector">
        {pageNumber <= 1 ? <></> : <div id="page-left" onClick={setPage}>{'<'}</div>}
        {Object.keys(entries).map((index) => (
            <div key={index} pageNumber={index} className="page-numbers" id={`page-number-${index}`} onClick={setPage}> {index} </div>
          ))}
        {pageNumber >= Object.keys(entries).length ? <></> : <div id="page-right" onClick={setPage}>{'>'}</div>}
      </div>
    </>
  )
};
