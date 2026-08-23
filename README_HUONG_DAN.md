# KANBAN CÁ NHÂN STATIC v2.4

## 1. Điểm mới
- Có 9 hình nền tùy chọn; mặc định là **Beautiful Background6**.
- Có nút `▧` để đổi hình nền và nút `?` mở hướng dẫn nhanh.
- Có tooltip khi rê chuột hoặc dùng bàn phím chọn các nút, biểu tượng kéo thả.
- Bố cục desktop được thu gọn để màn hình rộng hiển thị đồng thời 5 cột.
- Dự án ở thanh bên trái có thể kéo thả để sắp xếp.
- Dự án mới có 5 cột mặc định theo thứ tự:
  1. Đã hoàn thành
  2. Việc cần làm/chưa sắp xếp
  3. Việc hôm nay
  4. Việc ngày mai
  5. Mục tiêu/ý tưởng
- Dữ liệu từ bản v1.0 được giữ nguyên. Bốn cột mặc định cũ sẽ tự chuyển sang cấu trúc 5 cột mới.
- Nội dung hướng dẫn dùng cách xưng hô “Bạn”.

## 2. Upload lên GitHub Pages
1. Giải nén file ZIP.
2. Mở repository GitHub đang dùng.
3. Xóa hoặc ghi đè toàn bộ file cũ bằng toàn bộ file và thư mục trong gói này.
4. Commit thay đổi.
5. Vào `Settings` → `Pages` → chọn `Deploy from a branch` → nhánh `main` → thư mục `/root`.
6. Chờ GitHub Pages cập nhật rồi mở lại trang.
7. Nhấn `Ctrl + F5` một lần để trình duyệt bỏ cache phiên bản cũ.

## 3. Giữ dữ liệu cũ
- Giữ nguyên đường dẫn repository GitHub Pages và không đổi tên repository thì dữ liệu Local Storage cũ vẫn còn.
- Nên bấm **Xuất bản sao JSON** trước khi thay mã nguồn để có bản dự phòng.
- Không xóa dữ liệu trang web trong trình duyệt nếu chưa xuất JSON.

## 4. Chạy thử trên Windows
- Nhấp đúp `BAT_CHAY_THU.bat`.
- Trình duyệt sẽ mở trang ở máy cục bộ.

## 5. Lưu ý
- Đây là static site, không có máy chủ và không có tài khoản.
- Dữ liệu chỉ lưu trong trình duyệt đang sử dụng.
- Khi đổi máy hoặc đổi trình duyệt, dùng **Xuất bản sao JSON** và **Nhập dữ liệu**.


## Cập nhật v2.1
- Thêm đồng hồ làm việc tiếng Việt ở khu vực đầu trang, có bộ đếm ngược tùy chỉnh và chuông báo khi hết giờ.
- Tên dự án ở thanh bên tự giảm cỡ chữ để đọc được đầy đủ hơn.


## Cập nhật v2.2
- Đồng hồ mặc định thu gọn để ưu tiên không gian bảng công việc.
- Chỉ khi bấm nút mở rộng trên đồng hồ thì phần đặt giờ và nút hẹn giờ mới hiện ra.
- Đồng hồ được đưa lên hàng trên và canh ngang với khu vực nút Hoàn tác.


## Cập nhật v2.3
- Thêm nút Cài đặt trên thanh công cụ.
- Trong Cài đặt có chức năng xóa toàn bộ dữ liệu ứng dụng.
- Trước khi xóa, ứng dụng đề nghị người dùng xuất backup JSON.
- Chỉ cho phép xóa khi người dùng gõ chính xác `OK`.
- Chức năng xóa chỉ xóa dữ liệu của Kanban này, không xóa dữ liệu của các website khác cùng tên miền.


## Cập nhật v2.4
- Thêm quy tắc tự động chuyển toàn bộ công việc từ cột nguồn sang cuối cột đích khi sang ngày mới.
- Có thể thêm nhiều thao tác chuyển bằng dấu `＋`; quy tắc được lưu trong Local Storage.
- Khi trang đang mở, quy tắc chạy ngay lúc qua 00:00. Nếu trang đang đóng, quy tắc chạy ở lần mở đầu tiên của ngày mới.
- Bổ sung nút **Xóa toàn bộ nội dung** trong hộp chỉnh sửa cột.
- Công việc bị xóa được lưu gọn dưới dạng văn bản thuần túy, kèm ngày tạo, ngày sửa cuối và ngày xóa.
- Mục **Nội dung đã xóa** có hai tầng: Đã xóa → Thùng rác → Xóa vĩnh viễn.


