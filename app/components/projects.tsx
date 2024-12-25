import Image from 'next/image'

export function Projects() {
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'A fully responsive e-commerce website built with React and Node.js.',
      image: '/placeholder.svg?height=200&width=300'
    },
    {
      title: 'Task Management App',
      description: 'A task management application with user authentication and real-time updates.',
      image: '/placeholder.svg?height=200&width=300'
    }
  ]

  return (
    <section id="projects" className="bg-gray-200 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <Image src={project.image} alt={project.title} width={300} height={200} className="w-full" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

