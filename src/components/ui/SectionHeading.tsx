import type { FC } from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
}

const SectionHeading: FC<SectionHeadingProps> = ({ title, subtitle }) => {
    return (
        <div className="mb-8 text-center md:text-left">
            <motion.h2 className="text-3xl md:text-4xl font-bold inline-block border-b-4 border-primary pb-2"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                {title}
            </motion.h2>
            <div className="mt-3 h-1 w-20 rounded bg-gradient-to-r from-primary/50 to-transparent" />
            {subtitle && (
                <p className="mt-2 text-muted text-sm md:text-base max-w-xl">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeading;
