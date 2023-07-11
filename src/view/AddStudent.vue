<template>
  <form class="p-20">
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">
          Add Student
        </h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">
          Fill this form to add student.
        </p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label
              for="first-name"
              class="block text-sm font-medium leading-6 text-gray-900"
              >First name</label
            >
            <div class="mt-2">
              <input
                v-model="newStudent.firstName"
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 focus:outline-0 sm:text-sm sm:leading-6 p-2"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label
              for="last-name"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Last name</label
            >
            <div class="mt-2">
              <input
                v-model="newStudent.lastName"
                type="text"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 focus:outline-0 sm:text-sm sm:leading-6 p-2"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label
              for="mobile"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Mobile</label
            >
            <div class="mt-2">
              <input
                v-model="newStudent.mobile"
                type="text"
                name="mobile"
                id="mobile"
                autocomplete="mobile"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 focus:outline-0 sm:text-sm sm:leading-6 p-2"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label
              for="nID"
              class="block text-sm font-medium leading-6 text-gray-900"
              >National ID</label
            >
            <div class="mt-2">
              <input
                v-model="newStudent.nID"
                type="text"
                name="nID"
                id="nID"
                autocomplete="national-id"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 focus:outline-0 sm:text-sm sm:leading-6 p-2"
              />
            </div>
          </div>
        </div>
        <p class="w-full text-red-700 mt-5">{{ error }}</p>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-center gap-x-6">
      <button
        type="button"
        class="text-sm font-semibold leading-6 border-2 p-1 rounded-lg text-red-700 border-red-700"
        @click.prevent="this.$router.push('/')"
      >
        Cancel
      </button>

      <button
        type="submit"
        @click.prevent="
          validation();
          error == '' && probs.addStudent(newStudent);
          error == '' && this.$router.push('/');
        "
        class="rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
const probs = defineProps({
  students: {
    type: Object,
    default: {},
  },
  addStudent: {
    type: Function,
  },
});
let newStudent = ref({
  firstName: "",
  lastName: "",
  mobile: "",
  nID: "",
});

let error = ref("");

function validation() {
  if (newStudent.value.firstName == "") error.value = "firstName required";
  else if (newStudent.value.lastName == "") error.value = "lastName required";
  else if (newStudent.value.mobile == "") error.value = "mobile required";
  else if (newStudent.value.nID == "") error.value = "national ID required";
  else error.value = "";
}
</script>


