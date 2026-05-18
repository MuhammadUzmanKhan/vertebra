import { useEffect, useState } from 'react'
import NeuralCard from './components/NeuralCard'

const CARD_W = 876.62
const CARD_H = 623.38

export default function App() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth
      const vh = window.innerHeight
      setScale(Math.min(vw / CARD_W, vh / CARD_H))
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      overflow: 'hidden',
      background: '#000000',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
    }}>
      <div style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top center',
        width: CARD_W,
        height: CARD_H,
        flexShrink: 0,
      }}>
        <NeuralCard active={true} />
      </div>
    </div>
  )
}
