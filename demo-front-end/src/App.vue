<template>
    <div>
        <h1>List of notes</h1>
        <li v-for="note in notes" :key="note.id">
            {{ note.title }} - {{ note.content }}
        </li>
    </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  name: 'App',
  setup() {
    const notes = ref([]);
    const getAllNotes = async () => {
      const response = await axios.get("http://localhost:3000/notes", {
        headers: {'Access-Control-Allow-Origin': '*'}
    });
      notes.value = response.data
      console.log(response.data);
    }
    getAllNotes()

    return {notes}
  },
};
</script>