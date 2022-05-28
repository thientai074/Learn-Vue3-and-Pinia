<template>
  <div>
    <p>Wrapper for a text input</p>
    <input type="text" placeholder="Custom input!" @change="customChange" />
  </div>
</template>

<script lang="ts">
  export default {
      setup (props: any, context: any) {
          const customChange = (event: any) => {
              context.emit("customChange", event.target.value)
          }
          return {
              customChange
          }
      }
  }
</script>