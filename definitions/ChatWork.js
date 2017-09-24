// @flow

interface gas$ChatWork$Config {
  +token: string;
}

interface gas$ChatWorkClient {
  factory(config: gas$ChatWork$Config): gas$ChatWorkClient$ChatWork;
}

interface gas$ChatWorkClient$SendMessageRequest {
  +body: string;
  +room_id: gas$ChatWorkClient$RoomID;
}

interface gas$ChatWorkClient$SendTaskRequest {
  +body: string;
  +room_id: gas$ChatWorkClient$RoomID;
  +limit: gas$ChatWorkClient$TaskLimit;
}

type gas$ChatWorkClient$Response = boolean | Object;
type gas$ChatWorkClient$RoomID = number | string;
type gas$ChatWorkClient$TaskLimit = number | string;

interface gas$ChatWorkClient$ChatWork {
  getRooms(): gas$ChatWorkClient$Response;
  sendMessage(params: gas$ChatWorkClient$SendMessageRequest): gas$ChatWorkClient$Response;
  sendMessageToMyChat(message: string): gas$ChatWorkClient$Response;
  sendTask(params: gas$ChatWorkClient$SendTaskRequest): gas$ChatWorkClient$Response;
  getRoomTasks(room_id: gas$ChatWorkClient$RoomID, params: Object): gas$ChatWorkClient$Response;
  getMyTasks(params: Object): gas$ChatWorkClient$Response;
  post(endpoint: string, put_data: Object): gas$ChatWorkClient$Response;
  get(endpoint: string, get_data: Object): gas$ChatWorkClient$Response;
}

declare var ChatWorkClient: gas$ChatWorkClient;
