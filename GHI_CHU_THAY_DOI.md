## StockSim VN Web 2.1.1 — Sửa đồng bộ đường vị thế sau khi đóng — 16/09/2026
- Sửa lỗi đường BUY/SHORT lịch sử vẫn còn trên chart sau khi vị thế đã được đóng bởi Stop Loss / Take Profit / đóng tay / thanh lý.
- Chart giờ chỉ hiển thị đường entry của **phần khối lượng còn mở thực sự** (`filledQty - closedQty > 0`) và bắt buộc phải còn Position cùng chiều.
- Nếu đóng một phần, đường entry vẫn giữ và hiển thị số lượng còn mở; khi đóng hết, đường entry biến mất ngay.
- Không xóa lịch sử lệnh/giao dịch: tab LỆNH và GIAO DỊCH vẫn giữ dữ liệu để đối chiếu P/L đã chốt.
- Bump cache/version lên 2.1.1 để GitHub Pages không giữ nhầm app.js 2.1.0 cũ qua Service Worker.

# GHI CHÚ THAY ĐỔI TỔNG HỢP

## StockSim VN Web 2.1 — Market Ecosystem — 16/09/2026

- Giữ nguyên thao tác chart/trading hiện có; nâng Market Engine thành thị trường có vòng đời doanh nghiệp.
- (1) Fundamental/lifecycle: doanh thu, LNST, EPS, ROE, biên lợi nhuận, nợ, tiền mặt, khả năng trả lãi, credit health; trạng thái ACTIVE/WATCH/RESTRICTED/SUSPENDED/BANKRUPT/DELISTED/MERGED.
- (2) Event transmission: cú sốc năng lượng/lãi suất/ngân hàng/tỷ giá/tín dụng/xuất khẩu truyền dẫn khác nhau theo ngành thay vì cộng trừ giá trực tiếp.
- (3) Distress/phá sản/hủy niêm yết: chỉ xảy ra sau nhiều quý xấu và sức khỏe tín dụng suy giảm; vị thế/lệnh liên quan được xử lý theo sự kiện.
- (4) IPO động: 0–4 mã/năm tùy chu kỳ; mã mới sinh có `NEW`, exchange/sector/fundamental riêng.
- (5) M&A: doanh nghiệp khó khăn có thể bị mua lại với mức giá mô phỏng và chuyển trạng thái MERGED.
- (6) Corporate actions: cổ tức tiền mặt, tách cổ phiếu, phát hành thêm/pha loãng.
- (7) BCTC quý: sinh định kỳ; Actual vs Expectation tạo earnings surprise. Nhấp kép ticker để xem BCTC mini.
- (8) Tin đồn/thông tin bất cân xứng: tin có credibility và được xác nhận/phủ nhận sau đó.
- (9) Systemic crisis: sự kiện lớn có thể đẩy regime sang PANIC, tăng volatility/correlation và kéo thanh khoản xuống.
- (10) Liquidity risk: spread/slippage tăng khi thanh khoản suy yếu; Market Order có thể partial/blocked rồi tiếp tục khớp ở các phút sau.
- (11) Limit-up/down: mô phỏng trường hợp giá kịch biên và thiếu đối ứng khiến lệnh Market không khớp ngay.
- (12) Dòng tiền đa tác nhân: Retail, Institutional, Foreign, ETF cùng tác động giá/volume nhưng theo hành vi khác nhau.
- (13) Long-term divergence: company quality/compounder/business cycle tạo mã tăng trưởng dài hạn, mã suy yếu, sideway, hồi phục hoặc biến mất; giảm survivorship bias.
- UI Watchlist: mã mới có badge NEW + hover; mã chết có nút × để người chơi xóa khỏi Watchlist; dữ liệu lịch sử không bị xóa.
- Save v8; tương thích và tự nâng save v7 khi đọc.

# GHI CHÚ THAY ĐỔI / KIỂM THỬ TỔNG HỢP

File này gom các CHANGELOG, TEST_REPORT, ghi chú THAY_ĐỔI và hướng dẫn cập nhật rời rạc trước đây để thư mục KanBan gọn hơn. Các file giấy phép, nguồn tham khảo và hướng dẫn sử dụng chính vẫn được giữ riêng vì cần cho vận hành/ghi nhận nguồn.

## StockSim VN Web 2.0 trong Game Hub — 16/09/2026

- StockSim VN đã được chuyển sang **web hoàn toàn**: HTML5 Canvas + JavaScript + IndexedDB; không cần Python, Pygame, `.venv` hay EXE để chơi.
- Game Hub mở trực tiếp `stock-sim-vn/index.html` trong iframe, hoạt động giống nhau khi chạy `BAT_CHAY_THU.bat` local web và khi deploy GitHub Pages.
- Mỗi New Game sinh `seed` riêng; cùng seed cho cùng nền tảng thị trường ban đầu, seed khác tạo chu kỳ/sector/doanh nghiệp khác. Save nằm trong IndexedDB của trình duyệt theo máy/profile.
- Giữ các cơ chế chính từ v1.9: 30 mã/3 sàn/10 ngành, lịch sử mô phỏng 2 năm, Candle/Line, 1M/5M/15M/1H/1D, Long/Short, Market/Limit/Stop, SL/TP, leverage 100–500%, margin-call mô phỏng, P/L từng lệnh và NET P/L, chart tools, Fibonacci, Rectangle, Undo/Redo, kéo trục X/Y, kéo trực tiếp lệnh chờ/SL/TP.
- Market engine vẫn dùng market regime + sector rotation + fair value + business cycle + institutional flow + momentum + mean reversion + volatility clustering + news + order-flow + noise; không dùng random walk đơn giản.
- `kanban_local_server.py` trở lại đúng vai trò máy chủ file tĩnh, không còn API launch desktop.
- Service worker cache thêm `stock-sim-vn/index.html`, `styles.css`, `app.js`; Game Hub được cache-bust lên phiên bản mới.
- Kiểm tra lõi Web: tạo đủ 504 nến Daily, 30 mã; mở/đóng LONG, SHORT, STOP, sửa giá lệnh chờ; JavaScript syntax PASS.

## Lịch sử StockSim VN Python v1.9 (tham chiếu cũ, không còn đóng gói trong KanBan Web)

```text
STOCKSIM VN V1.9 - KÉO TRỰC TIẾP LỆNH / SL / TP TRÊN CHART
=======================================

CÁCH CHẠY LẦN ĐẦU
1) Nếu đang dùng .venv bản cũ: chạy RESET_VENV.bat.
2) Chạy setup_venv.bat.
3) Chạy self_test.bat.
4) Nếu hiện SELF TEST PASSED, chạy run_game.bat.

BUILD ONEFILE
- Chạy build_onefile.bat
- Kết quả: dist\StockSimVN.exe

MỚI Ở V1.6
1) ĐÒN BẨY
- Điều chỉnh bằng 2 nút mũi tên tại khu đặt lệnh.
- Từ 100% đến 500%, mỗi lần tăng/giảm 50%.
- 100% = x1.0; 150% = x1.5; 200% = x2.0; ...; 500% = x5.0.
- Leverage được lưu theo từng lệnh MARKET/LIMIT/STOP ngay khi đặt.
- Cùng 100 cổ phiếu thì P/L bằng tiền vẫn tính theo 100 cổ phiếu; leverage làm giảm ký quỹ cần thiết và vì vậy ROI trên phần ký quỹ tăng tương ứng.
- Ví dụ vị thế 20 triệu ở x2 cần khoảng 10 triệu ký quỹ, chưa tính phí.
- Tab LỆNH hiển thị cột % KQ = tỷ suất lãi/lỗ trên phần ký quỹ của dòng lệnh.

2) MARGIN CALL MÔ PHỎNG
- Khi equity riêng của một vị thế giảm xuống <= 20% ký quỹ ban đầu, game tự thanh lý vị thế.
- Mục đích là cho người chơi cảm nhận rủi ro đòn bẩy.
- Đây là luật của GAME, không phải quy định margin thực tế của công ty chứng khoán.

3) CHƠI LẠI / RESET GAME
- Nút CHƠI LẠI nằm ngay khu vực TÀI KHOẢN bên phải.
- Khi bấm sẽ hiện 3 mức:
  + DỄ: 200.000.000đ
  + TRUNG BÌNH: 100.000.000đ
  + KHÓ: 50.000.000đ
- Cả 3 mức đều chơi đầy đủ toàn bộ mã và chức năng; chỉ khác vốn khởi đầu.
- Chọn mức mới sẽ reset: thị trường, vị thế, lệnh, lịch sử giao dịch, nhiệm vụ, hình vẽ và tạo lại lịch sử thị trường 2 năm.
- Nhiệm vụ Equity +5% tự đổi mục tiêu theo vốn khởi đầu.
- Lần đầu mở game hoặc khi save cũ không tương thích, game sẽ yêu cầu chọn một mức vốn trước khi chơi.

MENU CHUỘT PHẢI TRÊN CHART
- BUY LIMIT: chỉ hợp lệ khi giá đặt thấp hơn giá hiện tại.
- SELL LIMIT: chỉ hợp lệ khi giá đặt cao hơn giá hiện tại.
- BUY STOP: kích hoạt khi giá phá lên mức Stop.
- SELL STOP: kích hoạt khi giá phá xuống mức Stop.
- STOP LOSS / TAKE PROFIT: xuất hiện khi mã đang có vị thế.
- ĐÓNG LONG/SHORT NGAY: đóng vị thế Market.
- Các lệnh mở từ menu chuột phải dùng mức leverage đang chọn ở panel giao dịch.

CƠ CHẾ LONG / SHORT
- BUY mở/tăng LONG.
- SELL mở/tăng SHORT.
- Đóng vị thế dùng nút X trong tab LỆNH hoặc menu chuột phải.
- Không cho LONG và SHORT đồng thời cùng một mã.

P/L
- Mỗi dòng lệnh OPEN hiển thị Lãi/Lỗ NET riêng.
- P/L đang mở cập nhật realtime.
- Khi đóng, P/L của từng entry được giữ lại theo FIFO.
- Đầu bảng LỆNH có NET P/L toàn tài khoản: Đã chốt + Đang mở.

CÁC TÍNH NĂNG CHÍNH
- UI dark kiểu trading terminal.
- Candlestick / Line.
- 1M / 5M / 15M / 1H / 1D.
- Zoom bằng wheel, +/- và Reset View.
- Trend line, đường ngang, Rectangle, Fibonacci cơ bản.
- 30 mã mô phỏng: 10 HOSE + 10 HNX + 10 UPCOM.
- 10 nhóm ngành.
- Khoảng 504 phiên Daily (~2 năm) tạo sẵn.
- 60 phiên gần nhất có dữ liệu 1 phút.
- Market regime, sector factor, fair value, momentum, mean reversion, volatility clustering, news.
- Market / Limit / Stop, LONG / SHORT, SL / TP, Order Book, Portfolio, Mission, Save/Load.

SAVE
- File save: %APPDATA%\StockSimVN\savegame.dat
- V1.8 dùng SAVE_VERSION = 6 do bổ sung trạng thái chu kỳ doanh nghiệp/dòng tiền dài hạn.
- Save cũ được bỏ qua an toàn; game yêu cầu chọn mức vốn mới.
- Có thể xóa save thủ công bằng RESET_SAVE.bat.

PHÍM TẮT
SPACE : Pause/Resume
1/2/5 : Tốc độ
C     : Nến/Line
B     : BUY/LONG
S     : SELL/SHORT
+ / - : Zoom in/out
HOME  : Reset chart view
DEL   : Xóa hình vẽ cuối
Ctrl+Z: Undo hình vẽ
Ctrl+Y: Redo hình vẽ
ESC   : Đóng context menu / thoát công cụ
F5    : Save
F9    : Load

LƯU Ý
- Tên mã dùng để làm quen giao diện; giá, volume, news và diễn biến trong game đều là mô phỏng.
- Leverage, SHORT, margin call, phí và thuế trong game là tham số huấn luyện, không phải mô tả đầy đủ quy định giao dịch thực tế.
- Game không phải khuyến nghị đầu tư.

=== V1.7 - ZOOM RIÊNG TRỤC GIÁ (Y) ===
- Mở rộng chiều cao/biên giá của chart tới 30x để đặt Stop Loss / Take Profit rất xa giá hiện tại.
- Thanh công cụ trái có 2 nút mới:
  + Thu trục giá Y: quay dần về Auto-fit.
  + Mở rộng trục giá Y: nhìn xa hơn cả phía trên và phía dưới.
- Shift + con lăn chuột trên chart: zoom riêng trục giá Y.
  + Shift + lăn xuống: mở rộng biên giá.
  + Shift + lăn lên: thu biên giá về gần Auto-fit.
- Ctrl + +/-: chỉnh zoom Y bằng bàn phím.
- Con lăn thường hoặc +/-: vẫn zoom số lượng nến theo chiều thời gian X như trước.
- HOME / nút Reset: trả cả X và Y về mặc định.
- Mức Y ZOOM hiện ở góc chart khi khác Auto-fit.
- Mức zoom Y được lưu cùng save game.

=== V1.8 - KÉO TRỤC X/Y + UNDO/REDO + THỊ TRƯỜNG PHÂN HÓA ===
- Giữ nguyên toàn bộ cách zoom của V1.7.
- Có thể bấm chuột trái trực tiếp vào TRỤC GIÁ Y bên phải rồi kéo:
  + Kéo xuống: mở rộng biên giá, nhìn xa hơn để đặt SL/TP.
  + Kéo lên: thu biên giá, phóng to biến động nến.
  + Double click trục Y: trở về Auto-fit.
- Có thể bấm chuột trái trực tiếp vào TRỤC THỜI GIAN X phía dưới rồi kéo:
  + Kéo sang phải: phóng to nến / xem ít nến hơn.
  + Kéo sang trái: thu nhỏ / xem nhiều nến hơn.
  + Double click trục X: về 120 nến và vị trí hiện tại.
- Thanh công cụ có UNDO / REDO cho hình vẽ.
- Ctrl+Z = Undo; Ctrl+Y hoặc Ctrl+Shift+Z = Redo.
- Nút Xóa hình cuối cũng có thể Redo lại nếu xóa nhầm.
- Market engine bổ sung 3 tầng cung/cầu chậm riêng cho từng mã:
  + Chu kỳ nền tảng doanh nghiệp / kỳ vọng lợi nhuận.
  + Tích lũy - phân phối của dòng tiền tổ chức.
  + Swing momentum nhiều phiên.
- Bổ sung sector rotation có tính nhớ để dòng tiền luân chuyển giữa BANK/TECH/MATERIALS/... theo từng giai đoạn.
- Giá vẫn chịu market regime, fair value, cung/cầu, momentum, mean reversion, news, volatility và thanh khoản; không dùng một drift random đơn giản để ép mã tăng/giảm.
- Self-test kiểm tra thêm độ phân hóa 2 năm giữa 30 mã để tránh tất cả cùng sideway hoặc tăng nhẹ.
- V1.8 dùng SAVE_VERSION = 6 vì Market/StockState có thêm trạng thái dài hạn. Save cũ được bỏ qua an toàn; game sẽ tạo thị trường 2 năm mới để thấy engine phân hóa ngay.


=== V1.9 - KÉO TRỰC TIẾP ĐƯỜNG LỆNH ===
- Rê chuột gần đường BUY LIMIT / SELL LIMIT / BUY STOP / SELL STOP đang chờ: đường sẽ nổi bật và hiện gợi ý kéo.
- Giữ chuột trái trên đường rồi kéo lên/xuống: chart preview mức giá mới theo thời gian thực.
- Thả chuột: xác nhận sửa giá lệnh.
- ESC trong lúc kéo: hủy thay đổi và trả về giá cũ.
- SL và TP của vị thế đang mở cũng kéo trực tiếp theo cách tương tự.
- Game kiểm tra đúng logic lệnh khi thả:
  + BUY LIMIT phải dưới giá hiện tại.
  + SELL LIMIT phải trên giá hiện tại.
  + BUY STOP phải trên giá hiện tại.
  + SELL STOP phải dưới giá hiện tại.
  + SL/TP phải đúng phía theo LONG/SHORT.
- Nếu thả ở vùng không hợp lệ, game báo lỗi và giữ nguyên mức cũ.
- Khi đang kéo sửa đường lệnh, simulation tạm đứng để lệnh cũ không khớp ngoài ý muốn; thả chuột xong thị trường chạy tiếp.
- Giá BUY/SHORT đã KHỚP là lịch sử giao dịch nên không cho kéo sửa. Chỉ các lệnh đang chờ và SL/TP mới sửa được.
- Lệnh PARTIAL: chỉ phần chưa khớp được dời sang mức giá mới; phần đã khớp giữ nguyên giá thực tế.
- Không thay đổi SAVE_VERSION vì V1.9 chỉ thêm thao tác UI và sửa lệnh đang chờ; save V1.8 tiếp tục dùng được.
```

