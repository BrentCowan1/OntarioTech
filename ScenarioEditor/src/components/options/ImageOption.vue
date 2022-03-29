<template>
  <div>
    <a :href="value" target="_blank">
      <img
        :src="value"
        alt="Room preview (click to open in a new tab)"
        width="200"
      />
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ImageOption extends Vue {
  @Prop({ type: String, default: "" })
  value!: string;
}
</script>
