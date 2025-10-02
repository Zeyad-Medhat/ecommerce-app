export class Product {
  id: number;
  title: string;
  description: string;
  image: string;
  images: string[];
  reviews: { rating: number; comment: string; date: string; reviewerName: string; reviewerEmail: string; }[];
  inStock: boolean;
  price: number;
  quantity: number;
  stock: number;
  averageRating: number;
  category: string;
  brand: string;
  sku: string;
  weight: number;
  dimensions: { width: number; height: number; depth: number };
  warrantyInformation: string;
  shippingInformation: string;
  returnPolicy: string;

  constructor(data: any) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.image = data.thumbnail ?? data.images?.[0] ?? '';
    this.images = data.images ?? [];
    this.reviews = data.reviews ?? [];
    this.inStock = data.stock>0;
    this.price = data.price ?? 0;
    this.quantity = data.quantity ?? 0;
    this.stock = data.stock ?? 0;
    this.category = data.category ?? '';
    this.brand = data.brand ?? '';
    this.sku = data.sku ?? '';
    this.weight = data.weight ?? 0;
    this.dimensions = data.dimensions ?? { width: 0, height: 0, depth: 0 };
    this.warrantyInformation = data.warrantyInformation ?? '';
    this.shippingInformation = data.shippingInformation ?? '';
    this.returnPolicy = data.returnPolicy ?? '';

    // calculate average rating
    if (this.reviews.length === 0) {
      this.averageRating = 0;
    } else {
      const sum = this.reviews.reduce((acc, r) => acc + r.rating, 0);
      this.averageRating = sum / this.reviews.length;
    }
  }
}
