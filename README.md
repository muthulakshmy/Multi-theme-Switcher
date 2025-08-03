# Multi-theme-Switcher

#  Multi-theme Switcher

A modern multi-page React application with built-in theme switching support. The app includes three pages — **Home**, **About**, and **Contact** — and allows users to switch between **three themes**:

-  Light Mode (Default)
-  Dark Mode
-  Color Mode (custom theme)

---

##  Features

-  Built with React and TypeScript
-  Global theme management using React Context
-  Multiple pages with smooth navigation
-  Responsive and clean layout
-  Dynamic theme switcher (Light, Dark, Color)
-  Easily deployable on Vercel

---


##  Folder Structure

```bash
src/
├── assets/             # Static assets like Logo.png
├── components/         # Reusable components (Header, Layout)
│   ├── header.tsx
│   ├── layout.tsx
├── context/            # React Context for theme management
│   └── themeContext.tsx
├── pages/              # Route-level components/pages
│   ├── home.tsx
│   ├── about.tsx
│   └── contact.tsx
├── styles/             # Theme and global styles
│   ├── App.css
│   └── theme.css
├── App.tsx             # Main App component
├── index.tsx           # Entry point


