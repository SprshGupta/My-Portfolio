import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-[#fafafa]">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
            <div className="max-w-3xl">
              <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-blue-600 mb-8 font-black">02 // Journey</h2>
              <h3 className="text-6xl md:text-8xl font-display font-black tracking-tighter text-zinc-900 leading-[0.9]">Selected <br/> Works</h3>
            </div>
            <p className="text-zinc-500 text-2xl max-w-sm font-bold leading-snug tracking-tighter pb-4">Pioneering the next generation of AI products.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {resumeData.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="bg-white rounded-[3.5rem] p-10 md:p-12 border border-zinc-200/50 flex flex-col h-full group transition-all duration-700 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30 hover:-translate-y-4"
              >
                <div className="flex justify-between items-start mb-16">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-4 py-2 bg-[#fafafa] border border-zinc-200 rounded-full text-[10px] font-mono font-black uppercase tracking-[0.2em] text-zinc-600 shadow-sm">{t}</span>
                    ))}
                  </div>
                  <div className="w-16 h-16 bg-[#fafafa] rounded-full flex items-center justify-center shadow-sm border border-zinc-200 transition-all duration-700 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white group-hover:rotate-45">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-display font-black mb-6 tracking-tighter text-zinc-900 leading-none group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-base md:text-lg text-zinc-500 leading-relaxed mb-12 flex-grow font-medium tracking-tight">
                  {project.description}
                </p>

                {project.metrics && (
                   <div className="mt-auto pt-8 border-t border-zinc-100 flex items-center gap-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse"></div>
                      <span className="text-xs font-mono font-black text-zinc-800 uppercase tracking-[0.2em]">{project.metrics}</span>
                   </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