## Cập nhật v2.5 – Trình phát nhạc local
- Thêm trình phát nhạc gọn trong sidebar, không thay đổi logic Kanban cũ.
- Chọn thư mục bằng File System Access API trên Chrome/Edge hoặc dùng cơ chế chọn thư mục dự phòng.
- Hỗ trợ MP3, WAV, OGG, FLAC, M4A theo codec mà trình duyệt đang hỗ trợ.
- Có Play/Pause, bài trước/sau, Shuffle, Repeat All/One, tiến trình, thời gian và âm lượng.
- Hiển thị 3 dòng: bài trước, bài đang phát và bài tiếp theo; nghệ sĩ chỉ hiện khi đọc được metadata.
- Danh sách đầy đủ mở trong popup, có sắp xếp theo tên file hoặc tên bài hát, highlight và click để phát.
- Kéo thả thư mục vào trình phát và dùng Ctrl + Space để phát/tạm dừng.
- Thông tin thư mục gần đây lưu trong localStorage; quyền thư mục lưu bằng IndexedDB để có thể mở lại khi trình duyệt còn cấp quyền.
- Chỉ bài đang phát được tạo nguồn audio, không load toàn bộ thư viện vào RAM.


## Cập nhật v2.6 – Ghi chú nhanh
- Thêm các đầu mục ghi chú ngay dưới tên dự án.
- Mỗi dự án có bộ ghi chú riêng; bấm dấu ＋ để tạo thêm.
- Hỗ trợ chữ đậm, nghiêng, gạch chân, tiêu đề, danh sách dấu chấm và danh sách đánh số.
- Khi dán, ứng dụng chỉ nhận văn bản thuần túy; không lưu hình ảnh, tệp hoặc mã nhúng.
- Ghi chú được lưu chung trong dữ liệu Kanban nên có trong file backup JSON.


## Cập nhật v2.7
- Sắp xếp lại các nút trong hộp Sửa cột theo hai nhóm: thao tác phụ và thao tác lưu/xóa.
- Trình phát nhạc mặc định bật chế độ lặp toàn bộ playlist.
- Thanh âm lượng có tooltip “Âm lượng” khi rê chuột.


## Cập nhật v2.8
- Thêm tooltip rõ ràng cho toàn bộ nút định dạng, đóng, hủy, lưu và xóa trong cửa sổ ghi chú.
- Sửa cơ chế tooltip để hiển thị được phía trên cửa sổ modal.
- Ô tên ghi chú vẫn cho phép nhập đổi tên, đồng thời có nút xổ danh sách để chuyển nhanh giữa các ghi chú của dự án.
- Khi chuyển ghi chú mà có nội dung chưa lưu, ứng dụng sẽ hỏi xác nhận để tránh mất dữ liệu ngoài ý muốn.


## Cập nhật v2.9
- Nhấn Ctrl + Enter khi trang Kanban đang được focus để mở hộp ghi nhanh công việc.
- Nhập tên và nhấn Enter để lưu; mặc định vào cột Việc cần làm/chưa sắp xếp, có thể đổi trong Cài đặt.
- Ctrl + click chọn rời rạc, Shift + click chọn liên tục, Ctrl + A chọn toàn bộ thẻ trong cột đang chọn. Kéo một thẻ đã chọn để di chuyển cả nhóm.
- Có thể chọn màu nền riêng cho từng cột; mặc định vẫn giữ giao diện cũ.
- Nhấp một lần để chọn thẻ; nhấp đúp hoặc nhấn Enter để mở chỉnh sửa.


## Cập nhật v3.0 – Bộ công cụ văn phòng

