export default function Navbar() {
	return (
	  <nav className="bg-white shadow sticky top-0 z-50 py-4">
		<div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
		  <span className="font-bold text-xl">Zara Noor</span>
		  <div className="space-x-6">
			<a href="#projects" className="hover:text-blue-600">Projects</a>
			<a href="https://www.linkedin.com/in/zara-n-b0360a1b4/" target="_blank" rel="noreferrer" className="hover:text-blue-600">LinkedIn</a>
		  </div>
		</div>
	  </nav>
	);
  }