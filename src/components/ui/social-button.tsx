import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const sovialButtonVariants = cva(
  'relative z-10 flex items-center justify-center transition-all after:absolute after:left-1/2 after:top-1/2 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-cyan-800 after:transition-all after:-translate-x-1/2 after:-translate-y-1/2 after:scale-[0] hover:text-slate-50 hover:after:scale-[1.4]'
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof sovialButtonVariants> {
  asChild?: boolean;
}

const SocialButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(sovialButtonVariants({ className }))} ref={ref} {...props} />;
  }
);
SocialButton.displayName = 'SocialButton';

export { SocialButton };
