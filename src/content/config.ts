import { defineCollection, z } from "astro:content";

const experienceCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    period: z.string(),
    role: z.string(),
    skills: z.array(z.string()),
    links: z.array(z.object({ name: z.string(), url: z.string() })),
  }),
});

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string(),
    skills: z.array(z.string()),
    features: z.array(z.object({ name: z.string(), url: z.string(), icon: z.string() })),
  }),
});

export const collections = {
  experiences: experienceCollection,
  projects: projectCollection,
};
