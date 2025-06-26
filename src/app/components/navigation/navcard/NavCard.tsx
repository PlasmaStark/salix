import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

type NavCardProps = {
  href: string;
  icon: IconDefinition;
  title: string;
  description: string;
};

export default function NavCard({ href, icon, title, description }: NavCardProps) {
  return (
    <Link href={href} className="no-underline">
      <div className="bg-gray-800 rounded-lg shadow-md p-6 sm:p-4 text-center border-2 border-transparent transition-all hover:border-accent hover:scale-105 group">
        <div className="flex justify-center mb-4">
          <FontAwesomeIcon
            icon={icon}
            style={{ height: "2.5rem", width: "2.5rem" }}
            className="text-accent transition-transform group-hover:rotate-12"
          />
        </div>
        <h3 className="text-xl text-accent font-bold mb-2">{title}</h3>
        <p className="text-white text-sm sm:text-base">{description}</p>
      </div>
    </Link>
  );
}
