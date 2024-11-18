import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Star } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Mock product data (replace with API call)
  const product = {
    id,
    name: 'Wireless Headphones',
    price: 199.99,
    description:
      'High-quality wireless headphones with noise cancellation and premium sound quality.',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90',
    ],
    variants: {
      color: ['Black', 'White', 'Blue'],
    },
    rating: 4.5,
    reviews: 128,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full rounded-lg"
          />
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="rounded-lg cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`h-5 w-5 ${
                    index < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600">
              ({product.reviews} reviews)
            </span>
          </div>
          <p className="text-2xl font-bold mt-4">${product.price}</p>
          <p className="mt-4 text-gray-600">{product.description}</p>

          {/* Color Selection */}
          <div className="mt-6">
            <h3 className="text-sm font-medium">Color</h3>
            <Select>
              <SelectTrigger className="w-full mt-2">
                <SelectValue placeholder="Select a color" />
              </SelectTrigger>
              <SelectContent>
                {product.variants.color.map((color) => (
                  <SelectItem key={color} value={color.toLowerCase()}>
                    {color}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <h3 className="text-sm font-medium">Quantity</h3>
            <div className="flex items-center mt-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="mx-4 font-medium">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Add to Cart */}
          <Button className="w-full mt-8" size="lg">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}