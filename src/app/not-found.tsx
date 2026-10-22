import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  const fakeCipher = `U2FsdGVkX19+eJ3RbNqU4g==`;

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center space-y-6">
        <div
          className={`${styles.card} bg-gray-900 border border-gray-700 rounded-lg p-6 shadow-md`}
        >
          <p
            className={`${styles.cipher} font-mono text-green-400 text-sm sm:text-base break-words pb-4`}
          >
            {fakeCipher} :: error <br />
            Page not found.
          </p>

          <p className="text-lg text-gray-300 pb-3">
            Even quantum attackers couldn't recover this one.
          </p>

          {/* CTA */}
          <Link
            href="/"
            className="inline-block no-underline bg-accent2 font-semibold px-5 py-2 rounded-lg shadow hover:bg-accent"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
