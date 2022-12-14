import { Users } from '@prisma/client';

export type IUserInsert = Omit<Users, 'id'>

export interface IUserRepositories{
	insert(userInfo: IUserInsert): Promise<void>;
	findByUsername(username: Users['username']): Promise<Users>
	findByIdAndAccoutId(id: Users['id'], accountId: Users['accountId']): Promise<Users>
}