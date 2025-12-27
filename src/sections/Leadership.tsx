import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion";
import Container from "../components/layout/Container";
import SectionHeading from "../components/ui/SectionHeading";

export default function Leadership() {
    return (
        <section id="leadership">
            <Container>
                <SectionHeading title="Leadership & Mentorship" />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mt-6 max-w-4xl text-muted space-y-4"
                >
                    <p>
                        Actively mentored junior and mid-level developers, guiding them in best practices, code quality, and architectural decisions.
                    </p>
                    <p>
                        Conducted regular code reviews, ensuring maintainable and scalable code across multiple SaaS modules including Flights, Holidays, Ferry, and Wallet systems.
                    </p>
                    <p>
                        Led feature ownership for critical modules, collaborating with product, backend, and QA teams to deliver high-impact features with measurable business value.
                    </p>
                    <p>
                        Promoted engineering standards across teams, including reusable component libraries, performance optimization techniques, and system design guidelines.
                    </p>
                </motion.div>
            </Container>
        </section>
    );
}
