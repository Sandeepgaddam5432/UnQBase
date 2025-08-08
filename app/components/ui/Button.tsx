import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { classNames } from '~/utils/classNames';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--unqbase-elements-borderColorActive] disabled:pointer-events-none disabled:opacity-50 shadow-sm hover:shadow-[0_8px_24px_rgba(34,211,238,0.15)]',
  {
    variants: {
      variant: {
        default:
          'bg-unqbase-elements-background text-unqbase-elements-textPrimary hover:bg-unqbase-elements-background-depth-2 border border-transparent',
        destructive: 'bg-red-500 text-white hover:bg-red-600',
        outline:
          'border border-unqbase-elements-borderColor bg-transparent hover:bg-unqbase-elements-background-depth-2 hover:text-unqbase-elements-textPrimary text-unqbase-elements-textPrimary dark:border-unqbase-elements-borderColorActive backdrop-blur',
        secondary:
          'bg-unqbase-elements-background-depth-1 text-unqbase-elements-textPrimary hover:bg-unqbase-elements-background-depth-2 border border-unqbase-elements-borderColor backdrop-blur',
        ghost: 'hover:bg-unqbase-elements-background-depth-1 hover:text-unqbase-elements-textPrimary backdrop-blur',
        link: 'text-unqbase-elements-textPrimary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  _asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, _asChild = false, ...props }, ref) => {
    return <button className={classNames(buttonVariants({ variant, size }), className)} ref={ref} {...props} />;
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
