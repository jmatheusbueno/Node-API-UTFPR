let users = [];

class UserController {
    getUsers(req, res) {
        return res.json(users);
    }

    createUser(req, res) {
        const { name } = req.body;
        const newUser = { 
            id: `${users.length + 1}`,
            name: name,
        };

        users.push(newUser);

        return res.json(newUser);
    }

    updateUser(req, res) {
        const { id } = req.params;
        const { name } = req.body;

        const user = users.find((user) => user.id === id);
        user.name = name;

        return res.json(user);
    }

    deleteUser(req, res) {
        const { id } = req.params;

        users = users.filter((user) => user.id !== id);

        return res.json(users);
    }
}

const userController = new UserController();

module.exports = {
    userController,
};