<template>
  <div>
    <div class="container space">
      <div class="form-group ">
        <label>First Name:</label>
        <v-input :name="fname" @namewasupdated="updateFName"></v-input>
      </div>
      <div class="form-group">
        <label>Last Name:</label>
        <v-input :name="lname" @namewasupdated="updateLName"></v-input>
      </div>
      <div class="form-group">
        <label>Birth Date:</label>
        <v-date :date1="date" @dateupdate="dateupdt"></v-date>
      </div>
      <div class="form-group">
        <label>Select gender:</label>
        <v-radio :option="radiooption" :rname="rname2" :opt="selectgender" @selectvalueupdated="selectedgender"></v-radio>
      </div>
      <div class="form-group">
        <label>Select choice:</label>
        <v-radio :option="radiooption2" :rname="rname1" :opt="selectchoice" @selectvalueupdated="selectedchoice"></v-radio>
      </div>
      <div class="form-group">
        <v-multi-select :options="options" :flag="obj"
        btnLabel="select subject"
        @multichange="multiselct">
        </v-multi-select>
      </div>
      <div class="form-group">
        <v-multi-select :options="options2" :flag="obj"
        btnLabel="select sem"
        @multichange="multiselct2">
        </v-multi-select>
      </div>
      <div>
        <v-button name="Submit" @click.native="print"></v-button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button/Button'
import input from './Input/inputbox'
import radio from './Radiobutton/radiobutton'
import multiselect from './Select/multiselect'
import datepicker from './Date/datepicker'
  export default{
      data(){
        return{
           radiooption:['Male','Female'],
           radiooption2:['choice1','choice2', 'choice3'],
           options: ['Python','Cloud','Ai', 'Ml'],
           options2:['sem1', 'sem2', 'sem3'],
           obj: {
            multi: true
           },
           fname:'',
           lname:'',
           date: '',
           selectgender:'',
           selectchoice:'',
           multi: [],
           multi2: [],
           rname1: 'radio1',
           rname2: 'radio2'
        }
      },
      components: {
        'v-button': Button,
        'v-input': input,
        'v-radio': radio,
        'v-multi-select': multiselect,
        'v-date': datepicker
      },
      methods: {
        updateFName(value){
          this.fname = value
        },
        updateLName(value){
          this.lname = value
        },
        dateupdt(value){
          this.date = value
        },
        selectedgender(value){
          this.selectgender = value
        },
        selectedchoice(value){
          this.selectchoice = value
        },
        multiselct(value){
           this.multi = value
        },
        multiselct2(value){
           this.multi2 = value
        },
        print(){
          console.log(this.fname)
          console.log(this.lname)
          console.log(this.date)
          console.log(this.selectgender)
          console.log(this.selectchoice)
          console.log(this.multi)
          console.log(this.multi2)
        },
      }
  }
</script>
<style>
.space{
  margin-top:20px;
}
</style>
