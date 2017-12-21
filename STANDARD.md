# 规范 （无规矩不成方圆）
根据官网的[风格指南](https://cn.vuejs.org/v2/style-guide/)和app定制的需求制订此规范。（不断完善更新中，粗糙的地方欢迎各位大佬指出。/抱拳/握手）
## 编码换行规范
采用UTF-8无BOM格式创建文件，不要用记事本，记事本的默认的不是UTF-8的  
tab 和换行缩进均推荐 采用两个空格。
推荐使用notepad++文本编辑器。里面也可以设置tab和换行的为两个空格。
## 组件抽取规范
pages：由头部header，底部nav，footer或者其他的一些内容，中间部分组成。故抽调出来成单独的pages，而不是components。eg：guide，index，texts……  
components：非pages所有vue。
## 命名规范
全部命名不用缩写，尽量使用完整单词。因为编辑器中的自动补全已经让书写长命名的代价非常之低了，而其带来的明确性却是非常宝贵的。不常用的缩写尤其应该避免。组件均采用大写字母开头命名。
### page命名
以app开头加单词，因为一些单个的单词可能会在引用时会和DOM元素有冲突。
### components命名
单例组件：一个页面只出现一次，且不接受prop的，加前缀：The。eg：TheCircleProgressBar.vue  
基础组件：应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件)，加前缀：App。eg：AppHeader.vue  
紧耦合组件：一个组件只在特定的父组件下出现，则尽量将此关系体现出来。eg：只在TabsMainBlog.vue中出现的TabsMainBlogArticlePanel.vue等组件  
组件名单词顺序：组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。eg：TabsMainGoods.vue  
### 组件中的规范
需包含三个顶层元素：template，script，style。且顺序都要一致。  
1. template  
1.0 template元素下头个元素（div，起包裹作用的）类名，尽量和组件名一致，且采用短横线命名，如果太长，则可以省略一些。eg：TabsMainGoodsPickedPanel.vue中的goods-picked  
1.1 其他的元素类采用该类名的省略作为前缀，eg：gp-……，相同前缀的，继续取下一个字母，以此类推eg：gpi-……  
1.2 在单文件组件中，引用组件 采用（短横线）闭合组件，保持DOM元素中的一致性。eg：<the-circle-progress-bar/>   
1.3 props使用短横线  
1.4 多行特性元素要换行，更易读。  
2. script  
2.0 script元素中的name，可以帮助调式是的定位，也可以用于递归调用自身。命名时采用驼峰法和组件名保持一致。eg：name："tabsMainGoodsPickedPanel"  
2.1 私有属性/方法采用，前缀：$_md_ md是mengdong的缩写 -。-  
2.2 props命名使用驼峰法，且尽量详述  
3. stype  
3.0 style元素中尽量不出现元素选择器，而都采用class选择器。scoped，也可用前缀起到相同的，作用域作用。eg：.goods-picked {...}  
完整的示例：
TabsMainGoodsPickedPanel.vue:
``` html
<template>
  <div class="goods-picked">
    <div class="gp-content"></div>
  </div>
</template>

<script>
export default {
  name: 'tabsMainGoodsPickedPanel',
  props: {
    article: Object
  },
  methods: {
    $_md_xxx () {}
  }
}
</script>

<style lang="scss">
.goods-picked {
  .gp-content {
  }
}
</style>
```
### 组件（常用）选项的顺序
* ` name: ''` （全局感知）  
* ` components: {}` （模板依赖/directives/filters）  
* ` props:  ` （接口）  
* ` data () ` （本地状态）  
* ` computed:  ` （本地状态）  
* ` watch: ` （响应式事件触发的回调）  
* ` created () ` （响应式事件触发的回调，生命周期钩子函数：beforeCreat-created-beforeMount-mounted-beforeUpdate-updated-……  
* ` methods: ` （非响应式的属性）  
### 元素（常用）特性的顺序
* ` v-for `    
* ` v-if/v-else `  
* ` v-show `  
* ` ref `  
* ` key `  
* ` slot `  
* ` 其他特性 ` eg, :class="", src=""  
* ` v-on ` eg, @click  

完整的元素特性顺序：  
……is（定义）  
……v-for（列表渲染）  
……v-if/v-else-if/v-else/v-show/v-cloak（条件渲染）  
……v-pre/v-once（渲染方式）  
……id（全局感知）  
……ref/key/slot（唯一特性）  
……v-mode（双向绑定）  
……其他特性   
……v-on（事件）  
……v-html/v-text（内容）  
  

