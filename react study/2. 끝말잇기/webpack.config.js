const { appendFile } = require("fs");
const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
//5. 설치한 플러그인 기능을 불러옴.

module.exports = {
  name: "word-relay-setting",
  mode: "development",
  devtool: "eval",
  resolve: { extensions: [".js", ".jsx"] },

  entry: {
    app: ["./client"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 5% in KR", "last 2 chrome versions"],
                },
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [
            //7. 여기에도 플러그인 추가. 여기는 babel loader의 plugin 자리인데,
            //이것을 추가하면 babel이 최신 문법을 옛날 자바스크립트로 변환해줄 때 핫 리로딩 기능까지 추가해줌.
            //즉 모든 브라우저에서 핫 리로딩 기능을 추가하기 위해 여기와 아래의 plugin 자리에 이것을 모두 넣어주는 것.
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel",
          ],
        },
      },
    ],
  },
  plugins: [new RefreshWebpackPlugin()], //6. 플러그인 장착
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/dist",
  },
  devServer: {
    //설치한 dev server 설정
    devMiddleware: { publicPath: "/dist" },
    //아직은 존재하지 않지만 나중에 웹팩이 생성할 파일이 위치할 폴더의 위치
    //그래서 바로 위의 output의 public path를 그대로 갖다 적어주면 됨.
    static: { directory: path.resolve(__dirname) },
    //실제 존재하는 정적 파일(index.html)이 위치한 경로 작성.
    //이 파일(webpack.config.js) 기준 동일 폴더에 있으면 __dirname만 적어주고,
    //다른 폴더에 있다면 resolve(__dirname, '폴더명') 이렇게 적어주기.
    hot: true,
  },
  /* webpack dev server의 역할: 
  1. 핫 리로딩 등 프론트 개발의 편의를 위해 임의로 잠깐 두는 서버
  2. 빌드한 결과물을 publicpath에 저장해두고, index를 실행하면 저장해뒀던 결과물을 제공해줌.
  3. 핫 리로딩 기능: 소스코드의 변경사항을 감지해서 변경사항이 발생하면 알아서 저장했던 결과물을 자동으로 수정해줌.
  4. npx webpack 이나 npm run dev로 빌드를 해준 다음, http://localhost:8080/ 으로 이동하면
     이 때부터 굳이 위의 명령어를 입력하여 빌드를 하지 않아도 변경사항이 실시간으로 반영됨.
  ❗️ 굳이 설치한 두 개를 설치하지 않더라도 리로딩 기능은 제공되나,
  기존의 데이터가 보존되지 않고 새로 리로딩 되는 것이므로, 
  기존 데이터를 보존하면서 수정사항을 바로바로 반영해주는 핫 리로딩과는 다른 것.
*/
};
