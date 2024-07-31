import React, { useState } from 'react';
import './App.css';
import ArticleSection from './components/ArticleSection';
import ArticleFooter from './components/ArticleFooter';

function App() {
    const [isVisible, setIsVisible] = useState(true);

    const sections = [
        {
            title: 'Introduction to Machine Learning',
            content: 'Machine learning is a subset of artificial intelligence that involves training algorithms to make predictions or decisions based on data.'
        },
        {
            title: 'Applications in Computer Engineering',
            content: 'Machine learning is used in hardware optimization, network security, robotics, and IoT devices, among other areas.'
        },
        {
            title: 'Case Studies',
            content: 'Real-world examples include machine learning in autonomous vehicles, predictive maintenance in industrial systems, and personalized recommendations in consumer electronics.'
        },
        {
            title: 'Benefits and Challenges',
            content: 'Benefits include improved efficiency and new capabilities, while challenges include data privacy concerns and the need for large datasets.'
        },
        {
            title: 'Future Trends',
            content: 'Future trends in machine learning include advancements in deep learning, reinforcement learning, and the integration of machine learning with quantum computing.'
        }
    ];

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <div className="App">
            {isVisible && (
                <>
                    {sections.map((section, index) => (
                        <ArticleSection key={index} title={section.title} content={section.content} />
                    ))}
                    <ArticleFooter onClose={handleClose} />
                </>
            )}
        </div>
    );
}

export default App;
