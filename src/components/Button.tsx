import { tv } from 'tailwind-variants';
import { classNames } from '@/lib/classNames';

const buttonVariants = tv({
  base: 'justify-center py-[calc(0.5em-1px)] px-4 text-center whitespace-nowrap hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded focus:ring-opacity-25 active:border-gray-700 disabled:pointer-events-none focus:outline-hidden',
  variants: {
    color: {
      default: 'bg-white border border-gray-300 text-gray-800',
      primary: 'bg-blue-600 border border-blue-600 text-white',
      secondary: 'bg-gray-200 border border-gray-200 text-gray-900',
    },
    isActive: {
      true: {
        color: {
          default: 'bg-blue-700 border border-blue-700 text-white',
        },
      },
    },
  },
  defaultVariants: {
    color: 'default',
  },
});

export type ButtonProps = {
  isActive?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className = '', isActive, ...props }: ButtonProps) => (
  <button className={classNames(buttonVariants({ isActive }), className)} {...props} />
);
