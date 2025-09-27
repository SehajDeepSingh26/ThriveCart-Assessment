import { Baskets } from "./Baskets";
import { productCatalog } from "./catalog";
import { DeliveryRule } from "./models/Delivery";
import { Offer } from "./models/Offer";

const deliveryRules: DeliveryRule[] = [     //  delivery charges
  { min: 0, max: 50, charge: 4.95 },
  { min: 50, max: 90, charge: 2.95 },
  { min: 90, max: Infinity, charge: 0 }
];

const offers: Offer[] = [                       //  offers
  { productCode: "R01", type: "RED_HALF" }
];


function runBasket(items: string[]): void {
  const basket = new Baskets(productCatalog, deliveryRules, offers);
  items.forEach((code) => basket.add(code));
  console.log(`Products: ${items.join(", ")} -> Total: $${basket.total().toFixed(2)}`);
}

// Baskets given in the assesment
runBasket(["B01", "G01"]);                              // Expected: 37.85
runBasket(["R01", "R01"]);                              // Expected: 54.37
runBasket(["R01", "G01"]);                              // Expected: 60.85
runBasket(["B01", "B01", "R01", "R01", "R01"]);         // Expected: 98.27
