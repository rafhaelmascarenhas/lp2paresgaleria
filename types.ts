export interface Product {
  id: number;
  name: string;
  description: string;
  brand: 'Nike' | 'Puma' | 'Fila' | 'Olympikus';
  oldPrice: number;
  price: number;
  image: string;
  badge?: string;
  selectedSize?: number;
}

export type BrandFilter = 'TODOS' | 'Nike' | 'Puma' | 'Fila' | 'Olympikus';