### Xóa nhanh thẻ bằng Delete
1. Chọn một hoặc nhiều thẻ bằng click, Ctrl+click, Shift+click hoặc Ctrl+A trong cột.
2. Nhấn phím Delete.
3. Thẻ được chuyển vào Cài đặt → Nội dung đã xóa, không bị xóa vĩnh viễn ngay.
4. Có thể bấm Hoàn tác để khôi phục thao tác vừa thực hiện.
5. Phím Delete bị vô hiệu khi đang nhập văn bản hoặc có hộp thoại mở để tránh xóa nhầm.

### Bốn công cụ trên thanh trên cùng
- **PDF:** gộp và chuẩn hóa kích thước trang; thumbnail sắp xếp trang; chọn nhiều trang; xoay riêng từng trang; nhân bản, xóa, trích xuất; tách PDF; PDF sang PNG; ảnh sang PDF.
- **IMG:** chuyển JPG/PNG/WebP; resize; xoay/lật; nén ảnh; ghép dọc/ngang/lưới; đóng dấu chữ.
- **REN:** preview đổi tên file/thư mục; quy tắc tiền tố/hậu tố/tìm thay thế/regex/đánh số/kiểu chữ/xóa dấu; tạo ZIP an toàn; manifest JSON; đổi tên file tại chỗ khi có quyền.
- **XLS:** đọc workbook; xuất JSON phân biệt value/formula; quản lý và làm sạch sheet; gộp sheet theo vị trí hoặc tiêu đề; gộp nhiều workbook; tách sheet.

### Giữ nguyên dữ liệu Kanban
- Phiên bản này tiếp tục dùng đúng khóa `linh_personal_kanban_v1`.
- Không gọi `localStorage.clear()` và không thay đổi đường dẫn lưu dữ liệu cũ.
- Upload đè mã nguồn và nhấn Ctrl+F5 chỉ làm mới tệp giao diện/cache; không xóa Local Storage.
- Dữ liệu công cụ văn phòng dùng khóa riêng `linh_kanban_office_settings_v1`.
- Vẫn nên bấm **Xuất bản sao JSON** trước khi cập nhật để có bản dự phòng ngoài trình duyệt.

### Cách sử dụng PDF
- Gộp PDF: thêm nhiều file, kéo thả hoặc dùng nút lên/xuống, chọn chế độ chuẩn hóa trang rồi xuất.
- Chỉnh trang: mở một PDF, chọn trang bằng Ctrl/Shift/Ctrl+A, kéo thả đổi thứ tự, xoay hoặc xóa từng trang rồi xuất lại.
- Tách PDF: chọn tách từng trang, theo khoảng như `1-3,5,8-10`, trang chẵn hoặc lẻ.
- PDF sang PNG: chọn DPI; ứng dụng render tuần tự để hạn chế RAM.
- Ảnh sang PDF: sắp xếp ảnh và chọn kích thước trang đầu ra.

### Cách sử dụng IMG
- Chọn nhiều ảnh, sắp xếp và chọn thao tác cần chạy.
- Đổi định dạng/resize/xoay/lật xử lý theo lô.
- Nén ảnh hiển thị dung lượng nguồn và kết quả.
- Ghép ảnh hỗ trợ dọc, ngang hoặc dạng lưới, lề và khoảng cách.
- Đóng dấu chữ áp dụng cho toàn bộ ảnh đã chọn.

### Cách sử dụng Batch Rename
- Browse thư mục hoặc dùng bộ chọn thư mục dự phòng.
- Thiết lập quy tắc và kiểm tra bảng preview trước khi chạy.
- **ZIP an toàn** là chế độ mặc định: tạo bản sao tên mới, không đụng file nguồn.
- Đổi tên tại chỗ chỉ áp dụng cho file và yêu cầu quyền ghi cùng xác nhận `DOI TEN`.
- Có thể tải manifest JSON để đối chiếu tên cũ/tên mới.

### Cách sử dụng Excel
- Đọc XLSX/XLS/XLSM/CSV và chọn sheet để xem preview.
- Xuất JSON dạng thưa để chỉ lưu các ô có nội dung, hoặc bật xuất toàn bộ vùng dùng.
- Ô công thức được phân biệt bằng `kind: "formula"`, có `formula` và `cachedValue` nếu file lưu sẵn kết quả.
- Có thể đổi tên/sắp xếp/nhân bản/xóa sheet trong bản xuất, gộp sheet, gộp workbook và tách sheet thành ZIP.

