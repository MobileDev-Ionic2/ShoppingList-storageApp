export class Settings
{
    constructor()
    {
        // this is supposed to be removed if storage is implemented
        this.sortAlphabetical = false;
        this.useHintsAndNotifications = true;
        this.useLogin = true;
        this.userName="";
        this.userPassword="";
    }
    sortAlphabetical:boolean;
    useHintsAndNotifications:boolean;
    userName:string;
    userPassword:string;
    useLogin:boolean;

}