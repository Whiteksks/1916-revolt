import LogoSvg from '@/components/assets/logo'

import { cn } from '@/lib/utils'

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <LogoSvg className='size-8.5' />
      <span className='text-xl font-semibold'>1916 Revolt</span>
    </div>
  )
}

export default Logo
