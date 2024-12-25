import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center space-x-4">
          <li><Link href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">About</Link></li>
          <li><Link href="#skills" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Skills</Link></li>
          <li><Link href="#experience" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Experience</Link></li>
          <li><Link href="#projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Projects</Link></li>
          <li><Link href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

