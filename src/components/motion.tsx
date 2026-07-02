import { motion, type Variants } from 'motion/react'
import type { ReactNode } from 'react'

const EASE = [0.22, 1, 0.36, 1] as const

const VIEWPORT = { once: true, margin: '0px 0px -12% 0px' } as const

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: EASE, delay },
        },
      }}
      viewport={VIEWPORT}
      whileInView="visible"
    >
      {children}
    </motion.div>
  )
}

export function RevealGroup({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.08, delayChildren: delay },
        },
      }}
      viewport={VIEWPORT}
      whileInView="visible"
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className }: RevealProps) {
  return (
    <motion.div className={className} variants={revealItem}>
      {children}
    </motion.div>
  )
}
