"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faBook,
  faX,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function ProfileInfo({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setOpen(false);
        }
      }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div
      className={`text-white ${
        compact
          ? " mb-1 flex items-center gap-4 relative ml-1"
          : "space-y-4 w-full px-2"
      }`}
    >
      {/* Profile image */}
      <div className={compact ? "" : "flex justify-center"}>
        <Image
          src="/images/profile-image.webp"
          alt="Leonardo's profile image"
          width={compact ? 70 : 128}
          height={compact ? 70 : 128}
          className="rounded-full border-2 border-accent object-cover"
        />
      </div>

      {/* Name and dropdown in compact mode */}
      <div className={compact ? "w-full" : "text-center"}>
        {compact ? (
          <>
            <div className="flex items-center gap-3">
              <h2 className="text-lg text-accent font-semibold">
                Leonardo Errati
              </h2>

              {/* Pulsante affianco al nome */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setOpen(!open)}
                  className={`ml-4 px-4 py-1 rounded-full text-sm transition ${
                    open
                      ? "bg-accent hover:bg-accent-dark"
                      : "bg-accent2 hover:bg-accent"
                  }`}
                  aria-haspopup="true"
                  aria-expanded={open}
                >
                  Follow
                </button>

                {/* Dropdown menu animato */}
                {open && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-md shadow-lg origin-top-right
                    animate-fade-slide z-50"
                    style={{ animationFillMode: "forwards" }}
                  >
                    <div className="flex flex-col p-2 space-y-2">
                      {/* Qui i tuoi DropdownLink */}
                      <DropdownLink
                        href="https://github.com/PlasmaStark"
                        icon={faGithub}
                        label="GitHub"
                      />
                      <DropdownLink
                        href="https://www.linkedin.com/in/leonardo-errati-76507b213"
                        icon={faLinkedin}
                        label="LinkedIn"
                      />
                      <DropdownLink
                        href="https://orcid.org/0009-0004-0460-9742"
                        iconClass="ai ai-orcid"
                        label="ORCID"
                      />
                      <DropdownLink
                        href=""
                        iconClass="ai ai-google-scholar"
                        label="Scholar"
                      />
                      <DropdownLink
                        href="https://www.polito.it/personale?p=leonardo.errati"
                        icon={faIdCard}
                        label="PoliTo"
                      />
                      <DropdownLink
                        href="https://www.goodreads.com/user/show/155458214-leonardus-iii-emperor-of-taured"
                        icon={faBook}
                        label="GoodReads"
                      />
                      <DropdownLink
                        href="https://x.com/PlasmaStark"
                        icon={faX}
                        label="Twitter/X"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Mobile */}
            <p className="text-sm italic mt-1 mb-0">
              Cryptography PhD student @ PoliTo, Italy.
            </p>
          </>
        ) : (
          <>
            {/* Desktop */}
            <h2 className="text-lg text-accent font-semibold">
              Leonardo Errati
            </h2>
            <p className="text-sm italic">
              PhD student at Polytechnic of Turin in the Cryptography and Number
              Theory group.
            </p>
            <p className="flex items-center justify-center gap-2 mt-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                aria-hidden="true"
                className="text-white"
              />
              Turin, Italy 🇮🇹
            </p>
          </>
        )}
      </div>

      {/* Only show full list in non-compact version 
      unitn: https://webapps.unitn.it/du/it/Persona/PER0208861*/}
      {!compact && (
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <SocialLink
            href="https://github.com/PlasmaStark"
            icon={faGithub}
            label="GitHub"
          />
          <SocialLink
            href="https://www.linkedin.com/in/leonardo-errati-76507b213"
            icon={faLinkedin}
            label="LinkedIn"
          />
          <SocialLink
            href="https://orcid.org/0009-0004-0460-9742"
            iconClass="ai ai-orcid"
            label="ORCID"
          />
          <SocialLink
            href=""
            iconClass="ai ai-google-scholar"
            label="Scholar"
          />
          <SocialLink
            href="https://www.polito.it/personale?p=leonardo.errati"
            icon={faIdCard}
            label="PoliTo"
          />
          <SocialLink
            href="https://www.goodreads.com/user/show/155458214-leonardus-iii-emperor-of-taured"
            icon={faBook}
            label="GoodReads"
          />
          <SocialLink
            href="https://x.com/PlasmaStark"
            icon={faX}
            label="Twitter/X"
          />
        </div>
      )}
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
  icon?: any;
  iconClass?: string;
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
        <i className={`${iconClass} text-white text-sm`} />
      )}
      <span>{label}</span>
    </Link>
  );
}

function DropdownLink({
  href,
  icon,
  iconClass,
  label,
}: {
  href: string;
  icon?: any;
  iconClass?: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-white text-sm px-2 py-1 hover:bg-accent rounded transition no-underline"
    >
      {icon ? (
        <FontAwesomeIcon icon={icon} className="w-4 h-4" />
      ) : (
        <i className={`${iconClass} text-white text-sm`} />
      )}
      <span>{label}</span>
    </Link>
  );
}
