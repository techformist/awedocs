<template>
  <div>
    <vue-typed-js
      :strings="[
        'once',
        'twice',
        'thrice',
        'four times',
        'five times',
        'infinity'
      ]"
      :loop="true"
    >
      <h4 style="color:red">Going.. <span class="typing"></span></h4>
    </vue-typed-js>
  </div>
</template>
