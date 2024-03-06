import { OrderSystem } from "../OrderManagerSystem";

// Usage:
const orderSystem = new OrderSystem();
orderSystem.createOrder("O-20240001");
orderSystem.addProductToOrder("O-20240001", "Prd-A", 5, 10);
orderSystem.addProductToOrder("O-20240001", "Prd-B", 11, 20);
orderSystem.createOrder("O-20240002", [
  {
    name: "Prd-C",
    quantity: 10,
    unitPrice: 30,
  },
]);
orderSystem.showAllOrders();
orderSystem.searchOrderById("PO001");
