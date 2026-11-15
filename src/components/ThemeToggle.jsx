import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ theme, onToggle }) {
  const dark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={dark ? 'লাইট মোডে যান' : 'ডার্ক মোডে যান'}
      title={dark ? 'Light mode' : 'Dark mode'}
      className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-gold-text hover:bg-gold/10"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
