# VideoHost Pro

🎬 **Professional Video Hosting Platform** built with Supabase, Next.js 14, and Tailwind CSS

## ✨ Features

✅ **Video Upload & Storage**
- Drag-and-drop video upload
- Progress tracking
- File size and MIME type validation
- Public video streaming

✅ **Authentication**
- Email/Password signup and login
- JWT-based sessions
- Role-based access control (admin/viewer)
- Persistent login state

✅ **Video Management**
- Admin dashboard for uploads
- Video metadata storage
- View count analytics
- Soft delete functionality

✅ **Modern UI**
- Responsive design with Tailwind CSS
- Smooth animations and transitions
- Toast notifications for feedback
- Loading states and error handling

## 📊 Tech Stack

- **Backend**: [Supabase](https://supabase.com) (PostgreSQL + Auth + Storage)
- **Frontend**: [Next.js 14](https://nextjs.org) with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **UI Icons**: [Lucide React](https://lucide.dev)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com)
- **Deployment**: [Vercel](https://vercel.com)
- **CDN**: [Cloudflare](https://cloudflare.com)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PrabeshAmgain/videohost-pro.git
   cd videohost-pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   # Create .env.local file
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000

## 📁 Project Structure

```
videohost-pro/
├── app/
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx                # Dashboard
│   ├── globals.css
│   └── auth/
│       ├── login/page.tsx       # Login page
│       └── signup/page.tsx      # Signup page
├── components/
│   ├── VideoUpload.tsx          # Video upload component
│   ├── VideoPlayer.tsx          # Video player with controls
│   └── AuthForm.tsx             # Authentication forms
├── contexts/
│   └── AuthContext.tsx          # Global auth state
├── lib/
│   └── supabase.ts              # Supabase client
├── .env.local                   # Environment variables
├── package.json
├── tsconfig.json
└── next.config.js
```

## 🔐 Supabase Setup

### Database Tables

1. **users** - User profiles with roles (admin/viewer)
2. **videos** - Video metadata and file references
3. **activity_logs** - Track all user actions
4. **downloads** - Analytics for video downloads

### Storage

- **Bucket**: `videos` (public access for streaming)

### Row Level Security (RLS) Policies

- ✅ Users can view non-deleted videos
- ✅ Only admins can upload videos
- ✅ Only admins can delete their videos

## 📝 Detailed Documentation

For complete file-by-file code and detailed setup instructions, see:

1. **[PROJECT_STRUCTURE.md](https://gist.github.com/PrabeshAmgain/be704a740f231953c7d3cef7e14b41db)** - Steps 1-3 files
   - Complete folder structure
   - package.json with all dependencies
   - Configuration files
   - Environment setup

2. **[ADDITIONAL_COMPONENTS.md](https://gist.github.com/PrabeshAmgain/0d324dc491663b84d46f5a0cb3a8c38b)** - Steps 4-6 components
   - AuthContext.tsx (authentication management)
   - VideoUpload.tsx (with progress tracking)
   - VideoPlayer.tsx (with controls)
   - AuthForm.tsx (login/signup)
   - Dashboard pages

3. **[README_COMPLETE_GUIDE.md](https://gist.github.com/PrabeshAmgain/e9c3ae8960eaa177d2882723ac8fc3dc)** - Complete implementation guide
   - Full overview and setup instructions
   - Supabase project details
   - Deployment instructions
   - Troubleshooting

## 🎯 Supabase Project Details

| Detail | Value |
|--------|-------|
| Project | videohost-pro |
| Project ID | duuunepzcwbzuxshpomk |
| Region | Asia-Pacific |
| Database | PostgreSQL |
| Tables | 4 (users, videos, activity_logs, downloads) |
| Storage | 1 bucket (videos - public) |
| URL | https://duuunepzcwbzuxshpomk.supabase.co |

## 🌐 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import this repository
4. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Click Deploy

### Configure Cloudflare CDN

1. Add your domain to Cloudflare
2. Update nameservers
3. Create cache rule for `/storage/v1/object/public/videos/*`
4. Enable SSL/TLS and security features

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start            # Start production server

# Code quality
npm run lint         # Run ESLint
```

## 🔗 Useful Links

- [Supabase Documentation](https://supabase.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Cloudflare Docs](https://developers.cloudflare.com)

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For issues, questions, or suggestions:

- Create an [Issue](https://github.com/PrabeshAmgain/videohost-pro/issues)
- Check existing documentation in the Gists above
- Review Supabase and Next.js docs

---

**Made with ❤️ for video hosting enthusiasts**
