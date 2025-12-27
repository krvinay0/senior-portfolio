import type { FC, ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
    return (
        <div
            className={clsx(
                "max-w-7xl mx-auto px-6 md:px-16 w-full",
                className
            )}
        >
            {children}
        </div>
    );
};

export default Container;
