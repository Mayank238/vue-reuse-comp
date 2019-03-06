<template>
	<div @click="insert">
		 <multi-select
		    v-model="values"
        :selectOptions="options"
        :options="flag"
        :btnLabel="btnLabel"
        >
        <div @click="insert"></div>
        </multi-select>
        <!-- <button @click="insert">A</button> -->
	</div>
</template>
<script >
	export default{
		data(){
			return{
				values:[]
			}
		},
		props:{
			options: Array,
			flag: Object,
			btnLabel: String
		},
		// computed:{
		// 	get(){
		// 		return this.values
		// 	},
		// 	set(){
		// 		console.log(this.values)
		// 	}
		// },
		methods:{
			insert(){
				this.$emit('multichange', this.values)

			}
		},
		// mounted(){
		// 	this.$emit('multiselectchanged', this.values)
		// }
	}
</script>