## Nội dung các file ghi chú cũ đã gom

### `bach-chieu-game/CHANGELOG_v2.1.txt`

```text
BÁCH CHIÊU v2.1 - AI COMBO & FAST ONBOARDING

- Run rút từ 10 xuống 9 Ante.
- Ante 1-5: mỗi Ante 2 trận hướng dẫn trực tiếp + 1 Trùm tự thực hành.
- Loại bỏ Phòng Đấu Luyện popup riêng để giảm nhịp chậm.
- Ante 2 trở đi: AI dùng chuỗi 2-4 kỹ thuật, có vai trò combo và tổng Ý đồ hiển thị rõ.
- AI được gate cơ chế theo tiến độ để không ném Khóa/Vật/Thế Võ quá sớm.
- Tăng sức ép Ante 2: chuỗi cơ bản khoảng 20+ damage trước phòng thủ.
- Thế Võ: Thế Công, Thế Thủ, Thế Linh.
- Hư Thực: Hư Chiêu, Chấn Phá Thế, Dẫn Thế.
- Khóa/Vật: Thoái Né, Bắt Khóa, Quật Ngã.
- Tuyệt Kỹ điều kiện: Long Hành, Phản Chấn, Nhất Thức; chỉ xuất hiện tạm thời khi đạt điều kiện.
- Trùm không hiện lời khuyên chiến thuật.
- Hiệu ứng số/toast được rút ngắn để nhịp chơi nhanh hơn.
- Bỏ Tĩnh Tâm/reward sau Trùm cuối để kết Run nhanh hơn.


=== v2.2 Combat FX ===
- Thêm hiệu ứng sát thương nảy mạnh hơn: số damage lớn bật to, combo hiển thị dạng ×1.69 / ×2.13.
- Thêm tia chém xẹt, vòng chấn động và rung mục tiêu khi trúng đòn.
- Đòn KẾT có callout Liên Kích/Hoàn Chiêu rõ hơn.
- Đòn nhiều hit và đòn lớn tạo nhiều slash hơn để cảm giác đã tay hơn.


=== v2.3 Combat FX Plus ===
- Khi chọn kỹ thuật, hiện rõ hao phí dạng “-1 THỂ LỰC / -2 THỂ LỰC”.
- Khi trúng đòn, số nổi giờ ghi rõ “-7 HP / -10 HP” thay vì chỉ hiện số đỏ.
- Vết chém kéo dài và đậm hơn, nhìn rõ chiều sâu hơn.
- 3 hit và 4 hit dùng 3 hoặc 4 nhát song song.
- Đòn combo/đòn kết tạo thêm hai nhát chém cắt chéo nhau để tạo cảm giác bùng nổ.


=== v2.4 Võ Đạo Queue & New Cards ===
- Thông báo nổi chiến đấu chuyển sang dạng hàng đợi theo từng phía, hiện lần lượt và tồn tại lâu hơn.
- Giảm hiện tượng 3-4 chỉ số đè lên nhau khi ra combo.
- Bổ sung 10 thẻ kỹ thuật mới để tăng hướng build.
- Viết lại đoạn giới thiệu trang chủ theo văn phong kiếm hiệp võ đạo.


=== v2.5 Cửu Trùng Thiên ===
- Toàn bộ lớp cốt truyện chuyển sang phong cách tu tiên.
- 9 Ante hiển thị thành Cửu Trùng Thiên.
- Mỗi Trùng có Tam Đại Sinh Tử Ải; ải cuối là Trấn Thiên Ải.
- Run → Đăng Thiên; Hồ sơ → Đạo Ấn; Tutorial → Thiên Cơ; Tĩnh Tâm → Bế Quan; Kỹ thuật → Chiêu thức.
- Viết lại lời dẫn, sự kiện, thắng/thua, thuần thục, cơ duyên, lộ trình và phần nhập môn theo giọng tu tiên.


=== v2.6 Tu Tiên Chiêu Thức ===
- Đổi 77 tên chiêu thức sang hệ tu tiên/pháp quyết/thần thông.
- Liên Hoàn → Liên Pháp; Phản Đòn → Huyền Phản; Cương Công → Bá Thể; Khống Chế → Phong Cấm; Bộ Pháp → Ngự Phong; Tĩnh Công → Tĩnh Huyền.
- Thế Công/Thủ/Linh chuyển thành Liệt Dương Chiến Thể, Huyền Quy Pháp Thể, Thanh Phong Linh Thể.
- Giữ nguyên ID và logic kỹ năng.


=== v2.7 Tiên Đạo Intro & Card Layout ===
- Thêm màn hình đen mở đầu với hiệu ứng hiện chữ dần và nút Bỏ Qua Thiên Dụ.
- Chỉnh lại bố cục thẻ: chia rõ khung vai trò, tên chiêu, mô tả và thẻ tag.
- Căn giữa nội dung, tăng chiều cao thẻ và co chữ nhẹ khi nội dung dài.
- Sửa RUN_GAME.bat theo kiểu mở riêng cửa sổ server để ổn định hơn.


=== v2.8 Clarity & Action Guard ===
- Dời nhẹ toàn bộ nội dung trong thẻ xuống dưới, chừa chỗ cho ô năng lượng để không che chữ.
- Viết lại nhiều câu hướng dẫn theo văn phong rõ ý hơn: nêu rõ sát thương, số hit và gợi ý dùng Thể lực.
- Thêm khóa thao tác tạm thời cho playCard/endTurn để giảm lỗi JavaScript khi bấm quá nhanh.
```

### `bach-chieu-game/TEST_REPORT.txt`

```text
BÁCH CHIÊU v2.1 - TEST REPORT
Ngày build: 2026-08-24

MỤC TIÊU BẢN NÀY
- Tăng tốc phần nhập môn.
- Chỉ Ante 1 cho đối thủ đơn giản.
- Từ Ante 2, AI phải dùng chuỗi nhiều kỹ thuật thay vì một con số Attack đơn.
- Bổ sung Thế Võ, Hư Chiêu/Phá Thế, Né/Khóa/Vật và Tuyệt Kỹ điều kiện.

KIỂM TRA ĐÃ CHẠY
1. JavaScript syntax: PASS (node --check).
2. Python local server compile: PASS.
3. Cấu trúc Run: PASS - 9 Ante, 9 Trùm.
4. Tutorial: PASS - 10 bài học/5 Ante, 2 bài mỗi Ante.
5. Trùm tutorial: PASS - không gắn lesson/hướng dẫn chọn lá.
6. Ante 2 AI: PASS - tạo intent dạng comboPlan và chuỗi >=2 kỹ thuật.
7. Ante 2 mẫu test: Thăm Dò -> Liên Quyền -> Trọng Kích, ước tính khoảng 22 damage trước phòng thủ.
8. AI execution: PASS - chuỗi gây damage/trạng thái/block theo từng kỹ thuật.
9. AI plan validation: PASS - toàn bộ ID kỹ thuật trong mọi plan đều hợp lệ.
10. Card database: PASS - không có card undefined/hole, không trùng ID.
11. Ante 6: PASS - mở Thế Công/Thế Thủ; Thế Linh vào reward pool.
12. Ante 7: PASS - mở Hư Chiêu; Phá Thế/Dẫn Thế vào reward pool.
13. Ante 8: PASS - mở Thoái Né + Bắt Khóa; Quật Ngã vào reward pool.
14. Ante 9: PASS - Tuyệt Kỹ tạm thời sinh theo điều kiện; card tạm không quay lại deck sau lượt.
15. Save key: v2.1 dùng bachchieu_slots_v21_ai_combo, không ghi đè v2.0/v1.

CÂN BẰNG CÓ CHỦ ĐÍCH
- Ante 1: đối thủ đơn giản, HP thấp, intent một hành động để học thao tác.
- Ante 2: AI bắt đầu MỞ/NỐI/KẾT, chuỗi 2-3 kỹ thuật, damage tăng rõ.
- Ante 3+: AI có cự ly/khống chế.
- Ante 4+: AI có chuẩn bị/dồn lực.
- Ante 6+: boss dùng Thế Võ.
- Ante 7+: boss dùng Hư Thực/Phá Thế.
- Ante 8+: có chuỗi Khóa/Vật.
- Ante 9: Tông Sư phối hợp nhiều kiểu kế hoạch.

GIỚI HẠN KIỂM TRA
- Môi trường sandbox hiện tại chặn Chrome headless truy cập localhost/file URL theo policy quản trị, nên không thể chạy automation browser end-to-end bằng Chromium.
- Đã thay bằng smoke-test trực tiếp engine JavaScript trong VM, kiểm tra dữ liệu, progression, AI plan và các cơ chế mới.
- Balance thực tế vẫn cần playtest người dùng; đặc biệt cần quan sát Ante 2-4 có quá mạnh/yếu không và thời lượng trung bình mỗi Run.

[v2.3] Kiểm tra nhanh: JS syntax PASS; float hao Thể lực PASS; float HP PASS; slash dài/đậm PASS; pattern song song/cross PASS.

[v2.4] JS syntax PASS; hàng đợi float PASS; 10 kỹ thuật mới đã thêm vào CARD pool và mapping unlock PASS; intro võ đạo PASS.

[v2.5] JS syntax PASS; Cửu Trùng Thiên copy PASS; Tam Đại Sinh Tử Ải copy PASS; Đạo Ấn/Bế Quan/Thiên Cơ/Trấn Thiên Ải copy PASS.

[v2.6] Đổi tên hiển thị 77 chiêu thức + 6 hệ phái + 4 Pháp Thể; ID/logic giữ nguyên; node --check PASS.

[v2.6] Đã đổi thêm toàn bộ tên chiêu AI sang pháp quyết/ấn quyết/thần thông tu tiên; chuẩn hóa tag Ngự Phong/Hộ Thể/Phược Linh/Kết Pháp.

[v2.7] Kiểm tra nhanh: JS syntax PASS; intro overlay PASS; renderMenu sau intro PASS; card frame layout PASS; RUN_GAME.bat rewritten.

[v2.8] Chỉnh khoảng cách khung thẻ, rõ ý hướng dẫn sát cơ, thêm actionLock chống lỗi khi bấm quá nhanh.
```

