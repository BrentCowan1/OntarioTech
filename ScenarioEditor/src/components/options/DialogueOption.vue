<template>
  <div>
    <p style="margin-bottom: 0.5em">{{ value.content }}</p>
    <button-option
      name="Edit text"
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
export default class DialogueOption extends Vue {
  @Prop()
  value!: unknown;
}
</script>
