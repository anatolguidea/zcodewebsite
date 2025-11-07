"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { Card, Button, Badge, SectionTitle } from "@/components/ui";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = ["All", "Web", "Mobile", "eCommerce", "Design"];

const projects = [
  {
    id: 1,
    title: "Obie: Road to a Better And Faster Website",
    description:
      "Delivered 70% faster website, Improved UI and UX, Acquired by Lessonly",
    category: "Web",
    image: "/placeholder-project-1.jpg",
    link: "#",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2024",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Modern eCommerce solution with seamless checkout and inventory management",
    category: "eCommerce",
    image: "/placeholder-project-2.jpg",
    link: "#",
    tech: ["React", "Node.js", "MongoDB"],
    year: "2024",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description:
      "Secure and intuitive mobile banking application with biometric authentication",
    category: "Mobile",
    image: "/placeholder-project-3.jpg",
    link: "#",
    tech: ["React Native", "Firebase", "Stripe"],
    year: "2023",
  },
  {
    id: 4,
    title: "Design System",
    description:
      "Comprehensive design system for consistent brand experience across platforms",
    category: "Design",
    image: "/placeholder-project-4.jpg",
    link: "#",
    tech: ["Figma", "Storybook", "React"],
    year: "2023",
  },
  {
    id: 5,
    title: "SaaS Dashboard",
    description:
      "Analytics dashboard with real-time data visualization and reporting",
    category: "Web",
    image: "/placeholder-project-5.jpg",
    link: "#",
    tech: ["Vue.js", "D3.js", "PostgreSQL"],
    year: "2024",
  },
  {
    id: 6,
    title: "Marketplace Platform",
    description:
      "Multi-vendor marketplace connecting buyers and sellers globally",
    category: "eCommerce",
    image: "/placeholder-project-6.jpg",
    link: "#",
    tech: ["Next.js", "GraphQL", "AWS"],
    year: "2024",
  },
];

export function PortfolioPageContent() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

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
              Our <span style={{ color: "#557170" }}>Portfolio</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our collection of successful projects and see how we've
              helped businesses achieve their digital goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section ref={ref} className="py-8 px-4">
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

      {/* Projects Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card variant="glass" hover className="h-full overflow-hidden group cursor-pointer" onClick={() => setSelectedProject(project)}>
                    <div className="relative h-48 bg-gradient-to-br from-primary-500/10 to-primary-700/10">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-4xl font-bold text-primary-500/30">
                          {index + 1}
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <ExternalLink className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="primary">{project.category}</Badge>
                        <span className="text-xs text-gray-500">{project.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-dark rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <Badge variant="primary" className="mb-2">
                    {selectedProject.category}
                  </Badge>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-400">{selectedProject.description}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              <div className="relative h-64 bg-gradient-to-br from-primary-500/10 to-primary-700/10 rounded-lg mb-6" />
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <Badge key={tech} variant="default">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="primary">View Project</Button>
                  <Button variant="ghost">View Case Study</Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

