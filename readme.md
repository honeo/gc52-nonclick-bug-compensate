# gc52-nonclick-bug-compensate
[honeo/gc52-nonclick-bug-compensate](https://github.com/honeo/gc52-nonclick-bug-compensate)  
[gc52-nonclick-bug-compensate](https://www.npmjs.com/package/gc52-nonclick-bug-compensate)

## なにこれ
GoogleChrome v52以降の不具合を何とかするやつ。

### 不具合とは
Anchor要素にEnterキーによるkeypressイベントが発生してもクリックイベントが発生しない。

### 何とかとは
Anchor要素にFocusしている状態で、Enterキーによるkeypressが発生し、直後にクリックイベントが起こらなかった場合、当該Anchor要素にクリックイベントを発生させる。

## 使い方
```sh
$ npm i -S gc52-nonclick-bug-compensate
```
```js
import 'gc52-nonclick-bug-compensate';
```

## API
```js
import ctrl from 'gc52-nonclick-bug-compensate';

ctrl.status; // true

ctrl.disable();
ctrl.status; // false

ctrl.enable();
ctrl.status; // true

ctrl.toggle();
ctrl.status; // false
```
