import React, {useState, useEffect} from 'react';
import Entries from './../entries.json';
import EntryList from './../components/EntryList.js';
import PageSelector from './../components/PageSelector.js';


export default function Journal({currentEntry}) {
  var [entries, setEntries] = useState({}); //seperated by page based on entriesPerPage
  var [entriesPerPage, setEntriesPerPage] = useState(3);
  var [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setEntries(separateByPage(Entries, entriesPerPage));
  }, []);

  useEffect(() => {
    console.log('page number changed: ', pageNumber);
  }, [pageNumber]);


  return (
    <>
      <EntryList entries={entries} pageNumber={pageNumber}/>
      <PageSelector pageNumber={pageNumber} setPageNumber={setPageNumber} entries={entries}/>
    </>
  );
}

var separateByPage = (entries, perPageLimit, currentPage = 1, currentEntry = 1, pages = {}) => {
  var pages = pages;
  var page = {};

  console.log(currentPage);
  if (currentPage * perPageLimit <= Object.keys(entries).length + perPageLimit) {
    for(currentEntry; currentEntry <= perPageLimit * currentPage; currentEntry++) {
      if (entries[currentEntry] !== undefined || entries[currentEntry] !== null) {
        page[currentEntry] = entries[currentEntry];
      }
    }
    pages = {...pages, ...{ [String(currentPage)] : page}};
    pages = separateByPage(entries, perPageLimit, currentPage + 1, currentEntry, pages);
  }
  return pages;
};