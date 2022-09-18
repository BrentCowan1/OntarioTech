<template>
  <div>
    <p class="warning">
      {{ value }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class WarningTextOption extends Vue {
  @Prop({ type: String, default: "" })
  value!: string;
}
</script>

<style scoped>
.warning {
  padding: 5px;
  background-color: rgb(255, 245, 0);
  color: black;
  border-radius: 3px;
  margin-bottom: 0;
  /* font-weight: bold; */
}
</style>