### Lưu ý thư viện và giới hạn
- JSZip được đóng gói trong source.
- Công cụ PDF và Excel tải lười pdf-lib, PDF.js và SheetJS đã ghim phiên bản ở lần đầu dùng; lần đầu cần Internet. Các file được chọn vẫn chỉ xử lý trong bộ nhớ của trình duyệt, không upload.
- PDF không OCR, không sửa trực tiếp chữ đã có và có thể làm chữ ký số mất hiệu lực sau khi xuất lại.
- IMG chưa có công cụ crop đồ họa trong bản này.
- Rename không đổi tên thư mục tại chỗ; ZIP an toàn vẫn có thể tạo cấu trúc thư mục với tên mới.
- Excel không chạy VBA/macro và không tự tính lại toàn bộ công thức.
- Chrome/Edge trên máy tính hỗ trợ tốt nhất việc chọn thư mục và ghi file trực tiếp; trình duyệt khác dùng download/ZIP dự phòng.

### File kiểm thử
Thư mục `test-files` có PDF, ảnh và workbook mẫu không chứa dữ liệu nhạy cảm để thử nhanh các công cụ.



## Cập nhật v3.1
- Bốn nút công cụ văn phòng được đặt thành hàng riêng dưới nhóm Hoàn tác/Cài đặt để giao diện gọn hơn.
- Chế độ gộp Excel mặc định là **Gộp theo vị trí cột**.
- Tooltip giải thích: gộp theo vị trí nối A với A, B với B; gộp theo tên tiêu đề đối chiếu cột dựa trên tên tiêu đề.
- Không đổi khóa dữ liệu Kanban hiện tại.

# DICE ARENA (v4.0)

## Mở game
Trên thanh công cụ Kanban, bấm nút **DICE**. Game mở toàn màn hình trong một khu vực riêng và không đọc hoặc sửa dữ liệu dự án Kanban.

## Cách chơi
1. Chọn từ 1 đến 10 xúc xắc.
2. Bấm **Thả xúc xắc**.
3. Chọn **Thả đồng thời** hoặc **Thả từng viên**.
4. Kết quả từng viên, tổng điểm và lịch sử được hiển thị ngay trên màn hình.

## Dữ liệu
- Cài đặt Dice Arena dùng khóa riêng `linh_dice_game_settings_v1`.
- Lịch sử dùng khóa riêng `linh_dice_game_history_v1`.
- Không thay đổi khóa `linh_personal_kanban_v1` của Kanban.
- Dọn bàn chỉ xóa các xúc xắc trong cảnh 3D.

## Asset 3D
Model xúc xắc và cốc lắc lấy từ asset **Dice Animation 2** của KageG, giấy phép CC BY 4.0. Thông tin ghi nhận nằm tại `dice-game/assets/LICENSE_ASSET.txt`.

## Dice Arena và Tarot Việt v5.0
- Dice Arena được viết bằng HTML/CSS/JavaScript thuần, không cần tải model GLB hoặc thư viện 3D bên ngoài.
- Tarot Việt chạy hoàn toàn trên GitHub Pages, không cần Render hoặc backend.
- Tarot hỗ trợ 78 lá, rút 1/3/5/7 lá, tự chọn hoặc máy tự rút và diễn giải bằng tiếng Việt.
- Lịch sử Dice và Tarot lưu bằng khóa riêng, không làm thay đổi dữ liệu Kanban.

## GAME — Đời Lập Nghiệp v1.1
- Mỗi hành động tiêu tốn thời gian theo phút; công việc có khung giờ và thời lượng riêng.
- Sau 22:00 vẫn có thể làm việc nhưng dễ hao sức/thiếu ngủ; 01:00 tự sang ngày mới nếu còn thức.
- Nút **Về nghỉ** ngủ tới sáng; ngủ muộn sẽ dậy muộn và có thể lỡ việc sáng.
- Có 3 ô lưu, 10 lối sống Roguelite, thời tiết, thứ trong tuần, tình yêu, gia đình, con cái và doanh nghiệp.
- Trên điện thoại dùng thanh thao tác cố định phía dưới để vào Việc làm hoặc Về nghỉ nhanh.
