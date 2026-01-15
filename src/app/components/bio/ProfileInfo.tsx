"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { socialLinks } from "@/contents/socialLinks";

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

    function handleScroll() {
      setOpen(false);
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleScroll);
      window.addEventListener("blur", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("blur", handleScroll);
    };
  }, [open]);

  return (
    <div
      className={`text-white ${
        compact
          ? "mb-1 mt-2 flex items-center gap-4 relative ml-1"
          : "space-y-4 w-full px-2 pt-8"
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
                  Links
                </button>

                {open && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-md shadow-lg origin-top-right animate-fade-slide z-50"
                    style={{ animationFillMode: "forwards" }}
                  >
                    <div className="flex flex-col p-2 space-y-2">
                      {socialLinks.map(({ href, icon, iconClass, label }) => (
                        <DropdownLink key={href} {...{ href, icon, iconClass, label }} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <p className="text-sm italic mt-1 mb-2 sm:mb-0">
              Cryptography PhD student @ PoliTo, Italy.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-lg text-accent font-semibold">
              Leonardo Errati
            </h2>
            <p className="text-sm italic">
              PhD student at Polytechnic of Turin in the Cryptography and Number
              Theory group.
            </p>
            <p className="text-sm flex items-center justify-center gap-2 mt-2">
                🇮🇹  Turin, Italy
            </p>
          </>
        )}
      </div>

      {!compact && (
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {socialLinks.map(({ href, icon, iconClass, label }) => (
            <SocialLink key={href} {...{ href, icon, iconClass, label }} />
          ))}
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
      className="flex items-center gap-2 px-2 py-1 bg-gray-800 text-white rounded-full text-xs hover:bg-accent transition no-underline"
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
