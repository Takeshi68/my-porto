"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import SpotifyCard from "@/components/spotify-card"
import { motion } from "framer-motion"

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Page() {
  const stacks = ["HTML", "CSS", "JavaScript", "Python", "TypeScript"] as const
  const roadmap = [
    { year: "2022", title: "Creator Bot", detail: "Built and iterated on a creator-focused bot." },
    // The user specified 2022 and 2024. We'll include those exactly as requested.
    { year: "2024", title: "AI Prompter Engineer", detail: "Focused on prompt engineering and AI-driven workflows." },
  ]

  return (
    <div className="space-y-12">
      {/* Hero */}
      <motion.section variants={fadeUp} initial="initial" animate="animate">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-8 backdrop-blur">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-24 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(110,231,183,0.08),rgba(217,70,239,0.08),transparent)]"
          />
          <div className="relative">
            <p className="mb-3 text-sm uppercase tracking-widest text-zinc-400">Hello there</p>
            <h1 className="bg-gradient-to-r from-emerald-400 via-emerald-200 to-fuchsia-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
              Futuristic Portfolio
            </h1>
            <p className="mt-4 max-w-2xl text-zinc-300">
              I am a vocational high school student from Central Java majoring in automotive and I enjoy coding.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-4"
      >
        <h2 className="text-lg font-semibold text-zinc-200">Tech Stack</h2>
        <Card className="border-white/10 bg-zinc-900/60 backdrop-blur">
          <CardContent className="flex flex-wrap gap-2 p-6">
            {stacks.map((s, idx) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.4 }}
              >
                <Badge
                  variant="secondary"
                  className="rounded-full border-white/10 bg-zinc-800/60 px-3 py-1 text-zinc-200 hover:bg-emerald-600/20 hover:text-emerald-200"
                >
                  {s}
                </Badge>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.section>

      {/* Roadmap */}
      <motion.section variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.3 }}>
        <h2 className="mb-4 text-lg font-semibold text-zinc-200">Roadmap</h2>
        <div className="relative">
          <div
            className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-white/10 to-fuchsia-500/50"
            aria-hidden
          />
          <div className="space-y-6">
            {roadmap.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.45 }}
                className="relative pl-12"
              >
                <span
                  className="absolute left-[14px] top-2 size-2.5 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-400 to-fuchsia-400 shadow-[0_0_16px_rgba(110,231,183,0.6)]"
                  aria-hidden
                />
                <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-4 backdrop-blur">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="text-xs font-mono tracking-widest text-emerald-300">{item.year}</span>
                    <span className="text-sm font-semibold text-zinc-100">{item.title}</span>
                  </div>
                  {item.detail ? <p className="mt-2 text-sm text-zinc-400">{item.detail}</p> : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Spotify */}
      <motion.section variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.3 }}>
        <h2 className="mb-4 text-lg font-semibold text-zinc-200">Now Playing</h2>
        <SpotifyCard />
      </motion.section>
    </div>
  )
}