### `CHANGELOG.md`

```text
# v7.4.4 – Gia Khang Worksheet direct edit (2026-09-12)
- Đổi nút quay lại thành `← Trở về KanBan`, kích thước lớn hơn.
- Bỏ hai nút `Di chuyển` và `Sửa chữ`; thao tác được suy ra trực tiếp từ click.
- Khung chữ: single-click = chọn/kéo di chuyển; double-click = contentEditable, sửa chữ tại vị trí click.
- Shape/nét: single-click = chọn/kéo di chuyển; double-click = bật resize và hiện 4 handle góc.
- Giữ logic rich-text v7.4.3: Ctrl+A/khung chọn đổi toàn bộ cỡ chữ; selection riêng đổi riêng; màu/nền chữ theo selection; trả focus về text sau khi format.
- Tăng cache version Service Worker và query version của worksheet editor lên 1.2.0.


## v7.4.2 - Rich text cho khung đáp án (2026-09-12)
- Sửa lỗi mất khả năng gõ sau khi Ctrl+A rồi tăng/giảm cỡ chữ.
- Cỡ chữ áp dụng toàn khung khi chọn khung hoặc Ctrl+A; áp dụng riêng phần chữ khi bôi đen một đoạn.
- Màu chữ cũng áp dụng theo vùng chọn tương tự.
- Thêm Màu nền chữ và nút Bỏ nền cho phần chữ đang chọn.
- Lưu rich-text theo từng đoạn và render đúng khi xuất PNG/PDF.
- Giữ chế độ sửa chữ khi thao tác thanh công cụ, không làm mất vùng chọn.

# v6.22 — Đời Lập Nghiệp v1.1
- Thêm đồng hồ 24 giờ theo phút; mọi việc, ăn, tập, hẹn hò, mua tài sản và mở cơ sở đều tiêu tốn thời gian.
- Việc làm có khung giờ, khu vực, thời lượng riêng; việc ngắn không bị ép trả ít tiền.
- Sau 22:00 vẫn được làm việc nhưng có hao sức/thiếu ngủ; 01:00 tự sang ngày mới nếu còn thức.
- Nút Về nghỉ tính giờ ngủ/dậy động; ngủ muộn có thể làm lỡ việc sáng.
- Thêm thời tiết, thứ trong tuần, việc gấp và việc ca đêm.
- Phương tiện rút ngắn phần di chuyển thay vì cộng tiền máy móc.
- Tình yêu/gia đình tiêu cả tiền lẫn thời gian; doanh nghiệp giúp người chơi mua lại thời gian.
- Menu có hướng dẫn toàn bộ cơ chế cơ bản; bổ sung giao diện mobile và thanh thao tác dưới màn hình.
- Giữ 3 ô lưu và 10 lối sống Roguelite; tương thích save v1 bằng migrate.

# v6.21 — Đời Lập Nghiệp
- Thêm game **Đời Lập Nghiệp** vào GAME Hub.
- 3 ô lưu độc lập; 10 lối sống khởi đầu kiểu roguelite và Điểm sự nghiệp mở khóa qua nhiều hành trình.
- Gameplay theo ngày: việc làm, ăn uống, tập luyện, sức khỏe, tinh thần, nhà ở, xe cộ, vay vốn và kinh doanh.
- Tiến trình đời sống mở dần: hẹn hò, kết hôn, chủ động sinh con, chi phí gia đình và học hành.
- Ngành kinh doanh có bão hòa và chi phí nhân sự để buộc chuyển dần sang nhóm ngành doanh thu cao hơn.
- Hiệu ứng tiền +/− nổi chậm rồi mờ dần để người chơi kịp nhìn giao dịch.

# CHANGELOG

## v7.2.1 – Hotfix kẹt sau khi bắn
- Sửa lỗi Đấu Trường có thể đứng ở pha bắn nếu Web Animations `finished` bị pending hoặc hiệu ứng projectile phát sinh lỗi runtime.
- Thêm watchdog/fallback cho projectile và `catch/finally` để luôn nhả `combatBusy`, tiếp tục lượt an toàn.
- Bump Dice/cache lên 7.2.1 để tránh GitHub Pages/Service Worker giữ JS cũ.

## v4.0 – Dice Arena
- Thay game Marble Draw bằng Dice Arena.
- Nút `DRAW` đổi thành `DICE`.
- Cho chọn 1–10 xúc xắc.
- Thêm hai chế độ thả đồng thời và thả từng viên.
- Dùng model xúc xắc, cốc lắc và vật liệu từ asset Dice Animation 2.
- Hiển thị kết quả từng viên, tổng điểm và lịch sử gần đây.
- Lưu dữ liệu Dice Arena bằng khóa riêng, không thay đổi dữ liệu Kanban.
- Cập nhật Service Worker lên `linh-kanban-static-v40-dice`.


## v3.2 – Marble Draw
- Thêm nút `DRAW` trên thanh công cụ Kanban.
- Thêm workspace toàn màn hình `MARBLE DRAW – ĐƯỜNG ĐUA MAY MẮN`.
- Thêm quản lý nhiều sự kiện bằng IndexedDB riêng.
- Thêm nhập danh sách người tham dự bằng Excel/CSV và nhập trực tiếp.
- Thêm tải file Excel mẫu.
- Thêm kiểm tra dữ liệu, mã trùng, tên trống và trạng thái đủ điều kiện.
- Thêm khóa danh sách, SHA-256, base-seed commitment và mapping hash.
- Thêm xáo thử, xáo chính thức nhiều lần và khóa mapping.
- Thêm 10 viên bi số 0–9 có cùng cấu hình vật lý.
- Thêm đường đua Three.js + Rapier, pegboard, bộ chia, rotor và cảm biến đích.
- Thêm quay chữ số từ hàng cao nhất xuống hàng thấp nhất.
- Thêm xử lý mã trống bằng cách quay lại toàn bộ chuỗi, không dùng modulo.
- Thêm nhiều giải theo tên giải; có thể loại người đã trúng khỏi các giải sau.
- Thêm lịch sử kết quả, xuất Excel, in/lưu PDF và verification JSON.
- Thêm benchmark nhanh kiểm tra phân bổ chữ số vào vị trí xuất phát.
- Giữ nguyên khóa Local Storage và toàn bộ logic Kanban v3.1.
- Cập nhật Service Worker lên `linh-kanban-static-v32`.

## v3.6
- Đổi Marble Draw sang một màn hình Home duy nhất.
- Nút Xáo danh sách thay đổi thật thứ tự người tham dự trong bảng.
- Bỏ cột Chức danh khỏi giao diện và Excel mẫu.
- Cho chọn 2–10 viên bi mỗi lượt; 3 viên sẽ dùng số 1, 2, 3.
- Số trên viên bi bám theo mặt nhìn thấy và không quay vòng quanh viên bi.
- Thay máng bằng một mặt liền, giảm số chướng ngại để hạn chế kẹt bi.
- Bấm Bắt đầu đua sẽ tự chuẩn bị danh sách và tự chạy các lượt.


## 5.4 - D10 GLB asset
- Added user-provided `dice-game/assets/D10.glb`.
- Added `dice-game/js/d10-engine.js` for Three.js rendering and asset animation.
- D6 remains CSS-based; D10 uses GLB with CSS fallback.


## Update Game Hub + Bách Chiêu v1.0 + Farm realtime orders
- Thêm Bách Chiêu v1.0 (từ bản hoàn thiện Smooth Input) vào Game Hub.
- Dùng ảnh tu tiên làm banner Game Hub.
- Nông Trại Nhỏ: đồng hồ đơn hàng chạy theo thời gian thực và tiếp tục trôi khi đóng game; hết hạn khi offline không khởi động lại cooldown từ lúc mở game.


## Dice Arena 6.0 – Đại Hội Linh Thú
- Thêm cơ chế giữ để nạp lực, thả để tung; chạm nhanh dùng lực trung bình.
- Lực ném thay đổi chuyển động xúc xắc nhưng không tác động xác suất kết quả.
- Thêm nút ĐẠI HỘI LINH THÚ mở game đua trong popup riêng.
- 6 Linh Thú có passive khác nhau, 5 xúc xắc D6, giữ/reroll tối đa 1 lần, combo Đôi/Bộ ba/Sảnh/Chẵn/Lẻ/Song 6.
- 5 địa hình thay đổi luật: Thảo Nguyên, Khúc Cua, Bùn Lầy, Cầu Hẹp, Nước Rút.
- 5 AI dùng cùng xác suất xúc xắc, chỉ khác chiến lược giữ/reroll.

## Dice Arena 7.0 – Đấu Trường Chẵn Lẻ
- Thay mode đua Linh Thú bằng **Đấu Trường Chẵn Lẻ** trong Dice Arena; chế độ tung xúc xắc tự do vẫn giữ nguyên.
- Mỗi đấu thủ luôn dùng đúng 2 D6; toàn bộ đấu thủ tung đồng thời ở đầu vòng và lưu kết quả riêng theo slot.
- Xúc xắc lẻ hiển thị đỏ và cộng Công; xúc xắc chẵn hiển thị xanh và cộng Khiên.
- Hỗ trợ 2–6 slot, mỗi slot chọn Người chơi hoặc AI, đổi tên tự do và có thể chọn trùng nhân vật.
- Có 12 nhân vật toàn thân, cân bằng 6 nữ/6 nam, trải từ trẻ em đến người lớn tuổi.
- Đấu thủ được bố trí thành vòng tròn để đường đạn dễ quan sát.
- Sau pha canh lực, vòng sáng khóa mục tiêu chạy qua các đối thủ với tốc độ bám theo tốc độ thanh canh lực; bấm BẮN để chốt đúng người đang sáng.
- Viên đạn có vệt sáng vàng; kích thước tăng theo Công và độ chính xác. PERFECT tạo đạn khổng lồ và hiệu ứng va chạm mạnh.
- Chỉ trừ Khiên/Tim sau khi projectile thực sự chạm mục tiêu; số nổi dùng biểu tượng `🛡️ -x` và `❤️ -y` để trẻ nhỏ dễ hiểu.
- Thêm âm hiệu riêng cho tung xúc xắc, thanh canh, đổi mục tiêu, bắn, PERFECT, khiên vỡ và trúng đạn.
- Popup luật nhanh có tùy chọn **Không hiện hướng dẫn này lần sau**.
- Service Worker cập nhật cache lên `linh-kanban-static-v700-dice-even-odd-arena`.
```

