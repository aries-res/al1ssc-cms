module.exports = {
  ////// CONFIGURATION TEMPLATE: uncomment desired lines to override default config.
  ////// While all lines are commented, config will not change anything.
  toolbar: {
    items: [
      "heading",
      "|",
      //     'fontFamily',
      //     'fontSize',
      "fontColor",
      "|",
      "bold",
      "italic",
      "underline",
      "subscript",
      "superscript",
      "code",
      "link",
      "bulletedList",
      "numberedList",
      "insertImage",
      "strapiMediaLib",
      "|",
      "alignment",
      "indent",
      "outdent",
      "|",
      "specialCharacters",
      "blockQuote",
      "insertTable",
      "mediaEmbed",
      //   "htmlEmbed", // make sure to sanitize both on in-editor previews and on client-side if enabling: https://ckeditor.com/docs/ckeditor5/latest/api/module_html-embed_htmlembed-HtmlEmbedConfig.html#member-sanitizeHtml
      "codeBlock",
      "horizontalLine",
      "|",
      "fullScreen",
      "undo",
      "redo",
    ],
    // shouldNotGroupWhenFull: true
  },
  image: {
    styles: ["alignLeft", "alignCenter", "alignRight"],
    resizeOptions: [
      {
        name: "resizeImage:original",
        value: null,
        icon: "original",
      },
      {
        name: "resizeImage:25",
        value: "25",
        icon: "small",
      },
      {
        name: "resizeImage:50",
        value: "50",
        icon: "medium",
      },
      {
        name: "resizeImage:75",
        value: "75",
        icon: "large",
      },
    ],
    toolbar: [
      "imageStyle:alignLeft",
      "imageStyle:alignCenter",
      "imageStyle:alignRight",
      "|",
      "imageTextAlternative",
      "|",
      "resizeImage:25",
      "resizeImage:50",
      "resizeImage:75",
      "resizeImage:original",
      "|",
      "linkImage",
    ],
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      //     'tableProperties',
      "tableCellProperties",
    ],
  },
  heading: {
    options: [
      { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
      {
        model: "heading1",
        view: "h1",
        title: "Heading 1",
        class: "ck-heading_heading1",
      },
      {
        model: "heading2",
        view: "h2",
        title: "Heading 2",
        class: "ck-heading_heading2",
      },
      {
        model: "heading3",
        view: "h3",
        title: "Heading 3",
        class: "ck-heading_heading3",
      },
      {
        model: "heading4",
        view: "h4",
        title: "Heading 4",
        class: "ck-heading_heading4",
      },
    ],
  },
  //   htmlEmbed: {
  //     showPreviews: true,
  //   },
};
