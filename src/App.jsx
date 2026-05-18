import { useEffect, useState } from 'react'
import NeuralCard from './components/NeuralCard'

const CARD_W = 876.62
const CARD_H = 623.38

// cover: fills viewport, clips edges symmetrically
const coverScale = (vw, vh) => Math.max(vw / CARD_W, vh / CARD_H)

export default function App() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const update = () => setScale(coverScale(window.innerWidth, window.innerHeight))
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      overflow: 'hidden',
      background: '#060606',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
        width: CARD_W,
        height: CARD_H,
        flexShrink: 0,
      }}>
        <NeuralCard active={true} />
      </div>
    </div>
  )
}
