import React, {useState, useEffect} from 'react';
import './styles/EntryList.css';

export default function EntryList({entries, entriesPerPage, pageNumber}) {
  // var [image, setImage] = useState(entries.image);

  if (entries[1] !== undefined) {
    return (
      <>
        {Object.keys(entries[pageNumber]).map((index) => {
          var entry = entries[pageNumber][index];
          return (
            <div className="blog-preview" key={index}>
              <h2 className="preview-title">{entry.title}</h2>
              <div className="preview-details">
                <div className="preview-author-info">
                  <img src={entry.authorImage} alt={entry.author} className="preview-author-image" />
                  <span className="preview-author-name"> Author: {entry.author}</span>
                </div>
                <span className="preview-date">{entry.date}</span>
              </div>
              <p className="preview-excerpt">{entry.preview}</p>
            </div>
          );
        })}
      </>
    );
  }
}