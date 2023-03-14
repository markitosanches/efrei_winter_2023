module.exports = (connex, Sequelize) => {
    const User = connex.define("user", {
        fullname: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        token: {
            type: Sequelize.STRING
        }
    }, { timestamps: true });

    return User;
};