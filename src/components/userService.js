export const userService = {
    getUser: async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        return data;
    },
};
