const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-green-600 to-gray-700 text-white py-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        {/* Left: Logo & Name */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">📚</span>
          <span className="text-lg font-semibold tracking-wide">Minimal Library Management System</span>
        </div>
        {/* Center: Info */}
        <div className="text-sm opacity-90 text-center">
          <div>
            &copy; {new Date().getFullYear()} Library Management Team. All rights reserved.
          </div>
        </div>
        {/* Right: Socials */}
        <div className="flex gap-4 mt-2 md:mt-0">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
            </svg>
          </a>
          <a
            href="mailto:your@email.com"
            className="hover:text-yellow-300 transition"
            aria-label="Email"
          >
            <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13l8-8.99V4H4zm16 2.41l-7.07 7.07a1 1 0 0 1-1.42 0L4 6.41V20h16V6.41z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.37-1.56 2.82-1.56 3.01 0 3.57 1.98 3.57 4.56v4.77z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;