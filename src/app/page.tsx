import Link from "next/link";

export default function Home() {
  const renderTypes = [
    {
      name: "SSR",
      title: "Server-Side Rendering",
      href: "/task-ssr",
      description: "Dữ liệu được lấy và render trên server mỗi lần truy cập.",
      color: "bg-purple-100 border-purple-300 text-purple-800",
    },
    {
      name: "SSG",
      title: "Static Site Generation",
      href: "/task-ssg",
      description:
        "Trang được tạo sẵn khi build, phù hợp với nội dung ít thay đổi.",
      color: "bg-green-100 border-green-300 text-green-800",
    },
    {
      name: "ISR",
      title: "Incremental Static Regeneration",
      href: "/task-isr/1",
      description:
        "Tạo trang tĩnh và tự động cập nhật lại sau một khoảng thời gian.",
      color: "bg-blue-100 border-blue-300 text-blue-800",
    },
    {
      name: "CSR",
      title: "Client-Side Rendering",
      href: "/task-csr",
      description:
        "Dữ liệu được lấy và hiển thị sau khi trang được tải trên trình duyệt.",
      color: "bg-yellow-100 border-yellow-300 text-yellow-800",
    },
  ];

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {renderTypes.map((type) => (
          <Link key={type.name} href={type.href} className="group">
            <div className="h-full border rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-gray-300">
              <div className={`p-4 border-b ${type.color}`}>
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold">{type.title}</h2>
                  <span className="px-2 py-1 rounded text-xs font-bold bg-white">
                    {type.name}
                  </span>
                </div>
              </div>
              <div className="p-4 bg-white">
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="mt-auto">
                  <span className="text-blue-600 font-medium group-hover:underline">
                    Xem demo →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-3">Giới thiệu</h2>
        <p className="text-gray-600 mb-3">
          Ứng dụng này minh họa 4 cách render trong Next.js:
        </p>
        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          <li>
            <strong>SSR</strong>: Render trên server mỗi lần truy cập
          </li>
          <li>
            <strong>SSG</strong>: Tạo sẵn trang tĩnh khi build
          </li>
          <li>
            <strong>ISR</strong>: Tạo sẵn và cập nhật lại sau một thời gian
          </li>
          <li>
            <strong>CSR</strong>: Lấy dữ liệu và hiển thị ở phía trình duyệt
          </li>
        </ul>
      </div>
    </div>
  );
}
