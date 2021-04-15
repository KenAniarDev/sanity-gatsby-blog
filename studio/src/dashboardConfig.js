export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6077e35946afefa22dfcf0b1",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ztqincbq",
                  apiId: "f0f85057-a8bc-4067-a5e7-b5e302543eae",
                },
                {
                  buildHookId: "6077e359283f4083eff9964e",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-okewwjcx",
                  apiId: "f47d4a41-dd40-4964-b2cd-2bed0cc81356",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/KenAniarDev/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-okewwjcx.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
