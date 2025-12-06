// Importa os tipos de Request e Response do Express parao TypeScript, a conexão com o banco de dados e a entidade (molde) do Livro
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import {Livro} from "../entity/Livro";

export class LivroController {
    
    static async create(req: Request, res: Response) {

       
        const livroRepository = AppDataSource.getRepository(Livro);
        const dadosDoLivro = req.body;
        const livroSalvo = await livroRepository.save(dadosDoLivro);
        return res.status(201).json(livroSalvo);
    }


    static async list(req: Request, res: Response) {
        const livroRepository = AppDataSource.getRepository(Livro)
        const listaDeLivros = await livroRepository.find();
        return res.status(200).json(listaDeLivros);
    }

    static async update(req: Request, res: Response) {
        const {id} = req.params; // -> Pega o ID que virá na URL
        const novosDados = req.body; // -> Pega os dados que quero mudar
        const livroRepository = AppDataSource.getRepository(Livro);

        // Vai atualizar o livro baseado na ID
        await livroRepository.update(id, novosDados);

        return res.status(200).json({message: "Livro atualizado com sucesso!"});
    }

    // Método para EXCLUIR um livro
    static async remove(req: Request, res: Response) {
        const {id} = req.params;
        const livroRepository = AppDataSource.getRepository(Livro)

        // Manda o banco apagar o registro com esse ID
        await livroRepository.delete(id);

        return res.status(200).json({message: "Livro excluído com sucesso!"})
    }
}

