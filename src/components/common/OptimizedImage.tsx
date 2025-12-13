'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = '',
  sizes,
  quality = 75,
  placeholder,
  blurDataURL,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Default sizes for responsive images
  const defaultSizes = fill
    ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
    : undefined;

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width: width || '100%', height: height || '100%' }}
        role="img"
        aria-label={alt}
      >
        <span className="text-gray-400 text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <div className={`relative ${fill ? 'w-full h-full' : ''}`}>
      {isLoading && !priority && (
        <div 
          className="absolute inset-0 bg-gray-100 animate-pulse"
          style={{ width: width || '100%', height: height || '100%' }}
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        priority={priority}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        sizes={sizes || defaultSizes}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />
    </div>
  );
}