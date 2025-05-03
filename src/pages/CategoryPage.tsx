import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import { sampleArticles } from '../data/sampleData';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  
  // Convert category parameter to proper case for display and filtering
  const formattedCategory = category ? 
    category.charAt(0).toUpperCase() + category.slice(1) : '';
  
  // Filter articles by category
  const filteredArticles = sampleArticles.filter(
    article => article.category.toLowerCase() === category?.toLowerCase()
  );
  
  // Featured article is the first in the filtered list
  const featuredArticle = filteredArticles[0];
  
  // Remaining articles
  const remainingArticles = filteredArticles.slice(1);

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="text-sm text-slate-500 mb-6">
        <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">{formattedCategory}</span>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8 pb-4 border-b border-slate-200">
        {formattedCategory} News
      </h1>
      
      {filteredArticles.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-slate-600">No articles found in this category.</p>
        </div>
      ) : (
        <>
          {/* Featured article */}
          {featuredArticle && (
            <section className="mb-12">
              <ArticleCard article={featuredArticle} featured />
            </section>
          )}
          
          {/* Article grid */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {remainingArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default CategoryPage;