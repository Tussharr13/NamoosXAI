interface BrandProps {
  size?: number;
  className?: string;
  src?: string; // optional explicit image source override
}

type FullVariant = 'light' | 'dark';

export function BrandFull({ size = 160, className = '', variant = 'light', src }: BrandProps & { variant?: FullVariant }) {
  // Prefer user's new provided file for both variants
  const candidates = [
    '/4-removebg-preview.png',
    '/4.png',
    '/3-Photoroom.png',
    '/3.png',
    variant === 'dark' ? '/namoosx-logo-full-dark.png' : '/namoosx-logo-full.png',
    variant === 'dark' ? '/logos/namoosx-logo-full-dark.png' : '/logos/namoosx-logo-full.png',
  ];
  const resolvedSrc = src || candidates[0];
  return (
    <img
      src={resolvedSrc}
      alt="NamoosX"
      style={{ width: size, height: 'auto' }}
      className={className}
      onError={(e) => {
        const target = e.currentTarget as HTMLImageElement;
        const retryIndex = parseInt(target.dataset.retry || '0', 10);
        if (retryIndex < candidates.length - 1) {
          target.dataset.retry = String(retryIndex + 1);
          target.src = candidates[retryIndex + 1];
          return;
        }
        target.style.display = 'none';
      }}
    />
  );
}

export function BrandIcon({ size = 40, className = '' }: BrandProps) {
  const candidates = ['/namoosx-icon.png', '/logos/namoosx-icon.png', '/4.png'];
  return (
    <img
      src={candidates[0]}
      alt="NamoosX Icon"
      width={size}
      height={size}
      className={className}
      onError={(e) => {
        const target = e.currentTarget as HTMLImageElement;
        const retryIndex = parseInt(target.dataset.retry || '0', 10);
        if (retryIndex < candidates.length - 1) {
          target.dataset.retry = String(retryIndex + 1);
          target.src = candidates[retryIndex + 1];
          return;
        }
        target.style.display = 'none';
      }}
    />
  );
}


