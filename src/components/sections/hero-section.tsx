"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, MapPin, Mail } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { profile } from '@/data/portfolio-data'
import Aurora from '@/components/ui/aurora'
import RotatingText from '@/components/ui/rotating-text'

export function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const roles = [
    "Full Stack Developer",
    "Cybersecurity Enthusiast", 
    "AI Engineer",
    "Problem Solver",
    "Automation Expert",
    "Cloud Specialist"
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-16 w-60 h-60 md:w-80 md:h-80 md:-top-40 md:-right-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-20 -left-16 w-60 h-60 md:w-80 md:h-80 md:-bottom-40 md:-left-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-20 left-20 w-60 h-60 md:w-80 md:h-80 md:top-40 md:left-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/80 dark:from-gray-900/80 dark:via-gray-900/60 dark:to-gray-900/80 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <Avatar className="w-32 h-32 border-4 border-white dark:border-gray-700 shadow-xl">
              <AvatarImage src={profile.avatar} alt={profile.name} />
              <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                {profile.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight px-4">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent inline-block animate-gradient">
                {profile.name}
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-2">
              <span>A</span>
              <RotatingText
                texts={roles}
                mainClassName="px-4 py-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-xl inline-flex font-bold shadow-lg"
                staggerFrom="first"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.02}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 35, stiffness: 450 }}
                rotationInterval={2500}
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {profile.bio}
            </p>
          </motion.div>

          {/* Location and Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <MapPin className="w-4 h-4 mr-2" />
              {profile.location}
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Mail className="w-4 h-4 mr-2" />
              {profile.email}
            </Badge>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row justify-center gap-4 px-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToNext}
          className="animate-bounce hover:bg-transparent"
        >
          <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </Button>
      </motion.div>
    </section>
  )
}
