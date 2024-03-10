import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'

function Skeleton({
  className,
  ...props
}) {
  return (<div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />);
}

function CardSkeleton() {
  return (
    <Card className='h-full overflow-hidden rounded-2xl'>
      <CardHeader className='p-0'>
        <AspectRatio ratio={1 / 1} className='m-3'>
          <div className='absolute rounded-2xl inset-0 bg-gradient-to-t from-transparent to-zinc-950/50' />
          <Skeleton className='w-full h-full rounded-2xl' />
        </AspectRatio>
      </CardHeader>
      <CardContent className='grid gap-2.5 p-4'>
        <Skeleton className='h-4 w-1/2' />
        <Skeleton className='h-4 w-1/4' />
      </CardContent>
      <CardFooter className='p-4'>
        <Skeleton className='h-8 w-full' />
      </CardFooter>
    </Card>
  )
}

export { Skeleton, CardSkeleton }
