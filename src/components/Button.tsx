export type ButtonProps = {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

export const Button = ({ className = '', ...props }: ButtonProps) => (
  <button
    className={`bg-white border border-gray-300 text-gray-800 cursor-pointer justify-center py-[calc(0.5em-1px)] px-4 text-center whitespace-nowrap hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded focus:ring-opacity-25 active:border-gray-700 ${className}`}
    {...props}
  />
);

