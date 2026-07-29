'use client'

import type { Variants } from 'motion/react'
import {
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react'

const EASING = 'cubic-bezier(0.22, 1, 0.36, 1)'
const REVEAL_MARGIN = '0px 0px -12% 0px'
const LOGO_MARGIN = '0px 0px -10% 0px'

const REVEAL_KEYFRAMES: Keyframe[] = [
  { opacity: 0, transform: 'translateY(24px)' },
  { opacity: 1, transform: 'none' },
]

const LOGO_KEYFRAMES: Keyframe[] = [
  { opacity: 0, transform: 'scale(0.9)' },
  { opacity: 1, transform: 'none' },
]

// Existing card components still accept this prop. RevealGroup now animates
// their rendered elements without serializing Motion styles into the HTML.
export const revealItem: Variants = {}

type ViewportAnimationOptions = {
  delay?: number
  duration: number
  rootMargin: string
  stagger?: number
  target?: 'self' | 'children'
}

function useViewportAnimation<T extends HTMLElement>(
  keyframes: Keyframe[],
  {
    delay = 0,
    duration,
    rootMargin,
    stagger = 0,
    target = 'self',
  }: ViewportAnimationOptions,
) {
  const ref = useRef<T>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const host = ref.current
    if (!host || hasAnimated.current) {
      return
    }

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (
      reducedMotion ||
      !('IntersectionObserver' in window) ||
      typeof host.animate !== 'function'
    ) {
      host.removeAttribute('data-viewport-animation')
      hasAnimated.current = true
      return
    }

    const targets =
      target === 'children'
        ? Array.from(host.children).filter(
            (child): child is HTMLElement => child instanceof HTMLElement,
          )
        : [host]
    let animations: Animation[] = []

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        host.removeAttribute('data-viewport-animation')
        hasAnimated.current = true
        animations = targets.map((element, index) => {
          const animation = element.animate(keyframes, {
            delay: (delay + index * stagger) * 1000,
            duration,
            easing: EASING,
            fill: 'both',
          })

          void animation.finished
            .then(() => animation.cancel())
            .catch(() => undefined)

          return animation
        })
        observer.disconnect()
      },
      { rootMargin },
    )

    observer.observe(host)

    return () => {
      observer.disconnect()
      animations.forEach((animation) => animation.cancel())
    }
  }, [delay, duration, keyframes, rootMargin, stagger, target])

  return ref
}

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useViewportAnimation<HTMLDivElement>(REVEAL_KEYFRAMES, {
    delay,
    duration: 600,
    rootMargin: REVEAL_MARGIN,
  })

  return (
    <div className={className} data-viewport-animation="reveal" ref={ref}>
      {children}
    </div>
  )
}

export function RevealGroup({ children, className, delay = 0 }: RevealProps) {
  const ref = useViewportAnimation<HTMLDivElement>(REVEAL_KEYFRAMES, {
    delay,
    duration: 550,
    rootMargin: REVEAL_MARGIN,
    stagger: 0.08,
    target: 'children',
  })

  return (
    <div className={className} data-viewport-animation="reveal-group" ref={ref}>
      {children}
    </div>
  )
}

export function RevealItem({ children, className }: RevealProps) {
  return <div className={className}>{children}</div>
}

type RevealScaleImageProps = ComponentPropsWithoutRef<'img'> & {
  delay?: number
}

export function RevealScaleImage({
  delay = 0,
  ...props
}: RevealScaleImageProps) {
  const ref = useViewportAnimation<HTMLImageElement>(LOGO_KEYFRAMES, {
    delay,
    duration: 450,
    rootMargin: LOGO_MARGIN,
  })

  return <img data-viewport-animation="scale" ref={ref} {...props} />
}
