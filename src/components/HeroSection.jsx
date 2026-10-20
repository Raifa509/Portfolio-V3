
import React from 'react'
import TextType from './TextType'
import TiltedCard from './TiltedCard'
import { ArrowRight, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

export default function HeroSection() {
    const { t } = useTranslation()

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 py-8 lg:py-0'>
            {/* left */}
            <div className='flex flex-col items-center text-center lg:items-start lg:text-left mt-4 lg:mt-10'>

                {/* badge */}
                <div className="inline-flex items-center gap-2 rounded-full w-fit border border-border bg-surface px-4 py-1 mb-5 font-mono">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-highlights opacity-75"></span>
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent"></span>
                    </span>

                    <p className="text-xs font-medium text-text">
                        {t('hero.available')}
                    </p>
                </div>

                <p className="text-primary/80 text-2xl sm:text-[28px] font-heading">
                    {t('hero.greeting')}{' '}
                    <span className="block sm:inline text-primary font-semibold sm:ps-1 font-mono">
                        {t('hero.name')}
                    </span>
                </p>

                <TextType
                    text={t('hero.roles', { returnObjects: true })}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    className='mt-2 text-lg sm:text-xl font-mono text-text'
                />

                <div className='flex items-center gap-3 mt-6 mb-8 lg:mb-10 text-left'>
                    <div className='h-13 bg-accent w-0.5 shrink-0' />
                    <div>
                        <p className='max-w-md md:text-sm text-[12px] text-text font-body'>
                            {t('hero.descriptionStart')}{' '}
                            <span className='text-highlights'>
                                {t('hero.complexIdeas')}
                            </span>{' '}
                            {t('hero.descriptionMiddle')}{' '}
                            <span className='text-highlights'>
                                {t('hero.smartBackends')}
                            </span>
                            {t('hero.descriptionEnd')}
                        </p>
                    </div>
                </div>

                <div className="flex md:flex-row flex-col items-center justify-center lg:justify-start gap-3">
                    <a
                        href="/Fathimathul_Raifa_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="items-center justify-center
                   border border-border bg-surface
                   cursor-pointer rounded-md
                   md:text-sm! text-[12px]! text-text px-4 py-2
                   transition-all duration-300
                   hover:border-highlights
                   hover:shadow-[0_0_20px_rgba(45,212,191,0.4)]"
                    >
                        {t('hero.resume')}
                    </a>

                    <a
                        href="#contact"
                        className="flex items-center justify-center gap-2
        rounded-md bg-accent px-4 py-2
        md:text-sm! text-[12px]! text-background font-mono
        transition-all duration-300
        hover:shadow-[0_0_20px_rgba(45,212,191,0.4)]"
                    >
                        {t('hero.contact')}
                        <ArrowRight size={16} />
                    </a>
                </div>

                <div className="flex items-center gap-4 mt-6">
                    <a
                        href="https://github.com/Raifa509"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className=" hover:text-button hover:scale-110 transition-all duration-300"
                    >
                        <FaGithub size={22} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/fathimathulraifa-np/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-button hover:scale-110 transition-all duration-300"
                    >
                        <FaLinkedin size={22} />
                    </a>

                    <a
                        href="mailto:fathimathulraifanp@gmail.com"
                        aria-label="Email"
                        className="hover:text-button hover:scale-110 transition-all duration-300"
                    >
                        <Mail size={22} />
                    </a>

                    <a
                        href="https://wa.me/971509531558"
                        aria-label="Whatsapp"
                        className="hover:text-button hover:scale-110 transition-all duration-300"
                    >
                        <FaWhatsapp size={22} />
                    </a>
                </div>

            </div>

            {/* right */}
            <div className='flex items-center justify-center'>
                <div className='relative flex flex-col items-center'>

                    <div className='absolute top-0 md:-left-24 -left-7 z-10'>
                        <div className="rounded-lg text-xs border border-border bg-surface/70 px-4 py-2 shadow-xl backdrop-blur-md text-text/90 hover:border-highlights/50 hover:transition-colors hover:duration-300 animate-float">
                            📍 {t('hero.location')}
                        </div>
                    </div>

                    <div className='origin-top scale-[0.85] min-[400px]:scale-100'>
                        <TiltedCard
                            imageSrc="/profile.png"
                            altText="Fathimathul Raifa Cover"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="450px"
                            imageWidth="340px"
                            rotateAmplitude={12}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                        />
                    </div>

                    <div className='mt-6 lg:mt-0 lg:absolute lg:top-55 lg:-right-32 xl:-right-65 max-w-full'>
                        <div className="rounded-2xl border border-border bg-surface/90 px-4 py-3 shadow-xl backdrop-blur-md hover:border-highlights/50 hover:transition-colors hover:duration-300 animate-float">
                            {/* Editor header */}
                            <div className="mb-3 flex items-center gap-1.5">
                                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                                <span className="ml-2 font-mono text-[11px] text-text/50">
                                    mindset.js
                                </span>
                            </div>

                            {/* Code */}
                            <div className="font-mono text-[11px] sm:text-xs leading-6 whitespace-nowrap overflow-x-auto">
                                <p>
                                    <span className="text-highlights">const</span>{" "}
                                    <span className="text-text">me</span> ={" "}
                                    <span className="text-highlights">new</span>{" "}
                                    <span className="text-accent">Developer</span>({"{"}
                                </p>

                                <p className="pl-4">
                                    <span className="text-text">curiosity</span>:{" "}
                                    <span className="text-purple-400">Infinity</span>,
                                </p>

                                <p className="pl-4">
                                    <span className="text-text">limits</span>:{" "}
                                    <span className="text-orange-400">null</span>,
                                </p>

                                <p className="pl-4">
                                    <span className="text-text">nextMove</span>:{" "}
                                    <span className="text-green-400">
                                        "build something better"
                                    </span>
                                </p>

                                <p>{'});'}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
