import { describe, expect, it } from 'vitest';
import { practice } from '@/lib/practice';

describe('Verified practice contact details', () => {
  it('uses the telephone provided by the user rather than the flyer number', () => {
    expect(practice.phone).toBe('+27 18 061 0069');
    expect(practice.phoneHref).toBe('tel:+27180610069');
  });
  it('uses the user-provided street address', () => {
    expect(practice.address).toBe('10 Tillard Street, Golf View, 2745');
  });
});