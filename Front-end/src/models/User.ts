import Group from "./Group";

interface User {
    uuidPerson: string;
    namePerson: string;
    cpfPerson: string;
    agePerson: number;
    loginPerson: string;
    passwordPerson: string;
    admin: boolean;
    statusUser: boolean;
    objectiveUser: boolean;
    heightUser: number;
    weightUser: number;
    bmrUser: number;
    restrictionUser: string;
    costUser: string;
    group?: Group | null;
}

export default User;