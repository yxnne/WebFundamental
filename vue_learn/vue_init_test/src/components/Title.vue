<template>
	<div>
		<h1>{{title}}</h1>

		<p>{{subTitle}}</p>
	</div>
</template>

<script>

export default {
	props:['title', 'subTitle'],
}
</script>

<style>
h1{
color:red;
}
</style>
