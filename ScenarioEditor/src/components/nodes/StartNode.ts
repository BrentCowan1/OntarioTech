import store from "@/store";
import { Node } from "@baklavajs/core";
import { INodeState } from "@baklavajs/core/dist/baklavajs-core/types";

export default class Start extends Node {
  public type = "Start";
  public name = this.type;
  public twoColumn = false;

  public updateCharactersList() {
    const names = {
      client: store.state.characterNames.client,
      characterA: store.state.characterNames.characterA,
      characterB: store.state.characterNames.characterB,
      characterC: store.state.characterNames.characterC,
    };
    return names;
  }

  public updateSettings() {
    const settings = {
      showIfDecisionWasCorrect: store.state.showIfDecisionWasCorrect,
      useTTS: store.state.useTTS,
      allowIncorrectDecision: store.state.allowIncorrectDecision,
    };
    return settings;
  }

  public constructor() {
    super();
    this.addOption("SceneNameLabel", "TextOption", "Scene name:");
    this.addOption("SceneName", "InputOption");
    this.addOption("SceneDataLabel", "TextOption", "Scene data:");
    this.addOption(
      "Character names",
      "ButtonOption",
      {
        client: store.state.characterNames.client,
        characterA: store.state.characterNames.characterA,
        characterB: store.state.characterNames.characterB,
        characterC: store.state.characterNames.characterC,
      },
      "SidebarCharacterNames"
    );
    this.addOption(
      "Background",
      "SceneDataOption",
      { title: "Background information", content: "" },
      "SidebarSceneDataOption"
    );
    this.addOption(
      "Objectives",
      "SceneDataOption",
      { title: "Objectives", content: "" },
      "SidebarSceneDataOption"
    );
    this.addOption(
      "PatientData",
      "SceneDataOption",
      { title: "Patient data", content: "" },
      "SidebarSceneDataOption"
    );
    this.addOption(
      "AdditionalData",
      "SceneDataOption",
      {
        title: "Additional data",
        additionalContent: [],
      },
      "SidebarSceneDataAdditionalOption"
    );
    this.addOption(
      "Settings",
      "ButtonOption",
      {
        showDecisionResultType: store.state.showIfDecisionWasCorrect,
        allowIncorrectDecision: store.state.allowIncorrectDecision,
        useTTS: store.state.useTTS,
      },
      "SidebarSceneSettings"
    );
    this.addOutputInterface("Output", { type: "flow" });
  }

  public load(state: INodeState) {
    super.load(state);
    // restore character names from loaded JSON file into vuex store
    state.options.forEach(function (value) {
      if (value[0] === "Character names") {
        store.commit("updateNameClient", value[1].client);
        store.commit("updateNameCharacterA", value[1].characterA);
        store.commit("updateNameCharacterB", value[1].characterB);
        store.commit("updateNameCharacterC", value[1].characterC);
      }
    });
  }
}
