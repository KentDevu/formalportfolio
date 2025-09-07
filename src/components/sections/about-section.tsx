"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Code, Coffee, Heart, Lightbulb, Rocket, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", 
  "Docker", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs", "Git", "Cybersecurity", "AI"
]

const interests = [
  { icon: Code, title: "Clean Code", description: "Writing maintainable and scalable code" },
  { icon: Lightbulb, title: "Innovation", description: "Exploring cutting-edge technologies" },
  { icon: Users, title: "Collaboration", description: "Working with diverse, talented teams" },
  { icon: Rocket, title: "Performance", description: "Building fast, efficient applications" },
  { icon: Coffee, title: "Learning", description: "Continuous growth and improvement" },
  { icon: Heart, title: "CyberSecurity Focus", description: "Cybersecurity is my passion" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm passionate about creating digital experiences that make a difference. 
            Let me tell you a bit more about my journey and what drives me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                With over 5 years of experience in web development, I've had the privilege of working 
                on diverse projects ranging from e-commerce platforms to AI-powered applications. 
                My journey began with a curiosity about how websites work, and it has evolved into 
                a passion for building scalable, user-centric solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I believe in the power of technology to solve real-world problems and improve lives. 
                Whether it's optimizing performance, enhancing user experience, or integrating cutting-edge 
                AI capabilities, I'm always looking for ways to push the boundaries of what's possible.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects, writing 
                technical articles, or exploring new technologies. I'm also passionate about mentoring 
                junior developers and sharing knowledge with the community.
              </p>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded"></div>
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                AI Assistant Available →
              </span>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Badge 
                    variant="secondary" 
                    className="px-4 py-2 text-sm hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                💡 Fun Fact
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                I've written over 50,000 lines of code this year and contributed to 
                15+ open-source projects. I also love experimenting with AI and have 
                built several machine learning models for personal projects!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Interests Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            What I'm Passionate About
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                        <interest.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {interest.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {interest.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Assistant CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 p-8 rounded-2xl border border-purple-200 dark:border-purple-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Want to Know More?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I've integrated an AI assistant that can answer questions about my background, 
              skills, experience, and projects. Try asking it something!
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-purple-600 dark:text-purple-400">
              <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
              <span>Look for the chat icon in the bottom right</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
