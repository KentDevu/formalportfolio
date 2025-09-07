# Modern Portfolio Website

A beautiful, modern portfolio website built with Next.js, TypeScript, ShadCN UI, and Framer Motion, featuring an AI-powered assistant.

## Features

- ✨ **Modern Design** - Beautiful UI with dark/light mode support
- 🎨 **Smooth Animations** - Powered by Framer Motion
- 🤖 **AI Assistant** - Integrated Groq API for interactive portfolio assistant
- 📱 **Responsive Design** - Optimized for desktop and mobile
- 🎯 **Active Navigation** - Highlighted navigation tabs based on scroll position
- 🚀 **Performance Optimized** - Built with Next.js 15 and Turbopack

## Sections

- **Hero** - Introduction with animated background
- **About** - Personal information and skills showcase
- **Achievements** - Timeline of accomplishments and milestones
- **Projects** - Featured project showcases with live demos
- **Blogs** - External blog integration
- **Vision & Mission** - Professional goals and values
- **Contact** - Contact form and social media links

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + ShadCN UI components
- **Animations**: Framer Motion
- **AI Integration**: Groq API
- **Form Handling**: React Hook Form + Zod validation
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

4. Add your Groq API key to `.env.local`:
```bash
NEXT_PUBLIC_GROQ_API_KEY=your_groq_api_key_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## AI Assistant Setup

To enable the AI assistant feature:

1. Get a free API key from [Groq Console](https://console.groq.com/keys)
2. Add the API key to your `.env.local` file
3. The assistant will automatically be available via the chat button

**Note**: The current implementation exposes the API key in the browser for demo purposes. For production, implement server-side API routes.

## Customization

### Personal Information

Edit `src/data/portfolio-data.ts` to customize:
- Personal details (name, title, bio, contact info)
- Social media links
- Project information
- Achievements and milestones
- Blog post links

### Styling

- Colors and themes: Edit `src/app/globals.css`
- Component styles: Modify ShadCN components in `src/components/ui/`
- Custom animations: Add to `src/app/globals.css`

### AI Assistant Context

Update the portfolio context in `src/lib/groq.ts` to customize the AI assistant's knowledge about you.

## Project Structure

```
src/
├── app/                    # Next.js app directory
├── components/
│   ├── common/            # Reusable components
│   ├── sections/          # Page sections
│   └── ui/                # ShadCN UI components
├── data/                  # Portfolio data and content
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and API clients
└── types/                 # TypeScript type definitions
```

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project can be deployed to any platform that supports Next.js:

- **Vercel** (recommended): Connect your GitHub repo
- **Netlify**: Use the `npm run build` command
- **AWS/Google Cloud**: Deploy as a Node.js application

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this project as a template for your own portfolio!

## Support

If you have any questions or issues, please open an issue on GitHub or contact me through the portfolio contact form.