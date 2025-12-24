import Image from "next/image";

export default function ProductsPage() {
  const items = [
    {
      id: 1,
      name: "محصول 1",
      price: 50000,
      status: "موجود",
      createdAt: "2025-12-01",
      image: "/images/photo-1.jpg",
    },
    {
      id: 2,
      name: "محصول 2",
      price: 75000,
      status: "موجود",
      createdAt: "2025-12-05",
      image: "/images/photo-1.jpg",
    },
    {
      id: 3,
      name: "محصول 3",
      price: 120000,
      status: "ناموجود",
      createdAt: "2025-12-10",
      image: "/images/photo-1.jpg",
    },
    {
      id: 4,
      name: "محصول 4",
      price: 45000,
      status: "موجود",
      createdAt: "2025-12-15",
      image: "/images/photo-1.jpg",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-slate-50 w-full h-screen p-2">
      <h1 className="text-2xl font-bold mb-4">محصولات</h1>
      <div className="w-[80%] bg-slate-100 h-[80%] overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-200">
              <th className="px-4 py-2">ردیف</th>
              <th className="px-4 py-2">تصویر</th>
              <th className="px-4 py-2">نام</th>
              <th className="px-4 py-2">وضعیت</th>
              <th className="px-4 py-2">قیمت</th>
              <th className="px-4 py-2">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id} className="border-b">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                    width={64}
                    height={64}
                  />
                </td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.status}</td>
                <td className="px-4 py-2">{item.price.toLocaleString()} تومان</td>
                <td className="px-4 py-2 space-x-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                    ویرایش
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded">
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
