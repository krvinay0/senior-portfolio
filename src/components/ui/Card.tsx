import type { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { hoverScale } from "../../utils/motion";
import clsx from "clsx";

interface CardProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

const Card: FC<CardProps> = ({ children, className, onClick }) => {
    return (
        <motion.div
            variants={hoverScale}
            whileHover="hover"
            className={clsx(
                "card cursor-pointer transition-all",
                className
            )}
            onClick={onClick}
        >
            {children}
        </motion.div>
    );
};

export default Card;