### `CHANGELOG_EXCEL_VBA_JSON_V1.txt`

```text
KANBAN - NÂNG CẤP EXCEL JSON KÈM VBA / MACRO
Ngày: 2026-09-14

1. Mục Tool -> Excel -> Đọc & xuất JSON
- Thêm tùy chọn: "Kèm VBA / Macro" (mặc định bật).
- Hỗ trợ đọc VBA blob khi workbook được nạp bằng SheetJS bookVBA:true.
- Có fallback đọc trực tiếp xl/vbaProject.bin đối với XLSM/XLSB.

2. Xuất 1 JSON
- Giữ nguyên dữ liệu sheet/cell hiện có.
- Thêm khóa "vba" khi bật tùy chọn VBA.
- VBA JSON gồm:
  + Module chuẩn.
  + Class Module.
  + Code-behind của Worksheet/Document module.
  + ThisWorkbook.
  + UserForm code.
  + Metadata UserForm designer streams.
  + PROJECT descriptor/code page nếu đọc được.
  + rawProject.base64: giữ nguyên toàn bộ vbaProject.bin để không mất binary UserForm/control/resource.
  + legacyMacroSheets: phát hiện Excel 4.0 Macro Sheet (XLM) nếu có.

3. Xuất JSON chia nhỏ
- Tạo thêm vba_project.json.
- manifest.json tự thêm file VBA, trạng thái phân tích và thứ tự đọc khuyến nghị.

4. An toàn
- Chỉ đọc/giải nén dữ liệu VBA, tuyệt đối không thực thi macro.
- Nếu source VBA không giải mã hoàn toàn, rawProject.base64 vẫn giữ nguyên blob gốc để không mất dữ liệu.

5. File thay đổi
- office-tools/office-tools.js
- office-tools/vba-extractor.mjs (mới)
- index.html (bump cache-busting version)
- sw.js (cache module mới)

6. Kiểm thử kỹ thuật
- node --check office-tools/office-tools.js: PASS
- node --check office-tools/vba-extractor.mjs: PASS
- node --check sw.js: PASS
- Test VBA compressed-container literal: PASS
- Test CFB regular streams: PASS
- Test CFB mini streams: PASS
- Test phân loại Module / Sheet / ThisWorkbook / UserForm: PASS

LƯU Ý
- Nên thử thêm ít nhất 1 file XLSM thực tế có UserForm và 1 file XLS đời cũ có VBA để đối chiếu 100% với VBA Editor của Excel trước khi coi là production-final.
```

### `CHANGELOG_EXCEL_VBA_JSON_V2.txt`

```text
KANBAN - EXCEL VBA JSON V2
Ngày: 14/09/2026

MỤC TIÊU
- Hoàn thiện việc xuất source VBA từ XLSM/XLS/XLSB sang JSON.
- Ưu tiên Module, Class, Sheet code và ThisWorkbook.
- UserForm để bản sau; raw vbaProject.bin vẫn được giữ Base64 để dự phòng.

THAY ĐỔI CHÍNH
1. Đọc VBA/dir và lấy MODULEOFFSET chính xác cho từng module.
2. Không còn giới hạn dò 256 byte 0x01 như V1.
3. Fallback scan toàn stream chỉ dùng khi MODULEOFFSET không dùng được.
4. status="ok" chỉ khi toàn bộ component được khai báo đã được giải mã.
5. Nếu thiếu component: status="partial"; không đọc được source nào: "raw_only".
6. summary thêm:
   - declaredComponents / extractedComponents / missingComponents / missing
   - standardModulesDeclared, documentModulesDeclared, thisWorkbookModulesDeclared, classModulesDeclared, userFormModulesDeclared
   - modulesWithCode / stubModules
7. Mỗi module thêm:
   - declaredTextOffset, sourceOffset, extractionMethod, scanAttempts
   - lineCount, procedureCount, hasCode
8. Project thêm dirModuleMetadata.
9. JSON Excel thêm sheetCodeMap để ánh xạ CodeName (Sheet1...) với tên tab workbook khi SheetJS cung cấp CodeName.
10. Service Worker/cache version được tăng để trình duyệt không giữ parser V1.

REGRESSION TEST THỰC TẾ
Workbook: Tonghop.xlsm (từ JSON người dùng xuất)
- Project khai báo: 11 component.
- V2 giải mã: 11/11 component.
- Missing: 0.
- Status: ok.
- Standard module MB_Statement_Importer:
  + MODULEOFFSET: 107533.
  + extractionMethod: dir_module_offset.
  + 52 Sub/Function/Property.
  + Source sau khi bỏ Attribute VB_* khớp 100% với file VBA đối chứng: 47.650 ký tự.
- ThisWorkbook: có code.
- Sheet1: có code.
- 8 document module còn lại: stub, chỉ metadata Attribute VB_*.
```

### `CHANGELOG_GIAKHANG_v7.4.3.md`

```text
# Gia Khang Worksheet Editor v7.4.3

Sửa lỗi chế độ **Sửa chữ**:
- Khi đang sửa một khung chữ, click lại vào chính khung đó không còn render lại DOM và làm mất caret/focus.
- Sau khi đổi cỡ chữ, màu chữ hoặc nền chữ trên toolbar, focus được trả lại khung chữ nên có thể gõ tiếp ngay.
- Giữ lại vùng chữ đã chọn sau khi áp dụng định dạng.
- Chuyển từ **Di chuyển** sang **Sửa chữ** khi đang chọn một khung text sẽ vào sửa trực tiếp khung đó.
- Không thay đổi logic project/autosave/export hiện có.

Cache/service worker được nâng phiên bản để GitHub Pages không giữ JS cũ.
```

### `CHANGELOG_PDF_SIGN_PERSONAL_V5.txt`

```text
PDF Ký cá nhân V5 - sửa lỗi "Too few bytes to parse DER"
- Bỏ @signpdf/signpdf khỏi bước ký cá nhân trên trình duyệt.
- Tự xử lý ByteRange + Contents trực tiếp trên Uint8Array.
- CMS detached vẫn được tạo bởi node-forge với RSA/SHA-256.
- Không thay đổi dữ liệu KanBan, công cụ PDF cũ hay Signing Agent doanh nghiệp.
- Nếu trình duyệt đang giữ certificate cũ từ bản lỗi, có thể Xóa certificate và tạo lại một lần để thử sạch.
```

### `CHANGELOG_PDF_SIGN_PERSONAL_V6.txt`

```text
V6 - SỬA ENGINE KÝ CÁ NHÂN
============================
1. Bỏ hoàn toàn forge.pkcs7.createSignedData() khỏi ký cá nhân.
2. Tự dựng CMS SignedData DER tối giản cho /adbe.pkcs7.detached.
3. Ký trực tiếp SHA-256/RSA PKCS#1 v1.5 trên ByteRange.
4. Tự verify chữ ký RSA trước khi đóng gói CMS.
5. Tự parse-roundtrip CMS DER trước khi nhúng PDF.
6. Khi tạo certificate mới: serial luôn là ASN.1 INTEGER dương; DN Unicode dùng UTF8String.
7. Nút “Kiểm tra certificate” nay ký thử CMS thật, không chỉ kiểm tra mật khẩu.
8. Lỗi ký hiển thị rõ bước nào thất bại.
9. Không cần xóa certificate cũ chỉ để dùng engine V6; engine mới dùng được record PEM-v2 hiện có.
```

### `CHANGELOG_PDF_SIGN_PERSONAL_V7.txt`

```text
PDF SIGNING PERSONAL V7
=======================
- Sửa lỗi Cannot read properties of undefined (reading replace) ở bước tạo placeholder PDF.
- Bỏ hoàn toàn @signpdf/placeholder-pdf-lib qua esm.sh trong luồng ký cá nhân.
- Dùng cùng PDFLib 1.17.1 đã được Office Tools tải thành công từ unpkg.
- Tự tạo signature dictionary / ByteRange / Contents / AcroForm bằng PDFLib primitives.
- Truyền toàn bộ giá trị bắt buộc rõ ràng; không còn default export/constants có thể undefined.
- Tách thông báo lỗi theo từng bước: tạo ảnh, nạp PDFLib, đọc PDF, nhúng ảnh, tạo placeholder, lưu placeholder, tạo CMS, lưu file.
- Không thay đổi dữ liệu KanBan, các tool PDF khác hay Signing Agent doanh nghiệp.
- Giữ nguyên AcroForm/Fields có sẵn (kể cả ô chữ ký của bên khác) thay vì thay thế mảng Fields khi nó nằm qua PDFRef.
```

### `HUONG_DAN_CAP_NHAT.txt`

```text
BẢN CẬP NHẬT v5.17 - GAME HUB + FARM V2

1. Giải nén file ZIP này.
2. Upload đè index.html và sw.js lên thư mục gốc GitHub Pages.
3. Upload mới game-launcher.js vào thư mục gốc.
4. Upload nguyên thư mục farm-game/.
5. Dice dùng game-launcher.js chung; dice-launcher.js cũ đã được loại bỏ. Tarot/Tetris launcher cũ vẫn không được index.html gọi.
6. Sau khi GitHub Pages cập nhật, mở: ?v=517 hoặc Ctrl+F5.

Các file Kanban KHÔNG nằm trong patch và không bị sửa: app.js, dragdrop.js, music-player.js, styles.css, office-tools/*.
```

### `HUONG_DAN_CAP_NHAT_v7.4.3.txt`

```text
CAP NHAT v7.4.3
1. Chep de cac file trong PATCH dung cau truc vao Kanban hien tai.
2. Day len GitHub Pages.
3. Tren Chrome bam Ctrl+F5 mot lan.
4. Neu van thay ban cu, mo DevTools > Application > Service Workers > Unregister, sau do Ctrl+F5.

Test nhanh:
- Chon khung chu > Sua chu > click vao giua chu > go them ky tu.
- Ctrl+A trong khung > tang/giam co chu > go tiep.
- Boi den mot tu > doi co/mau/nen > click lai vao khung > go tiep.
```

### `TEST_REPORT_DAI_LUC_1.0.3.txt`

```text
ĐẠI LỤC NGHỀ NGHIỆP — KIỂM TRA LOGIC 1.0.3

1. Lỗi đã xác định và sửa
- renderSkill() gọi renderUnlockSkill() khi nghề chưa mở nhưng hàm renderUnlockSkill() bị thiếu trong bản tích hợp.
- Hậu quả: khi bấm nghề chưa mở (ví dụ Khai khoáng), JavaScript phát sinh ReferenceError và màn hình không chuyển sang phần Mở khóa, dù các điều kiện đã đạt.
- Đã bổ sung màn hình Mở khóa nghề đầy đủ, hiển thị từng điều kiện và nút mở khóa.
- Khi đủ điều kiện, sidebar hiển thị “Sẵn sàng mở” và thẻ Mục tiêu có nút “Mở <nghề>”.

2. Chuỗi mở khóa đã rà soát
- Thu nhặt: mở sẵn.
- Khai khoáng: Thu nhặt Lv3 + 20 xu.
- Đốn gỗ: Tổng cấp 6 + 60 xu.
- Luyện kim: Khai khoáng Lv4 + 10 Quặng sắt + 120 xu.
- Chế tác: Luyện kim Lv3 + Đốn gỗ Lv3 + 220 xu.
- Chiến đấu: Chế tác Lv4 + sở hữu Kiếm sắt (không tiêu hao Kiếm sắt).
Không phát hiện vòng khóa chết/circular dependency.

3. Dữ liệu đã rà soát
- 78 vật phẩm, 78 hành động.
- Không có input/output công thức tham chiếu vật phẩm không tồn tại.
- Không có điều kiện nghề/bản đồ tham chiếu skill/item không tồn tại.
- Giá Luyện kim giữ mức thành phẩm ~109–111% giá nguyên liệu cơ sở.
- Giá chế tác/trang bị không tạo vòng mua nguyên liệu -> chế -> bán nhanh có lãi vô hạn.
- Chuỗi trang bị chiến đấu tăng theo Chế tác/Chiến đấu Lv, không có món yêu cầu trước nguồn nguyên liệu của chính nó.

4. Kiểm tra kỹ thuật
- Toàn bộ file .js trong Kanban đã chạy node --check: không phát hiện lỗi cú pháp.
- Giữ nguyên 3 Slot, Giftcode yeubo/koyeubo, engine timer, auto-fit và save hiện hành.
- Tăng cache/version Đại Lục Nghề Nghiệp lên 1.0.3 để GitHub Pages không giữ app.js cũ.
```

