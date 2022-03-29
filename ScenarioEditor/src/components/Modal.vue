<template>
  <div style="display: inline-block">
    <transition name="modal">
      <div :class="{ hidden: !isOpen }">
        <div class="overlay">
          <div class="modal">
            <h2>Scenario Preview</h2>
            <Unity :unity="unityContext" width="960px" height="540px" />
            <div id="modal-buttons">
              <button @click="enableFullscreen()">Fullscreen</button>
              <button @click="togglePreviewModal()">Close</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import UnityWebgl from "unity-webgl";
import store from "@/store";

const path = "/unity/Build/";
const basename = "VSG_player";
const Unity = new UnityWebgl({
  loaderUrl: path + basename + ".loader.js",
  dataUrl: path + basename + ".data.unityweb",
  frameworkUrl: path + basename + ".framework.js.unityweb",
  codeUrl: path + basename + ".wasm.unityweb",
});
let unityLoaded = false;

Unity
  // .on("loaded", function () { console.log("== UNITY LOADED =="); unityLoaded = true;})
  // .on("loaded", () => (unityLoaded = true));
  .on("progress", (percent) => console.log("Unity > Loading: ", percent))
  .on("loaded", function () {
    unityLoaded = true;
    store.commit("updateUnityLoaded", true);
  });

export default {
  components: {
    Unity: UnityWebgl.vueComponent,
  },
  data: function () {
    return {
      isOpen: false,
      unityContext: Unity,
      // publicPath: process.env.BASE_URL
    };
  },
  created() {
    window.addEventListener("beforeunload", this.beforeUnloadFunction);
  },
  // props: {
  //   sceneData: Object,
  // },
  methods: {
    beforeUnloadFunction() {
      Unity.destroy();
    },
    enableFullscreen() {
      Unity.setFullscreen(true);
    },
    sendMessage() {
      Unity.send(
        "Scene Controller",
        "ManualStartLocalData",
        store.state.sceneData
      );
    },
    togglePreviewModal() {
      this.isOpen = !this.isOpen;
      // if (!this.isOpen) {
      //   Unity.destroy();
      // }
    },
    resetScene() {
      Unity.send("Scene Controller", "ResetScene");
    },
    loadScene() {
      // console.log("UNITY >> LOADING");
      if (unityLoaded) {
        // console.log("UNITY >> LOADING >> OK");
        const sceneData = this.$store.state.sceneData;
        const sceneNodesNumber = JSON.parse(sceneData)["nodes"].length;
        if (sceneNodesNumber > 0) this.sendMessage();
        this.resetScene();
      } else {
        console.error("UNITY >> LOADING >> FAILED");
        setTimeout(1000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}
.modal {
  width: 1000px;
  height: 650px;
  margin: 0px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px 3px;
  transition: all 0.2s ease-in;
  font-family: Helvetica, Arial, sans-serif;
}
.fadeIn-enter {
  opacity: 0;
}

.fadeIn-leave-active {
  opacity: 0;
  transition: all 0.2s step-end;
}

.fadeIn-enter .modal,
.fadeIn-leave-active.modal {
  transform: scale(1.1);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00000094;
  z-index: 999;
  transition: opacity 0.2s ease;
}

#modal-buttons {
  margin-top: 4px;

  input,
  button {
    margin-right: 2px;
  }
}
</style>

<style>
#unity-container {
  max-height: 650px;
}
</style>
