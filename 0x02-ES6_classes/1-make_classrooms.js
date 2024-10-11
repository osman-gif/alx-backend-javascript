import ClassRoom from './0-classroom';

export default ClassRoom.prototype.initializeRooms = function f() {
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
};
