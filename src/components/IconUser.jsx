export default function IconUser({ size = 24, color = '#FFB800' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8" />
    </svg>
  )
}