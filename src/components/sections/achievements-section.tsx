"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award, Code, Trophy, Presentation, Calendar, ExternalLink, Shield, ChartNetwork } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { achievements, certifications } from '@/data/portfolio-data'
import SpotlightCard from '@/components/ui/spotlight-card'

const iconMap = {
  award: Award,
  code: Code,
  trophy: Trophy,
  presentation: Presentation,
  entrepreneurship: ChartNetwork,
}

const categoryColors = {
  'Certification': 'bg-blue-500',
  'Speaking': 'bg-green-500',
  'Open Source': 'bg-purple-500',
  'Competition': 'bg-yellow-500',
  'Leadership': 'bg-red-500',
  'Education': 'bg-indigo-500',
  'Professional': 'bg-teal-500',
  'Entrepreneurship': 'bg-orange-500',
}

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Achievements & Milestones
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Key accomplishments and recognitions that have shaped my professional journey.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {achievements.map((achievement, index) => {
              const IconComponent = iconMap[achievement.icon as keyof typeof iconMap] || Award
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:flex-row`}
                >
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <SpotlightCard 
                        className="bg-white dark:bg-gray-800 p-6 border-l-4 border-l-purple-600 shadow-lg hover:shadow-2xl transition-all duration-300"
                        spotlightColor="rgba(168, 85, 247, 0.15)"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <motion.div 
                              className={`w-12 h-12 ${categoryColors[achievement.category as keyof typeof categoryColors] || 'bg-gray-500'} rounded-xl flex items-center justify-center shadow-md`}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <IconComponent className="w-6 h-6 text-white" />
                            </motion.div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                {achievement.title}
                              </h3>
                              <div className="flex items-center space-x-2 mt-1">
                                <Calendar className="w-4 h-4 text-purple-500" />
                                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                  {achievement.date}
                                </span>
                              </div>
                            </div>
                          </div>
                          <Badge 
                            className="whitespace-nowrap bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800"
                          >
                            {achievement.category}
                          </Badge>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {achievement.description}
                        </p>
                      </SpotlightCard>
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white dark:bg-gray-900 border-4 border-purple-600 rounded-full z-10 hidden lg:block">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                      className="w-full h-full bg-purple-600 rounded-full"
                    ></motion.div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="w-full lg:w-5/12 hidden lg:block"></div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications & Badges
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional certifications that validate my expertise across various technologies and domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <SpotlightCard 
                  className="h-full bg-white dark:bg-gray-800 p-6 border-l-4 border-l-blue-600 shadow-lg hover:shadow-2xl transition-all duration-300"
                  spotlightColor="rgba(59, 130, 246, 0.15)"
                >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-700 rounded-lg shadow-md border dark:border-gray-600 overflow-hidden">
                          {cert.badge ? (
                            <Image 
                              src={cert.badge} 
                              alt={`${cert.title} Badge`}
                              width={48}
                              height={48}
                              className="object-contain rounded"
                              unoptimized
                            />
                          ) : (
                            <Shield className="w-8 h-8 text-blue-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                            {cert.title}
                          </h4>
                          <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>Issued: {cert.date}</span>
                        </div>
                        {cert.expiryDate && (
                          <div className="flex items-center space-x-1">
                            <span>Expires: {cert.expiryDate}</span>
                          </div>
                        )}
                      </div>
                      {cert.credentialId && (
                        <p className="text-xs text-gray-400 dark:text-gray-500 font-mono">
                          ID: {cert.credentialId}
                        </p>
                      )}
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                      {cert.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {cert.skills.slice(0, 4).map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="text-xs bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {cert.skills.length > 4 && (
                        <Badge 
                          variant="secondary" 
                          className="text-xs bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300"
                        >
                          +{cert.skills.length - 4} more
                        </Badge>
                      )}
                    </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve Something Great Together?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              These achievements represent my commitment to excellence and continuous growth. 
              Let's create something amazing together!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
