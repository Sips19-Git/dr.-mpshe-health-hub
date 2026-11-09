export const practice = {
  name: 'Dr E. L. Mpshe Surgery',
  doctor: 'Dr Letlhogonolo Mpshe',
  phone: '+27 18 061 0069',
  phoneHref: 'tel:+27180610069',
  email: 'drelmpshe@gmail.com',
  address: '10 Tillard Street, Golf View, 2745',
  location: 'Mahikeng, North West, South Africa',
  directions: 'https://www.google.com/maps/search/?api=1&query=10+Tillard+Street+Golf+View+Mahikeng+2745+South+Africa',
};

export const services = [
  { title: 'General consultations', description: 'Personalised care for common illnesses, routine check-ups, diagnosis and treatment, and everyday health concerns.' },
  { title: 'Screening & chronic care', description: 'Health screenings, blood pressure monitoring, and diabetes screening and management, with ongoing care tailored to you.' },
  { title: 'Preventive health & wellness', description: 'Wellness assessments, preventive healthcare and practical health advice to help you make informed decisions.' },
  { title: 'Minor wound care', description: 'Assessment and care of minor wounds, with advice on healing and follow-up where needed.' },
  { title: 'Prescriptions & referrals', description: 'Prescription reviews and management, with referrals to specialists when further assessment or treatment is needed.' },
  { title: 'IV drip services', description: 'Doctor-assessed IV drip services where clinically appropriate. Discuss your needs, suitability and available options with the practice.' },
];

export const ivTherapies = [
  { name: 'Skin glow', price: 1000 },
  { name: 'Sinus & allergy support', price: 500 },
  { name: 'Immune booster', price: 550 },
  { name: 'Weight loss support', price: 1000, note: 'Includes consultation & review' },
  { name: 'Antioxidant', price: 1000 },
  { name: 'Libido / sexual health', price: 1500 },
  { name: 'Energy booster', price: 650 },
  { name: 'Detox drip', price: 1300, note: '4 drips' },
  { name: 'Event recovery', price: 500 },
  { name: 'General booster', price: 500 },
  { name: 'Hair & nail support', price: 600 },
  { name: 'Ultimate hydration', price: 450 },
];

export function pageHead(title: string, description: string) {
  return { meta: [
    { title: `${title} | Dr E. L. Mpshe Surgery` },
    { name: 'description', content: description },
    { property: 'og:title', content: `${title} | Dr E. L. Mpshe Surgery` },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] };
}