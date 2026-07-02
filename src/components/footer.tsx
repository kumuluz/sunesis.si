import { Building2, Mail } from 'lucide-react'
import type { PageContent } from '../content'
import type { LandingContent } from '../content/landing/landing'
import { footerLinkHref } from '../lib/expertise-links'
import type { LanguageCode } from '../lib/router'
import { GithubIcon, LinkedinIcon, XIcon } from './icons'

type FooterProps = {
  content: PageContent['footer']
  contact: LandingContent['landingPageSections']['finalCta']['contact']
  language: LanguageCode
}

const MAPS_URL = 'https://maps.app.goo.gl/sUypTyZYofbouHZ79'

export function Footer({ content, contact, language }: FooterProps) {
  const { columns, social, copyright } = content
  const year = new Date().getFullYear()

  const socialLinks = [
    {
      key: 'linkedin',
      label: social.linkedin,
      href: 'https://www.linkedin.com/company/kumuluz',
      Icon: LinkedinIcon,
    },
    {
      key: 'twitter',
      label: social.twitter,
      href: 'https://x.com/kumuluz',
      Icon: XIcon,
    },
    {
      key: 'github',
      label: social.github,
      href: 'https://github.com/kumuluz',
      Icon: GithubIcon,
    },
  ]

  return (
    <footer className="bg-neutral-950 text-neutral-400">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="max-w-xs">
            <img
              alt="Sunesis logo"
              className="h-6 w-[115px] object-contain object-left brightness-0 invert"
              src="/sunesis-logo.svg"
            />
            <dl className="mt-8 space-y-5">
              <div className="flex items-start gap-3.5">
                <dt>
                  <Building2
                    aria-hidden="true"
                    className="size-5 text-neutral-500"
                    strokeWidth={1.75}
                  />
                  <span className="sr-only">Address</span>
                </dt>
                <dd className="text-sm leading-6 text-neutral-400">
                  <a
                    className="transition-colors hover:text-white"
                    href={MAPS_URL}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {contact.address.map((line) => (
                      <span className="block" key={line}>
                        {line}
                      </span>
                    ))}
                  </a>
                </dd>
              </div>
              <div className="flex items-center gap-3.5">
                <dt>
                  <Mail
                    aria-hidden="true"
                    className="size-5 text-neutral-500"
                    strokeWidth={1.75}
                  />
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="text-sm text-neutral-400">
                  <a
                    className="transition-colors hover:text-white"
                    href={`mailto:${contact.email}`}
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4"
          >
            {columns.map((column) => (
              <div key={column.title}>
                <h2 className="text-sm font-semibold text-white">
                  {column.title}
                </h2>
                <ul className="mt-5 space-y-3.5">
                  {column.links.map((link) => {
                    const href = footerLinkHref(link, language) ?? '#'
                    const isExternal = href.startsWith('http')

                    return (
                      <li key={link}>
                        <a
                          className="text-sm leading-6 text-neutral-400 transition-colors hover:text-white"
                          href={href}
                          rel={isExternal ? 'noopener noreferrer' : undefined}
                          target={isExternal ? '_blank' : undefined}
                        >
                          {link}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center gap-6 border-t border-white/10 pt-8 sm:mt-16 sm:flex-row sm:justify-between">
          <p className="text-sm text-neutral-500">
            {copyright.replace('{year}', String(year))}
          </p>
          <div className="flex items-center gap-5">
            {socialLinks.map(({ key, label, href, Icon }) => (
              <a
                aria-label={label}
                className="text-neutral-500 transition-colors hover:text-white"
                href={href}
                key={key}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
