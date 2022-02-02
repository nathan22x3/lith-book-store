export interface Book {
  id: string;
  title: string;
  cover: string;
  author: string;
  genre: string;
  rating: { star: number; count: number };
  price: number;
  discountPercent: number;
  overview: string;
  description: {
    length: number;
    audible: string;
    wordWise: string;
    screenReader: string;
    enhancedTypesetting: string;
  };
}

export const LIBRARY_BOOKS: Book[] = [
  {
    id: 'f67be7d7-d44d-4a5e-8351-298521b95aaa',
    title: 'DevUP',
    cover: 'https://cdn0.fahasa.com/media/catalog/product/d/e/devup_1.jpg',
    author: 'Nguyễn Hiển',
    genre: 'Life Skills',
    rating: { star: 4.7, count: 181 },
    price: 129000,
    discountPercent: 0,
    overview:
      'Thế giới đang đối mặt với những thay đổi chưa từng có. Những gì chúng ta chắc chắn vào 5 năm, hoặc 2 năm trước, giờ đây đang bị thử thách. Từ “cơn bão” của Trí tuệ nhân tạo, những chức năng, ứng dụng mới của các ngôn ngữ lập trình cho đến sự xuất hiện của đa dạng nền tảng công nghệ.',
    description: {
      length: 204,
      audible: 'Not Available',
      wordWise: 'Disable',
      screenReader: 'Not Supported',
      enhancedTypesetting: 'Disable',
    },
  },
  {
    id: 'ec663c96-b022-4331-9cbb-a5075ed78066',
    title: 'Nghệ Thuật Ẩn Mình',
    cover:
      'https://salt.tikicdn.com/cache/w1200/ts/product/47/4b/45/6386ab1926fd23aad2b93d8f83429769.jpg',
    author: 'Kevin Mitnick',
    genre: 'Life Skills',
    rating: { star: 4.9, count: 136 },
    price: 229000,
    discountPercent: 35,
    overview:
      'Trong cuốn sách này, Kevin Mitnick, hacker nổi tiếng nhất thế giới, sẽ hướng dẫn các biện pháp dễ thực hiện (và ít tốn kém) giúp bạn – trên cương vị một cá nhân bình thường và một người tiêu dùng – có thể giấu các thông tin nhận dạng cá nhân của mình trong kỷ nguyên của Dữ liệu Lớn, vốn không thiếu những scandal quy mô quốc tế về những vụ vi phạm dữ liệu người dùng thường xuyên xuất hiện trên các mặt báo. Mitnick bàn đến nhiều phương tiện mà chúng ta sử dụng hằng ngày – từ điện thoại, email, cho đến tin nhắn,… – chỉ ra những lỗ hổng mà người khác có thể lợi dụng để giành quyền kiểm soát các dữ liệu của chúng ta, đồng thời đưa ra những giải pháp phòng chống cụ thể và hữu hiệu mà bất kỳ ai cũng có thể thực hiện để tự bảo vệ mình.',
    description: {
      length: 344,
      audible: 'Not Available',
      wordWise: 'Disable',
      screenReader: 'Not Supported',
      enhancedTypesetting: 'Disable',
    },
  },
  {
    id: '6b04dc16-4641-4791-a92c-8e6c1b36a93c',
    title: 'Đắc Nhân Tâm',
    cover:
      'https://book01.khotrithucso.com/products/book/book/B00001/7833b2b9/3000001/4817a24e/img/1/image-bookjpg-1.jpg',
    author: 'Dale Carnegie',
    genre: 'Life Skills',
    rating: { star: 4.9, count: 136 },
    price: 86000,
    discountPercent: 15,
    overview:
      'Đắc nhân tâm của Dale Carnegie là quyển sách duy nhất về thể loại self-help liên tục đứng đầu danh mục sách bán chạy nhất (best-selling Books) do báo The New York Times bình chọn suốt 10 năm liền. Được xuất bản năm 1936, với số lượng bán ra hơn 15 triệu bản, tính đến nay, sách đã được dịch ra ở hầu hết các ngôn ngữ, trong đó có cả Việt Nam, và đã nhận được sự đón tiếp nhiệt tình của đọc giả ở hầu hết các quốc gia.',
    description: {
      length: 320,
      audible: 'Not Available',
      wordWise: 'Disable',
      screenReader: 'Not Supported',
      enhancedTypesetting: 'Disable',
    },
  },
];
