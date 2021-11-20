<template>
  <main>
    <h1>Todo</h1>
    <div>
      <form @submit.prevent="addTodo">
        <input type="text" v-model="newTodo" required />
        <Button :type="'submit'">Add</Button>
      </form>

      <div>
        <ul>
          <li v-for="todo of todoList" :key="todo.id">
            <span class="checkbox">
              <input
                type="checkbox"
                :id="todo.id"
                :checked="todo.checked"
                @change="checkChanged"
              />
              <label :for="todo.id" :class="{ cross: todo.checked }">{{
                todo.content
              }}</label>
            </span>
            <Button :color="'error'" @click="() => deleteTodo(todo.id)"
              >Delete</Button
            >
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  margin-top: 3em;
  margin-bottom: 3em;
}

form {
  margin-top: 1em;
  margin-bottom: 1em;
  display: flex;
  gap: 0.2em;
  width: 300px;
}

input[type="text"] {
  border-radius: 4px;
  border: lightgray solid 1px;
  padding: 0.25em 0.5em;
  width: 100%;
}

ul {
  list-style: none;
  padding: 5px;
}

li {
  display: flex;
  place-items: center;
  justify-content: space-between;
  border: 1px solid lavender;
  border-radius: 4px;
  padding: 0.5em 0.75em;
}

.checkbox {
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-content: center;
  gap: 0.5em;
}

.cross {
  text-decoration: line-through;
}
</style>

<script>
import Button from "../components/Button.vue";

export default {
  name: "Todo",
  components: {
    Button,
  },
  mounted() {
    this.todoList = localStorage.getItem("todoList")
      ? JSON.parse(localStorage.getItem("todoList"))
      : [];
  },
  data() {
    return {
      todoList: [],
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      this.todoList = [
        {
          content: this.newTodo,
          checked: false,
          id: Date.now().toString(),
        },
        ...this.todoList,
      ];
      localStorage.setItem("todoList", JSON.stringify(this.todoList));
      this.newTodo = "";
    },
    deleteTodo(id) {
      console.log(id);
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
      localStorage.setItem("todoList", JSON.stringify(this.todoList));
    },
    checkChanged(e) {
      const id = e.target.id;
      const checked = e.target.checked;
      const todo = this.todoList.find((todo) => todo.id === id);
      if (!todo) return;
      todo.checked = checked;
      localStorage.setItem("todoList", JSON.stringify(this.todoList));
    },
  },
};
</script>
