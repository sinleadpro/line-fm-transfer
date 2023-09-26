import { flex2html } from "./transfer.js";

let testFmJson = {
  type: "flex",
  altText: "Flex message",
  contents: {
    type: "bubble",
    hero: {
      type: "image",
      url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
      size: "full",
      aspectRatio: "20:13",
      aspectMode: "cover",
      action: {
        type: "uri",
        uri: "http://linecorp.com/",
      },
    },
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "text",
          text: "Brown Cafe",
          weight: "bold",
          size: "xl",
        },
        {
          type: "box",
          layout: "baseline",
          margin: "md",
          contents: [
            {
              type: "icon",
              size: "sm",
              url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
            },
            {
              type: "icon",
              size: "sm",
              url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
            },
            {
              type: "icon",
              size: "sm",
              url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
            },
            {
              type: "icon",
              size: "sm",
              url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
            },
            {
              type: "icon",
              size: "sm",
              url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png",
            },
            {
              type: "text",
              text: "4.0",
              size: "sm",
              color: "#999999",
              margin: "md",
              flex: 0,
            },
          ],
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
              spacing: "sm",
              contents: [
                {
                  type: "text",
                  text: "Place",
                  color: "#aaaaaa",
                  size: "sm",
                  flex: 1,
                },
                {
                  type: "text",
                  text: "Miraina Tower, 4-1-6 Shinjuku, Tokyo",
                  wrap: true,
                  color: "#666666",
                  size: "sm",
                  flex: 5,
                },
              ],
            },
            {
              type: "box",
              layout: "baseline",
              spacing: "sm",
              contents: [
                {
                  type: "text",
                  text: "Time",
                  color: "#aaaaaa",
                  size: "sm",
                  flex: 1,
                },
                {
                  type: "text",
                  text: "10:00 - 23:00",
                  wrap: true,
                  color: "#666666",
                  size: "sm",
                  flex: 5,
                },
              ],
            },
          ],
        },
      ],
    },
    footer: {
      type: "box",
      layout: "vertical",
      spacing: "sm",
      contents: [
        {
          type: "button",
          style: "link",
          height: "sm",
          action: {
            type: "uri",
            label: "CALL",
            uri: "https://linecorp.com",
          },
        },
        {
          type: "button",
          style: "link",
          height: "sm",
          action: {
            type: "uri",
            label: "WEBSITE",
            uri: "https://linecorp.com",
          },
        },
        {
          type: "box",
          layout: "vertical",
          contents: [],
          margin: "sm",
        },
      ],
      flex: 0,
    },
  },
};

