<template>
	<div>
		<div v-for="(data, key) in option">
			<input type="radio" :name="rname" :value="data" v-model="evalutedradio">
			{{data}}
		</div>

	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
      return{
        selctvalue:''
      }
		},
		props:{
			option:Array,
			opt: String,
			rname: String
		},
		computed:{
			evalutedradio:{
				get(){
          return this.option
				},
				set(value){
          this.selctvalue = value
          this.$emit('selectvalueupdated', this.selctvalue)
				}
			}
		}
	}
</script>
