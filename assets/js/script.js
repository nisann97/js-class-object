"use strict";


let stu1 = {
    id: 1,
    fullName: "Tunzale Memmedova",
    age: 25,
    address: "Azadliq"
}
let stu2 = {
    id: 2,
    fullName: "Semed Huseynov",
    age: 27,
    address: "Ehmedli"
}
let stu3 = {
    id: 3,
    fullName: "Oruc Mehrabov",
    age: 26,
    address: "Yasamal"
}

let stu4 = {
    id: 4,
    fullName: "Arzu Kerimli",
    age: 26,
    address: "Yasamal"
}

let stu5 = {
    id: 5,
    fullName: "Ilham Abasli",
    age: 20,
    address: "Lokbatan"
}

let group = {
    name: "P418",
    capacity: 3,
    students: [],
    addStudent: function (stu){

        if(stu == undefined){
            alert("Input cannot be empty")
            return;
        }
         


        if(this.students.length >= this.capacity){
            alert("group is full")
            return;
        }

        this.students.push(stu)

    },

    getAllStudents:function (){
        return this.students;
    },


    getById:function(id, students){

        if(isNaN(id)){
            alert("please enter correct student id");
            return;
        }

        if(id === undefined || id === ""){
            alert("cannot be empty");
            return;
        }

        return this.students.find(student => student.id == id);
    },


    // deleteStudent: function (id, students){

    //    if(this.students.id == id){
    //     delete  this.students;
    //    }
      
    //     return this.students;
    //   },

    searchStudents:function(searchText, students){
            
        if(searchText == undefined || searchText === ""){
            alert("Data not found")
            return;
        }

        if(!isNaN(searchText)){

            alert("cannot be digit")
            return;
        }

         return this.students.filter(student => student.fullName.toLowerCase().trim().includes(searchText.toLowerCase().trim()))
    },



}


group.addStudent(stu1);
group.addStudent(stu2);
group.addStudent(stu3);
// group.addStudent(stu4);


// let result = group.getAllStudents();
// console.log(result);

// let result = group.searchStudents("Tunzale", this.students)
// let result = group.getById(2, this.students)
let result = group.deleteStudent(2, this.students);
console.log(result)
