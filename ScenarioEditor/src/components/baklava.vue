<template>
  <div style="width: 100vw; height: 100vh">
    <baklava-editor :plugin="viewPlugin" ref="editor"></baklava-editor>
    <div id="header">
      <h1 id="editorName">VSG - Scenario Editor</h1>
      <div id="editorVersion">version {{ $store.getters.appVersion }}</div>
    </div>
    <div class="buttons" id="footer">
      <button @click="clear">New scenario</button>
      <button @click="open">Open scenario</button>
      <input
        type="file"
        id="file-selector"
        accept="application/json"
        ref="fileToLoad"
        :name="loadFileInput"
        @change="loadJson($event.target.name, $event.target.files)"
      />
      <!-- <button @click="load">Load</button> -->
      <button @click="save">Save scenario</button>
      <button @click="preview" :class="{ hidden: !previewEnabled }">
        Preview
      </button>
      <!-- <button :class="{ hidden: previewEnabled }">Preview (loading)</button> -->
    </div>
    <!-- <Modal ref="unityPlayer" style="display: hidden"></Modal> -->
  </div>
</template>

<script>
import { Editor } from "@baklavajs/core";
import { ViewPlugin } from "@baklavajs/plugin-renderer-vue";
import { OptionPlugin } from "@baklavajs/plugin-options-vue";
import { InterfaceTypePlugin } from "@baklavajs/plugin-interface-types";
import { saveAs } from "file-saver";

import StartNode from "./nodes/StartNode";
import EndNode from "./nodes/EndNode";
import DialogueNode from "./nodes/DialogueNode";
import DialogueWithChoicesNode from "./nodes/DialogueWithChoicesNode";
import DecisionPointNode from "./nodes/DecisionPointNode";
import DecisionResultNode from "./nodes/DecisionResultNode";
import RoomNode from "./nodes/RoomNode";
import ChoicesOption from "./options/ChoicesOption.vue";
import DialogueOption from "./options/DialogueOption.vue";
import SceneDataOption from "./options/SceneDataOption.vue";
import ImageOption from "./options/ImageOption.vue";
import CharactersOption from "./options/CharactersOption.vue";
import SidebarChoicesOption from "./sidebars/SidebarChoices.vue";
import SidebarDialogueOption from "./sidebars/SidebarDialogue.vue";
import SidebarEndOption from "./sidebars/SidebarEnd.vue";
import SidebarSceneDataOption from "./sidebars/SidebarSceneData.vue";
import SidebarSceneDataAdditionalOption from "./sidebars/SidebarSceneDataAdditional.vue";
import SidebarCharacterNames from "./sidebars/SidebarCharacterNames.vue";
import SidebarSceneSettings from "./sidebars/SidebarSceneSettings.vue";
// import DialogueWithChoicesNodeClass from "./nodes/DialogueWithChoicesNodeClass";
// import ChoiceNode from "./nodes/ChoiceNode";
// import ExampleNode from "./nodes/ExampleNode";
// import CustomNodeWithClass from "./nodes/CustomNodeWithClass";
// import CustomNodeWithBuilder from "./nodes/CustomNodeWithBuilder";

// import Modal from "./Modal.vue";
import store from "@/store";

