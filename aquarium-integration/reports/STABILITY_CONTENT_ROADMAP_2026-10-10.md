# KanAquarium — lộ trình nội dung sau cổng ổn định
Ngày: 10/10/2026. Đây là thiết kế/backlog, **chưa phải tính năng đã triển khai**.
Mốc nguồn mô phỏng: `505cdfaf2eb09401b4921e2b121cc0600be97b62`. Các commit `3855fe8` và `a1cc4b0` cập nhật build/báo cáo, không thay đổi các module được audit.

## 1. Cổng mở rộng và điều đã xác minh
Chỉ mở rộng sau khi P0/P1 đáp ứng nghiệm thu. BUG-01 trên iPhone chưa tái hiện chắc chắn; vì vậy không đưa danh mục/model/random/preset mới vào bản vá P0 này. Không dùng kết quả Chromium SwiftShader làm chứng nhận thiết bị thật.

Đã xác minh từ code:
- `data/species.ts` đã có cardinal-tetra, rummynose-tetra, kuhli-loach, zebra-oto, bristlenose-pleco, nerite-snail. Oto sọc là một loài đại diện trong chi Otocinclus, không được gọi nhầm là loài mới vừa bổ sung. Biến thể pleco khác màu cần ID/variant riêng được kiểm thử lưu/tải.
- Chưa có Endler, cherry barb, Congo tetra, Amano trong danh mục hiện tại.
- `data/flora.ts` đã có Java fern, Anubias nana, Amazon sword, Vallisneria, Cryptocoryne wendtii. Năm cây còn lại trong đầu bài chưa có.
- `data/presets.ts` có 6 preset. Chưa có 12 preset được đề nghị.
- `state/store.ts:randomize` chọn danh mục theo ngẫu nhiên và ngân sách; chưa có theme/seed/layout metadata để tái tạo bố cục.
- `engine/Flora.ts` đã phân biệt Java fern/Anubias/Java moss bám anchor khi có anchor. Nhưng vị trí vẫn cộng ngẫu nhiên quanh anchor, chưa chiếu chân cây vào bề mặt lũa thật.
- Các sợi nhạt dài có ứng viên trực tiếp trong code: rễ của frogbit. Ảnh phù hợp hình thái này; chưa đủ dữ kiện để khẳng định mọi nét trắng trong ảnh đều là rễ, hoặc chúng gây gật đầu.

Các mô tả bên dưới là **profile mô phỏng đề xuất theo đầu bài**, không phải nghiên cứu định lượng về sinh học.

## 2. Khung behavior profile (không lưu trạng thái tức thời vào hồ)
Thiết kế map riêng theo species ID: zone, social, activity, confidenceBodyLengths, foodInterest, shelterAffinity, surfaceKinds, secondaryMotion, lightPreference, foliagePreference. Trạng thái runtime: surfacePatchId, normal, localContact, route, phase, deadline, cooldown, lastProgress. Mỗi agent có độ lệch cá nhân nhỏ; không dùng một đồng hồ chung khiến toàn đàn đồng bộ mọi hành động.

Bám mặt phải có chu trình tìm patch → tiếp cận theo pháp tuyến → kiểm tra khoảng trống thân/miệng → áp sát → rỉa/nhặt → rời mặt. Loài bò dùng bước tiếp tuyến bề mặt, kiểm tra mép và pháp tuyến mới, tránh sửa trực tiếp y cố định khi đang leo gỗ. Patch có loại vật liệu, kích thước hữu dụng, ánh sáng tương đối, biofilm và số chỗ. Biofilm là tín hiệu thẩm mỹ/hành vi; không đưa nhiệm vụ chăm nước hay cá chết.

Cá bơi sử dụng steering hiện hữu. Không chạy tìm đường đầy đủ cho mọi cặp cá–mồi mỗi frame. Query theo đợt, cache route ngắn và kiểm tra lại khi đổi bể hoặc mồi di chuyển. Grazer/ốc không được chọn lá nhỏ hơn vùng bám của thân.

