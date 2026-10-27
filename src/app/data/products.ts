import tomImage from "../../../image/Tom.jfif";
import cuaImage from "../../../image/Cua.jpg";
import ngaoSoOcImage from "../../../image/ngao-so-oc.webp";
import caNuocNgotImage from "../../../image/ca-nuoc-ngot.jpg";
import caNuocManImage from "../../../image/ca-nuoc-man.jpg";
import thitLonImage from "../../../image/thit-lon.jfif";
import thitBoImage from "../../../image/thit-bo.jpg";
import cuCanhImage from "../../../image/cu-canh.jfif";
import rauRamThiLaToiImage from "../../../image/rauram-thila-toi.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  price?: number; // Giá tính theo VNĐ/kg (hoặc đơn vị phù hợp)
  unit?: string; // Đơn vị tính (kg, bó, bắp, etc.)
  growingMethod: string;
  selectionCriteria: string;
  benefits: string[];
  season: string;
  storage: string;
}

export const products: Product[] = [
  {
    id: "bap-cai",
    name: "Bắp Cải",
    category: "Rau Ăn Lá",
    price: 20000,
    unit: "kg",
    image: "figma:asset/528d11d02fe485943da51e05186156ffd14bbbd5.png",
    description: "Bắp cải xanh tươi, ngọt tự nhiên, giàu vitamin C",
    growingMethod: "Bắp cải được trồng trong điều kiện khí hậu mát mẻ, đất tơi xốp và giàu chất hữu cơ. Cây cần nhiều nước đều đặn trong suốt quá trình sinh trưởng. Sử dụng phân hữu cơ hoai mục và phun thuốc sinh học để phòng trừ sâu bệnh.",
    selectionCriteria: "Chọn những búp bắp cải chắc tay, lá cuộn chặt không rời rạc. Màu xanh tươi đều, không có vết vàng hay đốm nâu. Lá ngoài còn tươi, không bị héo hay sâu ăn. Búp càng nặng càng tốt, cho thấy độ chắc và tươi.",
    benefits: [
      "Giàu vitamin C, K và chất xơ",
      "Hỗ trợ tiêu hóa và giải độc gan",
      "Chống viêm và chống oxy hóa mạnh",
      "Tốt cho xương khớp và tim mạch"
    ],
    season: "Quanh năm",
    storage: "Bảo quản trong ngăn mát tủ lạnh 2-3 tuần"
  },
  {
    id: "bi-do-bi-ngo",
    name: "Bí Đỏ (Bí Ngô)",
    category: "Rau Ăn Quả",
    price: 20000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1570142056130-9f6b59c6287a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdW1wa2luJTIwZ3Jvd2luZyUyMHZpbmUlMjBmYXJtJTIwb3JhbmdlfGVufDF8fHx8MTc3NTY2NDc4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Bí đỏ ngọt bùi, giàu beta-carotene, thịt vàng đậm",
    growingMethod: "Bí đỏ được trồng trên đất tơi xốp, giàu dinh dưỡng. Sử dụng phân hữu cơ và tưới nước đều đặn. Bí đỏ cần nhiều ánh sáng để phát triển tốt và có màu sắc đẹp.",
    selectionCriteria: "Chọn trái bí đỏ có màu cam đỏ đều, vỏ cứng, không có vết nứt. Quả nặng tay, khi gõ có tiếng đục. Cuống khô và cứng là dấu hiệu bí đã chín. Tránh chọn những trái có vt mềm hay thối.",
    benefits: [
      "Giàu beta-carotene và vitamin A",
      "Tốt cho mắt và làn da",
      "Chống oxy hóa mạnh",
      "Tăng cường hệ miễn dịch"
    ],
    season: "Quanh năm",
    storage: "Để nơi khô ráo, thoáng mát có thể bảo quản 2-3 tháng"
  },
  {
    id: "bi-ngo-bao-tu",
    name: "Bí Ngô Bao Tử",
    category: "Rau Ăn Quả",
    price: 25000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1759745401005-399cb13bf37b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXR0ZXJudXQlMjBzcXVhc2glMjBncm93aW5nJTIwdmluZSUyMGZhcm18ZW58MXx8fHwxNzc1NjY0OTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Bí ngô bao tử thơm ngọt, thịt dày, màu vàng cam đẹp mắt",
    growingMethod: "Bí ngô bao tử được trồng trên giàn hoặc mặt đất với lớp rơm rạ phủ để giữ ẩm và sạch. Cần nhiều ánh sáng và dinh dưỡng để phát triển. Bón phân hữu cơ và tưới nước đều đặn.",
    selectionCriteria: "Chọn trái bí có hình dạng đặc trưng như quả lê, vỏ màu cam vàng đều, cứng chắc. Quả nặng tay, cuống khô là dấu hiệu chín. Tránh chọn bí có vết dập, nứt hay mềm.",
    benefits: [
      "Giàu vitamin A và C",
      "Chứa nhiều chất xơ tốt cho tiêu hóa",
      "Hỗ trợ kiểm soát cân nặng",
      "Tốt cho sức khỏe tim mạch"
    ],
    season: "Quanh năm",
    storage: "Để nơi khô ráo, thoáng mát 2-3 tháng"
  },
  {
    id: "bi-xanh-bi-dao",
    name: "Bí Xanh (Bí Đao)",
    category: "Rau Ăn Quả",
    price: 25000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1734522378413-0daf2e730e92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBtZWxvbiUyMGdvdXJkJTIwZ3Jvd2luZ3xlbnwxfHx8fDE3NzU2NjQ3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Bí đao xanh tươi, thịt trắng, ngọt thanh, mát",
    growingMethod: "Bí đao được trồng trên giàn cao, đảm bảo quả không chạm đất. Sử dụng phân hữu cơ và tưới nước đều đặn. Bí đao sinh trưởng tốt trong điều kiện khí hậu ấm áp và có nhiều ánh sáng.",
    selectionCriteria: "Chọn trái bí đao có vỏ xanh đều, không bị dập hay nứt nẻ. Quả nặng tay, cứng chắc, khi gõ có tiếng đục. Cuống còn xanh tươi. Tránh chọn những trái có vết vàng hay mềm.",
    benefits: [
      "Giàu nước, giải nhiệt tốt",
      "Chứa nhiều vitamin C và chất xơ",
      "Hỗ trợ gim cân và lợi tiểu",
      "Tốt cho tiêu hóa"
    ],
    season: "Quanh năm",
    storage: "Để nơi khô ráo, thoáng mát có thể bảo quản 2-3 tháng"
  },
  {
    id: "ca-chua",
    name: "Cà Chua",
    category: "Rau Ăn Quả",
    price: 20000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1722775509899-ccc891b6dea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG8lMjBwbGFudCUyMHJlZCUyMGdyb3dpbmclMjBnYXJkZW58ZW58MXx8fHwxNzc1NjY0Nzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Cà chua chín đỏ tự nhiên, ngọt thanh, giàu lycopene",
    growingMethod: "Cà chua được trồng theo phương pháp giàn dây, đảm bảo cây được thoáng mát và dễ chăm sóc. Sử dụng hệ thống tưới nhỏ giọt để tiết kiệm nước và tránh úng úng. Bón phân hữu cơ và phân vi sinh, không sử dụng thuốc kích thích tăng trưởng.",
    selectionCriteria: "Chọn những trái cà chua có màu đỏ đều, căng mọng, không có vết dập hay nứt nẻ. Trái phải chín tự nhiên trên cây, có mùi thơm đặc trưng. Cuống cà chua còn xanh tươi cho thấy độ tươi của sản phẩm.",
    benefits: [
      "Giàu lycopene - chất chống oxy hóa mạnh",
      "Tốt cho tim mạch và h tuần hoàn",
      "Cải thiện làn da, chống lão hóa",
      "Tăng cường hệ miễn dịch"
    ],
    season: "Quanh năm",
    storage: "Để ngoài nhiệt độ phòng hoặc ngăn mát tủ lạnh"
  },
  {
    id: "ca-rot",
    name: "Cà Rốt",
    category: "Củ",
    price: 20000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1651152883097-d841d39ac2fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJyb3QlMjBvcmFuZ2UlMjBncm93aW5nJTIwc29pbHxlbnwxfHx8fDE3NzU2NjQ3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Cà rốt đỏ tươi, giòn ngọt, giàu beta-carotene",
    growingMethod: "Cà rốt được trồng trên đất cát pha, tơi xốp để củ phát triển thẳng và đều. Cần làm đất sâu, bón phân hữu cơ trước khi gieo hạt. Tưới nước đều đặn nhưng không để úng, đảm bảo củ phát triển tốt và không bị nứt.",
    selectionCriteria: "Chọn những củ cà rốt có màu cam đỏ tươi, thân thẳng không cong queo hay nứt nẻ. Bề mặt củ phải nhẵn, không có rễ phụ nhiều. Củ cứng, chắc tay, không mềm nhũn. Đầu lá còn xanh tươi chứng tỏ độ tươi của sản phẩm.",
    benefits: [
      "Giàu beta-carotene - tiền chất vitamin A",
      "Tốt cho mắt và thị lực",
      "Tăng cường hệ miễn dịch",
      "Tốt cho da, tóc và chống lão hóa"
    ],
    season: "Quanh năm",
    storage: "Bảo quản trong ngăn mát tủ lạnh 2-4 tuần"
  },
  {
    id: "cu-cai-trang",
    name: "Củ Cải Trắng",
    category: "Củ",
    price: 25000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1585369496137-6b539c324adc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGRhaWtvbiUyMHJhZGlzaCUyMGhhcnZlc3R8ZW58MXx8fHwxNzc1NjYyMjg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Củ cải trắng giòn ngọt, thanh mát, dễ chế biến",
    growingMethod: "Củ cải trắng được trồng trên đất tơi xốp, thoát nước tốt để củ phát triển thẳng và đều. Bón phân hữu cơ trước khi gieo hạt. Tưới nước đều đặn trong suốt quá trình sinh trưởng. Thu hoạch sau 50-60 ngày.",
    selectionCriteria: "Chọn những củ cải có màu trắng sáng, bề mặt nhẵn, không có vết nứt nẻ hay đốm đen. Củ phải chắc, nặng tay, không mềm nhũn hay rỗng. Đầu lá còn xanh tươi. Tránh chọn những củ quá to hoặc có nhiều rễ phụ.",
    benefits: [
      "Giàu vitamin C và chất xơ",
      "Hỗ trợ tiêu hóa và giảm cân",
      "Thanh nhiệt, giải độc cơ thể",
      "Tốt cho hệ hô hấp"
    ],
    season: "Mùa đông - xuân",
    storage: "Bảo quản trong ngăn mát tủ lạnh 2-3 tuần"
  },
  {
    id: "cu-canh",
    name: "Củ Canh",
    category: "Củ",
    price: 35000,
    unit: "kg",
    image: cuCanhImage,
    description: "Củ canh tươi, vị bùi, phù hợp để chế biến các món canh.",
    growingMethod: "Củ canh được lựa chọn theo nguồn hàng và tình trạng thực tế trong ngày.",
    selectionCriteria: "Chọn củ chắc tay, bề mặt nguyên vẹn, không mềm nhũn hay có dấu hiệu hư hỏng.",
    benefits: [
      "Vị bùi, dễ kết hợp trong món ăn",
      "Thích hợp chế biến các món canh",
      "Có thể kết hợp với nhiều nguyên liệu",
      "Dễ sơ chế trước khi nấu"
    ],
    season: "Quanh năm",
    storage: "Bảo quản trong ngăn mát tủ lạnh 2-3 tuần"
  },
  {
    id: "do-co-ve",
    name: "Đỗ Cô Ve (Đậu Cô Ve)",
    category: "Rau Ăn Quả",
    price: 30000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1761314037211-63fff18c5187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFuJTIwc3Byb3V0cyUyMGZyZXNoJTIwdmVnZXRhYmxlfGVufDF8fHx8MTc3NTY2MTU1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Đỗ cô ve giòn ngọt, giàu protein thực vật",
    growingMethod: "Đỗ cô ve được trồng trên giàn cao, cây leo tốt trong điều kiện ấm áp. Cần tưới nước đều đặn và bón phân hữu cơ. Thu hoạch thường xuyên khi quả còn non để kích thích ra hoa.",
    selectionCriteria: "Chọn những trái đỗ cô ve non, xanh tươi, dài khoảng 10-15cm. Quả giòn, khi bẻ có tiếng kêu. Tránh chọn những trái quá già có hạt to.",
    benefits: [
      "Giàu protein và chất xơ",
      "Chứa nhiều vitamin và khoáng chất",
      "Hỗ trợ tiêu hóa tốt",
      "Tốt cho sức khỏe tim mạch"
    ],
    season: "Quanh năm",
    storage: "Bảo quản trong ngăn mát tủ lạnh 5-7 ngày"
  },
  {
    id: "gia-do",
    name: "Giá Đỗ",
    category: "Rau Ăn Lá",
    price: 15000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1758701925687-1449ab265c2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFuJTIwc3Byb3V0cyUyMGZyZXNoJTIwZ3Jvd2luZ3xlbnwxfHx8fDE3NzU2NjQzODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Giá đỗ tươi, giòn ngọt, giàu protein và vitamin",
    growingMethod: "Giá đỗ được trồng trong môi trường sạch, không ánh sáng. Hạt đỗ được ngâm nước và cho nảy mầm trong điều kiện ẩm ướt. Thu hoạch sau 4-5 ngày khi giá dài khoảng 5-7cm.",
    selectionCriteria: "Chọn giá đỗ có màu trắng ngà, thân giòn, không bị úng nước hay thối. Giá tươi có mùi thơm nhẹ của đậu. Tránh chọn giá có màu vàng, úa hay mùi hôi.",
    benefits: [
      "Giàu protein thực vật và vitamin C",
      "Ít calo, tốt cho người giảm cân",
      "Chứa nhiều chất xơ hỗ trợ tiêu hóa",
      "Giải nhiệt, thanh lọc cơ thể"
    ],
    season: "Quanh năm",
    storage: "Bảo quản trong ngăn mát tủ lạnh 2-3 ngày"
  },
  {
    id: "gung-tuoi",
    name: "Gừng Tươi",
    category: "Củ",
    price: 50000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1758055660285-d32b7b3b1e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGdpbmdlciUyMHJvb3QlMjBoYXJ2ZXN0fGVufDF8fHx8MTc3NTY2MjI4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Gừng tươi cay nồng, thơm, giúp ấm cơ thể",
    growingMethod: "Gừng được trồng trong đất tơi xốp, giàu dinh dưỡng. Cần bón phân hữu cơ đầy đủ và tưới nước đều đặn. Thu hoạch sau 9-10 tháng khi lá bắt đầu vàng.",
    selectionCriteria: "Chọn củ gừng căng mọng, vỏ mỏng, màu vàng nhạt. Củ phải cứng, nặng tay, khi cạo vỏ có mùi thơm nồng. Tránh chọn gừng có vỏ nhăn, mềm hay có vết thối.",
    benefits: [
      "Giúp ấm cơ thể và chống cảm lạnh",
      "Hỗ trợ tiêu hóa và giảm buồn nôn",
      "Chống viêm tự nhiên",
      "Tăng cường hệ miễn dịch"
    ],
    season: "Quanh năm",
    storage: "Bảo quản nơi khô ráo, thoáng mát 2-3 tuần"
  },
  {
    id: "hanh-kho",
    name: "Hành Khô",
    category: "Củ",
    price: 50000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1760549255949-767d18981890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmlvbiUyMGdyb3dpbmclMjBmYXJtJTIwaGFydmVzdHxlbnwxfHx8fDE3NzU2NjQ3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Hành khô tím, cay thơm, dùng làm gia vị",
    growingMethod: "Hành được trồng trong đất tơi xốp, thoát nước tốt. Bón phân hữu cơ trước khi trồng. Thu hoạch khi lá bắt đầu đổ và phơi khô trong 1-2 tuần.",
    selectionCriteria: "Chọn củ hành khô, cứng chắc, vỏ ngoài khô ráo màu tím đỏ. Tránh chọn hành có vỏ ẩm, mềm hay có mầm xanh.",
    benefits: [
      "Chống viêm và kháng khuẩn tự nhiên",
      "Tốt cho tim mạch",
      "Giúp tăng cường hệ miễn dịch",
      "Hỗ trợ kiểm soát đường huyết"
    ],
    season: "Quanh năm",
    storage: "Bảo quản nơi khô ráo, thoáng mát 2-3 tháng"
  },
  {
    id: "hanh-mui-tia-to",
    name: "Hành, Mùi, Tía Tô",
    category: "Rau Gia Vị",
    price: 50000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1588879460618-9249e7d947d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaWxhbnRybyUyMGJhc2lsJTIwcGVyaWxsYSUyMGhlcmIlMjBnYXJkZW58ZW58MXx8fHwxNzc1NjY0Nzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Hành lá, rau mùi, tía tô tươi thơm, dùng làm gia vị",
    growingMethod: "Các loại rau gia vị này được trồng trong chậu hoặc luống nhỏ. Cần ít nước và ánh sáng vừa phải. Thu hoạch lá thường xuyên để kích thích cây tái sinh.",
    selectionCriteria: "Chọn rau có lá xanh tươi, thơm đặc trưng, không héo vàng. Thân cây còn tươi, không bị dập nát. Tránh chọn rau có mùi lạ hay bị úng nước.",
    benefits: [
      "Giàu vitamin K và chất chống oxy hóa",
      "Hỗ trợ tiêu hóa tốt",
      "Chống viêm và kháng khuẩn",
      "Tăng hương vị món ăn"
    ],
    season: "Quanh năm",
    storage: "Bảo quản trong ngăn mát tủ lạnh 5-7 ngày"
  },
  {
    id: "rau-ram-thi-la-toi",
    name: "Rau Răm - Thì Là - Tỏi",
    category: "Rau Gia Vị",
    unit: "bó",
    image: rauRamThiLaToiImage,
    description: "Rau răm, thì là và tỏi tươi thơm, giúp món ăn thêm dậy vị.",
    growingMethod: "Rau gia vị được tuyển chọn theo nguồn hàng và tình trạng thực tế trong ngày.",
    selectionCriteria: "Chọn rau có lá xanh tươi, thân không dập úng và tỏi chắc củ, không có dấu hiệu mốc.",
    benefits: [
      "Tạo hương thơm đặc trưng cho món ăn",
      "Dùng làm gia vị hoặc ăn kèm",
      "Kết hợp linh hoạt trong nhiều món",
      "Có thể dùng tươi khi chế biến"
    ],
    season: "Quanh năm",
    storage: "Bảo quản rau trong ngăn mát; để tỏi ở nơi khô ráo, thoáng mát"
  },
  {
    id: "khoai-lang-tim",
    name: "Khoai Lang Tím",
    category: "Củ",
    price: 30000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1534983202424-2e0c90142961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjBzd2VldCUyMHBvdGF0byUyMGdyb3dpbmd8ZW58MXx8fHwxNzc1NjY0NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Khoai lang tím bở, ngọt, giàu anthocyanin",
    growingMethod: "Khoai lang tím được trồng trên luống cao, đất tơi xốp. Bón phân hữu cơ trước khi trồng. Thu hoạch sau 3-4 tháng khi lá bắt đầu vàng.",
    selectionCriteria: "Chọn củ khoai lang có màu tím đậm đều, vỏ nhẵn, không có vết nứt hay thối. Củ cứng chắc, nặng tay. Tránh chọn khoai có nhiều rễ phụ.",
    benefits: [
      "Giàu anthocyanin - chất chống oxy hóa mạnh",
      "Chứa nhiều chất xơ",
      "Kiểm soát đường huyết",
      "Tốt cho tim mạch và não bộ"
    ],
    season: "Quanh năm",
    storage: "Bảo quản nơi khô ráo, thoáng mát 2-4 tuần"
  },
  {
    id: "khoai-lang-vang",
    name: "Khoai Lang Vàng",
    category: "Củ",
    price: 30000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1744659749700-c4213f840355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBzd2VldCUyMHBvdGF0byUyMGhhcnZlc3QlMjBmYXJtfGVufDF8fHx8MTc3NTY2MjI4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Khoai lang vàng ngọt bùi, giàu beta-carotene",
    growingMethod: "Khoai lang vàng được trồng trên luống cao, đất tơi xốp. Bón phân hữu cơ trước khi trồng. Thu hoạch sau 3-4 tháng khi lá bắt đầu vàng.",
    selectionCriteria: "Chọn củ khoai lang có màu vàng cam đều, vỏ nhẵn, không có vết nứt hay thối. Củ cứng chắc, nặng tay. Tránh chọn khoai có nhiều rễ phụ hay vết sâu ăn.",
    benefits: [
      "Giàu beta-carotene và chất xơ",
      "Tốt cho tiêu hóa",
      "Kiểm soát đường huyết",
      "Tăng cường hệ miễn dịch"
    ],
    season: "Quanh năm",
    storage: "Bảo quản nơi khô ráo, thoáng mát 2-4 tuần"
  },
  {
    id: "khoai-mon",
    name: "Khoai Môn",
    category: "Củ",
    price: 40000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1706685137907-7cdbc2bb7e48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXJvJTIwcGxhbnQlMjBncm93aW5nJTIwZmFybSUyMGZpZWxkfGVufDF8fHx8MTc3NTY2NDc5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Khoai môn bở, béo, thơm ngon",
    growingMethod: "Khoai môn được trồng trong đất ẩm, giàu dinh dưỡng. Cần tưới nước đều đặn và bón phân hữu cơ. Thu hoạch sau 6-8 tháng.",
    selectionCriteria: "Chọn củ khoai môn cứng chắc, nặng tay, vỏ không bị thối hay nứt nẻ. Tránh chọn khoai có vết mềm hay có mùi lạ.",
    benefits: [
      "Giàu chất xơ và khoáng chất",
      "Hỗ trợ tiêu hóa tốt",
      "Cung cấp năng lượng lâu dài",
      "Tốt cho sức khỏe tim mạch"
    ],
    season: "Quanh năm",
    storage: "Bảo quản nơi khô ráo, thoáng mát 2-3 tuần"
  },
  {
    id: "khoai-so",
    name: "Khoai Sọ",
    category: "Củ",
    price: 35000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1740915143554-678d0f4ad338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqaWNhbWElMjByb290JTIwdmVnZXRhYmxlfGVufDF8fHx8MTc3NTY2MTU2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Khoai sọ trắng, giòn, ngọt thanh",
    growingMethod: "Khoai sọ được trồng trong đất ẩm ướt. Cần tưới nước thường xuyên và bón phân hữu cơ. Thu hoạch sau 5-7 tháng.",
    selectionCriteria: "Chọn củ khoai sọ có vỏ sạch, màu nâu nhạt, không có vết thối. Củ cứng chắc, nặng tay.",
    benefits: [
      "Giàu chất xơ",
      "Dễ tiêu hóa",
      "Cung cấp năng lượng",
      "Tốt cho sức khỏe"
    ],
    season: "Quanh năm",
    storage: "Bảo quản nơi khô ráo 2-3 tuần"
  },
  {
    id: "khoai-tay",
    name: "Khoai Tây",
    category: "Củ",
    price: 20000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1708007111804-0c7e95287e4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3RhdG8lMjBoYXJ2ZXN0JTIwZmFybSUyMGZpZWxkfGVufDF8fHx8MTc3NTY2NDc5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Khoai tây vàng, bở, giàu tinh bột",
    growingMethod: "Khoai tây được trồng trong đất tơi xốp, thoát nước tốt. Bón phân hữu cơ trước khi trồng. Thu hoạch sau 3-4 tháng khi lá khô.",
    selectionCriteria: "Chọn củ khoai tây cứng chắc, vỏ nhẵn, không có mầm xanh hay vết thối. Tránh chọn khoai có vỏ nhăn hay màu xanh.",
    benefits: [
      "Giàu vitamin C và kali",
      "Cung cấp năng lượng",
      "Tốt cho tiêu hóa",
      "Giàu chất chống oxy hóa"
    ],
    season: "Quanh năm",
    storage: "Bảo quản nơi tối, khô ráo 3-4 tuần"
  },
  {
    id: "muop",
    name: "Mướp",
    category: "Rau Ăn Quả",
    price: 30000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1759156632043-eab44e007e67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdWZmYSUyMGdvdXJkJTIwZ3Jvd2luZyUyMHZpbmV8ZW58MXx8fHwxNzc1NjY0Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Mướp xanh, giòn ngọt, mát",
    growingMethod: "Mướp được trồng trên giàn cao. Cây cần nhiều nước và ánh sáng. Thu hoạch thường xuyên khi quả còn non.",
    selectionCriteria: "Chọn trái mướp non, xanh tươi, thẳng, không có vết dập. Quả cứng, khi gõ có tiếng đặc.",
    benefits: [
      "Giàu nước, giải nhiệt",
      "Ít calo, tốt cho giảm cân",
      "Giàu vitamin và khoáng chất",
      "Hỗ trợ tiêu hóa"
    ],
    season: "Quanh năm",
    storage: "Bảo quản trong ngăn mát tủ lạnh 5-7 ngày"
  },
  {
    id: "ngo-nep-vang-co-bap",
    name: "Ngô Nếp Vàng",
    category: "Ngũ Cốc",
    price: 30000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1708955029891-98738cd0361f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2VldCUyMGNvcm4lMjBncm93aW5nJTIwZmllbGQlMjBmYXJtfGVufDF8fHx8MTc3NTY2NDc5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Ngô nếp vàng ngọt thơm, hạt chắc (30.000đ - 80.000đ/kg tùy loại)",
    growingMethod: "Ngô nếp vàng được trồng trong đất tơi xốp, giàu dinh dưỡng. Cần nhiều ánh sáng và nước. Thu hoạch khi râu ngô chuyển màu nâu.",
    selectionCriteria: "Chọn bắp ngô có vỏ xanh tươi, râu còn ẩm. Hạt ngô căng mọng, màu vàng đều. Khi bóc vỏ có mùi thơm ngọt.",
    benefits: [
      "Giàu chất xơ và vitamin B",
      "Cung cấp năng lượng tốt",
      "Hỗ trợ tiêu hóa",
      "Ngọt tự nhiên, thơm bùi"
    ],
    season: "Quanh năm",
    storage: "Bảo quản trong ngăn mát tủ lạnh 5-7 ngày"
  },
  {
    id: "qua-bau",
    name: "Quả Bầu",
    category: "Rau Ăn Quả",
    price: 30000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1670005484897-3bdfea6c5c12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxhYmFzaCUyMGdvdXJkJTIwZ3Jvd2luZyUyMHZpbmV8ZW58MXx8fHwxNzc1NjY0Nzk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Quả bầu xanh, thịt trắng, mềm ngọt, giải nhiệt",
    growingMethod: "Bầu được trồng trên giàn cao, đảm bảo quả thẳng và sạch. Cần nhiều nước và ánh sáng. Thu hoạch khi quả còn non để thịt mềm ngọt.",
    selectionCriteria: "Chọn trái bầu có màu xanh nhạt đều, vỏ mỏng, không có vết dập. Quả nặng tay, khi gõ có tiếng đục. Tránh chọn bầu quá già có vỏ cứng.",
    benefits: [
      "Giàu nước, giải nhiệt tốt",
      "Ít calo, phù hợp cho người ăn kiêng",
      "Hỗ trợ tiêu hóa",
      "Tốt cho hệ thận và bàng quang"
    ],
    season: "Quanh năm",
    storage: "Bảo quản nơi thoáng mát 1-2 tuần"
  },
  {
    id: "qua-dua",
    name: "Quả Dứa (Thơm)",
    category: "Hoa Quả",
    price: 25000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1760851132037-4e437179240c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5lYXBwbGUlMjBwbGFudCUyMGZhcm0lMjBncm93aW5nfGVufDF8fHx8MTc3NTY2MjI5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Dứa ngọt thơm, giàu vitamin C và enzyme bromelain",
    growingMethod: "Dứa được trồng trong đất thoát nước tốt, cần ít nư���c. Thu hoạch khi quả chín vàng tự nhiên, có mùi thơm đặc trưng.",
    selectionCriteria: "Chọn quả dứa có màu vàng cam đều, lá xanh tươi. Quả nặng tay, có mùi thơm ngọt. Khi ấn nhẹ vào quả hơi mềm là dấu hiệu chín.",
    benefits: [
      "Giàu vitamin C và enzyme tiêu hóa",
      "Chống viêm và giảm phù nề",
      "Tăng cường hệ miễn dịch",
      "Hỗ trợ tiêu hóa protein"
    ],
    season: "Quanh năm",
    storage: "Để ngoài nhiệt độ phòng cho chín, sau đó dùng ngay"
  },
  {
    id: "rau-cai-xanh",
    name: "Rau Cải Xanh",
    category: "Rau Ăn Lá",
    price: 30000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1772587982334-136c6e5f6820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2slMjBjaG95JTIwZ3Jvd2luZyUyMGZhcm0lMjBnYXJkZW58ZW58MXx8fHwxNzc1NjY0Mzc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Rau cải xanh tươi, giòn ngọt, giàu vitamin",
    growingMethod: "Rau cải xanh được trồng trong môi trường thoáng mát, đất giàu dinh dưỡng. Thu hoạch sau 25-30 ngày. Sử dụng phân hữu cơ và phun thuốc sinh học.",
    selectionCriteria: "Chọn cây cải có lá xanh tươi, bẹ dày giòn. Tránh chọn cây có lá vàng, bị sâu ăn hay quá già.",
    benefits: [
      "Giàu vitamin C, K và folate",
      "Chứa nhiều canxi tốt cho xương",
      "Hỗ trợ tiêu hóa",
      "Chống oxy hóa"
    ],
    season: "Quanh năm",
    storage: "Bảo quản trong ngăn mát tủ lạnh 5-7 ngày"
  },
  {
    id: "rau-cai-bo-xoi",
    name: "Rau Cải Bó Xôi (Spinach)",
    category: "Rau Ăn Lá",
    price: 45000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1591831616582-22bd56b70297?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGluYWNoJTIwZ3Jvd2luZyUyMGZhcm0lMjBnYXJkZW58ZW58MXx8fHwxNzc1NjY0NzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Rau cải bó xôi xanh đậm, mềm mịn, giàu sắt",
    growingMethod: "Cải bó xôi được trồng trong điều kiện mát mẻ, đất giàu dinh dưỡng. Thu hoạch khi lá đạt kích thước phù hợp, trước khi ra hoa.",
    selectionCriteria: "Chọn những lá cải bó xôi xanh đậm, tươi mới, không bị vàng hay úa. Lá mềm, không bị dập nát. Tránh chọn rau đã ra hoa.",
    benefits: [
      "Giàu sắt, vitamin A và K",
      "Phòng ngừa thiếu máu",
      "Tốt cho xương khớp và mắt",
      "Chống oxy hóa mạnh"
    ],
    season: "Mùa đông - xuân",
    storage: "Bảo quản trong ngăn mát tủ lạnh 3-5 ngày"
  },
  {
    id: "rau-cai-thao",
    name: "Rau Cải Thảo (Cải Bắp Thảo)",
    category: "Rau Ăn Lá",
    price: 20000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1719505503702-59b61de20907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXBhJTIwY2FiYmFnZSUyMGNoaW5lc2UlMjBncm93aW5nJTIwZmllbGR8ZW58MXx8fHwxNzc1NjY0ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Cải thảo lá dài, mềm ngọt, dễ chế biến",
    growingMethod: "Cải thảo được trồng trong điều kiện mát mẻ, đất giàu dinh dưỡng. Cần tưới nước đều đặn và bón phân hữu cơ. Thu hoạch sau 40-50 ngày.",
    selectionCriteria: "Chọn bắp cải thảo có lá xanh vàng nhạt, chắc tay, không rời rạc. Lá tươi, không bị héo hay thối. Tránh chọn bắp có lá ngoài bị dập nhiều.",
    benefits: [
      "Giàu vitamin C và chất xơ",
      "Ít calo, tốt cho giảm cân",
      "Hỗ trợ tiêu hóa",
      "Chống viêm tự nhiên"
    ],
    season: "Mùa đông - xuân",
    storage: "Bảo quản trong ngăn mát tủ lạnh 1-2 tuần"
  },
  {
    id: "rau-cai-chip",
    name: "Rau Cải Chíp (Cải Củ)",
    category: "Rau Ăn Lá",
    price: 30000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1772701488768-4ddd628abc84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXN0YXJkJTIwZ3JlZW5zJTIwZ3Jvd2luZyUyMGZhcm18ZW58MXx8fHwxNzc1NjY0NzgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Cải chíp xanh tươi, hơi cay, giàu dinh dưỡng",
    growingMethod: "Cải chíp được trồng trong đất tơi xốp, giàu dinh dưỡng. Thu hoạch khi lá và củ đạt kích thước phù hợp.",
    selectionCriteria: "Chọn cây cải chíp có lá xanh tươi, củ tròn đều. Lá không bị vàng hay sâu ăn. Củ cứng chắc, không bị thối.",
    benefits: [
      "Giàu vitamin C và khoáng chất",
      "Hỗ trợ tiêu hóa",
      "Chống viêm",
      "Tốt cho hệ hô hấp"
    ],
    season: "Quanh năm",
    storage: "Bảo quản trong ngăn mát tủ lạnh 5-7 ngày"
  },
  {
    id: "rau-day",
    name: "Rau Đay",
    category: "Rau Ăn Lá",
    price: 30000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1604160450313-83df5b9b5e4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdXRlJTIwbGVhdmVzJTIwbWFsbG93JTIwZ3Jvd2luZ3xlbnwxfHx8fDE3NzU2NjQ3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Rau đay xanh tươi, nhớt, giàu canxi",
    growingMethod: "Rau đay được trồng trên luống cao hoặc giàn. Cây sinh trưởng nhanh, thu hoạch thường xuyên. Tưới nước đều đặn và bón phân hữu cơ.",
    selectionCriteria: "Chọn cành rau đay có lá xanh tươi, thân non mềm. Tránh chọn rau có lá vàng hay thân già cứng.",
    benefits: [
      "Giàu canxi và sắt",
      "Tốt cho xương và răng",
      "Hỗ trợ tiêu hóa",
      "Thanh nhiệt, mát cơ thể"
    ],
    season: "Quanh năm",
    storage: "Bảo quản trong ngăn mát tủ lạnh 3-5 ngày"
  },
  {
    id: "rau-den",
    name: "Rau Dền",
    category: "Rau Ăn Lá",
    price: 25000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1470833430380-d0652aa9cd37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWFyYW50aCUyMHZlZ2V0YWJsZSUyMGdyb3dpbmclMjBmYXJtfGVufDF8fHx8MTc3NTY2NDc4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Rau dền lá xanh hoặc đỏ, mềm mịn, giàu sắt",
    growingMethod: "Rau dền được trồng trên luống cao hoặc trong chậu, đất tơi xốp giàu dinh dưỡng. Cây sinh trưởng rất nhanh, thường thu hoạch sau 20-25 ngày.",
    selectionCriteria: "Chọn những cây rau dền có lá mềm, màu xanh hoặc đỏ tươi đều. Thân non, mềm, d bẻ, chưa ra hoa.",
    benefits: [
      "Giàu sắt và canxi",
      "Chứa nhiều vitamin A, C, K",
      "Phòng ngừa thiếu máu",
      "Hỗ trợ tiêu hóa"
    ],
    season: "Quanh năm",
    storage: "Bảo quản trong ngăn mát tủ lạnh 3-5 ngày"
  },
  {
    id: "rau-mong-toi",
    name: "Rau Mồng Tơi",
    category: "Rau Ăn Lá",
    price: 25000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1750151045736-12227a1b34bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxhYmFyJTIwc3BpbmFjaCUyMHZpbmUlMjBncm93aW5nfGVufDF8fHx8MTc3NTY2NDc4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Rau mồng tơi xanh, nhớt, giải nhiệt tốt",
    growingMethod: "Rau mồng tơi được trồng trên luống hoặc giàn. Cây sinh trưởng nhanh, thích hợp với thời tiết nóng ẩm. Thu hoạch thường xuyên.",
    selectionCriteria: "Chọn cành rau mồng tơi có lá xanh tươi, dày, mềm mại. Tránh chọn rau có lá vàng, khô hay sâu ăn.",
    benefits: [
      "Giàu vitamin A và C",
      "Giải nhiệt, mát gan",
      "Hỗ trợ tiêu hóa",
      "Tốt cho làn da"
    ],
    season: "Quanh năm",
    storage: "Bảo quản trong ngăn mát tủ lạnh 3-5 ngày"
  },
  {
    id: "rau-muong",
    name: "Rau Muống",
    category: "Rau Ăn Lá",
    price: 15000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1676717775419-e0f29fac1c93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHNwaW5hY2glMjBtb3JuaW5nJTIwZ2xvcnklMjBncm93aW5nfGVufDF8fHx8MTc3NTY2NDc4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Rau muống xanh tươi, giòn ngọt, giàu dinh dưỡng",
    growingMethod: "Rau muống được trồng bằng phương pháp thủy canh hoặc trồng trên giàn, đảm bảo không tiếp xúc với đất bẩn. Nước tưới được lọc sạch và bổ sung dinh dưỡng cân đối.",
    selectionCriteria: "Chọn những cành rau muống có lá xanh đậm, tươi mới không úa vàng. Thân non, giòn, dễ bẻ gãy, không già.",
    benefits: [
      "Giàu sắt, phòng ngừa thiếu máu",
      "Chứa nhiều vitamin A, C, K",
      "Hỗ trợ giải độc gan",
      "Tốt cho tiêu hóa"
    ],
    season: "Quanh năm",
    storage: "Bảo quản trong ngăn mát tủ lạnh 3-5 ngày"
  },
  {
    id: "rau-ngot",
    name: "Rau Ngót",
    category: "Rau Ăn Lá",
    price: 25000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1571581280132-23b60a0a8e3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXR0ZXIlMjBncmVlbnMlMjB2ZWdldGFibGUlMjBncm93aW5nfGVufDF8fHx8MTc3NTY2NDc4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Rau ngót xanh, nhớt, mát gan, giải nhiệt",
    growingMethod: "Rau ngót được trồng trên giàn hoặc luống. Cây sinh trưởng tốt trong điều kiện ấm áp, ẩm ướt. Thu hoạch ngọn non thường xuyên.",
    selectionCriteria: "Chọn ngọn rau ngót có lá xanh tươi, non, mềm. Tránh chọn rau có lá vàng, già hay sâu ăn.",
    benefits: [
      "Giải nhiệt, mát gan tốt",
      "Hỗ trợ tiêu hóa",
      "Tốt cho phụ nữ sau sinh",
      "Giàu vitamin và khoáng chất"
    ],
    season: "Quanh năm",
    storage: "Bảo quản trong ngăn mát tủ lạnh 3-5 ngày"
  },
  {
    id: "su-hao",
    name: "Su Hào",
    category: "Củ",
    price: 30000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1599776764980-325e8e7b108f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb2hscmFiaSUyMHBsYW50JTIwZ3Jvd2luZyUyMGdhcmRlbnxlbnwxfHx8fDE3NzU2NjIyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Su hào giòn ngọt, thanh mát",
    growingMethod: "Su hào được trồng trong đất tơi xốp. Cây cần nhiều nước và dinh dưỡng. Thu hoạch sau 50-60 ngày.",
    selectionCriteria: "Chọn củ su hào có màu xanh nhạt, vỏ nhẵn, không nứt nẻ. Củ cứng chắc, nặng tay.",
    benefits: [
      "Giàu vitamin C và chất xơ",
      "Hỗ trợ tiêu hóa",
      "Ít calo, tốt cho giảm cân",
      "Tăng cường miễn dịch"
    ],
    season: "Mùa đông - xuân",
    storage: "Bảo quản trong ngăn mát tủ lạnh 2-3 tuần"
  },
  {
    id: "su-su",
    name: "Su Su",
    category: "Rau Ăn Quả",
    price: 25000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1763341982454-bdccf6a80915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF5b3RlJTIwc3F1YXNoJTIwdmVnZXRhYmxlfGVufDF8fHx8MTc3NTY2MTU2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Su su xanh, giòn, nhạt, dễ chế biến",
    growingMethod: "Su su được trồng trên giàn cao. Cây cần nhiều nước và ánh sáng. Thu hoạch khi quả còn non.",
    selectionCriteria: "Chọn trái su su có màu xanh nhạt, vỏ nhẵn, không có gai cứng. Quả cứng, nặng tay.",
    benefits: [
      "Ít calo, tốt cho giảm cân",
      "Giàu vitamin C",
      "Hỗ trợ tiêu hóa",
      "Giải nhiệt, mát cơ thể"
    ],
    season: "Quanh năm",
    storage: "Bảo quản trong ngăn mát tủ lạnh 1-2 tuần"
  },
  {
    id: "sup-lo",
    name: "Súp Lơ (Trắng/Xanh)",
    category: "Rau Ăn Hoa",
    price: 50000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1705616458327-1833d36b7114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9jY29saSUyMGNhdWxpZmxvd2VyJTIwZ3Jvd2luZyUyMGZhcm0lMjBmcmVzaHxlbnwxfHx8fDE3NzU2NjUwNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Súp lơ trắng hoặc xanh, giòn ngọt, giàu dinh dưỡng",
    growingMethod: "Súp lơ được trồng trong điều kiện khí hậu mát mẻ. Cần bón phân hữu cơ đầy đủ và tưới nước đều đặn. Bao bọc hoa khi bắt đầu hình thành để giữ màu trắng.",
    selectionCriteria: "Chọn bông súp lơ chắc, nặng tay, màu trắng hoặc xanh đều. Bông phải chặt, không bị lỏng lẻo hay có vết vàng.",
    benefits: [
      "Giàu vitamin C, K và chất xơ",
      "Chống oxy hóa mạnh",
      "Hỗ trợ giải độc gan",
      "Tốt cho tim mạch"
    ],
    season: "Mùa đông - xuân",
    storage: "Bảo quản trong ngăn mát tủ lạnh 1-2 tuần"
  },
  {
    id: "cam-sanh",
    name: "Cam Sành",
    category: "Hoa Quả",
    price: 30000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1609213129856-ac2379355bb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjB0cmVlJTIwZnJ1aXQlMjBmYXJtfGVufDF8fHx8MTc3NTY2MjI5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Cam sành ngọt chua vừa, giàu vitamin C",
    growingMethod: "Cam sành được trồng trong đất tơi xốp, có độ pH phù hợp. Cần chăm sóc kỹ lưỡng, tưới nước đều đặn và bón phân hữu cơ. Thu hoạch khi quả chín vàng tự nhiên.",
    selectionCriteria: "Chọn quả cam có màu vàng cam đều, vỏ mỏng, nặng tay. Khi ấn nhẹ quả hơi mềm là dấu hiệu chín. Tránh chọn cam có vỏ dày, nhăn hay có vết thối.",
    benefits: [
      "Giàu vitamin C tăng cường miễn dịch",
      "Chống oxy hóa và chống lo hóa",
      "Tốt cho da và mắt",
      "Hỗ trợ tiêu hóa"
    ],
    season: "Tháng 10 - tháng 3",
    storage: "Bảo quản nơi thoáng mát hoặc ngăn mát tủ lạnh 1-2 tuần"
  },
  {
    id: "bot-san-day",
    name: "Bột Sắn Dây Nhà Làm",
    category: "Sản Phẩm Chế Biến",
    price: 200000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1586137712370-9b450509c587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnJvd3Jvb3QlMjBzdGFyY2glMjBwb3dkZXIlMjB3aGl0ZXxlbnwxfHx8fDE3NzU2NjE1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Bột sắn dây nguyên chất 100%, sản xuất thủ công, không chất bảo quản",
    growingMethod: "Sắn dây (Pueraria montana) được trồng trong đất rừng tự nhiên, không sử dụng phân bón hóa học hay thuốc trừ sâu. Củ được thu hoạch sau 2-3 năm khi đạt độ chín tối ưu và hàm lượng tinh bột cao nhất. Quy trình chế biến hoàn toàn thủ công: rửa sạch, gọt vỏ, nghiền nhỏ, lọc lấy tinh bột, lắng cặn nhiều lần để được bột tinh khiết, sau đó phơi khô tự nhiên dưới ánh nắng mặt trời. Toàn bộ quy trình không sử dụng hóa chất tẩy trắng hay chất bảo quản.",
    selectionCriteria: "Bột sắn dây chất lượng cao có màu trắng ngà tự nhiên, không quá trắng bất thường (dấu hiệu có thể bị tẩy trắng). Bột mịn, mềm, không vón cục, có mùi thơm nhẹ đặc trưng của sắn dây. Khi hòa với nước lạnh, bột tan đều không vón, khi nấu chín có độ trong, không đục. Sản phẩm được đóng gói kín, có thông tin rõ ràng về nguồn gốc xuất xứ, ngày sản xuất và hạn sử dụng.",
    benefits: [
      "Giàu flavonoid và isoflavone - phytoestrogen tự nhiên tốt cho sức khỏe",
      "Hỗ trợ cân bằng nội tiết tố nữ, giảm triệu chứng mãn kinh",
      "Bổ dưỡng, tăng cường sức đề kháng, tốt cho người ốm dậy",
      "Dễ tiêu hóa, dễ hấp thu, phù hợp cho trẻ nhỏ và người già",
      "Không chứa gluten, phù hợp với người dị ứng gluten hoặc ăn kiêng",
      "Làm mát cơ thể, giải nhiệt, thanh lọc gan thận"
    ],
    season: "Quanh năm",
    storage: "Bảo quản nơi khô ráo, thoáng mát, tránh ẩm mốc và ánh sáng trực tiếp. Sau khi mở bao bì nên dùng hết trong 3-6 tháng để đảm bảo chất lượng tốt nhất. Có thể bảo quản trong hộp kín hoặc túi zip để giữ độ tươi."
  },
  {
    id: "hanh-tay",
    name: "Hành Tây",
    category: "Củ",
    price: 25000,
    unit: "kg",
    image: "/src/imports/h_nh_t_y.jfif",
    description: "Hành tây tươi ngọt, thơm dịu, dùng xào, nấu canh và làm gia vị",
    growingMethod: "Hành tây được trồng trên đất tơi xốp, thoát nước tốt. Bón phân hữu cơ trước khi trồng và tưới nước đều đặn. Thu hoạch sau 3-4 tháng khi lá bắt đầu đổ xuống và vỏ ngoài chuyển màu đặc trưng. Phơi khô nhẹ trước khi thu hoạch để vỏ ngoài khô ráo.",
    selectionCriteria: "Chọn củ hành tây cứng chắc, nặng tay, vỏ khô giòn không ẩm ướt. Vỏ ngoài màu vàng hoặc tím đều, không có vết mốc hay thối. Tránh chọn hành đã có mầm xanh hoặc vỏ nhăn mềm.",
    benefits: [
      "Giàu quercetin - chất chống oxy hóa mạnh",
      "Tốt cho tim mạch và huyết áp",
      "Kháng khuẩn và tăng cường miễn dịch",
      "Hỗ trợ kiểm soát đường huyết"
    ],
    season: "Quanh năm",
    storage: "Bảo quản nơi khô ráo, thoáng mát 2-3 tháng"
  },
  {
    id: "me",
    name: "Me Chua (Quả Me)",
    category: "Hoa Quả",
    price: 40000,
    unit: "kg",
    image: "/src/imports/me.jfif",
    description: "Me chua tươi, thịt ngọt chua tự nhiên, dùng nấu canh chua và làm gia vị",
    growingMethod: "Cây me được trồng trong vườn lâu năm, không sử dụng phân bón hóa học. Thu hoạch quả me già khi vỏ ngoài chuyển nâu, thịt me có màu nâu đỏ đặc trưng và độ ngọt chua cân bằng tự nhiên. Cây me trồng hoàn toàn tự nhiên, ít cần chăm sóc.",
    selectionCriteria: "Chọn quả me vỏ nâu khô, thịt mềm dẻo, có màu nâu đỏ đậm. Quả chín có mùi thơm chua ngọt đặc trưng. Tránh chọn me có vỏ bị mốc, thịt khô quá hoặc có mùi lạ.",
    benefits: [
      "Giàu axit tartaric tốt cho tiêu hóa",
      "Chứa nhiều vitamin C và B",
      "Chống oxy hóa tự nhiên",
      "Hỗ trợ giải nhiệt và làm mát cơ thể"
    ],
    season: "Tháng 2 - tháng 5",
    storage: "Bảo quản nơi khô ráo, thoáng mát 2-4 tuần; bảo quản trong tủ lạnh lên đến 2 tháng"
  },
  {
    id: "doc-mung",
    name: "Dọc Mùng",
    category: "Rau Ăn Lá",
    price: 20000,
    unit: "kg",
    image: "/src/imports/dm.jfif",
    description: "Dọc mùng xanh tươi, giòn ngọt, dùng nấu canh chua và lẩu",
    growingMethod: "Dọc mùng được trồng ven ao hồ hoặc luống ẩm, đất giàu dinh dưỡng. Cây sinh trưởng nhanh trong môi trường ẩm, thu hoạch thân non sau 2-3 tháng. Không sử dụng thuốc hóa học, chỉ bón phân hữu cơ.",
    selectionCriteria: "Chọn thân dọc mùng còn tươi xanh, thân giòn chắc, không bị héo hay úng. Lát cắt trắng ngà, không có vết thâm. Tránh chọn thân già xơ hay bị dập nát.",
    benefits: [
      "Giàu canxi và khoáng chất",
      "Hỗ trợ tiêu hóa và mát gan",
      "Ít calo, phù hợp người ăn kiêng",
      "Giải nhiệt, thanh mát cơ thể"
    ],
    season: "Quanh năm",
    storage: "Bảo quản trong ngăn mát tủ lạnh 3-5 ngày"
  },
  {
    id: "can-sanh",
    name: "Cần Sành (Cần Tây)",
    category: "Rau Ăn Lá",
    price: 30000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1615281775285-219509089dc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxlcnklMjBncm93aW5nJTIwZmFybSUyMGZpZWxkfGVufDF8fHx8MTc3NTY2NDc4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Cần sành thơm, giòn, dùng làm gia vị và rau ăn",
    growingMethod: "Cần sành được trồng trong ất ẩm, giàu dinh dưỡng. Cần tưới nước đều đặn và bón phân hữu cơ. Thu hoạch sau 3-4 tháng.",
    selectionCriteria: "Chọn cây cần có thân xanh tươi, giòn, không già. Lá xanh đậm, thơm mạnh. Tránh chọn cần có thân héo, vàng.",
    benefits: [
      "Giàu vitamin K và folate",
      "Hỗ trợ tiêu hóa",
      "Chống viêm",
      "Tốt cho huyết áp"
    ],
    season: "Quanh năm",
    storage: "Bảo quản trong ngăn mát tủ lạnh 1-2 tuần"
  },
  {
    id: "tom-tuoi",
    name: "Tôm Tươi",
    category: "Tôm",
    unit: "kg",
    image: tomImage,
    description: "Tôm tươi, thịt chắc ngọt, phù hợp cho nhiều món ăn gia đình",
    growingMethod: "Sản phẩm được lựa chọn theo nguồn hàng và tình trạng thực tế trong ngày.",
    selectionCriteria: "Chọn tôm còn nguyên vẹn, thân chắc, có mùi tự nhiên; kiểm tra độ tươi khi nhận hàng.",
    benefits: ["Thực phẩm giàu đạm", "Thịt ngọt, dễ chế biến", "Phù hợp với món hấp, rang và nấu canh"],
    season: "Tùy nguồn hàng",
    storage: "Bảo quản lạnh; nếu chưa dùng ngay, cấp đông và sử dụng sớm sau khi rã đông."
  },
  {
    id: "cua-tuoi",
    name: "Cua Tươi",
    category: "Cua",
    unit: "kg",
    image: cuaImage,
    description: "Cua tươi chắc thịt, thích hợp hấp, nấu canh hoặc chế biến món ăn gia đình",
    growingMethod: "Sản phẩm được lựa chọn theo nguồn hàng và tình trạng thực tế trong ngày.",
    selectionCriteria: "Chọn cua còn nguyên vẹn, chắc tay, có mùi tự nhiên; kiểm tra tình trạng cua khi nhận hàng.",
    benefits: ["Thực phẩm giàu đạm", "Có thể chế biến thành nhiều món", "Thích hợp cho bữa cơm gia đình"],
    season: "Tùy nguồn hàng",
    storage: "Giữ lạnh và chế biến sớm; không để hải sản tươi ở nhiệt độ phòng lâu."
  },
  {
    id: "ngao-so-oc",
    name: "Ngao, Sò, Ốc",
    category: "Ngao Sò Ốc",
    unit: "kg",
    image: ngaoSoOcImage,
    description: "Các loại ngao, sò và ốc tươi ngon, dùng hấp, nấu canh hoặc xào",
    growingMethod: "Sản phẩm được lựa chọn theo nguồn hàng và tình trạng thực tế trong ngày.",
    selectionCriteria: "Chọn con nguyên vẹn, có mùi tự nhiên; loại bỏ những con có dấu hiệu bất thường trước khi chế biến.",
    benefits: ["Đa dạng lựa chọn cho bữa ăn", "Dễ kết hợp với nhiều cách chế biến", "Phù hợp các món hấp, nấu và xào"],
    season: "Tùy nguồn hàng",
    storage: "Giữ lạnh và chế biến sớm; rửa sạch và kiểm tra kỹ trước khi chế biến."
  },
  {
    id: "ca-nuoc-ngot",
    name: "Cá Nước Ngọt",
    category: "Cá Nước Ngọt",
    unit: "kg",
    image: caNuocNgotImage,
    description: "Cá nước ngọt tươi, thịt thơm, phù hợp kho, chiên hoặc nấu canh",
    growingMethod: "Sản phẩm được lựa chọn theo nguồn hàng và tình trạng thực tế trong ngày.",
    selectionCriteria: "Chọn cá có mắt trong, mang đỏ tươi, thân chắc và mùi tự nhiên; kiểm tra độ tươi khi nhận hàng.",
    benefits: ["Thực phẩm giàu đạm", "Có thể chế biến thành nhiều món", "Phù hợp cho bữa ăn hàng ngày"],
    season: "Tùy nguồn hàng",
    storage: "Bảo quản lạnh và chế biến sớm; cấp đông nếu cần bảo quản lâu hơn."
  },
  {
    id: "ca-bien",
    name: "Cá Biển",
    category: "Cá Biển",
    unit: "kg",
    image: caNuocManImage,
    description: "Cá biển tươi, thịt thơm ngon, thích hợp hấp, chiên, nướng hoặc nấu canh",
    growingMethod: "Sản phẩm được lựa chọn theo nguồn hàng và tình trạng thực tế trong ngày.",
    selectionCriteria: "Chọn cá có mắt trong, mang đỏ tươi, thân chắc và mùi tự nhiên; kiểm tra độ tươi khi nhận hàng.",
    benefits: ["Thực phẩm giàu đạm", "Có thể chế biến thành nhiều món", "Thích hợp cho bữa cơm gia đình"],
    season: "Tùy nguồn hàng",
    storage: "Bảo quản lạnh và chế biến sớm; cấp đông nếu cần bảo quản lâu hơn."
  },
  {
    id: "thit-lon",
    name: "Thịt Lợn Tươi",
    category: "Thịt Lợn",
    unit: "kg",
    image: thitLonImage,
    description: "Thịt lợn tươi, phù hợp chế biến các món kho, luộc, rang và xào",
    growingMethod: "Sản phẩm được lựa chọn theo nguồn hàng và tình trạng thực tế trong ngày.",
    selectionCriteria: "Chọn thịt có màu sắc tự nhiên, bề mặt khô ráo, độ đàn hồi tốt và không có mùi lạ.",
    benefits: ["Thực phẩm giàu đạm", "Đa dạng phần thịt và cách chế biến", "Thích hợp cho bữa ăn gia đình"],
    season: "Có hàng theo nguồn cung",
    storage: "Bảo quản lạnh và chế biến sớm; cấp đông nếu cần bảo quản lâu hơn."
  },
  {
    id: "thit-bo",
    name: "Thịt Bò Tươi",
    category: "Thịt Bò",
    unit: "kg",
    image: thitBoImage,
    description: "Thịt bò tươi, phù hợp chế biến món xào, nướng, hầm hoặc nấu canh",
    growingMethod: "Sản phẩm được lựa chọn theo nguồn hàng và tình trạng thực tế trong ngày.",
    selectionCriteria: "Chọn thịt có màu sắc tự nhiên, thớ thịt săn, bề mặt khô ráo và không có mùi lạ.",
    benefits: ["Thực phẩm giàu đạm", "Đa dạng phần thịt và cách chế biến", "Thích hợp cho bữa cơm gia đình"],
    season: "Có hàng theo nguồn cung",
    storage: "Bảo quản lạnh và chế biến sớm; cấp đông nếu cần bảo quản lâu hơn."
  },
];