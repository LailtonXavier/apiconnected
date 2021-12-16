import Sequelize, { Model } from 'sequelize';

export default class Contact extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 50],
            msg: 'Seu nome precisa ter entre 3 a 50',
          },
        },
      },

      lastname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 50],
            msg: 'Seu sobrenome precisa ter entre 3 a 50',
          },
        },
      },

      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já existe',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },

      message: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [5, 250],
            msg: 'Sua mensagem precisa ter entre 5 a 250',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
