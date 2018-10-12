<template>
	<div class="main">
		<div class="content">
			<p class="test">content</p>
			<p class="test">content</p>
			<p class="test">content</p>
			<p class="test">content</p>
			<p class="test">content</p>
			<p class="test">content</p>
			<p class="test">content</p>
			<p class="test">content</p>
			<p class="test">content</p>
			<p class="test">content</p>
			<p class="test">content</p>
			<p class="test">content</p>
		</div>
		<div class="footer"></div>
	</div>
</template>

<style lang="scss">
.main{
	// 利用calc计算值
	// .content{
	// 	min-height: calc(100vh - 50px);
	// 	.test{
	// 		margin: 0;
	// 		padding: 0;
	// 	}
	// }
	// .footer{
	// 	background: pink;
	// 	height: 50px;
	// }

	// 利用flex可以不关心footer高度
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	.content{
		flex:1;
	}
	.footer{
		background: pink;
		height: 50px;
	}
}
</style>
