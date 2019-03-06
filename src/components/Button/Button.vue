<template>
	<div>
		<button type="button" class="form-control btn btn-info col-lg-1 col-xs-2">{{name}}</button>
	</div>
</template>

<script>
	export default{
     props: {
     	'name': String
     }
	}
</script>
