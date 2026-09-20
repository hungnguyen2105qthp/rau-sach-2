import { Link } from "react-router";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-6xl sm:text-8xl font-bold text-green-600 mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Không Tìm Thấy Trang
        </h2>
        <p className="text-gray-600 mb-8 text-base sm:text-lg">
          Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
        >
          <Home className="w-5 h-5" />
          Về Trang Chủ
        </Link>
      </div>
    </div>
  );
}
