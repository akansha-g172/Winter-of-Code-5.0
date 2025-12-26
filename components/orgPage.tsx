"use client"

import Image from 'next/image'
import Link from 'next/link'

type Mentor = {
    name: string
    role: string
    handle?: string
    profile?: string
}

type Project = {
    title: string
    description: string
    tech: string[]
    difficulty: 'beginner' | 'intermediate' | 'advanced'
    ideaLink?: string
}

type Contact = {
    label: string
    value: string
    href?: string
}

type Org = {
    name: string
    tagline: string
    description: string
    heroImage: string
    website: string
    chat: string
    repo: string
    email: string
    focusAreas: string[]
    stats: { label: string; value: string }[]
    contacts: Contact[]
    mentors: Mentor[]
    projects: Project[]
}

const org: Org = {
    name: 'Open Printing',
    tagline: 'Building inclusive tools for global collaboration.',
    description:
        'Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.',
    heroImage: '/past-orgs/OpenPrinting.webp', // replace with your hero image path
    website: 'https://example.org',
    chat: 'https://chat.example.org',
    repo: 'https://github.com/example/example-repo',
    email: 'contact@example.org',
    focusAreas: ['C', 'C++', 'JavaScript', 'Python'],
    stats: [
        { label: 'Active Mentors', value: '12' },
        { label: 'Contributors', value: '350+' },
        { label: 'Open Issues', value: '42' },
        { label: 'Good First Issues', value: '18' },
    ],
    contacts: [
        { label: 'Website', value: 'example.org', href: 'https://example.org' },
        { label: 'Community Chat', value: 'chat.example.org', href: 'https://chat.example.org' },
        { label: 'Email', value: 'contact@example.org', href: 'mailto:contact@example.org' },
        { label: 'GitHub', value: 'github.com/example', href: 'https://github.com/example' },
    ],
    mentors: [
        { name: 'Alex Rivera', role: 'Lead Maintainer', handle: '@alex-r', profile: 'https://github.com/alex-r' },
        { name: 'Priya Verma', role: 'DX Engineer', handle: '@priya', profile: 'https://github.com/priya' },
        { name: 'Samir Khan', role: 'Data Viz', handle: '@samirk', profile: 'https://github.com/samirk' },
    ],
    projects: [
        {
            title: 'CLI UX Overhaul',
            description: 'Redesign the command experience with better progress, tracing, and composable subcommands.',
            tech: ['TypeScript', 'Node.js', 'CLI'],
            difficulty: 'intermediate',
            ideaLink: 'https://example.org/projects/cli-ux',
        },
        {
            title: 'Accessibility Audit Dashboard',
            description: 'Ship a dashboard that tracks accessibility regressions across releases.',
            tech: ['React', 'Tailwind', 'a11y'],
            difficulty: 'advanced',
        },
        {
            title: 'Data Viz Templates',
            description: 'Create reusable chart presets with strong defaults and storytelling patterns.',
            tech: ['D3', 'TypeScript', 'Storybook'],
            difficulty: 'beginner',
        },
    ],
}

const Badge = ({ text }: { text: string }) => (
    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">{text}</span>
)

const StatCard = ({ label, value }: { label: string; value: string }) => (
    <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-[0_12px_40px_-28px_rgba(0,0,0,0.6)] backdrop-blur">
        <span className="text-xs uppercase tracking-[0.14em] text-white/60">{label}</span>
        <span className="text-2xl font-semibold text-white">{value}</span>
    </div>
)

const MentorCard = ({ mentor }: { mentor: Mentor }) => (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
        <div>
            <p className="text-sm font-semibold text-white">{mentor.name}</p>
            <p className="text-xs text-white/60">{mentor.role}</p>
        </div>
        {mentor.profile ? (
            <Link href={mentor.profile} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-brand hover:text-brand/80">
                {mentor.handle || 'Profile'}
            </Link>
        ) : null}
    </div>
)

