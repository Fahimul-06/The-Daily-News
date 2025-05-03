import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import { sampleArticles } from '../data/sampleData';

const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [searchResults, setSearchResults] = useState<typeof sampleArticles>([]);

  // Search function
  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    
    const lowerCaseQuery = query.toLowerCase();
    
    // Search through sample articles
    const results = sampleArticles.filter(article => 
      article.title.toLowerCase().includes(lowerCaseQuery) ||
      article.excerpt.toLowerCase().includes(lowerCaseQuery) ||
      article.content.toLowerCase().includes(lowerCaseQuery) ||
      article.author.name.toLowerCase().includes(lowerCaseQuery) ||
      article.category.toLowerCase().includes(lowerCaseQuery) ||
      article.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
    );
    
    setSearchResults(results);
  };

  // Perform search when query in URL changes
  useEffect(() => {
    const currentQuery = searchParams.get('q') || '';
    setSearchQuery(currentQuery);
    performSearch(currentQuery);
  }, [searchParams]);

  // Handle search form submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: searchQuery });
  };

  return (
    <div>
      {/* Search form */}
      <div className="mb-8">
        <form onSubmit={handleSearchSubmit} className="flex">
          <input
            type="text"
            placeholder="Search articles, topics, authors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow px-4 py-3 border border-slate-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button 
            type="submit" 
            className="bg-red-600 text-white px-6 py-3 rounded-r-md hover:bg-red-700 transition-colors flex items-center"
          >
            <Search size={20} className="mr-2" />
            Search
          </button>
        </form>
      </div>
      
      {/* Search results */}
      <div>
        {searchQuery ? (
          <h2 className="text-2xl font-serif font-bold mb-6">
            {searchResults.length === 0 
              ? 'No results found for ' 
              : `Search results for `}
            <span className="text-red-600">"{searchQuery}"</span>
            {searchResults.length > 0 && ` (${searchResults.length} results)`}
          </h2>
        ) : (
          <h2 className="text-2xl font-serif font-bold mb-6">Search our articles</h2>
        )}
        
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : searchQuery && (
          <div className="text-center py-8 border border-slate-200 rounded-lg bg-slate-50">
            <p className="text-xl text-slate-600 mb-4">No articles found matching your search.</p>
            <p className="text-slate-500">Try using different keywords or browsing our categories.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;