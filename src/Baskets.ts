import { Product } from "./models/Product";
import { Offer } from "./models/Offer";
import { DeliveryRule } from "./models/Delivery";

export class Baskets {
    private products: Product[] = [];

    constructor(
        private productCatalog: Map<string, Product>,
        private deliveryRules: DeliveryRule[],
        private offers: Offer[]
    ) { }

    add(productCode: string): void {
        const product = this.productCatalog.get(productCode);
        if (!product)
            throw new Error(`Invalid product code: ${productCode}`);
        this.products.push(product);
    }

    private applyOffers(subtotal: number): number {
        let discount = 0;
        const offer = this.offers[0]
        if (offer.type === "RED_HALF") {
            const redWidgets = this.products.filter(
                (p) => p.code === offer.productCode
            );
            if(redWidgets.length > 0) {
                const discountedPairs = Math.floor(redWidgets.length / 2);
                discount += (redWidgets[0].price / 2) * discountedPairs;
            }
        }

        return subtotal - discount;
    }

     private calculateDelivery(total: number): number {
        for (const rule of this.deliveryRules) {
            if (total >= rule.min && total < rule.max) {
                return rule.charge;
            }
        }
        return 0;
    }

    total(): number {
        const subtotal = this.products.reduce((sum, p) => sum + p.price, 0);
        const afterOffers = this.applyOffers(subtotal);
        const delivery = this.calculateDelivery(afterOffers);

        // Truncate to 2 decimal places without rounding
        const total = afterOffers + delivery;
        return Math.floor(total * 100) / 100;
    }
}
