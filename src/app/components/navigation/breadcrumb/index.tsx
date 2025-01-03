'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type BreadcrumbProps = {};

export default function Breadcrumb({ }: BreadcrumbProps) {
    const pathname = usePathname();
    const parts = pathname.split('/').filter(Boolean);
    const nonClickableParts = ["tags"];

    return (
        <nav className="text-sm text-gray mb-4">
            <>
                <Link href="/" className="hover:underline text-gray no-underline">
                    home
                </Link>
                {parts.length > 0 && <span className="mx-2">/</span>}
                {parts.map((part, index) => {
                    const href = '/' + parts.slice(0, index + 1).join('/');
                    const isLast = index === parts.length - 1;
                    const isNonClickable = nonClickableParts.includes(part);

                    return (
                        <span key={href}>
                            {!isNonClickable ? (
                                !isLast ? (
                                    <Link href={href} className="hover:underline text-gray no-underline">
                                        {decodeURIComponent(part).toLowerCase()}
                                    </Link>
                                ) : (
                                    <span>{decodeURIComponent(part).toLowerCase()}</span>
                                )
                            ) : (
                                <span>{decodeURIComponent(part).toLowerCase()}</span>
                            )}

                            {/* Separatore "/"*/}
                            {!isLast && <span className="mx-2">/</span>}
                        </span>
                    );
                })}
            </>
        </nav>
    );
}
