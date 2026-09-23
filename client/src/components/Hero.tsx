import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const nameParts = resumeData.personal.name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative bg-[#fafafa] overflow-hidden">
      <div className="max-w-[1400px] w-full text-center">
        <div className="mb-20 overflow-hidden">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-zinc-200 bg-white/80 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-600 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              Available for new projects
            </span>
          </motion.div>
        </div>

        <div className="overflow-hidden mb-12">
          <motion.h1
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
            className="text-[18vw] md:text-[12rem] font-display font-black tracking-tighter leading-[0.8] text-zinc-950"
          >
            {firstName} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{lastName}</span>
          </motion.h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16 mt-16 overflow-hidden">
          <motion.p 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
            className="text-2xl md:text-4xl text-zinc-500 max-w-xl text-center md:text-left leading-tight font-bold tracking-tighter"
          >
            {resumeData.personal.tagline}
          </motion.p>
          
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.4 }}
            className="flex gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-12 py-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-black text-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-xl shadow-blue-500/20"
            >
              Projects <ArrowUpRight className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${resumeData.personal.email}`}
              className="px-12 py-6 bg-white border border-zinc-200 text-zinc-800 rounded-full font-black text-lg transition-all hover:bg-zinc-50 hover:scale-105 active:scale-95 shadow-sm"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.5em] rotate-90 mb-8">Scroll</span>
        <div className="w-px h-24 bg-black"></div>
      </motion.div>
    </section>
  );
}
