# 静岡人マップ

## プレビュー方法

`src/` ディレクトリを HTTP サーバで公開し、ブラウザからアクセスします。

```sh
# python
python -m http.server --directory src 8080

# npm
npx http-server src -p 8080

# php
php -S localhost:8080 -t src
```

> [!WARNING]
>
> このページは ES Module を利用しているため、`src/index.html` を単にブラウザで開いても動作しません。
