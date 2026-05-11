'use client'

import Image from 'next/image'
import { useState } from 'react'

interface PhotoProps {
  src: string
  alt: string
  className?: string
  fallbackLabel?: string
}

export default function Photo({ src, alt, className = '', fallbackLabel }: PhotoProps) {
  const [error, setError] = useState(false)

  return (
    <div className={`relative w-full h-full ${className}`}>
      {!error && (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          onError={() => setError(true)}
        />
      )}
      {error && (
        <div className="photo-fallback absolute inset-0 flex items-center justify-center">
          {fallbackLabel && (
            <p className="font-cormorant italic text-sm text-gold/50">{fallbackLabel}</p>
          )}
        </div>
      )}
    </div>
  )
}
