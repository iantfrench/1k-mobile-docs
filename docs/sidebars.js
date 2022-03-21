/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check


/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mySidebar: [
    {
      type: "category",
      label: "BlockID Developer SDK",
      items: [
        "index", 
      ],
    },
    {
      type: "category",
      label: "BlockID Universal Web Login (UWL)",
      items: [
        "uwl/uwl1",
        "uwl/uwl-create-session",
        "uwl/uwl3",
        "uwl/uwl-demo-overview",
      ],
    },
    {
      type: "category",
      label: "BlockID One-Time Passcodes (OTP)",
      items: ["otp/otp1", "otp/otprequest", "otp/otp3"],
    },
    {
      type: "category",
      label: "BlockID IDVerify",
      items: [
        "idverify/id1",
        "idverify/id2",
        "idverify/id3",
        "idverify/id4",
        "idverify/id5",
      ],
    },
    {
      type: "category",
      label: "BlockID WebAuthN",
      items: [
        "webauthn/webauthn",
        "webauthn/webauthn-registration",
        "webauthn/webauthn-authentication",
      ],
    },
    {
      type: "category",
      label: "BlockID Mobile SDK",
      items: [
        "mobile-sdk/mobile-sdk-overview",
        {
          type: "category",
          label: "API Reference",
          items: [
            "mobile-sdk/api-reference/mobile-sdk-api-reference-ios",
            "mobile-sdk/api-reference/mobile-sdk-api-reference-android",
          ],
        },
        {
          type: "category",
          label: "Integration Guide",
          items: [
            "mobile-sdk/integration-guide/mobile-sdk-integration-guide-ios",
            "mobile-sdk/integration-guide/mobile-sdk-integration-guide-android",
          ],
        },
      ],
    },    
    //will show in future time
    // {
    //   type: "category",
    //   label: "BlockID Developer API",
    //   items: ["api/api1", "api/otp/api2"],
    // },
    // By default, Docusaurus generates a sidebar from the docs folder structure
    /*tutorialSidebar: [
    {
      type: 'autogenerated', dirName: '.'
    }
  ],
*/
    // But you can create a sidebar manually
    /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
  ],
};

module.exports = sidebars;
