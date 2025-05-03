import React from 'react';
import ArticleCard from '../components/ArticleCard';
import NewsletterSignup from '../components/NewsletterSignup';
import { sampleArticles } from '../data/sampleData';

const HomePage: React.FC = () => {
  // Filter articles by category for different sections
  const featuredArticle = sampleArticles[0];
  const politicsArticles = sampleArticles.filter(article => article.category === 'Politics').slice(0, 3);
  const businessArticles = sampleArticles.filter(article => article.category === 'Business').slice(0, 3);
  const technologyArticles = sampleArticles.filter(article => article.category === 'Technology').slice(0, 3);
  
  return (
    <div className="space-y-12">
      {/* Hero section with featured article */}
      <section>
        <ArticleCard article={featuredArticle} featured />
      </section>

      {/* Latest news section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold border-b-2 border-red-600 pb-1">Latest News</h2>
          <a href="/category/latest" className="text-red-600 hover:text-red-800 transition-colors">View All</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleArticles.slice(1, 7).map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="py-8">
        <NewsletterSignup />
      </section>

      {/* Politics section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-serif font-bold border-b-2 border-red-600 pb-1">Politics</h2>
          <a href="/category/politics" className="text-red-600 hover:text-red-800 transition-colors">More Politics</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {politicsArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Business section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-serif font-bold border-b-2 border-red-600 pb-1">Business</h2>
          <a href="/category/business" className="text-red-600 hover:text-red-800 transition-colors">More Business</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {businessArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Technology section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-serif font-bold border-b-2 border-red-600 pb-1">Technology</h2>
          <a href="/category/technology" className="text-red-600 hover:text-red-800 transition-colors">More Technology</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technologyArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Trending / Most Read */}
      <section className="bg-slate-100 -mx-4 px-4 py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Trending Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleArticles.slice(0, 4).map(article => (
              <ArticleCard key={article.id} article={article} compact />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;