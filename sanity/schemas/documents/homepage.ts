import { group } from "console";

const homepage = {
  name: "homepage",
  type: "document",

  groups: [{ name: "pageSettings" }, { name: "content" }],

  fields: [
    {
      name: "title",
      type: "string",
      description: "The name of the page, to be used in links and navigation",
      group: "pageSettings",
    },
    {
      name: "slug",
      type: "slug",
      description:
        "The slug is the part of a URL which identifies a particular page on a website in an easy to read form. It's usually the last part of the URL. Use ´index´ for the homepage.",
      options: {
        source: "title",
      },
      group: "pageSettings",
    },
    {
      name: "contentBlocks",
      type: "array",
      description: "Add, edit, and reorder content sections on this page",
      group: "content",
      of: [{ name: "hero", type: "hero" }],
    },
  ],
};

export default homepage;