function testFunc({ testParams }) {
  const { title, subTitle, description } = testParams;
  return `<div><h1 class="title-main">${title}</h1><h3 class="title-sub">${subTitle}</h3><p class="description-text">${description}</p></div>`;
}
// flex2html("flex14", {
//   type: "flex",
//   altText: "Flex Message",
//   contents: {
//     type: "bubble",
//     hero: {
//       type: "video",
//       url: "https://firebasestorage.googleapis.com/v0/b/betask-linked/o/video%2FMotion-L_BeLink_Draft2.mp4?alt=media&token=8ab07860-7e66-4758-a47f-277aed20730d",
//       previewUrl:
//         "https://firebasestorage.googleapis.com/v0/b/betask-linked/o/video%2FScreen%20Shot%202566-06-16%20at%2009.40.03.png?alt=media&token=320e7e5b-dd27-46ee-875c-d0f18ca6c8ea",
//       altContent: {
//         type: "image",
//         size: "full",
//         aspectRatio: "20:13",
//         aspectMode: "cover",
//         url: "https://firebasestorage.googleapis.com/v0/b/betask-linked/o/video%2FScreen%20Shot%202566-06-16%20at%2009.40.03.png?alt=media&token=320e7e5b-dd27-46ee-875c-d0f18ca6c8ea",
//       },
//     },
//     body: {
//       type: "box",
//       layout: "vertical",
//       contents: [
//         {
//           type: "box",
//           layout: "vertical",
//           contents: [
//             {
//               type: "text",
//               text: "Be Linked",
//               weight: "bold",
//               size: "xl",
//               color: "#1B437C",
//             },
//             { type: "text", text: "ระบบจองคิวผ่าน LINE OA" },
//             { type: "text", text: "ครอบคลุมทุกธุรกิจ" },
//           ],
//           paddingStart: "30px",
//           paddingTop: "20px",
//         },
//         {
//           type: "box",
//           layout: "vertical",
//           margin: "xl",
//           spacing: "lg",
//           contents: [
//             {
//               type: "box",
//               layout: "horizontal",
//               spacing: "none",
//               contents: [
//                 {
//                   type: "image",
//                   url: "https://firebasestorage.googleapis.com/v0/b/betask-linked/o/video%2F_Group_%20(4).png?alt=media&token=d8950d64-4b71-4a5c-8a60-8ba9850f8aef",
//                   margin: "none",
//                   gravity: "center",
//                 },
//                 {
//                   type: "text",
//                   text: "จองคิวนัดหมาย",
//                   wrap: true,
//                   color: "#666666",
//                   size: "md",
//                   flex: 5,
//                   gravity: "center",
//                   margin: "xl",
//                 },
//               ],
//               backgroundColor: "#eeeeee",
//               paddingStart: "20px",
//               margin: "none",
//               height: "50px",
//             },
//           ],
//         },
//         {
//           type: "box",
//           layout: "vertical",
//           margin: "xs",
//           spacing: "lg",
//           contents: [
//             {
//               type: "box",
//               layout: "horizontal",
//               spacing: "none",
//               contents: [
//                 {
//                   type: "image",
//                   url: "https://firebasestorage.googleapis.com/v0/b/betask-linked/o/video%2F_Group_%20(5).png?alt=media&token=8640a1ad-989d-47a9-a3a5-a73560ef74a6",
//                   margin: "none",
//                   gravity: "center",
//                 },
//                 {
//                   type: "text",
//                   text: "นัดหมาย นอกสถานที่ (Onsite)",
//                   wrap: true,
//                   color: "#666666",
//                   size: "md",
//                   flex: 5,
//                   gravity: "center",
//                   margin: "xl",
//                 },
//               ],
//               backgroundColor: "#eeeeee",
//               paddingStart: "20px",
//               margin: "none",
//               height: "50px",
//             },
//           ],
//         },
//         {
//           type: "box",
//           layout: "vertical",
//           margin: "xs",
//           spacing: "lg",
//           contents: [
//             {
//               type: "box",
//               layout: "horizontal",
//               spacing: "none",
//               contents: [
//                 {
//                   type: "image",
//                   url: "https://firebasestorage.googleapis.com/v0/b/betask-linked/o/video%2F_Group_%20(6).png?alt=media&token=f88306db-460b-449f-90a6-6824e03da14d",
//                   margin: "none",
//                   gravity: "center",
//                 },
//                 {
//                   type: "text",
//                   text: "ระบบบัตรคิว หน้าร้าน",
//                   wrap: true,
//                   color: "#666666",
//                   size: "md",
//                   flex: 5,
//                   gravity: "center",
//                   margin: "xl",
//                 },
//               ],
//               backgroundColor: "#eeeeee",
//               paddingStart: "20px",
//               margin: "none",
//               height: "50px",
//             },
//           ],
//         },
//         {
//           type: "box",
//           layout: "vertical",
//           margin: "md",
//           spacing: "none",
//           contents: [{ type: "separator" }],
//         },
//       ],
//       paddingAll: "0px",
//     },
//     footer: {
//       type: "box",
//       layout: "vertical",
//       spacing: "none",
//       contents: [
//         {
//           type: "button",
//           style: "link",
//           height: "sm",
//           action: {
//             type: "uri",
//             label: "WEBSITE",
//             uri: "https://betaskthai.com/",
//           },
//           color: "#ffffff",
//         },
//         { type: "box", layout: "vertical", contents: [], margin: "sm" },
//       ],
//       flex: 0,
//       backgroundColor: "#1B437C",
//       margin: "none",
//     },
//   },
// });
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
// flex2html("flex15", {
//   type: "flex",
//   altText: "Flex Message",
//   contents: {
//     type: "bubble",
//     size: "hecto",
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
//         { type: "text", text: "Hecto Bubble Size", weight: "bold", size: "xl" },
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
// flex2html("flex2", {
//   type: "flex",
//   altText: "Flex Message",
//   contents: {
//     type: "carousel",
//     contents: [
//       {
//         type: "bubble",
//         body: {
//           type: "box",
//           layout: "vertical",
//           contents: [
//             {
//               type: "image",
//               url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip1.jpg",
//               size: "full",
//               aspectMode: "cover",
//               aspectRatio: "2:3",
//               gravity: "top",
//             },
//             {
//               type: "box",
//               layout: "vertical",
//               contents: [
//                 {
//                   type: "box",
//                   layout: "vertical",
//                   contents: [
//                     {
//                       type: "text",
//                       text: "Brown's T-shirts",
//                       size: "xl",
//                       color: "#ffffff",
//                       weight: "bold",
//                     },
//                   ],
//                 },
//                 {
//                   type: "box",
//                   layout: "baseline",
//                   contents: [
//                     {
//                       type: "text",
//                       text: "¥35,800",
//                       color: "#ebebeb",
//                       size: "sm",
//                       flex: 0,
//                     },
//                     {
//                       type: "text",
//                       text: "¥75,000",
//                       color: "#ffffffcc",
//                       decoration: "line-through",
//                       gravity: "bottom",
//                       flex: 0,
//                       size: "sm",
//                     },
//                   ],
//                   spacing: "lg",
//                 },
//                 {
//                   type: "box",
//                   layout: "vertical",
//                   contents: [
//                     { type: "filler" },
//                     {
//                       type: "box",
//                       layout: "baseline",
//                       contents: [
//                         { type: "filler" },
//                         {
//                           type: "icon",
//                           url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip14.png",
//                         },
//                         {
//                           type: "text",
//                           text: "Add to cart",
//                           color: "#ffffff",
//                           flex: 0,
//                           offsetTop: "-2px",
//                         },
//                         { type: "filler" },
//                       ],
//                       spacing: "sm",
//                     },
//                     { type: "filler" },
//                   ],
//                   borderWidth: "1px",
//                   cornerRadius: "4px",
//                   spacing: "sm",
//                   borderColor: "#ffffff",
//                   margin: "xxl",
//                   height: "40px",
//                 },
//               ],
//               position: "absolute",
//               offsetBottom: "0px",
//               offsetStart: "0px",
//               offsetEnd: "0px",
//               backgroundColor: "#03303Acc",
//               paddingAll: "20px",
//               paddingTop: "18px",
//             },
//             {
//               type: "box",
//               layout: "vertical",
//               contents: [
//                 {
//                   type: "text",
//                   text: "SALE",
//                   color: "#ffffff",
//                   align: "center",
//                   size: "xs",
//                   offsetTop: "3px",
//                 },
//               ],
//               position: "absolute",
//               cornerRadius: "20px",
//               offsetTop: "18px",
//               backgroundColor: "#ff334b",
//               offsetStart: "18px",
//               height: "25px",
//               width: "53px",
//             },
//           ],
//           paddingAll: "0px",
//         },
//       },
//       {
//         type: "bubble",
//         body: {
//           type: "box",
//           layout: "vertical",
//           contents: [
//             {
//               type: "image",
//               url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip2.jpg",
//               size: "full",
//               aspectMode: "cover",
//               aspectRatio: "2:3",
//               gravity: "top",
//             },
//             {
//               type: "box",
//               layout: "vertical",
//               contents: [
//                 {
//                   type: "box",
//                   layout: "vertical",
//                   contents: [
//                     {
//                       type: "text",
//                       text: "Cony's T-shirts",
//                       size: "xl",
//                       color: "#ffffff",
//                       weight: "bold",
//                     },
//                   ],
//                 },
//                 {
//                   type: "box",
//                   layout: "baseline",
//                   contents: [
//                     {
//                       type: "text",
//                       text: "¥35,800",
//                       color: "#ebebeb",
//                       size: "sm",
//                       flex: 0,
//                     },
//                     {
//                       type: "text",
//                       text: "¥75,000",
//                       color: "#ffffffcc",
//                       decoration: "line-through",
//                       gravity: "bottom",
//                       flex: 0,
//                       size: "sm",
//                     },
//                   ],
//                   spacing: "lg",
//                 },
//                 {
//                   type: "box",
//                   layout: "vertical",
//                   contents: [
//                     { type: "filler" },
//                     {
//                       type: "box",
//                       layout: "baseline",
//                       contents: [
//                         { type: "filler" },
//                         {
//                           type: "icon",
//                           url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip14.png",
//                         },
//                         {
//                           type: "text",
//                           text: "Add to cart",
//                           color: "#ffffff",
//                           flex: 0,
//                           offsetTop: "-2px",
//                         },
//                         { type: "filler" },
//                       ],
//                       spacing: "sm",
//                     },
//                     { type: "filler" },
//                   ],
//                   borderWidth: "1px",
//                   cornerRadius: "4px",
//                   spacing: "sm",
//                   borderColor: "#ffffff",
//                   margin: "xxl",
//                   height: "40px",
//                 },
//               ],
//               position: "absolute",
//               offsetBottom: "0px",
//               offsetStart: "0px",
//               offsetEnd: "0px",
//               backgroundColor: "#9C8E7Ecc",
//               paddingAll: "20px",
//               paddingTop: "18px",
//             },
//             {
//               type: "box",
//               layout: "vertical",
//               contents: [
//                 {
//                   type: "text",
//                   text: "SALE",
//                   color: "#ffffff",
//                   align: "center",
//                   size: "xs",
//                   offsetTop: "3px",
//                 },
//               ],
//               position: "absolute",
//               cornerRadius: "20px",
//               offsetTop: "18px",
//               backgroundColor: "#ff334b",
//               offsetStart: "18px",
//               height: "25px",
//               width: "53px",
//             },
//           ],
//           paddingAll: "0px",
//         },
//       },
//     ],
//   },
// });
// flex2html("flex3", {
//   type: "flex",
//   altText: "Flex Message",
//   contents: {
//     type: "bubble",
//     body: {
//       type: "box",
//       layout: "vertical",
//       contents: [
//         {
//           type: "image",
//           url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip3.jpg",
//           size: "full",
//           aspectMode: "cover",
//           aspectRatio: "1:1",
//           gravity: "center",
//         },
//         {
//           type: "box",
//           layout: "vertical",
//           contents: [],
//           position: "absolute",
//           background: {
//             type: "linearGradient",
//             angle: "0deg",
//             endColor: "#00000000",
//             startColor: "#00000099",
//           },
//           width: "100%",
//           height: "40%",
//           offsetBottom: "0px",
//           offsetStart: "0px",
//           offsetEnd: "0px",
//         },
//         {
//           type: "box",
//           layout: "horizontal",
//           contents: [
//             {
//               type: "box",
//               layout: "vertical",
//               contents: [
//                 {
//                   type: "box",
//                   layout: "horizontal",
//                   contents: [
//                     {
//                       type: "text",
//                       text: "Brown Grand Hotel",
//                       size: "xl",
//                       color: "#ffffff",
//                     },
//                   ],
//                 },
//                 {
//                   type: "box",
//                   layout: "baseline",
//                   contents: [
//                     {
//                       type: "icon",
//                       url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
//                     },
//                     {
//                       type: "icon",
//                       url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
//                     },
//                     {
//                       type: "icon",
//                       url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
//                     },
//                     {
//                       type: "icon",
//                       url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
//                     },
//                     {
//                       type: "icon",
//                       url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png",
//                     },
//                     { type: "text", text: "4.0", color: "#a9a9a9" },
//                   ],
//                   spacing: "xs",
//                 },
//                 {
//                   type: "box",
//                   layout: "horizontal",
//                   contents: [
//                     {
//                       type: "box",
//                       layout: "baseline",
//                       contents: [
//                         {
//                           type: "text",
//                           text: "¥62,000",
//                           color: "#ffffff",
//                           size: "md",
//                           flex: 0,
//                           align: "end",
//                         },
//                         {
//                           type: "text",
//                           text: "¥82,000",
//                           color: "#a9a9a9",
//                           decoration: "line-through",
//                           size: "sm",
//                           align: "end",
//                         },
//                       ],
//                       flex: 0,
//                       spacing: "lg",
//                     },
//                   ],
//                 },
//               ],
//               spacing: "xs",
//             },
//           ],
//           position: "absolute",
//           offsetBottom: "0px",
//           offsetStart: "0px",
//           offsetEnd: "0px",
//           paddingAll: "20px",
//         },
//       ],
//       paddingAll: "0px",
//     },
//   },
// });
// flex2html("flex4", {
//   type: "flex",
//   altText: "Flex Message",
//   contents: {
//     type: "carousel",
//     contents: [
//       {
//         type: "bubble",
//         size: "micro",
//         hero: {
//           type: "image",
//           url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip10.jpg",
//           size: "full",
//           aspectMode: "cover",
//           aspectRatio: "320:213",
//         },
//         body: {
//           type: "box",
//           layout: "vertical",
//           contents: [
//             {
//               type: "text",
//               text: "Brown Cafe",
//               weight: "bold",
//               size: "sm",
//               wrap: true,
//             },
//             {
//               type: "box",
//               layout: "baseline",
//               contents: [
//                 {
//                   type: "icon",
//                   size: "xs",
//                   url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
//                 },
//                 {
//                   type: "icon",
//                   size: "xs",
//                   url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
//                 },
//                 {
//                   type: "icon",
//                   size: "xs",
//                   url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
//                 },
//                 {
//                   type: "icon",
//                   size: "xs",
//                   url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
//                 },
//                 {
//                   type: "icon",
//                   size: "xs",
//                   url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png",
//                 },
//                 {
//                   type: "text",
//                   text: "4.0",
//                   size: "xs",
//                   color: "#8c8c8c",
//                   margin: "md",
//                   flex: 0,
//                 },
//               ],
//             },
//             {
//               type: "box",
//               layout: "vertical",
//               contents: [
//                 {
//                   type: "box",
//                   layout: "baseline",
//                   spacing: "sm",
//                   contents: [
//                     {
//                       type: "text",
//                       text: "東京旅行",
//                       wrap: true,
//                       color: "#8c8c8c",
//                       size: "xs",
//                       flex: 5,
//                     },
//                   ],
//                 },
//               ],
//             },
//           ],
//           spacing: "sm",
//           paddingAll: "13px",
//         },
//       },
//       {
//         type: "bubble",
//         size: "micro",
//         hero: {
//           type: "image",
//           url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip11.jpg",
//           size: "full",
//           aspectMode: "cover",
//           aspectRatio: "320:213",
//         },
//         body: {
//           type: "box",
//           layout: "vertical",
//           contents: [
//             {
//               type: "text",
//               text: "Brow&Cony's Restaurant",
//               weight: "bold",
//               size: "sm",
//               wrap: true,
//             },
//             {
//               type: "box",
//               layout: "baseline",
//               contents: [
//                 {
//                   type: "icon",
//                   size: "xs",
//                   url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
//                 },
//                 {
//                   type: "icon",
//                   size: "xs",
//                   url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
//                 },
//                 {
//                   type: "icon",
//                   size: "xs",
//                   url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
//                 },
//                 {
//                   type: "icon",
//                   size: "xs",
//                   url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
//                 },
//                 {
//                   type: "icon",
//                   size: "xs",
//                   url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png",
//                 },
//                 {
//                   type: "text",
//                   text: "4.0",
//                   size: "sm",
//                   color: "#8c8c8c",
//                   margin: "md",
//                   flex: 0,
//                 },
//               ],
//             },
//             {
//               type: "box",
//               layout: "vertical",
//               contents: [
//                 {
//                   type: "box",
//                   layout: "baseline",
//                   spacing: "sm",
//                   contents: [
//                     {
//                       type: "text",
//                       text: "東京旅行",
//                       wrap: true,
//                       color: "#8c8c8c",
//                       size: "xs",
//                       flex: 5,
//                     },
//                   ],
//                 },
//               ],
//             },
//           ],
//           spacing: "sm",
//           paddingAll: "13px",
//         },
//       },
//       {
//         type: "bubble",
//         size: "micro",
//         hero: {
//           type: "image",
//           url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip12.jpg",
//           size: "full",
//           aspectMode: "cover",
//           aspectRatio: "320:213",
//         },
//         body: {
//           type: "box",
//           layout: "vertical",
//           contents: [
//             { type: "text", text: "Tata", weight: "bold", size: "sm" },
//             {
//               type: "box",
//               layout: "baseline",
//               contents: [
//                 {
//                   type: "icon",
//                   size: "xs",
//                   url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
//                 },
//                 {
//                   type: "icon",
//                   size: "xs",
//                   url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
//                 },
//                 {
//                   type: "icon",
//                   size: "xs",
//                   url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
//                 },
//                 {
//                   type: "icon",
//                   size: "xs",
//                   url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
//                 },
//                 {
//                   type: "icon",
//                   size: "xs",
//                   url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png",
//                 },
//                 {
//                   type: "text",
//                   text: "4.0",
//                   size: "sm",
//                   color: "#8c8c8c",
//                   margin: "md",
//                   flex: 0,
//                 },
//               ],
//             },
//             {
//               type: "box",
//               layout: "vertical",
//               contents: [
//                 {
//                   type: "box",
//                   layout: "baseline",
//                   spacing: "sm",
//                   contents: [
//                     {
//                       type: "text",
//                       text: "東京旅行",
//                       wrap: true,
//                       color: "#8c8c8c",
//                       size: "xs",
//                       flex: 5,
//                     },
//                   ],
//                 },
//               ],
//             },
//           ],
//           spacing: "sm",
//           paddingAll: "13px",
//         },
//       },
//     ],
//   },
// });
// flex2html("flex5", {
//   type: "flex",
//   altText: "Flex Message",
//   contents: {
//     type: "bubble",
//     header: {
//       type: "box",
//       layout: "vertical",
//       contents: [
//         {
//           type: "box",
//           layout: "horizontal",
//           contents: [
//             {
//               type: "image",
//               url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip4.jpg",
//               size: "full",
//               aspectMode: "cover",
//               aspectRatio: "150:196",
//               gravity: "center",
//               flex: 1,
//             },
//             {
//               type: "box",
//               layout: "vertical",
//               contents: [
//                 {
//                   type: "image",
//                   url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip5.jpg",
//                   size: "full",
//                   aspectMode: "cover",
//                   aspectRatio: "150:98",
//                   gravity: "center",
//                 },
//                 {
//                   type: "image",
//                   url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip6.jpg",
//                   size: "full",
//                   aspectMode: "cover",
//                   aspectRatio: "150:98",
//                   gravity: "center",
//                 },
//               ],
//               flex: 1,
//             },
//             {
//               type: "box",
//               layout: "horizontal",
//               contents: [
//                 {
//                   type: "text",
//                   text: "NEW",
//                   size: "xs",
//                   color: "#ffffff",
//                   align: "center",
//                   gravity: "center",
//                 },
//               ],
//               backgroundColor: "#EC3D44",
//               paddingAll: "2px",
//               paddingStart: "4px",
//               paddingEnd: "4px",
//               flex: 0,
//               position: "absolute",
//               offsetStart: "18px",
//               offsetTop: "18px",
//               cornerRadius: "100px",
//               width: "48px",
//               height: "25px",
//             },
//           ],
//         },
//       ],
//       paddingAll: "0px",
//     },
//     body: {
//       type: "box",
//       layout: "vertical",
//       contents: [
//         {
//           type: "box",
//           layout: "vertical",
//           contents: [
//             {
//               type: "box",
//               layout: "vertical",
//               contents: [
//                 {
//                   type: "text",
//                   contents: [],
//                   size: "xl",
//                   wrap: true,
//                   text: "Cony Residence",
//                   color: "#ffffff",
//                   weight: "bold",
//                 },
//                 {
//                   type: "text",
//                   text: "3 Bedrooms, ¥35,000",
//                   color: "#ffffffcc",
//                   size: "sm",
//                 },
//               ],
//               spacing: "sm",
//             },
//             {
//               type: "box",
//               layout: "vertical",
//               contents: [
//                 {
//                   type: "box",
//                   layout: "vertical",
//                   contents: [
//                     {
//                       type: "text",
//                       contents: [],
//                       size: "sm",
//                       wrap: true,
//                       margin: "lg",
//                       color: "#ffffffde",
//                       text: "Private Pool, Delivery box, Floor heating, Private Cinema",
//                     },
//                   ],
//                 },
//               ],
//               paddingAll: "13px",
//               backgroundColor: "#ffffff1A",
//               cornerRadius: "2px",
//               margin: "xl",
//             },
//           ],
//         },
//       ],
//       paddingAll: "20px",
//       backgroundColor: "#464F69",
//     },
//   },
// });
// flex2html("flex6", {
//   type: "flex",
//   altText: "Flex Message",
//   contents: {
//     type: "bubble",
//     body: {
//       type: "box",
//       layout: "vertical",
//       contents: [
//         {
//           type: "box",
//           layout: "horizontal",
//           contents: [
//             {
//               type: "image",
//               url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip7.jpg",
//               size: "5xl",
//               aspectMode: "cover",
//               aspectRatio: "150:196",
//               gravity: "center",
//               flex: 1,
//             },
//             {
//               type: "box",
//               layout: "vertical",
//               contents: [
//                 {
//                   type: "image",
//                   url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip8.jpg",
//                   size: "full",
//                   aspectMode: "cover",
//                   aspectRatio: "150:98",
//                   gravity: "center",
//                 },
//                 {
//                   type: "image",
//                   url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip9.jpg",
//                   size: "full",
//                   aspectMode: "cover",
//                   aspectRatio: "150:98",
//                   gravity: "center",
//                 },
//               ],
//               flex: 1,
//             },
//           ],
//         },
//         {
//           type: "box",
//           layout: "horizontal",
//           contents: [
//             {
//               type: "box",
//               layout: "vertical",
//               contents: [
//                 {
//                   type: "image",
//                   url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip13.jpg",
//                   aspectMode: "cover",
//                   size: "full",
//                 },
//               ],
//               cornerRadius: "100px",
//               width: "72px",
//               height: "72px",
//               flex: 0,
//             },
//             {
//               type: "box",
//               layout: "vertical",
//               contents: [
//                 {
//                   type: "text",
//                   contents: [
//                     {
//                       type: "span",
//                       text: "brown_05",
//                       weight: "bold",
//                       color: "#000000",
//                     },
//                     { type: "span", text: "     " },
//                     {
//                       type: "span",
//                       text: "I went to the Brown&Cony cafe in Tokyo and took a picture",
//                     },
//                   ],
//                   size: "sm",
//                   wrap: true,
//                 },
//                 {
//                   type: "box",
//                   layout: "baseline",
//                   contents: [
//                     {
//                       type: "text",
//                       text: "1,140,753 Like",
//                       size: "sm",
//                       color: "#bcbcbc",
//                     },
//                   ],
//                   spacing: "sm",
//                   margin: "md",
//                 },
//               ],
//             },
//           ],
//           spacing: "xl",
//           paddingAll: "20px",
//         },
//       ],
//       paddingAll: "0px",
//     },
//   },
// });
// flex2html("flex7", {
//   type: "flex",
//   altText: "Flex Message",
//   contents: {
//     type: "carousel",
//     contents: [
//       {
//         type: "bubble",
//         size: "nano",
//         header: {
//           type: "box",
//           layout: "vertical",
//           contents: [
//             {
//               type: "text",
//               text: "In Progress",
//               color: "#ffffff",
//               align: "start",
//               size: "md",
//               gravity: "center",
//             },
//             {
//               type: "text",
//               text: "70%",
//               color: "#ffffff",
//               align: "start",
//               size: "xs",
//               gravity: "center",
//               margin: "lg",
//             },
//             {
//               type: "box",
//               layout: "vertical",
//               contents: [
//                 {
//                   type: "box",
//                   layout: "vertical",
//                   contents: [{ type: "filler" }],
//                   width: "70%",
//                   backgroundColor: "#0D8186",
//                   height: "6px",
//                 },
//               ],
//               backgroundColor: "#9FD8E36E",
//               height: "6px",
//               margin: "sm",
//             },
//           ],
//           backgroundColor: "#27ACB2",
//           paddingTop: "19px",
//           paddingAll: "12px",
//           paddingBottom: "16px",
//         },
//         body: {
//           type: "box",
//           layout: "vertical",
//           contents: [
//             {
//               type: "box",
//               layout: "horizontal",
//               contents: [
//                 {
//                   type: "text",
//                   text: "Buy milk and lettuce before class",
//                   color: "#8C8C8C",
//                   size: "sm",
//                   wrap: true,
//                 },
//               ],
//               flex: 1,
//             },
//           ],
//           spacing: "md",
//           paddingAll: "12px",
//         },
//         styles: { footer: { separator: false } },
//       },
//       {
//         type: "bubble",
//         size: "nano",
//         header: {
//           type: "box",
//           layout: "vertical",
//           contents: [
//             {
//               type: "text",
//               text: "Pending",
//               color: "#ffffff",
//               align: "start",
//               size: "md",
//               gravity: "center",
//             },
//             {
//               type: "text",
//               text: "30%",
//               color: "#ffffff",
//               align: "start",
//               size: "xs",
//               gravity: "center",
//               margin: "lg",
//             },
//             {
//               type: "box",
//               layout: "vertical",
//               contents: [
//                 {
//                   type: "box",
//                   layout: "vertical",
//                   contents: [{ type: "filler" }],
//                   width: "30%",
//                   backgroundColor: "#DE5658",
//                   height: "6px",
//                 },
//               ],
//               backgroundColor: "#FAD2A76E",
//               height: "6px",
//               margin: "sm",
//             },
//           ],
//           backgroundColor: "#FF6B6E",
//           paddingTop: "19px",
//           paddingAll: "12px",
//           paddingBottom: "16px",
//         },
//         body: {
//           type: "box",
//           layout: "vertical",
//           contents: [
//             {
//               type: "box",
//               layout: "horizontal",
//               contents: [
//                 {
//                   type: "text",
//                   text: "Wash my car",
//                   color: "#8C8C8C",
//                   size: "sm",
//                   wrap: true,
//                 },
//               ],
//               flex: 1,
//             },
//           ],
//           spacing: "md",
//           paddingAll: "12px",
//         },
//         styles: { footer: { separator: false } },
//       },
//       {
//         type: "bubble",
//         size: "nano",
//         header: {
//           type: "box",
//           layout: "vertical",
//           contents: [
//             {
//               type: "text",
//               text: "In Progress",
//               color: "#ffffff",
//               align: "start",
//               size: "md",
//               gravity: "center",
//             },
//             {
//               type: "text",
//               text: "100%",
//               color: "#ffffff",
//               align: "start",
//               size: "xs",
//               gravity: "center",
//               margin: "lg",
//             },
//             {
//               type: "box",
//               layout: "vertical",
//               contents: [
//                 {
//                   type: "box",
//                   layout: "vertical",
//                   contents: [{ type: "filler" }],
//                   width: "100%",
//                   backgroundColor: "#7D51E4",
//                   height: "6px",
//                 },
//               ],
//               backgroundColor: "#9FD8E36E",
//               height: "6px",
//               margin: "sm",
//             },
//           ],
//           backgroundColor: "#A17DF5",
//           paddingTop: "19px",
//           paddingAll: "12px",
//           paddingBottom: "16px",
//         },
//         body: {
//           type: "box",
//           layout: "vertical",
//           contents: [
//             {
//               type: "box",
//               layout: "horizontal",
//               contents: [
//                 {
//                   type: "text",
//                   text: "Buy milk and lettuce before class",
//                   color: "#8C8C8C",
//                   size: "sm",
//                   wrap: true,
//                 },
//               ],
//               flex: 1,
//             },
//           ],
//           spacing: "md",
//           paddingAll: "12px",
//         },
//         styles: { footer: { separator: false } },
//       },
//     ],
//   },
// });
// flex2html("flex8", {
//   type: "flex",
//   altText: "Flex Message",
//   contents: {
//     type: "bubble",
//     size: "mega",
//     header: {
//       type: "box",
//       layout: "vertical",
//       contents: [
//         {
//           type: "box",
//           layout: "vertical",
//           contents: [
//             { type: "text", text: "FROM", color: "#ffffff66", size: "sm" },
//             {
//               type: "text",
//               text: "Akihabara",
//               color: "#ffffff",
//               size: "xl",
//               flex: 4,
//               weight: "bold",
//             },
//           ],
//         },
//         {
//           type: "box",
//           layout: "vertical",
//           contents: [
//             { type: "text", text: "TO", color: "#ffffff66", size: "sm" },
//             {
//               type: "text",
//               text: "Shinjuku",
//               color: "#ffffff",
//               size: "xl",
//               flex: 4,
//               weight: "bold",
//             },
//           ],
//         },
//       ],
//       paddingAll: "20px",
//       backgroundColor: "#0367D3",
//       spacing: "md",
//       height: "154px",
//       paddingTop: "22px",
//     },
//     body: {
//       type: "box",
//       layout: "vertical",
//       contents: [
//         { type: "text", text: "Total: 1 hour", color: "#b7b7b7", size: "xs" },
//         {
//           type: "box",
//           layout: "horizontal",
//           contents: [
//             { type: "text", text: "20:30", size: "sm", gravity: "center" },
//             {
//               type: "box",
//               layout: "vertical",
//               contents: [
//                 { type: "filler" },
//                 {
//                   type: "box",
//                   layout: "vertical",
//                   contents: [],
//                   cornerRadius: "30px",
//                   height: "12px",
//                   width: "12px",
//                   borderColor: "#EF454D",
//                   borderWidth: "2px",
//                 },
//                 { type: "filler" },
//               ],
//               flex: 0,
//             },
//             {
//               type: "text",
//               text: "Akihabara",
//               gravity: "center",
//               flex: 4,
//               size: "sm",
//             },
//           ],
//           spacing: "lg",
//           cornerRadius: "30px",
//           margin: "xl",
//         },
//         {
//           type: "box",
//           layout: "horizontal",
//           contents: [
//             {
//               type: "box",
//               layout: "baseline",
//               contents: [{ type: "filler" }],
//               flex: 1,
//             },
//             {
//               type: "box",
//               layout: "vertical",
//               flex: "0",
//               contents: [
//                 {
//                   type: "box",
//                   layout: "horizontal",
//                   contents: [
//                     { type: "filler" },
//                     {
//                       type: "box",
//                       layout: "vertical",
//                       flex: "0",
//                       contents: [],
//                       width: "2px",
//                       backgroundColor: "#B7B7B7",
//                     },
//                     { type: "filler" },
//                   ],
//                   flex: 1,
//                 },
//               ],
//               width: "12px",
//             },
//             {
//               type: "text",
//               text: "Walk 4min",
//               gravity: "center",
//               flex: 4,
//               size: "xs",
//               color: "#8c8c8c",
//             },
//           ],
//           spacing: "lg",
//           height: "64px",
//         },
//         {
//           type: "box",
//           layout: "horizontal",
//           contents: [
//             {
//               type: "box",
//               layout: "horizontal",
//               contents: [
//                 { type: "text", text: "20:34", gravity: "center", size: "sm" },
//               ],
//               flex: 1,
//             },
//             {
//               type: "box",
//               layout: "vertical",
//               contents: [
//                 { type: "filler" },
//                 {
//                   type: "box",
//                   layout: "vertical",
//                   contents: [],
//                   cornerRadius: "30px",
//                   width: "12px",
//                   height: "12px",
//                   borderWidth: "2px",
//                   borderColor: "#6486E3",
//                 },
//                 { type: "filler" },
//               ],
//               flex: 0,
//             },
//             {
//               type: "text",
//               text: "Ochanomizu",
//               gravity: "center",
//               flex: 4,
//               size: "sm",
//             },
//           ],
//           spacing: "lg",
//           cornerRadius: "30px",
//         },
//         {
//           type: "box",
//           layout: "horizontal",
//           contents: [
//             {
//               type: "box",
//               layout: "baseline",
//               contents: [{ type: "filler" }],
//               flex: 1,
//             },
//             {
//               type: "box",
//               layout: "vertical",
//               flex: "0",
//               contents: [
//                 {
//                   type: "box",
//                   layout: "horizontal",
//                   contents: [
//                     { type: "filler" },
//                     {
//                       type: "box",
//                       layout: "vertical",
//                       flex: "0",
//                       contents: [],
//                       width: "2px",
//                       backgroundColor: "#6486E3",
//                     },
//                     { type: "filler" },
//                   ],
//                   flex: 1,
//                 },
//               ],
//               width: "12px",
//             },
//             {
//               type: "text",
//               text: "Metro 1hr",
//               gravity: "center",
//               flex: 4,
//               size: "xs",
//               color: "#8c8c8c",
//             },
//           ],
//           spacing: "lg",
//           height: "64px",
//         },
//         {
//           type: "box",
//           layout: "horizontal",
//           contents: [
//             { type: "text", text: "20:40", gravity: "center", size: "sm" },
//             {
//               type: "box",
//               layout: "vertical",
//               contents: [
//                 { type: "filler" },
//                 {
//                   type: "box",
//                   layout: "vertical",
//                   contents: [],
//                   cornerRadius: "30px",
//                   width: "12px",
//                   height: "12px",
//                   borderColor: "#6486E3",
//                   borderWidth: "2px",
//                 },
//                 { type: "filler" },
//               ],
//               flex: 0,
//             },
//             {
//               type: "text",
//               text: "Shinjuku",
//               gravity: "center",
//               flex: 4,
//               size: "sm",
//             },
//           ],
//           spacing: "lg",
//           cornerRadius: "30px",
//         },
//       ],
//     },
//   },
// });
// flex2html("flex9", {
//   type: "flex",
//   altText: "Flex Message",
//   contents: {
//     type: "bubble",
//     body: {
//       type: "box",
//       layout: "vertical",
//       contents: [
//         {
//           type: "text",
//           text: "RECEIPT",
//           weight: "bold",
//           color: "#1DB446",
//           size: "sm",
//         },
//         {
//           type: "text",
//           text: "Brown Store",
//           weight: "bold",
//           size: "xxl",
//           margin: "md",
//         },
//         {
//           type: "text",
//           text: "Miraina Tower, 4-1-6 Shinjuku, Tokyo",
//           size: "xs",
//           color: "#aaaaaa",
//           wrap: true,
//         },
//         { type: "separator", margin: "xxl" },
//         {
//           type: "box",
//           layout: "vertical",
//           margin: "xxl",
//           spacing: "sm",
//           contents: [
//             {
//               type: "box",
//               layout: "horizontal",
//               contents: [
//                 {
//                   type: "text",
//                   text: "Energy Drink",
//                   size: "sm",
//                   color: "#555555",
//                   flex: 0,
//                 },
//                 {
//                   type: "text",
//                   text: "$2.99",
//                   size: "sm",
//                   color: "#111111",
//                   align: "end",
//                 },
//               ],
//             },
//             {
//               type: "box",
//               layout: "horizontal",
//               contents: [
//                 {
//                   type: "text",
//                   text: "Chewing Gum",
//                   size: "sm",
//                   color: "#555555",
//                   flex: 0,
//                 },
//                 {
//                   type: "text",
//                   text: "$0.99",
//                   size: "sm",
//                   color: "#111111",
//                   align: "end",
//                 },
//               ],
//             },
//             {
//               type: "box",
//               layout: "horizontal",
//               contents: [
//                 {
//                   type: "text",
//                   text: "Bottled Water",
//                   size: "sm",
//                   color: "#555555",
//                   flex: 0,
//                 },
//                 {
//                   type: "text",
//                   text: "$3.33",
//                   size: "sm",
//                   color: "#111111",
//                   align: "end",
//                 },
//               ],
//             },
//             { type: "separator", margin: "xxl" },
//             {
//               type: "box",
//               layout: "horizontal",
//               margin: "xxl",
//               contents: [
//                 { type: "text", text: "ITEMS", size: "sm", color: "#555555" },
//                 {
//                   type: "text",
//                   text: "3",
//                   size: "sm",
//                   color: "#111111",
//                   align: "end",
//                 },
//               ],
//             },
//             {
//               type: "box",
//               layout: "horizontal",
//               contents: [
//                 { type: "text", text: "TOTAL", size: "sm", color: "#555555" },
//                 {
//                   type: "text",
//                   text: "$7.31",
//                   size: "sm",
//                   color: "#111111",
//                   align: "end",
//                 },
//               ],
//             },
//             {
//               type: "box",
//               layout: "horizontal",
//               contents: [
//                 { type: "text", text: "CASH", size: "sm", color: "#555555" },
//                 {
//                   type: "text",
//                   text: "$8.0",
//                   size: "sm",
//                   color: "#111111",
//                   align: "end",
//                 },
//               ],
//             },
//             {
//               type: "box",
//               layout: "horizontal",
//               contents: [
//                 { type: "text", text: "CHANGE", size: "sm", color: "#555555" },
//                 {
//                   type: "text",
//                   text: "$0.69",
//                   size: "sm",
//                   color: "#111111",
//                   align: "end",
//                 },
//               ],
//             },
//           ],
//         },
//         { type: "separator", margin: "xxl" },
//         {
//           type: "box",
//           layout: "horizontal",
//           margin: "md",
//           contents: [
//             {
//               type: "text",
//               text: "PAYMENT ID",
//               size: "xs",
//               color: "#aaaaaa",
//               flex: 0,
//             },
//             {
//               type: "text",
//               text: "#743289384279",
//               color: "#aaaaaa",
//               size: "xs",
//               align: "end",
//             },
//           ],
//         },
//       ],
//     },
//     styles: { footer: { separator: true } },
//   },
// });
// flex2html("flex10", {
//   type: "flex",
//   altText: "Flex Message",
//   contents: {
//     type: "carousel",
//     contents: [
//       {
//         type: "bubble",
//         hero: {
//           type: "image",
//           size: "full",
//           aspectRatio: "20:13",
//           aspectMode: "cover",
//           url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png",
//         },
//         body: {
//           type: "box",
//           layout: "vertical",
//           spacing: "sm",
//           contents: [
//             {
//               type: "text",
//               text: "Arm Chair, White",
//               wrap: true,
//               weight: "bold",
//               size: "xl",
//             },
//             {
//               type: "box",
//               layout: "baseline",
//               contents: [
//                 {
//                   type: "text",
//                   text: "$49",
//                   wrap: true,
//                   weight: "bold",
//                   size: "xl",
//                   flex: 0,
//                 },
//                 {
//                   type: "text",
//                   text: ".99",
//                   wrap: true,
//                   weight: "bold",
//                   size: "sm",
//                   flex: 0,
//                 },
//               ],
//             },
//           ],
//         },
//         footer: {
//           type: "box",
//           layout: "vertical",
//           spacing: "sm",
//           contents: [
//             {
//               type: "button",
//               style: "primary",
//               action: {
//                 type: "uri",
//                 label: "Add to Cart",
//                 uri: "https://linecorp.com",
//               },
//             },
//             {
//               type: "button",
//               action: {
//                 type: "uri",
//                 label: "Add to wishlist",
//                 uri: "https://linecorp.com",
//               },
//             },
//           ],
//         },
//       },
//       {
//         type: "bubble",
//         hero: {
//           type: "image",
//           size: "full",
//           aspectRatio: "20:13",
//           aspectMode: "cover",
//           url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_6_carousel.png",
//         },
//         body: {
//           type: "box",
//           layout: "vertical",
//           spacing: "sm",
//           contents: [
//             {
//               type: "text",
//               text: "Metal Desk Lamp",
//               wrap: true,
//               weight: "bold",
//               size: "xl",
//             },
//             {
//               type: "box",
//               layout: "baseline",
//               flex: 1,
//               contents: [
//                 {
//                   type: "text",
//                   text: "$11",
//                   wrap: true,
//                   weight: "bold",
//                   size: "xl",
//                   flex: 0,
//                 },
//                 {
//                   type: "text",
//                   text: ".99",
//                   wrap: true,
//                   weight: "bold",
//                   size: "sm",
//                   flex: 0,
//                 },
//               ],
//             },
//             {
//               type: "text",
//               text: "Temporarily out of stock",
//               wrap: true,
//               size: "xxs",
//               margin: "md",
//               color: "#ff5551",
//               flex: 0,
//             },
//           ],
//         },
//         footer: {
//           type: "box",
//           layout: "vertical",
//           spacing: "sm",
//           contents: [
//             {
//               type: "button",
//               flex: 2,
//               style: "primary",
//               color: "#aaaaaa",
//               action: {
//                 type: "uri",
//                 label: "Add to Cart",
//                 uri: "https://linecorp.com",
//               },
//             },
//             {
//               type: "button",
//               action: {
//                 type: "uri",
//                 label: "Add to wish list",
//                 uri: "https://linecorp.com",
//               },
//             },
//           ],
//         },
//       },
//       {
//         type: "bubble",
//         body: {
//           type: "box",
//           layout: "vertical",
//           spacing: "sm",
//           contents: [
//             {
//               type: "button",
//               flex: 1,
//               gravity: "center",
//               action: {
//                 type: "uri",
//                 label: "See more",
//                 uri: "https://linecorp.com",
//               },
//             },
//           ],
//         },
//       },
//     ],
//   },
// });
// flex2html("flex11", {
//   type: "flex",
//   altText: "Flex Message",
//   contents: {
//     type: "bubble",
//     hero: {
//       type: "image",
//       url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png",
//       size: "full",
//       aspectRatio: "20:13",
//       aspectMode: "cover",
//       action: { type: "uri", uri: "https://linecorp.com" },
//     },
//     body: {
//       type: "box",
//       layout: "vertical",
//       spacing: "md",
//       action: { type: "uri", uri: "https://linecorp.com" },
//       contents: [
//         { type: "text", text: "Brown's Burger", size: "xl", weight: "bold" },
//         {
//           type: "box",
//           layout: "vertical",
//           spacing: "sm",
//           contents: [
//             {
//               type: "box",
//               layout: "baseline",
//               contents: [
//                 {
//                   type: "icon",
//                   url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/restaurant_regular_32.png",
//                 },
//                 {
//                   type: "text",
//                   text: "$10.5",
//                   weight: "bold",
//                   margin: "sm",
//                   flex: 0,
//                 },
//                 {
//                   type: "text",
//                   text: "400kcl",
//                   size: "sm",
//                   align: "end",
//                   color: "#aaaaaa",
//                 },
//               ],
//             },
//             {
//               type: "box",
//               layout: "baseline",
//               contents: [
//                 {
//                   type: "icon",
//                   url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/restaurant_large_32.png",
//                 },
//                 {
//                   type: "text",
//                   text: "$15.5",
//                   weight: "bold",
//                   margin: "sm",
//                   flex: 0,
//                 },
//                 {
//                   type: "text",
//                   text: "550kcl",
//                   size: "sm",
//                   align: "end",
//                   color: "#aaaaaa",
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           type: "text",
//           text: "Sauce, Onions, Pickles, Lettuce & Cheese",
//           wrap: true,
//           color: "#aaaaaa",
//           size: "xxs",
//         },
//       ],
//     },
//     footer: {
//       type: "box",
//       layout: "vertical",
//       contents: [
//         { type: "spacer", size: "xxl" },
//         {
//           type: "button",
//           style: "primary",
//           color: "#905c44",
//           action: {
//             type: "uri",
//             label: "Add to Cart",
//             uri: "https://linecorp.com",
//           },
//         },
//       ],
//     },
//   },
// });
// flex2html("flex12", {
//   type: "flex",
//   altText: "Flex Message",
//   contents: {
//     type: "bubble",
//     hero: {
//       type: "image",
//       url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_3_movie.png",
//       size: "full",
//       aspectRatio: "20:13",
//       aspectMode: "cover",
//       action: { type: "uri", uri: "http://linecorp.com/" },
//     },
//     body: {
//       type: "box",
//       layout: "vertical",
//       spacing: "md",
//       contents: [
//         {
//           type: "text",
//           text: "BROWN'S ADVENTURE\nIN MOVIE",
//           wrap: true,
//           weight: "bold",
//           gravity: "center",
//           size: "xl",
//         },
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
//                   text: "Date",
//                   color: "#aaaaaa",
//                   size: "sm",
//                   flex: 1,
//                 },
//                 {
//                   type: "text",
//                   text: "Monday 25, 9:00PM",
//                   wrap: true,
//                   size: "sm",
//                   color: "#666666",
//                   flex: 4,
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
//                   text: "Place",
//                   color: "#aaaaaa",
//                   size: "sm",
//                   flex: 1,
//                 },
//                 {
//                   type: "text",
//                   text: "7 Floor, No.3",
//                   wrap: true,
//                   color: "#666666",
//                   size: "sm",
//                   flex: 4,
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
//                   text: "Seats",
//                   color: "#aaaaaa",
//                   size: "sm",
//                   flex: 1,
//                 },
//                 {
//                   type: "text",
//                   text: "C Row, 18 Seat",
//                   wrap: true,
//                   color: "#666666",
//                   size: "sm",
//                   flex: 4,
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           type: "box",
//           layout: "vertical",
//           margin: "xxl",
//           contents: [
//             { type: "spacer" },
//             {
//               type: "image",
//               url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/linecorp_code_withborder.png",
//               aspectMode: "cover",
//               size: "xl",
//             },
//             {
//               type: "text",
//               text: "You can enter the theater by using this code instead of a ticket",
//               color: "#aaaaaa",
//               wrap: true,
//               margin: "xxl",
//               size: "xs",
//             },
//           ],
//         },
//       ],
//     },
//   },
// });
// flex2html("flex13", {
//   type: "flex",
//   altText: "Flex Message",
//   contents: {
//     type: "bubble",
//     header: { type: "box", layout: "vertical", contents: [] },
//     hero: {
//       type: "box",
//       layout: "vertical",
//       contents: [{ type: "text", text: "hello, world" }],
//     },
//     body: {
//       type: "box",
//       layout: "vertical",
//       contents: [
//         { type: "text", text: "Brown Cafe", weight: "bold", size: "xl" },
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
//                 { type: "text", text: "Place", color: "#aaaaaa", size: "sm" },
//                 {
//                   type: "text",
//                   text: "Miraina Tower, 4-1-6 Shinjuku, Tokyo",
//                   wrap: true,
//                   color: "#666666",
//                   size: "sm",
//                 },
//               ],
//             },
//             {
//               type: "box",
//               layout: "baseline",
//               spacing: "sm",
//               contents: [
//                 { type: "text", text: "Time", color: "#aaaaaa", size: "sm" },
//                 {
//                   type: "text",
//                   text: "10:00 - 23:00",
//                   wrap: true,
//                   color: "#666666",
//                   size: "sm",
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
//         { type: "spacer", size: "sm" },
//       ],
//     },
//     styles: {
//       header: { backgroundColor: "#00ff00" },
//       hero: { backgroundColor: "#0000ff" },
//       body: { backgroundColor: "#eeeeee" },
//       footer: { backgroundColor: "#ff0000" },
//     },
//   },
// });

flex2html("flex1", testFmJson);

export default testFunc;
