<template>
  <div>
    <button-option
      v-bind:name="value.title"
      @openSidebar="$emit('openSidebar')"
    ></button-option>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ButtonOption } from "@baklavajs/plugin-options-vue";

@Component({
  components: { ButtonOption },
})
export default class SceneDataOption extends Vue {
  @Prop()
  value!: unknown;
}
</script>
