## Firebase Storage Date Exporter
自家製Firebase Storageに溜め込んだデータをDateFrameにはめ込んでexportするサービスの
アーキテクチャ。

Firebase上に存在するデータを取得する

```
npm run start --from 2020-09-10  --to 2020-10-11  --type 3m
```

```
print a message received as an argument

オプション:
  --help     ヘルプを表示                                                 [真偽]
  --version  バージョンを表示                                             [真偽]
  --from     set required date string format 'yyyy-mm-dd'               [文字列]
  --to       set required date string format 'yyyy-mm-dd'               [文字列]
  --type     set ohlcType (1m,3m,5m,15m,30m,1h,2h,4h,6h,12h,1d,3d,1w)   [文字列]
```

1分足は全てのデータを収集していないが、3分足以降のデータは全て連続性のあるデータを保存しているので取得後結合することでデータレイクを作成することができる。