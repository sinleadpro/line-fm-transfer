import { flex2html } from "./transfer.js";

let testFmJson = {
  type: "bubble",
  // hero: {
  //   type: "image",
  //   url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
  //   size: "full",
  //   aspectMode: "cover",
  // },
  body: {
    type: "box",
    layout: "vertical",
    contents: [
      {
        type: "text",
        text: "訂單出貨通知",
        weight: "bold",
        size: "xl",
      },
      {
        type: "box",
        layout: "vertical",
        margin: "lg",
        spacing: "sm",
        contents: [
          {
            type: "box",
            layout: "baseline",
            spacing: "none",
            contents: [
              {
                type: "text",
                text: "出貨時間",
                color: "#aaaaaa",
                size: "sm",
                flex: 5,
                wrap: true,
              },
              {
                type: "text",
                text: "2023/08/15 10:00",
                wrap: true,
                color: "#666666",
                size: "sm",
                flex: 5,
                offsetBottom: "none",
              },
            ],
            paddingBottom: "sm",
          },
          {
            type: "text",
            text: "親愛的顧客您好,您所訂購的商品已經出貨了。歡迎您再次到xx商店購物，祝您購物愉快！",
            wrap: true,
          },
        ],
        height: "100px",
      },
    ],
  },
  // footer: {
  //   type: "box",
  //   layout: "vertical",
  //   spacing: "sm",
  //   contents: [
  //     {
  //       type: "button",
  //       style: "link",
  //       height: "sm",
  //       action: {
  //         type: "uri",
  //         label: "前往訂單",
  //         uri: "https://linecorp.com",
  //       },
  //     },
  //     {
  //       type: "button",
  //       style: "link",
  //       height: "sm",
  //       action: {
  //         type: "uri",
  //         label: "追蹤貨態",
  //         uri: "https://linecorp.com",
  //       },
  //     },
  //   ],
  //   flex: 0,
  // },
};

function testFunc({ testParams }) {
  const { title, subTitle, description } = testParams;
  return `<div><h1 class="title-main">${title}</h1><h3 class="title-sub">${subTitle}</h3><p class="description-text">${description}</p></div>`;
}

function lineJsonDecorator(json) {
  return {
    type: "flex",
    altText: "Flex Message",
    contents: json,
  };
}
// flex2html("flex1", {
//   type: "flex",
//   altText: "Flex Message",
//   contents: {
//     type: "bubble",
//     size: "deca",
//     hero: {
//       type: "image",
//       url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
//       size: "full",
//       aspectRatio: "20:13",
//       aspectMode: "cover",
//       action: { type: "uri", uri: "http://linecorp.com/" },
//     },
//     body: {
//       type: "box",
//       layout: "vertical",
//       contents: [
//         { type: "text", text: "Deca Bubble Size", weight: "bold", size: "xl" },
//         {
//           type: "box",
//           layout: "baseline",
//           margin: "md",
//           contents: [
//             {
//               type: "icon",
//               size: "sm",
//               url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
//             },
//             {
//               type: "icon",
//               size: "sm",
//               url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
//             },
//             {
//               type: "icon",
//               size: "sm",
//               url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
//             },
//             {
//               type: "icon",
//               size: "sm",
//               url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
//             },
//             {
//               type: "icon",
//               size: "sm",
//               url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png",
//             },
//             {
//               type: "text",
//               text: "4.0",
//               size: "sm",
//               color: "#999999",
//               margin: "md",
//               flex: 0,
//             },
//           ],
//         },
//         {
//           type: "box",
//           layout: "vertical",
//           margin: "lg",
//           spacing: "sm",
//           contents: [
//             {
//               type: "box",
//               layout: "baseline",
//               spacing: "sm",
//               contents: [
//                 {
//                   type: "text",
//                   text: "Place",
//                   color: "#aaaaaa",
//                   size: "sm",
//                   flex: 1,
//                 },
//                 {
//                   type: "text",
//                   text: "Miraina Tower, 4-1-6 Shinjuku, Tokyo",
//                   wrap: true,
//                   color: "#666666",
//                   size: "sm",
//                   flex: 5,
//                 },
//               ],
//             },
//             {
//               type: "box",
//               layout: "baseline",
//               spacing: "sm",
//               contents: [
//                 {
//                   type: "text",
//                   text: "Time",
//                   color: "#aaaaaa",
//                   size: "sm",
//                   flex: 1,
//                 },
//                 {
//                   type: "text",
//                   text: "10:00 - 23:00",
//                   wrap: true,
//                   color: "#666666",
//                   size: "sm",
//                   flex: 5,
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     footer: {
//       type: "box",
//       layout: "vertical",
//       spacing: "sm",
//       contents: [
//         {
//           type: "button",
//           style: "link",
//           height: "sm",
//           action: { type: "uri", label: "CALL", uri: "https://linecorp.com" },
//         },
//         {
//           type: "button",
//           style: "link",
//           height: "sm",
//           action: {
//             type: "uri",
//             label: "WEBSITE",
//             uri: "https://linecorp.com",
//           },
//         },
//         { type: "box", layout: "vertical", contents: [], margin: "sm" },
//       ],
//       flex: 0,
//     },
//   },
// });

flex2html("flex1", lineJsonDecorator(testFmJson));

export default testFunc;
