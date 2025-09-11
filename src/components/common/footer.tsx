"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, Instagram, Facebook } from 'lucide-react'
import { profile } from '@/data/portfolio-data'

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
  email: Mail,
}

// Custom icon component for TryHackMe with light/dark mode support
const TryHackMeIcon = ({ className }: { className?: string }) => (
  <>
    <Image
      src="/assets/icon/Tryhackme-Icons.svg"
      alt="TryHackMe"
      width={24}
      height={24}
      className={`${className} block dark:hidden`}
    />
    <Image
      src="/assets/icon/Tryhackme-Icons-white.svg"
      alt="TryHackMe"
      width={24}
      height={24}
      className={`${className} hidden dark:block`}
    />
  </>
)

const customIcons = {
  tryhackme: TryHackMeIcon,
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {profile.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm">
              {profile.title}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['About', 'Projects', 'Blogs', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Connect
            </h4>
            <div className="flex space-x-4">
              {profile.socialLinks.map((social, index) => {
                // Check if it's a custom icon first, then fallback to Lucide icons
                const CustomIcon = customIcons[social.icon as keyof typeof customIcons]
                const LucideIcon = socialIcons[social.icon as keyof typeof socialIcons]
                
                if (!CustomIcon && !LucideIcon) return null
                
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    {CustomIcon ? (
                      <CustomIcon className="h-6 w-6" />
                    ) : LucideIcon ? (
                      <LucideIcon className="h-6 w-6" />
                    ) : null}
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> using Next.js, TypeScript & Framer Motion
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
