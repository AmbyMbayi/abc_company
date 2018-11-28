<template>
	<div class="details">
		<div class="container">
			<div class="row">
				<div class="col-md-12" v-for="(employee,index) in employees" :key="index">
				
					<div v-if="empId == employee.id">
						<h2>{{employee.name}}</h2>
						<img :src="employee.image" class="img-fluid">
					<ul class="nav navbar-nav">
						<li>{{employee.position}}</li>
						<li>{{employee.address}}</li>
						<li>{{employee.email}}</li>
					</ul>
						
					</div>

				</div>
				<div class="col-md-4">

				</div>
			</div>
			
		</div>
	</div>
		
</template>
<script>
	export default{
		name: 'details',
		data(){
			return{
				empId:this.$route.params.Eid,
				title: "details",
				employees:[
					{ 
		            name: "Employee one",
		            image : require('../assets/images/employee1.png'),
		            position: "manager ",
		            email: "employee.one@gmail.com",
		            address: "47456 abc wallstreets",
		            id:1
		          },
		          {
		            name: "Employee two",
		            image : require('../assets/images/employee2.png'),
		            position: "manager ",
		            email: "employee.two@gmail.com",
		            address: "474532 abc wallstreets",
		            id:2
		          },
		          { 
		            name: "Employee three",
		            image : require('../assets/images/employee1.png'),
		            position: "manager ",
		            email: "employee.three@gmail.com",
		            address: "47452346 abc wallstreets",
		            id:3
		          },
		          {
		            name: "Employee four",
		            image : require('../assets/images/employee2.png'),
		            position: "manager ",
		            email: "employee.four@gmail.com",
		            address: "2347456 abc wallstreets",
		            id:4
		          },
		          { 
		            name: "Employee five",
		            image : require('../assets/images/employee1.png'),
		            position: "manager ",
		            email: "employee.five@gmail.com",
		            address: "4723456 abc wallstreets",
		            id:5
		          },
		          {
		            name: "Employee six",
		            image : require('../assets/images/employee2.png'),
		            position: "manager ",
		            email: "employee.six@gmail.com",
		            address: "47456 abc wallstreets",
		            id:6
		          },
		          { 
		            name: "Employee seven",
		            image : require('../assets/images/employee1.png'),
		            position: "manager ",
		            email: "employee.seven@gmail.com",
		            address: "3447456 abc wallstreets",
		            id:7
		          },
		          {
		            name: "Employee eight",
		            image : require('../assets/images/employee2.png'),
		            position: "manager ",
		            email: "employee.eight@gmail.com",
		            address: "4347456 abc wallstreets",
		            id:8
		          },
		          { 
		            name: "Employee nine",
		            image : require('../assets/images/employee1.png'),
		            position: "manager ",
		            email: "employee.nine@gmail.com",
		            address: "4743456 abc wallstreets",
		            id:9
		          },
		          {
		            name: "Employee ten",
		            image : require('../assets/images/employee2.png'),
		            position: "manager ",
		            email: "employee.ten@gmail.com",
		            address: "4744556 abc wallstreets",
		            id:10
		          }
				]
				
			}
		}
	}
</script>