// @flow

function sendMessage() {
  var client = ChatWorkClient.factory({token: 'xxx'});
  client.sendMessage({room_id: 'xx', body: 'xx'});
}
