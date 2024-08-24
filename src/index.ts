export default function numericCompare(a: string, b: string): number {
  const regex = /(\d+)|(\D+)/g;
  const aParts = a.match(regex) || [];
  const bParts = b.match(regex) || [];

  for (let i = 0; i < Math.min(aParts.length, bParts.length); i++) {
    const aPart = aParts[i];
    const bPart = bParts[i];

    if (!isNaN(+aPart) && !isNaN(+bPart)) {
      const diff = parseInt(aPart, 10) - parseInt(bPart, 10);
      if (diff !== 0) return diff;
    } else {
      const diff = aPart.localeCompare(bPart);
      if (diff !== 0) return diff;
    }
  }

  return aParts.length - bParts.length;
}
