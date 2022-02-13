<template>
  <div>
    <div>{{ msg }}</div>
    <div>{{ count }}</div>
    <button @click="add">add123123</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello world!123-123",
    };
  },
  computed: {
    count() {
      // return this.$store.state.count;
    },
  },
  methods: {
    add() {
      // this.$store.commit('add');
    },
    dev(a, b) {
      return a * b;
    },
  },
};
</script>

<style>
.example {
  color: red;
}
</style>