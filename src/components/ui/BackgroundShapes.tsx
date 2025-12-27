export default function BackgroundShapes() {
    return (
        <svg className="pointer-events-none absolute inset-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.06" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.04" />
                </linearGradient>
            </defs>
            <rect x="-10" y="-50" width="400" height="400" rx="40" fill="url(#g1)" transform="rotate(-12 200 150)" />
            <circle cx="720" cy="80" r="120" fill="#0ea5e980" />
            <circle cx="90" cy="440" r="160" fill="#6366f140" />
        </svg>
    );
}