export default {
  name: "Baklava",
  data() {
    return {
      editor: new Editor(),
      viewPlugin: new ViewPlugin(),
      optionPlugin: new OptionPlugin(),
      typePlugin: new InterfaceTypePlugin(),
      loadFileInput: "loadFile", // TODO: check if this is really necessary
      previewEnabled: false,
    };
  },
  // components: {
  //   Modal,
  // },
  methods: {
    open() {
      // debugger;
      this.$refs.fileToLoad.click();
    },
    save() {
      const jsonOutput = JSON.stringify(this.editor.save());
      const jsonOutputBlob = new Blob([jsonOutput], {
        type: "text/plain;charset=utf-8",
      });
      saveAs(jsonOutputBlob, "scene.json");
    },
    generatePackage() {
      console.log("PLACEHOLDER");
    },
    // load: function() {
    //   const s = prompt();
    //   if (s) { this.editor.load(JSON.parse(s)); }
    // },
    loadJson(fieldName, fileList) {
      // debugger;
      if (fileList.length > 0) {
        const file = fileList[0];
        const reader = new FileReader();
        reader.addEventListener("load", (event) => {
          // console.log("loadJSON # reader: " + event.target.result);
          this.editor.load(JSON.parse(event.target.result));
        });
        reader.readAsText(file);
      }
    },
    clear() {
      // reset file input value
      this.$refs.fileToLoad.value = "";
      // empty scene json structure
      const emptyScene =
        // '{"nodes":[],"connections":[],"panning":{"x":0,"y":1},"scaling":1}';
        '{"nodes":[{"type":"Start","id":"node_16459955492369","name":"Start","options":[["SceneNameLabel","Scene name:"],["SceneName","Example"],["SceneDataLabel","Scene data:"],["Character names",{"client":"Client","characterA":"Character A","characterB":"Character B","characterC":"Character C"}],["Background",{"title":"Background information","content":"<p></p>"}],["Objectives",{"title":"Objectives","content":""}],["PatientData",{"title":"Patient data","content":""}],["AdditionalData",{"title":"Additional data","additionalContent":[]}]],"state":{},"interfaces":[["Output",{"id":"ni_164599554923710","value":null}]],"position":{"x":280,"y":256},"width":200,"twoColumn":false,"customClasses":""},{"type":"Set Room","id":"node_164599555475711","name":"Set Room","options":[["RoomLabel","Please select a room:"],["RoomSelect","Client bedroom"],["RoomImage","./img/client_bedroom.png"],["RoomCharacterslabel","Which characters should be visible?"],["EnableCharacterA",true],["EnableCharacterB",false],["EnableCharacterC",false],["EnableClient",true]],"state":{},"interfaces":[["Input",{"id":"ni_164599555475712","value":null}],["Output",{"id":"ni_164599555475713","value":null}]],"position":{"x":543,"y":252},"width":250,"twoColumn":true,"customClasses":""},{"type":"End","id":"node_164599558041524","name":"End","options":[["Allow retry",true],["Play audio",null],["Audio URL",null]],"state":{},"interfaces":[["Input",{"id":"ni_164599558041525","value":null}]],"position":{"x":1953,"y":256},"width":200,"twoColumn":true,"customClasses":""},{"type":"Decision point","id":"node_164599637105416","name":"Decision point","options":[["Dialogue",{"content":"<p>What do you think about XYZ?</p>"}],["Choices",{"choice1":"I agree.","choice2":"I kind of agree.","choice3":"I disagree."}],["Play audio",null],["Audio URL",null]],"state":{},"interfaces":[["Input",{"id":"ni_164599637105417","value":null}],["Choice 1",{"id":"ni_164599637105418","value":null}],["Choice 2",{"id":"ni_164599637105419","value":null}],["Choice 3",{"id":"ni_164599637105420","value":null}],["Choice 4",{"id":"ni_164599637105421","value":null}],["Choice 5",{"id":"ni_164599637105422","value":null}]],"position":{"x":1219,"y":253},"width":300,"twoColumn":true,"customClasses":""},{"type":"Decision result","id":"node_164599640737626","name":"Decision result","options":[["Correct?",true],["Value",3],["Dialogue",{"content":"Feedback text"}],["Play audio",null],["Audio URL",null]],"state":{},"interfaces":[["Input",{"id":"ni_164599640737627","value":null}],["Output",{"id":"ni_164599640737628","value":null}]],"position":{"x":1634,"y":254},"width":250,"twoColumn":true,"customClasses":""},{"type":"Decision result","id":"node_164599642824642","name":"Decision result","options":[["Correct?",null],["Value",2],["Dialogue",{"content":"Feedback text"}],["Play audio",null],["Audio URL",null]],"state":{},"interfaces":[["Input",{"id":"ni_164599642824643","value":null}],["Output",{"id":"ni_164599642824644","value":null}]],"position":{"x":1633,"y":558},"width":250,"twoColumn":true,"customClasses":""},{"type":"Decision result","id":"node_164599643600350","name":"Decision result","options":[["Correct?",null],["Value",null],["Dialogue",{"content":"Feedback text"}],["Play audio",null],["Audio URL",null]],"state":{},"interfaces":[["Input",{"id":"ni_164599643600351","value":null}],["Output",{"id":"ni_164599643600352","value":null}]],"position":{"x":1633,"y":875},"width":250,"twoColumn":true,"customClasses":""},{"type":"Dialogue","id":"node_1646008119833227","name":"Dialogue","options":[["CharacterLabel","Character:"],["Character","Client"],["EmotionLabel","Client emotion:"],["Emotion","Neutral"],["Dialogue",{"content":"<p>Example text.</p>"}],["Play audio",null],["Audio URL",null]],"state":{},"interfaces":[["Input",{"id":"ni_1646008119833228","value":null}],["Output",{"id":"ni_1646008119833229","value":null}]],"position":{"x":852,"y":253},"width":300,"twoColumn":true,"customClasses":""}],"connections":[{"id":"164599555645517","from":"ni_164599554923710","to":"ni_164599555475712"},{"id":"164599640913731","from":"ni_164599637105418","to":"ni_164599640737627"},{"id":"164599643103149","from":"ni_164599637105419","to":"ni_164599642824643"},{"id":"164599644202157","from":"ni_164599637105420","to":"ni_164599643600351"},{"id":"164599651161469","from":"ni_164599640737628","to":"ni_164599558041525"},{"id":"1646008159808235","from":"ni_1646008119833229","to":"ni_164599637105417"},{"id":"1646008538043240","from":"ni_164599555475713","to":"ni_1646008119833228"}],"panning":{"x":-255,"y":-82},"scaling":1}';
      // set editor to load empty scene
      this.editor.load(JSON.parse(emptyScene));
      // reset vuex state to default values
      store.dispatch("resetState");
    },
    preview() {
      this.$refs.unityPlayer.togglePreviewModal();
      const jsonOutput = JSON.stringify(this.editor.save());
      store.commit("updateSceneData", jsonOutput);
      this.loadScene();
      // this.$refs.unityPlayer.resetScene();
    },
    loadScene() {
      this.$refs.unityPlayer.loadScene();
    },
    updateNamesInNodes(nodeName, optionName) {
      const nodes = Object.values(this.editor.nodes);
      for (const node of nodes) {
        if (node.name === nodeName) {
          // debugger;
          const option = node.options.get(optionName);
          if (nodeName === "Start") {
            node.setOptionValue(optionName, node.updateCharactersList());
          } else {
            option.items = node.updateCharactersList();
          }
          option.events.updated.emit();
        }
      }
    },
    updateDialogueNodes() {
      this.updateNamesInNodes("Dialogue", "Character");
      this.updateNamesInNodes("Dialogue with choices", "Character");
    },
    updateStartNode() {
      this.updateNamesInNodes("Start", "Character names");
    },
  },
  created() {
    window.addEventListener("resetScene", this.loadScene);
    this.editor.use(this.optionPlugin);
    this.editor.use(this.viewPlugin);
    this.editor.use(this.typePlugin);

    // nodes
    this.editor.registerNodeType("Start", StartNode);
    this.editor.registerNodeType("End", EndNode);
    this.editor.registerNodeType("Dialogue", DialogueNode);
    this.editor.registerNodeType(
      "Dialogue with choices",
      DialogueWithChoicesNode
    );
    this.editor.registerNodeType("Decision point", DecisionPointNode);
    this.editor.registerNodeType("Decision result", DecisionResultNode);
    this.editor.registerNodeType("Set Room", RoomNode);
    // this.editor.registerNodeType(
    //   "Dialogue with choices class",
    //   DialogueWithChoicesNodeClass
    // );
    // this.editor.registerNodeType("ChoiceNode", ChoiceNode);
    // this.editor.registerNodeType("ExampleNode", ExampleNode);

    // connection types
    this.typePlugin.addType("entity", "cyan");
    this.typePlugin.addType("decision", "purple");
    this.typePlugin.addType("flow", "orange");

    // sidebars
    // this.viewPlugin.registerOption("SidebarOption", SidebarOption);
    this.viewPlugin.registerOption(
      "SidebarDialogueOption",
      SidebarDialogueOption
    );
    this.viewPlugin.registerOption(
      "SidebarChoicesOption",
      SidebarChoicesOption
    );
    this.viewPlugin.registerOption("SidebarEndOption", SidebarEndOption);
    this.viewPlugin.registerOption(
      "SidebarSceneDataOption",
      SidebarSceneDataOption
    );
    this.viewPlugin.registerOption(
      "SidebarSceneDataAdditionalOption",
      SidebarSceneDataAdditionalOption
    );
    this.viewPlugin.registerOption(
      "SidebarCharacterNames",
      SidebarCharacterNames
    );
    this.viewPlugin.registerOption(
      "SidebarSceneSettings",
      SidebarSceneSettings
    );

    // options
    this.viewPlugin.registerOption("DialogueOption", DialogueOption);
    this.viewPlugin.registerOption("ChoicesOption", ChoicesOption);
    this.viewPlugin.registerOption("SceneDataOption", SceneDataOption);
    this.viewPlugin.registerOption("ImageOption", ImageOption);
    this.viewPlugin.registerOption("CharactersOption", CharactersOption);

    // minimap
    this.viewPlugin.enableMinimap = true;
  },
  mounted() {
    // console.log("Scene data:\n" + this.$store.state.sceneData);
    // load example scenario
    this.clear();
  },
  watch: {
    "$store.state.characterNames.client": function () {
      this.updateStartNode();
      this.updateDialogueNodes();
    },
    "$store.state.characterNames.characterA": function () {
      this.updateStartNode();
      this.updateDialogueNodes();
    },
    "$store.state.characterNames.characterB": function () {
      this.updateStartNode();
      this.updateDialogueNodes();
    },
    "$store.state.characterNames.characterC": function () {
      this.updateStartNode();
      this.updateDialogueNodes();
    },
    "$store.state.unityLoaded": function () {
      this.previewEnabled = true;
    },
  },
};
</script>

<style lang="scss" scoped>
#file-selector {
  display: none;
}

#header {
  position: fixed;
  display: flex;
  // justify-content: center;
  justify-content: space-between;
  align-items: center;
  top: 0;
  margin: 0 auto;
  padding: 0;
  width: 100vw;
  height: 35px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}

#editorName {
  margin: 0 0 0 10px;
  padding: 0;
  font-size: 1.2em;
  display: inline;
  vertical-align: bottom;
}

#editorVersion {
  margin-right: 10px;
}

#footer {
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 0;
  margin: 0 auto;
  padding: 10px 0;
  width: 100vw;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  button,
  input {
    font-size: 1em;
    margin-right: 4px;
    border: 1px solid #bbb;
    background: none;
    color: white;
    border-radius: 4px;
    &:hover {
      background-color: rgba(255, 255, 255, 1);
      color: black;
    }
  }
  .hidden {
    display: none;
  }
}
</style>
