export const gcd = (a: number, b: number): number => {
  if (!b) return a;
  return gcd(b, a % b);
};

export const simplifyFraction = (numerator: number, denominator: number) => {
  const divisor = gcd(Math.abs(numerator), Math.abs(denominator));
  return { n: numerator / divisor, d: denominator / divisor };
};

export const formatIndonesianDecimal = (num: number | string): string => {
  return num.toString().replace('.', ',');
};

export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};
