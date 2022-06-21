## 使用方法

1. Node.jsをインストールします。
[Node.jsのホームページはこちら](https://nodejs.org/ja/)

2. コマンドライン(ターミナル)を開きます。

3. 表示したい`index.html`のフォルダへ移動します。

4. `startLocalHost.js`を実行します。

※Node.jsがすでにインストールされている場合は、1の手順を飛ばします。

## 説明

- `startLocalHost`は引数にhtmlファイル名を指定できます。
- Node.jsの実行位置はコマンドライン上の現在のカレントディレクトリになります。
- `startLocalHost`で引数を指定しない場合、カレントディレクトリの`index.html`がロードされます。
    例:index.htmlのディレクトリ=C:/test,startLocalHostのディレクトリ=C:/ChBEJavaScript、
    
    ```
    cd C:/test

    node C:/ChBEJavaScript/startLocalHost.js
    ```
    上記のコマンドを打つとC:/test/index.htmlが表示されるようになります。