### `TEST_REPORT_DAI_LUC_1.0.4.txt`

```text
ĐẠI LỤC NGHỀ NGHIỆP 1.0.4 — BLACK SCREEN FIX

- Game index.html nay tự chứa CSS + data + app, tránh service worker/cache trộn file khác phiên bản.
- Launcher tăng lên 1.0.4, game-launcher lên 1.64.
- Cache service worker đổi tên để ép cập nhật.
- Có màn hình báo lỗi khởi động thay vì chỉ hiện nền đen.
- Giữ nguyên logic 3 Slot, yeubo/koyeubo, unlock audit 1.0.3 và dữ liệu game.
```

### `TEST_REPORT_DICE_6.0.txt`

```text
DICE ARENA 6.0 – KIỂM TRA TĨNH

PASS – js/app.js: node --check
PASS – js/d10-engine.js: node --check
PASS – sw.js: node --check
PASS – game-launcher.js: node --check
PASS – dice-launcher.js: node --check
PASS – 44/44 DOM id được app.js tham chiếu đều tồn tại trong dice-game/index.html
PASS – Service Worker cache version đã tăng lên v640 và URL Dice Arena lên 6.0.0
PASS – Dice Arena tự do và Đại Hội Linh Thú dùng storage key riêng.

Ghi chú: môi trường headless Chromium trong container không kết thúc ổn định do DBus/Chromium sandbox của môi trường, nên không dùng kết quả browser-headless làm tiêu chí PASS/FAIL.
```

### `TEST_REPORT_DICE_7.2.1.txt`

```text
DICE ARENA v7.2.1 - HOTFIX KẸT SAU KHI BẮN
Ngày kiểm tra: 25/08/2026

LỖI XÁC ĐỊNH
- Ảnh lỗi cho thấy pha CANH LỰC đã kết thúc (LỆCH 45%) và nút BẮN đã được kích hoạt vào mục tiêu Nít, nhưng trận không chuyển lượt.
- Điểm rủi ro nằm ở luồng fireCurrentTarget() -> launchProjectile(). Bản v7.2 chờ trực tiếp await anim.finished. Nếu Promise Web Animations bị treo/gián đoạn trong iframe/dialog hoặc bất kỳ lỗi runtime nào phát sinh trong hiệu ứng đạn, combatBusy có thể giữ true và phase giữ ở firing. Khi đó toàn bộ Space/nút bắn/lượt tiếp theo đều bị khóa.
- fireCurrentTarget() cũ chỉ dùng .then(), không có catch/finally nên một Promise reject cũng có thể khóa trận.

ĐÃ SỬA
1. Thêm watchdog cho Animation.finished bằng Promise.race; hiệu ứng đạn không được phép chờ vô hạn.
2. Thêm fallback transition khi Web Animations API không khả dụng.
3. Bọc launchProjectile bằng try/finally để combatBusy luôn được trả về false.
4. fireCurrentTarget dùng catch/finally: nếu hiệu ứng có lỗi, ghi log và vẫn chuyển sang lượt kế tiếp thay vì đứng game.
5. Timer khóa mục tiêu tự reset handle sau khi chạy để tránh trạng thái timer cũ khó kiểm soát.
6. Khi đã bắn, giao diện hiện “Đang bắn: <mục tiêu>” và nút BẮN có trạng thái disabled trực quan.
7. Bump cache/version Dice lên 7.2.1 và Service Worker mới để GitHub Pages không giữ bản JS 7.2 cũ.

KIỂM TRA TĨNH
- node --check dice-game/js/app.js: PASS
- node --check game-launcher.js: PASS
- node --check sw.js: PASS
- Không thay đổi luật Công/Khiên, HP, sát thương, nhân vật, dữ liệu Kanban hay game khác.

MỨC ĐỘ CHẮC CHẮN
- Cao đối với cơ chế gây “kẹt sau khi đã bấm BẮN”: ảnh chụp khớp đúng trạng thái UI sau fireCurrentTarget().
- Trung bình đối với nguyên nhân môi trường cụ thể làm Animation.finished không settle trên máy người dùng, vì không có Console log tại thời điểm lỗi. Hotfix đã loại bỏ cả hai đường gây khóa: Promise pending và Promise reject.
```

### `TEST_REPORT_DICE_7.2.txt`

```text
DICE ARENA v7.2 - FINAL CHANGE & TEST REPORT
Ngày kiểm tra: 25/08/2026

PHẠM VI
- Chỉ nâng cấp Dice Arena và các file launcher/cache cần thiết để Kanban gọi đúng bản Dice mới.
- Không thay đổi dữ liệu Kanban, các game khác hoặc Office Tools.

ĐÃ NÂNG CẤP
1. Spacebar theo trạng thái:
   - Ngoài Đấu Trường: Space = tung nhanh như cũ.
   - timing: Space = dừng thanh canh lực.
   - target: Space = bắn.
   - rolling/firing/AI: Space bị bỏ qua.
   - Chặn key repeat để giữ Space không kích hoạt lặp.
2. Sửa tên/status đấu thủ trên cùng bị cắt: bán kính dọc arena giảm, status chuyển vào vùng an toàn.
3. Bỏ combatDiceStage trung tâm. Mỗi đấu thủ có 2 D6 thật tung và nằm nguyên dưới chân trong cả vòng.
4. Do không còn stage 12 xúc xắc tập trung, lỗi tràn/cắt hàng thứ 3 khi có 6 người được loại bỏ.
5. Thêm combatSessionId + hủy timer/session. Đổi người/Chơi lại/Đóng giữa animation không còn tiếp tục ghi vào state cũ.
6. Cân bằng:
   - HP: 18; người gục trở lại vòng sau với 9 HP.
   - 50% lực = 0.50x Công; 75% = 1.25x; gần 100% = xấp xỉ 1.50x; PERFECT = 1.75x.
   - Giữ nguyên luật D6: số lẻ = Công, số chẵn = Khiên.
7. Mobile:
   - combat-shell dùng 100dvh + safe-area.
   - arena khoảng 49-50dvh trên điện thoại.
   - action box sticky ở đáy; nút có touch-action: manipulation.
8. AI có 3 phong cách:
   - Hiếu chiến: ưu tiên đối thủ HP thấp.
   - Phá khiên: ưu tiên mục tiêu ít Khiên/có Công đáng chú ý.
   - Cân bằng: chọn mục tiêu theo trọng số, vẫn có ngẫu nhiên.
   - AI dùng cùng xúc xắc và cơ chế timing, không đọc trước kết quả.
9. Dọn source:
   - Loại CSS Đại Hội Linh Thú/Race không còn dùng.
   - Loại hàm app/D10 không dùng và dice-launcher.js cũ.
   - Game Hub chuyển Dice sang v7.2; Service Worker đổi cache name/version.
   - D10 3D là enhancement khi CDN khả dụng. Khi mở local file/offline hoặc CDN lỗi, game tự dùng D10 CSS nội bộ; CDN không còn là điều kiện để chơi Dice.
10. Nhận biết lượt/mục tiêu:
   - Người đang tới lượt: viền xanh dương đậm #0757D9, desktop 7px.
   - Mục tiêu đang quét: viền đỏ đậm #D71920, desktop 8px.

KIỂM TRA HÀNH VI TRÊN CHROMIUM DEVTOOLS - PASS
- 6 fighters: PASS.
- 12 D6 dưới chân: PASS.
- Không còn combatDiceStage: PASS.
- Tên/status người trên cùng không bị clip: PASS.
- Active turn: đúng 1 người, border 7px rgb(7,87,217): PASS.
- Keyboard repeat Space: bị bỏ qua: PASS.
- Space timing -> target: PASS.
- Target: đúng 1 người, border 8px rgb(215,25,32): PASS.
- Space target -> fire: PASS.
- Restart giữa lúc dice đang roll: trở lại setup, arena rỗng, state cũ không tiếp tục: PASS.

KIỂM TRA MOBILE 390x844 - PASS
- 6 fighters / 12 foot dice: PASS.
- combat-shell min/max height = 844px (100dvh): PASS.
- arena render ~413.5px (~49% viewport): PASS.
- action box position = sticky: PASS.
- top fighter status vẫn nằm trong arena: PASS.

KIỂM TRA TĨNH
- node --check: dice-game/js/app.js PASS.
- node --check: dice-game/js/d10-engine.js PASS.
- node --check: game-launcher.js PASS.
- node --check: sw.js PASS.
- CSS ngoặc { } cân bằng: PASS.
- Không còn combatDiceStage / race CSS / setStaticD6 / shuffle / các hàm D10 đã bỏ: PASS.

GHI CHÚ CÂN BẰNG
- Trung bình 2D6 theo luật hiện tại: Công = 3.0; Khiên = 4.0.
- Sau hệ số timing mới, sát thương HP kỳ vọng khi đối đầu một Khiên 2D6 ngẫu nhiên:
  50% ≈ 0.41 HP; 75% ≈ 1.72 HP; PERFECT ≈ 2.94 HP.
- Mục tiêu là tăng phần thưởng cho kỹ năng canh lực mà vẫn giữ luật chẵn/lẻ dễ hiểu.
```

### `TEST_REPORT_EXCEL_VBA_JSON_V1.txt`

```text
TEST REPORT - EXCEL JSON + VBA/MACRO
Date: 2026-09-14

PASS 1: JavaScript syntax - office-tools/office-tools.js
PASS 2: JavaScript module syntax - office-tools/vba-extractor.mjs
PASS 3: Service worker syntax - sw.js
PASS 4: MS-OVBA compressed-container decompression using synthetic literal-token stream
PASS 5: CFB regular-sector reader, VBA/dir, PROJECT, module source extraction
PASS 6: CFB MiniFAT / mini-stream reader for small VBA streams
PASS 7: Module classification: standard Module, Worksheet document module, ThisWorkbook, UserForm
PASS 8: UserForm storage discovery and designer binary-stream metadata
PASS 9: Raw vbaProject.bin preservation path in JSON design
PASS 10: Split-export manifest includes vba_project.json when VBA option enabled

REMAINING REAL-WORLD VALIDATION
- One genuine XLSM containing multiple standard modules + class + worksheet code + ThisWorkbook + UserForm.
- One BIFF8 XLS containing VBA.
- One password/protected VBA project (expected: raw blob preserved; readable source may be partial/unavailable depending protection).
```

### `TEST_REPORT_EXCEL_VBA_JSON_V2.txt`

```text
TEST REPORT - EXCEL VBA JSON V2
Ngày: 14/09/2026

1. Syntax
- vba-extractor.mjs: kiểm tra syntax Node.
- office-tools.js: kiểm tra syntax Node.
- sw.js: kiểm tra syntax Node.

2. Regression workbook thật
Input raw VBA: vbaProject.bin được khôi phục từ 260914 Tonghop_cells(1).json.
Expected source: Pasted text(20260914-072529).txt.

Kết quả:
- status = ok
- declaredComponents = 11
- extractedComponents = 11
- missingComponents = 0
- standardModules = 1
- documentModules = 9
- thisWorkbookModules = 1
- modulesWithCode = 3
- stubModules = 8
- MB_Statement_Importer offset = 107533
- MB_Statement_Importer extractionMethod = dir_module_offset
- MB_Statement_Importer procedureCount = 52
- Source VBA business code khớp 100% file đối chứng sau khi loại metadata Attribute VB_*.

3. Vấn đề V1 đã tái hiện và đóng
- V1 chỉ thử tối đa 256 vị trí byte 0x01 trong module stream.
- Stream MB_Statement_Importer có 1.369 vị trí byte 0x01.
- Source thật ở offset 107533 nên V1 bỏ sót.
- V2 lấy offset từ VBA/dir nên không phụ thuộc số lượng byte 0x01.

4. UserForm
- Chưa hoàn thiện parser layout/control theo yêu cầu người dùng.
- rawProject.base64 vẫn bảo toàn toàn bộ vbaProject.bin.
```

### `TEST_REPORT_GIA_KHANG_EDITOR.txt`

