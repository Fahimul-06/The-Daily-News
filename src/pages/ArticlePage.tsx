import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Bookmark, Share2, Printer, Clock } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import NewsletterSignup from '../components/NewsletterSignup';
import { sampleArticles } from '../data/sampleData';

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the article with the matching ID
  const article = sampleArticles.find(article => article.id.toString() === id);
  
  // Related articles (in reality, these would be articles with similar tags/categories)
  const relatedArticles = sampleArticles
    .filter(a => a.category === article?.category && a.id !== article?.id)
    .slice(0, 3);

  useEffect(() => {
    // Scroll to top when article page loads
    window.scrollTo(0, 0);
    
    // Update document title
    if (article) {
      document.title = `${article.title} | The Daily News`;
    }
    
    return () => {
      document.title = 'The Daily News';
    };
  }, [article, id]);

  if (!article) {
    return <div className="container mx-auto py-12 text-center">Article not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumbs */}
      <div className="text-sm text-slate-500 mb-6">
        <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link to={`/category/${article.category.toLowerCase()}`} className="hover:text-red-600 transition-colors">{article.category}</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">{article.title}</span>
      </div>
      
      {/* Article header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-4">
          {article.title}
        </h1>
        <p className="text-xl text-slate-600 mb-6">{article.excerpt}</p>
        
        <div className="flex items-center justify-between border-t border-b border-slate-200 py-4 text-sm">
          <div className="flex items-center">
            <img 
              src={article.author.avatar} 
              alt={article.author.name}
              className="w-10 h-10 rounded-full mr-3 object-cover"
            />
            <div>
              <div className="font-medium">By {article.author.name}</div>
              <div className="text-slate-500 flex items-center">
                <Clock size={14} className="mr-1" />
                <span>{article.date} • {article.readTime} min read</span>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <button className="p-2 rounded-full hover:bg-slate-100 transition-colors">
              <Facebook size={18} className="text-blue-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-slate-100 transition-colors">
              <Twitter size={18} className="text-blue-400" />
            </button>
            <button className="p-2 rounded-full hover:bg-slate-100 transition-colors">
              <Linkedin size={18} className="text-blue-700" />
            </button>
            <button className="p-2 rounded-full hover:bg-slate-100 transition-colors">
              <Mail size={18} className="text-slate-600" />
            </button>
          </div>
        </div>
      </header>
      
      {/* Featured image */}
      <figure className="mb-8">
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="w-full h-auto rounded-lg object-cover"
        />
        <figcaption className="text-sm text-slate-500 mt-2 italic">
          {article.imageCaption}
        </figcaption>
      </figure>
      
      {/* Article content */}
      <div className="article-content prose prose-lg max-w-none mb-12">
        <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-1 first-letter:float-left">
          {article.content.split('\n\n')[0]}
        </p>
        
        {article.content.split('\n\n').slice(1).map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      
      {/* Tags */}
      <div className="mb-12">
        <h3 className="text-lg font-bold mb-3">Related Topics</h3>
        <div className="flex flex-wrap gap-2">
          {article.tags.map(tag => (
            <Link 
              key={tag} 
              to={`/tag/${tag}`} 
              className="inline-block px-3 py-1 bg-slate-100 hover:bg-slate-200 transition-colors rounded-md text-sm"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
      
      {/* Newsletter signup */}
      <div className="mb-12">
        <NewsletterSignup />
      </div>
      
      {/* Related articles */}
      <div className="mb-12">
        <h2 className="text-2xl font-serif font-bold mb-6">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;