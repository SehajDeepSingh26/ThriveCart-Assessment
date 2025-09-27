# Thrivecart Assessment - Acme Widget Co

This project implements a shopping basket system for Acme Widget Co, featuring product catalog, delivery charge rules, and special offers.

## Features

- **Product Catalog:** Red, Green, and Blue Widgets with unique codes and prices.
- **Delivery Charges:** Tiered delivery fees based on basket total.
- **Offers:** "Buy one get one half price" on Red Widgets.

## Project Structure

```
src/
  Baskets.ts         # Basket logic and pricing
  catalog.ts         # Product catalog
  index.ts           # Entry point and example baskets
  models/
    Delivery.ts      # Delivery rule interface
    Offer.ts         # Offer interface
    Product.ts       # Product interface
```

## Usage

Install dependencies:

```sh
npm install
```

Run the example baskets:

```sh
npm start
```

Expected output:

```
Products: B01, G01 -> Total: $37.85
Products: R01, R01 -> Total: $54.37
Products: R01, G01 -> Total: $60.85
Products: B01, B01, R01, R01, R01 -> Total: $98.27
```

---
Author: Sehajdeep Singh