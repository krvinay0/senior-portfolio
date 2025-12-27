import type { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
  download?: string | boolean;
  ariaLabel?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  target,
  download,
  ariaLabel,
}) => {
  const baseClasses =
    "px-5 py-2 rounded-lg font-medium text-sm md:text-base transition-all inline-block";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/80",
    secondary: "bg-slate-800 text-slate-200 hover:bg-slate-700",
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        download={download as any}
        aria-label={ariaLabel}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className={clsx(baseClasses, variants[variant], className)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      aria-label={ariaLabel}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(baseClasses, variants[variant], className)}
    >
      {children}
    </motion.button>
  );
};

export default Button;
