import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { profile } from "../../data/profile";

export default function Footer() {
    return (
        <footer className="bg-background/90 border-t border-slate-800 py-8 mt-16">
            <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-header text-sm">
                    &copy; {new Date().getFullYear()} Vinay Kumar. All rights reserved.
                </p>

                <div className="flex gap-6 text-header items-center">
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition flex items-center gap-2"
                    >
                        <FaGithub size={18} />
                        <span className="hidden md:inline text-header">GitHub</span>
                    </a>
                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition flex items-center gap-2"
                    >
                        <FaLinkedin size={18} />
                        <span className="hidden md:inline text-header">LinkedIn</span>
                    </a>
                    <a
                        href={`mailto:${profile.email}`}
                        className="hover:text-primary transition flex items-center gap-2"
                    >
                        <FaEnvelope size={18} />
                        <span className="hidden md:inline text-header">{profile.email}</span>
                    </a>
                    <a
                        href={`tel:${profile.phone}`}
                        className="hover:text-primary transition flex items-center gap-2"
                    >
                        <FaPhone size={18} />
                        <span className="hidden md:inline text-header">{profile.phone}</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
