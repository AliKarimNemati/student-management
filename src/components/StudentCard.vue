<template>
  <div class="md:hidden flex flex-wrap">
    <div
      v-for="(student, i) in students"
      :key="student.id"
      class="m-3 p-2 rounded-md w-full text-center relative"
      style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;"
    >
      <span class="absolute top-2 left-2 bg-red-700 rounded-lg text-white px-3 py-1">{{i + 1}}</span>
      <h1 class="font-semibold">name: {{ student.firstName + " " + student.lastName }}</h1>
      <p class="text-gray-600 text-sm">mobile: {{ student.mobile }}</p>
      <p class="text-gray-600 text-sm">national ID: {{ student.nID }}</p>

      <div class="text-center mt-1">
        <button
          @click="
            showAlert = true;
            id = student.id;
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash mr-2 text-red-700 hover:text-red-500"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"
            />
            <path
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"
            />
          </svg>
        </button>
        <button @click="this.$router.push('/edit/' + student.id)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pencil-square text-red-700 hover:text-red-500"
            viewBox="0 0 16 16"
          >
            <path
              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
            />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
        </button>
      </div>

      <div v-if="showAlert">
        <Alert :deleteStudents="deleteStudents" :id="id" :showAlert="showAlert" :closeAlert="closeAlert"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Alert from "./Alert.vue";

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
let showAlert = ref(false);
let id = ref(0);

function closeAlert() {
  showAlert.value = false;
}
</script>
