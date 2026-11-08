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

## 使用ライブラリ・データ

[Leaflet](https://leafletjs.com/) - [BSD-2 Clause](https://github.com/Leaflet/Leaflet/blob/main/LICENSE)

[OpenStreetMap](https://www.openstreetmap.org/about) - [ODbL](https://opendatacommons.org/licenses/odbl/)
