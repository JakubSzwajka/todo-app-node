import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';

class Todo extends Model { }

Todo.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        sequelize,
        modelName: 'Todo',
    }
);

export  {Todo};