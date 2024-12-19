

export default function Contact() {
  return (
    <section id="links" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8"></h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://github.com/Harsitha-git"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/harsitha-anubhukta/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:harsitha.sonu@gmail.com"
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
