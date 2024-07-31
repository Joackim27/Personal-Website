import React from 'react';

const ArticleFooter = ({ onClose }) => {
    return (
        <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderTop: '1px solid #ccc', marginTop: '20px' }}>
            <p>Contact: joackimagno@gmail.com</p>
            <button onClick={onClose} style={{ padding: '5px 10px', cursor: 'pointer', border: 'none', backgroundColor: '#f44336', color: 'white', borderRadius: '5px' }}>Close</button>
        </footer>
    );
};

export default ArticleFooter;
