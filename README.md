# flow-interfaces-chatwork-client-gas

## Usage

### install

```
npm install --save-dev flow-interfaces-chatwork-client-gas
```

### Flow Config

Add the interfaces to your '.flowconfig'

```
[libs]
node_modules/flow-interfaces-chatwork-client-gas/definitions
```

## Example

### Setup

```
$ npm install yarn
$ yarn add --dev flow-bin flow-interfaces-chatwork-client-gas
$ echo "[libs]
node_modules/flow-interfaces-chatwork-client-gas/definitions" > .flowconfig
```

code: `index.js`

```javascript
// @flow

function sendMessage() {
  var client = ChatWorkClient.factory({tokn: 'xxx'}); // typo token
  client.sendMessage({room_id: 'xx', body: 'xx'});
}
```

execute:

```
$ flow
yarn run flow                                                         7s 922ms
yarn run v1.0.2
warning package.json: No license field
$ "/Users/eiel/Documents/Programming/cwgas-sample/node_modules/.bin/flow"
Library type error:
node_modules/flow-interfaces-chatwork-client-gas/definitions/ChatWork.js:8
 8:   factory(config: gas$ChatWork$Config): gas$ChatWorkClient$ChatWork;
                      ^^^^^^^^^^^^^^^^^^^ property `token` of gas$ChatWork$Config. Property not found in
 4:   var client = ChatWorkClient.factory({tokn: 'xxx'}); // typo token
                                          ^^^^^^^^^^^^^ object literal. See: index.js:4
```

# Link

* [cw-shibuya/chatwork-client-gas GitHub](https://github.com/cw-shibuya/chatwork-client-gas)
