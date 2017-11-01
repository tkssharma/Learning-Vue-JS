<template>
    <div class="container">
        <div class="col-md-6 col-md-offset-3">
            <h1>Vue TODO App</h1>
            <table class="table table-striped table-bordered">
                <tbody>
                    <tr>
                        <th>Task</th>
                        <th>Date</th>
                        <th>Finished?</th>
                        <th></th>
                    </tr>
                    <tr v-for="todo in todos">
                        <td>{{ todo.title }}</td>
                        <td>{{ todo.date }}</td>
                        <td @click="modify(todo)">
                            <button v-if="todo.finished" class="btn btn-success btn-xs">Yes</button>
                            <button v-else class="btn btn-danger btn-xs">No</button>
                        </td>
                        <td><button @click="remove(todo)" class="btn btn-danger btn-xs">x</button></td>
                    </tr>
                    <tr>
                        <td><input v-model="title" type="text" class="form-control"></td>
                        <td><input v-model="date" type="date" class="form-control"></td>
                        <td><input v-model="finished" type="checkbox"></td>
                        <td><button @click="add" class="btn btn-default">+</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    'use strict';

    export default {
        data() {
            return {
                todos: JSON.parse(localStorage.getItem('todos')) || [],
                title: '',
                date: '',
                finished: false
            }
        },
        watch: {
            todos: {
                deep: true,
                handler() {
                    localStorage.setItem('todos', JSON.stringify(this.todos));
                }
            }
        },
        methods: {
            add() {
                if (this.title.length > 0) {
                    this.todos.push({
                        title: this.title,
                        date: this.date,
                        finished: this.finished
                    });
                    this.title = '';
                    this.finished = false;
                }
            },
            modify (todo) {
                todo.finished = !todo.finished;
            },
            remove (todo) {
                this.todos = this.todos.filter(obj => obj !== todo);
            }
        }
    }
</script>
