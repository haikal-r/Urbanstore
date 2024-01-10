import { cn } from '@/lib/utils'

const IconButton= ({
  onClick,
  icon,
  className,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-full flex items-center justify-center bg-white border shadow-md p-2 duration-300 transition-all',
        className,
      )}
      {...props}
    >
      {icon}
    </button>
  )
}

export default IconButton