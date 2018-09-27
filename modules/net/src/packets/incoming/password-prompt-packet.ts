/**
 * @module net/packets/incoming
 */
import { PacketBuffer } from '../../packet-buffer';
import { PacketType } from '../../packet-type';
import { IncomingPacket } from '../../packet';

/**
 * Received to prompt the player to enter their password.
 */
export class PasswordPromptPacket implements IncomingPacket {

  type = PacketType.PASSWORD_PROMPT;
  propagate = true;

  //#region packet-specific members
  /**
   * > Unknown.
   */
  cleanPasswordStatus: number;
  //#endregion

  read(buffer: PacketBuffer): void {
    this.cleanPasswordStatus = buffer.readInt32();
  }
}
