"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'
import SpotlightCard from '@/components/ui/spotlight-card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { mockBlogPosts } from '@/data/portfolio-data'
import { BlogViewer } from './blog-viewer'
import { BlogPost } from '@/types'

export function BlogsSection() {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const openBlogViewer = (post: BlogPost) => {
    setSelectedBlog(post)
    setIsViewerOpen(true)
  }

  const closeBlogViewer = () => {
    setIsViewerOpen(false)
    setTimeout(() => setSelectedBlog(null), 300) // Clear after animation
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section id="blogs" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Sharing insights, tutorials, and thoughts on web development, technology trends, 
            and software engineering best practices.
          </p>
        </motion.div>

        {/* Featured Blog Post */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
          onClick={() => mockBlogPosts.length > 0 && openBlogViewer(mockBlogPosts[0])}
        >
          {mockBlogPosts.length > 0 && (
            <SpotlightCard 
              className="overflow-hidden bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-500 group cursor-pointer"
              spotlightColor="rgba(59, 130, 246, 0.2)"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 lg:h-auto bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 overflow-hidden">
                  {/* Animated background elements */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 dark:bg-blue-600 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400 dark:bg-purple-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-pink-400 dark:bg-pink-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full flex items-center justify-center z-10"
                  >
                    <BookOpen className="w-20 h-20 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
                      ⭐ Featured Post
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent group-hover:from-blue-600/40 transition-all duration-300 flex items-center justify-center z-10">
                    <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(mockBlogPosts[0].publishedAt)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{mockBlogPosts[0].readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors">
                    {mockBlogPosts[0].title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {mockBlogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {mockBlogPosts[0].tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="self-start group/button">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </SpotlightCard>
          )}
        </motion.div>

        {/* Other Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mockBlogPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => openBlogViewer(post)}
            >
              <SpotlightCard 
                className="h-full bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                spotlightColor="rgba(59, 130, 246, 0.12)"
              >
                {/* Image placeholder with creative gradients */}
                <div className={`relative h-48 overflow-hidden ${
                  index % 3 === 0 
                    ? 'bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-cyan-950 dark:via-blue-950 dark:to-indigo-950'
                    : index % 3 === 1
                    ? 'bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-violet-950 dark:via-purple-950 dark:to-fuchsia-950'
                    : 'bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950 dark:via-teal-950 dark:to-cyan-950'
                }`}>
                  {/* Animated orbs */}
                  <div className="absolute inset-0 opacity-20">
                    <div className={`absolute top-4 right-4 w-20 h-20 rounded-full blur-2xl animate-pulse ${
                      index % 3 === 0 ? 'bg-blue-400 dark:bg-blue-600' 
                      : index % 3 === 1 ? 'bg-purple-400 dark:bg-purple-600'
                      : 'bg-teal-400 dark:bg-teal-600'
                    }`}></div>
                    <div className={`absolute bottom-4 left-4 w-24 h-24 rounded-full blur-2xl animate-pulse ${
                      index % 3 === 0 ? 'bg-indigo-400 dark:bg-indigo-600' 
                      : index % 3 === 1 ? 'bg-fuchsia-400 dark:bg-fuchsia-600'
                      : 'bg-emerald-400 dark:bg-emerald-600'
                    }`} style={{ animationDelay: '1.5s' }}></div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full flex items-center justify-center z-10"
                  >
                    <BookOpen className={`w-12 h-12 ${
                      index % 3 === 0 ? 'text-blue-600 dark:text-blue-400'
                      : index % 3 === 1 ? 'text-purple-600 dark:text-purple-400'
                      : 'text-teal-600 dark:text-teal-400'
                    }`} />
                  </motion.div>
                  <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-300 flex items-center justify-center z-10 ${
                    index % 3 === 0 ? 'from-blue-600/10 group-hover:from-blue-600/30'
                    : index % 3 === 1 ? 'from-purple-600/10 group-hover:from-purple-600/30'
                    : 'from-teal-600/10 group-hover:from-teal-600/30'
                  }`}>
                    <ExternalLink className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:underline">
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Blog Viewer Modal */}
        {selectedBlog && (
          <BlogViewer
            post={selectedBlog}
            isOpen={isViewerOpen}
            onClose={closeBlogViewer}
          />
        )}
      </div>
    </section>
  )
}
