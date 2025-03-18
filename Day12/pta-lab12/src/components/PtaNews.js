import React from 'react';

const PtaNews = () => {
  // Sample news articles with images and links
  const newsArticles = [
    {
      id: 1,
      title: 'BỘ SƯU TẬP VEST ADAM 2025',
      content: 'Bộ sưu tầm vest đẹp và bán chạy nhất 2025 tôn sự lịch lãm và quý ông...',
      image: '	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP3RY1dLqVilysdp-xwchZ2NWzD-rrA-YAnA&s',
      link: 'https://adamstorevn.com/collections/bst-vest-cuoi-adam',
    },
    {
      id: 2,
      title: 'CÁC CẶP ĐÔI NÓI GÌ SAU KHI TRẢI NGHIỆM SUIT CƯỚI CỦA ADAM STORE?',
      content: 'Suit Cưới Adam Store.Lựa Chọn Hoàn Hảo Cho Ngày Trọng Đại...',
      image: 'https://file.hstatic.net/1000333436/file/hi-trai-nghiem-suit-cuoi-adam-store-1_260aa68053be43be98ac0638d678fda5_grande.jpg',
      link: 'https://adamstorevn.com/blogs/tin-tuc-moi/cac-cap-doi-noi-gi-sau-khi-trai-nghiem-suit-cuoi-cua-adam-store',
    },
    {
      id: 3,
      title: 'SOOBIN HOÀNG SƠN - HÌNH MẪU QUÝ ÔNG HIỆN ĐẠI',
      content: 'Nhắc đến Soobin Hoàng Sơn, khán giả không chỉ nhớ đến một nghệ sĩ tài năng mà còn ấn tượng bởi phong cách thời trang đậm chất riêng...',
      image: 'https://file.hstatic.net/1000333436/file/0.1_cd314157401247c5ba60b22d1c0c4dc1_grande.jpg',
      link: 'https://adamstorevn.com/blogs/adam-va-sao-viet/soobin-hoang-son-hinh-mau-quy-ong-hien-dai',
    },
  ];

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Tin Tức</h2>
      <p style={introTextStyle}>
        Đây là trang tin tức. Chúng tôi sẽ cập nhật thông tin mới nhất về sản phẩm và công ty ở đây.
      </p>

      <div style={newsContainerStyle}>
        {newsArticles.map((article) => (
          <div key={article.id} style={cardStyle}>
            <img src={article.image} alt={article.title} style={imageStyle} />
            <div style={contentStyle}>
              <h3 style={articleTitleStyle}>{article.title}</h3>
              <p style={articleContentStyle}>{article.content}</p>
              <a href={article.link} style={readMoreStyle}>
                Đọc thêm →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 🌟 CSS Styles
const containerStyle = {
  padding: '40px',
  backgroundColor: '#f8f9fa',
  textAlign: 'center',
};

const titleStyle = {
  color: '#007bff',
  fontSize: '2.5rem',
  marginBottom: '20px',
  fontWeight: '600',
};

const introTextStyle = {
  color: '#555',
  fontSize: '1.1rem',
  marginBottom: '30px',
};

const newsContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '20px',
  justifyContent: 'center',
};

const cardStyle = {
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  overflow: 'hidden',
  textAlign: 'left',
};

const imageStyle = {
  width: '100%',
  height: '400px',
  objectFit: 'cover',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
};

const contentStyle = {
  padding: '15px',
};

const articleTitleStyle = {
  fontSize: '1.4rem',
  fontWeight: '600',
  color: '#333',
  marginBottom: '10px',
};

const articleContentStyle = {
  fontSize: '1rem',
  color: '#666',
  lineHeight: '1.5',
  marginBottom: '15px',
};

const readMoreStyle = {
  display: 'inline-block',
  padding: '10px 15px',
  backgroundColor: '#007bff',
  color: 'white',
  borderRadius: '5px',
  textDecoration: 'none',
  marginTop: '10px',
  fontWeight: 'bold',
  transition: 'background-color 0.3s ease',
};

export default PtaNews;
