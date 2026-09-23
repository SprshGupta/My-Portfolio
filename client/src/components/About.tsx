import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="grid md:grid-cols-12 gap-20 items-start">
            <div className="md:col-span-8">
              <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-blue-600 mb-12 font-black">01 // Profile</h2>
              <div className="text-4xl md:text-6xl font-display font-black leading-[1.1] tracking-tighter text-zinc-900 space-y-12">
                <p>
                  Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 italic">intelligent systems</span> that scale.
                </p>
                <p className="text-zinc-500 font-bold text-2xl md:text-3xl leading-snug">
                  {resumeData.about}
                </p>
              </div>
            </div>
            
            <div className="md:col-span-4 flex flex-col gap-6 pt-16">
              <div className="bento-card bg-[#fafafa] shadow-sm border border-zinc-200/50">
                 <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-8 font-black">Core Stack</h4>
                 <div className="space-y-3">
                    {["Language Models", "Autonomous Agents", "Cloud-Native AI", "Deep Learning"].map((item) => (
                      <div key={item} className="text-2xl font-black tracking-tighter text-zinc-800">{item}</div>
                    ))}
                 </div>
              </div>
              <div className="bento-card bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-600/20">
                 <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-100 mb-4 font-black">Base</h4>
                 <div className="text-3xl font-black tracking-tighter">{resumeData.personal.location}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
