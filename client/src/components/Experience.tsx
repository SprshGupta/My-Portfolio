import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        >
          <h2 className="text-xs font-mono uppercase tracking-[0.4em] text-blue-600 mb-20 font-black">03 // Experience</h2>

          <div className="space-y-24">
            {resumeData.experience.map((job, index) => (
              <div key={index} className="grid md:grid-cols-12 gap-8 md:gap-16 group">
                <div className="md:col-span-4">
                  <div className="text-zinc-400 font-mono text-[10px] uppercase tracking-[0.3em] font-black mb-3 group-hover:text-blue-600 transition-colors">{job.period}</div>
                  <div className="text-2xl md:text-3xl font-black tracking-tighter text-zinc-900 group-hover:translate-x-2 transition-transform duration-700">{job.company}</div>
                </div>
                <div className="md:col-span-8">
                  <h3 className="text-3xl md:text-4xl font-display font-black mb-6 tracking-tighter text-zinc-900 leading-none">{job.role}</h3>
                  <p className="text-xl text-zinc-500 leading-snug mb-10 font-medium border-l-2 border-zinc-300 pl-6 group-hover:border-blue-500 transition-colors duration-700">
                    {job.description}
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {job.achievements.map((a, i) => (
                      <motion.div 
                        key={i} 
                        whileHover={{ x: 10 }}
                        className="flex items-start gap-6 p-8 bg-[#fafafa] rounded-[2rem] border border-zinc-200/50 hover:border-blue-200 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-500"
                      >
                        <span className="text-blue-300 font-mono font-black text-xl leading-none">0{i+1}</span>
                        <span className="text-base font-bold text-zinc-600 leading-snug">{a}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
