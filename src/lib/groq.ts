import Groq from 'groq-sdk'

// Initialize Groq client only when API key is available
let groq: Groq | null = null

function getGroqClient() {
  if (!groq && process.env.NEXT_PUBLIC_GROQ_API_KEY) {
    groq = new Groq({
      apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
      dangerouslyAllowBrowser: true // Note: In production, use a server-side API route for security
    })
  }
  return groq
}

// Portfolio context for the AI assistant
const PORTFOLIO_CONTEXT = `
You are an AI assistant for a professional developer portfolio website. Your role is to answer questions about the portfolio owner's background, skills, experience, and projects.

Portfolio Owner Information:
- Name: [Portfolio Owner's Name]
- Title: Full Stack Developer & AI Enthusiast
- Location: [Your Location]
- Email: [Your Email]

Skills & Technologies:
- Frontend: React, Next.js, TypeScript, Tailwind CSS, Framer Motion
- Backend: Node.js, Python, Express.js, FastAPI
- Databases: PostgreSQL, MongoDB, Redis
- Cloud: AWS, Docker, Kubernetes
- AI/ML: OpenAI API, TensorFlow, PyTorch
- Tools: Git, GitHub, VS Code, Figma

Experience:
- 5+ years of web development experience
- Worked on e-commerce platforms, AI-powered applications, and data visualization tools
- Strong focus on user experience and performance optimization
- Active contributor to open-source projects
- Experience with agile development methodologies

Projects:
- AI-Powered Task Manager: Smart task management with AI-powered priority suggestions
- E-Commerce Platform: Modern e-commerce solution with real-time features
- Data Visualization Dashboard: Interactive dashboard with real-time charts

Achievements:
- AWS Certified Solutions Architect
- Tech Conference Speaker
- Open Source Contributor (1000+ GitHub stars)
- Hackathon Winner

Vision & Mission:
- Vision: To leverage technology as a force for positive change, creating innovative solutions that enhance human capabilities
- Mission: Building scalable, user-centric applications while staying at the forefront of emerging technologies

Guidelines for responses:
1. Be helpful, professional, and conversational
2. Provide specific information about skills, experience, and projects
3. If asked about something not in the context, politely redirect to relevant topics
4. Encourage visitors to check out the projects section or contact form
5. Keep responses concise but informative
6. Show enthusiasm for technology and development
`

export async function getChatCompletion(userMessage: string, conversationHistory: Array<{role: string, content: string}> = []) {
  try {
    const client = getGroqClient()
    
    if (!client) {
      return "AI assistant is currently unavailable. Please check that the API key is configured."
    }

    const messages = [
      {
        role: "system" as const,
        content: PORTFOLIO_CONTEXT
      },
      ...conversationHistory.map(msg => ({
        role: msg.role as "user" | "assistant",
        content: msg.content
      })),
      {
        role: "user" as const,
        content: userMessage
      }
    ]

    const completion = await client.chat.completions.create({
      messages,
      model: "llama-3.1-8b-instant", // Using llama-3.1-8b-instant
      temperature: 0.7,
      max_tokens: 500,
      top_p: 1,
      stream: false
    })

    return completion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response. Please try again."
  } catch (error) {
    console.error('Error with Groq API:', error)
    return "I'm currently experiencing some technical difficulties. Please try asking again or contact me directly through the contact form."
  }
}

// Function to get a welcome message
export function getWelcomeMessage(): string {
  const welcomeMessages = [
    "Hi! I'm your AI assistant. I can help answer questions about my background, skills, projects, and experience. What would you like to know?",
    "Hello! I'm here to help you learn more about this portfolio. Feel free to ask about projects, technical skills, or professional experience!",
    "Welcome! I'm an AI assistant that can share insights about the developer's background, achievements, and work. What interests you most?",
  ]
  
  return welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)]
}
