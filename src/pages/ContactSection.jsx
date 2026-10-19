
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, Send, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactLinks = [
    {
        icon: Mail,
        translationKey: "email",
        value: "fathimathulraifanp@gmail.com",
        href: "mailto:fathimathulraifanp@gmail.com",
    },
    {
        icon: FaLinkedin,
        translationKey: "linkedin",
        value: "fathimathulraifa-np",
        href: "https://www.linkedin.com/in/fathimathulraifa-np/",
    },
    {
        icon: Phone,
        translationKey: "phone",
        value: "+971 50 953 1558",
        href: "tel:+971509531558",
    },
    {
        icon: FaGithub,
        translationKey: "github",
        value: "Raifa509",
        href: "https://github.com/Raifa509",
    },
    {
        icon: MapPin,
        translationKey: "location",
        value: "Dubai, UAE",
    },
];

const inputClass =
    "w-full rounded-lg border border-border bg-bg/60 px-4 py-2.5 text-sm text-text placeholder:text-text/40 transition-colors duration-300 focus:border-highlights focus:outline-none placeholder:text-sm";

export default function ContactSection() {
    const form = useRef(null);
    const [sending, setSending] = useState(false);
    const { t, i18n } = useTranslation();

    const isArabic = i18n.language?.startsWith("ar");

    const sendEmail = async (e) => {
        e.preventDefault();
        setSending(true);

        try {
            await emailjs.sendForm(
                "service_eoa6v47",
                "template_aq7tqic",
                form.current,
                "KM3eyHPFI8vXUysdo"
            );

            toast.success(t("contact.success"));
            form.current?.reset();
        } catch (error) {
            toast.error(t("contact.error"));
        } finally {
            setSending(false);
        }
    };

    return (
        <section
            id="contact"
            dir={isArabic ? "rtl" : "ltr"}
            className="py-15 sm:py-28"
        >
            <div className="mx-5 px-5 sm:px-8 md:mx-30">
                {/* Section heading */}
                <div className="mb-12">
                    <p className="mb-3 font-mono text-sm text-highlights">
                        {t("contact.label")}
                    </p>

                    <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        {t("contact.headingStart")}{" "}
                        <span className="text-highlights">
                            {t("contact.headingHighlight")}
                        </span>
                    </h2>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-text sm:text-base">
                        {t("contact.description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
                    {/* Contact details */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
                        {contactLinks.map(
                            ({ icon: Icon, translationKey, value, href }) => {
                                const content = (
                                    <>
                                        <div className="rounded-lg border border-border p-2 text-highlights transition-colors duration-300 group-hover:bg-accent/10">
                                            <Icon
                                                size={19}
                                                className="transition-transform duration-300 ease-out group-hover:rotate-12"
                                            />
                                        </div>

                                        <div className="min-w-0">
                                            <p className="font-mono text-[11px] text-text/60">
                                                {t(`contact.${translationKey}`)}
                                            </p>

                                            <p
                                                dir="ltr"
                                                className="truncate text-sm font-semibold text-primary"
                                            >
                                                {value}
                                            </p>
                                        </div>
                                    </>
                                );

                                const cardClass =
                                    "group flex items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-highlights/50 hover:shadow-[0_10px_30px_rgba(120,147,139,0.18)]";

                                return href ? (
                                    <a
                                        key={translationKey}
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
                                        className={cardClass}
                                    >
                                        {content}
                                    </a>
                                ) : (
                                    <div
                                        key={translationKey}
                                        className={cardClass}
                                    >
                                        {content}
                                    </div>
                                );
                            }
                        )}
                    </div>

                    {/* Contact form */}
                    <div className="overflow-hidden rounded-2xl border border-border bg-surface/15 lg:col-span-3">
                        <div className="flex items-center gap-1.5 border-b border-border bg-surface px-4 py-3">
                            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                            <span
                                dir="ltr"
                                className="ml-2 font-mono text-[11px] text-text/50"
                            >
                                {t("contact.formTitle")}
                            </span>
                        </div>

                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="space-y-5 p-6 sm:p-8"
                        >
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="user_name"
                                        className="mb-2 block font-mono text-xs text-highlights"
                                    >
                                        {t("contact.nameLabel")}
                                    </label>

                                    <input
                                        id="user_name"
                                        type="text"
                                        name="user_name"
                                        required
                                        autoComplete="name"
                                        placeholder={t(
                                            "contact.namePlaceholder"
                                        )}
                                        className={inputClass}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="user_email"
                                        className="mb-2 block font-mono text-xs text-highlights"
                                    >
                                        {t("contact.emailLabel")}
                                    </label>

                                    <input
                                        id="user_email"
                                        type="email"
                                        name="user_email"
                                        required
                                        autoComplete="email"
                                        dir="ltr"
                                        placeholder={t(
                                            "contact.emailPlaceholder"
                                        )}
                                        className={inputClass}
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block font-mono text-xs text-highlights"
                                >
                                    {t("contact.messageLabel")}
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    placeholder={t(
                                        "contact.messagePlaceholder"
                                    )}
                                    className={`${inputClass} resize-none`}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={sending}
                                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-2.5 font-mono text-[12px] text-bg transition-all duration-300 hover:shadow-[0_0_20px_rgba(120,147,139,0.4)] disabled:cursor-not-allowed disabled:opacity-60 md:text-sm"
                            >
                                {sending
                                    ? t("contact.sending")
                                    : t("contact.sendMessage")}

                                <Send
                                    size={16}
                                    className={sending ? "animate-pulse" : ""}
                                />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <ToastContainer
                position={isArabic ? "top-left" : "top-right"}
                theme="dark"
                autoClose={3000}
            />
        </section>
    );
}
