import { flex2html } from "./transfer.js";

let testTextJsonPlain = {
  type: "text",
  text: "Needless to say. I keep her in check.",
};

let testTextJsonPlain1 = {
  type: "text",
  text: "She was a bad-bad, nevertheless.",
};

let testTextJsonPlain2 = {
  type: "text",
  text: "Callin' it quits now, baby, I'm a wreck",
};

let testTextJsonPlain3 = {
  type: "text",
  text: "Crash at my place, baby, you're a wreck",
};

let testTextJsonPlain4 = {
  type: "text",
  text: `Thinkin' in a bad way, losin' your grip <br>
  Screamin' at my face, baby, don't trip <br>
  Someone took a big L, don't know how that felt
  Lookin' at you sideways, party on tilt`,
};

let testTextJsonBubble = {
  type: "bubble",
  body: {
    type: "box",
    layout: "vertical",
    contents: [
      {
        type: "text",
        text: "Post Malone - Sunflower",
        size: "lg",
        weight: "bold",
      },
    ],
  },
};
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
          label: "前往訂單",
          uri: "https://linecorp.com",
        },
      },
      {
        type: "button",
        style: "link",
        height: "sm",
        action: {
          type: "uri",
          label: "追蹤貨態",
          uri: "https://linecorp.com",
        },
      },
    ],
    flex: 0,
  },
};

let imgJson = {
  type: "bubble",
  hero: {
    type: "image",
    url: "https://i.scdn.co/image/ab6761610000e5eb6be070445b03e0b63147c2c1",
    size: "full",
    aspectMode: "cover",
  },
};

function lineJsonDecorator(json) {
  return {
    type: "flex",
    altText: "Flex Message",
    contents: json,
  };
}

flex2html(lineJsonDecorator(testTextJsonBubble));
flex2html(lineJsonDecorator(imgJson));
flex2html(lineJsonDecorator(testTextJsonPlain));
flex2html(lineJsonDecorator(testTextJsonPlain1));
flex2html(lineJsonDecorator(testTextJsonPlain2));
flex2html(lineJsonDecorator(testTextJsonPlain3));
flex2html(lineJsonDecorator(testTextJsonPlain4));
flex2html(lineJsonDecorator(testFmJson));
flex2html({
  type: "flex",
  altText: "Flex Message",
  contents: {
    type: "bubble",
    size: "deca",
    hero: {
      type: "image",
      url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
      size: "full",
      aspectRatio: "20:13",
      aspectMode: "cover",
      action: { type: "uri", uri: "http://linecorp.com/" },
    },
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        { type: "text", text: "Deca Bubble Size", weight: "bold", size: "xl" },
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
          action: { type: "uri", label: "CALL", uri: "https://linecorp.com" },
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
        { type: "box", layout: "vertical", contents: [], margin: "sm" },
      ],
      flex: 0,
    },
  },
});

function fmTransfer(json) {
  return flex2html(lineJsonDecorator(json));
}
export { fmTransfer };
