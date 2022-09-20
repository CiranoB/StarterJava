import Nutritionist from "./Nutritionist";

interface Diet{
    uuidDiet: string;
    kcalDiet: number;
    foodsDiet: string;
    nutritionist?: Nutritionist | null;
}

export default Diet;