import React from 'react';

const MetroChatBot = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    // You may want to use a state management library or context to handle form data and results
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '7rem'}}>
      <div className="container" style={{ backgroundColor: '#f4f4f4', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: '70%' }}>
        <h1 style={{ color: '#333' }}>Metro ChatBot Ahmedabad, Gujarat</h1>
        <h2 style={{ color: '#333' }}>Please ask your Question: </h2>
        <form method="post" action="/your-api-endpoint" onSubmit={handleSubmit}>
          {/* CSRF token */}
          <input type="hidden" name="csrfmiddlewaretoken" value="{/* csrf_token value */}" />
          
          <label htmlFor="data" style={{ display: 'block', marginBottom: '8px', color: '#555' }}>Input:</label>
          <input type="text" name="data" id="data" style={{ width: '100%', padding: '8px', marginBottom: '15px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} />
          
          <label htmlFor="language" style={{ display: 'block', marginBottom: '8px', color: '#555' }}>Language:</label>
          <select name="language" id="language" style={{ width: '100%', padding: '8px', marginBottom: '15px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}>
            <option value="english">English</option>
            <option value="hinglish">Hinglish</option>
          </select>

          <input type="submit" value="Submit" style={{ backgroundColor: '#4caf50', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }} />
        </form>
        
        {/* Result Section */}
        {/* {result && (
          <div>
            <h2 style={{ color: '#333' }}>Result:</h2>
            <p style={{ color: '#333' }}>{result}</p>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default MetroChatBot;
