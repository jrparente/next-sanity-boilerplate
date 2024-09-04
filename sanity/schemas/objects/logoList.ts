const logoList = {
  title: "Logo List",
  name: "logoList",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      title: "Logos",
      name: "logos",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};

export default logoList;
