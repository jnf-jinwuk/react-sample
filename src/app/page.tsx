import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <ul>
        {['/color', '/counter', '/pokemonList', '/abilityList'].map(
          (pathName, idx) => (
            <li key={pathName + idx}>
              <Link href={pathName}>{pathName}</Link>
            </li>
          ),
        )}
      </ul>
    </main>
  );
}
