import Image from 'next/image';
import Link from 'next/link';
import { profile } from '@/data/profile';

type BrandProps = {
  href: string;
  onClick?: () => void;
};

export function Brand({ href, onClick }: BrandProps) {
  return (
    <Link className="brand" href={href} onClick={onClick}>
      <Image
        src="/assets/images/logo/amanda-portfolio-logo-transparency.webp"
        alt=""
        width={48}
        height={48}
        loading="eager"
      />
      <span>
        <strong>{profile.name}</strong>
        <span>Engenharia & segurança</span>
      </span>
    </Link>
  );
}
