import { useEffect, useRef } from 'react'
import { NeatGradient, type NeatConfig } from '@firecms/neat'

const config: NeatConfig = {
  colors: [
    {
      color: '#C7D2FE',
      enabled: true,
    },
    {
      color: '#A5B4FC',
      enabled: true,
    },
    {
      color: '#818CF8',
      enabled: true,
    },
    {
      color: '#6366F1',
      enabled: true,
    },
    {
      color: '#FFFFFF',
      enabled: false,
    },
    {
      color: '#<n>000000</n>',
      enabled: false,
    },
  ],
  speed: 1.5,
  horizontalPressure: 5,
  verticalPressure: 5,
  waveFrequencyX: 2,
  waveFrequencyY: 3,
  waveAmplitude: 6,
  shadows: 0,
  highlights: 5,
  colorBrightness: 0.8,
  colorSaturation: 10,
  wireframe: false,
  colorBlending: 5,
  backgroundColor: '#FFFFFF',
  backgroundAlpha: 1,
  grainScale: 0,
  grainSparsity: 0,
  grainIntensity: 0.125,
  grainSpeed: 0,
  resolution: 1,
  yOffset: 0,
  yOffsetWaveMultiplier: 1,
  yOffsetColorMultiplier: 4.8,
  yOffsetFlowMultiplier: 5.3,
  flowDistortionA: 3.7,
  flowDistortionB: 0.8,
  flowScale: 1.5,
  flowEase: 0.21,
  flowEnabled: true,
  enableProceduralTexture: false,
  transparentTextureVoid: true,
  textureVoidLikelihood: 0.29,
  textureVoidWidthMin: 120,
  textureVoidWidthMax: 420,
  textureBandDensity: 2.9,
  textureColorBlending: 0.06,
  textureSeed: 536,
  textureEase: 0.93,
  proceduralBackgroundColor: '#<n>775454</n>',
  textureShapeTriangles: 48,
  textureShapeCircles: 15,
  textureShapeBars: 15,
  textureShapeSquiggles: 27,
  domainWarpEnabled: true,
  domainWarpIntensity: 0.1,
  domainWarpScale: 1.1,
  vignetteIntensity: 0,
  vignetteRadius: 0.55,
  fresnelEnabled: false,
  fresnelPower: 2.1,
  fresnelIntensity: 0.2,
  fresnelColor: '#00FFFF',
  iridescenceEnabled: false,
  iridescenceIntensity: 0.5,
  iridescenceSpeed: 1,
  bloomIntensity: 1.9,
  bloomThreshold: 0.6,
  chromaticAberration: 0,
  shapeType: 'ribbon',
  shapeRotationX: 0.3480000000000001,
  shapeRotationY: -26.783,
  shapeRotationZ: -0.29,
  shapeAutoRotateSpeedX: 0,
  shapeAutoRotateSpeedY: 0,
  sphereRadius: 15,
  torusRadius: 15,
  torusTube: 5,
  cylinderRadius: 10,
  cylinderHeight: 40,
  planeBend: 3,
  planeTwist: -2.9,
  silhouetteFade: 0.83,
  cylinderFade: 0.08,
  ribbonFade: 0.25,
  flatShading: false,
  cameraLock: false,
  cameraX: 0,
  cameraY: 0,
  cameraZ: 0,
  cameraRotationX: -0.014,
  cameraRotationY: -0.23800000000000002,
  cameraRotationZ: 0,
  cameraZoom: 1,
}

export function BackgroundRibbon() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const mediaQuery = window.matchMedia('(min-width: 1024px)')
    let gradient: NeatGradient | null = null
    let isVisible = false

    const handleScroll = () => {
      if (gradient) {
        gradient.yOffset = window.scrollY
      }
    }

    const destroyGradient = () => {
      gradient?.destroy()
      gradient = null
    }

    const syncGradient = () => {
      if (!mediaQuery.matches || !isVisible) {
        destroyGradient()
        return
      }

      if (!gradient) {
        gradient = new NeatGradient({
          ref: canvas,
          ...config,
        })
      }

      gradient.yOffset = window.scrollY
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
        syncGradient()
      },
      { rootMargin: '200px' },
    )
    observer.observe(canvas)

    window.addEventListener('scroll', handleScroll, { passive: true })
    mediaQuery.addEventListener('change', syncGradient)
    syncGradient()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
      mediaQuery.removeEventListener('change', syncGradient)
      destroyGradient()
    }
  }, [])

  return (
    <canvas
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-[58%] -z-10 hidden h-full w-[58rem] lg:block xl:left-[54%] xl:w-[68rem]"
      ref={canvasRef}
    />
  )
}
