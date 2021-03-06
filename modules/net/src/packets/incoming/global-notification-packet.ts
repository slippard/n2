/**
 * @module net/packets/incoming
 */
import { PacketBuffer } from '../../packet-buffer';
import { PacketType } from '../../packet-type';
import { IncomingPacket } from '../../packet';

/**
 * Received when a global notification is sent out to all players.
 */
export class GlobalNotificationPacket implements IncomingPacket {

  type = PacketType.GLOBAL_NOTIFICATION;
  propagate = true;

  //#region packet-specific members
  /**
   * The type of notification received.
   */
  notificationType: number;
  /**
   * The notification message.
   */
  text: string;
  //#endregion

  read(buffer: PacketBuffer): void {
    this.notificationType = buffer.readInt32();
    this.text = buffer.readString();
  }
}
