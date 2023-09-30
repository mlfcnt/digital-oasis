// Set the title of the page to be the stay title, note that we no longer use

import { getAllStays, getStayById } from "@/lib/api";
import Link from "next/link";

// e.g. next/head in app dir
export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const { title } = await getStayById(id);
  return {
    title,
  };
}

type Stay = {
  title: string;
  date: string;
};

export default async function Stay({
  params: { id },
}: {
  params: { id: string };
}) {
  const { html, title, date } = await getStayById(id);
  return (
    <div>
      <div className="mb-4 text-2xl">
        <Link href={"/"}>{"Digital Oasis"}</Link>
      </div>
      <article className="flex flex-1">
        <h1 className={"text-4xl mb-8 text-center"}>{title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className="text-lg mx-24"
        />
      </article>
    </div>
  );
}
