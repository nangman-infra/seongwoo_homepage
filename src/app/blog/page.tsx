"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { fetchBlogPosts, BlogPost } from "@/lib/blog";

const categories = [
  "All",
  "AWS",
  "Docker",
  "Kubernetes",
  "Linux",
  "DevOps",
  "Projects",
  "Troubleshooting",
  "Tech",
];

function SkeletonCard() {
  return (
    <div
      className="ph-stripe"
      style={{ height: 260, border: "1px solid var(--line)" }}
    />
  );
}

function FeaturedCard({ post }: Readonly<{ post: BlogPost }>) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="blog-card"
      style={{
        border: "1px solid var(--line)",
        display: "flex",
        flexDirection: "column",
        color: "var(--ink)",
      }}
    >
      <div
        className="ph-stripe"
        style={{
          height: 180,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: 16,
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            background: "var(--ink)",
            color: "#ffffff",
            padding: "4px 10px",
            borderRadius: 980,
          }}
        >
          FEATURED
        </span>
      </div>
      <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12, color: "var(--muted)" }}>
          <span style={{ background: "var(--surface)", padding: "3px 9px", borderRadius: 980 }}>
            {post.category}
          </span>
          <span>{post.date}</span>
        </div>
        <div style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.35 }}>{post.title}</div>
        <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, flex: 1 }}>
          {post.excerpt}
        </div>
        <div style={{ fontSize: 12, color: "var(--muted)" }}>{post.readTime} min read</div>
      </div>
    </a>
  );
}

function PostRow({ post }: Readonly<{ post: BlogPost }>) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="blog-row"
      style={{
        display: "grid",
        gridTemplateColumns: "120px 1fr auto",
        gap: 24,
        alignItems: "center",
        padding: "22px 0",
        borderTop: "1px solid var(--line)",
        color: "var(--ink)",
      }}
    >
      <div style={{ fontSize: 12, color: "var(--muted)" }}>{post.date}</div>
      <div>
        <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>{post.title}</div>
        <div style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 12, color: "var(--muted)" }}>
          <span style={{ background: "var(--surface)", padding: "2px 9px", borderRadius: 980 }}>
            {post.category}
          </span>
          <span>{post.readTime} min read</span>
        </div>
      </div>
      <div style={{ fontSize: 13, color: "var(--accent)", fontWeight: 500 }}>읽기 &rsaquo;</div>
    </a>
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
        console.error("블로그 포스트를 불러오는데 실패했습니다:", err);
        setError("블로그 포스트를 불러오는데 실패했습니다.");
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
    <main style={{ background: "#ffffff", color: "var(--ink)" }}>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "22px 40px",
          borderBottom: "1px solid var(--line)",
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(8px)",
        }}
      >
        <Link
          href="/"
          className="link-muted"
          style={{ position: "absolute", left: 40, fontSize: 14 }}
        >
          &larr; 홈으로
        </Link>
        <div style={{ fontSize: 15, fontWeight: 600 }}>Tech Blog</div>
      </nav>

      <div style={{ textAlign: "center", padding: "100px 24px 72px", borderBottom: "1px solid var(--line)" }}>
        <div style={{ fontSize: 15, color: "var(--muted)", fontWeight: 500, marginBottom: 18 }}>
          Study log
        </div>
        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 56px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            margin: "0 auto",
            maxWidth: 760,
            whiteSpace: "pre-line",
          }}
        >
          배운 것을 남깁니다.
        </h1>
        <p style={{ fontSize: 17, color: "var(--muted)", marginTop: 20 }}>
          클라우드, 네트워크, 운영체제 등 CS 기초 지식을 학습하며 정리한 기록.
        </p>
      </div>

      <div style={{ padding: "80px 24px 0", maxWidth: 1120, margin: "0 auto" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 28px" }}>Featured Posts</h2>
        {error ? (
          <div style={{ textAlign: "center", padding: "64px 0", color: "#dc2626" }}>{error}</div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {isLoading
              ? [1, 2, 3].map((i) => <SkeletonCard key={i} />)
              : featuredPosts.map((post) => <FeaturedCard key={post.id} post={post} />)}
          </div>
        )}
      </div>

      <div style={{ padding: "56px 24px 0", maxWidth: 1120, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            borderTop: "1px solid var(--line)",
            paddingTop: 32,
          }}
        >
          {categories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                style={{
                  fontSize: 13,
                  padding: "7px 16px",
                  borderRadius: 980,
                  background: isActive ? "var(--ink)" : "var(--surface)",
                  color: isActive ? "#ffffff" : "var(--ink)",
                  fontWeight: 500,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ padding: "48px 24px 100px", maxWidth: 1120, margin: "0 auto" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 28px" }}>Recent Posts</h2>
        {isLoading ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[1, 2, 3, 4].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : error ? (
          <div style={{ textAlign: "center", padding: "64px 0", color: "#dc2626" }}>{error}</div>
        ) : filteredPosts.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {filteredPosts.map((post) => (
              <PostRow key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "64px 0", color: "var(--muted)" }}>
            해당 카테고리의 포스트가 없습니다.
          </div>
        )}
      </div>
    </main>
  );
}
