"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Code, Lightbulb, Rocket, Users, Shield, Brain, Webhook } from 'lucide-react'
import LogoLoop from '@/components/ui/logo-loop'
import SpotlightCard from '@/components/ui/spotlight-card'
import CountUp from '@/components/ui/count-up'
import RotatingText from '@/components/ui/rotating-text'
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPython, SiAmazon, SiDocker, SiPostgresql, SiMongodb, SiDjango, SiGit, SiMysql, SiAngular, SiSvelte, SiTailwindcss } from 'react-icons/si'

const techLogos = [
  { node: <SiReact className="text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-black dark:text-white" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiNodedotjs className="text-[#339933]" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPython className="text-[#3776AB]" />, title: "Python", href: "https://www.python.org" },
  { node: <SiDjango className="text-[#092E20]" />, title: "Django", href: "https://www.djangoproject.com" },
  { node: <SiAmazon className="text-[#FF9900]" />, title: "AWS", href: "https://aws.amazon.com" },
  { node: <SiDocker className="text-[#2496ED]" />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiPostgresql className="text-[#4169E1]" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMysql className="text-[#4479A1]" />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiMongodb className="text-[#47A248]" />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiAngular className="text-[#DD0031]" />, title: "Angular", href: "https://angular.io" },
  { node: <SiSvelte className="text-[#FF3E00]" />, title: "Svelte", href: "https://svelte.dev" },
  { node: <Webhook className="text-purple-600 dark:text-purple-400 w-12 h-12" />, title: "REST APIs", href: "https://restfulapi.net" },
  { node: <SiGit className="text-[#F05032]" />, title: "Git", href: "https://git-scm.com" },
  { node: <Shield className="text-blue-600 dark:text-blue-400 w-12 h-12" />, title: "Cybersecurity", href: "https://tryhackme.com" },
  { node: <Brain className="text-pink-600 dark:text-pink-400 w-12 h-12" />, title: "AI / ML", href: "https://ai.google" },
]

const passions = [
  "Security Automation",
  "Threat Intelligence",
  "AI-Powered Solutions",
  "Scalable Architecture"
]

const interests = [
  { icon: Shield, title: "Security First", description: "Building with secure coding practices and threat-aware architecture" },
  { icon: Brain, title: "AI Automation", description: "Leveraging AI to automate threat detection and decision-making" },
  { icon: Rocket, title: "Ship Fast", description: "CI/CD pipelines, 20% faster deploys, 99.9% uptime" },
  { icon: Code, title: "Full Stack", description: "End-to-end: React, Next.js, Django, Express, PostgreSQL" },
  { icon: Users, title: "Tech Leadership", description: "Leading engineering teams and mentoring developers" },
  { icon: Lightbulb, title: "Hackathon Builder", description: "Base PH Winner, AWS Innovation Cup, GDG Conference" },
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
                I'm a <span className="font-semibold text-purple-600 dark:text-purple-400">Tech Lead at Catalyx Solutions</span> and <span className="font-semibold text-purple-600 dark:text-purple-400">Software Engineer at Lujo PH</span>, 
                where I architect security automation platforms, build scalable APIs, and manage cloud infrastructure 
                ensuring 99.9% uptime. My work at Catalyx improved phishing detection efficiency by 70% and cut manual threat triage by 10 hours per week.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                From building <span className="font-semibold">nationwide inventory management systems</span> to 
                <span className="font-semibold"> AI-powered threat intelligence platforms</span>, I thrive at the intersection of 
                full-stack engineering and cybersecurity. I've presented at the GDG First AI Regional Conference, 
                won the Base PH Hackathon, and maintain a <span className="font-semibold text-purple-600 dark:text-purple-400">Top 4% global ranking on TryHackMe</span>.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm an active AWS Cloud Club committee member, DataCamp Scholar, and contributor 
                to the cybersecurity community through technical blogs.
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
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span>I'm passionate about</span>
              <RotatingText
                texts={passions}
                mainClassName="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg inline-flex text-xl font-bold"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
              />
            </h3>
            
            <div className="mb-8 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4 uppercase tracking-wide">
                Technologies & Skills I Work With
              </h4>
              <div className="relative" style={{ height: '80px' }}>
                <LogoLoop
                  logos={techLogos}
                  speed={40}
                  direction="left"
                  logoHeight={48}
                  gap={56}
                  pauseOnHover
                  scaleOnHover
                  fadeOut
                  ariaLabel="Technology stack and skills"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                💡 By The Numbers
              </h4>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    <CountUp to={50000} separator="," duration={2.5} />+
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Lines of Code</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    <CountUp to={15} duration={2} />+
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    <CountUp to={3} duration={1.5} />+
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Years Exp</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                I love experimenting with AI technologies to create smarter applications that enhance user experiences.
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
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <SpotlightCard 
                  className="h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 text-center transition-all duration-300"
                  spotlightColor="rgba(147, 51, 234, 0.15)"
                >
                  <div className="mb-4 flex justify-center">
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <interest.icon className="w-7 h-7 text-white" />
                    </motion.div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {interest.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {interest.description}
                  </p>
                </SpotlightCard>
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
