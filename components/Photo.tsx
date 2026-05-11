'use client'

interface PhotoProps {
  src: string
  alt: string
  className?: string
  fallbackLabel?: string
}

export default function Photo({ src, alt, className = '', fallbackLabel }: PhotoProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          const img = e.target as HTMLImageElement
          img.style.display = 'none'
          const parent = img.parentElement
          if (parent) {
            parent.querySelector('.photo-fallback')?.classList.remove('hidden')
          }
        }}
      />
      <div className="photo-fallback hidden absolute inset-0 flex items-center justify-center">
        {fallbackLabel && (
          <p className="font-cormorant italic text-sm text-gold/50">{fallbackLabel}</p>
        )}
      </div>
    </div>
  )
}
