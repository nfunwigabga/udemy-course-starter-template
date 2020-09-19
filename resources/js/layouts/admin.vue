<template>
  <div class="main-layout">
    <div class="container mt-4 bg-danger">
      <Child />
    </div>
  </div>
</template>

<script>
import Child from "./partials/Child";
export default {
  name: "AdminLayout",
  components: {
    Child,
  },
};
</script>

