<template>
	<div>
		<div>
			<input type="text" name="" class="form-control col-lg-5" v-model="evaluateData" @input="getname">
		</div>

	</div>
</template>
<script>
	export default{
		data(){
       return{
       	inputValue:''
       }
		},
     props: {
     	name: String
     },
     computed: {
      evaluateData: {
         get(){
           return this.name
         },
         set(value){
           this.inputValue = value
         }
      }
    },
    methods: {
    	getname(){
    		this.$emit('namewasupdated', this.inputValue)
    	}
    }
	}
</script>
