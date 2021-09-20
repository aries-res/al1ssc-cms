# How to use CMS

Since the website has a lot of content, Strapi (the CMS) structures website content into different content-types:

1. **Collection-types** - It allows creating multiple entries which is why each collection-type is divided into 2 interfaces:

   1. **the list view** that shows all entries for a collection-type.
   2. **the edit view** that allows editing a particular entry.

   Examples of Collection-types include:

   - `GenericPages` because there are more than one page in the website.
   - `NewsPosts` because there are more than one news entry that you want to post on website.

2. **Single-types** - It allows creating only one default entry and hence in each single-type, there is only edit view and no list view.

   Examples of Single-types include:

   - `Homepage` because there is only one homepage in the website.
   - `Header` because entire website has a single header.

All content-types (i.e. both Collection-types and Single-types) are shown in sidebar, you (as a content editor) can click on each and add/read/edit/delete their content. Though there are several other options in sidebar but they're meant for developers, so you need not to concern yourself with them except for Media Library.

## Homepage

Clicking on `Homepage` (under SINGLE TYPES in sidebar), will open an edit view for homepage with all the fields (textbox, textarea, images, etc.) that you can edit. The different fields are structured almost same as they are displayed in homepage on website. Homepage has following sections:

1. Banner
2. About
   - Title: to edit title of this section shown on website (default is About)
   - Description: Dont' use headings, media (images, videos), tables
   - Carousel ([repeatable component](https://strapi.io/documentation/user-docs/latest/content-manager/writing-content.html#repeatable-components)): It allows to add, delete, reorder captioned images.
3. Objectives - Each Image and objective
4. News & Updates - Link to NewsPosts (can show 3 or 6 latest news posts)
5. Resources

## Generic Pages

GenericPages as the name suggests, is a collection of Pages that contain almost all possible content items modelled in a flexible structure. They're unlike special pages (like Homepage) that have very specific content items modelled in a specific structure.

### Viewing all pages

Clicking on `GenericPages` (under COLLECTION TYPES in Sidebar) will open the "list view" enlisting all pages (entries for GenericPages). From here, you can:

- make a textual search or set filters to find specific entries
- create a new entry
- duplicate, edit or delete an entry

Although the CMS interface is intuitive enough to perform these actions but if you still need help, you can learn it from [this guide](https://strapi.io/documentation/user-docs/latest/content-manager/introduction-to-content-manager.html#collection-types).

### Editing a page

Clicking on an entry in list view of GenericPages will open the edit view for that entry (page). It consists of following fields:

1. Title (short text): It's the title of the page that is shown in header and breadcrumbs so it should be concise (not more than 3 words ideally).
2. Url (short text): It's the url of the page at which this page can be acessed in website. The url must respect UNIX file path conventions (no spaces between words and `/` to separate parent-child) and must be relative (i.e. with `/` as prefix) - for e.g. `/about-adityal1`. If you are using nested url (for. e.g. `/analysis-tools/tool-1`), it's your responsiblity to make sure that the page at parent path (i.e. `/analysis-tools`) already exists.
3. Content (dynamic zone): Here you can add different type of content items:
   1. `richText`: Must have one with heading-1 for the page
   2. `entireCollection`:
   3. `app`:

## Media Library

It allows you to manage all media assets (i.e. files like images, videos, pdf, zip, etc.) uploaded to the website.

## Glossary

- Long text
- Short text
- Rich text
- Breadcrumbs
