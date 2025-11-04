"use client"

import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'

type SplashScreenProps = {
  onFinish: () => void
  durationMs?: number
}

export default function SplashScreen({ onFinish, durationMs = 2500 }: SplashScreenProps) {
  const controls = useAnimation()
  const [variant, setVariant] = useState<'brand' | 'gold'>('gold')
  const isGold = variant === 'gold'
  const accentPrimary = isGold ? '#f59e0b' : '#60a5fa'
  const accentSecondary = isGold ? '#fde68a' : '#22d3ee'
  const lineColor = isGold ? 'rgba(234,179,8,0.38)' : 'rgba(99,123,167,0.38)'
  const particleFrom = isGold ? 'rgba(253,230,138,0.75)' : 'rgba(203,213,225,0.7)'
  const particleTo = isGold ? 'rgba(245,158,11,0.6)' : 'rgba(125,211,252,0.6)'

  useEffect(() => {
    ;(async () => {
      await controls.start('visible')
    })()
  }, [controls])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
      e.preventDefault()
      onFinish()
    }
  }

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-gray-950 text-white overflow-hidden cursor-pointer"
      onClick={onFinish}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label="Skip splash and enter homepage"
    >
      {/* Premium gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#070b18] via-[#0a1230] to-[#0b1538]" />
      {/* Brand accent spotlight (deeper, richer) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            `radial-gradient(70% 60% at 50% 28%, ${isGold ? 'rgba(245,158,11,0.35)' : 'rgba(37,99,235,0.40)'} 0%, rgba(6,11,25,0) 70%)`
        }}
      />

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(120,144,180,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(120,144,180,0.12) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_70%,rgba(0,0,0,0.65)_100%)]" />

      {/* Animated diagonal lines (subtle) */}
      <motion.div
        className="absolute inset-0 opacity-[0.05]"
        initial={{ x: 0 }}
        animate={{ x: [0, -120, 0] }}
        transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage:
            `repeating-linear-gradient(135deg, ${lineColor} 0px, ${lineColor} 1px, transparent 1px, transparent 18px)`
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute block rounded-full"
            style={{
              width: 3,
              height: 3,
              left: `${6 + (i * 7) % 88}%`,
              top: `${10 + (i * 13) % 80}%`,
              background: `linear-gradient(135deg, ${particleFrom}, ${particleTo})`,
              boxShadow: `0 0 10px ${isGold ? 'rgba(245,158,11,0.28)' : 'rgba(56,189,248,0.28)'}`
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.85, 0.3],
              scale: [1, 1.18, 1]
            }}
            transition={{ duration: 5 + (i % 4), repeat: Infinity, ease: 'easeInOut', delay: i * 0.18 }}
          />
        ))}
      </div>

      {/* Globe-forming block animation */}
      <GlobeBlocks />

      {/* Toned-down ambient glows */}
      <motion.div
        className="absolute w-80 h-80 rounded-full blur-3xl"
        animate={{ x: [0, 90, -70, 0], y: [0, -50, 70, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '12%', left: '14%', background: `radial-gradient(circle at 30% 30%, ${isGold ? 'rgba(245,158,11,0.22)' : 'rgba(59,130,246,0.24)'}, rgba(0,0,0,0))` }}
      />
      <motion.div
        className="absolute w-[28rem] h-[28rem] rounded-full blur-[100px]"
        animate={{ x: [0, -100, 80, 0], y: [0, 70, -80, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        style={{ bottom: '10%', right: '12%', background: `radial-gradient(circle at 70% 70%, ${isGold ? 'rgba(250,204,21,0.18)' : 'rgba(6,182,212,0.2)'}, rgba(0,0,0,0))` }}
      />

      {/* Logo + name refined animation with glass panel */}
      <motion.div
        className="relative flex flex-col items-center"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          // add entrance delay so denser globe can complete first
          visible: { opacity: 1, transition: { delayChildren: 1.2, staggerChildren: 0.12 } },
        }}
      >
        {/* Glass card */}
        <div className="absolute -inset-x-16 -inset-y-10 rounded-3xl bg-white/6 backdrop-blur-md ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]" />
        {/* Glass edge light */}
        <div className="absolute -inset-x-16 -inset-y-10 rounded-3xl pointer-events-none" style={{ boxShadow: `inset 0 0 0 1px ${isGold ? 'rgba(245,158,11,0.18)' : 'rgba(99,102,241,0.15)'}` }} />
        {/* Concentric rings behind logo */}
        <motion.div
          className="absolute -inset-16 flex items-center justify-center"
          variants={{ hidden: { scale: 0.9, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
        >
          <motion.div
            className="w-56 h-56 rounded-full"
            style={{ boxShadow: 'inset 0 0 0 1px rgba(96,165,250,0.25)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute w-72 h-72 rounded-full"
            style={{ boxShadow: 'inset 0 0 0 1px rgba(147,197,253,0.18)' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

        {/* Logo */}
        <motion.div
          className="relative mb-4"
          variants={{
            hidden: { y: 20, opacity: 0, scale: 0.9 },
            visible: { y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 180, damping: 16 } },
          }}
        >
          <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/30 ring-1 ring-white/10 backdrop-blur">
            <Image src="/logo.png" alt="Trivexa Technologies" width={80} height={80} className="w-full h-full object-cover" />
          </div>
          <motion.div
            className="absolute -inset-2 rounded-3xl blur-xl"
            style={{ background: `linear-gradient(135deg, ${accentPrimary}33, ${accentSecondary}33)` }}
            animate={{ opacity: [0.16, 0.42, 0.16] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
        </motion.div>

        {/* Company name with professional typesetting */
        }
        <motion.div
          className="relative text-[28px] md:text-[36px] font-semibold tracking-tight"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          {Array.from('Trivexa Technologies').map((ch, idx) => (
            <motion.span
              key={idx}
              className="inline-block bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(90deg, ${isGold ? '#fff7ed' : '#e0e7ff'}, ${accentPrimary}, ${accentSecondary})` }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 * idx, type: 'spring', stiffness: 250, damping: 18 }}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </motion.span>
          ))}
          {/* Accent underline */}
          <motion.div
            className="absolute -bottom-2 left-1/2 h-[2px] w-2/3 -translate-x-1/2"
            style={{ background: `linear-gradient(90deg, transparent, ${isGold ? '#f59e0b' : accentPrimary}, transparent)` }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="mt-3 text-sm md:text-base text-gray-100/90"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.6 } } }}
        >
          Enterprise Blockchain • Web3 • Smart Contracts
        </motion.p>
      </motion.div>

      {/* Reveal overlay fade */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-gray-950"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: Math.max(0, (durationMs - 600) / 1000) }}
      />

      {/* Variant toggle (Blue/GOLD) */}
      <button
        onClick={(e) => { e.stopPropagation(); setVariant(v => v === 'gold' ? 'brand' : 'gold') }}
        className="absolute top-4 right-4 text-xs md:text-sm px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/15 text-white backdrop-blur transition-colors"
        aria-label="Toggle splash theme variant"
      >
        {variant === 'gold' ? 'Gold' : 'Blue'} Mode
      </button>

      {/* Tap to continue hint */}
      <motion.div
        className="absolute bottom-8 inset-x-0 flex items-center justify-center px-4"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: [0, 1, 1, 0.7, 1], y: 0 }}
        transition={{ delay: 1.5, duration: 1.6, repeat: Infinity, repeatDelay: 0.3 }}
      >
        <span className="text-xs md:text-sm text-gray-300/90 bg-gray-900/50 backdrop-blur rounded-full px-4 py-2 ring-1 ring-white/10">
          Tap anywhere to continue<span className="hidden sm:inline">  •  Press Enter/Space/Escape</span>
        </span>
      </motion.div>
    </div>
  )
}


function GlobeBlocks() {
  const BLOCK_COUNT = 220
  const RADIUS = 180 // px

  const blocks = useMemo(() => {
    // Distribute target points in concentric rings to simulate a globe silhouette
    const result: Array<{
      xStart: number
      yStart: number
      xTarget: number
      yTarget: number
      depth: number
      delay: number
      size: number
    }> = []

    const rings = 6
    let index = 0
    for (let r = 0; r < rings; r++) {
      const ringRadius = RADIUS * (1 - r / (rings - 1) * 0.85) // inner rings smaller
      const perRing = Math.round(BLOCK_COUNT / rings)
      const golden = Math.PI * (3 - Math.sqrt(5))
      for (let k = 0; k < perRing && index < BLOCK_COUNT; k++, index++) {
        const angle = (k * golden + r * 0.3) % (Math.PI * 2)
        const xT = Math.cos(angle) * ringRadius
        const yT = Math.sin(angle) * ringRadius * 0.65 // vertical squish to hint sphere
        const depth = 0.5 + 0.5 * Math.cos(angle) // simulate front/back by angle
        // Start positions scattered across viewport center area
        const xS = (Math.random() - 0.5) * 900
        const yS = (Math.random() - 0.5) * 700
        const delay = 0.25 + (r * 0.1) + (k % 12) * 0.025
        const size = 3 + Math.round(depth * 3)
        result.push({ xStart: xS, yStart: yS, xTarget: xT, yTarget: yT, depth, delay, size })
      }
    }
    return result
  }, [])

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-[460px] h-[460px]">
        {blocks.map((b, i) => (
          <motion.div
            key={i}
            className="absolute rounded-[2px]"
            style={{
              left: '50%',
              top: '50%',
              width: b.size,
              height: b.size,
              background:
                'linear-gradient(135deg, rgba(147,197,253,0.9), rgba(59,130,246,0.85))',
              boxShadow: '0 0 8px rgba(59,130,246,0.25)'
            }}
            initial={{ x: b.xStart, y: b.yStart, opacity: 0, scale: 0.7 }}
            animate={{
              x: b.xTarget,
              y: b.yTarget,
              opacity: 0.9 - b.depth * 0.3,
              scale: 0.9 + b.depth * 0.2,
              filter: 'saturate(1)'
            }}
            transition={{
              delay: b.delay,
              type: 'spring',
              stiffness: 110,
              damping: 22
            }}
          />
        ))}

        {/* Subtle rotating highlight ring to suggest a globe */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ width: RADIUS * 2, height: RADIUS * 2, boxShadow: 'inset 0 0 0 1px rgba(96,165,250,0.18)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </div>
  )
}


