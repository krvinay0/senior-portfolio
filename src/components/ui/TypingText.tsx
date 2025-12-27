import { useEffect, useState } from 'react';

interface TypingTextProps {
    text: string;
    speed?: number; // ms per char
    className?: string;
}

export default function TypingText({ text, speed = 60, className }: TypingTextProps) {
    const [display, setDisplay] = useState('');

    useEffect(() => {
        let i = 0;
        setDisplay('');
        const t = setInterval(() => {
            setDisplay((d) => d + text.charAt(i));
            i += 1;
            if (i >= text.length) clearInterval(t);
        }, speed);
        return () => clearInterval(t);
    }, [text, speed]);

    return <span className={className}>{display}</span>;
}
