interface ProjectCardProps {
  title: string;
  url: string;
  image: string;
  tech: string;
}

export function ProjectCard({ title, url, image, tech }: ProjectCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-brand-200"
    >
      <div className="aspect-[16/10] overflow-hidden bg-brand-50">
        <img
          src={image}
          alt={`${title} screenshot`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-brand-800 mb-2 group-hover:text-brand-600 transition-colors">
          {title}
          <svg
            className="inline-block w-4 h-4 ml-1.5 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">{tech}</p>
      </div>
    </a>
  );
}
