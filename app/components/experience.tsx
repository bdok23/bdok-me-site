export function Experience() {
    const experiences = [
      {
        title: 'Senior Web Developer',
        company: 'Tech Corp',
        period: '2020 - Present',
        description: 'Led a team of developers in creating responsive web applications.'
      },
      {
        title: 'Web Developer',
        company: 'Digital Solutions',
        period: '2018 - 2020',
        description: 'Developed and maintained multiple client websites using modern web technologies.'
      }
    ]
  
    return (
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{exp.company} | {exp.period}</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  