## 3. Hồ sơ 10 sinh vật
1. **Cardinal tetra — đã có ID.** Hình dáng: thân nhỏ thon, dải đỏ chạy dài, xanh dịu; zone mid/open; social đàn vừa chặt; activity vừa; confidence 2–3 chiều dài thân; food vừa; shelter vừa; ánh sáng thoáng nhưng có góc cây. Hành vi riêng: gom đàn sau khi gặp cá lớn, chia hai nhánh vòng lũa rồi nhập đàn. Nhịp phụ: đuôi đều, vây ngực chậm hơn khi lướt. Ưu tiên 1, khó vừa, chi phí thấp nếu dùng instancing và neighbor grid.
2. **Rummy-nose — đã có ID.** Hình dáng: đầu đỏ, đuôi khoang, thân sáng; mid; đàn chặt hơn cardinal; activity vừa; confidence 2–4 thân; food vừa; shelter vừa. Route ngang dài, truyền đổi hướng theo độ trễ cá nhân, không quay cùng một frame. Nhịp đuôi đều. Ưu tiên 2, khó vừa; dùng chung hạ tầng đàn nhưng thông số và hành vi nhập đàn riêng.
3. **Kuhli — đã có ID.** Thân dài uốn nhiều đoạn, khoang tối; bottom/cave; nhóm lỏng/cave-user; hoạt động từng đợt; confidence 1–2 thân; food thấp với mồi nổi, vừa với mồi đáy; shelter cao; thích vùng tối/cây chân lũa. Hành vi: men chân gỗ, vào hang và tự tìm cửa ra; dừng ngắn xen kẽ luồn. Không dùng kiểu quay rigid cả mesh như tetra. Ưu tiên 1, khó cao; cần chuỗi điểm uốn thân và envelope tránh xuyên nền; LOD giảm số đoạn khi xa.
4. **Otocinclus — đã có zebra-oto đại diện.** Thân nhỏ, bụng phẳng, miệng hút; surface-grazer; social grazer nhóm lỏng; activity thấp; confidence 1–2 thân; food nổi thấp; shelter vừa; patch kính/lũa/lá lớn. Tiếp cận–bám–rỉa nhanh tại miệng–nhả bám, không nhún cả thân. Rung vây ngực nhỏ, có khoảng nghỉ. Ưu tiên 1, khó cao; hoàn thiện bám mặt trước khi tạo thêm ID cùng chi.
5. **Pleco biến thể — loài gốc đã có.** Thân dẹt và các mảng giáp gợi nhẹ; bottom/surface; solitary/grazer; chậm với đợt bứt ngắn; confidence 1 thân; food vừa ở nền; shelter cao; ưu tiên gỗ/bóng râm. Chọn vùng nghỉ rồi quay về, đổi patch chậm hơn oto; miệng/bụng tiếp xúc rõ. Biến thể màu không tự động thành loài có tập tính khác. Ưu tiên 3, khó vừa sau khi có bộ bám mặt; dùng chung geometry và tham số màu.
6. **Endler — chưa có.** Nhỏ gọn, đuôi tương đối ngắn, mảng màu riêng; top/mid; nhóm lỏng; activity cao; confidence 1–2 thân; food cao; shelter thấp–vừa. Bứt ngắn, đổi hướng gọn, lượn riêng quanh cây nổi; tránh dùng cùng nhịp bơi của guppy hiện có. Ưu tiên 2, khó vừa, chi phí thấp.
7. **Cherry barb — chưa có.** Thân đỏ ấm, vây gọn, chuyển sắc bụng; mid/vegetated; nhóm lỏng; activity thấp–vừa; confidence 2–3 thân; food vừa; shelter cao. Ra mép bụi cây rồi trở vào, dừng quan sát; không đàn dính thành khối. Ưu tiên 3, khó vừa, chi phí thấp.
8. **Congo tetra — chưa có.** Thân lớn hơn tetra nano, ánh sắc nhẹ và vây kéo dài mềm; mid/top; đàn lỏng–vừa; lướt chậm; confidence 2–3 thân; food vừa; shelter thấp; ưu tiên khoảng nước trống. Vòng cua dài, đợt lướt phô nghiêng thân vừa phải. Ưu tiên 2, khó cao ở vây; giảm ripple/chi tiết tia vây theo kích thước pixel, giữ silhouette khi xa.
9. **Amano — chưa có.** Thân phân đốt bán trong, vệt chấm, chân/râu; crawler/scavenger; nhóm lỏng; nhịp đi–dừng; confidence 1 thân; food cao với mồi nền; shelter vừa–cao. Nhặt bằng chân trước, leo gỗ theo normal, giật lùi hiếm có cooldown; chân không chạy đều khi đứng nghỉ. Ưu tiên 1, khó cao; animation chân/râu dựa shader instanced, tránh alpha nhiều lớp trên mobile.
10. **Nerite — đã có ID.** Vỏ hoa văn khác thân mềm, râu nhỏ; crawler; solitary/grazer; rất chậm; confidence thấp; food nổi thấp; shelter vừa. Route bám kính/gỗ/đá dài, chuyển bề mặt có điểm nối, dừng/thu râu ngắn; không quay giật và không bay từ kính sang gỗ. Ưu tiên 1, khó cao ở topology bề mặt; update route tần suất thấp và nội suy pose mỗi frame.