```text
LÂM GIA KHANG - LÀM BÀI TẬP - SMOKE TEST
PASS: Import 2 IMG
PASS: Trang nối dọc
PASS: Gõ Space bình thường
PASS: Mũi tên di chuyển text
PASS: Ctrl+Z Undo
PASS: Ctrl+Y Redo
PASS: Highlight
PASS: Sidebar ↑↓ đổi trang
PASS: Xuất PNG nối dài
PASS: Không có JS error

Ghi chú: IndexedDB autosave cần origin HTTP/HTTPS; môi trường kiểm thử headless bị chặn localhost nên phần này được kiểm tra bằng rà soát logic/static, không chạy end-to-end.
```

### `TEST_REPORT_GIA_KHANG_EDITOR_V742.txt`

```text
KANBAN - GIA KHANG EDITOR v7.4.2
Ngày kiểm tra: 2026-09-12

PASS 1: Ctrl+A trong khung chữ -> tăng cỡ chữ 28 -> 29, toàn bộ chữ đổi cỡ.
PASS 2: Sau khi thay đổi cỡ chữ bằng ô spinner, khung vẫn ở chế độ editing và tiếp tục gõ được.
PASS 3: Bôi đen riêng từ "watch" -> đặt cỡ 40, phần còn lại giữ 29.
PASS 4: Tô nền riêng từ "watch" -> #ffeb3b, phần còn lại không có nền.
PASS 5: Chuyển sang chế độ Di chuyển, chọn khung -> đặt cỡ 31, toàn bộ các run trong khung đều đổi 31.
PASS 6: composePage render thành canvas 800x1100 không phát sinh lỗi JavaScript.
PASS 7: node --check worksheet-editor.js, office-tools.js, sw.js không có lỗi syntax.

Ghi chú: Test giao diện được thực hiện bằng Chromium headless với mô phỏng thao tác selection/contenteditable thực tế.
```

### `TEST_REPORT_GIA_KHANG_EDITOR_V744.txt`

```text
LÂM GIA KHANG - LÀM BÀI TẬP v7.4.4 - TEST REPORT

1. PASS - node --check office-tools/worksheet-editor.js
2. PASS - node --check office-tools/office-tools.js
3. PASS - node --check sw.js
4. PASS - Không còn wsSelectMode / data-select-mode / selectMode trong worksheet-editor.js.
5. PASS - Nút Back hiển thị chuỗi "Trở về KanBan".
6. PASS - Single-click text dùng nhánh chọn/kéo; double-click gọi enterTextEdit.
7. PASS - Double-click shape bật shapeEditKey; resize dùng 4 corner handles.
8. PASS - applyTextToolbarStyle giữ cơ chế toàn khung / selection riêng từ v7.4.3.
9. PASS - Màu nền chữ vẫn render trong DOM và khi export canvas/PDF.
10. PASS - Service Worker cache đổi sang v744 và worksheet-editor query version 1.2.0.

Lưu ý: kiểm tra syntax và kiểm tra logic source đã hoàn tất trong môi trường build. Nên Ctrl+F5 sau khi đẩy lên GitHub Pages để loại cache cũ.
```

### `TEST_REPORT_PDF_SIGNING_KANBAN.txt`

```text
TEST REPORT - PDF SIGNING INTEGRATION
====================================
Ngày: 08/09/2026

PHẠM VI THAY ĐỔI
- index.html: chỉ bump version office-tools CSS/JS.
- sw.js: bump cache version + cache module ký số và ZIP Signing Agent.
- office-tools/office-tools.js: import module ký số + thêm sub-tab Ký số + tooltip.
- office-tools/office-tools.css: chỉ bổ sung class CSS office-sign-*.
- Thêm office-tools/pdf-signing.js.
- Thêm gói Signing Agent.

KHÔNG THAY ĐỔI
- app.js
- dragdrop.js
- music-player.js
- game launcher / game data
- logic của các PDF tool cũ
- dữ liệu/localStorage KanBan hiện hữu

KIỂM TRA TĨNH ĐÃ CHẠY
- node --check office-tools/office-tools.js: PASS
- node --check office-tools/pdf-signing.js: PASS
- node --check sw.js: PASS
- python compile kanban_signing_agent.py: PASS

GIỚI HẠN MÔI TRƯỜNG TEST
- Môi trường build hiện tại chặn Chromium truy cập localhost/file:// nên không chạy được UI end-to-end bằng Playwright.
- Không có Windows USB Token vật lý trong môi trường build; tầng doanh nghiệp tái sử dụng cơ chế Windows Certificate Store/CSP/KSP từ bản desktop đã ký thành công trên máy thực tế trước đó.
- Các thư viện ký cá nhân @signpdf/node-forge được tải lười từ CDN khi người dùng thực sự dùng chức năng, tương tự cách Office Tools hiện tải PDF/Excel libraries theo nhu cầu.

KHUYẾN NGHỊ TEST SAU KHI UP GITHUB
1. Mở Công cụ > PDF > Ký số, xác nhận mặc định Ký cá nhân.
2. Tạo certificate thử, tải backup P12, ký một PDF chưa ký và mở Foxit kiểm tra.
3. Chuyển Ký doanh nghiệp, tải Agent, cài Agent, cắm USB Token, đọc chứng thư và ký một bản COPY PDF.
4. Thử PDF đã có chữ ký của đối tác bằng chế độ doanh nghiệp để kiểm tra incremental update.
```

### `THAY_DOI_KY_SO_CA_NHAN_V3.txt`

```text
BẢN SỬA PDF KÝ SỐ CÁ NHÂN - V3
================================
1. Sửa lỗi ký cá nhân báo:
   PKCS#12 MAC could not be verified. Invalid password?
   - Không còn dùng @signpdf/signer-p12 cho phép ký thực tế trong browser.
   - Dùng signer Forge nội bộ cùng implementation đã tạo/kiểm tra P12.
   - Mật khẩu được kiểm tra trước trong popup; sai thì cho nhập lại ngay.

2. Mục "4. Ký PDF" không còn position: sticky.
   - Không bay theo khi cuộn.
   - Không che các tùy chọn thiết kế phía dưới.

3. Thêm nút "Toàn màn hình / Thu nhỏ" ngay trên phần Ký số.
   - Phóng popup Office Tools lên 100vw x 100dvh.
   - Đóng popup sẽ tự thoát trạng thái full screen.

4. Tạo certificate cá nhân bằng popup.
   - Họ tên, Email, Nhãn, Giá trị, Hiệu lực, Mật khẩu, Nhập lại mật khẩu.
   - Nếu chưa có certificate mà bấm KÝ CÁ NHÂN, popup tạo certificate tự xuất hiện.
   - Có thể "Tạo & ký PDF" liên tục trong một luồng.

5. Ký cá nhân bằng popup mật khẩu.
   - Không cần tìm ô mật khẩu ở phần 2.
   - Mật khẩu không lưu.
   - Nút "Kiểm tra mật khẩu" và "Nhập P12/PFX" cũng dùng popup.

6. Không sửa dữ liệu KanBan.
   - Không thay app.js, dragdrop.js hoặc khóa dữ liệu KanBan.
   - Chỉ đổi: index.html, sw.js, office-tools/office-tools.js,
     office-tools/office-tools.css, office-tools/pdf-signing.js.

LƯU Ý QUAN TRỌNG
- Chế độ ký cá nhân chạy thuần trình duyệt vẫn dùng pdf-lib để lưu lại PDF trước khi ký.
- Nếu PDF đã có chữ ký số của bên khác, chữ ký cũ CÓ THỂ mất hiệu lực sau khi lưu lại.
  KanBan vẫn giữ cảnh báo + ô xác nhận rủi ro trước khi cho ký cá nhân.
```

### `THAY_DOI_KY_SO_CA_NHAN_V4.txt`

```text
KÝ SỐ PDF V4
- Certificate cá nhân mới không còn phụ thuộc P12 trong lúc ký; lưu certificate PEM + private key mã hóa AES trong IndexedDB.
- Thêm nút Xóa certificate để tạo lại nếu quên mật khẩu.
- Nhập P12/PFX được chuyển sang định dạng nội bộ sau khi nhập.
- Tải bản sao P12 được tạo theo yêu cầu từ certificate nội bộ.
- Thêm nhiều dòng thông tin tùy ý cho cá nhân và doanh nghiệp: Nhãn + Giá trị, Thêm/Xóa.
- Bỏ checkbox cảnh báo chữ ký cũ khỏi giao diện. Cảnh báo chỉ hiện popup khi thực sự bấm ký cá nhân trên PDF đã có chữ ký số.
- Luôn xuất file mới *_BAN_SAO_KY_CA_NHAN.pdf hoặc *_BAN_SAO_KY_DOANH_NGHIEP.pdf; file gốc không thay đổi.
- Lưu ý: tạo bản sao không tự bảo toàn hiệu lực chữ ký cũ nếu PDF bị dựng lại; popup vẫn thông báo đúng kỹ thuật.
- Không sửa app.js, dragdrop.js hay dữ liệu KanBan cũ.
```

### `THAY_DOI_TIM_KIEM_NHAC_V2.txt`

```text
KANBAN - CẬP NHẬT TÌM KIẾM NHẠC + SIGNING AGENT EXE
=====================================================
1. Danh sách bài hát
- Thêm ô tìm kiếm realtime: gõ đến đâu lọc đến đó.
- Tìm không phân biệt hoa/thường và hỗ trợ tìm tiếng Việt không dấu.
- Tìm trên tên bài, ca sĩ, tên file và đường dẫn tương đối.
- Nút Xóa tìm kiếm + phím Esc.
- Hiển thị số kết quả dạng x/y bài.
- Popup playlist được mở rộng và giữ kích thước cố định khi lọc, tránh nhảy bố cục.

2. Ký số doanh nghiệp
- Đã nhúng KanBan_Signing_Agent.exe do người dùng build.
- Nút tải Signing Agent trong Tool PDF tải trực tiếp file EXE.
- EXE không được đưa vào precache Service Worker để tránh chiếm ~38 MB cache khi chưa tải.

3. Bảo toàn dữ liệu
- Không thay đổi key localStorage/IndexedDB của KanBan hiện có.
- Không thay đổi app.js, dragdrop.js, logic project/card/game và các PDF tool cũ.
```

### `THAY_DOI_TONG_HOP.txt`

