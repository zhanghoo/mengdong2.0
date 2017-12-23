<template>
  <div class="the-home-profile">
  	<div class="th-profile-bg">
  		<div>
  			<div class="th-profile-avatar"></div>
  			<div class="th-profile-name">小菜菜</div>
  			<div class="th-profile-intro">我常常在夜里醒来，睡在我左肩上的不是你，是一团黑色的，冰冷的，沉默着的空气</div>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'theHomeProfile'
}
</script>

<style lang="scss">
.the-home-profile {
  position: relative;
  top: 0;
  left: 0;
  padding-top: 70%;
  width: 100%;
  height: 0;
  overflow: hidden;
  .th-profile-bg {
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: rgba(0, 0, 0, .3);
    .th-img {
  	  width: 100%;
  	  height: 100%;
    }
    .th-profile-avatar {
    	margin: 0 auto;
    	width: 68px;
    	height: 68px;
    	border-radius: 100%;
    	border: 3px solid #fff;
    }
    .th-profile-name {
    	margin: 10px 0 15px 0;
    	font-size: 18px;
    	color: #fff;
    }
    .th-profile-intro {
    	padding: 0 40px;
    	line-height: 20px;
    	font-size: 14px;
    	color: #fff;
    }
  }
}
</style>