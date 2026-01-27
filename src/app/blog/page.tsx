"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Clock, Cloud, Terminal, ChevronDown } from "lucide-react";
import { fetchBlogPosts, BlogPost } from "@/lib/blog";

const categories = ["All", "AWS", "Docker", "Kubernetes", "Linux", "DevOps", "Projects", "Troubleshooting", "Tech"];

function SkeletonCard() {
  return (
    <div className="bg-gray-100 rounded-2xl overflow-hidden animate-pulse">
      <div className="h-44 bg-gray-200" />
      <div className="p-5 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-1/4" />
        <div className="h-5 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-1/3" />
      </div>
    </div>
  );
}

function FallbackThumbnail({ category }: { category: string }) {
  const gradients: Record<string, string> = {
    AWS: "from-orange-500 to-amber-600",
    Docker: "from-blue-500 to-sky-600",
    Troubleshooting: "from-rose-500 to-pink-600",
    Linux: "from-emerald-500 to-teal-600",
    Projects: "from-violet-500 to-purple-600",
  };

  return (
    <div 
      className={`bg-gradient-to-br ${gradients[category] || "from-gray-600 to-gray-700"} flex items-center justify-center relative overflow-hidden`}
      style={{ height: '100%', minHeight: '150px' }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white rounded-lg rotate-12" />
        <div className="absolute bottom-6 right-6 w-12 h-12 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 border-2 border-white rounded-lg -translate-x-1/2 -translate-y-1/2 rotate-45" />
      </div>
      {category === "AWS" || category === "Docker" ? (
        <Cloud size={48} className="text-white/30" />
      ) : (
        <Terminal size={48} className="text-white/30" />
      )}
    </div>
  );
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg block"
    >
      <div style={{ height: '140px', overflow: 'hidden' }}>
        <FallbackThumbnail category={post.category} />
      </div>
      <div style={{ padding: '20px' }}>
        <div className="flex items-center justify-between" style={{ marginBottom: '10px' }}>
          <span className="bg-gray-200 text-gray-700 rounded-md font-medium" style={{ padding: '4px 10px', fontSize: '12px' }}>
            {post.category}
          </span>
          <span className="text-gray-500" style={{ fontSize: '12px' }}>{post.date}</span>
        </div>
        <h3 className="font-semibold text-black group-hover:text-blue-600 transition-colors line-clamp-2 flex items-start gap-1.5" style={{ fontSize: '15px', marginBottom: '10px' }}>
          <span className="flex-1">{post.title}</span>
          <ExternalLink size={14} className="flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
        </h3>
        <p className="text-gray-600 leading-relaxed line-clamp-2" style={{ fontSize: '13px', marginBottom: '12px' }}>
          {post.excerpt}
        </p>
        <div className="flex items-center gap-1.5 text-gray-500" style={{ fontSize: '12px' }}>
          <Clock size={12} />
          <span>{post.readTime} min read</span>
        </div>
      </div>
    </motion.a>
  );
}

function FeaturedCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg block"
    >
      <div className="relative" style={{ height: '150px' }}>
        <FallbackThumbnail category={post.category} />
        <div className="absolute top-4 left-4">
          <span style={{ padding: '6px 12px', fontSize: '13px' }} className="bg-amber-400 text-gray-900 rounded-md font-bold">
            Featured
          </span>
        </div>
      </div>
      <div style={{ padding: '24px' }}>
        <div className="flex items-center gap-2" style={{ marginBottom: '12px' }}>
          <span style={{ padding: '6px 12px', fontSize: '13px' }} className="bg-gray-200 text-gray-700 rounded-md font-medium">
            {post.category}
          </span>
          <span className="text-gray-500" style={{ fontSize: '13px' }}>{post.date}</span>
        </div>
        <h3 style={{ fontSize: '18px', marginBottom: '12px' }} className="font-semibold text-black group-hover:text-blue-600 transition-colors line-clamp-2 flex items-start gap-1.5">
          <span className="flex-1">{post.title}</span>
          <ExternalLink size={16} className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
        </h3>
        <p className="text-gray-600 leading-relaxed line-clamp-2" style={{ fontSize: '14px', marginBottom: '16px' }}>
          {post.excerpt}
        </p>
        <div className="flex items-center gap-1.5 text-gray-500" style={{ fontSize: '13px' }}>
          <Clock size={14} />
          <span>{post.readTime} min read</span>
        </div>
      </div>
    </motion.a>
  );
}

export default function BlogPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        setIsLoading(true);
        const blogPosts = await fetchBlogPosts();
        setPosts(blogPosts);
        setError(null);
      } catch (err) {
        console.error('블로그 포스트를 불러오는데 실패했습니다:', err);
        setError('블로그 포스트를 불러오는데 실패했습니다.');
      } finally {
        setIsLoading(false);
      }
    }

    loadPosts();
  }, []);

  const featuredPosts = posts.filter((p) => p.featured);
  const filteredPosts = posts.filter((p) => {
    if (activeFilter === "All") return !p.featured;
    return p.category === activeFilter && !p.featured;
  });

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200"
        style={{ width: '100%' }}
      >
        <div 
          className="flex items-center justify-between"
          style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px' }}
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors font-medium"
            style={{ fontSize: '16px' }}
          >
            <ArrowLeft size={20} />
            홈으로
          </Link>
          <span className="text-black font-bold" style={{ fontSize: '20px' }}>Tech Blog</span>
          <div style={{ width: '80px' }} />
        </div>
      </nav>

      {/* Content Container */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Hero */}
        <header style={{ paddingTop: '100px', paddingBottom: '40px', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block">
              <h1 className="text-4xl md:text-5xl font-black text-black tracking-tight" style={{ marginBottom: '8px' }}>
                Tech Blog
              </h1>
              <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
            </div>
            <p className="text-gray-600 text-lg" style={{ marginTop: '16px' }}>
              클라우드, DevOps, 인프라 관련 기술 학습 기록
            </p>
          </motion.div>
        </header>

        {/* Featured Section */}
        <section style={{ paddingBottom: '48px' }}>
          <h2 className="text-xl font-bold text-black mb-5">Featured Posts</h2>
          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-5">
              {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
            </div>
          ) : error ? (
            <div className="text-center py-16 text-red-500">
              {error}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-5">
              {featuredPosts.map((post, index) => (
                <FeaturedCard key={post.id} post={post} index={index} />
              ))}
            </div>
          )}
        </section>

        {/* Filter Tabs */}
        <section style={{ paddingBottom: '24px' }}>
          <div className="flex items-center gap-3">
            {categories.map((category, idx) => (
              <div key={category} className="flex items-center gap-3">
                <button
                  onClick={() => setActiveFilter(category)}
                  className={`text-base font-medium transition-all duration-200 hover:text-blue-400 ${
                    activeFilter === category
                      ? "text-blue-400"
                      : "text-gray-400"
                  }`}
                >
                  {category}
                </button>
                {idx < categories.length - 1 && (
                  <span className="text-gray-600">|</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Recent Posts Grid */}
        <section style={{ paddingBottom: '80px' }}>
          <h2 className="text-xl font-bold text-black mb-5">Recent Posts</h2>
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[1, 2, 3, 4, 5, 6].map((i) => <SkeletonCard key={i} />)}
            </div>
          ) : error ? (
            <div className="text-center py-16 text-red-500">
              {error}
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-500">
              해당 카테고리의 포스트가 없습니다.
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
