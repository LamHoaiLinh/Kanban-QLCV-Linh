# KAN PHOTO — Nâng cấp tháng 10/2026

## Cách sử dụng
1. Vào **CÔNG CỤ → Chỉnh ảnh nhanh**, kéo nhiều ảnh JPG/PNG/WebP.
2. Mở Preview. Ảnh gốc bên trái được giữ nguyên; các chỉnh sửa chỉ tác động ảnh bên phải.
3. **Ánh sáng / HSL / Chi tiết:** chọn **Toàn ảnh** hoặc **Tô vùng**. Ở chế độ Tô vùng, dùng chuột tô vùng cần chỉnh rồi kéo thanh điều chỉnh. Giữ Space + kéo để di chuyển ảnh.
4. **Chi tiết → Cứu ảnh yếu:** bấm **Tạo 3 bản thử**, chọn bản Tự nhiên, Cân bằng hoặc Rõ nét; có thể chỉnh tiếp.
5. **Chi tiết → AI:** chỉ bấm nếu Chrome/Edge trên PC có WebGPU. Mô hình tải từ Hugging Face vào trình duyệt, có thể rất chậm hoặc không hỗ trợ phần cứng. Không bật mặc định.
6. **Ánh sáng:** bấm **Áp màu cho các ảnh khác** để sao chép chỉ thông số màu, không sao chép chỉnh hình dáng/crop.
7. Nhấn **Lưu chỉnh sửa** rồi **TẢI TẤT CẢ**. Ảnh không tải lên máy chủ để xử lý.

## Kỹ thuật và giới hạn
- Mô hình AI Real-ESRGAN x2plus ONNX do skillsafe-ai chuyển đổi, bản gốc Real-ESRGAN của Xintao Wang (BSD-3-Clause): https://huggingface.co/skillsafe-ai/realesrgan-x2plus
- Mô hình SCUNet PSNR ONNX do Heliosoph chuyển đổi, bản gốc SCUNet của Kai Zhang và cộng sự (Apache-2.0): https://huggingface.co/Heliosoph/scunet-onnx
- Runtime ONNX Runtime Web, Microsoft (MIT): https://onnxruntime.ai/docs/get-started/with-javascript/web.html
- SCUNet có trọng số ngoài ~73 MB; Real-ESRGAN ~64 MB. Cả hai sử dụng WebGPU trên Chrome/Edge. Tùy phần cứng, CORS và bộ nhớ, mô hình có thể không tải hoặc chạy được. Phần mềm thông báo thay vì thay bằng kết quả giả.
- Mô hình AI chỉ áp dụng theo lệnh, không chạy trong mọi ảnh theo mặc định. Các bài kiểm thử tự động chỉ kiểm tra bảo vệ khi không có WebGPU, chưa khẳng định độ chính xác của các mô hình trên mọi GPU.
- Chỉnh nhiều lần giữa các lần lưu: giữ PNG nền và thông số chỉnh màu riêng, không lấy JPG xuất ra để nén lại nhiều lần. Có tối đa 3 bản lưu trước trong bộ nhớ để khôi phục. Bộ nhớ sẽ mất khi tải lại trang.
- Cọ tô vùng làm mờ biên vùng chỉnh nhưng không có AI tự phân vùng. Vóc dáng kéo tự do có thể làm cong nền.
- Tăng độ phân giải bằng AI suy đoán thêm chi tiết, không bảo đảm giống ảnh gốc.
- Giới hạn AI: 2,5 triệu pixel đầu vào để giảm nguy cơ hết bộ nhớ.
- Không thay đổi chức năng của những công cụ khác trong KanBan.

## Đảm bảo chất lượng
- Kiểm thử cú pháp tất cả mô-đun qua Node.js.
- Kiểm thử tương tác Chromium: tải ảnh, kéo dáng, chuyển các tab, chèn chữ tiếng Việt, sửa phối cảnh, HSL, lưu và tải; cọ vùng, ba biến thể, hoàn nguyên, sao chép màu và xuất ZIP.
- Các bài kiểm thử WebGPU thực tế, tốc độ xử lý ảnh nhiều megapixel và trình duyệt di động phải được thực hiện trên thiết bị đích.
