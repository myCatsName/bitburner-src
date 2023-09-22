import { BitNodes } from "../BitNode/BitNode";
import { Player } from "@player";

export class SourceFile {
  info: JSX.Element;
  lvl = 1;
  n: number;
  name: string;
  owned = false;

  constructor(number: number, info: JSX.Element) {
    const bitnodeKey = "BitNode" + number;
    const bitnode = BitNodes[bitnodeKey];
    const displayName = number === -1 ? "Exploits in the BitNodes" : bitnode.name;
    if (bitnode == null && number !== -1) {
      throw new Error("Invalid Bit Node for this Source File");
    }

    this.n = number;
    this.name = `Source-File ${number}: ${displayName}`;
    this.info = info;
    if (number === -1) this.lvl = Player.exploits.length;
  }
}
