<template>
  <div class="soul-add-content">
    <textarea
      ref="textarea"
      class="soul-add-textarea"
      :rows="rows"
      @input="handleChangeTextarea"
      v-model="textareaValue"
      placeholder="记录这一刻，晒给懂你的人......"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'SoulAddContent',
  data () {
    return {
      rows: 4, // textarea的行数
      textareaScrollHeight: 0, // textarea的ScrollHeight
      textareaValue: '' // textarea的文本值
    }
  },
  methods: {
    // 检测ScrollHeight的值动态调整rows
    handleChangeTextarea () {

    }
  }
}
</script>

<style>
.soul-add-content {
  margin-top: 0.4rem;
  background-color: #fff;
}
.soul-add-textarea {
  width: 100%;
}
</style>
