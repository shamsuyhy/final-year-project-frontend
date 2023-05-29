
import { ProductOrder } from "./product-order";
import { Status } from "./status";

export class Order {
  orderId: number|undefined;
  statuses:Status[]|undefined;
  user: string|undefined;
  clientName: string|undefined;
  clientPhone: string|undefined;
  wilaya: string|undefined;
  comune:string|undefined;
  currentStatus:string|undefined;
  currentStatusDate: Date|undefined;
  deliveryAgency: number|undefined;
  productOrders: ProductOrder[]|undefined;
  notes:string|undefined;
  deliveryType: string|undefined;
  deliveryFee: number|undefined;
  totalPrice:number|undefined
}
