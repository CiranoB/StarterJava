import Bookkeeper from "./Bookkeeper";
import User from "./User";

interface Pay{
    uuidPay: string;
    valuePay: number;
    datePay: string;
    dueDatePay: string;
    user?: User | null;
    bookkeeper?: Bookkeeper | null;
}

export default Pay;