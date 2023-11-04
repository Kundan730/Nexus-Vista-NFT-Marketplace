import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { SubscribeToNewsletterForm } from '@/components/forms/subscribe-to-newsletter-form';
import { Icons } from '@/components/icons';
import { ThemeToggle } from '@/components/layouts/theme-toggle';
import { Shell } from '@/components/shells/shell';
import Image from 'next/image';

export function SiteFooter() {
  return (
    <footer className='w-full border-t bg-background'>
      <Shell as='div'>
        <section
          id='footer-content'
          aria-labelledby='footer-content-heading'
          className='flex flex-col gap-10 lg:flex-row lg:gap-20'
        >
          <section id='footer-branding' aria-labelledby='footer-branding-heading'>
            <Link aria-label='Home' href='/console' className='flex items-center space-x-2'>
              <Image
                src='/img/logo/logo7.png'
                alt='logo'
                className='h-6 w-6'
                width={50}
                height={50}
              />
              <span className='hidden text-xl font-semibold lg:inline-block'>Flash APIs</span>
            </Link>
          </section>
          <section
            id='footer-links'
            aria-labelledby='footer-links-heading'
            className='grid flex-1 grid-cols-1 gap-10 xs:grid-cols-2 sm:grid-cols-4'
          >
            {siteConfig.footerNav.map((item) => (
              <div key={item.title} className='space-y-3'>
                <h4 className='text-base font-medium'>{item.title}</h4>
                <ul className='space-y-3'>
                  {item.items.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        target={link?.external ? '_blank' : undefined}
                        rel={link?.external ? 'noreferrer' : undefined}
                        className='text-sm text-muted-foreground transition-colors hover:text-foreground'
                      >
                        {link.title}
                        <span className='sr-only'>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <section id='newsletter' aria-labelledby='newsletter-heading' className='space-y-3'>
            <h4 className='text-base font-medium'>Subscribe to our newsletter</h4>
            <SubscribeToNewsletterForm />
          </section>
        </section>
        <ThemeToggle />
      </Shell>
    </footer>
  );
}
