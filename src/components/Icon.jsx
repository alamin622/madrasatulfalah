import {
  Sprout, BookOpen, BookMarked, Repeat, Trophy, GraduationCap, BedDouble, Home, Sun,
  HeartHandshake, Layers, LineChart, Smile, Lightbulb, MessagesSquare,
} from 'lucide-react'

const MAP = {
  Sprout, BookOpen, BookMarked, Repeat, Trophy, GraduationCap, BedDouble, Home, Sun,
  HeartHandshake, Layers, LineChart, Smile, Lightbulb, MessagesSquare,
}

export default function Icon({ name, ...props }) {
  const C = MAP[name] || BookOpen
  return <C aria-hidden="true" {...props} />
}
