export class Article {

  private auteur: string;
  private id: string;

  constructor( private title: string, private resume: string, private keywords: string, private articleContent: string) {

  }

  public setId(id: string): void{
    this.id = id;
  }

  public getArticleContent(): string {
    return this.articleContent;
  }

  public getTitle(): string {
    return this.title;
  }

  public getResume(): string {
    return this.resume;
  }

  public getKeywords(): string {
    return this.keywords;
  }

  public setArticleContent(articleContent: string): void {
    this.articleContent = articleContent;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public setResume(resume: string): void {
    this.resume = resume;
  }

  public setKeywords(keywords: string): void {
    this.keywords = keywords;
  }

  public getAuteur(): string {
    return this.auteur;
  }

  public setAuteur(auteur: string): void {
    this.auteur = auteur;
  }

}
