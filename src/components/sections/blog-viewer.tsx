"use client"

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Clock, ExternalLink, Share2, CheckCircle, Shield, Terminal, Laptop, Award, Zap, BookOpen, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { BlogPost } from '@/types'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface BlogViewerProps {
  post: BlogPost
  isOpen: boolean
  onClose: () => void
}

// Divider component
const Divider = () => (
  <div className="my-8 flex items-center gap-4">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
    <div className="flex gap-2">
      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
      <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '150ms' }} />
      <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: '300ms' }} />
    </div>
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
  </div>
)

// Table component
const TableView = ({ headers, rows }: { headers: string[]; rows: string[][] }) => (
  <div className="my-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gradient-to-r from-blue-500 to-purple-600">
            {headers.map((header, i) => (
              <th key={i} className="px-6 py-4 text-left text-sm font-bold text-white border-r border-white/20 last:border-r-0">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800">
          {rows.map((row, rowIdx) => (
            <motion.tr
              key={rowIdx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: rowIdx * 0.05 }}
              className={`${
                rowIdx % 2 === 0 
                  ? 'bg-gray-50/50 dark:bg-gray-700/30' 
                  : 'bg-white dark:bg-gray-800'
              } hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors border-b border-gray-200 dark:border-gray-700 last:border-b-0`}
            >
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="px-6 py-4 text-sm text-gray-800 dark:text-gray-200 border-r border-gray-200 dark:border-gray-700 last:border-r-0">
                  {cell.includes('✅') ? (
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="font-semibold text-green-700 dark:text-green-400">{cell.replace('✅', '').trim()}</span>
                    </div>
                  ) : (
                    <span className={cellIdx === 0 ? 'font-semibold text-gray-900 dark:text-gray-100' : 'text-gray-700 dark:text-gray-300'}>{cell}</span>
                  )}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

// Terminal-style code block component
const TerminalBlock = ({ code, language = 'bash' }: { code: string; language?: string }) => (
  <div className="my-6 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
    {/* Terminal Header */}
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-3 flex items-center space-x-2 border-b border-gray-700">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <span className="text-gray-400 text-sm ml-4">{language === 'bash' ? 'bash' : language}</span>
    </div>
    {/* Terminal Body */}
    <div className="bg-gray-950 p-6">
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus as any}
        customStyle={{
          background: 'transparent',
          padding: 0,
          margin: 0,
          fontSize: '0.9rem',
        }}
        showLineNumbers={false}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  </div>
)

// Format text with markdown bold, italic, code
const formatText = (text: string) => {
  const parts: any[] = []
  let currentText = text
  let key = 0

  // Replace **bold** text
  const boldRegex = /\*\*(.+?)\*\*/g
  const codeRegex = /`(.+?)`/g
  
  currentText.split(boldRegex).forEach((part, i) => {
    if (i % 2 === 1) {
      // This is bold text
      parts.push(<strong key={key++} className="font-bold text-gray-900 dark:text-white">{part}</strong>)
    } else {
      // Check for inline code
      part.split(codeRegex).forEach((codePart, j) => {
        if (j % 2 === 1) {
          parts.push(
            <code key={key++} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm text-blue-600 dark:text-blue-400 font-mono">
              {codePart}
            </code>
          )
        } else if (codePart) {
          parts.push(<span key={key++}>{codePart}</span>)
        }
      })
    }
  })

  return parts.length > 0 ? parts : text
}

// Custom section component with gradient backgrounds and icons
const Section = ({ icon: Icon, title, children, gradient }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-12"
  >
    <div className={`bg-gradient-to-br ${gradient} rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700`}>
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-white/90 dark:bg-gray-800/90 flex items-center justify-center shadow-md">
          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  </motion.div>
)

// Progress tracker component
const ProgressTracker = ({ items }: any) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {items.map((item: any, index: number) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-200 dark:border-gray-700"
      >
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{item.note}</p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
)

// Feature card component
const FeatureCard = ({ icon: Icon, title, description, color }: any) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`bg-gradient-to-br ${color} rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700`}
  >
    <Icon className="w-8 h-8 text-white mb-4" />
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-white/90 text-sm leading-relaxed">{description}</p>
  </motion.div>
)

// Skill badge component
const SkillBadge = ({ skill, icon: Icon }: any) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md flex items-center space-x-2"
  >
    {Icon && <Icon className="w-4 h-4" />}
    <span>{skill}</span>
  </motion.div>
)

// Key takeaway component
const Takeaway = ({ children }: any) => (
  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-l-4 border-blue-600 rounded-r-xl p-6 my-6">
    <div className="flex items-start space-x-3">
      <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
      <div>
        <h4 className="font-bold text-gray-900 dark:text-white mb-2">🚀 Key Takeaway</h4>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{children}</p>
      </div>
    </div>
  </div>
)

export function BlogViewer({ post, isOpen, onClose }: BlogViewerProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: post.url,
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(post.url)
      alert('Link copied to clipboard!')
    }
  }

  // Enhanced content parser with table support
  const parseContent = (content: string) => {
    const sections: any[] = []
    const lines = content.split('\n')
    let currentSection: any = null
    let currentSubsection: any = null
    let inCodeBlock = false
    let codeLines: string[] = []
    let codeLang = 'bash'
    let inTable = false
    let tableHeaders: string[] = []
    let tableRows: string[][] = []

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      const trimmedLine = line.trim()
      
      // Handle code blocks
      if (trimmedLine.startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true
          codeLang = trimmedLine.replace('```', '').trim() || 'bash'
          codeLines = []
        } else {
          inCodeBlock = false
          const target = currentSubsection || currentSection
          if (target) {
            target.content.push({ type: 'code', code: codeLines.join('\n'), lang: codeLang })
          }
          codeLines = []
        }
        continue
      }

      if (inCodeBlock) {
        codeLines.push(line)
        continue
      }

      // Handle horizontal dividers (---)
      if (trimmedLine === '---') {
        const target = currentSubsection || currentSection
        if (target) {
          target.content.push({ type: 'divider' })
        }
        continue
      }

      // Handle table rows
      if (trimmedLine.startsWith('|') && trimmedLine.endsWith('|')) {
        const cells = trimmedLine.split('|').map(c => c.trim()).filter(c => c && !c.match(/^[-:]+$/))
        
        if (cells.length > 0) {
          if (!inTable) {
            // First row is headers
            tableHeaders = cells
            inTable = true
          } else if (!trimmedLine.includes('---')) {
            // Data rows (skip separator line)
            tableRows.push(cells)
          }
        }
        continue
      } else if (inTable) {
        // End of table
        const target = currentSubsection || currentSection
        if (target && tableHeaders.length > 0) {
          target.content.push({ type: 'table', headers: tableHeaders, rows: tableRows })
        }
        inTable = false
        tableHeaders = []
        tableRows = []
      }
      
      // Main sections (## heading)
      if (trimmedLine.startsWith('## ')) {
        if (currentSection) sections.push(currentSection)
        const emojiMatch = trimmedLine.match(/📊|🛡️|🌐|🌍|🐧|🪟|⚡|💡|🎯|📝|🖥️|⌨️|✅/)
        currentSection = {
          title: trimmedLine.replace(/^##\s+/, '').replace(/📊|🛡️|🌐|🌍|🐧|🪟|⚡|💡|🎯|📝|🖥️|⌨️|✅/g, '').trim(),
          emoji: emojiMatch ? emojiMatch[0] : '📖',
          content: [],
          subsections: []
        }
        currentSubsection = null
      }
      // Subsections (### heading)
      else if (trimmedLine.startsWith('### ')) {
        if (currentSection) {
          const emojiMatch = trimmedLine.match(/🚀|🔴|🔵|🔍|🧑‍💻|🪟|⚙️|🔒|🏢|📂|📝|⚙️|🌐|🔐|📁|⚡|🔧/)
          currentSubsection = {
            title: trimmedLine.replace(/^###\s+/, '').replace(/🚀|🔴|🔵|🔍|🧑‍💻|🪟|⚙️|🔒|🏢|📂|📝|⚙️|🌐|🔐|📁|⚡|🔧/g, '').trim(),
            emoji: emojiMatch ? emojiMatch[0] : '▶️',
            content: []
          }
          currentSection.subsections.push(currentSubsection)
        }
      }
      // Bullet points
      else if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
        const target = currentSubsection || currentSection
        if (target) {
          if (!target.bullets) target.bullets = []
          target.bullets.push(trimmedLine.replace(/^[-*]\s+/, ''))
        }
      }
      // Regular content
      else if (trimmedLine) {
        const target = currentSubsection || currentSection
        if (target) {
          target.content.push({ type: 'text', text: trimmedLine })
        }
      }
    }
    
    // Handle any remaining table
    if (inTable && tableHeaders.length > 0) {
      const target = currentSubsection || currentSection
      if (target) {
        target.content.push({ type: 'table', headers: tableHeaders, rows: tableRows })
      }
    }
    
    if (currentSection) sections.push(currentSection)
    return sections
  }

  const sections = post.content ? parseContent(post.content) : []

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 flex items-center justify-center"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full h-full flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="rounded-full hover:bg-white/50 dark:hover:bg-gray-700"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                  <div>
                    <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleShare}
                    className="hidden sm:flex"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(post.url, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">View on GitHub</span>
                    <span className="sm:hidden">GitHub</span>
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
                <article className="max-w-5xl mx-auto px-6 py-12">
                  {/* Hero Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                  >
                    <div className="inline-block mb-6">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                        🚀 TryHackMe Journey
                      </div>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                        {post.title}
                      </span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 justify-center mt-8">
                      {post.tags.map((tag, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 text-sm shadow-md">
                            #{tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Dynamic Content Based on Blog */}
                  {post.id === "1" && (
                    <>
                      {/* Introduction */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mb-12"
                      >
                        <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 border-2 border-blue-200 dark:border-blue-900">
                          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            Cybersecurity has always fascinated me — how attackers break systems, how defenders protect them, and how technology plays both sides of the game. 
                            But before learning to hack or defend, I needed to understand <strong className="text-blue-600 dark:text-blue-400">how technology actually works</strong>.
                            That's when I found the <strong className="text-purple-600 dark:text-purple-400">Pre-Security Learning Path on TryHackMe</strong>.
                          </p>
                        </Card>
                      </motion.div>

                      {/* Progress Tracker */}
                      <Section icon={Target} title="My Learning Path" gradient="from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30">
                        <ProgressTracker items={[
                          { title: "Introduction to Cyber Security", note: "Learned offensive, defensive & career paths" },
                          { title: "Network Fundamentals", note: "Built strong networking foundations" },
                          { title: "How the Web Works", note: "Understood DNS, HTTP & website flow" },
                          { title: "Linux Fundamentals", note: "Mastered command line & permissions" },
                          { title: "Windows Fundamentals", note: "Learned Windows internals & security" }
                        ]} />
                      </Section>

                      {/* Key Sections with Command Examples */}
                      <div className="space-y-8 mb-12">
                        <FeatureCard
                          icon={Shield}
                          title="🔴 Offensive Security"
                          description="Learned how attackers think and exploit vulnerabilities - understanding the mindset of a penetration tester."
                          color="from-red-500 to-pink-600"
                        />
                        <FeatureCard
                          icon={Shield}
                          title="🔵 Defensive Security"
                          description="Explored how defenders detect threats and protect systems using SOC, SIEM, and threat intelligence."
                          color="from-blue-500 to-cyan-600"
                        />
                        
                        {/* Linux Section with Terminal */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                        >
                          <FeatureCard
                            icon={Terminal}
                            title="🐧 Linux Mastery"
                            description="From basic navigation to advanced utilities - Linux became my cybersecurity toolkit."
                            color="from-purple-500 to-indigo-600"
                          />
                          <TerminalBlock 
                            code={`# Example: listing files with details\nls -la`}
                            language="bash"
                          />
                        </motion.div>

                        <FeatureCard
                          icon={Laptop}
                          title="🪟 Windows Internals"
                          description="Mastered Windows security, registry, and Active Directory fundamentals."
                          color="from-green-500 to-teal-600"
                        />
                      </div>

                      {/* What I Learned Cards */}
                      <Section icon={BookOpen} title="💡 Key Learnings" gradient="from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-blue-500"
                          >
                            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-3">🌐 Networking Fundamentals</h4>
                            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                              <li className="flex items-start space-x-2">
                                <span className="text-blue-500">•</span>
                                <span>OSI Model - The 7-layer cake of communication</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-blue-500">•</span>
                                <span>Packets & Frames - The envelopes of the internet</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-blue-500">•</span>
                                <span>LANs & Network Extending</span>
                              </li>
                            </ul>
                          </motion.div>

                          <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-purple-500"
                          >
                            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-3">🌍 How The Web Works</h4>
                            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                              <li className="flex items-start space-x-2">
                                <span className="text-purple-500">•</span>
                                <span>DNS in Detail - The phonebook of the internet</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-purple-500">•</span>
                                <span>HTTP Protocol - The rules of the web</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-purple-500">•</span>
                                <span>Full request journey across layers</span>
                              </li>
                            </ul>
                          </motion.div>

                          <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-green-500"
                          >
                            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-3">🐧 Linux Skills</h4>
                            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                              <li className="flex items-start space-x-2">
                                <span className="text-green-500">•</span>
                                <span>File navigation & permissions</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-green-500">•</span>
                                <span>Process management & monitoring</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-green-500">•</span>
                                <span>Command line power tools</span>
                              </li>
                            </ul>
                          </motion.div>

                          <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-orange-500"
                          >
                            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-3">🪟 Windows Expertise</h4>
                            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                              <li className="flex items-start space-x-2">
                                <span className="text-orange-500">•</span>
                                <span>User accounts & permissions (UAC)</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-orange-500">•</span>
                                <span>File systems & registry basics</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-orange-500">•</span>
                                <span>Processes & task management</span>
                              </li>
                            </ul>
                          </motion.div>
                        </div>
                      </Section>

                      <Takeaway>
                        The Pre-Security path wasn't just "the basics" — it was my <strong>cybersecurity foundation</strong>. 
                        Now when I see an exploit demo, I don't just watch — I <strong>understand the gears turning behind the scenes</strong>.
                      </Takeaway>

                      {/* Next Steps */}
                      <Section icon={Zap} title="What's Next?" gradient="from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {['Jr. Penetration Tester', 'SOC Level 1', 'Red Teaming'].map((path, i) => (
                            <motion.div
                              key={i}
                              whileHover={{ scale: 1.05 }}
                              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center border-2 border-purple-200 dark:border-purple-900"
                            >
                              <Award className="w-12 h-12 mx-auto mb-3 text-purple-600" />
                              <h4 className="font-bold text-gray-900 dark:text-white">{path}</h4>
                            </motion.div>
                          ))}
                        </div>
                      </Section>
                    </>
                  )}

                  {/* For other blog posts, render structured content */}
                  {post.id !== "1" && sections.map((section: any, idx: number) => {
                    const sectionGradients = [
                      'from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30',
                      'from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30',
                      'from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30',
                      'from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30'
                    ]
                    
                    return (
                      <Section
                        key={idx}
                        icon={BookOpen}
                        title={`${section.emoji} ${section.title}`}
                        gradient={sectionGradients[idx % sectionGradients.length]}
                      >
                        {/* Section content */}
                        {section.content && section.content.length > 0 && (
                          <div className="mb-6">
                            {section.content.map((item: any, i: number) => {
                              if (item.type === 'code') {
                                return <TerminalBlock key={i} code={item.code} language={item.lang} />
                              } else if (item.type === 'table') {
                                return <TableView key={i} headers={item.headers} rows={item.rows} />
                              } else if (item.type === 'divider') {
                                return <Divider key={i} />
                              } else if (item.type === 'text') {
                                return (
                                  <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                    {formatText(item.text)}
                                  </p>
                                )
                              }
                              return null
                            })}
                          </div>
                        )}

                        {/* Subsections */}
                        {section.subsections && section.subsections.map((sub: any, subIdx: number) => (
                          <motion.div
                            key={subIdx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: subIdx * 0.1 }}
                            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-6 border-l-4 border-blue-500"
                          >
                            <div className="flex items-center space-x-3 mb-4">
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl">
                                {sub.emoji}
                              </div>
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                {sub.title}
                              </h3>
                            </div>

                            {/* Subsection content */}
                            {sub.content && sub.content.map((item: any, i: number) => {
                              if (item.type === 'code') {
                                return <TerminalBlock key={i} code={item.code} language={item.lang} />
                              } else if (item.type === 'table') {
                                return <TableView key={i} headers={item.headers} rows={item.rows} />
                              } else if (item.type === 'divider') {
                                return <Divider key={i} />
                              } else if (item.type === 'text') {
                                // Check if it's a key point (starts with emoji or bullet)
                                const isKeyPoint = /^(💻|🚀|📝|🔍|📊|⚙️|🔐|📁|🌐|🔗|📦)/.test(item.text)
                                return (
                                  <p key={i} className={`leading-relaxed mb-3 ${
                                    isKeyPoint 
                                      ? 'text-blue-700 dark:text-blue-300 font-medium' 
                                      : 'text-gray-700 dark:text-gray-300'
                                  }`}>
                                    {formatText(item.text)}
                                  </p>
                                )
                              }
                              return null
                            })}

                            {/* Bullets */}
                            {sub.bullets && sub.bullets.length > 0 && (
                              <ul className="space-y-2 mt-4">
                                {sub.bullets.map((bullet: string, i: number) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-start space-x-3"
                                  >
                                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mt-2 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">{formatText(bullet)}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            )}
                          </motion.div>
                        ))}

                        {/* Section bullets */}
                        {section.bullets && section.bullets.length > 0 && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                            {section.bullets.map((bullet: string, i: number) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md flex items-start space-x-3 border border-gray-200 dark:border-gray-700"
                              >
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 dark:text-gray-300 text-sm">{formatText(bullet)}</span>
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </Section>
                    )
                  })}

                  {/* Footer */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 pt-8 border-t-2 border-gray-200 dark:border-gray-700"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white shadow-2xl">
                      <BookOpen className="w-12 h-12 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-3">Continue the Journey</h3>
                      <p className="mb-6 opacity-90">
                        ✍️ Written as part of my cybersecurity learning journey with TryHackMe
                      </p>
                      <Button
                        onClick={() => window.open(post.url, '_blank')}
                        className="bg-white text-blue-600 hover:bg-gray-100"
                        size="lg"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        View Full Article on GitHub
                      </Button>
                    </div>
                  </motion.div>
                </article>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
