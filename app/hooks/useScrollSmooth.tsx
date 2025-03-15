import { useEffect } from 'react'

export default function useScrollSmooth() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const id = target.getAttribute('href')?.slice(1)
        const element = document.getElementById(id!)
        element?.scrollIntoView({ behavior: 'smooth' })
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])
} 