import type { FC } from 'react';

export const EmailIcon: FC<{ className?: string }> = ({ className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        width="18"
        height="18"
    >
        <path d="M4 4h16v16H4z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

export default EmailIcon;
