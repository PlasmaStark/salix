import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faIdCard,
  faBook,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function ProfileInfo({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`text-white ${
        compact ? "flex items-center gap-4" : "space-y-4 w-full px-2"
      }`}
    >
      {/* Profile image */}
      <div className={compact ? "" : "flex justify-center"}>
        <Image
          src="/profile-image.jpg"
          alt="Leonardo's profile"
          width={compact ? 48 : 128}
          height={compact ? 48 : 128}
          className="rounded-full border-2 border-accent object-cover"
        />
      </div>

      {/* Name and title */}
      <div className={compact ? "" : "text-center"}>
        <h2 className={`text-lg text-accent font-semibold`}>
          Leonardo Errati
        </h2>
        <p className="text-sm italic">PhD student in cryptography at PoliTo, Italy.</p>

        {/* Only show links in full (non-compact) version */}
        {!compact && (
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <SocialLink href="mailto:leonardoerrati.lwe@gmail.com" icon={faEnvelope} label="Email" />
            <SocialLink href="https://github.com/PlasmaStark" icon={faGithub} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/leonardo-errati-76507b213" icon={faLinkedin} label="LinkedIn" />
            <SocialLink href="https://orcid.org/0009-0004-0460-9742" iconClass="ai ai-orcid" label="ORCID" />
            <SocialLink href="https://www.polito.it/personale?p=leonardo.errati" icon={faIdCard} label="PoliTo" />
            <SocialLink href="https://webapps.unitn.it/du/it/Persona/PER0208861" icon={faIdCard} label="UniTn" />
            <SocialLink href="https://www.goodreads.com/user/show/155458214-leonardus-iii-emperor-of-taured" icon={faBook} label="GoodReads" />
            {/*<SocialLink href="#" icon={faIdCard} label="Google Scholar (soon)" />*/}
            <SocialLink href="https://x.com/PlasmaStark" icon={faX} label="Twitter/X" />
          </div>
        )}
      </div>
    </div>
  );
}

function SocialLink({
  href,
  icon,
  iconClass,
  label,
}: {
  href: string;
  icon?: any; // solo FontAwesome
  iconClass?: string; // Academicons
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-2 py-1 bg-gray-800 text-white rounded-full text-sm hover:bg-accent transition no-underline"
    >
      {icon ? (
        <FontAwesomeIcon icon={icon} className="w-4 h-4" />
      ) : (
        <i className={`${iconClass} text-white text-sm`}></i>
      )}
      <span>{label}</span>
    </Link>
  );
}
