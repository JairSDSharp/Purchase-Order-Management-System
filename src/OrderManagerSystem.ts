interface Product {
  name: string;
  quantity: number;
  unitPrice: number;
}

interface Order {
  id: string;
  products: Product[];
}

export class OrderSystem {
  private orders: Order[];

  constructor() {
    this.orders = [];
  }

  // ID matching is case insensitive. Will always be uppercase and trimed.
  private findOrderById(id: string): Order | undefined {
    return this.orders.find((order) => order.id === id.toUpperCase().trim());
  }

  private showProduct(product: Product): number {
    const productTotal = product.unitPrice * product.quantity;
    console.log(
      `- ${product.name} ${product.quantity}  $${product.unitPrice} $${productTotal} `
    );
    return productTotal;
  }

  searchOrderById(id: string): void {
    const existingOrder = this.findOrderById(id);
    if (existingOrder) {
      console.log(`Order: ${existingOrder.id}`);
      console.log("Products:");
      let total = 0;
      existingOrder.products.forEach((product) => {
        const productTotal = this.showProduct(product);
        total += productTotal;
      });
      console.log("Total: ", total);
    } else {
      console.log(`Order ${id} not found.`);
    }
  }

  showAllOrders(): void {
    console.log("All Orders:");
    this.orders.forEach((order) => {
      console.log(`Order: ${order.id}`);
      console.log("Products:");
      let total = 0;
      order.products.forEach((product) => {
        const productTotal = this.showProduct(product);
        total += productTotal;
      });
      console.log("Total: ", total);
      console.log("... _ ... _ ... _ ... _ ... _ ... _ ...");
    });
  }

  // id param will be trimed and trasnformed to uppercase
  createOrder(id: string, products?: Product[]): void {
    const existingOrder = this.findOrderById(id);
    if (existingOrder) {
      console.error(`Order ${existingOrder.id} already exist.`);
    }
    const order: Order = {
      id: id.toUpperCase().trim(),
      products: products ? products : [],
    };
    this.orders.push(order);
  }

  addProductToOrder(
    orderId: string,
    productName: string,
    quantity: number,
    unitPrice: number
  ): void {
    const existingOrder = this.findOrderById(orderId);
    if (existingOrder) {
      const product: Product = {
        name: productName,
        quantity: quantity,
        unitPrice: unitPrice,
      };
      existingOrder.products.push(product);
    } else {
      console.error(`Coudn't add product. Order ${orderId} not found.`);
    }
  }
}
