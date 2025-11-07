"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Card, Button, Badge, SectionTitle } from "@/components/ui";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = ["All", "Web Development", "Design", "Business", "Tutorials"];

const articles = [
  {
    id: 1,
    title: "Getting Started with JAMstack",
    excerpt:
      "Learn the fundamentals of JAMstack architecture and how it can transform your web development workflow.",
    category: "Web Development",
    author: "John Doe",
    date: "2024-01-15",
    readTime: "5 min read",
    featured: true,
    tags: ["JAMstack", "Web Development", "Tutorial"],
  },
  {
    id: 2,
    title: "Design Systems: A Complete Guide",
    excerpt:
      "Discover how to build and maintain a comprehensive design system for your products.",
    category: "Design",
    author: "Jane Smith",
    date: "2024-01-10",
    readTime: "8 min read",
    featured: true,
    tags: ["Design", "UI/UX", "Systems"],
  },
  {
    id: 3,
    title: "Building Fast E-Commerce Sites",
    excerpt:
      "Explore strategies for creating lightning-fast e-commerce experiences that convert.",
    category: "Web Development",
    author: "Mike Johnson",
    date: "2024-01-05",
    readTime: "6 min read",
    featured: false,
    tags: ["E-Commerce", "Performance", "Next.js"],
  },
  {
    id: 4,
    title: "The Future of Web Design",
    excerpt:
      "A look into emerging trends and technologies shaping the future of web design.",
    category: "Design",
    author: "Sarah Williams",
    date: "2023-12-28",
    readTime: "7 min read",
    featured: false,
    tags: ["Design", "Trends", "Future"],
  },
  {
    id: 5,
    title: "Business Growth Through Digital Strategy",
    excerpt:
      "How to leverage digital solutions to drive business growth and customer engagement.",
    category: "Business",
    author: "John Doe",
    date: "2023-12-20",
    readTime: "10 min read",
    featured: false,
    tags: ["Business", "Strategy", "Growth"],
  },
  {
    id: 6,
    title: "React Performance Optimization",
    excerpt:
      "Advanced techniques for optimizing React applications for better performance.",
    category: "Tutorials",
    author: "Mike Johnson",
    date: "2023-12-15",
    readTime: "12 min read",
    featured: false,
    tags: ["React", "Performance", "Tutorial"],
  },
];

export function BlogPageContent() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  const featuredArticles = articles.filter((a) => a.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span style={{ color: "#557170" }}>Blog</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Insights, tutorials, and resources to help you stay ahead in the
              digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section ref={ref} className="py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6 }}
            >
              <SectionTitle align="center" subtitle="Must Read">
                Featured Articles
              </SectionTitle>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card variant="glass" hover className="h-full">
                    <div className="relative h-48 bg-gradient-to-br from-primary-500/10 to-primary-700/10 rounded-lg mb-4" />
                    <Badge variant="primary" className="mb-2">
                      {article.category}
                    </Badge>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {article.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(article.date).toLocaleDateString()}
                        </span>
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="w-full mt-4">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filters */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredArticles
                .filter((a) => !a.featured)
                .map((article, index) => (
                  <motion.div
                    key={article.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card variant="glass" hover className="h-full">
                      <div className="relative h-40 bg-gradient-to-br from-primary-500/10 to-primary-700/10 rounded-lg mb-4" />
                      <Badge variant="primary" className="mb-2">
                        {article.category}
                      </Badge>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <span>{article.readTime}</span>
                        <span>
                          {new Date(article.date).toLocaleDateString()}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="w-full">
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Card>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

