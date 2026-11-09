import { MapPin } from 'lucide-react';
import { practice } from '@/lib/practice';

export function PracticeMap() {
  const key = import.meta.env['VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY'];
  const query = `${practice.address}, Mahikeng, North West, South Africa`;
  if (!key) return <div className="map-unavailable"><MapPin /><p>{query}</p><a href={practice.directions} target="_blank" rel="noreferrer">View on Google Maps</a></div>;
  return <iframe className="practice-map" title="Dr E. L. Mpshe Surgery location on Google Maps" src={`https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(key)}&q=${encodeURIComponent(query)}`} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />;
}