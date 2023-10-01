// lib/api.ts
import fs from "fs";
import matter from "@gr2m/gray-matter";
import { join } from "path";
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeShiki from "@leafac/rehype-shiki";
import * as shiki from "shiki";
import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();

export type Stay = {
  id: string;
  title: string;
  date: string;
  highlight: boolean;
  html: string;
  image: string;
  category: string;
};

// memoize/cache the creation of the markdown parser, this sped up the
// building of the blog from ~60s->~10s
let p: ReturnType<typeof getParserPre> | undefined;

const getParserPre = async () => {
  return (
    unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(remarkGfm)
      //@ts-ignore
      .use(rehypeShiki, {
        highlighter: await shiki.getHighlighter({ theme: "poimandres" }),
      })
      .use(rehypeStringify)
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings, {
        content: (arg) => ({
          type: "element",
          tagName: "a",
          properties: {
            href: "#" + arg.properties?.id,
            style: "margin-right: 10px",
          },
          children: [{ type: "text", value: "#" }],
        }),
      })
  );
};

function getParser() {
  if (!p) {
    p = getParserPre().catch((e) => {
      p = undefined;
      throw e;
    });
  }
  return p;
}

export const getStayById = async (id: string): Promise<Stay> => {
  const realId = id.replace(/\.md$/, "");
  const fullPath = join(process.cwd(), "_stays", `${realId}.md`);
  const { data, content } = matter(fs.readFileSync(join(fullPath), "utf8"));

  const parser = await getParser();
  const html = await parser.process(content);

  return {
    ...data,
    title: data.title,
    id: realId,
    date: `${data.date?.toISOString().slice(0, 10)}`,
    highlight: data.highlight || false,
    html: html.value.toString(),
    image:
      data.image ||
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: data.category || "",
  };
};

export const getAllStays = async (): Promise<Stay[]> => {
  const stays = await Promise.all(
    fs.readdirSync("_stays").map((id) => getStayById(id))
  );
  return stays.sort((stay1, stay2) => (stay1.date > stay2.date ? -1 : 1));
};

export const getHighlightedStays = async (): Promise<Stay[]> => {
  const stays = await getAllStays();
  return stays.filter((x) => x.highlight);
};
