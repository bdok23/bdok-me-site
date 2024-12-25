import Image from 'next/image'

export function Hero() {
  return (
    <section className="bg-gray-200 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-6 text-center">
        <Image
          src="/placeholder.svg?height=150&width=150"
          alt="Your Name"
          width={150}
          height={150}
          className="mx-auto rounded-full"
        />
        <h1 className="text-4xl font-bold mt-4 text-gray-800 dark:text-white">Your Name</h1>
        <p className="text-xl mt-2 text-gray-600 dark:text-gray-300">Web Developer & Designer</p>
      </div>
    </section>
  )
}

