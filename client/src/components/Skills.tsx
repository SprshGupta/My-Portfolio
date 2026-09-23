import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#fafafa]">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="text-center mb-24">
            <h2 className="text-xs font-mono uppercase tracking-[0.4em] text-blue-600 mb-6 font-black">04 // Capability</h2>
            <h3 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-zinc-900 leading-none">Toolstack</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumeData.skills.map((category, index) => (
              <motion.div 
                key={index} 
                whileHover={{ y: -5 }}
                className={`bg-white p-8 md:p-10 rounded-[2.5rem] border border-zinc-200/50 flex flex-col justify-start shadow-sm hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-500 ${index === 4 ? 'lg:col-span-2' : ''}`}
              >
                <div>
                  <div className="text-blue-400 font-mono text-[10px] uppercase tracking-[0.4em] font-black mb-8">/{category.category}</div>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {category.items.map((skill) => (
                      <div key={skill} className="text-[13px] md:text-sm font-bold tracking-tight text-zinc-700 bg-[#fafafa] border border-zinc-200 px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/50 transition-all cursor-default">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
