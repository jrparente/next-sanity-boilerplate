import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import schema from "./schemas";
import { apiVersion, dataset, projectId } from "./lib/env";
import { structure } from "./structure";

export default defineConfig({
  name: "nextjs-sanity",
  title: "NextJS Sanity",
  projectId,
  dataset,
  basePath: "/admin",

  plugins: [
    structureTool({ name: "content", title: "Website Content", structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],

  tasks: { enabled: false },
  scheduledPublishing: { enabled: false },

  schema,
});
