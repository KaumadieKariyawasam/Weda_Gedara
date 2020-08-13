export class Artical {
    // public id?: string;
    public title: string;
    public date: string;
    public Content: string;
    public Author: string;

    constructor( title: string, Published: string, Content: string, Author: string) { //id: string, 
        // this.id = id;
        this.title = title;
        this.date = Published;
        this.Content = Content;
        this.Author = Author;
    }
}
