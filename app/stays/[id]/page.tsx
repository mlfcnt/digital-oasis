// Set the title of the page to be the stay title, note that we no longer use

import { getAllStays, getStayById } from "@/lib/api";

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
    <article>
      <h1>{title}</h1>
      <h4>{date}</h4>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
