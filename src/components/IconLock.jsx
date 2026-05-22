export default function IconLock({ size = 24, color = '#FFB800' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M17 11H7a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2z" fill={color} />
      <path d="M8 11V7a4 4 0 118 0" stroke={color} strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <circle cx="12" cy="16" r="1.5" fill="white" />
      <rect x="11.15" y="16" width="1.7" height="2.5" rx="0.85" fill="white" />
    </svg>
  )
}