import {inject} from '@loopback/core';
import {SequelizeRepository} from '../../../sequelize';
import {DbDataSource} from '../datasources/db.datasource';
import {User, UserRelations} from '../models/user.model';

export class UserRepository extends SequelizeRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(User, dataSource);
  }
}
