import { motion } from "framer-motion";

export default function ArchitectureDiagram() {
    return (
        <motion.svg
            viewBox="0 0 800 360"
            className="w-full h-auto border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            {/* Boxes */}
            <rect x="40" y="140" width="200" height="80" rx="12" fill="#0ea5e9" />
            <rect x="300" y="40" width="220" height="80" rx="12" fill="#22c55e" />
            <rect x="300" y="240" width="220" height="80" rx="12" fill="#f97316" />
            <rect x="580" y="140" width="180" height="80" rx="12" fill="#6366f1" />

            {/* Text */}
            <text x="140" y="185" fill="white" textAnchor="middle" fontSize="14">
                Frontend (React / Angular)
            </text>

            <text x="410" y="85" fill="white" textAnchor="middle" fontSize="14">
                Auth & RBAC
            </text>

            <text x="410" y="285" fill="white" textAnchor="middle" fontSize="14">
                Pricing & Wallet
            </text>

            <text x="670" y="185" fill="white" textAnchor="middle" fontSize="14">
                APIs / DB
            </text>

            {/* Arrows */}
            <line x1="240" y1="180" x2="300" y2="80" stroke="#94a3b8" strokeWidth="2" />
            <line x1="240" y1="180" x2="300" y2="280" stroke="#94a3b8" strokeWidth="2" />
            <line x1="520" y1="80" x2="580" y2="180" stroke="#94a3b8" strokeWidth="2" />
            <line x1="520" y1="280" x2="580" y2="180" stroke="#94a3b8" strokeWidth="2" />
        </motion.svg>
    );
}
