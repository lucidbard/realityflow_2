import { Room } from "./Room";
import { FlowProject } from "./FlowLibrary/FlowProject";

// TODO: Make a check for how many people are in a room and delete the room if there is nobody inside
export class RoomManager
{
  // TODO: Why is this static
  private static _RoomList : Array<Room> = [];
  private static _RoomCount : number = 0;

  /**
   * Creates a new room. This room must be tied to a project.
   * @param projectToLoad The project which is associated with the room
   */
  public static CreateRoom(projectID : String) : String
  {
    let newRoom = new Room(projectID);

    this._RoomList.push(newRoom);
    this._RoomCount++;
    
    return projectID;
  }

  /**
   * Searches all active rooms for a room with an associated room code
   * If found, the room with said room code is returned. Otherwise, 
   * FindRoom returns undefined
   * @param roomCode 
   */
  public static FindRoom(roomCode: String) : Room
  {
    return this._RoomList.find(element => element.GetRoomCode() == roomCode);
  }
}