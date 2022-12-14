import { Response,Request, NextFunction } from 'express';
import Joi from 'joi';
import AppError from '../../utils/appError.js';
import { ICreateUserDTO } from './createUser.DTO.js';

export class CreateUserMiddleware {

	constructor(
		private createUserSchema: Joi.ObjectSchema<ICreateUserDTO>,
	){}

	async handle(req: Request, res: Response,next: NextFunction): Promise<void>{
		const {error} = this.createUserSchema.validate(req.body);
		if(error) throw new AppError(error.details.map(detail => detail.message).join(''), 422);
		next();
	}
}