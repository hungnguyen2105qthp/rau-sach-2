import { Outlet, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Trang Chủ" },
    { path: "/about", label: "Giới Thiệu" },
    { path: "/products", label: "Sản Phẩm" },
  ];

  const isActivePath = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-sm sticky top-0 z-50"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo - Text Only */}
            <Link to="/" className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h1 className="text-xl font-bold text-green-700">
                  Vũ Đức Hạnh VietGAP
                </h1>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`transition-colors ${
                      isActivePath(item.path)
                        ? "text-green-700 font-semibold"
                        : "text-gray-700 hover:text-green-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden py-4 border-t overflow-hidden"
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2 px-4 ${
                        isActivePath(item.path)
                          ? "text-green-700 font-semibold bg-green-50"
                          : "text-gray-700"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3">Hộ Kinh Doanh Ông Vũ Đức Hạnh</h3>
              <p className="text-green-100 text-sm">
                Sản xuất rau an toàn theo tiêu chuẩn VietGAP
              </p>
              <p className="text-green-100 text-sm mt-2">
                Diện tích sản xuất: 3000 m²<br />
                Sản lượng: 16-20 tấn/năm
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Địa Chỉ</h3>
              <p className="text-green-100 text-sm">
                <strong>Trụ sở:</strong> Thôn 4, Xã Quảng Thành, Huyện Thủy Nguyên, Thành phố Hải Phòng (Tổ dân phố Quảng Thanh 4, phường Lê Ích Mộc, TP Hải Phòng)
              </p>
              <p className="text-green-100 text-sm mt-2">
                <strong>Địa điểm sản xuất:</strong> Thôn 1, Xã Chính Mỹ, Huyện Thủy Nguyên, Thành phố Hải Phòng (Tổ dân phố Quảng Thanh 4, phường Lê Ích Mộc, TP Hải Phòng)
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Chứng Nhận</h3>
              <p className="text-green-100 text-sm">
                BaoTinVietGAP<br />
                TCVN 11892-1:2017<br />
                BTC 24/16003<br />
                Số: BTC24/16003
              </p>
            </div>
          </div>
          <div className="border-t border-green-700 mt-6 pt-6 text-center text-green-100 text-sm">
            © 2026 Hộ Kinh Doanh Ông Vũ Đức Hạnh. Tất cả quyền được bảo lưu.
          </div>
        </div>
      </footer>
    </div>
  );
}