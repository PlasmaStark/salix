import { faUser, faComments, faFlask, faMugHot, faPenNib, faGamepad} from '@fortawesome/free-solid-svg-icons';
import NavCard from './NavCard';

const categories = [
  {
    href: '/about',
    icon: faUser,
    title: 'About Me',
    description: 'Find out what I do and why.',
  },
  {
    href: '/academia',
    icon: faFlask,
    title: 'Academia',
    description: 'Academic research and activities.',
  },
  {
    href: '/chronicles',
    icon: faPenNib,
    title: 'Chronicles',
    description: 'A collection of tales and legends.',
  },
  {
    href: '/games',
    icon: faGamepad,
    title: 'Games',
    description: 'Games played & scored with a friend.',
  },
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
    description: 'Periodic cryptographic digest.',
  },
];

export default function HomeCategories() {
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