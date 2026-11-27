/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // robots.txt and the sitemap must name the host serving the build.
  siteUrl:
    process.env.DEPLOY_TARGET === "cloudgov"
      ? "https://semper-admin-portal.app.cloud.gov"
      : "https://semperadmin.github.io/SemperAdminPortal",
  generateRobotsTxt: true,
  outDir: "out",
  trailingSlash: true,
  exclude: ["/404"],
};
