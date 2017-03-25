module.exports = (sequelize, DataTypes) => {
    const Circuit = sequelize.define('Circuit', {
        imageFile: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        labelFile: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        graphFile: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });

    return Circuit;
};