```text
NHẬT KÝ THAY ĐỔI TỔNG HỢP – KANBAN CÁ NHÂN
Tệp này thay thế toàn bộ các tệp THAY_DOI_Vx.x.txt trước đây.

========================================================================
THAY_DOI_V2.0
========================================================================
Phiên bản 2.8
- Trình bày lại nút trong hộp sửa cột gọn gàng và cân đối.
- Mặc định bật lặp toàn bộ danh sách nhạc.
- Thêm tooltip Âm lượng cho thanh volume.
- Giữ nguyên toàn bộ chức năng Kanban, ghi chú, đồng hồ, chuyển ngày và trình phát nhạc hiện có.

========================================================================
THAY_DOI_V2.3
========================================================================
KANBAN CÁ NHÂN v2.3

1. Thêm nút Cài đặt ⚙ trên thanh công cụ.
2. Thêm chức năng Xóa toàn bộ dữ liệu.
3. Trước khi xóa có nút Xuất backup ngay.
4. Nút Xóa vĩnh viễn chỉ được bật khi người dùng gõ chính xác OK.
5. Sau khi xóa, ứng dụng trở về trạng thái ban đầu.
6. Chỉ xóa dữ liệu và cache của Kanban này; không xóa dữ liệu website khác cùng tên miền.

========================================================================
THAY_DOI_V2.4
========================================================================
Phiên bản 2.4
- Tự động chuyển công việc giữa các cột khi sang ngày mới; hỗ trợ nhiều quy tắc và nhiều dự án.
- Quy tắc lưu trong Local Storage và chạy lúc qua ngày hoặc lần mở đầu tiên sau ngày mới.
- Thêm Xóa toàn bộ nội dung cho từng cột.
- Lưu nội dung đã xóa dưới dạng văn bản thuần túy, có ngày tạo, sửa cuối và ngày xóa.
- Thêm thùng rác cấp hai và chức năng xóa vĩnh viễn để giải phóng dung lượng.

========================================================================
THAY_DOI_V2.5
========================================================================
PHIÊN BẢN 2.5

1. Giữ nguyên toàn bộ chức năng Kanban v2.4.
2. Thêm trình phát nhạc local trong sidebar.
3. Chọn, kéo thả và mở lại thư mục nhạc gần đây.
4. Hỗ trợ MP3, WAV, OGG, FLAC, M4A.
5. Thêm playlist popup, metadata, sắp xếp, highlight và click để phát.
6. Thêm Play/Pause, Next/Prev, Shuffle, Repeat, tiến trình, volume và phím Ctrl + Space.
7. Tối ưu: chỉ nạp tệp đang phát, metadata đọc nền theo hàng đợi nhỏ.

========================================================================
THAY_DOI_V2.6
========================================================================
Phiên bản 2.6
- Thêm ghi chú nhanh theo từng dự án trong vùng dưới tên dự án.
- Hỗ trợ nhiều ghi chú và định dạng văn bản cơ bản.
- Dán nội dung dưới dạng văn bản thuần túy, loại bỏ ảnh và mã nhúng.
- Ghi chú được lưu trong Local Storage và đi cùng file backup JSON.

========================================================================
THAY_DOI_V2.8
========================================================================
Phiên bản 2.8
- Tooltip đầy đủ cho các nút chức năng trong hộp ghi chú.
- Tooltip hiển thị đúng trên modal.
- Ô tên ghi chú có nút xổ danh sách ghi chú để chuyển nhanh.
- Cảnh báo khi chuyển ghi chú trong lúc còn thay đổi chưa lưu.

========================================================================
THAY_DOI_V2.9
========================================================================
Phiên bản 2.9
- Ghi nhanh công việc bằng Ctrl + Enter.
- Cấu hình cột nhận công việc mặc định theo từng dự án.
- Chọn nhiều thẻ bằng Ctrl/Shift/Ctrl+A và kéo cả nhóm.
- Tùy chọn màu nền riêng cho cột, mặc định không đổi.

========================================================================
THAY_DOI_V3.0
========================================================================
KANBAN CÁ NHÂN v3.0

1. XÓA NHANH NHIỀU CÔNG VIỆC
- Chọn thẻ bằng click, Ctrl+click, Shift+click hoặc Ctrl+A trong cột.
- Nhấn Delete để xóa toàn bộ thẻ đang chọn.
- Nội dung được chuyển vào khu Nội dung đã xóa dưới dạng văn bản lưu trữ.
- Có thể bấm Hoàn tác ngay sau khi xóa.
- Delete không hoạt động khi đang nhập trong input, textarea, select, trình soạn thảo hoặc khi modal đang mở.

2. BỘ CÔNG CỤ VĂN PHÒNG
- Bốn nút PDF, IMG, REN và XLS trên thanh công cụ.
- PDF:
  + Gộp nhiều PDF và kéo thả sắp xếp file.
  + Chuẩn hóa kích thước: giữ nguyên, theo trang đầu, theo trang rộng nhất, A4 dọc/A4 ngang.
  + Sắp xếp trang bằng thumbnail; chọn nhiều trang bằng Ctrl/Shift/Ctrl+A.
  + Xoay riêng từng trang, nhân bản, xóa, chuyển lên đầu/cuối, trích xuất và xuất lại PDF.
  + Tách từng trang, theo khoảng, trang chẵn hoặc trang lẻ.
  + PDF sang PNG theo DPI; ảnh sang PDF.
- IMG:
  + Đổi định dạng JPG/PNG/WebP.
  + Resize, xoay/lật, nén ảnh hàng loạt.
  + Ghép ảnh dọc/ngang/lưới, chuẩn hóa chiều rộng/chiều cao.
  + Đóng dấu văn bản.
- REN:
  + Chọn thư mục, preview tên mới, kiểm tra trùng tên.
  + Tiền tố, hậu tố, tìm/thay thế, regex, đánh số, đổi hoa/thường, xóa dấu, thay khoảng trắng và mẫu tên.
  + Xuất ZIP an toàn và manifest JSON.
  + Đổi tên file tại chỗ khi trình duyệt cấp quyền và người dùng gõ DOI TEN.
- XLS:
  + Đọc XLSX/XLS/XLSM/CSV và xem cấu trúc workbook.
  + Xuất JSON phân biệt ô value và formula, kèm cachedValue, formattedValue, hyperlink, note/comment và merged range khi đọc được.
  + Đổi tên, sắp xếp, nhân bản, xóa sheet trong bản kết quả.
  + Làm sạch dữ liệu cơ bản, gộp sheet theo vị trí hoặc tiêu đề.
  + Gộp nhiều workbook; tách sheet thành XLSX/CSV ZIP.

3. AN TOÀN DỮ LIỆU
- Giữ nguyên khóa Local Storage linh_personal_kanban_v1.
- Không xóa hoặc reset dữ liệu khi cập nhật hay Ctrl+F5.
- Dữ liệu công cụ văn phòng dùng khóa cài đặt riêng linh_kanban_office_settings_v1.
- Nội dung file chỉ được xử lý trong trình duyệt và không lưu vào dữ liệu Kanban.
- Chức năng xóa toàn bộ dữ liệu của Kanban cũng dọn khóa cài đặt công cụ văn phòng, nhưng không xóa file gốc trên máy.

4. CACHE
- Nâng Service Worker lên linh-kanban-static-v30.
- Cache thêm module giao diện công cụ văn phòng và JSZip cục bộ.

5. GIỚI HẠN CỦA BẢN STATIC
- PDF không OCR và không sửa trực tiếp chữ đã có trong PDF.
- IMG chưa có khung crop đồ họa.
- REN không đổi tên thư mục tại chỗ; chế độ ZIP an toàn có thể tạo lại cấu trúc thư mục với tên mới.
- XLS không chạy VBA/macro và không tự tính lại toàn bộ công thức; cachedValue là kết quả đã lưu gần nhất trong file.
- pdf-lib, PDF.js và SheetJS được tải lười từ nguồn đã ghim phiên bản ở lần đầu dùng PDF/Excel; vì vậy lần đầu cần Internet. File người dùng vẫn được xử lý cục bộ, không upload.

========================================================================
THAY_DOI_V3.1
========================================================================
PHIÊN BẢN 3.1

- Chuyển bốn nút PDF, IMG, REN và XLS xuống hàng dưới nhóm nút hệ thống để tận dụng vùng trống bên phải đồng hồ.
- Không thay đổi khóa Local Storage và không can thiệp dữ liệu Kanban hiện có.
- Đặt mặc định gộp Excel là “Gộp theo vị trí cột”.
- Thêm tooltip và mô tả trực tiếp giải thích hai chế độ gộp sheet.
- Cập nhật cache Service Worker lên v3.1.

========================================================================
THAY_DOI_V3.2
========================================================================
Phiên bản 3.2
- Thêm DRAW – Marble Draw 3D.
- Import Excel/CSV và nhập trực tiếp người tham dự.
- Khóa danh sách, xáo chính thức, gán mã và xác minh SHA-256.
- Quay từ hàng cao nhất xuống hàng thấp nhất bằng 10 viên bi số 0–9.
- Dữ liệu lưu trong IndexedDB riêng, không đổi dữ liệu Kanban.

========================================================================
THAY_DOI_V3.3
========================================================================
Kanban Ca Nhan v3.3 - Marble Draw
- Don gian hoa Marble Draw ve 1 giao dien chinh.
- Bo sidebar/tab trong Marble Draw, gom nhap danh sach + xao + bat dau dua tren cung mot man.
- Sua lai duong dua vat ly bang mang truot overlap de giam loi bi xuyen mang.
- Hien mapping chinh thuc ro rang ngay tren giao dien sau khi khoa ket qua xao.

========================================================================
THAY_DOI_V3.5
========================================================================
Kanban Ca Nhan v3.5 - Cache Hotfix
- Sua launcher Marble Draw tu v1.0.0 sang v1.2.1.
- Tang Service Worker cache tu v32 len v35.
- HTML va Marble Draw dung network-first de tranh giao dien cu.
- Dang ky Service Worker voi updateViaCache none va goi update ngay.
- Giu nguyen khoa du lieu Kanban va Marble Draw.

========================================================================
THAY_DOI_V3.6
========================================================================
Kanban Cá Nhân v3.6
- Marble Draw chỉ còn một màn hình Home.
- Nút Xáo danh sách thay đổi thật thứ tự trong bảng.
- Bỏ cột Chức danh.
- Chọn từ 2 đến 10 viên bi mỗi lượt; dưới 10 bi dùng số từ 1 đến số bi đã chọn.
- Số trên bi bám vào bề mặt nhìn thấy và không quay vòng quanh bi.
- Máng đua đổi sang mặt liền, chướng ngại thưa để giảm kẹt bi.
- Toàn bộ nội dung giao diện dùng cách xưng hô Bạn.

========================================================================
THAY_DOI_V3.7
========================================================================
Kanban Ca Nhan v3.7 - Marble Draw
- Sua loi luot dua dung mai khi mot vien bi bi ket: sau khi co vien ve dich dau tien, luot se cong bo ket qua va tu chuyen sang luot tiep theo.
- Neu khong co bi ve dich trong thoi gian quy dinh, he thong tu tao seed moi va chay lai luot.
- Them tuy chon So luot quay tren giao dien.
- Hien ro so luot toi thieu theo so nguoi va so bi.
- Giam ma sat, tang do doc va bo cac thanh chan de han che bi ket.
- Tang Service Worker cache len v37 va Marble Draw len 1.3.1.
- Khong thay doi khoa du lieu Kanban hien tai.

========================================================================
THAY_DOI_V4.0
========================================================================
KANBAN CA NHAN v4.0 - DICE ARENA
- Thay hoàn toàn game Marble Draw bằng Dice Arena.
- Nút DRAW đổi thành DICE.
- Chọn từ 1 đến 10 xúc xắc.
- Hai chế độ: Thả đồng thời và Thả từng viên.
- Sử dụng model xúc xắc, cốc lắc và vật liệu từ asset Dice Animation 2.
- Dice Arena lưu cài đặt và lịch sử ở khóa riêng, không sửa dữ liệu Kanban.
- Service Worker nâng lên cache v40-dice.

========================================================================
THAY_DOI_V4.1
========================================================================
KANBAN CA NHAN v4.1 - DICE ARENA HOTFIX

- Sua loi GLTFLoader: URL object gay loi lastIndexOf is not a function.
- Chuyen URL asset sang chuoi .href truoc khi nap model GLB.
- Nang version Dice Arena va Service Worker de xoa cache v4.0.
- Khong thay doi app.js, music-player.js, dragdrop.js, khoa Local Storage hoac du lieu Kanban.

========================================================================
THAY_DOI_V5.0
========================================================================
KANBAN CÁ NHÂN v5.0 – DICE + TAROT

1. Dice Arena được viết lại hoàn toàn bằng HTML/CSS/JavaScript thuần.
- Không còn Three.js, Rapier, GLTFLoader hoặc file GLB.
- Không còn lỗi t.lastIndexOf is not a function.
- Chọn 1–10 xúc xắc.
- Thả đồng thời hoặc thả từng viên.
- Dùng crypto.getRandomValues để sinh kết quả.

2. Thêm nút TAROT trên thanh công cụ Kanban.
- Bộ bài 78 lá.
- Chủ đề: tổng quan, tình cảm, công việc, tài chính, gia đình, tinh thần, quyết định.
- Rút 1, 3, 5 hoặc 7 lá.
- Tự chọn lá hoặc máy tự rút.
- Diễn giải tự động bằng tiếng Việt ngay trên trình duyệt.
- Lịch sử Tarot lưu bằng khóa riêng.

3. Dữ liệu Kanban không thay đổi.
- Không sửa app.js, music-player.js, dragdrop.js và office-tools.js.
- Dice và Tarot dùng localStorage riêng.

========================================================================
THAY_DOI_V5.1
========================================================================
v5.1
- Chỉnh lại khung bàn Dice Arena cho cân đối hơn.
- Giảm hở mép xúc xắc bằng cách làm mặt xúc xắc chồng mép nhẹ.
- Dịch logo bàn cân hơn trong vùng nỉ.
- Tăng độ rộng nút TAROT để tránh tràn chữ.
- Bump cache/service worker để cập nhật giao diện mới.

========================================================================
THAY_DOI_V5.2
========================================================================
v5.2
- Thay khung bàn bốn thanh rời bằng một khung gỗ liền khối để không hở góc.
- Dựng lại sáu mặt xúc xắc theo cùng một kích thước và cho các mặt chồng mép nhẹ.
- Thêm góc nghiêng nhẹ cho từng khối để cảm giác 3D rõ hơn.
- Không thay đổi dữ liệu hoặc logic Kanban.

========================================================================
THAY_DOI_V5.3
========================================================================
- Dice Arena: thêm lựa chọn xúc xắc D6 (1–6) hoặc D10 (0–9).
- Dice Arena: lịch sử ghi rõ loại xúc xắc D6/D10.
- Tarot Việt: thêm khung KẾT LUẬN CUỐI CÙNG ở đầu bài đọc.
- Kết luận Tarot bám trực tiếp vào câu hỏi, chủ đề, xu hướng lá xuôi/ngược và lá kết thúc.
- Tarot Việt: phần diễn giải dài được đặt dưới mục có thể mở/thu gọn.
- Gom toàn bộ nhật ký thay đổi thành duy nhất tệp THAY_DOI_TONG_HOP.txt.
- Không thay đổi khóa dữ liệu hoặc chức năng cốt lõi của Kanban.


=== PHIÊN BẢN 5.4 ===
- Tích hợp trực tiếp asset D10.glb do người dùng cung cấp vào Dice Arena.
- D10 dùng model gỗ và số khắc chìm thật từ GLB, không còn dùng hình CSS mô phỏng khi tải asset thành công.
- Phát animation D10_SHAKE_ROLL_LOOP có sẵn trong asset trong lúc thả.
- Kết quả 0-9 được đưa đúng mặt tương ứng lên phía trên.
- Dùng cơ chế fetch ArrayBuffer + GLTFLoader.parseAsync để tránh lỗi lastIndexOf khi tải GLB.
- Có D10 CSS dự phòng nếu trình duyệt không tải được thư viện 3D.
- Không thay đổi dữ liệu hoặc chức năng cốt lõi của Kanban.


=== v5.5 ===
- Cập nhật asset D10.glb mới để số trên xúc xắc nhìn rõ hơn.
- Thêm huy hiệu số lớn nổi ngay trên từng viên để đọc kết quả nhanh.
- Thêm phím tắt: Space để lắc, phím 1 chọn thả đồng thời, phím 2 chọn thả từng viên.
- Không thay đổi dữ liệu và chức năng Kanban khác.


=== v5.6 ===
- Chỉ cập nhật chuyển động D10: bỏ animation trong GLB.
- Tự mô phỏng trọng lực, vận tốc ngang, xoay ba trục, va bàn, nảy, ma sát và giảm tốc.
- Sau khi gần dừng, viên xúc xắc ổn định về đúng mặt kết quả.
- Giữ nguyên model D10, số nổi, phím tắt và toàn bộ chức năng Kanban khác.


=== v5.7 ===
- D10 không còn chọn kết quả trước rồi xoay về mặt đã chọn.
- Giữ nguyên vị trí và góc xoay thực tế khi viên dừng.
- Kết quả được đọc từ mặt D10 đang hướng lên trên sau chuyển động.
- Điều kiện tung và xoay dùng Web Crypto; mô phỏng chạy theo bước thời gian cố định.
- Không thay đổi dữ liệu hoặc chức năng Kanban khác.


=== v5.8 ===
- Sửa lỗi thumbnail xoay PDF và file xuất dùng hai cách tính góc khác nhau.
- Đọc góc xoay gốc của từng trang và quản lý bằng một góc tuyệt đối duy nhất.
- File xuất dùng đúng góc đang hiển thị ở thumbnail, không cộng góc xoay hai lần.
- Thumbnail giữ đúng tỷ lệ dọc/ngang, không bị kéo méo thành khung dọc.
- Không thay đổi dữ liệu hoặc các chức năng Kanban khác.


=== v5.9 ===
- Sửa board Kanban ở zoom 100%: vùng bảng cuộn dọc/ngang chung, cột dài không bị cắt phía dưới.
- Bỏ giới hạn max-height của cột và card-list để luôn cuộn tới công việc cuối.
- Thêm PDF A4 dọc → A5 ngang: lấy nửa trên mỗi trang, giữ nội dung vector.
- Thêm tooltip giải thích cho toàn bộ tab và điều khiển chính trong công cụ PDF.
- Thêm mô tả trực tiếp cho các chế độ Chuẩn hóa trang khi gộp PDF.


=== v5.10 ===
- Board Kanban có viewport cuộn riêng ở zoom 100%; thanh cuộn ngang/dọc chỉ xuất hiện khi nội dung vượt khung.
- Sidebar, trình phát nhạc và hình nền không còn bị dịch chuyển khi kéo task.
- Background được gắn cố định vào vùng nhìn của board thay vì cuộn cùng nội dung.
- Kéo task sát mép trên/dưới/trái/phải sẽ tự cuộn liên tục theo hướng tương ứng.
- Sửa ô + Thêm cột để không tràn chữ ở mức zoom lớn.
- Không thay đổi dữ liệu, task, Dice, Tarot hoặc Office PDF.


=== v5.11 ===
- Căn lại các trường trong Office PDF/IMG để label, input và help thẳng hàng.
- Sửa input chọn màu của Chrome: hiển thị thành ô màu thật thay vì một đường kẻ mỏng.
- Chuyển đổi ảnh: nhãn nền tự đổi theo JPG/PNG/WebP; PNG và WebP ghi rõ giữ nền trong suốt.
- Nén ảnh: nhãn nền tự đổi giữa JPG và WebP.
- Ghép ảnh: màu nền hiển thị rõ và nhãn ghi đúng định dạng đang xuất.
- Tarot: thêm nút Copy prompt cho AI, gồm câu hỏi, chủ đề, lá bài, xuôi/ngược, kết luận và yêu cầu diễn giải.
- Không thay đổi dữ liệu hoặc logic công việc Kanban.


=== v5.12 ===
- Sửa lỗi Excel → JSON “Invalid string length” với workbook lớn.
- Không còn build + JSON.stringify toàn bộ workbook thành một chuỗi khổng lồ trong RAM.
- JSON được xuất tuần tự theo từng sheet và từng nhóm ô; ưu tiên ghi trực tiếp bằng File System Access API.
- Xem trước JSON chỉ lấy tối đa 1.200 ô để tránh treo trình duyệt.
- Chặn tùy chọn “Cả ô trống trong vùng dùng” khi vùng dùng quá lớn để tránh tạo hàng triệu/tỷ ô rỗng.
- Không thay đổi dữ liệu hoặc logic Kanban khác.


=== v5.13 ===
- Excel → JSON: thêm chế độ chia thành nhiều file nhỏ để upload lên ChatGPT.
- Mặc định 5 MB/phần; có lựa chọn 8/10/20/50 MB.
- Ước tính dung lượng JSON và số part trước khi xuất.
- Mỗi part là JSON độc lập, đánh số part_001, part_002...; kèm file manifest.json mô tả thứ tự và dung lượng.
- Ghi trực tiếp từng part vào thư mục do người dùng chọn bằng File System Access API, không gom toàn bộ JSON lớn vào RAM.
- Không thay đổi dữ liệu hoặc logic Kanban khác.


=== v5.14 ===
- Chỉ mở rộng Excel → JSON chia nhỏ cho AI; không đổi Kanban board/drag/music/Dice/Tarot.
- Thêm structure.json: cấu trúc sheet, header, cột, kiểu dữ liệu, merge, hidden, min/max, unique khi phù hợp.
- Thêm formula_map.json: gom công thức theo pattern tương đối, phân biệt absolute/relative/mixed reference và phát hiện ngoại lệ.
- Thêm anomalies.json: formula mismatch, formula bị ghi đè/xóa, Excel error, lệch kiểu dữ liệu, duplicate key tiềm năng, dòng trống giữa vùng dữ liệu.
- Mở rộng manifest schema 2.0 nhưng giữ các trường/filename cũ để tương thích.
- DATA PART vẫn dùng cơ chế chia dung lượng cũ; bổ sung sheet/range/record_count và integrity check.


=== v5.15 ===
- Excel Tool: thêm tab Break Links / Value.
- Cho chọn một hoặc nhiều sheet.
- Break Links chỉ chuyển công thức tham chiếu workbook ngoài thành cached value; công thức nội bộ giữ nguyên.
- Dán Value chuyển toàn bộ công thức ở các sheet đã chọn thành cached value.
- Hai thao tác sửa trực tiếp XML trong package XLSX/XLSM, không dựng lại worksheet, nhằm giữ merge/style/màu/hình ảnh/kích thước hàng cột và macro XLSM.
- Ô công thức không có cached value được giữ nguyên và báo số lượng, không tự tính hoặc đoán kết quả.
- Nếu sau Break Links không còn external formula/defined name, metadata externalLinks được dọn khỏi package.
- Không thay đổi Kanban board, task, drag/drop, nhạc, Dice, Tarot hoặc Excel JSON/PART hiện có.


=== v5.16 ===
- Thêm game Tetris độc lập trong iframe, Việt hóa, mặc định 1 người; hỗ trợ 2 người chơi đối kháng cục bộ.
- Điều khiển P1: mũi tên, Ctrl trái/phải để xoay, Space hard drop, C giữ gạch. P2: A/D/S, Q/E, W, F.
- Tăng độ mượt khi chuyển cột bằng nội suy vị trí hiển thị; hard drop có vệt sáng; soft drop nhanh hơn.
- Cho chọn tốc độ khởi đầu; cứ 10 hàng tăng cấp/tốc độ; điểm nhân theo cấp; combo và xóa nhiều hàng thưởng thêm.
- 2 người: xóa 2-4 hàng và combo gửi hàng rác cho đối thủ.
- Gom PDF/IMG/Rename/Excel thành một nút CÔNG CỤ; giao diện công cụ bên trong giữ nguyên.
- Excel: thêm đọc XLSB cho upload/JSON/AI analysis; thêm đầu ra XLSB cho quản lý sheet, gộp sheet, gộp workbook và tách sheet.
- Break Links/Dán Value hỗ trợ XLSB bằng SheetJS; XLSX/XLSM vẫn dùng cách sửa package XML để giữ định dạng tối đa.
- Không thay đổi dữ liệu/logic Kanban board, drag-drop hay music player.


=== v5.16.2 ===
- Tetris: nếu viên đang chạm đáy và việc khóa viên đó tạo đủ một hàng, hàng được khóa/xóa ngay; giảm lock delay còn 150 ms cho trường hợp thường.
- Người chơi 1: trái/phải = ←/→, xuống nhanh = ↓, xoay 1 chiều = ↑, giữ gạch = Ctrl phải, thả ngay = Shift phải.
- Người chơi 2: trái/phải = A/D, xuống nhanh = S, xoay 1 chiều = W, giữ gạch = Ctrl trái, thả ngay = Shift trái; bỏ Q/E/F.
- Điểm/Hàng/Combo/Tốc độ chuyển thành cột dọc bên phải của từng bàn chơi.
- Không thay đổi Kanban, Office, Dice hoặc Tarot.


=== v5.16.3 ===
- Tetris 2 người: đổi vị trí hiển thị để Người chơi 2 nằm bên trái, Người chơi 1 nằm bên phải, khớp vị trí phím bấm trên bàn phím.
- Tetris: bỏ hiển thị ghost/ảnh dự đoán điểm rơi để tránh cảm giác có 2 viên xuất hiện cùng lúc khi viên hiện tại chưa chạm đất.
- Không thay đổi Kanban, Office, Excel, PDF, Dice hoặc Tarot.


=== v5.16.4 ===
- Tetris: khôi phục ghost piece/bóng dự đoán điểm rơi ở cả 1 người và 2 người.
- Sửa board 2 người luôn đúng tỷ lệ 10×20 (1:2); loại bỏ chiều cao CSS dư làm đáy logic nằm cao hơn đáy khung nhìn.
- Giữ Người chơi 2 bên trái, Người chơi 1 bên phải.
- Không thay đổi Kanban, Office, Excel, PDF, Dice hoặc Tarot.
```

## Kiểm tra tích hợp StockSim VN Python v1.9 trước khi chuyển Web - 16/09/2026

- `stock-sim-vn/main.py` có SHA-256 giống hệt bản StockSim VN v1.9 trước khi tích hợp: `6038bb7e281e7a5df43d95e0fb28f0b926f501df2b6653bde6d959ca21c0ba49`.
- `python -m py_compile kanban_local_server.py stock-sim-vn/main.py`: PASS.
- `node --check game-launcher.js`: PASS.
- Local server GET `/index.html`: HTTP 200.
- Local server POST `/api/launch-stocksim` trên môi trường Linux kiểm thử trả 501 có chủ đích; endpoint chỉ cho phép launch ứng dụng desktop trên Windows.
- `git status` chỉ ghi nhận các file phục vụ tích hợp StockSim, cache bust Game Hub và việc gom/xóa các changelog/test-note cũ; các module KanBan khác không bị chỉnh sửa.
