import { getAllStays, getStayById } from "@/lib/api";
import Image from "next/image";
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

export default async function Stay({ params }: { params: { id: string } }) {
  const { html, title, image } = await getStayById(params.id);
  return (
    <div>
      <article className="flex flex-1">
        <h1 className={"text-4xl mb-8 text-center"}>{title}</h1>
        <div>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            className="text-lg mx-24"
          />
          <Image
            className="m-auto my-12"
            alt={`Image of ${image}`}
            src={image}
            height={1000}
            width={1000}
          />
        </div>
      </article>
    </div>
  );
}

export const generateStaticParams = async () => {
  const stays = await getAllStays();

  return stays.map((stay) => ({
    id: stay.id,
  }));
};