Nghiệm thu từng loài: clip 20 giây ở cùng khung hình, quan sát được ít nhất hai khác biệt ngoài màu; clip áp sát bề mặt/đổi hướng; không mất count/ID/tên sau save, tier và resize. Thứ tự: surface locomotion cho oto/ốc → Amano → kuhli → school cardinal; sau đó ba loài tier 2 và tier 3.

## 4. Hồ sơ 10 cây
1. **Java fern — có:** epiphyte, cao thiết kế 12–25 cm, trung/hậu cảnh, rung thấp–vừa, lá dài cứng vừa; anchor thật trên gỗ/đá, 3 biến thể xòe/cong.
2. **Anubias nana — có:** epiphyte, 5–12 cm, tiền/trung cảnh; rung thấp, lá dày cong có gân; patch đủ rộng cho oto/ốc, không mọc lơ lửng trên anchor.
3. **Amazon sword — có:** rooted rosette, 20–40 cm tùy chiều cao bể; hậu cảnh/điểm nhấn; rung vừa, lá cong không trùng nhau, tránh thành một bó tia đều.
4. **Vallisneria — có:** rooted ribbon, 25–50 cm và tự co theo bể; hậu cảnh; rung dài/chậm; tiết chế độ tương phản viền và mật độ để không alias.
5. **Cryptocoryne wendtii — có:** rooted rosette, 8–18 cm; trung cảnh; rung thấp, màu xanh nâu, lá gợn và khối bụi có chiều sâu.
6. **Ludwigia repens — mới:** rooted stem, 18–35 cm; trung/hậu cảnh, rung vừa; mảng đỏ nâu dưới ánh sáng, chỉ làm điểm nhấn khoảng 10–20% khối cây theo theme.
7. **Rotala rotundifolia — mới:** rooted stem nhiều lá nhỏ, 20–40 cm; hậu cảnh; rung vừa; cụm nhiều độ cao, silhouette mịn, giảm số nhánh xa camera.
8. **Hornwort — mới:** khối thân lá kim/xốp, 18–35 cm theo layout; hậu cảnh/khối phụ; rung mềm; nếu chọn dạng treo/lơ lửng phải khai báo placement riêng, không giả rễ cắm nền cho mọi instance.
9. **Water sprite — mới:** bụi lá chia thùy, 15–35 cm; trung/hậu cảnh; rung mềm; hình lá phân nhánh ít mức, không tạo alpha-layer dày hàng chục lớp.
10. **Dwarf sagittaria — mới:** rooted carpet/rosette nhỏ, 4–10 cm; tiền cảnh; rung ngắn; trồng theo cụm không phủ kín đường cát/đường bơi đáy.

Các kích thước trên là mục tiêu dựng hình có giới hạn theo bể, không phải cam kết kích thước sinh học. Ít nhất ba biến thể hình học/seed mỗi loài; sway envelope nằm trong kính/mực nước. Cây bám phải có chân thực trên bề mặt; cây cắm nền có vị trí rễ tại nền. Kiểm tra lại 5 cây có sẵn thay vì báo 10 cây mới.

