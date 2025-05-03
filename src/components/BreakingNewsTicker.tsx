import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const BreakingNewsTicker: React.FC = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const breakingNews = [
    { id: 1, title: 'Senate passes new climate bill with bipartisan support', link: '/article/1' },
    { id: 2, title: 'Tech giant unveils revolutionary AI assistant at annual conference', link: '/article/2' },
    { id: 3, title: 'Major sporting event postponed due to severe weather warnings', link: '/article/3' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % breakingNews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [breakingNews.length]);

  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <div className="flex items-center mr-4 font-bold">
            <AlertTriangle size={16} className="mr-1" />
            <span>BREAKING:</span>
          </div>
          <div className="relative overflow-hidden flex-1">
            <div className="animate-marquee whitespace-nowrap">
              {breakingNews.map((news, index) => (
                <Link
                  key={news.id}
                  to={news.link}
                  className={`inline-block mr-8 hover:underline ${index === currentNewsIndex ? 'opacity-100' : 'opacity-0 absolute'}`}
                  style={{ transition: 'opacity 0.5s ease-in-out' }}
                >
                  {news.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNewsTicker;