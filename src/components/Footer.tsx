export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display font-semibold text-white text-lg">AL Manager</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="mailto:hello@almanager.pt" className="hover:text-white transition-colors">
              hello@almanager.pt
            </a>
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} AL Manager. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
