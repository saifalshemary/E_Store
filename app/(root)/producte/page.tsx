import React from 'react';
import ProductsContainer from '../../../components/products/productsContainer';

// تعريف صحيح للـ Props
interface PageProps {
  searchParams: Promise<{
    layout?: 'grid' | 'list';
    search?: string;
  }>;
}

async function ProductePage({ searchParams }: PageProps) {
  // await searchParams للحصول على القيم
  const params = await searchParams;
  const { layout = 'grid', search = '' } = params;
  
  return (
    <ProductsContainer layout={layout} search={search} />
  );
}

export default ProductePage;