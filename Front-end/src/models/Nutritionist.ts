import Diet from "./Diet";

interface Nutritionist {
    uuidPerson: string;
    namePerson: string;
    cpfPerson: string;
    agePerson: number;
    loginPerson: string;
    passwordPerson: string;
    typePerson: string;
    crnNutritionist: string;
    statusNutritionist: boolean;
    registerNutritionist: string;
    diet?: Diet[] | null;
}

export default Nutritionist;