"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async afterUpdate(result, params, data) {
      const submenus = result.menu.filter(
        (item) => item.__component === "general.submenu"
      );
      for (const submenu of submenus) {
        // Store the submenu's title and pages (title & url) it contains
        const submenuParent = {
          title: submenu.title,
          pages: submenu.pages.map((page) => {
            const { title, url } = page;
            return { title, url };
          }),
        };
        // Save this information in all the pages contained by the submenu
        // so that one can know what submenu in header a page belongs to
        // and what other pages its parent submenu contains (i.e. its siblings)
        await Promise.all(
          submenu.pages.map(async (page) => {
            await strapi
              .query("generic-page")
              .update({ id: page.id }, { submenuParent });
          })
        );
      }
    },
  },
};
