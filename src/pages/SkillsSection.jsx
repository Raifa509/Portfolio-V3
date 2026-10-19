import {
    Code2,
    LayoutTemplate,
    Server,
    Database,
    Wrench,
    Brain,
    ListChecks,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const skillGroups = [
    {
        icon: Code2,
        titleKey: "languages",
        skills: [
            "JavaScript (ES6+)",
            "TypeScript",
            "C#",
            "Python",
            "SQL",
            "HTML5",
            "CSS3",
        ],
    },
    {
        icon: LayoutTemplate,
        titleKey: "frontend",
        skills: [
            "Next.js",
            "React.js",
            "Angular",
            "Tailwind CSS",
            "Material UI",
            "Bootstrap",
            "Shadcn/ui",
            "Zustand",
            "Context API",
        ],
    },
    {
        icon: Server,
        titleKey: "backend",
        skills: [
            "Node.js",
            "Express.js",
            "NestJS",
            "ASP.NET Core (Basics)",
            "Entity Framework",
            "FastAPI",
            "REST APIs",
            "JWT Authentication",
            "RBAC",
        ],
    },
    {
        icon: Database,
        titleKey: "databases",
        skills: [
            "MongoDB",
            "MySQL",
            "PostgreSQL",
            "SQL Server",
            "Neon DB",
            "Mongoose",
            "Prisma",
        ],
    },
    {
        icon: Wrench,
        titleKey: "tools",
        skills: [
            "Git & GitHub",
            "CI/CD",
            "Docker",
            "Postman",
            "Visual Studio 2022",
            "SSMS",
            "Vercel",
            "Netlify",
            "Render",
            "Figma",
        ],
    },
    {
        icon: Brain,
        titleKey: "ai",
        skills: [
            "LLM Fine-tuning",
            "RAG Pipelines",
            "Prompt Engineering",
        ],
    },
    {
        icon: ListChecks,
        titleKey: "practices",
        skills: [
            "Agile",
            "API Integration",
            "Debugging",
            "Error Handling",
            "Internationalization (i18n)",
        ],
    },
];

export default function SkillsSection() {
    const { t } = useTranslation();

    return (
        <section id="skills" className="py-20 sm:py-28">
            <div className="md:mx-30 mx-5 px-5 sm:px-8">

                {/* Section heading */}
                <div className="mb-12">
                    <p className="mb-3 font-mono text-sm text-highlights">
                        {t("skills.label")}
                    </p>

                    <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        {t("skills.headingStart")}{" "}
                        <span className="text-highlights">
                            {t("skills.headingHighlight")}
                        </span>
                    </h2>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-text sm:text-base">
                        {t("skills.subtitle")}
                    </p>
                </div>

                {/* Skill groups */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {skillGroups.map(({ icon: Icon, titleKey, skills }) => (
                        <div
                            key={titleKey}
                            className="group rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-highlights/50 hover:shadow-[0_10px_30px_rgba(120,147,139,0.18)]"
                        >
                            <div className="mb-4 flex items-center gap-3">
                                <div className="rounded-lg border border-border p-2 text-highlights transition-colors duration-300 group-hover:bg-accent/10">
                                    <Icon
                                        size={19}
                                        className="transition-transform duration-300 ease-out group-hover:rotate-12"
                                    />
                                </div>

                                <h3 className="text-sm font-semibold text-primary">
                                    {t(`skills.groups.${titleKey}`)}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-border px-3 py-1.5 font-mono text-xs text-text transition-colors duration-300 hover:border-highlights hover:text-highlights"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
