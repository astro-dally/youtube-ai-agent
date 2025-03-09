# YouTube AI Agent 🚀

[![Next.js](https://img.shields.io/badge/Next.js-15.1.3-000000?logo=next.js)](https://nextjs.org/)
[![LangChain](https://img.shields.io/badge/LangChain-0.1.16-FF6C37)](https://python.langchain.com/)
[![Convex](https://img.shields.io/badge/Convex-1.9.1-4A46C6)](https://convex.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)

**Revolutionize YouTube content interaction with AI-powered insights and real-time processing.**  
A sophisticated AI assistant that understands YouTube content through transcripts, providing summaries, Q&A, and intelligent analysis.

[Live Demo](#) | [Documentation](#) | [Report Bug](#)

## 🌟 Features

- 🎥 **YouTube Transcript Analysis**
  - Automatic video ID/URL parsing
  - Transcript processing & context extraction
- 🤖 **AI-Powered Interactions**
  - Instant video summarization
  - Context-aware Q&A system
  - Natural language queries about content
- 🚄 **Real-Time Processing**
  - Streamed responses with partial rendering
  - Interactive conversation history
- 🔐 **Secure Authentication**
  - User management with Clerk
  - Session-based conversation history
- 📊 **Smart Data Management**
  - Real-time storage with Convex
  - Efficient query system
- � **Advanced Error Handling**
  - Graceful API failure recovery
  - User-friendly error messages

## 🛠 Tech Stack

- **Framework**: Next.js 15
- **AI Orchestration**: LangChain
- **Database**: Convex
- **Auth**: Clerk
- **Styling**: Tailwind CSS + Shadcn/ui
- **Type Safety**: TypeScript
- **Hosting**: Vercel

## 📦 Getting Started

### Prerequisites

- Node.js ≥18.x
- YouTube Data API key
- OpenAI/Anthropic API key
- Clerk account

### Installation

1. Clone repo:
```bash
git clone https://github.com/astro-dally/youtube-ai-agent.git
cd youtube-ai-agent
```

2. Install dependencies:
```bash
pnpm install
```

3. Set environment variables (`.env.local`):
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
YOUTUBE_API_KEY=your_yt_key
OPENAI_API_KEY=your_openai_key
CONVEX_DEPLOYMENT=your_convex_url
```

4. Start development server:
```bash
pnpm dev
```

## 🧠 Advanced Features

### YouTube Integration
- URL parsing & validation
- Transcript chunking strategy
- Context-aware embeddings
- Video metadata extraction

### AI Processing Pipeline
1. Transcript cleaning/normalization
2. Context-aware chunking
3. Vector embeddings generation
4. Semantic search implementation
5. LLM response generation

### Performance Optimizations
- Streamed transcript processing
- Intelligent caching layer
- Chunked API requests
- Adaptive concurrency

## 🚀 Deployment

1. Set up Vercel project
2. Configure build settings:
```bash
Build Command: pnpm build
Output Directory: .next
```

3. Add environment variables
4. Deploy!


Made with ❤️ by Dally R
