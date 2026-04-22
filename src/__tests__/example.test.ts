import { describe, it, expect } from 'vitest';

describe('Example test suite', () => {
  it('should pass a simple assertion', () => {
    expect(1 + 1).toBe(2);
  });

  it('should verify Vitest is configured', () => {
    expect(true).toBe(true);
  });
});
