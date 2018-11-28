<template>
  <div class="home">
    <h3>{{title}}</h3>
    <div class="form-group">
      <input v-model="search" placeholder="enter search names"><br><br>
      <p>Displaying {{filteredEmployees.length}} employees, filtered by<strong>{{search}}</strong></p>

    </div>
    <hr>
    <div class="row">

      <div class="col-md-3" v-for="(data, index) in filteredEmployees" :key="index">
      
      
      <img :src="data.image" @click="goTodetail(data.id)" v-bind:title="data.position" class="img-fluid"><br>
      <h3 >{{data.name}}</h3>
      <button v-bind:title="data.position" @click="goTodetail(data.id)" class="btn btn-primary" >details</button><br>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'home',
    data(){
      return{
        title: 'ABC Employees records',
        employees:[
          { 
                name: "Employee one",
                image : require('../assets/images/employee1.png'),
                position: "manager employee.one@gmail.com",
                id:1
              },
              {
                name: "Employee two",
                image : require('../assets/images/employee2.png'),
                position: "manager employee.two@gmail.com",
                id:2
              },
              { 
                name: "Employee three",
                image : require('../assets/images/employee1.png'),
                position: "manager employee.three@gmail.com",
                id:3
              },
              {
                name: "Employee four",
                image : require('../assets/images/employee2.png'),
                position: "manager employee.four@gmail.com",
                id:4
              },
              { 
                name: "Employee five",
                image : require('../assets/images/employee1.png'),
                position: "manager employee.five@gmail.com",
                id:5
              },
              {
                name: "Employee six",
                image : require('../assets/images/employee2.png'),
                position: "manager employee.six@gmail.com",
                id:6
              },
              { 
                name: "Employee seven",
                image : require('../assets/images/employee1.png'),
                position: "manager employee.seven@gmail.com",
                id:7
              },
              {
                name: "Employee eight",
                image : require('../assets/images/employee2.png'),
                position: "manager employee.eight@gmail.com",
                id:8
              },
              { 
                name: "Employee nine",
                image : require('../assets/images/employee1.png'),
                position: "manager employeenine@gmail.com",
                id:9
              },
              {
                name: "Employee ten",
                image : require('../assets/images/employee2.png'),
                position: "manager employee.ten@gmail.com",
                id:10
              }
        ],
        search: ""
      }
    },
    methods:{
      goTodetail(empId){
        
        this.$router.push({name:'details', params:{Eid:empId}})
      }
    },
    computed:{
      filteredEmployees(){
        return this.employees.filter(employee=>{
          return employee.name.includes(this.search);
        })
      }
    }
  }
</script>