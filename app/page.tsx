import { getAllStays } from "@/lib/api";
import Link from "next/link";

export default async function Home() {
  const stays = await getAllStays();
  return (
    <div>
      <div>
        <h1 className="mb-4 text-2xl font-semibold">Digital Oasis</h1>
        <div className="flex flex-1">
          <ul>
            {stays.map((stay) => {
              const { title, id } = stay;
              return (
                <li key={id} className="text-lg">
                  <Link href={`/stays/${id}`}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
