import Diet from "./Diet";

interface Group{
    uuidGroup: string;
    costGroup: string;
    restrictionGroup: string;
    maxKcalGroup: number;
    minKcalGroup: number;
    diet?: Diet | null;
}

export default Group;