const ProjectCard = ({ project }: { project: Project }) => (
    <div className="space-y-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
        <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-white">{project.title}</p>
            <span className="text-[11px] uppercase tracking-[0.12em] text-white/60">{project.difficulty}</span>
        </div>
        <p className="text-sm text-white/70">{project.description}</p>
        {project.tech.length ? (
            <div className="flex flex-wrap gap-2">
                {project.tech.map((stack) => (
                    <Badge key={stack} text={stack} />
                ))}
            </div>
        ) : null}
        {project.ideaLink ? (
            <Link href={project.ideaLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-brand hover:text-brand/80">
                Project brief
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75h-3a.75.75 0 0 0 0 1.5h1.19l-6.72 6.72a.75.75 0 1 0 1.06 1.06l6.72-6.72v1.19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75z" />
                </svg>
            </Link>
        ) : null}
    </div>
)

const ContactItem = ({ contact }: { contact: Contact }) => (
    <div className="space-y-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
        <p className="text-xs uppercase tracking-[0.14em] text-white/50">{contact.label}</p>
        {contact.href ? (
            <Link href={contact.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand hover:text-brand/80">
                {contact.value}
            </Link>
        ) : (
            <p className="text-sm text-white/80">{contact.value}</p>
        )}
    </div>
)

const OrgShowcase = () => {
    return (
        <section className="relative isolate w-full bg-gradient-to-b from-black via-black to-black pb-20 pt-4">
            {/* <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-[-5%] h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-brand/25 blur-[140px]" />
                <div className="absolute right-[6%] top-[12%] h-[260px] w-[260px] rounded-full bg-white/10 blur-[90px]" />
            </div> */}

            <div className="relative mx-auto flex w-full px-8 flex-col gap-10">
                <header className="grid gap-8 h-[60vh] rounded-[32px] border border-white/10 bg-white/5 px-24 py-10 backdrop-blur">
                    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div className="space-y-4">
                            <p className="text-xs uppercase tracking-[0.18em] text-brand">Organisation Profile</p>
                            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">{org.name}</h1>
                            <p className="text-lg font-semibold text-white/80">{org.tagline}</p>
                            <p className="text-sm text-white/70">{org.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {org.focusAreas.map((area) => (
                                    <Badge key={area} text={area} />
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <Link href={org.website} target="_blank" rel="noopener noreferrer" className="rounded-full bg-brand px-4 py-2 text-xs font-semibold text-black shadow-[0_14px_38px_-30px_rgba(0,0,0,0.9)] transition hover:brightness-110">
                                    Visit site
                                </Link>
                                <Link href={org.chat} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition hover:border-brand/70 hover:text-brand">
                                    Join chat
                                </Link>
                                <Link href={org.repo} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition hover:border-brand/70 hover:text-brand">
                                    View repos
                                </Link>
                            </div>
                        </div>

                        <div className="relative flex h-full w-full items-center justify-center">
                            <div className="absolute inset-4 rounded-[28px] bg-gradient-to-br from-white/10 via-white/5 to-transparent blur-2xl" />
                            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-4 shadow-[0_18px_60px_-35px_rgba(0,0,0,0.7)]">
                                <Image
                                    src={org.heroImage}
                                    alt={org.name}
                                    width={920}
                                    height={620}
                                    className="h-full w-full max-h-[460px] object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {org.stats.map((stat) => (
                            <StatCard key={stat.label} label={stat.label} value={stat.value} />
                        ))}
                    </div> */}
                </header>

                <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-white">Projects</h2>
                                <span className="text-xs text-white/60">{org.projects.length}</span>
                            </div>
                            <div className="grid gap-4 lg:grid-cols-2">
                                {org.projects.map((project) => (
                                    <ProjectCard key={project.title} project={project} />
                                ))}
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-white">Mentors</h2>
                                <span className="text-xs text-white/60">{org.mentors.length}</span>
                            </div>
                            <div className="grid gap-3 md:grid-cols-2">
                                {org.mentors.map((mentor) => (
                                    <MentorCard key={mentor.name} mentor={mentor} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <aside className="space-y-4 rounded-3xl border border-white/10 bg-white/5 px-6 py-6 shadow-[0_22px_70px_-50px_rgba(0,0,0,0.7)] backdrop-blur">
                        <div className="space-y-2">
                            <h3 className="text-base font-semibold text-white">Contact</h3>
                            <p className="text-sm text-white/70">Reach out to the org directly for onboarding, project scoping, and collaboration.</p>
                        </div>
                        <div className="grid gap-3">
                            {org.contacts.map((contact) => (
                                <ContactItem key={contact.label} contact={contact} />
                            ))}
                        </div>
                        <div className="rounded-2xl border border-dashed border-white/20 bg-white/5 px-4 py-4 text-sm text-white/70">
                            Want to customize this page? Replace the dummy `org` object with real data or wire it to your CMS/API.
                        </div>
                    </aside>
                </div>

                <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-brand/20 via-white/5 to-brand/10 px-8 py-10 text-white shadow-[0_22px_70px_-50px_rgba(0,0,0,0.7)]">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold">Ready to collaborate?</h2>
                            <p className="max-w-2xl text-sm text-white/70">
                                Join the community chat, review the issue tracker, and pick a project to start contributing. Mentors are available to help you scope your first patch.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link href={org.chat} target="_blank" rel="noopener noreferrer" className="rounded-full bg-brand px-5 py-3 text-sm font-semibold text-black shadow-[0_18px_40px_-26px_rgba(0,0,0,0.8)] transition hover:brightness-110">
                                Join the chat
                            </Link>
                            <Link href={org.repo} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-brand/70 hover:text-brand">
                                View repository
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrgShowcase