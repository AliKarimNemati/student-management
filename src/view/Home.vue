<script setup>
import StudentList from "../components/StudentList.vue";
import Card from "../components/StudentCard.vue"
defineProps({
  students: {
    type: Object,
    default: {},
  },
  deleteStudents: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <div>
    <div class="flex">
      <router-link
        class="hover:text-white hover:bg-red-700 rounded-lg text-red-700 border-2 border-red-700 p-2 m-5"
        to="./add"
        >Add Student</router-link
      >
    </div>
    <student-list :students="students" :deleteStudents="deleteStudents" />
    <card :students="students" :deleteStudents="deleteStudents"/>
  </div>
</template>