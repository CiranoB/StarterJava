import Group from "./Group";
import Nutritionist from "./Nutritionist";

interface Diet{
    uuidDiet: string;
    kcalDiet: number;
    foodsDiet: string;
    nutritionist?: Nutritionist | null;
    group?: Group[] | null ;
}

export default Diet;