<template>
  <div class="circle-progress-bar" :class="{ active: isActive }">
  	<div class="circle-left">
  		<div class="bar"></div>
  	</div>
  	<div class="circle-right">
  		<div class="bar"></div>
  	</div>
  	<div class="text">{{text}}</div>
  </div>
</template>

<script>
export default {
  name: 'circleProgressBar',
  data () {
    return {
      text: '',
      isActive: false
    }
  },
  created () {
    this.$nextTick(() => {
      this.$_initCircle()
    })
  },
  methods: {
    $_initCircle () {
      let int = null
      let count = 5
      this.isActive = true
      this.text = `${count}s`
      int = setInterval(() => {
        count--
        if (count > 0) {
          this.text = `${count}s`
        } else {
          this.text = `跳过`
          clearInterval(int)
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
$circleSize: 40px;
$circleBg: #ffe240;
$ringWidth: 5px;
$ringColor: #dea112;
$loadingTime: 5s;
$fontColor: #6c360b;
$fontSize: 13px;
$fontWeight: 700;

.circle-progress-bar {
  position: relative;
  width: $circleSize;
  height: $circleSize;
  .circle-left, .circle-right {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    overflow: hidden;
    background: $circleBg;
    .bar {
      position: absolute;
      top: 0;
      width: 200%;
      height: 100%;
      border-radius: 50%;
      border: $ringWidth solid transparent;
      transform: rotate(-135deg);
    }
  }
  .circle-left {
    eft: 0;
    border-radius: $circleSize 0 0 $circleSize; 
  	.bar {
      left: 0;
      border-bottom: $ringWidth solid $ringColor;
      border-left: $ringWidth solid $ringColor;
    }
  }
  .circle-right {
    right: 0;
    border-radius: 0 $circleSize $circleSize 0;
    .bar {
      right: 0;
      border-top: $ringWidth solid $ringColor;
      border-right: $ringWidth solid $ringColor;
    }
  }
  &.active {
    .circle-left {
      .bar {
        animation: loading-left $loadingTime linear;
        animation-fill-mode: forwards;
      }
    }
    .circle-right {
      .bar {
        animation: loading-right $loadingTime linear;
        animation-fill-mode: forwards;
      }
    }
  }
  .text {
    position: absolute;
    top: 0;
    left: 0;
    width: $circleSize;
    height: $circleSize;
    line-height: $circleSize;
    color: $fontColor;
    text-align: center;
    font-size: $fontSize;
    font-weight: $fontWeight;
  }
}
@keyframes loading-left {
  0%, 50% {
    transform: rotate(-135deg);
  }
  100% {
    transform: rotate(45deg);
  }
}
@keyframes loading-right {
  0% {
    transform: rotate(-135deg);
  }
  50%, 100% {
    transform: rotate(45deg);
  }
}
</style>