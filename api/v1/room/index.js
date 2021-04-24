/*
 * @file: index.js
 * @description: It's combine all addBlog routers.
 * @author: Manpreet Singh
 */

import roomList from "./room-list";
import roomChatList from "./room-chat-list";
import createRoom from "./create-room";

export default [
  roomList,
  roomChatList,
  createRoom
];
