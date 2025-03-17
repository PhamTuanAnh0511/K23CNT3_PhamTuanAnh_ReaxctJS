import React from 'react';

export default function PtaAbout() {
    return (
        <div style={{ fontFamily: 'Times New Roman', lineHeight: '1.8', margin: '40px auto', maxWidth: '1000px', padding: '20px', backgroundColor: '#f9f9f9' }}>

            <h2 style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '3rem', marginBottom: '20px', color: '#2c3e50' }}>
                Giới Thiệu
            </h2>

            <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', padding: '20px', marginBottom: '40px' }}>
                <p style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '1.5rem', padding: '10px 0', color: '#34495e' }}>
                    ADAM STORE - HÌNH THÀNH & PHÁT TRIỂN
                </p>

                <p style={{ textAlign: 'justify', fontSize: '1.2rem', padding: '0 20px', color: '#7f8c8d' }}>
                    Được thành lập từ năm 2012 bởi ba cổ đông là những chàng trai trẻ có niềm đam mê về thời trang, mang hoài bão phát triển thương hiệu và sản phẩm đến khách hàng với những giá trị tốt nhất.
                </p>
                <p style={{ textAlign: 'justify', fontSize: '1.2rem', padding: '0 20px', color: '#7f8c8d' }}>
                    Xuất phát từ một cửa hàng nhỏ trên phố Lò Đúc tại Hà Nội, Adam Store trong 12 năm hoạt động trên thị trường hiện giờ đã có hệ thống 70 cửa hàng trên 50 tỉnh thành Việt Nam và vẫn đang tiếp tục mở rộng phủ kín khắp cả nước.
                </p>
                <p style={{ textAlign: 'justify', fontSize: '1.2rem', padding: '0 20px', color: '#7f8c8d' }}>
                    Mục tiêu xây dựng thương hiệu thời trang mang xu hướng phong cách đa dạng từ trẻ trung, năng động đến lịch lãm, đẳng cấp; đáp ứng nhu cầu của khách hàng với thời gian ngắn mà chất lượng, hiệu quả ngày càng được nâng cao.
                </p>
                <p style={{ textAlign: 'justify', fontSize: '1.2rem', padding: '0 20px', color: '#7f8c8d' }}>
                    Đến nay, Adam Store đã cung cấp hơn 1 triệu bộ vest may sẵn, kết hợp với nhiều doanh nghiệp, tập đoàn, công ty (Techcombank, Viettel, Doji,…) đến tay người tiêu dùng.
                </p>
            </div>

            <img
                style={{
                    display: 'block',
                    margin: '20px auto',
                    maxWidth: '70%',
                    height: 'auto',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                }}
                src="https://cdn.haitrieu.com/wp-content/uploads/2022/05/Logo-Adam-Store-Black.png"
                alt="Adam Store Logo"
            />

            <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', padding: '20px', marginBottom: '40px' }}>
                <p style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '1.5rem', padding: '10px 0', color: '#34495e' }}>
                    ĐA DẠNG SIZE, MẪU MÃ, HÀNG HÓA
                </p>

                <p style={{ textAlign: 'justify', fontSize: '1.2rem', padding: '0 20px', color: '#7f8c8d' }}>
                    Thấu hiểu tâm lý mua sắm của khách hàng thời đại 4.0, việc mua hàng một cách tiện ích, nhanh chóng, vừa ý khách hàng. Tại Adam Store, chúng tôi nghiêm túc đầu tư vào việc nghiên cứu giải phẫu tỉ lệ cơ thể người Việt, từ đó cho ra mắt đến 5 size: 48 - 50 - 52 - 54 - 56, phù hợp với nhiều người từ 48-85kg, với những khách hàng có dáng người đặc biệt chúng tôi có nhận may đo. Ngoài ra, Adam Store có nhiều loại hàng hóa như Suit, quần âu, giày, sơ mi, áo phông, áo khoác, áo len, phụ kiện,..., mẫu mã đa dạng giúp khách hàng dễ dàng lựa chọn được sản phẩm ưng ý.
                </p>
            </div>

            <img
                style={{
                    display: 'block',
                    margin: '20px auto',
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease',
                }}
                src="https://www.shopmagiamgia.com/wp-content/uploads/2023/10/adam-store-scaled-1.webp"
                alt="Adam Store Collection"
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            />

            <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', padding: '20px', marginBottom: '40px' }}>
                <p style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '1.5rem', padding: '10px 0', color: '#34495e' }}>
                    HỆ THỐNG HƠN 70 CỬA HÀNG TRÊN TOÀN QUỐC
                </p>

                <p style={{ textAlign: 'justify', fontSize: '1.2rem', padding: '0 20px', color: '#7f8c8d' }}>
                    Adam Store tự hào là một trong những thương hiệu phát triển, sở hữu nhiều showroom chi nhánh được trải dài trên 50 tỉnh thành khắp cả nước. Chúng tôi vẫn luôn cố gắng để có thể tiếp tục mở rộng hơn phủ kín toàn quốc, giúp khách hàng dễ dàng mua sắm trực tiếp tại tỉnh thành đang sinh sống. Với lợi thế vô cùng lớn này, chúng tôi luôn sẵn sàng là điểm đến của mọi tín đồ yêu thích ăn vận cổ điển, lịch lãm.
                </p>
            </div>

            <img
                style={{
                    display: 'block',
                    margin: '20px auto',
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease',
                }}
                src="https://file.hstatic.net/1000333436/file/297320052_5794860747214794_7552311129013494593_n_7eff0689402e465ba871622db491e3e7_grande.jpg"
                alt="Adam Store Locations"
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            />
        </div>
    );
}
