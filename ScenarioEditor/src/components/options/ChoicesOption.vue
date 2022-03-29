<template>
  <div>
    <button-option
      name="Edit choices"
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
export default class ChoicesOption extends Vue {
  @Prop()
  value!: unknown;
}
</script>
