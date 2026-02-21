interface Project {
	title: string;
	description: string;
	tools: string;
  }
  
export default function ProjectCard({ project }: { project: Project }) {
	if (!project) return null;
	return (
	  <div className="group min-h-[230px] rounded-3xl border border-white/50 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl">
		<h3 className="mb-4 text-2xl font-extrabold leading-tight text-slate-900 tracking-tight">{project.title}</h3>
		<p className="text-slate-500 text-xl leading-relaxed mb-6">{project.description}</p>
		<span className="inline-block rounded-full bg-gradient-to-r from-[#d9b0ff] via-[#c5d2ff] to-[#9ee8db] px-4 py-2 text-sm font-bold tracking-wide text-slate-800 shadow-sm transition duration-300 group-hover:scale-105">
		  {project.tools}
		</span>
	  </div>
	);
  }
  
