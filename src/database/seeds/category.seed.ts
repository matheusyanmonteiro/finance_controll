import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { Category } from '../../entities/category'


export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Category)
      .values([
        {
          id: "0dfc61ef-615b-4f0e-948a-2ccd839d979b",
          name: 'Alimentação',
          description: 'alimentação é o processo pelo qual os organismos obtêm e assimilam...',
          created_at: String(new Date())
        },
        {
          id: "0bc7bdab-85e8-4ac8-ad45-32626b8d9c2d",
          name: 'Entretenimento',
          description: 'entretimento é qualquer ação, evento ou atividade com o fim de entreter...',
          created_at: String(new Date())
        },
        {
          id: "055d8521-ca2e-4d22-b236-4fa2e1d6b71c",
          name: 'Educação',
          description: 'Educação é uma prática social que visa ao desenvolvimento do ser humano...',
          created_at: String(new Date())
        },
        {
          id: "d92bdbb2-66ff-4a59-82a1-be345d0d1768",
          name: 'Saúde',
          description: 'Estado de bem-estar e equilíbrio físico, mental e psicológico...',
          created_at: String(new Date())
        },
        {
          id: "05a43d5b-87f9-4f4e-a950-436890e8b481",
          name: 'Transporte',
          description: 'Usualmente, utiliza-se o termo transporte para designar o deslocamento para o trabalho...',
          created_at: String(new Date())
        },
      ])
      .execute()
  }
}