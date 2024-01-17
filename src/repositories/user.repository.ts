import db from "../database";
import { User } from "../models/user.model";
import { DatabaseError } from "../errors/database.error.model";

class UserRepository {
  async findAllUsers(): Promise<User[]> {
    const query = `SELECT uuid, username FROM application_user`;

    const { rows } = await db.query<User>(query);

    return rows || [];
  }

  async findById(uuid: string): Promise<User> {
    try {
      const query = `SELECT uuid, username FROM application_user WHERE uuid = $1`;

      const queryParams = [uuid];

      const { rows } = await db.query<User>(query, queryParams);
      const [user] = rows;

      return user;
    } catch (error) {
      throw new DatabaseError({ log: 'Erro na consulta por ID, ', data: error});
    }
  }

  async create(user: User): Promise<string> {
    const script = `INSERT INTO application_user(username, password)VALUES($1, crypt($2, 'my_salt')) RETURNING uuid`;

    const queryParams = [user.username, user.password];

    const { rows } = await db.query<{ uuid: string }>(script, queryParams);
    const [newUser] = rows;

    return newUser.uuid;
  }

  async update(user: User): Promise<void> {
    const script = `UPDATE application_user SET username = $1, password = crypt($2, 'my_salt') WHERE uuid = $3`;

    const queryParams = [user.username, user.password, user.uuid];

    await db.query<{ uuid: string }>(script, queryParams);
  }

  async remove(uuid: string): Promise<void> {
    const script = `DELETE FROM application_user WHERE uuid = $1`;

    const queryParams = [uuid];

    await db.query<{ uuid: string }>(script, queryParams);
  }

  async findByUuid(uuid: string): Promise<User | null> {
    try {
        const query = `
            SELECT 
                uuid, 
                username
            FROM application_user
            WHERE uuid = $1
        `;
        const queryResult = await db.query<User>(query, [uuid]);
        const [row] = queryResult.rows;
        return !row ? null : row;
    } catch (error) {
        throw new DatabaseError({ log: 'Erro ao buscar usuário por uuid', data: error });
    }
}

  async findByUsernameAndPassword(username: string, password: string): Promise<User | null> {
    try {
        const query = `
            SELECT 
                uuid, 
                username
            FROM application_user
            WHERE username = $1
            AND password = crypt($2, 'my_salt')
        `;
        const queryResult = await db.query(query, [username, password]);
        const [row] = queryResult.rows;
        return !row ? null : row;
    } catch (error) {
        throw new DatabaseError({ log: 'Erro ao buscar usuário por username e password', data: error });
    }
}

  
}

export default new UserRepository();
