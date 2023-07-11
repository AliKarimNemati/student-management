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

<template>
  <div class="md:flex hidden flex-col lg:m-20 md:m-10 m-5">

    <table v-if="students.length > 0">
      <tr>
        <th></th>
        <th>name</th>
        <th>mobile</th>
        <th>national ID</th>
        <th>delete / edit</th>
      </tr>
      <tr v-for="(student, i) in students" :key="i">
        <td>{{ i + 1 }}</td>
        <td>{{ student.firstName + " " + student.lastName }}</td>
        <td>{{ student.mobile }}</td>
        <td>{{ student.nID }}</td>
        <td>
          <button
            @click="
              showAlert = true;
              id = student.id;
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
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
              width="25"
              height="25"
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
        </td>
      </tr>
    </table>
  </div>
  <div v-if="showAlert">
    <Alert :deleteStudents="deleteStudents" :id="id" :showAlert="showAlert" :closeAlert = "closeAlert"/>
  </div>
</template>