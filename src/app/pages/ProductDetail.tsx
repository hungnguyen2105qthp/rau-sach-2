import { useParams, Link, useNavigate } from "react-router";
import { ArrowLeft, Check, Clock, Calendar, ClipboardCheck, DollarSign } from "lucide-react";
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

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Không tìm thấy sản phẩm
          </h1>
          <Link
            to="/products"
            className="text-green-600 hover:text-green-700 font-semibold"
          >
            ← Quay lại danh sách sản phẩm
          </Link>
        </motion.div>
      </div>
    );
  }

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
    <div className="bg-gray-50 min-h-screen">
      {/* Back Button */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white border-b"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <motion.button
            whileHover={{ x: -5 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Quay lại
          </motion.button>
        </div>
      </motion.div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-md overflow-hidden mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="aspect-square md:aspect-auto overflow-hidden"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={figmaImageMap[product.id] || product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Info */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="p-6 md:p-8"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-4"
              >
                <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              >
                {product.name}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed"
              >
                {product.description}
              </motion.p>

              {product.price !== undefined && (
                <div className="mb-6 flex items-center gap-2 rounded-xl bg-green-50 p-4 text-green-800">
                  <DollarSign className="h-5 w-5 shrink-0" />
                  <p className="font-bold">
                    {new Intl.NumberFormat("vi-VN").format(product.price)} đ
                    {product.unit && <span className="font-normal text-green-700"> / {product.unit}</span>}
                  </p>
                </div>
              )}

              {/* Additional Info */}
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-4 mb-6"
              >
                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3"
                >
                  <Calendar className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Mùa vụ</p>
                    <p className="text-gray-600">{product.season}</p>
                  </div>
                </motion.div>
                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3"
                >
                  <Clock className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Bảo quản</p>
                    <p className="text-gray-600">{product.storage}</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Benefits */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="border-t pt-6"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {product.benefitTitle || "Lợi Ích Dinh Dưỡng"}
                </h2>
                <motion.ul 
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                  className="space-y-3"
                >
                  {product.benefits.map((benefit, index) => (
                    <motion.li 
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Growing Method & Selection Criteria */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-lg shadow-md p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center"
              >
                <Check className="w-6 h-6 text-green-600" />
              </motion.div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Thông Tin Sản Phẩm
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {product.growingMethod}
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-lg shadow-md p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center"
              >
                <ClipboardCheck className="w-6 h-6 text-green-600" />
              </motion.div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Tiêu Chí Lựa Chọn
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {product.selectionCriteria}
            </p>
          </motion.div>
        </motion.div>

        {/* Related Products */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Sản Phẩm Khác
          </h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <motion.div
                  key={relatedProduct.id}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={`/products/${relatedProduct.id}`}
                    className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow block"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        src={figmaImageMap[relatedProduct.id] || relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedProduct.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}