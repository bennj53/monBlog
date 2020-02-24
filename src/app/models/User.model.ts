export class User {
  userRoles: string[] = [];

  constructor(public identifiant: string, public password: string) {

  }

  setUserRoles(roles: string[]) {
    // vider roles du user
    if (this.userRoles !== null && this.userRoles.length > 0) {
      this.userRoles.splice(0, this.userRoles.length - 1);
    }

    // ajouter les roles du user
    roles.forEach(role => {
      this.userRoles.push(role);
    });
  }
}
