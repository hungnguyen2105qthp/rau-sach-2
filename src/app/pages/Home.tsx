import { Link } from "react-router";
import { CheckCircle, Leaf, Award, Users, Sprout, ShieldCheck, Clock, TrendingUp, Heart, Target, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { products } from "../data/products";

// Import ALL Figma images (same as Products page)
import imgImageBpCi from "figma:asset/528d11d02fe485943da51e05186156ffd14bbbd5.png";
import imgProducts from "figma:asset/0009e2fc0ec1b24cd3101866ff04a3a6cd1763bf.png";
import imgImageRauCiXanh from "figma:asset/2aa2b8a4f7c9f49c5680e7ce355b0a273e2b69d3.png";
import imgImageRauCiBoXoiSpinach from "figma:asset/77a20dfa32e9c00a04e64f955a957546e6caaa78.png";
import imgImageRauCiThoCiBpTho from "figma:asset/c8619ac51d5c54a8bb0ac4d0bc3d4653b2f2fe38.png";
import imgImageRauCiChipCiC from "figma:asset/dddfb41bbfcdfc9fd420870ac896baeea48a7d6f.png";
import imgImageRauDay from "figma:asset/29d678ad25fa6a6d6df171def74dda0de0164f3a.png";
import imgImageRauDn from "figma:asset/f0c8bb6312694ebd11fcd90b8fb5523652b8e814.png";
import imgImageRauMngTi from "figma:asset/4a12984a001be41e45cfdf3c4494607baab34803.png";
import imgImageRauMung from "figma:asset/c6c4d1f3a7cf3c9220cac06fac97a6e6f43af724.png";
import imgImageRauNgot from "figma:asset/6c7bfa58db412d107a4cdaa2f67ae27679ae7423.png";
import imgImageCnSanhCnTay from "figma:asset/9c2d981fad8d12e5c3725820e1416e62ec38dbd2.png";
import imgImageBiDBiNgo from "figma:asset/7deb8c039aa10ce1f4cac9161641cc5d1d659df6.png";
import imgImageBiNgoBaoT from "figma:asset/36fcfa2b334cffba1d0bf7df8779f4a691ddd916.png";
import imgImageBiXanhBiDao from "figma:asset/d3b5fbc6baad71e3c197b4895dfbcbe1d30c9bda.png";
import imgImageCaChua from "figma:asset/e82467506889b7f00c3f125a399bf9c1b785e0af.png";
import imgImageDCoVeDuCoVe from "figma:asset/6982419d94555e74648d19f15bb9a0ada5191463.png";
import imgImageMp from "figma:asset/091a121f57d66ee5c482d42baf62cc3c2fc18685.png";
import imgImageSuSu from "figma:asset/88a24ed0469877243a3fc33361c872beea29e09c.png";
import imgImageCaRt from "figma:asset/748326b6dbf33211145390baa709e15a08802869.png";
import imgImageCCiTrng from "figma:asset/370f5e802649904567f5e974d009d50dad548568.png";
import imgImageCCnhCDn from "figma:asset/1f5372d338c83cfc65f4547da8a46c1e61de8d57.png";
import imgImageGngTi from "figma:asset/ac34420ddfeb4fa3ef68054ed5ad7e70b73dfed6.png";
import imgImageHanhKho from "figma:asset/3435b9a404a5c403340de6ad794f8700b3ab4d7b.png";
import imgImageKhoaiLangTim from "figma:asset/7a256fcf420bf7378e1b7ff70aec0678e143053e.png";
import imgImageKhoaiLangVang from "figma:asset/8378aecc23071eba13daa22e16a1ad9770b28390.png";
import imgImageKhoaiMon from "figma:asset/13f478f004d3246ad528578d786d72f2e1c2f310.png";
import imgImageKhoaiS from "figma:asset/ae6083ed5b5324626e9b13df5863b3c5b90c17de.png";
import imgImageKhoaiTay from "figma:asset/eb43228ae3b07424ddd9a94b5ad78bae50d8c1d9.png";
import imgImageSuHao from "figma:asset/b5ec1ec130a567c9e04d1b027f4b17e052d527fb.png";
import imgImageHanhMuiTiaTo from "figma:asset/9f15e1ff1fce7b6ebf6fa6b1d5f2b6e9ae0c5f97.png";
import imgImageNgoNpVang from "figma:asset/34f3050a90aeeb5b56406f6db216f0f1ce94226a.png";
import imgImageQuDaThm from "figma:asset/00dab4c92032921dcb850b96bf24c30dda018446.png";
import imgImageCamSanh from "figma:asset/7380a4383ded88d119a691ef63bf1aa24712eaa8.png";
import imgImageSupLTrngXanh from "figma:asset/43ec5831f8b5cfae776fa340e46c882418c32a7e.png";
import imgImageBtSnDayNhaLam from "figma:asset/8069d822fa329b0cd140d0504a59c088b0a0fefe.png";
import imgHanhTay from "@/imports/h_nh_t_y.jfif";
import imgMe from "@/imports/me.jfif";
import imgDocMung from "@/imports/dm.jfif";

// Map product IDs to Figma images (same as Products page)
const figmaImageMap: Record<string, string> = {
  "bap-cai": imgImageBpCi,
  "gia-do": imgProducts,
  "rau-cai-xanh": imgImageRauCiXanh,
  "rau-cai-bo-xoi": imgImageRauCiBoXoiSpinach,
  "rau-cai-thao": imgImageRauCiThoCiBpTho,
  "rau-cai-chip": imgImageRauCiChipCiC,
  "rau-day": imgImageRauDay,
  "rau-den": imgImageRauDn,
  "rau-mong-toi": imgImageRauMngTi,
  "rau-muong": imgImageRauMung,
  "rau-ngot": imgImageRauNgot,
  "can-sanh": imgImageCnSanhCnTay,
  "bi-do-bi-ngo": imgImageBiDBiNgo,
  "bi-ngo-bao-tu": imgImageBiNgoBaoT,
  "bi-xanh-bi-dao": imgImageBiXanhBiDao,
  "ca-chua": imgImageCaChua,
  "do-co-ve": imgImageDCoVeDuCoVe,
  "muop": imgImageMp,
  "su-su": imgImageSuSu,
  "ca-rot": imgImageCaRt,
  "cu-cai-trang": imgImageCCiTrng,
  "cu-canh": imgImageCCnhCDn,
  "gung-tuoi": imgImageGngTi,
  "hanh-kho": imgImageHanhKho,
  "khoai-lang-tim": imgImageKhoaiLangTim,
  "khoai-lang-vang": imgImageKhoaiLangVang,
  "khoai-mon": imgImageKhoaiMon,
  "khoai-so": imgImageKhoaiS,
  "khoai-tay": imgImageKhoaiTay,
  "su-hao": imgImageSuHao,
  "hanh-mui-tia-to": imgImageHanhMuiTiaTo,
  "ngo-nep-vang-co-bap": imgImageNgoNpVang,
  "qua-dua": imgImageQuDaThm,
  "cam-sanh": imgImageCamSanh,
  "sup-lo": imgImageSupLTrngXanh,
  "bot-san-day": imgImageBtSnDayNhaLam,
  "hanh-tay": imgHanhTay,
  "me": imgMe,
  "doc-mung": imgDocMung,
};

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900 mb-4"
            >
              Rau Sạch VietGAP
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl sm:text-2xl text-green-700 mb-6"
            >
              Hộ Kinh Doanh Vũ Đức Hạnh
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-700 text-base sm:text-lg mb-8"
            >
              Sản xuất rau an toàn theo tiêu chuẩn VietGAP - Cam kết chất lượng, 
              an toàn cho sức khỏe gia đình Việt
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/products"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors text-center inline-block"
                >
                  Xem Sản Phẩm
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/about"
                  className="bg-white text-green-600 border-2 border-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors text-center inline-block"
                >
                  Giới Thiệu
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              { number: "10+", label: "Năm Kinh Nghiệm", icon: TrendingUp },
              { number: "12+", label: "Loại Rau Củ", icon: Leaf },
              { number: "100%", label: "Tiêu Chuẩn VietGAP", icon: ShieldCheck },
              { number: "500+", label: "Khách Hàng Tin Dùng", icon: Heart }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-green-50 rounded-lg"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                  className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3"
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10"
          >
            Tại Sao Chọn Chúng Tôi?
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              {
                icon: CheckCircle,
                title: "An Toàn",
                desc: "Không sử dụng thuốc trừ sâu độc hại, đảm bảo an toàn tuyệt đối"
              },
              {
                icon: Leaf,
                title: "Sạch",
                desc: "Quy trình canh tác hữu cơ, không hóa chất độc hại"
              },
              {
                icon: Award,
                title: "VietGAP",
                desc: "Chứng nhận VietGAP - Tiêu chuẩn Việt Nam về thực hành nông nghiệp tốt"
              },
              {
                icon: Users,
                title: "Tin Cậy",
                desc: "Được nhiều gia đình và nhà hàng tin tưởng lựa chọn"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-white rounded-lg cursor-pointer transition-shadow hover:shadow-lg"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Sản Phẩm Nổi Bật
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Khám phá các loại rau củ sạch được yêu thích nhất
            </p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {products.slice(0, 4).map((product, index) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Link
                  to={`/products/${product.id}`}
                  className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow block"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      src={figmaImageMap[product.id] || product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-green-600 mb-2">{product.category}</p>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/products"
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Xem Tất Cả Sản Phẩm
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-center text-white mb-10"
          >
            Quy Trình Sản Xuất
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                step: "01",
                title: "Chọn Giống",
                desc: "Lựa chọn giống rau sạch chất lượng cao từ nguồn uy tín",
                icon: Sprout
              },
              {
                step: "02",
                title: "Gieo Trồng",
                desc: "Áp dụng kỹ thuật canh tác khoa học, phân bón hữu cơ",
                icon: Leaf
              },
              {
                step: "03",
                title: "Chăm Sóc",
                desc: "Theo dõi hàng ngày, phòng trừ dịch bệnh sinh học",
                icon: Heart
              },
              {
                step: "04",
                title: "Thu Hoạch",
                desc: "Thu hoạch đúng thời điểm, đảm bảo độ tươi ngon",
                icon: CheckCircle
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 shadow-md"
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-4xl font-bold text-green-600 mb-3">{step.step}</div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10"
          >
            Cam Kết Của Chúng Tôi
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              {
                icon: ShieldCheck,
                title: "100% An Toàn",
                desc: "Cam kết không sử dụng thuốc bảo vệ thực vật độc hại, không chất cấm"
              },
              {
                icon: Clock,
                title: "Tươi Mỗi Ngày",
                desc: "Rau được thu hoạch hàng ngày, đảm bảo độ tươi ngon tối đa"
              },
              {
                icon: Target,
                title: "Truy Xuất Nguồn Gốc",
                desc: "Minh bạch nguồn gốc, quy trình sản xuất có thể kiểm tra bất cứ lúc nào"
              }
            ].map((commitment, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-green-50 rounded-lg p-6 text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <commitment.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{commitment.title}</h3>
                <p className="text-gray-600">{commitment.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-md p-6 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Địa Chỉ Vườn Rau</h2>
                </div>
                <p className="text-gray-700 mb-3">
                  <strong>Vườn rau:</strong> Thôn 1, Chính Mỹ, Thủy Nguyên, Hải Phòng (Tổ dân phố Quảng Thanh 4, phường Lê Ích Mộc, TP Hải Phòng)
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Địa chỉ kinh doanh:</strong> Phường Lưu Kiếm, Thành phố Hải Phòng
                </p>
                <p className="text-gray-600 text-sm">
                  Vườn rau của chúng tôi đặt tại khu vực có đất đai màu mỡ, nguồn nước sạch, 
                  khí hậu thuận lợi cho việc trồng rau an toàn theo tiêu chuẩn VietGAP.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Giấy Phép & Chứng Nhận</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">BaoTinVietGAP</p>
                      <p className="text-sm text-gray-600">Chứng nhận VietGAP</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">TCVN 11892-1:2017</p>
                      <p className="text-sm text-gray-600">Tiêu chuẩn Việt Nam</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">BTC 24/16003</p>
                      <p className="text-sm text-gray-600">Giấy phép kinh doanh</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
          >
            Sẵn Sàng Chọn Rau Sạch Cho Gia Đình?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-green-100 mb-6 text-base sm:text-lg"
          >
            Khám phá các loại rau củ sạch, tươi ngon của chúng tôi
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/products"
                className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Xem Tất Cả Sản Phẩm
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/about"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Tìm Hiểu Thêm
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}