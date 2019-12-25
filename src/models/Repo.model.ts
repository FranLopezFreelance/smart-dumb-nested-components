export class Repo {
  name: String;
  description: String;
  watchers: Number;
  owner: Owner;

  constructor(repo: Repo){
    this.name = repo.name;
    this.description = repo.description;
    this.watchers = repo.watchers;
    (repo.owner) ? this.owner = new Owner(repo.owner) : '';
  }

  saludar(){
    console.log("Hola Mundo!");
  };
}

export class Owner {
  login: String;
  html_url: String;
  avatar_url: String;

  constructor(owner: Owner){
    this.login = owner.login;
    this.html_url = owner.html_url;
    this.avatar_url = owner.avatar_url;
  }
}
