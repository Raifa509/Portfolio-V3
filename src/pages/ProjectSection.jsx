import { ArrowUpRight, Briefcase } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const projectMeta = [
    {
        tech: ["Next.js", "TypeScript", "Zustand", "Context API", "i18n", "CI/CD", "Docker"],
        github: "",
        live: "",
        wide: true,
        work: true,
    },
    {
        tech: ["MongoDB", "Express.js", "Angular", "Node.js"],
        github: "https://github.com/Raifa509/Recipe-finder-Angular",
        live: "",
        inProgress: true,
    },
    {
        tech: ["ASP.NET Core", "Angular", "SQL Server", "SSMS"],
        github: "",
        live: "",
        inProgress: true,
    },
    {
        tech: ["Next.js 14", "NestJS", "Prisma 7", "PostgreSQL", "Neon DB"],
        github: "https://github.com/Raifa509/Tradeflow-frontend",
        live: "",
    },
    {
        tech: ["Python", "FastAPI", "LLM", "RAG"],
        github: "https://github.com/Raifa509/Pdf-Assistant-Frontend",
        live: "",
    },
    {
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
        github: "https://github.com/Raifa509/HomeServe-MERN-Project",
        live: "",
    },
    {
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe"],
        github: "https://github.com/Raifa509/BookStore-MERN-Project",
        live: "",
    },
];

export default function ProjectsSection() {
    const { t, i18n } = useTranslation();

    const isArabic = i18n.language?.startsWith("ar");

    const translatedProjects = t("projects.items", {
        returnObjects: true,
    });

    const projects = projectMeta.map((meta, index) => ({
        ...meta,
        ...(Array.isArray(translatedProjects)
            ? translatedProjects[index]
            : {}),
    }));

    return (
        <section
            id="projects"
            dir={isArabic ? "rtl" : "ltr"}
            className="py-24"
        >
            <div className="mx-auto max-w-6xl px-5 md:px-8">
                {/* Section heading */}
                <div className="mb-12">
                    <p className="mb-3 font-mono text-xs text-highlights">
                        {t("projects.label")}
                    </p>

                    <h2 className="font-heading text-3xl font-semibold tracking-tight text-primary md:text-5xl">
                        {t("projects.headingStart")}{" "}
                        <span className="text-highlights">
                            {t("projects.headingHighlight")}
                        </span>
                    </h2>
                </div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p, index) => (
                        <article
                            key={`${p.name}-${index}`}
                            className={`group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-highlights/50 hover:shadow-[0_10px_30px_rgba(120,147,139,0.12)] ${p.wide ? "md:col-span-2" : ""
                                }`}
                        >
                            {/* Window-style header */}
                            <div
                                dir="ltr"
                                className="flex items-center justify-between gap-1.5 border-b border-border bg-surface px-4 py-3"
                            >
                                <div className="flex items-center gap-1.5">
                                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                                </div>

                                {p.work && (
                                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-text/70">
                                        <Briefcase size={11} />
                                        {t("projects.workProject")}
                                    </span>
                                )}

                                {p.inProgress && (
                                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-highlights/30 bg-highlights/5 px-2.5 py-1 font-mono text-[10px] text-highlights">
                                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-highlights" />
                                        {t("projects.inProgress")}
                                    </span>
                                )}
                            </div>
                            {/* Decorative accent */}
                            <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-highlights transition-transform duration-500 group-hover:scale-x-100" />

                            {/* Card body */}
                            <div className="relative flex flex-1 flex-col p-5">
                                {/* Project heading */}
                                <div className="relative flex items-start justify-between gap-3">
                                    <div>
                                        <p className="font-mono text-[10px] text-highlights">
                                            {p.type}
                                        </p>

                                        <h3 className="mt-1 font-heading text-base font-semibold text-primary">
                                            {p.name}
                                        </h3>
                                    </div>


                                </div>

                                {/* Description */}
                                <p className="relative mt-3 text-xs leading-5 text-text/80">
                                    {p.description}
                                </p>

                                {/* Technologies */}
                                <div className="relative mt-4 flex flex-wrap gap-1.5">
                                    {p.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-text transition-colors duration-300 hover:border-highlights hover:text-highlights"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Project footer */}
                                <div className="relative mt-auto flex items-center justify-between gap-3 pt-5">
                                    <span className="font-mono text-[11px] text-accent">
                                        {p.stat}
                                    </span>

                                    <div className="flex items-center gap-3 text-text/70">
                                        {p.github && (
                                            <a
                                                href={p.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${p.name} on GitHub`}
                                                className="transition-all duration-300 hover:scale-110 hover:text-button"
                                            >
                                                <FaGithub size={16} />
                                            </a>
                                        )}

                                        {p.live && (
                                            <a
                                                href={p.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${p.name} live site`}
                                                className="transition-all duration-300 hover:scale-110 hover:text-button"
                                            >
                                                <ArrowUpRight size={17} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* View all projects on GitHub */}
                <div className="flex justify-center pt-16">
                    <a
                        href="https://github.com/Raifa509?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-2.5 font-mono text-[12px] text-text transition-all duration-300 hover:border-highlights hover:shadow-[0_0_20px_rgba(120,147,139,0.4)] md:text-sm"
                    >
                        <FaGithub size={16} />
                        {t("projects.viewAll")}
                        <ArrowUpRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}