export function Skills() {
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Git']
  
    return (
      <section id="skills" className="bg-gray-200 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span key={skill} className="bg-gray-300 dark:bg-gray-700 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  