import { Product } from "./models/Product";
import { Offer } from "./models/Offer";
import { DeliveryRule } from "./models/Delivery";

export class Baskets {
    private products: Product[] = [];

    constructor(
        private productCatalog: Map<string, Product>,
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
}
