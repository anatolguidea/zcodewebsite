"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { Heading, Typography } from "@/components/common";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Link from "next/link";

export function CTASection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="glass-dark rounded-2xl p-8 md:p-12 text-center"
        >
          <Heading as="h2" className="mb-4">
            If you can dream it, we can make it.
          </Heading>
          <Typography variant="lead" className="mb-8 max-w-2xl mx-auto">
            We believe in thinking big and starting small. Let's discuss your
            project and bring your vision to life.
          </Typography>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Let's Discuss
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="ghost" size="lg">
                View Our Work
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

