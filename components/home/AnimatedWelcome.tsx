"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type AnimatedWelcomeProps = {
  typingDelayMs?: number
  subtitleTypingDelayMs?: number
}

export default function AnimatedWelcome({ typingDelayMs = 45, subtitleTypingDelayMs = 55 }: AnimatedWelcomeProps) {
  const headline = 'Welcome to Trivexa Technologies'
  const subtitle = 'Your premier blockchain development partner'

  const [typed, setTyped] = useState('')
  const [typedSub, setTypedSub] = useState('')
  const [started, setStarted] = useState(false)
  const [phase, setPhase] = useState<'typingHead' | 'typingSub' | 'pause' | 'deletingSub' | 'deletingHead'>('typingHead')

  useEffect(() => {
    setStarted(true)
  }, [])

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null
    const typeSpeed = Math.max(10, phase === 'typingHead' ? typingDelayMs : subtitleTypingDelayMs)
    const deleteSpeed = 30

    const tick = () => {
      if (phase === 'typingHead') {
        const next = headline.slice(0, typed.length + 1)
        setTyped(next)
        if (next.length >= headline.length) {
          setPhase('typingSub')
        }
        timeoutId = setTimeout(tick, typeSpeed)
        return
      }
      if (phase === 'typingSub') {
        const next = subtitle.slice(0, typedSub.length + 1)
        setTypedSub(next)
        if (next.length >= subtitle.length) {
          setPhase('pause')
          timeoutId = setTimeout(tick, 1000)
          return
        }
        timeoutId = setTimeout(tick, typeSpeed)
        return
      }
      if (phase === 'pause') {
        setPhase('deletingSub')
        timeoutId = setTimeout(tick, deleteSpeed)
        return
      }
      if (phase === 'deletingSub') {
        const next = subtitle.slice(0, Math.max(0, typedSub.length - 1))
        setTypedSub(next)
        if (next.length === 0) {
          setPhase('deletingHead')
          timeoutId = setTimeout(tick, deleteSpeed)
          return
        }
        timeoutId = setTimeout(tick, deleteSpeed)
        return
      }
      if (phase === 'deletingHead') {
        const next = headline.slice(0, Math.max(0, typed.length - 1))
        setTyped(next)
        if (next.length === 0) {
          setPhase('typingHead')
          timeoutId = setTimeout(tick, 500)
          return
        }
        timeoutId = setTimeout(tick, deleteSpeed)
        return
      }
    }

    timeoutId = setTimeout(tick, 200)
    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [phase, typed.length, typedSub.length, typingDelayMs, subtitleTypingDelayMs, headline, subtitle])

  return (
    <section className="relative overflow-hidden">
      {/* Premium gradient background layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0f1d] via-[#0a1430] to-[#0b1538]" />
      {/* Soft brand spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_30%,rgba(245,158,11,0.25)_0%,rgba(8,10,20,0)_70%)]" />

      {/* Animated ambient glows */}
      <motion.div
        className="absolute w-80 h-80 rounded-full blur-3xl"
        style={{ top: '12%', left: '10%', background: 'radial-gradient(circle at 30% 30%, rgba(59,130,246,0.28), rgba(0,0,0,0))' }}
        animate={{ x: [0, 70, -50, 0], y: [0, -40, 55, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[28rem] h-[28rem] rounded-full blur-[100px]"
        style={{ bottom: '8%', right: '10%', background: 'radial-gradient(circle at 70% 70%, rgba(250,204,21,0.18), rgba(0,0,0,0))' }}
        animate={{ x: [0, -80, 60, 0], y: [0, 60, -70, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative container-custom py-28 md:py-36 text-center">
        {/* Small premium label */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs md:text-sm bg-white/5 ring-1 ring-white/10 backdrop-blur text-white"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
          Enterprise Blockchain Solutions
        </motion.div>

        {/* Typing headline */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: started ? 1 : 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-[32px] leading-tight md:text-6xl font-extrabold tracking-tight"
        >
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(90deg, #fff7ed, #f59e0b, #22d3ee)',
            }}
          >
            {typed}
          <span className="align-baseline text-white">{phase === 'typingHead' || phase === 'deletingHead' ? '|' : ''}</span>
          </span>
        </motion.h1>

        {/* Subheadline with reveal */}
        <motion.p
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-4 text-lg md:text-2xl text-gray-200/90"
        >
          {typedSub}
          <span className="align-baseline text-white">{phase === 'typingSub' || phase === 'deletingSub' ? '|' : ''}</span>
        </motion.p>

        {/* Underline reveal */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mx-auto mt-6 h-[2px] w-2/3 max-w-2xl"
          style={{ background: 'linear-gradient(90deg, transparent, #f59e0b, transparent)' }}
        />

        {/* CTA buttons */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a
            href="/services"
            className="px-5 py-2.5 rounded-lg bg-white text-gray-900 font-semibold shadow/60 hover:shadow transition-shadow"
          >
            Explore Services
          </a>
          <a
            href="/contact"
            className="px-5 py-2.5 rounded-lg bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15 backdrop-blur"
          >
            Talk to Experts
          </a>
        </motion.div>
      </div>
    </section>
  )
}


