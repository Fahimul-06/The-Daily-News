import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
  compact?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, featured = false, compact = false }) => {
  if (featured) {
    return (
      <div className="group relative overflow-hidden rounded-lg shadow-lg">
        <Link to={`/article/${article.id}`} className="block">
          <div className="aspect-[16/9] w-full">
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
            <div className="absolute bottom-0 p-6">
              <div className="mb-2">
                <span className="inline-block bg-red-600 text-white text-xs font-medium px-2 py-1 rounded-sm">{article.category}</span>
                <span className="ml-2 text-xs text-slate-300">{article.date}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">{article.title}</h2>
              <p className="text-slate-200 mb-4 line-clamp-2">{article.excerpt}</p>
              <div className="text-sm text-slate-300 flex items-center">
                <img 
                  src={article.author.avatar} 
                  alt={article.author.name}
                  className="w-8 h-8 rounded-full mr-2 object-cover"
                />
                <span>{article.author.name}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  if (compact) {
    return (
      <div className="group flex items-center space-x-4">
        <Link to={`/article/${article.id}`} className="block flex-shrink-0 w-24 h-24 overflow-hidden rounded">
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        <div className="flex-1">
          <Link to={`/article/${article.id}`}>
            <h3 className="text-lg font-medium text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2 mb-1">{article.title}</h3>
          </Link>
          <div className="text-xs text-slate-500">
            <span>{article.date}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group overflow-hidden rounded-lg shadow-md bg-white">
      <Link to={`/article/${article.id}`} className="block">
        <div className="aspect-[16/9] w-full overflow-hidden">
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <div className="mb-2">
            <span className="inline-block bg-red-600 text-white text-xs font-medium px-2 py-1 rounded-sm">{article.category}</span>
            <span className="ml-2 text-xs text-slate-500">{article.date}</span>
          </div>
          <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-2">{article.title}</h3>
          <p className="text-slate-600 mb-4 line-clamp-3">{article.excerpt}</p>
          <div className="text-sm text-slate-500 flex items-center">
            <img 
              src={article.author.avatar} 
              alt={article.author.name}
              className="w-6 h-6 rounded-full mr-2 object-cover"
            />
            <span>{article.author.name}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;