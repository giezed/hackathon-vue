import { TrelloClient } from 'trello.ts';
import { TrelloApiKey, TrelloToken } from '../config';
import { Board } from 'trello.ts/out/api';

export class TrelloService {
    private trelloClient: TrelloClient;

    constructor() {
        this.trelloClient = new TrelloClient({
            key: TrelloApiKey,
            token: TrelloToken
        });
    }

    public getBoards() {
        return this.trelloClient.organizations.getBoards({
            id: 'dreamteam593'
        });
    }

    public async getCardCount (boardId:string) : Promise<any[]> {
        const lists = await this.trelloClient.board.getLists({ id: boardId })
        let listCounts:any[] = [];
        for (const list of lists) {
            //console.log(list)
            
            const allCards = await this.trelloClient.lists.getCards({ id: list.id})
            listCounts.push({name: list.name, cardCount: allCards.length})
        }
        console.log(listCounts)
        return listCounts;
    }
}