## 5. Random có bố cục và tái tạo
Pipeline đề nghị: seed cục bộ → chọn theme phù hợp dung tích → đặt 1 chủ thể chính tại khoảng 1/3 hoặc 2/3 chiều ngang → đặt 1–2 chủ thể phụ → xác định hành lang nước → trồng theo tầng → stocking theo ngân sách/zone → kiểm tra kỹ thuật → chấm bố cục. Seed phải điều khiển cả mesh decor, flora placement và thành phần; chỉ lưu seed ở store nhưng vẫn dùng Math.random toàn cục trong Decor/Flora sẽ không tái tạo được.

Tám theme: nature/planted, driftwood, rock, open-schooling, bottom-life, shrimp-nano, angelfish, peaceful-mixed. Open-schooling giữ khoảng nước trống mục tiêu >=55%; nature >=35%; shrimp-nano có thể rậm hơn nhưng vẫn có lối nhìn vào nền. Đây là ngưỡng thiết kế khởi điểm, cần hiệu chỉnh từ gallery.

Stocking: 5–20 gallon thiên nano; loài lớn bị lọc bằng minGallons và envelope thật; 40–75 hỗ trợ đàn và 1 hardscape lớn; 120–180 cho nhiều lớp sâu. Không ép mỗi hồ nano phải có đủ mọi tầng nếu việc đó làm quá tải. Tối đa một vật chủ lớn trong bể nhỏ, khoảng hở giữa hai hardscape phải đủ thân loài lớn nhất đang được chọn.

Metadata đề nghị: generatorVersion, seed, layoutTheme, plantDensity, openWaterRatio, hardscapeType, stockingProfile, signatureShot. Trước khi thêm phải thiết kế migration và round-trip legacy: config cũ không có metadata tiếp tục theo cách bố trí cũ, không ngẫu nhiên tái bố trí hồ cũ khi mở lại. Không thay thế localStorage của người dùng.

Nghiệm thu: 100 seed chia các dung tích, kiểm tra bounds/overlap/open corridor/stock/load; xuất gallery 40 seed cố định ở cùng 2 góc và ánh sáng, chấm mù 1–5 điểm về điểm nhấn, không gian trống, phân tầng, đường bơi, khả năng nhìn trên mobile. Mục tiêu >=80 seed đạt >=3/5 và >=25 seed đạt >=4/5. Điểm đẹp cần người xem, không đổi thành PASS tự động chỉ dựa collider.

## 6. Mười hai preset thiết kế (chưa thêm vào danh mục)
1. **Nature Driftwood Calm, 40–75 gal:** lũa chính bên trái, ráy/Java fern bám, crypt thấp, cardinal và cory; góc máy chéo thấp nhìn qua tán lũa; tag Thư giãn/Lũa.
2. **Angelfish Showcase, 75–120 gal:** bố cục cao, sword/val hậu cảnh, 1 thân lũa thấp, khoảng nước giữa rộng; 2–3 ông tiên theo ngân sách và nhóm cá nhỏ; shot ngang thân cá, tránh nước che đầu.
3. **Nano Shrimp Garden, 10–20 gal:** đá nhỏ/rêu/ráy, Amano/nerite và ít cá nano nếu ngân sách cho phép; shot gần chân gỗ; tag Nano/Tép.
4. **Schooling River Light, 75–120 gal:** gỗ sát hai đầu, nền cát mở, đàn cardinal/rummy thành hai nhóm có vai trò rõ; shot dọc hành lang ngang.
5. **Lush Green Community, 40–75 gal:** khối cây dày ở hậu cảnh và hai góc, khe sáng trung tâm; cherry barb/endler/cory; shot mặt trước thấy đủ tầng.
6. **Wood & Stones Balance, 75 gal:** gỗ chính 2/3 trái, đá phụ bên phải, cây bám nối khối; tetra/oto/nerite; shot chéo cân bằng hai khối.
7. **Bottom Life Habitat, 40–75 gal:** hang thông, khe đá, khoảng cát để nhìn kuhli/cory/oto/pleco; lá cao lùi sau; camera có một góc thấp nhìn lối hang.
8. **Red Accent Garden, 40–75 gal:** ludwigia/rotala đỏ nâu thành một điểm, cây xanh làm nền, tránh phối cá đỏ khiến mất tương phản; shot tổng thể không tăng saturation.
9. **Soft Jungle Corners, 75–120 gal:** hai khối cây góc có độ cao lệch nhau, giữa để trống, rễ nổi ngắn và thưa; cá hiền nhóm lỏng; shot đứng yên đủ lâu.
10. **Large Showcase Panorama, 120–180 gal:** ba lớp sâu, chủ thể lệch tâm và đàn bơi ngang; Congo/cardinal và nhóm đáy theo budget; shot panorama hạn chế crop bể.
11. **Peaceful Family Tank, 40 gal:** cây dễ phân biệt, hardscape thấp, nhóm cá vừa và nhóm đáy; chỉ 1–2 điểm nhấn màu; shot mặt trước cho người mới.
12. **Twilight Calm, 40–75 gal:** cấu trúc thoáng, ánh sáng dịu, bóng có chi tiết, kuhli/pleco và đàn nhẹ; không hạ sáng đến mức mất hình; shot trung cảnh tĩnh dài.

