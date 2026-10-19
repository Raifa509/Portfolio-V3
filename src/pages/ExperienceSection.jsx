
"use client";

import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

function Tag({ children }) {
    return (
        <span className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-text transition-colors duration-300 hover:border-highlights hover:text-highlights">
            {children}
        </span>
    );
}

function TimelineItem({ icon: Icon, children, isRTL }) {
    return (
        <div className={`group/item relative ${isRTL ? "pr-12 sm:pr-14" : "pl-12 sm:pl-14"}`}>
            <div
                className={`absolute top-0 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-highlights transition-all duration-300 group-hover/item:scale-110 group-hover/item:border-highlights group-hover/item:bg-accent/10 sm:h-10 sm:w-10 ${
                    isRTL ? "right-0" : "left-0"
                }`}
            >
                <Icon size={17} />
            </div>
            {children}
        </div>
    );
}

export default function ExperienceSection() {
    const { t, i18n } = useTranslation();

    const isRTL = i18n.language?.startsWith("ar");

    const experience = t("experience.jobs", {
        returnObjects: true,
    });

    const education = [
        {
            degree: t("education.degree1"),
            school: t("education.school1"),
            location: t("education.location"),
            period: t("education.period1"),
            grade: t("education.grade1"),
        },
        {
            degree: t("education.degree2"),
            school: t("education.school2"),
            location: t("education.location"),
            period: t("education.period2"),
            grade: t("education.grade2"),
        },
    ];

    return (
        <section
            id="experience"
            dir={isRTL ? "rtl" : "ltr"}
            className="py-20 sm:py-28"
        >
            <div className="mx-5 px-5 sm:px-8 md:mx-30">
                {/* Section heading */}
                <div className="mb-12">
                    <p className="mb-3 font-mono text-sm text-highlights">
                        {t("experience.label")}
                    </p>

                    <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        {t("experience.headingStart")}{" "}
                        <span className="text-highlights">
                            {t("experience.headingHighlight")}
                        </span>
                    </h2>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-text sm:text-base">
                        {t("experience.subtitle")}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-14 lg:grid-cols-5 lg:gap-12">
                    {/* Work Experience */}
                    <div className="lg:col-span-3">
                        <h3 className="mb-8 flex items-center gap-2 font-mono text-xs text-highlights">
                            <Briefcase size={14} />
                            {t("experience.workTitle")}
                        </h3>

                        <div className="relative space-y-10">
                            <div
                                className={`absolute bottom-0 top-2 w-px bg-border ${
                                    isRTL
                                        ? "right-4.75 sm:right-5"
                                        : "left-4.75 sm:left-5"
                                }`}
                            />

                            {Array.isArray(experience) &&
                                experience.map((job) => (
                                    <TimelineItem
                                        key={job.company}
                                        icon={Briefcase}
                                        isRTL={isRTL}
                                    >
                                        <div className="group rounded-2xl border border-border bg-surface/15 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-highlights/50 hover:bg-surface/30 hover:shadow-[0_10px_30px_rgba(120,147,139,0.18)] sm:p-6">
                                            <div className="flex flex-wrap items-start justify-between gap-2">
                                                <div>
                                                    <h4 className="font-heading text-lg font-semibold text-primary/90 sm:text-xl">
                                                        {job.role}
                                                    </h4>
                                                    <p className="text-sm text-accent">
                                                        {job.company}
                                                    </p>
                                                </div>

                                                {(job.current ||
                                                    job.period?.includes("Present") ||
                                                    job.period?.includes("حتى الآن")) && (
                                                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-[11px] text-text">
                                                        <span className="relative flex h-2 w-2">
                                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-highlights opacity-75" />
                                                            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                                                        </span>
                                                        {t("experience.current")}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] text-text/60">
                                                <span className="inline-flex items-center gap-1.5">
                                                    <Calendar size={12} />
                                                    {job.period}
                                                </span>

                                                <span className="inline-flex items-center gap-1.5">
                                                    <MapPin size={12} />
                                                    {job.location}
                                                </span>
                                            </div>

                                            <ul className="mt-5 space-y-2.5 text-sm leading-6 text-text/80">
                                                {job.points?.map((point, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex gap-3"
                                                    >
                                                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent transition-all duration-300 group-hover:scale-150 group-hover:bg-highlights" />
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="mt-6 flex flex-wrap gap-2">
                                                {job.tech?.map((tech) => (
                                                    <Tag key={tech}>{tech}</Tag>
                                                ))}
                                            </div>
                                        </div>
                                    </TimelineItem>
                                ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div className="lg:col-span-2">
                        <h3 className="mb-8 flex items-center gap-2 font-mono text-xs text-highlights">
                            <GraduationCap size={14} />
                            {t("experience.educationTitle")}
                        </h3>

                        <div className="space-y-4">
                            {education.map((edu) => (
                                <div
                                    key={edu.degree}
                                    className="group rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-highlights/50 hover:shadow-[0_10px_30px_rgba(120,147,139,0.18)]"
                                >
                                    <div className="mb-3 flex items-center gap-3">
                                        <div className="rounded-lg border border-border p-2 text-highlights transition-colors duration-300 group-hover:bg-accent/10">
                                            <GraduationCap
                                                size={19}
                                                className="transition-transform duration-300 ease-out group-hover:rotate-12"
                                            />
                                        </div>

                                        <h4 className="text-sm font-semibold text-primary">
                                            {edu.degree}
                                        </h4>
                                    </div>

                                    <p className="text-sm leading-6 text-accent">
                                        {edu.school}
                                    </p>

                                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] text-text/60">
                                        <span className="inline-flex items-center gap-1.5">
                                            <Calendar size={12} />
                                            {edu.period}
                                        </span>

                                        <span className="inline-flex items-center gap-1.5">
                                            <MapPin size={12} />
                                            {edu.location}
                                        </span>
                                    </div>

                                    {edu.grade && (
                                        <div className="mt-4 inline-block rounded-full border border-border px-3 py-1 font-mono text-xs text-highlights transition-colors duration-300 group-hover:border-highlights">
                                            {edu.grade}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
