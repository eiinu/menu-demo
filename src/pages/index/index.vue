<template>
  <div class="demo full">
    <div class="blank">demo</div>
    <nut-menu>
      <nut-menu-item v-model="state.value1" :options="state.options1" />
      <nut-menu-item v-model="state.value2" @change="handleChange" :options="state.options2" />
    </nut-menu>
    <div class="blank">demo</div>
    <nut-menu>
      <nut-menu-item v-model="state.value1" :options="state.options1" />
      <nut-menu-item v-model="state.value2" @change="handleChange" :options="state.options2" />
    </nut-menu>
    <div class="blank">demo</div>
    <nut-menu direction="up">
      <nut-menu-item v-model="state.value1" :options="state.options1" />
      <nut-menu-item v-model="state.value2" @change="handleChange" :options="state.options2" />
    </nut-menu>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
const state = reactive({
  options1: [
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 }
  ],
  options2: [
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' },
  ],
  value1: 0,
  value2: 'a'
})

const handleChange = val => {
  console.log('val', val);
}
</script>
<style>
.blank {
  height: 50px;
}
</style>