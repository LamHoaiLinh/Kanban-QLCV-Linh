# Tính Nhanh VN Adaptive v3.0

Bản v3.0 phát triển từ mã nguồn mở **Mental Math / Open Apps Studio**, giữ giấy phép gốc và tập trung vào lộ trình tính nhẩm thuần số, cá nhân hóa từ mức mới bắt đầu đến nâng cao.

## Điểm mới v3.0

- Toàn bộ giao diện người dùng bằng tiếng Việt, thống nhất xưng hô **bạn**.
- Giao diện pastel/cute, bo tròn mềm, thiết kế mobile-first và dùng lại icon/splash/adaptive icon của source gốc.
- **3 slot người học độc lập** trên cùng thiết bị; mỗi slot có bài đầu vào, tiến độ, XP, lịch ôn, trí nhớ và thành tích riêng.
- **Bài kiểm tra đầu vào 150 giây (~2–3 phút)** đi từ cộng/trừ rất nhỏ đến nâng cao. Người chưa học Nhân/Chia có thể bỏ qua cả nhánh, nên phù hợp cả người mới bắt đầu/lứa tuổi tiểu học.
- **72 micro-skill thuần số**:
  - Cộng: 16 kỹ năng, từ cộng trong 5 đến cộng số lớn/chuỗi số.
  - Trừ: 16 kỹ năng, từ trừ trong 5 đến bù đối xứng/khoảng cách số.
  - Nhân: 24 kỹ năng, gồm bảng nhân 1–10, bảng nhân nâng cao 11–20 và tính nhẩm nhân nâng cao.
  - Chia: 16 kỹ năng, từ chia cơ bản theo bảng nhân đến chia 11–20 và phân tích thừa số.
- Skill tree chỉ hiện **chặng đang học**, không dội toàn bộ 72 kỹ năng lên màn hình.
- Kỹ năng mới **mang theo kỹ năng cũ**: giai đoạn đầu trộn toàn bộ phần đã học; về sau ưu tiên kỹ năng gần đây + phần đến hạn ôn + kỹ năng mới để tránh loãng bài.
- **Spaced repetition** theo từng micro-skill với lịch 1 → 3 → 7 → 14 → 30 → 60 ngày; làm sai sẽ được kéo về ôn sớm.
- Trước mỗi kỹ năng có **mẹo tính nhẩm đúng ngữ cảnh** và ví dụ số. Với bảng nhân, màn chuẩn bị hiển thị trực tiếp các tích để học trước khi luyện.
- **Nhìn · Che · Tính**: đề số xuất hiện trong thời gian ngắn rồi bị che hoàn toàn; người học phải giữ phép tính trong trí nhớ làm việc, tính trong đầu và chọn 1 trong 4 đáp án số.
- Nhìn · Che · Tính có 4 mức thời gian hiển thị: 4,5s → 3,2s → 2,2s → 1,5s; tiến cấp dựa trên số lần luyện, độ chính xác và mastery trí nhớ.
- Trang riêng dạy kỹ năng Nhìn · Che · Tính theo 3 bước: nhìn số–dấu–số, nhắc lại một lần trong đầu, sau đó mới tính và chọn đáp án.
- **Nhiệm vụ hằng ngày**, XP/cấp độ, achievement và Boss cho 4 nhánh.
- Trang Tiến bộ phát hiện kỹ năng chậm nhất, kỹ năng yếu nhất và đưa đúng mẹo liên quan; có thống kê riêng cho Nhìn · Che · Tính.
- Chỉ dùng bài toán **thuần số** trong lộ trình; không có bài toán tình huống phải đọc đoạn chữ.
- Dữ liệu lưu local bằng AsyncStorage; không cần backend hay tài khoản.

## Cách chạy trên Windows

Nhấp đúp:

```text
CHAY_WEB.bat
```

Lần đầu chương trình tự chạy `npm install`, sau đó mở Expo Web.

Hoặc chạy thủ công:

```bash
npm install
npm run web
```

## Các file lõi

- `src/data/skill-tree.ts`: 72 micro-skill, thứ tự lộ trình, prerequisite, mẹo và ngưỡng tốc độ.
- `src/lib/skill-math.ts`: sinh câu hỏi thuần số theo từng kỹ năng + 4 đáp án cho Nhìn · Che · Tính.
- `src/lib/learning.ts`: mastery, unlock, bài tích lũy, spaced repetition, placement, memory mastery và boss.
- `src/lib/slots.ts`: 3 slot local độc lập.
- `src/lib/gamification.ts`: nhiệm vụ ngày và achievement.
- `app/placement.tsx`: bài kiểm tra đầu vào thích nghi theo các mốc kỹ năng.
- `app/memory.tsx`: dạy và khởi chạy Nhìn · Che · Tính.
- `app/session.tsx`: bài học thường, bảng nhân, memory mode, review và boss.
- `app/(tabs)/trainer.tsx`: lộ trình/chặng học.
- `app/(tabs)/progress.tsx`: phân tích điểm yếu và tiến bộ.

## Mobile web / tích hợp Kanban

- Không tràn ngang màn hình; nội dung có `maxWidth` và co theo màn hình.
- Trên web chặn chọn chữ/số do giữ lâu, chặn callout ảnh và giảm thao tác chạm ngoài ý muốn; ô nhập vẫn cho phép nhập bình thường.
- `touch-action: manipulation` cho gameplay; ô nhập dùng cỡ chữ tối thiểu 16px để hạn chế iOS tự zoom.
- Không phụ thuộc hover để thao tác chính.
- Dữ liệu local tách theo slot, phù hợp nhúng dần vào ứng dụng Kanban chạy web trên điện thoại.

## Kiểm tra kỹ thuật trong bản đóng gói

- TypeScript syntax/transpile check: 41 file `.ts/.tsx`, không phát hiện lỗi cú pháp.
- Smoke test bộ sinh câu: 72 kỹ năng × 300 lần = **21.600 câu**, tất cả sinh được đáp án hợp lệ; memory choices luôn có 4 đáp án số khác nhau và chứa đáp án đúng.
- Smoke test learning engine: mở khóa tuần tự, placement cho người mới, spaced review cơ bản và memory progression đều chạy qua.
- Chưa xác nhận full `npm run typecheck`/Expo build trong môi trường đóng gói vì cài dependency Expo bị timeout. Hãy chạy `CHAY_WEB.bat` trên máy đích để kiểm tra end-to-end.
