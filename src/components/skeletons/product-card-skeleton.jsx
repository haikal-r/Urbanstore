import { CardSkeleton } from '@/components/ui/skeleton'

const ProductCardSkeleton = ({ skeleton }) => {
  return (
    <>
    {Array.from({ length: skeleton }).map((_, i) => (
      <CardSkeleton key={i} />
    ))}    
    </>
  )
}

export default ProductCardSkeleton
