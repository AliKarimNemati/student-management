<script setup>
import {onMounted, ref} from "vue";

let students = ref([])

function deleteStudents(id) {
  students.value = students.value.filter((stu) => stu.id !== id)
  localStorage.setItem('students', JSON.stringify(students.value))
}

function editStudent(id, newStu) {
  const getIndex = students.value.findIndex(stu => {
    return stu.id == id;
  });

  students.value[getIndex] = newStu;
  localStorage.setItem('students', JSON.stringify(students.value))
}

function addStudent(newStudent) {
  students.value.push({id : Math.floor(Math.random() *10000), ...newStudent});
  localStorage.setItem('students', JSON.stringify(students.value))
}

onMounted(() =>{
  students.value = JSON.parse(localStorage.getItem('students')) != null ? JSON.parse(localStorage.getItem('students')) : []
})
</script>

<template>
  <router-view :students="students" :deleteStudents="deleteStudents" :editStudent="editStudent" :addStudent="addStudent"/>
</template>

