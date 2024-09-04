import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../../../sanity/lib/env";
import dev from "../dev";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: !dev,
  stega: {
    enabled: false,
    studioUrl: "/admin",
  },
});
