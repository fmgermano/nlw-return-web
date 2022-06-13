import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailers-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedBackUseCase } from './use-cases/submit-feedback-use-case';
export const routes = express.Router()



routes.post('/feedbacks',  async (req,res) => {
    const { type, comment, screenshot} = req.body; 
     
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository
    const nodemailerMailAdapter = new NodemailerMailAdapter()
    const submitFeedBackUseCase = new SubmitFeedBackUseCase(
        prismaFeedbacksRepository,
        nodemailerMailAdapter
    )
    
    await submitFeedBackUseCase.execute({
        type,
        comment,
        screenshot
    });

  /*   await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Felipe Mateus <fmgermano@gmail.com>',
        subject: 'Novo Feedback',
        html: [
            `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
            `<p>Tipo do Feedback:  ${type}</p>`,
            `<p>Comentário::  ${comment}</p>`,
            `</div>`
        ].join('\n')
    });
 */
    return res.status(201).send()
});