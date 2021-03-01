import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { SurveysRepository } from "../repositories/SurveysRepository";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";
import { Request, Response } from 'express';


class SendMailController {
  async execute(request: Request, response: Response) {
    const { email, survey_id } = request.body;

    const usersRepository = getCustomRepository(UsersRepository);
    const surveysRepository = getCustomRepository(SurveysRepository);
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const userAlreadyExists = await usersRepository.findOne({ email });

    if (!userAlreadyExists) {
      return response.status(400).json({
        error: "User does not exists!",
      });
    }

    const surveyAlreadyExists = await surveysRepository.findOne({ id: survey_id })

    if (!surveyAlreadyExists) {
      return response.status(400).json({
        error: "Survey does not exist!",
      });
    }

    // Salvar as informações na tabela surveys_users
    // https://youtu.be/GjfKXHkdwxI?t=1464
    // Enviar e-mail para o usuário
  }
}

export { SendMailController };
