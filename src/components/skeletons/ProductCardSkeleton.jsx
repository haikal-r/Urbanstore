import { CardSkeleton } from '@/components/ui/skeleton'

const ProductCardSkeleton = () => {
  return (
    <>
    {Array.from({ length: 8 }).map((_, i) => (
      <CardSkeleton key={i} />
    ))}    
    </>
  )
}

export default ProductCardSkeleton
