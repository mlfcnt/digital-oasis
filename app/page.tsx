import { getAllStays } from "@/lib/api";
import Link from "next/link";

export default async function Home() {
  const stays = await getAllStays();
  return (
    <div>
      <div>
        <h1>Digital Oasis</h1>

        <h2>All stays:</h2>
        <ul>
          {stays.map((stay) => {
            const { title, id } = stay;
            return (
              <li key={id}>
                <Link href={`/stays/${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
