import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, ArrowRight, Phone, Menu, X, Stethoscope, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { practice } from '@/lib/practice';
import { PracticeMap } from '@/components/practice-map';
import practiceLogo from '@/assets/practice-logo.jpg.asset.json';

export function Brand({ uploaded = false }: { uploaded?: boolean }) {
  if (uploaded) return <Link to="/" className="brand" aria-label="Dr E. L. Mpshe Surgery home"><img src={practiceLogo.url} alt="Dr E. L. Mpshe Surgery" width={158} height={71} className="h-11 w-auto max-w-40 object-contain" /></Link>;
  return <Link to="/" className="brand" aria-label="Dr E. L. Mpshe Surgery home"><span className="brand-symbol"><Stethoscope size={27} strokeWidth={1.7} /></span><span>Dr E. L. Mpshe<small>Medical Surgery</small></span></Link>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const links = <><Link to="/" activeOptions={{ exact: true }} onClick={() => setOpen(false)}>Home</Link><Link to="/services" onClick={() => setOpen(false)}>Our services</Link><Link to="/iv-drips" onClick={() => setOpen(false)}>IV drips</Link><Link to="/about" onClick={() => setOpen(false)}>Meet the doctor</Link><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></>;
  return <div className="navigation-float"><header className="site-header"><Brand uploaded /><nav className="desktop-nav" aria-label="Main navigation">{links}</nav><div className="header-actions"><Button asChild size="lg" className="header-book"><a href={practice.phoneHref}>Book a visit <ArrowUpRight /></a></Button><Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div></header>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{links}<a href={practice.phoneHref}>Call to book a visit</a></nav>}</div>;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow"><span className="eyebrow-dot" />{children}</div>;
}

export function CallButton({ children = 'Book a consultation' }: { children?: React.ReactNode }) {
  return <Button asChild size="lg"><a href={practice.phoneHref}>{children}<ArrowUpRight /></a></Button>;
}

export function ContactBand() {
  return <section className="section contact-band"><div><h2>Your next step to better health.</h2><p>Let’s make time for you. Call the practice to arrange your visit.</p></div><Button asChild variant="inverse" size="lg"><a href={practice.phoneHref}><Phone />{practice.phone}<ArrowUpRight /></a></Button></section>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-top"><div className="footer-details"><Brand /><h2>Here for your health.</h2><p>General practice & IV drip services<br />in the heart of Mahikeng.</p><a href={practice.phoneHref}><Phone size={17} />{practice.phone}</a><a href={`mailto:${practice.email}`}>{practice.email}<ArrowUpRight size={14} /></a><address><MapPin size={17} /><span>10 Tillard Street, Golf View, 2745<br />Mahikeng, North West, South Africa</span></address><Button asChild variant="outline" size="lg"><a href={practice.directions} target="_blank" rel="noreferrer">Get directions<ArrowUpRight /></a></Button></div><div className="footer-map"><PracticeMap /></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Dr E. L. Mpshe Surgery</span><nav aria-label="Footer navigation"><Link to="/services">Our services</Link><Link to="/iv-drips">IV drips</Link><Link to="/contact">Get in touch<ArrowRight size={12} /></Link></nav></div></footer>;
}

export function PageHeading({ label, title, description }: { label: string; title: string; description: string }) {
  return <section className="page-heading"><Eyebrow>{label}</Eyebrow><h1>{title}</h1><p>{description}</p></section>;
}