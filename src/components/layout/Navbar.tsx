import { Link } from 'react-router-dom';
import { ShoppingCart, User, LogOut } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { useCartStore } from '../../store/cartStore';
import { useAuth } from '../../hooks/useAuth';
import { supabase } from '../../lib/supabase';

export default function Navbar() {
  const cartItems = useCartStore((state: { items: any[] }) => state.items);
  const { user } = useAuth();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold">ShopX</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/products"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Products
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="p-2 relative">
              <ShoppingCart className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
            
            {user ? (
              <>
                <Link to="/profile">
                  <Button variant="ghost" size="icon">
                    <User className="h-6 w-6" />
                  </Button>
                </Link>
                <Button variant="ghost" size="icon" onClick={handleLogout}>
                  <LogOut className="h-6 w-6" />
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button>Sign in</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
