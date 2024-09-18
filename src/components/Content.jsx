import React, { useEffect, useState } from 'react';

function Content() {
  const [quotes, setQuotes] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);


  useEffect(() => {
    fetch('https://dummyjson.com/quotes')
      .then((response) => response.json())
      .then((data) => setQuotes(data.quotes))
      .catch((error) => console.error('Error fetching quotes:', error));
  }, []);


  const handleNextClick = () => {
    setCurrentQuoteIndex((prevIndex) =>
      prevIndex < quotes.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <>
     <div className="container-fluid d-flex align-items-center justify-content-center">
     <div className='.container mt-5 w-75' style={{ textAlign: 'center', padding: '50px',backgroundColor:"orange" }}>
        <h1 className='fw-bolder'>Quotes</h1>
        {quotes.length > 0 ? (
          <div>
            <p>"{quotes[currentQuoteIndex].quote}"</p>
            <p>- {quotes[currentQuoteIndex].author}</p>
            <button onClick={handleNextClick} className='btn btn-info mt-3'>Next</button>
          </div>
        ) : (
          <p>Loading quotes...</p>
        )}
      </div>
     </div>
    </>
  );
}

export default Content;
