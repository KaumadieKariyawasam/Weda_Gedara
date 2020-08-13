export class Posts {
    public title: string;
    public author: string;
    public content: String;
    public image: string;
    public published: string;

    constructor(title: string, author: string, content: string, published: string) {
        this.author = author;
        this.title = title;
        this.content = content;
        this.published = published;
    }
}
