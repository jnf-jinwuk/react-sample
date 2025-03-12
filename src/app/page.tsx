import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href='/color'>color slice</Link>
        </li>
        <li>
          <Link href='/counter'>counter slice</Link>
        </li>
        <li>
          <Link href='/pokemonList'>axios api</Link>
        </li>
      </ul>
    </main>
  );
}
