import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { pageHead, services } from '@/lib/practice';
import { PageHeading, ContactBand } from '@/components/practice-site';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/services')({ head: () => pageHead('General practitioner services', 'Explore GP consultations, routine check-ups, screenings, blood pressure and diabetes care, wound care, prescriptions and referrals in Mahikeng.'), component: ServicesPage });

function ServicesPage() {
  return <><PageHeading label="Our services" title="Everyday care. Your whole health." description="From a routine check-up to an ongoing health concern, receive considered medical care that starts with listening to you." /><section className="section"><div className="detail-list">{services.map(service => <article className="detail-item" key={service.title}><h3>{service.title}</h3><p>{service.description}</p>{service.title === 'IV drip services' && <Button asChild variant="link" className="px-0 mt-3"><Link to="/iv-drips">About IV drip services<ArrowUpRight /></Link></Button>}</article>)}</div><p className="fine-print">Treatment, prescriptions and referrals depend on your clinical assessment. For a medical emergency, please contact emergency services or visit the nearest emergency department.</p></section><ContactBand /></>;
}