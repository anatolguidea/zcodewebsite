"use client";

import { motion } from "framer-motion";
import { Users, Target, Eye, Heart, Award, TrendingUp } from "lucide-react";
import { Card, SectionTitle } from "@/components/ui";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const team = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    avatar: "JD",
  },
  {
    name: "Jane Smith",
    role: "Lead Designer",
    avatar: "JS",
  },
  {
    name: "Mike Johnson",
    role: "Senior Developer",
    avatar: "MJ",
  },
  {
    name: "Sarah Williams",
    role: "Project Manager",
    avatar: "SW",
  },
];

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We're passionate about creating exceptional digital experiences.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every project we undertake.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and collaboration.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We constantly innovate to stay ahead of the curve.",
  },
];

const timeline = [
  {
    year: "2024",
    title: "Expansion",
    description: "Expanded our team and opened new offices.",
  },
  {
    year: "2023",
    title: "Growth",
    description: "Reached 100+ successful projects milestone.",
  },
  {
    year: "2022",
    title: "Recognition",
    description: "Won Best Digital Agency Award.",
  },
  {
    year: "2021",
    title: "Foundation",
    description: "Company founded with a vision to transform digital experiences.",
  },
];

export function AboutPageContent() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

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
              About <span style={{ color: "#557170" }}>Us</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We're a team of passionate designers and developers dedicated to
              creating exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={ref} className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
            >
              <Card variant="glass" className="h-full">
                <div className="p-4 rounded-lg bg-primary-500/20 w-fit mb-4">
                  <Target className="w-8 h-8 text-primary-500" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-gray-400">
                  To empower businesses with cutting-edge digital solutions that
                  drive growth, enhance user experiences, and create lasting
                  value. We believe in the power of technology to transform
                  ideas into reality.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card variant="glass" className="h-full">
                <div className="p-4 rounded-lg bg-primary-500/20 w-fit mb-4">
                  <Eye className="w-8 h-8 text-primary-500" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-gray-400">
                  To be the leading digital agency recognized for innovation,
                  excellence, and transformative solutions. We envision a future
                  where every business has access to world-class digital
                  experiences.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle align="center" subtitle="What We Stand For">
              Our Values
            </SectionTitle>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card variant="glass" hover className="h-full text-center">
                    <div className="p-4 rounded-lg bg-primary-500/20 w-fit mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-400">{value.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle align="center" subtitle="Meet the Team">
              Our Team
            </SectionTitle>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="glass" hover className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 font-bold text-xl mx-auto mb-4">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-400">{member.role}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle align="center" subtitle="Our Journey">
              Company Timeline
            </SectionTitle>
          </motion.div>

          <div className="mt-12 space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 font-bold">
                    {item.year.slice(-2)}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-800 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

