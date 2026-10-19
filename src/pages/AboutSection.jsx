import { Code2, Layers3, Lightbulb, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
    const { t } = useTranslation();

    const strengths = t("about.strengths", { returnObjects: true });
    const skills = t("about.skills", { returnObjects: true });

    const strengthIcons = [Code2, Layers3, Lightbulb, Rocket];

    return (
        <section className="py-20 sm:py-28" id="about">
            <div className="md:mx-30 mx-5 px-5 sm:px-8">

                {/* Section heading */}
                <div className="mb-12">
                    <p className="mb-3 font-mono text-sm text-highlights">
                        {t("about.label")}
                    </p>

                    <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        {t("about.headingStart")}{" "}
                        <span className="text-highlights">
                            {t("about.headingHighlight")}
                        </span>
                    </h2>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-text sm:text-base">
                        {t("about.subtitle")}
                    </p>
                </div>

                {/* Main content */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">

                    {/* Introduction */}
                    <div className="lg:col-span-3">
                        <div className="rounded-2xl border border-border bg-surface/15 p-6 sm:p-8">
                            <p className="mb-5 font-mono text-xs text-highlights">
                                {t("about.introLabel")}
                            </p>

                            <h3 className="mb-5 font-heading text-accent text-xl font-semibold sm:text-2xl">
                                {t("about.greeting")}{" "}
                                <span className="text-primary/90">
                                    {t("about.name")}
                                </span>
                                <br />
                                <span className="font-light text-xl text-accent">
                                    {t("about.tagline")}
                                    <br />
                                </span>
                            </h3>

                            <div className="space-y-4 text-sm leading-7 text-text/80 sm:text-base">
                                <p>{t("about.paragraph1")}</p>

                                <p>{t("about.paragraph2")}</p>

                                <p>{t("about.paragraph3")}</p>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-2">
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
                    </div>

                    {/* Strengths */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
                        {strengths.map(({ title, description }, index) => {
                            const Icon = strengthIcons[index];

                            return (
                                <div
                                    key={title}
                                    className="group rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:border-highlights/50"
                                >
                                    <div className="mb-3 flex items-center gap-3">
                                        <div className="rounded-lg border border-border p-2 text-highlights transition-colors duration-300 group-hover:bg-accent/10">
                                            <Icon
                                                size={19}
                                                className="transition-transform duration-300 ease-out group-hover:rotate-12"
                                            />
                                        </div>

                                        <h4 className="text-sm font-semibold text-primary">
                                            {title}
                                        </h4>
                                    </div>

                                    <p className="text-sm leading-6 text-text">
                                        {description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
