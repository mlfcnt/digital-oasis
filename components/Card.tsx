import { Paper, Text, Title, Button, rem } from "@mantine/core";
import Link from "next/link";
import { Stay } from "@/lib/api";

type CardProps = Pick<Stay, "id" | "category" | "image" | "title">;

export const Card = ({ image, title, category, id }: CardProps) => {
  return (
    <Link href={`/stays/${id}`}>
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        style={{ backgroundImage: `url(${image})`, height: "800px" }}
        className="flex flex-col justify-between items-start bg-center bg-auto"
      >
        <h3 className={"text-slate-50 opacity-0 uppercase"}>{category}</h3>

        <h2 className={"text-4xl text-slate-50"}>{title}</h2>
      </Paper>
    </Link>
  );
};
