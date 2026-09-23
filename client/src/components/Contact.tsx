import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Linkedin, Github, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-zinc-950 text-white rounded-t-[4rem] md:rounded-t-[8rem] overflow-hidden pt-40 pb-16">
      <div className="container-wide text-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.8em] mb-16 block font-black">Project Inquiry</span>
          <h2 className="text-[12vw] md:text-[10rem] font-display font-black tracking-tighter mb-32 leading-[0.8]">
            Ready <br/> to <br/> <span className="text-zinc-800 italic">evolve?</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center mb-48">
            <motion.a
              href={`mailto:${resumeData.personal.email}`}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-6 px-16 py-8 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-black text-2xl transition-all shadow-xl shadow-blue-600/20"
            >
              Start Conversation
              <ArrowUpRight className="w-8 h-8" />
            </motion.a>
            <div className="flex gap-6 justify-center">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-24 h-24 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-800 hover:border-zinc-700 hover:text-cyan-400 transition-all text-zinc-400"
              >
                <Linkedin className="w-8 h-8" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1, rotate: -10 }}
                className="w-24 h-24 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-800 hover:border-zinc-700 hover:text-cyan-400 transition-all text-zinc-400"
              >
                <Github className="w-8 h-8" />
              </motion.a>
            </div>
          </div>

          <div className="pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.4em] font-black">
              &copy; 2026 {resumeData.personal.name}
            </p>
            <div className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.4em] font-black flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              Forging the Autonomous Future
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
