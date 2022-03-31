import { Node } from "@baklavajs/core";
import { INodeState } from "@baklavajs/core/dist/baklavajs-core/types";

export default class Room extends Node {
  public type = "Set Room";
  public name = this.type;
  public twoColumn = true;
  public width = 250;

  public addClientNotAvailable() {
    return this.addOption(
      "ClientNotAvailable",
      "TextOption",
      "(The client character will not be visible for this room.)"
    );
  }
  public removeClientNotAvailable() {
    return this.removeOption("ClientNotAvailable");
  }

  public constructor() {
    super();
    this.addInputInterface("Input", undefined, null, { type: "flow" });
    this.addOutputInterface("Output", { type: "flow" });
    this.addOption("RoomLabel", "TextOption", "Please select a room:");
    const roomThumbnailPlaceholder = "./img/200x200.gif";
    const roomThumbnails = [
      {
        text: "Nursing station",
        value: "./img/nursing_station.png",
      },
      {
        text: "Client bedroom",
        value: "./img/client_bedroom.png",
      },
      {
        text: "Client bedroom - sofa",
        value: "./img/client_bedroom_sofa.png",
      },
    ];
    const roomItems = [
      "Nursing station",
      "Client bedroom",
      "Client bedroom - sofa",
    ];
    const roomSelect = this.addOption(
      "RoomSelect",
      "SelectOption",
      roomItems[0],
      undefined,
      {
        items: roomItems,
      }
    );
    const roomImage = this.addOption(
      "RoomImage",
      "ImageOption",
      roomThumbnails[0].value
    );
    this.addOption(
      "RoomCharacterslabel",
      "TextOption",
      "myTest Which characters should be visible?"
    );
    this.addOption("EnableCharacterA", "CharactersOption", false);
    this.addOption("EnableCharacterB", "CharactersOption", false);
    this.addOption("EnableCharacterC", "CharactersOption", false);
    this.addOption("EnableClient", "CharactersOption", false);
    this.addClientNotAvailable();
    roomSelect?.events.setValue.addListener(this, (newValue) => {
      if (roomImage) {
        let thumbnailFound = false;
        for (const i in roomThumbnails) {
          if (roomThumbnails[i].text === newValue) {
            roomImage.value = roomThumbnails[i].value;
            thumbnailFound = true;
          }
        }
        if (!thumbnailFound) {
          roomImage.value = roomThumbnailPlaceholder;
        }
      }
      if (newValue === "Nursing station") {
        // this.removeOption("EnableClient");
        this.addClientNotAvailable();
      } else {
        this.removeClientNotAvailable();
        // this.addOption("EnableClient", "CharactersOption", false);
      }
    });
  }

  public load(state: INodeState) {
    super.load(state);
  }
}
