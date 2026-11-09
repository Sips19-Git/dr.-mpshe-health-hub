import { describe, expect, it } from 'vitest';
import { ivTherapies, practice } from '@/lib/practice';

describe('Verified practice contact details', () => {
  it('uses the telephone provided by the user rather than the flyer number', () => {
    expect(practice.phone).toBe('+27 18 061 0069');
    expect(practice.phoneHref).toBe('tel:+27180610069');
  });
  it('uses the user-provided street address', () => {
    expect(practice.address).toBe('10 Tillard Street, Golf View, 2745');
  });
});

describe('Uploaded IV therapy price list', () => {
  it.each([
    ['Skin glow', 1000], ['Sinus & allergy support', 500],
    ['Immune booster', 550], ['Weight loss support', 1000],
    ['Antioxidant', 1000], ['Libido / sexual health', 1500],
    ['Energy booster', 650], ['Detox drip', 1300],
    ['Event recovery', 500], ['General booster', 500],
    ['Hair & nail support', 600], ['Ultimate hydration', 450],
  ])('%s costs R%s', (name, price) => {
    expect(ivTherapies.find(therapy => therapy.name === name)?.price).toBe(price);
  });
  it('includes consultation and review in weight loss support', () => {
    expect(ivTherapies.find(therapy => therapy.name === 'Weight loss support')?.note).toBe('Includes consultation & review');
  });
  it('includes four drips in the detox package', () => {
    expect(ivTherapies.find(therapy => therapy.name === 'Detox drip')?.note).toBe('4 drips');
  });
});