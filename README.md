# line-fm-transfer
This tool is used for transfer Line Flex Message to html

-----------------------------
##使用方式：
### JS API:
- `flex2html`:
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
- `lineJsonDecorator`:
  flex2html function 需要我們的 Line FM Json 物件外面再多包一層 flex type，因此此 function 用來將 input 再多包一層以符合 `flex2html` 參數格式
