import Group from "./Group";

interface User {
    uuidPerson: string;
    namePerson: string;
    cpfPerson: string;
    agePerson: number;
    loginPerson: string;
    passwordPerson: string;
    typePerson: string;
    statusUser: boolean;
    objectiveUser: string;
    heightUser: number;
    weightUser: number;
    bmrUser: number;
    restrictionUser: string;
    costUser: string;
    group?: Group | null;
}

export default User;