// Gambar dengan fallback otomatis jika file gagal dimuat.
const FALLBACK = '/images/placeholder.svg'

function SmartImage({ src, alt, className = '', loading = 'lazy' }) {
  const handleError = (event) => {
    const img = event.currentTarget
    if (!img.src.endsWith(FALLBACK)) {
      img.src = FALLBACK
    }
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading={loading}
      onError={handleError}
    />
  )
}

export default SmartImage
