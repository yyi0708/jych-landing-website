export default {
  nav: {
    home: "Home",
    download: "Download",
    detail: "Detail",
    fqa: "FAQ",
    sponsor: "Sponsor",
    version: "Version Info",
  },
  baseInfo: {
    title: "After Wine and Tea",
    title1: "「After Wine and Tea」",
    title2:
      "Easy navigation, tab management, sentence collection, philosophy and I Ching tools",
    email: "Email",
    desc: "The core idea is to solve the problem of having too many open tabs in the browser. There are two approaches: by default, open URLs in 'iframe' mode in the new tab page to avoid too many temporary tabs; and the 'tabox URL collection' in the popup page solves the problem of categorizing, batch opening, and closing new windows or current windows, and also supports opening in incognito mode.<br/> <br/> Secondly, the new tab page provides quick navigation (commonly used URLs), warm sentences, and philosophy and I Ching modules to expand the journey of discovery;<br/> <br/> Finally, it supports base64 decoding for websites like V2EX. Select and click to decode and copy to the clipboard, making it easy for users to quickly contact.",
  },
  detail: {
    matting: {
      title: "newTab - New Tab Page",
      desc: "Convenient engine switching, quick navigation, warm sentences, philosophy and I Ching modules.",
      feature1: "Browse in iframe mode to reduce temporary multiple tabs",
      feature2: "Friendly sentence 'Yan Ruyu' card, feel the beauty of words",
      feature3:
        "I Ching 64 hexagrams, 384 lines, daily hexagram fortune, feel philosophical thinking",
      feature4:
        "Custom area module settings; support local import and export of data",
    },
    certificate: {
      title: "tabox - Tab Management",
      desc: "Manage, save, export/import, batch open/close, incognito window, tab collection.",
      feature1:
        "Support adding, deleting, editing, exporting, and importing operations",
      feature2: "Support incognito window, batch open, batch close functions",
      feature3:
        "Support opening tab collection in current window or new window",
      feature4:
        "Support right-click menu, quickly add current URL to collection",
    },
    convert: {
      title: "Toolbox - Script Tools",
      desc: "Select Base64 encoding on the website, automatically display the conversion icon, quickly decode and copy to the clipboard.",
      feature1: "Quick decoding, copy to clipboard",
      feature2: "Handle Base64 encoding for websites like V2EX",
    },
  },
  fqa: {
    title: "Frequently Asked Questions",
    fqas: [
      {
        question: "Why use the After Wine and Tea extension?",
        answer: `
          1. Avoid too many browser tabs, conveniently open commonly used URLs.<br/>
          2. Quickly switch search engines, conveniently edit URLs.<br/>
          3. Support opening in incognito window, support batch opening and closing of tabs.<br/>
          4. Discover the 'beauty of sentences', philosophical thinking of I Ching.<br/>
          5. Conveniently decode Base64 encoding, copy to clipboard.<br/>
          6. Support local import and export of data, convenient for data backup and security.<br/>
        `,
      },
      {
        question: "How to solve too many browser tabs?",
        answer:
          "1. Commonly used URLs are opened in 'iframe' mode by default.<br/>2. Tabox, manage tab windows, quickly open and close commonly used URL windows.",
      },
      {
        question:
          "What is the difference between jych-tabox and tabox extension?",
        answer: `
          1. jych-tabox, stronger UI experience.<br/>
          2. jych-tabox, added incognito window opening, ensuring safe access to special addresses.<br/>
          3. jych-tabox, platform-specific data export and import, also compatible with tabox extension user export format.<br/>
        `,
      },
    ],
  },
  fix: {
    scan: "Scan to visit",
    tip: "Scan to visit this site",
  },
};