Mỗi preset phải có thumbnail chụp renderer thật, tên/mô tả/tag, cấu hình thành phần đã qua normalizeStock, seed/layout phiên bản, signature shot. Ba video random + ba video preset chỉ sản xuất sau khi code mới chạy được, không dùng ảnh minh họa để giả nghiệm thu.

## 7. Bề mặt và ngân sách chất lượng
Lũa: tọa độ vật liệu bám trục/cong geometry; phân vùng vỏ ngoài, lòng ống, mặt cắt và khe. Roughness biến thiên nhỏ, màu biofilm tiết chế. Dùng texture atlas/seed uniform chung, tránh texture mới mỗi nhánh. Patch hành vi dùng cùng ID/vị trí vật liệu, không tạo đích rỉa vô hình ngoài bề mặt.

Cá: chuyển sắc lưng–bụng, vảy tần số thấp và tự giảm theo kích thước pixel; mắt có iris/catchlight nhỏ, mang/jaw cục bộ; fin-ray có mức trong theo loài. Không dùng bóng kim loại mạnh để giả vảy. Tép ưu tiên phân đốt/râu/chân rõ trước alpha; ốc có hai chất liệu vỏ/thân; oto/pleco có vùng bụng/miệng đúng hướng bám.

Các mục tiêu hiệu năng là ngân sách dự kiến: ở cùng count/tier/camera, P95 frame time tăng không quá 10% với riêng nâng vật liệu; draw calls tăng không quá 10%; geometry mới phải có giới hạn theo tier. Nếu chưa đạt phải tối ưu hoặc giảm mức chi tiết, không âm thầm giảm count lưu. Chỉ chốt ngưỡng 30fps iPhone/60fps desktop bằng thiết bị thật.

Bắt buộc before/after thật của 5 nhóm: lũa, cá vây dài, cá đàn nhỏ, grazer, cây bám. Clip cận cảnh 15–30 giây kiểm tra shimmer/moire; renderer.info và frame-time P50/P95 cùng một fixture/seed, không so hai bố cục ngẫu nhiên khác nhau.

## 8. Chia PR và giới hạn
PR A: vật lý mồi/target timeout/telemetry, bảo vệ cổng P0; không đổi store/schema/model.
PR B1: hoàn thiện bám mặt và tunnel envelope cá, bám chân cây, sửa mobile/camera theo video thật.
PR B2: behavior profile + 5 loài ưu tiên; dùng loài có sẵn đúng tên, tạo mới Amano.
PR B3: 5 cây mới + hình dáng cây hiện hữu, profile còn lại/model mới và LOD.
PR B4: layout seed/migration + random theme + 12 preset + gallery/clip.
PR B5: vật liệu/chi tiết, đo cùng fixture trên các tier.
PR C: soak thời gian thực/thiết bị/cache/production theo đúng commit được duyệt.

Điểm mù cần giữ: collider sphere hiện hữu của cá vẫn bảo thủ hơn mesh, có thể bỏ qua mồi thực tế tới được; parity yêu cầu mesh kín, cần test với decor mới; hai giờ mô phỏng không chứng minh nhiệt/RAM hai giờ thời gian thực; seed đẹp vẫn cần mắt người; triển khai code/PASS CI không đồng nghĩa đã cập nhật GitHub Pages.
