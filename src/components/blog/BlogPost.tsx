import React from 'react';
import { Calendar, Clock, User, ArrowLeft, Facebook, Twitter, Linkedin } from 'lucide-react';
import { BlogPost as BlogPostType } from '../../types/blog';
import Breadcrumb from './Breadcrumb';
import BlogSidebar from './BlogSidebar';

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, onBack }) => {
  const shareUrl = `${window.location.origin}/blog/${post.slug}`;

  const handleShare = (platform: string) => {
    const text = `Check out this article: ${post.title}`;
    let url = '';

    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
    }

    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
  };

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: `/blog/${post.slug}` },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: post.featuredImage,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dinesh Digital SEO',
      logo: {
        '@type': 'ImageObject',
        url: `${window.location.origin}/DILOGO.png`,
      },
    },
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': shareUrl,
    },
  };

  React.useEffect(() => {
    document.title = post.metaTitle;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', post.metaDescription);
    }

    // Define OG and Twitter tags properly typed
    type MetaTag = { property?: string; name?: string; content: string };

    const ogTags: MetaTag[] = [
      { property: 'og:title', content: post.title },
      { property: 'og:description', content: post.metaDescription },
      { property: 'og:image', content: post.featuredImage },
      { property: 'og:url', content: shareUrl },
      { property: 'og:type', content: 'article' },
    ];

    const twitterTags: MetaTag[] = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: post.title },
      { name: 'twitter:description', content: post.metaDescription },
      { name: 'twitter:image', content: post.featuredImage },
    ];

    // Canonical tag
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', shareUrl);

    // Structured data script
    let structuredDataScript = document.querySelector('#structured-data') as HTMLScriptElement | null;
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.id = 'structured-data';
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

    // Append OG and Twitter tags safely
    [...ogTags, ...twitterTags].forEach((tag) => {
      const attr = tag.property ? 'property' : 'name';
      const value = tag.property ?? tag.name ?? '';
      let metaTag = document.querySelector(`meta[${attr}="${value}"]`) as HTMLMetaElement | null;
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute(attr, value);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', tag.content);
    });

    return () => {
      document.title = 'Dinesh Digital SEO - Expert SEO Services';
    };
  }, [post, shareUrl, structuredData]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <Breadcrumb items={breadcrumbItems} />

        <button
          onClick={onBack}
          className="flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Image Section */}
              <div className="relative h-64 md:h-80">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 ${post.category.color} text-white text-sm font-medium rounded-full`}
                  >
                    {post.category.name}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                {/* Meta info row */}
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readTime} min read
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {post.author.name}
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {post.title}
                </h1>

                {/* Author and Share Section */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                  <div className="flex items-center">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {post.author.name}
                      </div>
                      <div className="text-sm text-gray-600">{post.author.bio}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 mr-2">Share:</span>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleShare('facebook')}
                      className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="p-2 text-gray-400 hover:text-blue-700 transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Post content */}
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <BlogSidebar currentPost={post} />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
