import React from 'react';

const ArticleSection = ({ title, content }) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{content}</p>
        </section>
    );
};

export default ArticleSection;
