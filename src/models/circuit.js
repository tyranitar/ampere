module.exports = (sequelize, DataTypes) => {
    const Circuit = sequelize.define('Circuit', {
        imageFile: {
            type: DataTypes.STRING,
            allowNull: false
        },

        labelFile: {
            type: DataTypes.STRING,
            allowNull: false
        },

        graphFile: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Circuit;
};