"use client";

import { motion } from "framer-motion";

const links = [
  {
    category: "Projects",
    items: [
      { title: "Flume.sh", desc: "Autonomous SaaS Factory", url: "https://flume.sh" },
      { title: "Terminal Portfolio", desc: "Interactive CLI-style website", url: "https://tylerdotai.github.io/personal-site" },
      { title: "Proof", desc: "ZK Credential Vault", url: "https://github.com/tylerdotai/proof" },
    ],
  },
  {
    category: "Community",
    items: [
      { title: "Clawplex", desc: "DFW AI Community", url: "https://www.clawplex.dev", icon: "🦞" },
    ],
  },
  {
    category: "Contact",
    items: [
      { title: "Email", desc: "tyler.delano@icloud.com", url: "mailto:tyler.delano@icloud.com" },
    ],
  },
  {
    category: "Social",
    items: [
      { title: "LinkedIn", desc: "Let's Connect", url: "https://linkedin.com/in/tylerpdelano" },
      { title: "Twitter / X", desc: "@tylerdotai", url: "https://twitter.com/tylerdotai" },
      { title: "GitHub", desc: "All the Code", url: "https://github.com/tylerdotai" },
    ],
  },
];

function getIcon(title: string, icon?: string) {
  if (icon) return icon;
  if (title === "GitHub") return "GH";
  if (title === "LinkedIn") return "in";
  if (title === "Twitter / X") return "X";
  if (title === "Email") return "@";
  return "→";
}

function getIconSafely(link: { title: string; icon?: string }) {
  return getIcon(link.title, link.icon);
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090b] py-16 px-4">
      <div className="max-w-md mx-auto">
        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden ring-2 ring-[#e94560] ring-offset-4 ring-offset-[#09090b]">
              <img 
                src="https://avatars.githubusercontent.com/u/104326457?v=4" 
                alt="Tyler Delano"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Tyler Delano</h1>
          <p className="text-zinc-500">Builder. Founder. AI Engineer.</p>
          
          <div className="flex justify-center gap-8 mt-6 text-sm">
            <div>
              <span className="text-white font-semibold">5</span>
              <span className="text-zinc-600 ml-1">Repos</span>
            </div>
            <div>
              <span className="text-white font-semibold">1</span>
              <span className="text-zinc-600 ml-1">Product</span>
            </div>
            <div>
              <span className="text-white font-semibold">∞</span>
              <span className="text-zinc-600 ml-1">Potential</span>
            </div>
          </div>
        </motion.div>

        {/* Links */}
        {links.map((section, sectionIndex) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + sectionIndex * 0.1 }}
            className="mb-8"
          >
            <h2 className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-4 pl-1">
              {section.category}
            </h2>
            <div className="space-y-3">
              {section.items.map((link, linkIndex) => (
                <motion.a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + sectionIndex * 0.1 + linkIndex * 0.05 }}
                  className="block no-underline"
                >
                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 flex items-center gap-4 hover:border-[#e94560] transition-all duration-300 hover:bg-zinc-800/50 group cursor-pointer">
                    <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-sm font-bold text-zinc-400 group-hover:bg-[#e94560] group-hover:text-white transition-colors">
                      {getIconSafely(link)}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{link.title}</p>
                      <p className="text-zinc-500 text-sm">{link.desc}</p>
                    </div>
                    <span className="text-zinc-600 group-hover:text-[#e94560] transition-colors">→</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center text-zinc-600 text-sm mt-12"
        >
          Built by <span className="text-[#e94560]">Hoss</span>
        </motion.p>
      </div>
    </div>
  );
}
