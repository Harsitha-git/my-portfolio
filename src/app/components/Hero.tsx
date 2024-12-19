import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/50 z-10" />
      
      {/* Main content */}
      <div className="relative z-20 text-center px-4">
        <div className="mb-8 mx-auto w-64 h-64 sm:w-96 sm:h-96 relative">
          <Image
            src="/text.gif"
            alt="Retro Computer Animation"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 tracking-tight">
          <span className="block font-mono">Hello World,</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
           
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 font-mono">
          Product Designer
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors duration-300">
            View Projects
          </button>
          <button className="px-6 py-3 border border-purple-400 text-purple-400 rounded-lg font-medium hover:bg-purple-400/10 transition-colors duration-300">
            Contact Me
          </button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10" />
      </div>
    </div>
  )
}

