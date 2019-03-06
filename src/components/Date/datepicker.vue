<template>
	<div>
		<input type="date" name="date" id='dat' v-model="evaluatedate"
    class="form-control col-lg-5"
		@input="updatedate">
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				printdate:''
			}
		},
		props:['date1'],
		computed:{
			evaluatedate:{
				get(){
					return this.date1
				},
				set(value){
          this.printdate = value
          console.log('computed',this.printdate)
				}
			}
		},
		methods:{
			updatedate(){
				this.$emit('dateupdate', this.printdate)
			}
		}
	}
</script>
