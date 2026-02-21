"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, ArrowRight, Lock, CheckCircle, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/data/portfolio-data'
import SpotlightCard from '@/components/ui/spotlight-card'

export function ProjectsSection() {
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  const isHosted = (url: string) => url && url !== '#'

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From security automation platforms to AI-powered applications — real products 
            that solve real problems with measurable impact.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <SpotlightCard 
                className="overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col"
                spotlightColor="rgba(168, 85, 247, 0.2)"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-64 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                     <Image 
                       src={project.image} 
                       alt={project.title} 
                       fill
                       className="object-cover"
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     />
                  </motion.div>
                  
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center space-x-4"
                  >
                    {isHosted(project.liveUrl) ? (
                      <Button
                        size="sm"
                        className="bg-white text-black hover:bg-gray-100"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    ) : (
                      <Badge className="bg-gray-800/80 text-gray-300 border-gray-600 px-3 py-1.5">
                        <Lock className="w-3 h-3 mr-1.5" />
                        Private / Not Hosted
                      </Badge>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        className="bg-white text-black border-white hover:bg-gray-100"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                  </motion.div>

                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                  {/* Hosted status badge */}
                  <div className="absolute top-4 right-4">
                    {isHosted(project.liveUrl) ? (
                      <Badge className="bg-green-600/90 text-white text-xs">
                        <div className="w-1.5 h-1.5 bg-green-300 rounded-full mr-1.5 animate-pulse" />
                        Live
                      </Badge>
                    ) : (
                      <Badge className="bg-gray-700/80 text-gray-300 text-xs">
                        <Lock className="w-3 h-3 mr-1" />
                        Private
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key features */}
                  {project.features && project.features.length > 0 && (
                    <div className="mb-4 space-y-1.5">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <CheckCircle className="w-3.5 h-3.5 mt-0.5 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Outcome highlight */}
                  {project.outcome && (
                    <div className="mb-4 px-3 py-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="flex items-center gap-2 text-sm font-medium text-green-700 dark:text-green-400">
                        <Trophy className="w-3.5 h-3.5" />
                        {project.outcome}
                      </div>
                    </div>
                  )}
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Badge variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between mt-auto">
                    {isHosted(project.liveUrl) ? (
                      <Button
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        className="group/button bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                      >
                        View Live Demo
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform" />
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        className="cursor-default opacity-70"
                        disabled
                      >
                        <Lock className="w-4 h-4 mr-2" />
                        Not Hosted
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-5 h-5" />
                      </Button>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Other Notable Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <SpotlightCard 
                    className="h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 transition-all duration-300 cursor-pointer"
                    spotlightColor="rgba(168, 85, 247, 0.12)"
                  >
                    <div onClick={() => isHosted(project.liveUrl) ? window.open(project.liveUrl, '_blank') : project.githubUrl && window.open(project.githubUrl, '_blank')}>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h4>
                        <div className="flex items-center gap-2">
                          {isHosted(project.liveUrl) ? (
                            <Badge className="bg-green-600/90 text-white text-xs px-2 py-0.5">
                              <div className="w-1.5 h-1.5 bg-green-300 rounded-full mr-1 animate-pulse" />
                              Live
                            </Badge>
                          ) : (
                            <Badge variant="secondary" className="text-xs px-2 py-0.5">
                              <Lock className="w-3 h-3 mr-1" />
                              Private
                            </Badge>
                          )}
                          {isHosted(project.liveUrl) ? (
                            <ExternalLink className="w-4 h-4 text-gray-400" />
                          ) : project.githubUrl ? (
                            <Github className="w-4 h-4 text-gray-400" />
                          ) : null}
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Outcome for other projects */}
                      {project.outcome && (
                        <div className="mb-3 text-xs font-medium text-green-600 dark:text-green-400 flex items-center gap-1.5">
                          <Trophy className="w-3 h-3" />
                          {project.outcome}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs font-medium">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs font-medium bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <Github className="w-12 h-12 text-gray-600 dark:text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              More Projects on GitHub
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I have many more projects and contributions on GitHub, including open-source 
              contributions, experimental projects, and collaborative work.
            </p>
             <Button
               onClick={() => window.open('https://github.com/kentdevu', '_blank')}
               className="bg-gray-900 hover:bg-gray-800 text-white"
             >
              <Github className="w-4 h-4 mr-2" />
              View GitHub Profile
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
