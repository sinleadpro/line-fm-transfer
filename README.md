# line-fm-transfer
This tool is used for transfer Line Flex Message to html

-----------------------------
## 背景說明：
在 Line 訊息當中，[Flex Message](https://developers.line.biz/en/docs/messaging-api/using-flex-messages/) 是近期比較熱門用來推廣行銷的方式，此 repo 的意義在於能夠將 Line Flex Message JSON 參數輸出成 html，其他 project 引入後直接將輸出的 html render 在畫面上或是依據需要的樣式調整 css 即可。

-----------------------------
## 輸出範例：
輸出後的 html render 在畫面上 be like：
![image](https://github.com/sinleadpro/line-fm-transfer/assets/103102064/985bd66d-fd3e-465d-acd7-3e1fb608e8b2)
![image](https://github.com/sinleadpro/line-fm-transfer/assets/103102064/84a3d204-7ed7-482f-b88c-0e8c42aea954)

-----------------------------
## 使用方式：
### Dependency:
- 因為是內部使用套件，所以目前都是使用 git url 的方式引入。
  `"line-fm-transfer": "https://github.com/sinleadpro/line-fm-transfer.git#master"`
### JS API:
- `import { fmTransfer } from 'line-fm-transfer';`
- `fmTransfer`:
  用來將 Line 的 Flex Message JSON Object 輸出成 html 的格式，依照目前的需求，主要會區分成 `text`、`bubble` 2 種類別。
  使用範例：
  1. Bubble Type (Text in Flex Message)
  ```js
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
  fmTransfer(testTextJsonBubble)
  ```

  2. 純 img（一樣用 bubble type 去包裹）
  ```js
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
  fmTransfer(imgJson)
  ```

  3. 純 Text (用 text type)
  ```js
    let testTextJsonPlain = {
    type: "text",
    text: "Needless to say. I keep her in check.",
  };
  
  // usage:
  fmTransfer(testTextJsonPlain)
  ```
### CSS
- `import 'line-fm-transfer/style.css';`
- 需要在引入的 container 加入 CSS `class='chatbox'` 才能吃到 style.css 的樣式。

-----------------------------
## 實際引入參考：
* Note: 手機樣式是另外改寫 CSS 來完成，若將 `fmTransfer` 輸出的 HTML 直接 render 在畫面上會是長成輸出範例的樣子。
## EC
- Line OA 通知樣板
  <img width="1440" alt="image" src="https://github.com/sinleadpro/line-fm-transfer/assets/109904661/cd83306a-ba5c-4d4e-8983-e8702d7e49fe">
- 引入元件: `@src/features/line_message_templates/components/edit/MobilePreviewer.tsx`
## AUTOMATION
- Line OA 發送節點
  <img width="1440" alt="image" src="https://github.com/sinleadpro/line-fm-transfer/assets/109904661/b92c9f3b-99fd-4fac-80f0-584faceedeee">
- 引入元件: `~src/utils/components/Nox/NoxLinePreviewer.tsx`


