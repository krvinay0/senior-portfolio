export default function Avatar({ size = 96 }: { size?: number }) {
    const initials = 'VK';
    return (
        <div style={{ width: size, height: size }} className="rounded-full bg-gradient-to-br from-primary/80 to-indigo-600 flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl md:text-2xl">{initials}</span>
        </div>
    );
}
