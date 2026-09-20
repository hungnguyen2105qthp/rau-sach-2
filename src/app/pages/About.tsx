import { Shield, Heart, Sprout, MapPin, Target, Users2, TrendingUp, Award, CheckCircle, Leaf } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
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
            Giới Thiệu
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl text-green-700 text-center max-w-3xl mx-auto"
          >
            Hộ Kinh Doanh Vũ Đức Hạnh - Cam kết mang đến rau sạch chất lượng cao
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
              Về Chúng Tôi
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Hộ Kinh Doanh Vũ Đức Hạnh là đơn vị tiên phong trong lĩnh vực sản xuất rau an toàn 
              theo tiêu chuẩn VietGAP tại Hải Phòng. Được thành lập với sứ mệnh mang đến nguồn 
              thực phẩm sạch, an toàn cho cộng đồng, chúng tôi đã không ngừng nỗ lực và phát triển 
              trong suốt nhiều năm qua.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Với tâm huyết và kinh nghiệm nhiều năm trong lĩnh vực nông nghiệp sạch, đội ngũ của 
              chúng tôi luôn đặt chất lượng và sức khỏe người tiêu dùng lên hàng đầu. Mỗi sản phẩm 
              rau củ được chăm sóc tận tâm từ khâu chọn giống, gieo trồng cho đến thu hoạch, đảm bảo 
              mang lại giá trị dinh dưỡng tốt nhất.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Chúng tôi áp dụng quy trình canh tác khoa học hiện đại kết hợp với phương pháp truyền 
              thống, kiểm soát chặt chẽ từng công đoạn từ gieo trồng đến thu hoạch. Đặc biệt, chúng 
              tôi cam kết không sử dụng thuốc trừ sâu và hóa chất độc hại, thay vào đó là các biện 
              pháp sinh học và phòng trừ tự nhiên để bảo vệ cây trồng.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg"
              >
                <Shield className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-700">VietGAP</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg"
              >
                <Heart className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-700">An Toàn</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg"
              >
                <Sprout className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-700">Tươi Sạch</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Sứ Mệnh</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Cung cấp rau sạch chất lượng cao, an toàn cho sức khỏe người tiêu dùng. 
                Góp phần xây dựng lối sống lành mạnh và bảo vệ môi trường cho thế hệ tương lai. 
                Chúng tôi cam kết luôn đặt lợi ích cộng đồng lên hàng đầu trong mọi hoạt động 
                sản xuất kinh doanh.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Tầm Nhìn</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Trở thành đơn vị hàng đầu trong lĩnh vực sản xuất rau an toàn tại Hải Phòng 
                và mở rộng ra các tỉnh thành khác. Xây dựng thương hiệu uy tín, được người 
                tiêu dùng tin tưởng và lựa chọn. Không ngừng đổi mới công nghệ, nâng cao 
                chất lượng sản phẩm.
              </p>
            </div>
          </motion.div>

          {/* Production Process */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Quy Trình Sản Xuất VietGAP
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Chọn Giống",
                  desc: "Lựa chọn giống rau sạch chất lượng cao, phù hợp với điều kiện khí hậu địa phương",
                  icon: Leaf
                },
                {
                  step: "2",
                  title: "Gieo Trồng",
                  desc: "Áp dụng quy trình canh tác khoa học, sử dụng phân bón hữu cơ",
                  icon: Sprout
                },
                {
                  step: "3",
                  title: "Chăm Sóc",
                  desc: "Theo dõi cây trồng hàng ngày, phòng trừ dịch bệnh bằng phương pháp sinh học",
                  icon: Heart
                },
                {
                  step: "4",
                  title: "Thu Hoạch",
                  desc: "Thu hoạch đúng thời điểm, đảm bảo độ tươi ngon và dinh dưỡng cao nhất",
                  icon: CheckCircle
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white border-2 border-green-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">{item.step}</div>
                  <h4 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-green-50 rounded-lg p-6 md:p-8 mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
              Chứng Nhận & Giấy Phép
            </h2>
            <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
              Chúng tôi tự hào là đơn vị được cấp đầy đủ các giấy phép và chứng nhận cần thiết, 
              đảm bảo quy trình sản xuất đạt tiêu chuẩn quốc gia và quốc tế.
            </p>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <Award className="w-10 h-10 text-green-600 mb-3" />
                <h3 className="font-bold text-lg mb-2 text-green-700">BaoTinVietGAP</h3>
                <p className="text-gray-600 text-sm">
                  Chứng nhận về thực hành sản xuất nông nghiệp tốt theo tiêu chuẩn Việt Nam
                </p>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <Shield className="w-10 h-10 text-green-600 mb-3" />
                <h3 className="font-bold text-lg mb-2 text-green-700">TCVN 11892-1:2017</h3>
                <p className="text-gray-600 text-sm">
                  Tiêu chuẩn Việt Nam về rau an toàn - Yêu cầu kỹ thuật và phương pháp kiểm tra
                </p>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <CheckCircle className="w-10 h-10 text-green-600 mb-3" />
                <h3 className="font-bold text-lg mb-2 text-green-700">BTC 24/16003</h3>
                <p className="text-gray-600 text-sm">
                  Giấy phép kinh doanh hợp lệ do cơ quan có thẩm quyền cấp
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Team & Facilities */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Đội Ngũ & Cơ Sở Vật Chất
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white border-2 border-green-100 rounded-lg p-6"
              >
                <Users2 className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Đội Ngũ Chuyên Nghiệp</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Kỹ sư nông nghiệp có kinh nghiệm lâu năm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Nông dân được đào tạo chuyên sâu về canh tác VietGAP</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Đội ngũ kiểm soát chất lượng nghiêm ngặt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Thường xuyên được đào tạo và cập nhật kỹ thuật mới</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white border-2 border-green-100 rounded-lg p-6"
              >
                <Sprout className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cơ Sở Vật Chất</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Vườn rau rộng lớn với đất đai màu mỡ, nguồn nước sạch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Hệ thống tưới tiêu hiện đại, tiết kiệm nước</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Nhà lưới, nhà màng đảm bảo điều kiện canh tác tối ưu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Kho bảo quản đạt tiêu chuẩn, giữ độ tươi ngon</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg border-2 border-green-100 p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Địa Chỉ Vườn Rau</h2>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
                  <strong>Vườn rau thuộc:</strong> Thôn 1, Chính Mỹ, Thủy Nguyên, Hải Phòng (Tổ dân phố Quảng Thanh 4, phường Lê Ích Mộc, TP Hải Phòng)<br />
                  <strong>Địa chỉ kinh doanh:</strong> Phường Lưu Kiếm, Thành phố Hải Phòng
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  Vườn rau của chúng tôi được đặt tại vị trí thuận lợi với địa hình bằng phẳng, 
                  đất đai màu mỡ giàu dinh dưỡng. Nguồn nước sạch từ hệ thống thủy lợi đảm bảo 
                  chất lượng tưới tiêu tốt nhất. Khu vực có khí hậu ôn hòa, phù hợp cho việc 
                  trồng đa dạng các loại rau an toàn theo tiêu chuẩn VietGAP.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10"
          >
            Giá Trị Cốt Lõi
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
                title: "Chất Lượng",
                desc: "Cam kết cung cấp rau sạch chất lượng cao nhất, đạt tiêu chuẩn VietGAP. Mỗi sản phẩm đều được kiểm tra kỹ lưỡng trước khi đến tay người tiêu dùng."
              },
              {
                title: "Trách Nhiệm",
                desc: "Chịu trách nhiệm với sức khỏe cộng đồng và môi trường sống xanh. Bảo vệ đất đai, nguồn nước cho thế hệ tương lai."
              },
              {
                title: "Tận Tâm",
                desc: "Phục vụ khách hàng với sự tận tâm và nhiệt huyết trong từng sản phẩm. Luôn lắng nghe và đáp ứng nhu cầu của người tiêu dùng."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-lg p-6 shadow-md border-2 border-green-100"
              >
                <h3 className="font-bold text-xl mb-3 text-green-700">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Cam Kết Của Chúng Tôi
            </h2>
            <div className="bg-green-50 rounded-lg p-6 md:p-8 border-2 border-green-200">
              <p className="text-gray-700 leading-relaxed mb-4">
                Hộ Kinh Doanh Vũ Đức Hạnh cam kết 100% sản phẩm rau củ đều đạt tiêu chuẩn 
                VietGAP, không sử dụng thuốc bảo vệ thực vật cấm, không chứa chất độc hại. 
                Chúng tôi luôn đặt sức khỏe và sự hài lòng của khách hàng lên hàng đầu.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Mọi thông tin về nguồn gốc, quy trình sản xuất đều được công khai, minh bạch. 
                Quý khách có thể truy xuất nguồn gốc và tham quan vườn rau của chúng tôi bất 
                cứ lúc nào để yên tâm về chất lượng sản phẩm.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}