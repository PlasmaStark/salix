import { faComments, faMugHot} from '@fortawesome/free-solid-svg-icons';
import NavCard from './NavCard';

const categories = [
  {
    href: '/talks',
    icon: faComments,
    title: 'Talks',
    description: 'Public talks and public outreach.',
  },
  {
    href: '/the-digest',
    icon: faMugHot,
    title: 'The Digest',
    description: 'Monthly cryptographic digest.',
  },
];

export default function AcademiaCategories() {
  return (
    <section id="categories" className="mb-16 mt-2 sm:mt-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 items-stretch">
        {categories.map(({ href, icon, title, description }) => (
          <NavCard
            key={href}
            href={href}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  );
}