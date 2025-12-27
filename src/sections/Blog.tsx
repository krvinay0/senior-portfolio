import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import Container from "../components/layout/Container";

export default function Blog() {
    return (
        <section id="blog">
            <Container>
                <SectionHeading title="Blog & Insights" subtitle="Sharing knowledge on JavaScript, software development, and MNC interview preparation" />
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mt-6 max-w-3xl text-muted space-y-4"
                >
                    <p>
                        I regularly write articles to share insights and best practices in software development. My posts cover:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>JavaScript tips and advanced patterns</li>
                        <li>Full Stack development practices</li>
                        <li>Preparation strategies for top MNC technical interviews</li>
                    </ul>
                    <Button href="https://medium.com/@javaScriptwithvinay" target="_blank">
                        Explore My Articles on Medium
                    </Button>
                </motion.div>

            </Container>
        </section>
    );
}
