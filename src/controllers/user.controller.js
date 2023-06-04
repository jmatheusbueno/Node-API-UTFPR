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
}

const userController = new UserController();

module.exports = {
    userController,
};