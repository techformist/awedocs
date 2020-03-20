module.exports = {
  base: "/",

  title: "awedocs",
  description: "Awesome docs",

  themeConfig: {
    label: "English",
    editLinkText: "Edit this page on GitHub",
    lastUpdated: "Last Updated",
    nav: require("./nav"),
    sidebar: [
      { title: "Home", children: [""] },
      {
        title: "Misc",
        children: ["more"]
      }
    ],
    repo: "prashanth1k/repository-does-not-exist",
    editLinks: true
  },

  plugins: {
    "@vuepress/back-to-top": {}
  }
};
