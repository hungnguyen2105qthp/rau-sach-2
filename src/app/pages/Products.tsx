import { Link } from "react-router";
import { Plus } from "lucide-react";
import { motion } from "motion/react";
import { products } from "../data/products";

// Import Figma images
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

// Map product IDs to Figma images
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

export default function Products() {
  // Group products by category
  const categories = Array.from(new Set(products.map(p => p.category)));
  const additionalCategories = [
    "Tôm",
    "Cua",
    "Ngao Sò Ốc",
    "Cá Nước Ngọt",
    "Cá Biển",
    "Thịt Lợn",
    "Thịt Bò",
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900 text-center mb-4"
          >
            Sản Phẩm Tươi Sạch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl text-green-700 text-center max-w-3xl mx-auto"
          >
            Rau củ, hải sản và thịt tươi ngon, được lựa chọn theo nguồn hàng trong ngày
          </motion.p>
        </div>
      </section>

      <nav aria-label="Danh mục hải sản và thịt" className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-sm font-semibold text-gray-700 mb-3">Khám phá danh mục</p>
          <div className="flex flex-wrap gap-2">
            {additionalCategories.map((category) => {
              const categoryIndex = categories.indexOf(category);
              return (
                <a
                  key={category}
                  href={`#category-${categoryIndex}`}
                  className="rounded-full border border-green-200 px-4 py-2 text-sm font-medium text-green-800 transition-colors hover:bg-green-50"
                >
                  {category}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Products by Category */}
      {categories.map((category, categoryIndex) => (
        <section id={`category-${categoryIndex}`} key={category} className="py-12 md:py-16 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-green-600"
            >
              {category}
            </motion.h2>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {products
                .filter((product) => product.category === category)
                .map((product, index) => (
                  <motion.div
                    key={product.id}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
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
                      <div className="p-5">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900">
                            {product.name}
                          </h3>
                          <Plus className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <p className="text-sm text-green-600 font-semibold mb-2">
                          {product.category}
                        </p>
                        <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                          <span className="text-sm text-green-600 font-semibold group-hover:underline">
                            Xem chi tiết →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
          >
            Cần Tư Vấn Thêm?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-700 mb-6 text-base sm:text-lg"
          >
            Chúng tôi sẵn sàng tư vấn và cung cấp thông tin chi tiết về các sản phẩm
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/about"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Liên Hệ Chúng Tôi
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}