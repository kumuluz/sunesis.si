import { ChevronLeft } from 'lucide-react'
import { useState } from 'react'
import { contactHref } from '../../lib/expertise-links'
import { Button } from '../button'
import { DesktopNavigation } from './desktop-navigation'
import { HeaderDropdown } from './header-dropdown'
import { HeaderLogo } from './header-logo'
import { LanguageSwitcher } from './language-switcher'
import { MobileLanguageSwitcher } from './mobile-language-switcher'
import { MobileMenu } from './mobile-menu'
import { MobileMenuButton } from './mobile-menu-button'
import type { HeaderProps, NavItem } from './types'

export type { HeaderLanguage, HeaderProps, NavItem } from './types'

export function Header({
  content,
  language,
  languages,
  onLanguageChange,
}: HeaderProps) {
  const [activeItem, setActiveItem] = useState<NavItem | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSubItem, setMobileSubItem] = useState<NavItem | null>(null)

  const closeMobileMenu = () => {
    setMobileOpen(false)
    setMobileSubItem(null)
  }

  return (
    <>
      <button
        aria-label={content.closeMenu}
        className={`fixed inset-0 z-40 hidden bg-white/20 backdrop-blur-md transition duration-300 lg:block ${
          activeItem
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setActiveItem(null)}
        type="button"
      />
      <div
        className="fixed inset-x-0 top-0 z-50"
        onMouseLeave={() => setActiveItem(null)}
      >
        <header className="relative z-40 border-b border-neutral-200 bg-white/90 px-4 py-2 backdrop-blur-md sm:px-6">
          <nav className="mx-auto flex h-14 max-w-[120rem] items-center justify-between lg:px-8">
            <div className="flex h-full items-center gap-8">
              {mobileOpen && mobileSubItem ? (
                <Button
                  className="lg:hidden"
                  icon={ChevronLeft}
                  iconLayout="leading"
                  onClick={() => setMobileSubItem(null)}
                  size="lg"
                  tone="secondary"
                >
                  {content.back}
                </Button>
              ) : null}
              <HeaderLogo
                className={mobileOpen && mobileSubItem ? 'hidden lg:block' : ''}
                language={language}
              />
              <DesktopNavigation
                activeItem={activeItem}
                content={content}
                language={language}
                onActiveItemChange={setActiveItem}
              />
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <LanguageSwitcher
                language={language}
                languages={languages}
                onSelect={(nextLanguage) => {
                  onLanguageChange(nextLanguage)
                  setActiveItem(null)
                  setMobileOpen(false)
                }}
              />
              <Button href="https://blog.sunesis.si/" size="md" tone="ghost">
                {content.blog}
              </Button>
              <Button href={contactHref(language)} size="md" tone="primary">
                {content.contact}
              </Button>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <MobileLanguageSwitcher
                language={language}
                languages={languages}
                onSelect={(nextLanguage) => {
                  onLanguageChange(nextLanguage)
                  setActiveItem(null)
                  closeMobileMenu()
                }}
              />
              <MobileMenuButton
                ariaLabel={mobileOpen ? content.closeMenu : content.menu}
                isOpen={mobileOpen}
                onClick={() => {
                  setMobileOpen((isOpen) => !isOpen)
                  setMobileSubItem(null)
                }}
              />
            </div>
          </nav>
        </header>

        <HeaderDropdown
          featuredLabel={content.featuredLabel}
          featuredTitle={content.featuredTitle}
          item={activeItem}
          language={language}
          linkLabel={content.contact}
        />

        <MobileMenu
          activeItem={mobileSubItem}
          blogHref="https://blog.sunesis.si/"
          blogLabel={content.blog}
          contactLabel={content.contact}
          isOpen={mobileOpen}
          items={content.items}
          language={language}
          onActiveItemChange={setMobileSubItem}
          onClose={closeMobileMenu}
        />
      </div>
    </>
  )
}
