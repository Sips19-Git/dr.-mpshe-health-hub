import { createFileRoute } from "@tanstack/react-router";
import { Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight, Stethoscope, HeartPulse, ShieldCheck, MapPin, Check, UserRound, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CallButton, ContactBand, Eyebrow } from '@/components/practice-site';
import { pageHead, practice, services } from '@/lib/practice';
import clinic from '@/assets/hero-room.png.asset.json';
import ivDrip from '@/assets/wellness-iv.png.asset.json';
import doctor from '@/assets/doctor.jpg.asset.json';

export const Route = createFileRoute("/")({
  head: () => pageHead('Your GP in Mahikeng', 'Dr Letlhogonolo Mpshe offers personalised general practitioner care, health screenings, chronic care and IV drip services in Mahikeng.'),
  component: Index,
});

function Index() {
  const icons = [Stethoscope, HeartPulse, ShieldCheck];
  return <>
    <section className="hero"><img className="hero-image" src={clinic.url} alt="A sunlit consultation room with medical anatomy posters" width={768} height={1024} fetchPriority="high" /><div className="hero-content"><Eyebrow>Dr E. L. Mpshe Surgery · Mahikeng</Eyebrow><h1>Your GP.<br /><span>Personal care.<br />In Mahikeng.</span></h1><p className="hero-copy">Thoughtful medical care for you and your family. A doctor who listens. Care that puts you first.</p><div className="hero-buttons"><CallButton>Book a visit</CallButton><Button asChild size="lg" variant="outline"><Link to="/services">Explore our services<ArrowRight /></Link></Button></div><div className="hero-location"><MapPin size={14} />Golf View, Mahikeng · North West</div></div><div className="hero-note"><Stethoscope /><div><strong>Your local general practitioner</strong>Personal care. Professional expertise.</div></div></section>
    <div className="trust-strip"><div className="trust-item"><UserRound />Patient-centred care</div><div className="trust-item"><ShieldCheck />Qualified & experienced GP</div><div className="trust-item"><HeartPulse />Health, wellness & prevention</div></div>
    <section className="section"><div className="section-heading"><div><Eyebrow>Care for every day</Eyebrow><h2>Good health starts here.</h2></div><Button asChild variant="link" className="p-0"><Link to="/services">All services<ArrowUpRight /></Link></Button></div><div className="services-grid">{services.slice(0,3).map((service,i) => { const Icon = icons[i] ?? Stethoscope; return <Link to="/services" className="service-card" key={service.title}><Icon className="service-icon" strokeWidth={1.4} /><h3>{service.title}</h3><p>{service.description}</p><span className="service-link">Learn more<ArrowRight size={14} /></span></Link>; })}</div></section>
    <section className="section iv-band wellness-feature"><img className="iv-photo" src={ivDrip.url} alt="A clinician with IV infusion equipment" width={736} height={920} loading="lazy" /><div className="iv-copy"><Eyebrow>A considered approach to wellness</Eyebrow><h2>IV drip services.<br />Carefully tailored to you.</h2><p>Your needs come first. Our IV drip services begin with a medical assessment to determine whether treatment is appropriate for you.</p><div className="inline-checks"><span><Check />Doctor-led assessment</span><span><Check />Individualised care</span></div><Button asChild size="lg"><Link to="/iv-drips">Explore IV drip services<ArrowUpRight /></Link></Button></div></section>
    <section className="section doctor-preview"><img className="doctor-photo" src={doctor.url} alt="Dr Letlhogonolo Mpshe" width={432} height={568} loading="lazy" /><div><Eyebrow>Meet your doctor</Eyebrow><h2>Dr Letlhogonolo Mpshe</h2><p className="section-intro">A general practitioner with experience in primary healthcare, hospital medicine and public health. Dr Mpshe brings a thoughtful, people-first approach to everyday medical care, with a particular interest in mental health.</p><div className="qualifications"><span className="qualification">MBChB · Cuba / UP</span><span className="qualification">Dip. Public Health · UP</span><span className="qualification">Dip. Mental Health · CMSA</span></div><Button asChild variant="outline" size="lg"><Link to="/about">More about Dr Mpshe<ArrowRight /></Link></Button></div></section>
    <ContactBand />
  </>;
}
