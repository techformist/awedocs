<template>
  <div>
    <div>
      <label for="a">Num 1</label>
      <input id="a" v-model="a" type="number" />
    </div>
    <div>
      <label for="b">Num 2</label>
      <input id="a" type="number" v-model="b" align="right" />
    </div>

    <div style="font-weight:bold; margin-top:15px">
      <div>
        <label for="sum">Sum =</label>
        <input id="sum" type="number" :value="sum" align="right" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 0,
      b: 0
    };
  },
  computed: {
    sum() {
      return +this.a + +this.b;
    }
  }
};
</script>

<style lang="css">
input {
  text-align: center;
}
</style>