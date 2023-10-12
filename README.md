# line-fm-transfer
This tool is used for transfer Line Flex Message to html

-----------------------------
## 背景說明：
在 Line 訊息當中，[Flex Message](https://developers.line.biz/en/docs/messaging-api/using-flex-messages/) 是近期比較熱門用來推廣行銷的方式，此 repo 的意義在於能夠將 Line Flex Message JSON 參數輸出成 html，其他 project 引入後直接將輸出的 html render 在畫面上即可。

-----------------------------
## 輸出範例：
輸出後的 html render 在畫面上 be like：
![image](https://github.com/sinleadpro/line-fm-transfer/assets/103102064/985bd66d-fd3e-465d-acd7-3e1fb608e8b2)

![image](https://github.com/sinleadpro/line-fm-transfer/assets/103102064/84a3d204-7ed7-482f-b88c-0e8c42aea954)

-----------------------------
## 使用方式：
### JS API:
- `fmTransfer`:
  用來將 Line 的 Flex Message JSON Object 輸出成 html 的格式，依照目前的需求，主要會區分成 `text`、`bubble` 2 種類別。
  使用範例：
  1. Bubble Type (Text in Flex Message)
  ```
  // Ex1. bubble type
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

  // Ex1. usage:
  flex2html(lineJsonDecorator(testTextJsonBubble));
  ```

  2. 純 img（一樣用 bubble type 去包裹）
  ```
    let imgJson = {
    type: "bubble",
    hero: {
      type: "image",
      url: "https://i.scdn.co/image/ab6761610000e5eb6be070445b03e0b63147c2c1",
      size: "full",
      aspectMode: "cover",
    },
  };

  // usage:
  flex2html("flex1", lineJsonDecorator(imgJson));
  ```

  3. 純 Text (用 text type)
  ```
    let testTextJsonPlain = {
    type: "text",
    text: "Needless to say. I keep her in check.",
  };

  // usage:
  flex2html("flex1", lineJsonDecorator(testTextJsonBubble));
  ```
