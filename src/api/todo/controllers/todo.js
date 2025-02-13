'use strict';

/**
 * todo controller
 */

const { createCoreController, useFetchClient } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::todo.todo');

async function fetchTodo(id) {
    const fetchClient = useFetchClient();
    try {
        const response = await fetchClient(`/api/todo/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching todo:", error);
        throw error;
    }
}
