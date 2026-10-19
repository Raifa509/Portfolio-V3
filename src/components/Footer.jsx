
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const socialLinks = [
    {
        icon: Mail,
        label: "Email",
        href: "mailto:fathimathulraifanp@gmail.com",
    },
    {
        icon: FaLinkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/fathimathulraifa-np/",
    },
    {
        icon: FaGithub,
        label: "GitHub",
        href: "https://github.com/Raifa509",
    },
    {
        icon: FaWhatsapp,
        label: "WhatsApp",
        href: "https://wa.me/971509531558",
    },
];

export default function Footer() {
    const year = new Date().getFullYear();
    const { t, i18n } = useTranslation();

    const isArabic = i18n.language?.startsWith("ar");

    return (
        <footer
            dir={isArabic ? "rtl" : "ltr"}
            className="border-t border-border bg-surface/30"
        >
            <div className="mx-5 px-5 py-10 sm:px-8 md:mx-30">
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    {/* Brand */}
                    <div>
                        <a
                            href="#home"
                            className="font-mono text-lg font-semibold text-primary"
                        >
                            Fathimathul Raifa
                            <span className="text-highlights">.</span>
                        </a>

                        <p className="mt-2 max-w-xs text-sm leading-6 text-text/70">
                            {t("footer.description")}
                        </p>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-3">
                        {socialLinks.map(({ icon: Icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                target={
                                    href.startsWith("http")
                                        ? "_blank"
                                        : undefined
                                }
                                rel={
                                    href.startsWith("http")
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                aria-label={label}
                                title={label}
                                className="group rounded-lg border border-border p-2.5 text-highlights transition-all duration-300 hover:-translate-y-1 hover:border-highlights/50 hover:bg-accent/10 hover:shadow-[0_10px_30px_rgba(120,147,139,0.18)]"
                            >
                                <Icon
                                    size={18}
                                    className="transition-transform duration-300 ease-out group-hover:rotate-12"
                                />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
                    <p
                        dir="ltr"
                        className="font-mono text-[11px] text-text/50"
                    >
                        &copy; {year} Fathimathul Raifa N P.{" "}
                        {t("footer.copyright")}
                    </p>

                    <a
                        href="#home"
                        className="group inline-flex items-center gap-2 font-mono text-[11px] text-text/60 transition-colors duration-300 hover:text-highlights"
                    >
                        {t("footer.backToTop")}

                        <ArrowUp
                            size={14}
                            className="transition-transform duration-300 group-hover:-translate-y-1"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
