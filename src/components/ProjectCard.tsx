type Project = {
  title: string
  description: string
  tags: string[]
  links: Record<string, string>
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow bg-white">
      <h3 className="font-semibold mb-2">{project.title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-3">{project.description}</p>
      <div className="flex gap-2 flex-wrap mb-4">
        {project.tags.map(t => (
          <span key={t} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium">{t}</span>
        ))}
      </div>
      <div className="flex gap-2">
        {Object.entries(project.links).map(([label, url]) => (
          <a key={label} href={url} target="_blank" rel="noopener noreferrer"
            className="text-xs font-medium border border-gray-200 px-3 py-1.5 rounded hover:border-blue-400 hover:text-blue-600 transition-colors capitalize">
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}