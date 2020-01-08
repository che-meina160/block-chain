## 各種ファイルの居場所

* CSSは `sass/main.v01.scss` がエントリーポイント
* HTMLは `html` 配下
* JSは `js` 配下
* 画像は `img` 配下


## Sassのコンパイル方法

SassからCSSの出力はCompassのウォッチを利用しているため、CSSを作成する場合はOSによって、
`(Mac)compass_start.command`か`(Win)compass_start.bat`を実行してください。


## 外注で利用する場合の注意点

* htmlでパスを記述する場合は相対パスでお願いします。 例：`<img src="../img/some_pic.png" />`
* `css` フォルダ内のファイルを手動で編集しません。Sassを利用してコンパイルしてください。


もしほかに不明点あったら、お問い合わせください。
