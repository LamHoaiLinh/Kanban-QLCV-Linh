(() => {
'use strict';
const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const fmt = (n, d = 0) => Number(n || 0).toLocaleString('vi-VN', { maximumFractionDigits: d });
const LEGACY_STORAGE = 'opendominion_vi_local_demo_v2';
const SAVE_BASE = 'vuong_quoc_so_lieu_save_v1';
const ACTIVE_SLOT_KEY = 'vuong_quoc_so_lieu_active_slot';
let activeSaveSlot = Math.max(1, Math.min(3, Number(localStorage.getItem(ACTIVE_SLOT_KEY) || 1)));
const storageKey = (slot=activeSaveSlot) => `${SAVE_BASE}_slot_${slot}`;
const LAND = { plain:'Đồng bằng', mountain:'Núi', swamp:'Đầm lầy', cavern:'Hang động', forest:'Rừng', hill:'Đồi', water:'Mặt nước' };
const ELEMENT_META = {
  Kim:{color:'#c7d2de', strong:'Mộc', weak:'Hỏa'},
  Mộc:{color:'#7fd4a8', strong:'Thổ', weak:'Kim'},
  Thổ:{color:'#e2c18a', strong:'Thủy', weak:'Mộc'},
  Thủy:{color:'#77b5ff', strong:'Hỏa', weak:'Thổ'},
  Hỏa:{color:'#ff8d7d', strong:'Kim', weak:'Thủy'}
};
const BRANCH_META = {
  infantry:{name:'Bộ binh', icon:'infantry', intro:'Giao chiến mặt đất, giữ tuyến, đột kích, đánh tầm gần và tầm xa.'},
  cavalry:{name:'Kỵ binh', icon:'cavalry', intro:'Cơ động cao, xung phong, truy kích và đánh xuyên đội hình.'},
  navy:{name:'Thủy binh', icon:'navy', intro:'Tác chiến đường thủy, thuyền húc, pháo thuyền, hỏa công và quân lặn.'},
  air:{name:'Không quân', icon:'air', intro:'Tác chiến trên không, trinh sát, tập kích và khống chế từ xa.'}
};
const BUILDING_GROUPS = {
  people:{name:'Nhóm Dân số & tăng trưởng', desc:'Tăng dân, mở trần dân số, ổn định sinh trưởng.'},
  economy:{name:'Nhóm Kinh tế & tài nguyên', desc:'Tăng bạch kim, lương thực, gỗ, quặng, mana và tài nguyên đặc biệt.'},
  military:{name:'Nhóm Quân sự & phòng thủ', desc:'Tăng sức chứa doanh trại, giảm chi phí quân, tăng công/thủ.'},
  knowledge:{name:'Nhóm Nghiên cứu & ma pháp', desc:'Tăng điểm nghiên cứu, phép thuật và hiệu quả anh hùng.'},
  infra:{name:'Nhóm Hạ tầng', desc:'Tối ưu chi phí xây dựng và hỗ trợ phát triển tổng thể.'}
};
const BUILDINGS = {
  home:{name:'Nhà dân', land:'plain', group:'people', desc:'Sức chứa +30 dân. Không cần lao động vận hành.', benefit:'+30 dân tối đa mỗi công trình', effect:'housing'},
  temple:{name:'Đền thờ', land:'swamp', group:'people', desc:'Tăng tốc độ tăng dân và gây áp lực tinh thần lên đối phương.', benefit:'Tăng tốc độ tăng dân theo giờ', effect:'growth'},
  alchemy:{name:'Xưởng luyện kim', land:'plain', group:'economy', desc:'+45 Bạch kim mỗi giờ.', benefit:'+45 Bạch kim/giờ', effect:'platinum'},
  farm:{name:'Nông trại', land:'plain', group:'economy', desc:'+80 Lương thực mỗi giờ.', benefit:'+80 Lương thực/giờ', effect:'food'},
  ore_mine:{name:'Mỏ quặng', land:'mountain', group:'economy', desc:'+60 Quặng mỗi giờ.', benefit:'+60 Quặng/giờ', effect:'ore'},
  lumberyard:{name:'Xưởng gỗ', land:'forest', group:'economy', desc:'+50 Gỗ mỗi giờ.', benefit:'+50 Gỗ/giờ', effect:'lumber'},
  tower:{name:'Tháp pháp sư', land:'swamp', group:'economy', desc:'+25 Mana mỗi giờ.', benefit:'+25 Mana/giờ', effect:'mana'},
  diamond_mine:{name:'Mỏ đá quý', land:'cavern', group:'economy', desc:'+15 Đá quý mỗi giờ.', benefit:'+15 Đá quý/giờ', effect:'gems'},
  dock:{name:'Bến cảng', land:'water', group:'economy', desc:'+40 Lương thực/giờ và +0,05 thuyền/giờ.', benefit:'Mở kinh tế đường thủy', effect:'dock'},
  smithy:{name:'Lò rèn', land:'plain', group:'military', desc:'Giảm chi phí huấn luyện quân theo tỷ lệ sở hữu, tối đa 36%.', benefit:'Giảm giá huấn luyện quân', effect:'smithy'},
  masonry:{name:'Xưởng xây đá', land:'plain', group:'military', desc:'Tăng hiệu quả phòng thủ công trình.', benefit:'Tăng chỉ số thủ toàn quân', effect:'masonry'},
  gryphon_nest:{name:'Tổ Gryphon', land:'mountain', group:'military', desc:'Tăng sức tấn công theo tỷ lệ sở hữu, tối đa 32%.', benefit:'Tăng chỉ số công toàn quân', effect:'offense'},
  guard_tower:{name:'Tháp canh', land:'hill', group:'military', desc:'Tăng sức phòng thủ theo tỷ lệ sở hữu, tối đa 32%.', benefit:'Tăng chỉ số thủ toàn quân', effect:'defense'},
  barracks:{name:'Doanh trại', land:'hill', group:'military', desc:'Sức chứa +36 đơn vị quân đã/đang huấn luyện.', benefit:'+36 sức chứa quân', effect:'barracks'},
  wizard_guild:{name:'Hội Pháp sư', land:'swamp', group:'knowledge', desc:'+5 Mana/giờ và tăng năng lực pháp thuật.', benefit:'+5 Mana/giờ và tăng phép', effect:'wizard'},
  school:{name:'Học viện', land:'cavern', group:'knowledge', desc:'Sinh Điểm nghiên cứu mỗi giờ.', benefit:'Tạo điểm nghiên cứu', effect:'research'},
  shrine:{name:'Đền anh hùng', land:'hill', group:'knowledge', desc:'Tăng kinh nghiệm và hiệu quả Anh hùng.', benefit:'Buff anh hùng', effect:'hero'},
  factory:{name:'Nhà máy', land:'hill', group:'infra', desc:'Giảm chi phí xây dựng; tối đa 50%.', benefit:'Giảm giá xây công trình', effect:'factory'}
};
const TECHS = {
  farmers_growth:{name:'Tăng trưởng nông nghiệp',tier:1,cost:500,category:'Kinh tế',desc:'+10% sản lượng lương thực.',req:[]},
  fruits_of_labor:{name:'Thành quả lao động',tier:1,cost:650,category:'Kinh tế',desc:'+20% sản lượng gỗ.',req:[]},
  ore_processing:{name:'Luyện quặng tinh',tier:1,cost:700,category:'Kinh tế',desc:'+15% sản lượng Quặng.',req:[]},
  mana_theory:{name:'Lý thuyết ma năng',tier:1,cost:720,category:'Ma pháp',desc:'+12% Mana mỗi giờ.',req:[]},
  academy_method:{name:'Phương pháp học viện',tier:1,cost:760,category:'Nghiên cứu',desc:'+25% điểm nghiên cứu mỗi giờ.',req:[]},
  efficient_build:{name:'Xây dựng hiệu quả',tier:2,cost:820,category:'Hạ tầng',desc:'-10% chi phí xây dựng.',req:['farmers_growth']},
  automation_lines:{name:'Dây chuyền tối ưu',tier:2,cost:980,category:'Hạ tầng',desc:'Giảm thêm 8% chi phí xây dựng.',req:['efficient_build']},
  earth_survey:{name:'Trắc địa địa mạch',tier:2,cost:900,category:'Khám phá',desc:'-10% chi phí khám phá và +10% đất nhận được.',req:['ore_processing']},
  expedition_tactics:{name:'Chiến thuật viễn chinh',tier:2,cost:950,category:'Khám phá',desc:'Đội khám phá hoàn thành nhanh hơn 1 giờ.',req:['earth_survey']},
  barracks_logistics:{name:'Hậu cần doanh trại',tier:2,cost:980,category:'Quân sự',desc:'+20% sức chứa doanh trại.',req:['fruits_of_labor']},
  fortification:{name:'Công sự kiên cố',tier:3,cost:1080,category:'Quân sự',desc:'+10% phòng thủ.',req:['efficient_build']},
  disciplined_army:{name:'Quân kỷ',tier:3,cost:1150,category:'Quân sự',desc:'+10% sức tấn công.',req:['barracks_logistics']},
  smithing_mastery:{name:'Luyện binh tinh xảo',tier:3,cost:1120,category:'Quân sự',desc:'Giảm thêm 8% chi phí huấn luyện quân.',req:['barracks_logistics']},
  granary_bunker_1:{name:'Hầm quân lương I',tier:3,cost:1100,category:'Phòng thủ',desc:'Bảo vệ 35% lượng tài nguyên khỏi các đợt cướp phá của AI.',req:['fortification']},
  spell_weaving:{name:'Dệt ấn chú',tier:3,cost:1180,category:'Ma pháp',desc:'Giảm 10% hồi chiêu phép và +8% hiệu lực kinh tế.',req:['mana_theory']},
  team_command_2:{name:'Liên đội II',tier:4,cost:1300,category:'Đội hình',desc:'Mở khóa Đội 2 để khám phá và chiến dịch phối hợp.',req:['disciplined_army']},
  team_command_3:{name:'Liên đội III',tier:4,cost:1460,category:'Đội hình',desc:'Mở khóa Đội 3.',req:['team_command_2']},
  granary_bunker_2:{name:'Hầm quân lương II',tier:4,cost:1500,category:'Phòng thủ',desc:'Tăng mức bảo vệ tài nguyên lên 70% trước cướp phá.',req:['granary_bunker_1']},
  team_command_4:{name:'Liên đội IV',tier:5,cost:1680,category:'Đội hình',desc:'Mở khóa Đội 4.',req:['team_command_3']},
  team_command_5:{name:'Liên đội V',tier:5,cost:1850,category:'Đội hình',desc:'Mở khóa Đội 5.',req:['team_command_4']}
};
const SPELLS = {
  midas:{name:'Bàn tay Midas',element:'Kim',mana:400,hours:6,cooldown:10,desc:'+8% sản lượng Bạch kim trong 6 giờ.',key:'midas',kind:'economy'},
  quartz_shield:{name:'Khiên Thạch Anh',element:'Kim',mana:450,hours:4,cooldown:10,desc:'Giảm 10% tổn thất quân và tăng khả năng phòng thủ trong 4 giờ.',key:'quartz_shield',kind:'combat'},
  magnetic_array:{name:'Từ Thiết Trận',element:'Kim',mana:500,hours:3,cooldown:12,desc:'Giảm hiệu quả chiến đấu của đối thủ hệ Mộc/Kim trong 3 giờ.',key:'magnetic_array',kind:'combat'},
  gaia:{name:'Phúc lành Gaia',element:'Mộc',mana:350,hours:6,cooldown:9,desc:'+15% Lương thực và Gỗ trong 6 giờ.',key:'gaia',kind:'economy'},
  old_forest:{name:'Rừng Già Bảo Vệ',element:'Mộc',mana:400,hours:6,cooldown:10,desc:'+10% tốc độ bổ sung quân dự bị và giảm tổn thất quân trong 6 giờ.',key:'old_forest',kind:'combat'},
  ancient_vitality:{name:'Sinh Lực Cổ Thụ',element:'Mộc',mana:450,hours:4,cooldown:10,desc:'+12% sức bền hiệu dụng cho toàn bộ Bộ binh trong 4 giờ.',key:'ancient_vitality',kind:'combat'},
  mist_illusion:{name:'Màn Sương Ảo Ảnh',element:'Thủy',mana:300,hours:12,cooldown:16,desc:'Tăng sai số tình báo của đối phương và giảm nhẹ tổn thất do phản kích.',key:'mist_illusion',kind:'combat'},
  tailwind:{name:'Thuận Phong Kỳ',element:'Thủy',mana:400,hours:4,cooldown:10,desc:'+20% hiệu quả công của Thủy binh và +10% của Bộ binh trong 4 giờ.',key:'tailwind',kind:'combat'},
  ice_array:{name:'Băng Phong Trận',element:'Thủy',mana:500,hours:3,cooldown:12,desc:'Làm chậm đối thủ, giảm hiệu quả chiến đấu của quân địch trong 3 giờ.',key:'ice_array',kind:'combat'},
  ares:{name:'Tiếng gọi Ares',element:'Hỏa',mana:500,hours:4,cooldown:10,desc:'+12% Tấn công toàn quân trong 4 giờ.',key:'ares',kind:'combat'},
  hellfire:{name:'Cuồng Nổ Hỏa Ngục',element:'Hỏa',mana:600,hours:2,cooldown:14,desc:'+25% công bùng nổ nhưng giảm 10% thủ của quân ta trong 2 giờ.',key:'hellfire',kind:'combat'},
  burn_food:{name:'Thiêu Rụi Kho Lương',element:'Hỏa',mana:550,hours:4,cooldown:12,desc:'Khi thắng trận, đốt thêm 5% lương thực dự trữ của đối thủ.',key:'burn_food',kind:'combat'},
  earth_spirit:{name:'Địa Phục Linh',element:'Thổ',mana:400,hours:6,cooldown:10,desc:'+20% sản lượng Quặng và +20% đất nhận từ khám phá/chiến thắng trong 6 giờ.',key:'earth_spirit',kind:'economy'},
  great_wall:{name:'Vạn Lý Thành Lũy',element:'Thổ',mana:450,hours:6,cooldown:12,desc:'+15% thủ toàn quân và giảm tổn thất khi phòng thủ trong 6 giờ.',key:'great_wall',kind:'combat'},
  stone_quake:{name:'Thạch Chấn Động',element:'Thổ',mana:500,hours:3,cooldown:12,desc:'Giảm 15% hiệu quả chiến đấu của Thủy binh và Kỵ binh địch trong 3 giờ.',key:'stone_quake',kind:'combat'},
  earth_reinforce:{name:'Đại Địa Gia Cố',element:'Thổ',mana:650,hours:2,cooldown:18,desc:'Giảm 50% thời gian xây dựng công trình khởi công trong 2 giờ.',key:'earth_reinforce',kind:'utility'}
};
const WAR_MISSIONS = [
  {id:'border_bandits',name:'Dẹp loạn biên giới',def:2200,element:'Mộc',branch:'infantry',rewardP:18000,rewardLand:4,rewardMana:120,desc:'Một toán sơn tặc quấy phá tuyến vận lương phía bắc.'},
  {id:'escort_grain',name:'Hộ tống đoàn lương',def:3200,element:'Thổ',branch:'cavalry',rewardP:22000,rewardLand:5,rewardMana:140,desc:'Giữ an toàn đoàn lương qua vùng đồi có kỵ phỉ phục kích.'},
  {id:'forest_ambush',name:'Phá ổ phục kích',def:4300,element:'Mộc',branch:'infantry',rewardP:28000,rewardLand:6,rewardMana:160,desc:'Đối phương bố trí nỏ thủ trong rừng, cần đội hình cân bằng.'},
  {id:'river_gate',name:'Mở cửa sông',def:5600,element:'Thủy',branch:'navy',rewardP:35000,rewardLand:7,rewardMana:180,desc:'Chiếm bến sông để mở tuyến thủy vận.'},
  {id:'iron_fort',name:'Công phá Thiết Trại',def:7200,element:'Kim',branch:'infantry',rewardP:45000,rewardLand:8,rewardMana:220,desc:'Một cứ điểm giáp nặng khóa đường tiến quân.'},
  {id:'burning_field',name:'Giải vây Hỏa Nguyên',def:9000,element:'Hỏa',branch:'cavalry',rewardP:56000,rewardLand:9,rewardMana:250,desc:'Quân Hỏa dùng chiến thuật đốt đồng và xung kích nhanh.'},
  {id:'mist_harbor',name:'Trận chiến Mê Cảng',def:11200,element:'Thủy',branch:'navy',rewardP:70000,rewardLand:10,rewardMana:300,desc:'Sương dày khiến tình báo sai lệch, hải quân địch mai phục kín.'},
  {id:'earth_wall',name:'Phá Vạn Thổ Thành',def:13800,element:'Thổ',branch:'infantry',rewardP:85000,rewardLand:12,rewardMana:340,desc:'Thành lũy nhiều lớp, thiên thủ và kéo dài giao tranh.'},
  {id:'sky_raiders',name:'Quét sạch Không Tặc',def:16800,element:'Mộc',branch:'air',rewardP:105000,rewardLand:14,rewardMana:380,desc:'Không tặc cơ động đánh vào kho hậu cần từ trên cao.'},
  {id:'golden_armada',name:'Hạm đội Kim Quang',def:20500,element:'Kim',branch:'navy',rewardP:130000,rewardLand:16,rewardMana:430,desc:'Hạm đội bọc thép, hỏa lực mạnh và giữ đội hình cực tốt.'},
  {id:'red_sky',name:'Thiên Hỏa Giáng Lâm',def:24800,element:'Hỏa',branch:'air',rewardP:160000,rewardLand:18,rewardMana:500,desc:'Đội hình không quân Hỏa dồn sát thương rất nhanh.'},
  {id:'five_elements',name:'Ngũ Hành Đại Trận',def:30000,element:'Thổ',branch:'infantry',rewardP:200000,rewardLand:22,rewardMana:650,desc:'Trận tổng hợp buộc người chơi dùng đúng quân, phép và tương khắc.'},
  {id:'black_tide',name:'Hắc Triều Phản Công',def:36500,element:'Thủy',branch:'navy',rewardP:250000,rewardLand:25,rewardMana:750,desc:'Đối thủ dùng thủy quân số đông và phép làm chậm kéo dài trận.'},
  {id:'dragon_pass',name:'Đoạt Long Môn',def:44000,element:'Kim',branch:'cavalry',rewardP:320000,rewardLand:30,rewardMana:900,desc:'Cửa ải then chốt, phòng thủ dày và phản kích bằng kỵ binh.'},
  {id:'final_dominion',name:'Trận Quyết Chiến Vương Quốc',def:54000,element:'Hỏa',branch:'air',rewardP:450000,rewardLand:40,rewardMana:1200,desc:'Trận chiến cuối cùng để định đoạt vương quốc.'}
];
const NAV = [
  ['overview','Tổng quan'],['build','Xây dựng'],['explore','Khám phá'],['military','Quân đội'],['research','Nghiên cứu'],['magic','Phép thuật'],['war','Chiến tranh'],['rank','Xếp hạng']
];

function unit(id,name,branch,element,role,costP,costO,off,def,desc){
  return {id,name,branch,element,role,costP,costO,off,def,desc,strong:ELEMENT_META[element].strong,weak:ELEMENT_META[element].weak};
}
const UNIT_LIST = [
  unit('iron_guard','Thiết Giáp Binh','infantry','Kim','Tuyến chắn / hãm thành',360,28,3,8,'Trọng giáp toàn thân, giữ tuyến cực tốt.'),
  unit('great_blade','Đại Đao Thủ','infantry','Kim','Càn quét diện rộng',390,30,7,3,'Dùng trường đao càn quét đội hình dày.'),
  unit('longbow','Trường Cung Thủ','infantry','Mộc','Đánh xa / rỉa máu',340,18,8,1,'Bắn xa, gây áp lực tầm xa.'),
  unit('ambush_crossbow','Nỏ Thủ Phục Binh','infantry','Mộc','Phục kích cơ động',325,17,7,2,'Phục kích trong rừng, ra đòn nhanh.'),
  unit('horse_cutter','Trảm Mã Thảo Binh','infantry','Mộc','Khắc chế cơ động',330,20,6,2,'Luồn lách triệt hạ mục tiêu nặng.'),
  unit('wall_spear','Vạn Cân Thương Binh','infantry','Thổ','Chống xung phong',350,24,4,7,'Cắm giáo tạo tuyến chắn kiên cố.'),
  unit('stone_shield','Trọng Thẫn Binh','infantry','Thổ','Lá chắn / đỡ đòn',345,26,2,9,'Mang khiên cực nặng, thủ vững.'),
  unit('mist_scout','Mê Lạc Trinh Sát','infantry','Thủy','Làm chậm / quấy rối',315,19,5,4,'Phi tiêu làm chậm và bào mòn địch.'),
  unit('toxic_medic','Trọng Khí Y Binh','infantry','Thủy','Hỗ trợ / làm suy yếu',300,16,3,6,'Vừa hồi sức vừa làm suy giáp địch.'),
  unit('fire_bomber','Bộc Hỏa Binh','infantry','Hỏa','Bùng nổ diện rộng',405,32,9,1,'Ném hỏa dầu gây nổ đội hình.'),
  unit('fire_arrow','Hỏa Binh Bắn Tên','infantry','Hỏa','Tầm xa thiêu đốt',380,26,8,1,'Tên lửa đốt cháy hàng ngũ đối phương.'),
  unit('mad_flame','Cuồng Sĩ Cuồng Thiết','infantry','Hỏa','Dồn sát thương',395,29,9,2,'Càng đánh càng tăng áp lực cận chiến.'),

  unit('iron_lancer','Thiết Xung Kỵ','cavalry','Kim','Xung phong giáp nặng',620,52,8,8,'Kỵ binh giáp dày, đâm xuyên tuyến đầu.'),
  unit('blade_rider','Liêm Đao Kỵ','cavalry','Kim','Quét ngang đội hình',650,55,10,5,'Vòng quét rộng, sát thương bùng nổ.'),
  unit('forest_rider','Lâm Ảnh Cung Kỵ','cavalry','Mộc','Bắn và rút',590,45,8,3,'Kỵ cung cơ động, đánh hit-and-run.'),
  unit('pathfinder','Du Lâm Trinh Kỵ','cavalry','Mộc','Trinh sát / truy kích',560,42,7,4,'Mở tầm nhìn và săn mục tiêu yếu.'),
  unit('hook_rider','Liệp Túc Móc Kỵ','cavalry','Mộc','Cắt chân đội hình',580,44,8,3,'Dùng móc kéo và triệt chân mục tiêu.'),
  unit('earth_lancer','Trường Mâu Trọng Kỵ','cavalry','Thổ','Giữ tuyến cưỡi ngựa',610,48,6,8,'Mạnh trong va chạm trực diện.'),
  unit('stone_ram','Sơn Giáp Kỵ','cavalry','Thổ','Kháng chịu / phản công',600,50,5,9,'Giữ bền bỉ trong chiến tuyến dài.'),
  unit('stream_rider','Lưu Ảnh Tiêu Kỵ','cavalry','Thủy','Làm chậm / cơ động',575,40,7,5,'Ra vào cực nhanh, làm rối đội hình.'),
  unit('medic_rider','Vân Bộ Y Kỵ','cavalry','Thủy','Hỗ trợ cơ động',565,39,4,7,'Hỗ trợ trị thương trên tuyến sau.'),
  unit('flame_charge','Liệt Diệm Xung Kỵ','cavalry','Hỏa','Xung kích hủy diệt',670,58,11,3,'Lao vào đốt tuyến đầu rất mạnh.'),
  unit('rocket_rider','Hỏa Tiễn Kỵ','cavalry','Hỏa','Tầm trung áp chế',660,56,10,4,'Phóng lao lửa gây sát thương tức thì.'),
  unit('berserk_rider','Cuồng Dực Mã Kỵ','cavalry','Hỏa','Dồn sát thương cuối',690,60,12,2,'Cực mạnh khi truy sát địch rút lui.'),

  unit('iron_ram_ship','Bốc Thiết Hạm','navy','Kim','Húc vỡ mạn thuyền',720,64,8,9,'Mũi nhọn bọc thép, áp sát rất cứng.'),
  unit('cannon_ship','Thần Cơ Pháo Thuyền','navy','Kim','Pháo kích tầm xa',760,68,10,6,'Đại bác đồng bắn nặng vào thân thuyền.'),
  unit('swift_boat','Mộc Lĩnh Đoạn Thuyền','navy','Mộc','Tốc độ / luồn lách',650,48,8,4,'Thuyền nhẹ cơ động vòng đánh sườn.'),
  unit('mother_boat','Mẫu Tử Thuyền','navy','Mộc','Đột kích mang chất nổ',690,50,9,4,'Thuyền mẹ chở thuyền con áp sát nổ.'),
  unit('boarding_ship','Trường Kiếm Lôi Thuyền','navy','Mộc','Áp mạn cướp thuyền',670,49,8,5,'Cho quân nhảy sang đánh cận chiến.'),
  unit('tower_ship','Cửu Tầng Lâu Thuyền','navy','Thổ','Pháo đài mặt nước',760,70,6,10,'Khổng lồ, thủ rất cao và tầm nhìn rộng.'),
  unit('heavy_barge','Thâm Trầm Trọng Hạm','navy','Thổ','Tàu nặng / nghiền lực',740,66,5,11,'Chở nặng, ép chìm đội hình đối thủ.'),
  unit('diver_team','Kình Ngư Thủy Kích','navy','Thủy','Đánh chìm từ dưới nước',680,52,7,6,'Đục đáy thuyền và phá đội hình kín.'),
  unit('mine_boat','Thủy Lôi Thuyền','navy','Thủy','Gài bẫy / khống chế',700,54,8,6,'Thả bẫy gai và mìn ngầm.'),
  unit('fire_ship','Xích Bích Hỏa Thuyền','navy','Hỏa','Hỏa công tổng lực',790,72,11,3,'Thiêu rụi hạm đội khi tiếp cận được.'),
  unit('flame_dragon_ship','Hỏa Long Phô Đao','navy','Hỏa','Phun lửa mặt nước',775,70,10,4,'Phun dầu cháy áp đảo cự ly gần.'),
  unit('rocket_boat','Báo Pháo Tiên Phong','navy','Hỏa','Nhiễu loạn tuyến sau',745,67,10,3,'Thuyền nhỏ ném hỏa tiễn cực nhanh.'),

  unit('steel_wing','Thiết Dực Kỵ','air','Kim','Xuyên thủng tuyến trên không',880,74,9,8,'Cưỡi thú bay bọc giáp, đâm rất mạnh.'),
  unit('sky_guard','Cự Ưng Giáp Kỵ','air','Kim','Hộ tống / chắn trời',860,72,7,9,'Chắn tầm bắn và bảo vệ đội hình.'),
  unit('wind_bow','Phong Vũ Cung Ưng','air','Mộc','Bắn từ xa trên không',825,60,10,3,'Cung thủ cưỡi ưng, cấu rỉa từ cao.'),
  unit('shadow_wing','Lâm Ảnh Dực Trinh','air','Mộc','Trinh sát / tập kích',810,58,9,4,'Ẩn hiện, chuyên bắt mục tiêu yếu.'),
  unit('talon_hunter','Liệp Trảo Dực Binh','air','Mộc','Vồ bắt / cắt đội hình',820,59,9,4,'Dùng móng vuốt cắt tan tuyến sau.'),
  unit('fort_balloon','Thành Trì Khí Cầu','air','Thổ','Pháo đài treo',900,76,6,10,'Khí cầu giáp dày, giữ trời rất tốt.'),
  unit('rock_kite','Thiên Nham Cự Diều','air','Thổ','Thủ bền / kiểm soát',890,74,6,9,'Thả đá nặng và duy trì khu vực.'),
  unit('mist_hawk','Vân Vụ Trinh Ưng','air','Thủy','Gây rối / làm chậm',835,61,8,6,'Thả sương mù, che mắt và làm chậm.'),
  unit('healing_bird','Linh Vũ Y Điểu','air','Thủy','Hỗ trợ / hồi phục',830,59,5,8,'Hỗ trợ trên không cho đội bạn.'),
  unit('fire_dragon','Hỏa Long Kỵ','air','Hỏa','Dội lửa diện rộng',930,80,12,3,'Tập kích thiêu rụi đội hình dày.'),
  unit('flame_rain','Viêm Tiễn Dực Binh','air','Hỏa','Mưa tên lửa',910,78,11,3,'Ném tên lửa từ cao xuống trận địa.'),
  unit('storm_breaker','Liệt Phong Bạo Kích','air','Hỏa','Kết liễu / công kích cực mạnh',950,82,13,2,'Sát thương bùng nổ cao nhất nhánh không quân.')
];
const UNITS = Object.fromEntries(UNIT_LIST.map(x => [x.id, x]));

function emptyUnits(){ return Object.fromEntries(UNIT_LIST.map(x => [x.id, 0])); }
function initialState(){
  const buildings = {}; Object.keys(BUILDINGS).forEach(k => buildings[k] = 0);
  Object.assign(buildings, {home:130,alchemy:204,farm:44,smithy:117,ore_mine:40,tower:25,temple:25,lumberyard:20,factory:45,barracks:10});
  return {
    version:2, realmName:'Đại Việt', race:'Con Người', hour:0, morale:100, prestige:0,
    resources:{platinum:340000,food:50000,lumber:20000,mana:8500,ore:72000,gems:0,research:1050,boats:0},
    peasants:10496, draftees:1447, spies:25, wizards:25,
    land:{plain:495,mountain:40,swamp:50,cavern:0,forest:20,hill:45,water:0},
    buildings,
    units:emptyUnits(),
    techs:[], buffs:{}, spellCooldowns:{}, completedMissions:[], queue:[], bank:0,
    hero:{name:'Aurelius', level:1, xp:0},
    rivals:[
      {name:'Hắc Nham',land:590,off:7600,def:9200,wealth:120000,food:85000,element:'Thổ',spellElement:'Thổ',branch:'infantry'},
      {name:'Thanh Mộc',land:680,off:10500,def:10000,wealth:155000,food:92000,element:'Mộc',spellElement:'Mộc',branch:'cavalry'},
      {name:'Bạch Hải',land:760,off:13200,def:14600,wealth:180000,food:110000,element:'Thủy',spellElement:'Thủy',branch:'navy'},
      {name:'Xích Phong',land:880,off:17800,def:16900,wealth:230000,food:125000,element:'Hỏa',spellElement:'Hỏa',branch:'air'},
      {name:'Thiên Sơn',land:1020,off:22500,def:24000,wealth:300000,food:150000,element:'Kim',spellElement:'Kim',branch:'infantry'},
      {name:'Lục Lâm',land:1160,off:27000,def:28500,wealth:360000,food:175000,element:'Mộc',spellElement:'Mộc',branch:'infantry'},
      {name:'Đông Hải',land:1320,off:33000,def:35000,wealth:430000,food:200000,element:'Thủy',spellElement:'Thủy',branch:'navy'},
      {name:'Hoàng Sa',land:1500,off:39500,def:41000,wealth:520000,food:240000,element:'Thổ',spellElement:'Thổ',branch:'navy'},
      {name:'Kim Thành',land:1720,off:47000,def:50000,wealth:650000,food:275000,element:'Kim',spellElement:'Kim',branch:'cavalry'},
      {name:'Hỏa Vân',land:1980,off:58000,def:56000,wealth:820000,food:320000,element:'Hỏa',spellElement:'Hỏa',branch:'air'}
    ],
    lastAiRaidHour:-72,
    news:[
      {h:0,text:'Vương quốc đã sẵn sàng bước vào thời kỳ chinh phục.'},
      {h:0,text:'Hãy phát triển kinh tế, nghiên cứu và quân lực theo thế mạnh riêng.'}
    ]
  };
}
function load(){
  try{
    let stored = localStorage.getItem(storageKey());
    if(!stored && activeSaveSlot===1){
      const legacy = localStorage.getItem(LEGACY_STORAGE);
      if(legacy){ stored=legacy; localStorage.setItem(storageKey(1), legacy); }
    }
    const raw = stored ? JSON.parse(stored) : null;
    if(!raw) return initialState();
    const base = initialState();
    const merged = {...base, ...raw};
    merged.resources = {...base.resources, ...(raw.resources||{})};
    merged.land = {...base.land, ...(raw.land||{})};
    merged.buildings = {...base.buildings, ...(raw.buildings||{})};
    merged.units = {...base.units, ...(raw.units||{})};
    merged.techs = Array.isArray(raw.techs) ? raw.techs : [];
    merged.buffs = {...(raw.buffs||{})};
    merged.spellCooldowns = {...(raw.spellCooldowns||{})};
    merged.completedMissions = Array.isArray(raw.completedMissions) ? raw.completedMissions : [];
    merged.queue = Array.isArray(raw.queue) ? raw.queue : [];
    merged.news = Array.isArray(raw.news) ? raw.news : base.news;
    const rawRivals = Array.isArray(raw.rivals) ? raw.rivals : [];
    merged.rivals = base.rivals.map((br,i)=>({ ...br, ...(rawRivals.find(r=>r.name===br.name)||rawRivals[i]||{}) }));
    merged.version = 2;
    return merged;
  }catch(e){ return initialState(); }
}
let S = load();
let page = 'overview';
let militaryTab = 'infantry';
let magicElementTab = 'Kim';
let warTab = 'campaign';
let lastResourceSnapshot = null;

function save(silent=false){
  try{
    S.lastSavedAt=Date.now();
    localStorage.setItem(storageKey(), JSON.stringify(S));
    localStorage.setItem(ACTIVE_SLOT_KEY, String(activeSaveSlot));
    updateSaveSlotUI();
    if(!silent) toast(`Đã lưu Ván ${activeSaveSlot}.`);
  }catch(e){ if(!silent) toast('Không thể lưu tiến trình trên trình duyệt này.'); }
}
function toast(t){ const el = $('#toast'); el.textContent = t; el.classList.add('show'); clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove('show'), 2200); }
function slotSummary(slot){
  try{
    const raw=JSON.parse(localStorage.getItem(storageKey(slot))||'null');
    if(!raw)return 'Mới';
    const day=Math.floor(Number(raw.hour||0)/24)+1;
    return `Ngày ${day} · ${raw.realmName||'Đại Việt'}`;
  }catch(e){return 'Mới';}
}
function updateSaveSlotUI(){
  $$('[data-save-slot]').forEach(btn=>{
    const slot=Number(btn.dataset.saveSlot);
    btn.classList.toggle('active',slot===activeSaveSlot);
    const meta=btn.querySelector('[data-slot-meta]'); if(meta)meta.textContent=slotSummary(slot);
  });
}
function switchSaveSlot(slot){
  slot=Math.max(1,Math.min(3,Number(slot||1)));
  if(slot===activeSaveSlot)return;
  save(true);
  activeSaveSlot=slot;
  localStorage.setItem(ACTIVE_SLOT_KEY,String(slot));
  S=load();
  ensureV10State(); ensureV11State(); ensureV12State(); ensureV13State(); ensurePracticeStateV23();
  page='overview'; militaryTab='infantry'; magicElementTab='Kim'; warTab='campaign'; lastResourceSnapshot=null;
  save(true); render(); updateSaveSlotUI(); toast(`Đã mở Ván ${slot}.`);
}
function bindSaveSlots(){
  $$('[data-save-slot]').forEach(btn=>btn.onclick=()=>switchSaveSlot(btn.dataset.saveSlot));
  updateSaveSlotUI();
}
function autosaveNow(){ if(typeof S!=='undefined'&&S) save(true); }

function totalLand(){ return Object.values(S.land).reduce((a,b)=>a+b,0); }
function usedLandByType(type){ return Object.entries(S.buildings).filter(([k]) => BUILDINGS[k].land === type).reduce((a,[,v]) => a+v, 0); }
function barren(type){ const reserved = S.queue.filter(q=>q.type==='build' && BUILDINGS[q.key]?.land===type).reduce((a,q)=>a+q.amount,0); return Math.max(0, S.land[type]-usedLandByType(type)-reserved); }
function totalBarren(){ return Object.keys(LAND).reduce((a,k)=>a+barren(k),0); }
function armyCount(){ return Object.values(S.units).reduce((a,b)=>a+b,0); }
function maxPopulation(){
  let raw = S.buildings.home * 30;
  Object.entries(S.buildings).forEach(([k,v]) => { if(k !== 'home' && k !== 'barracks') raw += v*15; });
  raw += totalBarren()*5;
  return Math.max(0, Math.round(raw));
}
function maxPeasants(){ return Math.max(0, maxPopulation() - (S.draftees + S.spies + S.wizards + armyCount())); }
function armyCapacity(){ return Math.max(360, S.buildings.barracks*36*(techDone('barracks_logistics')?1.20:1)); }
function smithyDiscount(){ return Math.min(.44, (S.buildings.smithy/Math.max(1,totalLand()))*2 + (techDone('smithing_mastery')?.08:0)); }
function factoryDiscount(){ return Math.min(.50, (S.buildings.factory/Math.max(1,totalLand()))*5); }
function techDone(id){ return S.techs.includes(id); }
function unlockedSquadCount(){ return 1 + ['team_command_2','team_command_3','team_command_4','team_command_5'].filter(techDone).length; }
function visibleSquads(){ ensureV5State(); return S.squads.slice(0, unlockedSquadCount()); }
function storageProtection(){ if(techDone('granary_bunker_2')) return .70; if(techDone('granary_bunker_1')) return .35; return 0; }
function teamUnlockHints(){ return {2:'Nghiên cứu Liên đội II',3:'Nghiên cứu Liên đội III',4:'Nghiên cứu Liên đội IV',5:'Nghiên cứu Liên đội V'}; }
function techUnlocked(id){ const t=TECHS[id]; if(!t) return false; return (t.req||[]).every(techDone); }
function buildingCost(){
  const tl=totalLand(), explored=Math.max(0, tl-250), baseP=850+1.25*explored, baseL=87.5+.285*explored;
  let mult=1-factoryDiscount()-(S.techs.includes('efficient_build')?.10:0);
  return {p:Math.max(170,Math.floor(baseP*Math.max(.2,mult))), l:Math.max(22,Math.floor(baseL*Math.max(.25,mult)))};
}
function exploreCost(){ const tl=totalLand(); let p=.6*Math.pow(tl,1.299); if(tl<1520) p += (-.001*tl*tl+1.91*tl-593); if(techDone('earth_survey')) p*=.90; return {p:Math.max(1,Math.round(p)), d:Math.floor(tl/150)+3}; }
function activeBuff(k){ return (S.buffs[k]||0) > S.hour; }
function buffRemaining(k){ return Math.max(0,(S.buffs[k]||0)-S.hour); }
function cooldownRemaining(k){ return Math.max(0,(S.spellCooldowns?.[k]||0)-S.hour); }
function elementScale(spellElement, enemySpellElement){
  if(!enemySpellElement || !ELEMENT_META[spellElement]) return 1;
  if(ELEMENT_META[spellElement].strong === enemySpellElement) return 1.25;
  if(ELEMENT_META[spellElement].weak === enemySpellElement) return .5;
  return 1;
}
function production(){
  let food=S.buildings.farm*80+S.buildings.dock*40;
  let lumber=S.buildings.lumberyard*50;
  let platinum=S.buildings.alchemy*45;
  let ore=S.buildings.ore_mine*60;
  let mana=S.buildings.tower*25+S.buildings.wizard_guild*5;
  let gems=S.buildings.diamond_mine*15;
  let research=Math.max(0,S.buildings.school*(1-S.buildings.school/Math.max(1,totalLand())));
  let boats=S.buildings.dock*.05;
  food*=1.05;
  if(techDone('farmers_growth')) food*=1.10;
  if(techDone('fruits_of_labor')) lumber*=1.20;
  if(techDone('ore_processing')) ore*=1.15;
  if(techDone('mana_theory')) mana*=1.12;
  if(techDone('academy_method')) research*=1.25;
  if(activeBuff('gaia')){ food*=1.15; lumber*=1.15; }
  if(activeBuff('midas')) platinum*=1.08*(techDone('spell_weaving')?1.08:1);
  if(activeBuff('earth_spirit')) ore*=1.20;
  const population=S.peasants+S.draftees+S.spies+S.wizards+armyCount();
  const foodUse=population*.25;
  return {platinum,food:food-foodUse,lumber,mana,ore,gems,research,boats,foodGross:food,foodUse};
}
function combatPower(enemySpellElement=null, enemyBranch=null){
  let branchOff={infantry:0,cavalry:0,navy:0,air:0}, branchDef={infantry:0,cavalry:0,navy:0,air:0};
  Object.entries(S.units).forEach(([k,qty])=>{ const u=UNITS[k]; if(!u)return; branchOff[u.branch]+=qty*u.off; branchDef[u.branch]+=qty*u.def; });
  if(activeBuff('ancient_vitality')){
    const sc=elementScale('Mộc',enemySpellElement); branchOff.infantry*=1+.06*sc; branchDef.infantry*=1+.12*sc;
  }
  if(activeBuff('tailwind')){
    const sc=elementScale('Thủy',enemySpellElement); branchOff.navy*=1+.20*sc; branchOff.infantry*=1+.10*sc;
  }
  let off=Object.values(branchOff).reduce((a,b)=>a+b,0), def=Object.values(branchDef).reduce((a,b)=>a+b,0);
  const gry=Math.min(.32,(S.buildings.gryphon_nest/Math.max(1,totalLand()))*1.6);
  const gt=Math.min(.32,(S.buildings.guard_tower/Math.max(1,totalLand()))*1.6);
  off*=1+gry+(S.techs.includes('disciplined_army')?.10:0);
  def*=1+gt+(S.techs.includes('fortification')?.10:0)+(S.buildings.masonry/Math.max(1,totalLand()))*.25;
  if(activeBuff('ares')) off*=1+.12*elementScale('Hỏa',enemySpellElement);
  if(activeBuff('hellfire')){ off*=1+.25*elementScale('Hỏa',enemySpellElement); def*=.90; }
  if(activeBuff('quartz_shield')) def*=1+.10*elementScale('Kim',enemySpellElement);
  if(activeBuff('great_wall')) def*=1+.15*elementScale('Thổ',enemySpellElement);
  return {off:Math.floor(off),def:Math.floor(def)};
}
function enemyEffectiveDefense(r){
  let v=r.def;
  if(activeBuff('magnetic_array') && ['Mộc','Kim'].includes(r.element)) v*=1-.08*elementScale('Kim',r.spellElement);
  if(activeBuff('ice_array')) v*=1-.10*elementScale('Thủy',r.spellElement);
  if(activeBuff('stone_quake') && ['navy','cavalry'].includes(r.branch)) v*=1-.15*elementScale('Thổ',r.spellElement);
  return Math.max(1,Math.floor(v));
}
function lossMultiplier(){
  let m=1;
  if(activeBuff('quartz_shield')) m*=.90;
  if(activeBuff('old_forest')) m*=.90;
  if(activeBuff('mist_illusion')) m*=.92;
  if(activeBuff('great_wall')) m*=.90;
  return m;
}
function activeCombatSpellAgainst(enemySpellElement){
  const active=Object.values(SPELLS).filter(s=>s.kind==='combat'&&activeBuff(s.key));
  if(!active.length) return null;
  active.sort((a,b)=>b.mana-a.mana);
  const s=active[0], scale=elementScale(s.element,enemySpellElement);
  return {spell:s,scale,status:scale>1?'Khắc chế':scale<1?'Bị khắc':'Trung tính'};
}
function score(){ const p=combatPower(); return Math.round(totalLand()*10 + (p.off+p.def)/10 + S.prestige*5 + S.techs.length*250); }
function timeLabel(h=S.hour){ return `Ngày ${Math.floor(h/24)+1}, ${String(h%24).padStart(2,'0')}:00`; }
function log(text){ S.news.unshift({h:S.hour,text}); S.news=S.news.slice(0,100); }
function qLabel(q){
  if(q.type==='build') return `${fmt(q.amount)} ${BUILDINGS[q.key].name}`;
  if(q.type==='explore') return `${fmt(q.amount)} mẫu ${LAND[q.key]}`;
  return `${fmt(q.amount)} ${UNITS[q.key].name}`;
}
function processQueue(){
  const ready = S.queue.filter(q=>q.done<=S.hour), keep=S.queue.filter(q=>q.done>S.hour); S.queue=keep;
  ready.forEach(q => {
    if(q.type==='build'){ S.buildings[q.key]+=q.amount; log(`Hoàn tất xây ${fmt(q.amount)} ${BUILDINGS[q.key].name}.`); }
    if(q.type==='explore'){ const gain=Math.max(1,Math.round(q.amount*(q.earthBonus?1.20:1))); S.land[q.key]+=gain; log(`Đội thám hiểm trở về: +${fmt(gain)} mẫu ${LAND[q.key]}${gain>q.amount?' (Địa Phục Linh cộng thêm đất)':''}.`); }
    if(q.type==='train'){ S.units[q.key]+=q.amount; log(`Huấn luyện xong ${fmt(q.amount)} ${UNITS[q.key].name}.`); }
  });
}
function loseArmy(rate){ Object.keys(S.units).forEach(k => S.units[k] = Math.max(0, Math.floor(S.units[k]*(1-rate)))); }
function evolveRivals(){ S.rivals.forEach(r => { const f=.015+Math.random()*.02; r.land=Math.round(r.land*(1+f*.35)); r.off=Math.round(r.off*(1+f)); r.def=Math.round(r.def*(1+f*.9)); r.wealth=Math.round(r.wealth*(1+f)); }); if(Math.random()<.22) log('Thám báo: các lãnh địa lân cận đang tăng cường quân lực.'); }
function maybeAiRaid(){
  S.lastAiRaidHour = Number(S.lastAiRaidHour||0);
  if(S.hour<24 || S.hour%24!==0) return;
  if(S.hour - S.lastAiRaidHour < 36) return;
  if(Math.random()>=.16) return;
  const rival=S.rivals[Math.floor(Math.random()*Math.min(6,S.rivals.length))];
  const atk=rival.off*(.82+Math.random()*.28);
  const def=combatPower(rival.spellElement,rival.branch).def*(.92+Math.random()*.20);
  S.lastAiRaidHour=S.hour;
  const prot=storageProtection();
  if(atk>def){
    const ratio=Math.max(.04,.20*(1-prot));
    const loot={};
    ['platinum','food','lumber','ore','mana'].forEach(k=>{ loot[k]=Math.floor((S.resources[k]||0)*ratio); S.resources[k]=Math.max(0,(S.resources[k]||0)-loot[k]); });
    log(`Cảnh báo: ${rival.name} tập kích thành công, cướp ${fmt(loot.platinum)} Bạch kim, ${fmt(loot.food)} Lương thực, ${fmt(loot.lumber)} Gỗ, ${fmt(loot.ore)} Quặng và ${fmt(loot.mana)} Mana.${prot?` Hầm quân lương đã giữ lại ${(prot*100).toFixed(0)}% tài nguyên có thể bị cướp.`:''}`);
    toast('Bị AI tập kích. Xem Tin tức để biết thiệt hại.');
  }else{
    const gainP=Math.floor((rival.wealth||0)*.20), gainF=Math.floor((rival.food||0)*.20), gainO=Math.floor((rival.wealth||0)*.06), gainL=Math.floor((rival.wealth||0)*.04), gainM=Math.max(20,Math.floor((rival.wealth||0)*.01));
    S.resources.platinum+=gainP; S.resources.food+=gainF; S.resources.ore+=gainO; S.resources.lumber+=gainL; S.resources.mana+=gainM;
    rival.wealth=Math.max(0,(rival.wealth||0)-gainP); rival.food=Math.max(0,(rival.food||0)-gainF);
    log(`Phản kích thành công cuộc tập kích của ${rival.name}. Bạn thu được ${fmt(gainP)} Bạch kim, ${fmt(gainF)} Lương thực, ${fmt(gainL)} Gỗ, ${fmt(gainO)} Quặng và ${fmt(gainM)} Mana.`);
    toast('Đã đánh lui AI và thu chiến lợi phẩm.');
  }
}
function advance(hours){
  hours=Math.max(1,Math.floor(hours));
  for(let i=0;i<hours;i++){
    S.hour++;
    const p=production();
    ['platinum','lumber','mana','ore','gems','research','boats'].forEach(k=> S.resources[k]+=p[k]);
    S.resources.food=Math.max(0, S.resources.food+p.food);
    const cap=maxPeasants();
    const templeBonus=1+Math.min(.6,(S.buildings.temple/Math.max(1,totalLand()))*6);
    const growth=Math.max(0,Math.floor(S.peasants*.003*templeBonus));
    S.peasants=Math.min(cap,S.peasants+growth);
    const draftRate=.003*(activeBuff('old_forest')?1.10:1);
    const draft=Math.min(S.peasants, Math.max(0, Math.floor(S.peasants*draftRate)));
    S.peasants-=draft; S.draftees+=draft;
    S.morale=Math.min(100,S.morale+0.35);
    S.resources.food*=.99; S.resources.lumber*=.99;
    S.bank*=1.0005;
    if(S.hour%6===0) evolveRivals();
    processQueue();
    maybeAiRaid();
    if(S.resources.food<=0){ S.morale=Math.max(0,S.morale-4); S.peasants=Math.max(0,Math.floor(S.peasants*.995)); }
  }
  save(true); render(); toast(`Đã mô phỏng ${hours} giờ · ${timeLabel()}`);
}
function card(title, body, extra=''){ return `<div class="card"><div class="card-head"><h3>${title}</h3>${extra}</div><div class="card-body">${body}</div></div>`; }
function queueHtml(){
  if(!S.queue.length) return '<div class="muted">Không có lệnh đang chờ.</div>';
  return `<div class="queue">${S.queue.sort((a,b)=>a.done-b.done).map(q=>`<div class="queue-item"><div><b>${qLabel(q)}</b><div class="small muted">${q.type==='explore'?'Khám phá':q.type==='train'?'Huấn luyện':'Xây dựng'}</div></div><div><b>${Math.max(0,q.done-S.hour)} giờ</b><div class="small muted">còn lại</div></div></div>`).join('')}</div>`;
}
function unitCountByBranch(branch){ return UNIT_LIST.filter(u=>u.branch===branch).reduce((a,u)=>a+(S.units[u.id]||0),0); }
function currentSnapshot(){
  return {
    platinum:S.resources.platinum, food:S.resources.food, lumber:S.resources.lumber, ore:S.resources.ore, mana:S.resources.mana,
    peasants:S.peasants, draftees:S.draftees, land:totalLand()
  };
}
function resourceBar(){
  const p = production();
  const now = currentSnapshot();
  const items = [
    {label:'Bạch kim', key:'platinum', value:S.resources.platinum, hourly:p.platinum},
    {label:'Lương thực', key:'food', value:S.resources.food, hourly:p.food},
    {label:'Gỗ', key:'lumber', value:S.resources.lumber, hourly:p.lumber},
    {label:'Quặng', key:'ore', value:S.resources.ore, hourly:p.ore},
    {label:'Mana', key:'mana', value:S.resources.mana, hourly:p.mana},
    {label:'Dân', key:'peasants', value:S.peasants, hourly:null},
    {label:'Dự bị', key:'draftees', value:S.draftees, hourly:null},
    {label:'Đất', key:'land', value:totalLand(), hourly:null}
  ];
  $('#resourceBar').innerHTML = items.map(item => {
    const deltaValue = lastResourceSnapshot ? Math.round(item.value - (lastResourceSnapshot[item.key] ?? item.value)) : 0;
    const bubble = deltaValue !== 0 ? `<div class="float-num ${deltaValue>=0?'up':'down'}">${deltaValue>=0?'+':''}${fmt(deltaValue)}</div>` : '';
    return `<div class="resource" data-resource="${item.key}">${bubble}<div class="resource-head"><canvas class="mini-canvas" data-icon="${item.key}" width="28" height="28"></canvas><div><div class="label">${item.label}</div><div class="value">${fmt(item.value)}</div></div></div>${item.hourly===null?'':`<div class="delta ${item.hourly>=0?'positive':'negative'}">${item.hourly>=0?'+':''}${fmt(item.hourly,0)}/giờ</div>`}</div>`;
  }).join('');
  lastResourceSnapshot = now;
}
function renderOverview(){
  const p=production(), cp=combatPower(), foodHours=p.food<0?Math.floor(S.resources.food/Math.abs(p.food)):9999;
  return `<div class="grid four">
    ${card('Kinh tế',`<div class="metric">${fmt(p.platinum+p.lumber+p.ore,0)}</div><div class="submetric">Tổng sản xuất thô/giờ</div><div class="stat-line"><span>Lương thực tạo ra</span><b>${fmt(p.foodGross)}/h</b></div><div class="stat-line"><span>Dân tiêu thụ</span><b>${fmt(p.foodUse)}/h</b></div>`) }
    ${card('Quân lực',`<div class="metric">${fmt(cp.off)} / ${fmt(cp.def)}</div><div class="submetric">Công / Thủ tổng</div><div class="stat-line"><span>Quân chính quy</span><b>${fmt(armyCount())}</b></div><div class="stat-line"><span>Dự bị</span><b>${fmt(S.draftees)}</b></div>`) }
    ${card('Đất đai',`<div class="metric">${fmt(totalLand())}</div><div class="submetric">Tổng mẫu đất</div><div class="stat-line"><span>Đất trống</span><b>${fmt(totalBarren())}</b></div><div class="stat-line"><span>Đã xây/đã đặt xây</span><b>${fmt(totalLand()-totalBarren())}</b></div>`) }
    ${card('Tình trạng',`<div class="metric">${fmt(S.morale,0)}%</div><div class="submetric">Sĩ khí</div><div class="progress"><span style="width:${S.morale}%"></span></div><div class="stat-line"><span>Uy tín</span><b>${fmt(S.prestige)}</b></div><div class="stat-line"><span>Điểm</span><b>${fmt(score())}</b></div>`) }
  </div>
  <div class="grid two">
    ${card('Cảnh báo chiến lược',`${p.food<0?`<div class="section-note danger-text"><b>Thiếu cân đối lương thực:</b> đang âm ${fmt(Math.abs(p.food))}/giờ. Dự trữ đủ khoảng ${foodHours} giờ.</div>`:`<div class="section-note good-text"><b>Lương thực an toàn:</b> đang dư ${fmt(p.food)}/giờ.</div>`}<div style="height:10px"></div>${totalBarren()<20?'<div class="section-note warning"><b>Đất trống thấp:</b> nên khám phá thêm trước khi mở rộng sản xuất.</div>':'<div class="section-note">Mục tiêu gợi ý: cân bằng kinh tế → huấn luyện quân → đánh mục tiêu yếu hơn để lấy đất và Bạch kim.</div>'}`)}
    ${card('Lệnh đang xử lý',queueHtml())}
  </div>
  <div class="grid two">
    ${card('Tin tức gần đây',`<div class="news-list">${S.news.slice(0,8).map(n=>`<div class="news-item"><div class="t">${timeLabel(n.h)}</div>${n.text}</div>`).join('')}</div>`)}
    ${card('Quân theo nhánh',Object.keys(BRANCH_META).map(k=>`<div class="stat-line"><span>${BRANCH_META[k].name}</span><b>${fmt(unitCountByBranch(k))}</b></div>`).join(''))}
  </div>`;
}
function buildingCard(k,b,c){
  return `<div class="building"><div class="building-head"><canvas class="unit-badge" data-icon="building" data-building="${k}" width="34" height="34"></canvas><div><h4>${b.name}</h4><div class="meta">${b.desc}</div></div></div><div class="benefit">Lợi ích: <b>${b.benefit}</b></div><div class="row"><span>Địa hình cần</span><b>${LAND[b.land]}</b></div><div class="row"><span>Đang có</span><b>${fmt(S.buildings[k])}</b></div><div class="row"><span>Đất trống phù hợp</span><b>${fmt(barren(b.land))}</b></div><div class="row"><span>Chi phí 1 công trình</span><b>${fmt(c.p)} Bạch kim + ${fmt(c.l)} Gỗ</b></div><div class="helper-note">Ô số lượng bên dưới là <b>số công trình muốn xây</b>, không phải giá tiền hay số dân tăng trực tiếp.</div><div class="building-actions"><label class="qty-label">Số lượng<input id="qty_${k}" type="number" min="1" value="1"></label><button class="btn primary" data-build="${k}">Xây</button></div></div>`;
}
function buildBenefitText(b){ return b.benefit || b.desc; }
function compactTooltip(title, rows){
  return `<div class="tooltip-panel"><div class="tooltip-title">${title}</div>${rows.map(([k,v])=>`<div class="tooltip-line"><span>${k}</span><b>${v}</b></div>`).join('')}</div>`;
}
function renderBuild(){
  const c = buildingCost();
  return `<div class="section-note"><b>Chi phí hiện tại mỗi công trình:</b> ${fmt(c.p)} Bạch kim + ${fmt(c.l)} Gỗ. Nhà máy đang giảm khoảng ${fmt(factoryDiscount()*100,1)}%; công nghệ có thể giảm thêm. <br><b>Lưu ý:</b> mỗi dòng chỉ cần chọn <b>số lượng</b>, xem <b>tổng tiền</b> rồi bấm <b>Xây</b>. Hover chuột lên dòng để xem chi tiết.</div>
  <div class="accordion-stack">${Object.entries(BUILDING_GROUPS).map(([g,info],idx)=>`<details class="accordion" ${idx<2?'open':''}><summary><div><b>${info.name}</b><div class="small muted">${info.desc}</div></div><span class="pill">${Object.values(BUILDINGS).filter(x=>x.group===g).length} loại</span></summary><div class="compact-list">${Object.entries(BUILDINGS).filter(([,b])=>b.group===g).map(([k,b])=>{
      const tip = compactTooltip(b.name, [
        ['Mô tả', b.desc],
        ['Lợi ích', buildBenefitText(b)],
        ['Địa hình cần', LAND[b.land]],
        ['Đang có', fmt(S.buildings[k])],
        ['Đất trống phù hợp', fmt(barren(b.land))],
        ['Chi phí 1 công trình', `${fmt(c.p)} Bạch kim + ${fmt(c.l)} Gỗ`]
      ]);
      return `<div class="compact-row hover-tip-row"><div class="row-main"> <div class="row-name"><canvas class="unit-badge" data-icon="building" data-building="${k}" width="28" height="28"></canvas><div><b>${b.name}</b><div class="small muted">${buildBenefitText(b)}</div></div></div>${tip}</div><div class="row-side"><div class="inline-info muted">Đang có: <b>${fmt(S.buildings[k])}</b></div><label class="sl-wrap">SL<input id="qty_${k}" class="compact-input narrow" data-kind="build" data-key="${k}" data-base-p="${c.p}" data-base-l="${c.l}" type="number" min="1" value="1"></label><div class="price-box" id="build_total_${k}">${fmt(c.p)} Bạch kim + ${fmt(c.l)} Gỗ</div><button class="btn primary" data-build="${k}">Xây</button></div></div>`;
    }).join('')}</div></details>`).join('')}</div>`;
}
function doBuild(k){
  const q=Math.max(1,parseInt($(`#qty_${k}`)?.value||1,10));
  const b=BUILDINGS[k], c=buildingCost();
  if(q>barren(b.land)) return toast(`Không đủ đất trống loại ${LAND[b.land]}.`);
  if(S.resources.platinum<c.p*q || S.resources.lumber<c.l*q) return toast('Không đủ Bạch kim hoặc Gỗ.');
  S.resources.platinum-=c.p*q; S.resources.lumber-=c.l*q;
  const buildHours=activeBuff('earth_reinforce')?6:12;
  S.queue.push({type:'build',key:k,amount:q,done:S.hour+buildHours});
  log(`Khởi công ${q} ${b.name}; hoàn tất sau ${buildHours} giờ${buildHours===6?' nhờ Đại Địa Gia Cố':''}.`);
  save(true); render(); toast(`Đã đặt xây ${q} ${b.name} · ${buildHours} giờ.`);
}
function renderExplore(){
  ensureV5State();
  const c=exploreCost();
  const squads=visibleSquads();
  const idleCount=squads.filter(s=>s.status==='idle').length;
  const exploreQueue=S.queue.filter(q=>q.type==='expedition');
  const terrainRows=Object.keys(LAND).map(k=>{
    const builds=terrainBuildings(k);
    const terrainTip=compactTooltip(LAND[k],[['Có thể xây',builds.length?builds.join(', '):'Chưa có công trình phù hợp'],['Gợi ý',`Tăng ${LAND[k]} để mở thêm chỗ xây công trình đúng địa hình.`]]);
    const haveTip=compactTooltip('Đang có',[['Ý nghĩa','Tổng số mẫu đất loại này bạn đang sở hữu.'],['Hiện tại',`${fmt(S.land[k])} mẫu ${LAND[k]}`]]);
    const freeTip=compactTooltip('Đất trống',[['Ý nghĩa','Số mẫu cùng loại chưa dùng để xây công trình.'],['Hiện tại',`${fmt(barren(k))} mẫu còn trống`]]);
    return `<div class="compact-row terrain-row"><div class="terrain-left"><div class="terrain-name-chip hover-tip-row"><b>${LAND[k]}</b>${terrainTip}</div></div><div class="terrain-right"><div class="metric-chip hover-tip-row">Đang có: <b>${fmt(S.land[k])}</b>${haveTip}</div><div class="metric-chip hover-tip-row">Đất trống: <b>${fmt(barren(k))}</b>${freeTip}</div><label class="sl-wrap">Số mẫu<input class="compact-input narrow" id="exp_${k}" type="number" min="0" value="0"></label><button class="btn ghost small-btn" data-pick-land="${k}">Chọn</button></div></div>`;
  }).join('');
  const squadRows=squads.map(sq=>{
    const count=squadUnitCount(sq), power=squadPower(sq), noArmy=count<=0;
    const disabled=sq.status==='busy'||noArmy;
    const status=sq.status==='busy'?`Đang bận: ${sq.target} · còn ${Math.max(0,sq.busyUntil-S.hour)} giờ`:noArmy?'Chưa xếp quân vào đội hình':`${fmt(count)} quân · ${squadSummary(sq)}`;
    return `<div class="compact-row ${sq.status==='busy'?'squad-busy':''} ${noArmy?'squad-empty':''}"><div class="row-main"><div class="row-name"><label class="check-wrap"><input type="checkbox" class="sq-check" value="${sq.id}" ${disabled?'disabled':''}> <b>${sq.name}</b></label><div class="small ${noArmy?'danger-text':'muted'}">${status}</div></div></div><div class="row-side"><div class="price-box ${noArmy?'zero-power':''}">${noArmy?'Chưa có đội hình':`Sức mạnh ${fmt(power)}`}</div><button class="btn" data-jumppage="military">Xếp đội hình</button></div></div>`;
  }).join('');
  const hidden=5-unlockedSquadCount();
  return `${pendingClaims()?`<div class="notice-bar">${S.claims.map(c=>`<button class="notice-pill" data-claim="${c.id}">! ${c.title}</button>`).join('')}</div>`:''}<div class="grid explore-grid">
    ${card('Khám phá đất',`<div class="section-note"><b>Mỗi mẫu</b> hiện tốn <b>${fmt(c.p)} Bạch kim + ${fmt(c.d)} lính dự bị</b>. Muốn xuất phát, đội phải được <b>xếp quân thật</b> trong trang Quân đội. Có thể chọn 1–${unlockedSquadCount()} đội cùng tham gia. ${techDone('earth_survey')?'<b>Trắc địa địa mạch</b> đang giảm chi phí khám phá.':''}</div><div style="height:12px"></div><div class="compact-list terrain-list">${terrainRows}</div><button id="exploreBtn" class="btn primary" style="margin-top:12px">Bắt đầu khám phá</button>`)}
    <div class="grid explore-side">
      ${card(`Chọn đội tham gia (${idleCount}/${unlockedSquadCount()} đội đang rảnh)`,`<div class="section-note">Đội hình được quản lý tập trung tại trang <b>Quân đội → Bảng xếp đội hình</b>. Tại đây chỉ chọn đội nào sẽ đi.${hidden?` Còn <b>${hidden}</b> đội đang khóa, mở bằng nghiên cứu <b>Liên đội</b>.`:''}</div><div style="height:10px"></div><div class="compact-list squad-list">${squadRows}</div>`)}
      ${card('Hoạt động đang diễn ra',`${exploreQueue.length?`<div class="claim-list">${exploreQueue.map(q=>`<div class="claim-item"><div><b>${qLabel(q)}</b><div class="small muted">Đội ${q.squads.join(', ')} · ${q.done-S.hour} giờ còn lại · Sức mạnh ${fmt(q.power||0)}</div><div class="mini-progress"><span style="width:${queueProgressPct(q)}%"></span></div></div><div class="small"><b>${queueProgressPct(q)}%</b></div></div>`).join('')}</div>`:'<div class="muted">Chưa có đội nào đang đi khám phá.</div>'}${pendingClaims()?`<div style="height:10px"></div>${claimHtml(5)}`:''}`)}
    </div>
  </div>`;
}
function doExplore(){
  const c=exploreCost(); let total=0, arr=[];
  Object.keys(LAND).forEach(k=>{ const q=Math.max(0,parseInt($(`#exp_${k}`)?.value||0,10)); if(q){ arr.push([k,q]); total+=q; } });
  if(!total) return toast('Hãy nhập số mẫu muốn khám phá.');
  const pc=c.p*total, dc=c.d*total;
  if(S.resources.platinum<pc || S.draftees<dc) return toast('Không đủ Bạch kim hoặc lính dự bị.');
  S.resources.platinum-=pc; S.draftees-=dc; S.morale=Math.max(0,S.morale-Math.max(1,Math.floor((total+2)/3)));
  arr.forEach(([k,q])=>S.queue.push({type:'explore',key:k,amount:q,done:S.hour+12,earthBonus:activeBuff('earth_spirit')}));
  log(`Bắt đầu khám phá ${total} mẫu, chi ${fmt(pc)} Bạch kim và ${fmt(dc)} lính dự bị.`);
  save(true); render(); toast('Đội thám hiểm sẽ trở về sau 12 giờ.');
}
function renderMilitary(){
  ensureV5State();
  const disc=smithyDiscount(), cap=armyCapacity();
  const units=UNIT_LIST.filter(u=>u.branch===militaryTab);
  const training=S.queue.filter(q=>q.type==='train');
  const tierColors={1:'#9fb0bf',2:'#7fd4a8',3:'#77b5ff',4:'#e2c18a',5:'#ff8d7d'};
  const trainingHtml=training.length?training.map(q=>{const u=UNITS[q.key];const pct=queueProgressPct({start:q.start??Math.max(0,q.done-6),done:q.done});return `<div class="train-progress-item"><div class="progress-head"><div><b style="color:${ELEMENT_META[u.element].color}">${u.name}</b><div class="small muted">${fmt(q.amount)} quân · còn ${Math.max(0,q.done-S.hour)} giờ</div></div><b>${pct}%</b></div><div class="mini-progress"><span style="width:${pct}%"></span></div></div>`;}).join(''):'<div class="muted">Chưa có lệnh huấn luyện nào.</div>';
  const unlocked=unlockedSquadCount();
  const squads=visibleSquads();
  const squadHtml=squads.map((sq,idx)=>{
    const entries=Object.entries(sq.composition||{}).filter(([,q])=>Number(q)>0);
    const options=UNIT_LIST.filter(u=>availableUnitCount(u.id)>0).map(u=>`<option value="${u.id}">${u.name} · có thể dùng ${fmt(availableUnitCount(u.id))}</option>`).join('');
    return `<details class="squad-builder" ${idx===0?'open':''}><summary><div><b>${sq.name}</b><div class="small muted">${squadSummary(sq)}</div></div><div class="squad-score">${fmt(squadUnitCount(sq))} quân · Sức mạnh ${fmt(squadPower(sq))}</div></summary><div class="squad-builder-body">${entries.length?`<div class="formation-list">${entries.map(([id,q])=>{const u=UNITS[id];return `<div class="formation-line"><span style="color:${ELEMENT_META[u.element].color}">${u.name}</span><b>× ${fmt(q)}</b><button class="icon-remove" data-remove-squad-unit="${sq.id}|${id}" ${sq.status==='busy'?'disabled':''}>×</button></div>`;}).join('')}</div>`:'<div class="muted">Đội này chưa có quân.</div>'}<div class="formation-add"><select class="compact-input squad-unit-select" id="squad_unit_${sq.id}" ${sq.status==='busy'?'disabled':''}><option value="">Chọn quân available...</option>${options}</select><input class="compact-input narrow" id="squad_qty_${sq.id}" type="number" min="1" value="10" ${sq.status==='busy'?'disabled':''}><button class="btn" data-add-squad-unit="${sq.id}" ${sq.status==='busy'?'disabled':''}>Thêm</button></div>${sq.status==='busy'?`<div class="small warning">Đội đang bận: ${sq.target}. Không thể đổi đội hình.</div>`:''}</div></details>`;
  }).join('');
  const lockedLines=Array.from({length:5-unlocked}, (_,i)=>{ const no=unlocked+i+1; return `<div class="locked-squad-line">Đội ${no} đang khóa · ${teamUnlockHints()[no]||'Chưa mở'}</div>`; }).join('');
  return `<div class="grid military-main-grid">
    ${card('Huấn luyện quân',`<div class="tabs military-tabs">${Object.entries(BRANCH_META).map(([k,v])=>`<button class="btn ${militaryTab===k?'active':''}" data-military-tab="${k}"><canvas class="tab-icon" data-icon="${v.icon}" width="18" height="18"></canvas> ${v.name}</button>`).join('')}</div><div style="height:10px"></div><div class="section-note"><b>Phân tầng quân:</b> Bậc I là quân rẻ/cơ bản; Bậc V là quân tinh nhuệ, giá cao rõ rệt nhưng chỉ số mạnh hơn. Giá dưới đây đã tính giảm từ Lò rèn khoảng <b>${fmt(disc*100,1)}%</b>. <b>Tooltip chỉ hiện khi rê đúng vào tên quân</b>.</div><div class="element-legend">${Object.keys(ELEMENT_META).map(el=>`<span class="element-chip" style="color:${ELEMENT_META[el].color};border-color:${ELEMENT_META[el].color}55">${el}</span>`).join('')}</div><div class="compact-list military-list">${units.map(u=>{const cost=effectiveUnitCost(u,disc),tier=unitTier(u),tip=compactTooltip(u.name,[['Bậc',`<span style="color:${tierColors[tier]}">Bậc ${tierLabel(tier)}</span>`],['Hệ',`<span style="color:${ELEMENT_META[u.element].color}">${u.element}</span>`],['Vai trò',u.role],['Mô tả',u.desc],['Công / Thủ',`${u.off} / ${u.def}`],['Mạnh hơn',`<span style="color:${ELEMENT_META[u.strong].color}">${u.strong}</span>`],['Yếu hơn',`<span style="color:${ELEMENT_META[u.weak].color}">${u.weak}</span>`],['Giá 1 đơn vị',`${fmt(cost.p)} Bạch kim + ${fmt(cost.o)} Quặng`]]);return `<div class="compact-row"><div class="row-main"><div class="row-name hover-tip-target"><canvas class="unit-badge" data-branch="${u.branch}" data-element="${u.element}" width="28" height="28"></canvas><div><div class="unit-title-line"><b style="color:${ELEMENT_META[u.element].color}">${u.name}</b><span class="tier-badge" style="color:${tierColors[tier]};border-color:${tierColors[tier]}66">Bậc ${tierLabel(tier)}</span></div><div class="small muted"><span style="color:${ELEMENT_META[u.element].color}">Hệ ${u.element}</span> · Công ${u.off} / Thủ ${u.def} · ${u.role}</div></div>${tip}</div></div><div class="row-side"><div class="inline-info muted">Đang có: <b>${fmt(S.units[u.id])}</b></div><label class="sl-wrap">SL<input id="unit_${u.id}" class="compact-input narrow" data-kind="train" data-key="${u.id}" data-base-p="${cost.p}" data-base-o="${cost.o}" type="number" min="1" value="10"></label><div class="price-box" id="train_total_${u.id}">${fmt(cost.p*10)} Bạch kim + ${fmt(cost.o*10)} Quặng</div><button class="btn" data-train="${u.id}">Huấn luyện</button></div></div>`;}).join('')}</div>`)}
    <div class="military-side-stack">
      ${card('Sức mạnh hiện tại',(()=>{const p=combatPower();return `<div class="kpi-row"><div class="kpi"><div class="tag">Công tổng</div><div class="n">${fmt(p.off)}</div></div><div class="kpi"><div class="tag">Thủ tổng</div><div class="n">${fmt(p.def)}</div></div><div class="kpi"><div class="tag">Dự bị</div><div class="n">${fmt(S.draftees)}</div></div><div class="kpi"><div class="tag">Sức chứa</div><div class="n">${fmt(armyCount())}/${fmt(cap)}</div></div></div><div class="small muted" style="margin-top:8px">Liên đội đã mở: <b>${unlocked}/5</b>. Muốn mở thêm hãy nghiên cứu <b>Liên đội II-V</b> ở trang Nghiên cứu.</div>`;})())}
      <details class="right-accordion" open><summary><b>Tiến trình huấn luyện</b><span class="pill">${training.length} lệnh</span></summary><div class="right-accordion-body">${trainingHtml}</div></details>
      <details class="right-accordion" open><summary><b>Bảng xếp đội hình</b><span class="pill">${unlocked}/5 đội</span></summary><div class="right-accordion-body"><div class="section-note">Quân phải <b>huấn luyện xong</b> mới xuất hiện trong danh sách available. Một đơn vị quân chỉ được xếp vào <b>một đội</b> tại một thời điểm.</div><div class="squad-builder-list">${squadHtml}${lockedLines?`<div class="locked-squad-box">${lockedLines}</div>`:''}</div></div></details>
    </div>
  </div>`;
}
function doTrain(id){
  const q=Math.max(1,parseInt($(`#unit_${id}`)?.value||1,10)), u=UNITS[id], disc=smithyDiscount();
  const queued=S.queue.filter(x=>x.type==='train').reduce((a,x)=>a+x.amount,0);
  if(armyCount()+queued+q > armyCapacity()) return toast('Vượt sức chứa doanh trại.');
  if(S.draftees<q) return toast('Không đủ lính dự bị.');
  const cost=effectiveUnitCost(u,disc), p=cost.p*q, o=cost.o*q;
  if(S.resources.platinum<p || S.resources.ore<o) return toast('Không đủ Bạch kim hoặc Quặng.');
  S.resources.platinum-=p; S.resources.ore-=o; S.draftees-=q;
  const hours=Math.max(3,5+unitTier(u));
  S.queue.push({type:'train',key:id,amount:q,start:S.hour,done:S.hour+hours});
  log(`Huấn luyện ${q} ${u.name} (Bậc ${tierLabel(unitTier(u))}); hoàn tất sau ${hours} giờ.`);
  save(true); render(); toast(`Đã đưa ${u.name} vào hàng chờ ${hours} giờ.`);
}
function addSquadUnit(squadId){
  ensureV5State(); const sq=S.squads.find(s=>s.id===Number(squadId)); if(!sq||sq.status==='busy') return;
  const sel=$(`#squad_unit_${sq.id}`), inp=$(`#squad_qty_${sq.id}`); const id=sel?.value; const qty=Math.max(1,parseInt(inp?.value||1,10));
  if(!id||!UNITS[id]) return toast('Hãy chọn loại quân muốn xếp vào đội.');
  const avail=availableUnitCount(id); if(avail<=0)return toast(`${UNITS[id].name} đã được xếp hết vào đội hình.`); if(qty>avail) return toast(`Chỉ còn ${fmt(avail)} ${UNITS[id].name} chưa được xếp đội.`);
  sq.composition[id]=Number(sq.composition[id]||0)+qty; save(true); render(); toast(`Đã thêm ${qty} ${UNITS[id].name} vào ${sq.name}.`);
}
function removeSquadUnit(payload){
  const [sid,id]=String(payload).split('|'); const sq=S.squads.find(s=>s.id===Number(sid)); if(!sq||sq.status==='busy') return;
  delete sq.composition[id]; save(true); render();
}
function renderResearch(){
  const doneCount=S.techs.length;
  const tiers=[1,2,3,4,5];
  const body=tiers.map(tier=>{
    const items=Object.entries(TECHS).filter(([,t])=>t.tier===tier);
    return `<details class="accordion" ${tier<=2?'open':''}><summary><div><b>Cấp ${tier}</b><div class="small muted">${tier===1?'Nền tảng phát triển':tier===2?'Mở rộng kinh tế & khám phá':tier===3?'Quân sự & phòng thủ':tier===4?'Liên đội & hạ tầng cao cấp':'Nội dung cuối'}</div></div><span class="pill">${items.length} công nghệ</span></summary><div class="compact-list">${items.map(([k,t])=>{const done=techDone(k), unlocked=techUnlocked(k); const reqNames=(t.req||[]).map(id=>TECHS[id]?.name||id).join(', ')||'Không có'; const tip=compactTooltip(t.name,[['Nhóm',t.category],['Hiệu ứng',t.desc],['Chi phí',`${fmt(t.cost)} điểm nghiên cứu`],['Yêu cầu',reqNames],['Trạng thái',done?'Đã nghiên cứu':unlocked?'Có thể nghiên cứu':'Chưa mở']]); return `<div class="compact-row ${!done&&!unlocked?'locked-row':''}"><div class="row-main"><div class="row-name hover-tip-target"><canvas class="unit-badge" data-icon="building" width="28" height="28"></canvas><div><div class="unit-title-line"><b>${t.name}</b><span class="tier-badge" style="color:${['','#7fd4a8','#77b5ff','#e2c18a','#ffb37f','#ff8d7d'][tier]};border-color:${['','#7fd4a855','#77b5ff55','#e2c18a55','#ffb37f55','#ff8d7d55'][tier]}">Cấp ${tier}</span></div><div class="small muted">${t.category} · ${t.desc}</div></div>${tip}</div></div><div class="row-side"><div class="price-box">${fmt(t.cost)} điểm</div>${done?'<span class="pill good">Đã nghiên cứu</span>':unlocked?`<button class="btn primary" data-tech="${k}">Nghiên cứu</button>`:`<span class="pill">Chưa mở</span>`}</div></div>`;}).join('')}</div></details>`;
  }).join('');
  return `<div class="grid two">${card('Công nghệ',`<div class="section-note"><b>Điểm nghiên cứu hiện có:</b> ${fmt(S.resources.research)}. Điểm này sinh ra từ <b>Học viện</b> xây tại <b>Hang động</b>. Nếu muốn tăng nhanh, hãy mở đất Hang động rồi xây thêm Học viện. Tooltip chỉ hiện khi rê đúng vào <b>tên công nghệ</b>.</div><div style="height:10px"></div><div class="section-note"><b>Mở khóa nội dung:</b> hiện đã nghiên cứu <b>${doneCount}/${Object.keys(TECHS).length}</b> công nghệ. Các công nghệ <b>Liên đội II-V</b> sẽ mở thêm đội hình; <b>Hầm quân lương I-II</b> giúp giảm mất tài nguyên khi bị AI cướp phá.</div><div style="height:12px"></div><div class="accordion-stack">${body}</div>`)}${card('Hiệu quả Học viện',`<div class="metric">+${fmt(production().research,1)}</div><div class="submetric">Điểm nghiên cứu mỗi giờ</div><div class="stat-line"><span>Học viện</span><b>${fmt(S.buildings.school)}</b></div><div class="stat-line"><span>Công nghệ đã mở</span><b>${doneCount}/${Object.keys(TECHS).length}</b></div><div class="stat-line"><span>Đội đã mở</span><b>${unlockedSquadCount()}/5</b></div><div class="stat-line"><span>Bảo vệ khỏi cướp phá</span><b>${fmt(storageProtection()*100)}%</b></div><div class="section-note" style="margin-top:10px"><b>Cách lấy điểm nghiên cứu:</b> xây <b>Học viện</b> tại <b>Hang động</b>. Mỗi giờ game sẽ cộng điểm tự động. Công nghệ <b>Phương pháp học viện</b> còn tăng thêm tốc độ này.</div>`)}</div>`;
}
function doTech(k){ const t=TECHS[k]; if(!t) return; if(techDone(k)) return; if(!techUnlocked(k)) return toast('Công nghệ này chưa đủ điều kiện mở.'); if(S.resources.research<t.cost) return toast('Không đủ điểm nghiên cứu.'); S.resources.research-=t.cost; S.techs.push(k); log(`Hoàn tất nghiên cứu: ${t.name}.`); if(k.startsWith('team_command_')) log(`Mở khóa thêm đội hình: hiện đã có ${unlockedSquadCount()}/5 đội.`); if(k.startsWith('granary_bunker')) log(`Hầm quân lương hoạt động: bảo vệ ${fmt(storageProtection()*100)}% tài nguyên có thể bị cướp.`); save(true); render(); toast('Đã mở công nghệ mới.'); }
function renderMagic(){
  const spells=Object.entries(SPELLS).filter(([,s])=>s.element===magicElementTab);
  return `<div class="grid two">
    ${card('Phép thuật',`<div class="tabs magic-tabs">${Object.keys(ELEMENT_META).map(el=>`<button class="btn ${magicElementTab===el?'active':''}" data-magic-tab="${el}" style="border-color:${magicElementTab===el?ELEMENT_META[el].color:''};color:${ELEMENT_META[el].color}">Hệ ${el}</button>`).join('')}</div><div style="height:10px"></div><div class="section-note">Mana hiện có: <b>${fmt(S.resources.mana)}</b>. Mỗi phép có <b>thời gian hiệu lực</b> và <b>hồi chiêu</b> riêng. Khi đối đầu phép khác hệ, hiệu ứng được nhân theo vòng <b>Kim → Mộc → Thổ → Thủy → Hỏa → Kim</b>: khắc hệ ≈ <b>125%</b> hiệu lực, bị khắc còn ≈ <b>50%</b>.</div><div class="compact-list magic-list">${spells.map(([k,s])=>{
      const cd=cooldownRemaining(s.key), active=buffRemaining(s.key);
      const tip=compactTooltip(s.name,[
        ['Hệ',s.element],['Hiệu ứng',s.desc],['Mana',fmt(s.mana)],['Thời gian hiệu lực',`${s.hours} giờ`],['Hồi chiêu',`${s.cooldown} giờ`],['Khắc chế',`Hệ ${ELEMENT_META[s.element].strong}`],['Bị khắc',`Hệ ${ELEMENT_META[s.element].weak}`]
      ]);
      let status='Sẵn sàng';
      if(active>0) status=`Đang hiệu lực ${active}h`;
      else if(cd>0) status=`Hồi chiêu ${cd}h`;
      const disabled=cd>0?'disabled':'';
      return `<div class="compact-row hover-tip-row"><div class="row-main"><div class="row-name"><canvas class="unit-badge" data-icon="mana" data-element="${s.element}" width="28" height="28"></canvas><div><b style="color:${ELEMENT_META[s.element].color}">${s.name}</b><div class="small muted">${s.desc}</div></div></div>${tip}</div><div class="row-side"><div class="inline-info"><span class="pill ${active>0?'good':cd>0?'warn':''}">${status}</span></div><div class="price-box">${fmt(s.mana)} Mana · ${s.hours}h · CD ${s.cooldown}h</div><button class="btn ${active===0&&cd===0?'primary':''}" data-spell="${k}" ${disabled}>Thi triển</button></div></div>`;
    }).join('')}</div>`)}
    ${card('Phép đang hoạt động',(()=>{ const active=Object.values(SPELLS).filter(s=>activeBuff(s.key)); return active.length?`<div class="news-list">${active.map(s=>`<div class="news-item"><div class="t" style="color:${ELEMENT_META[s.element].color}">Hệ ${s.element} · còn ${buffRemaining(s.key)} giờ</div><b>${s.name}</b><div class="small muted">${s.desc}</div></div>`).join('')}</div>`:'<div class="muted">Chưa có phép nào đang hoạt động.</div>'; })()+`<div style="height:12px"></div><div class="section-note"><b>Lưu ý chiến thuật:</b> có thể duy trì nhiều buff cùng lúc nếu đủ Mana và hồi chiêu. Khi vào Chiến tranh, phép chiến đấu mạnh nhất đang hoạt động sẽ được dùng để xét tương khắc phép với đối thủ.</div>`)}
  </div>`;
}
function doSpell(k){
  const s=SPELLS[k];
  if(!s) return;
  const cd=cooldownRemaining(s.key);
  if(cd>0) return toast(`${s.name} còn hồi chiêu ${cd} giờ.`);
  if(S.resources.mana<s.mana) return toast('Không đủ Mana.');
  S.resources.mana-=s.mana;
  S.buffs[s.key]=S.hour+s.hours;
  S.spellCooldowns[s.key]=S.hour+s.cooldown;
  log(`Thi triển ${s.name} (Hệ ${s.element}); hiệu lực ${s.hours} giờ, hồi chiêu ${s.cooldown} giờ.`);
  save(true); render(); toast(`${s.name} đã có hiệu lực.`);
}
function missionUnlocked(index){ return index===0 || S.completedMissions.includes(WAR_MISSIONS[index-1].id); }
function battleRisk(myOff,enemyDef){ return myOff>enemyDef*1.18?['Có lợi','good']:myOff>enemyDef*.92?['Cân kèo','warn']:['Nguy hiểm','bad']; }
function warTargetTooltip(r){
  const clash=activeCombatSpellAgainst(r.spellElement);
  return compactTooltip(r.name,[
    ['Đất',`${fmt(r.land)} mẫu`],['Kho bạc',`${fmt(r.wealth)} Bạch kim`],['Lương thực',fmt(r.food||0)],['Hệ chủ lực',r.element],['Nhánh chủ lực',BRANCH_META[r.branch]?.name||r.branch],['Pháp hệ đối thủ',r.spellElement],['Phòng thủ gốc',fmt(r.def)],['Phòng thủ hiệu dụng',fmt(enemyEffectiveDefense(r))],['Đè phép',clash?`${clash.spell.name}: ${clash.status} ×${clash.scale}`:'Chưa có phép chiến đấu đang hoạt động']
  ]);
}
function renderWar(){
  const completed=S.completedMissions.length;
  return `<div class="tabs war-tabs"><button class="btn ${warTab==='campaign'?'active':''}" data-war-tab="campaign">Chiến dịch (${completed}/${WAR_MISSIONS.length})</button><button class="btn ${warTab==='rivals'?'active':''}" data-war-tab="rivals">Lãnh địa đối địch (${S.rivals.length})</button></div><div style="height:10px"></div><div class="section-note">Chiến tranh bản v4 không còn chỉ có vài mục tiêu: có <b>${WAR_MISSIONS.length} nhiệm vụ chiến dịch</b> mở tuần tự + <b>${S.rivals.length} lãnh địa</b> để đánh tự do. Phép đang hoạt động và tương khắc Ngũ hành ảnh hưởng trực tiếp sức mạnh/tổn thất.</div><div style="height:12px"></div>${warTab==='campaign'?renderCampaignWar():renderRivalWar()}`;
}
function renderCampaignWar(){
  return `<div class="compact-list war-list">${WAR_MISSIONS.map((m,i)=>{
    const unlocked=missionUnlocked(i), done=S.completedMissions.includes(m.id);
    const target={...m,spellElement:m.element};
    const me=combatPower(m.element,m.branch), enemyDef=m.def;
    const [risk,cls]=battleRisk(me.off,enemyDef);
    const tip=compactTooltip(m.name,[['Nhiệm vụ',m.desc],['Hệ đối thủ',m.element],['Nhánh chủ lực',BRANCH_META[m.branch].name],['Phòng thủ',fmt(enemyDef)],['Thưởng Bạch kim',fmt(m.rewardP)],['Thưởng đất',`${m.rewardLand} mẫu`],['Thưởng Mana',fmt(m.rewardMana)],['Tương khắc phép',activeCombatSpellAgainst(m.element)?`${activeCombatSpellAgainst(m.element).status} ×${activeCombatSpellAgainst(m.element).scale}`:'Chưa có phép chiến đấu']]);
    return `<div class="compact-row hover-tip-row ${!unlocked?'locked-row':''}"><div class="row-main"><div class="row-name"><canvas class="unit-badge" data-branch="${m.branch}" data-element="${m.element}" width="28" height="28"></canvas><div><b style="color:${ELEMENT_META[m.element].color}">${i+1}. ${m.name}</b><div class="small muted">${m.desc}</div></div></div>${tip}</div><div class="row-side"><div class="inline-info">Thủ: <b>${fmt(enemyDef)}</b></div><span class="pill ${cls}">${done?'Đã hoàn tất':unlocked?risk:'Chưa mở'}</span><div class="price-box">+${fmt(m.rewardP)} Bạch kim · +${m.rewardLand} đất · +${fmt(m.rewardMana)} Mana</div><button class="btn ${unlocked&&!done?'primary':''}" data-mission="${m.id}" ${!unlocked||done?'disabled':''}>${done?'Đã thắng':'Xuất quân'}</button></div></div>`;
  }).join('')}</div>`;
}
function renderRivalWar(){
  return `<div class="compact-list war-list">${S.rivals.map((r,i)=>{
    const me=combatPower(r.spellElement,r.branch), ed=enemyEffectiveDefense(r), [risk,cls]=battleRisk(me.off,ed);
    return `<div class="compact-row hover-tip-row"><div class="row-main"><div class="row-name"><canvas class="unit-badge" data-branch="${r.branch}" data-element="${r.element}" width="28" height="28"></canvas><div><b style="color:${ELEMENT_META[r.element].color}">${r.name}</b><div class="small muted">${fmt(r.land)} mẫu · ${BRANCH_META[r.branch].name} · Pháp hệ ${r.spellElement}</div></div></div>${warTargetTooltip(r)}</div><div class="row-side"><div class="inline-info">Thủ hiệu dụng: <b>${fmt(ed)}</b></div><span class="pill ${cls}">${risk}</span><div class="price-box">Kho bạc ~${fmt(r.wealth)}</div><button class="btn ${risk==='Có lợi'?'primary':''}" data-attack="${i}">Tấn công</button></div></div>`;
  }).join('')}</div>`;
}
function applyVictoryRewards(target,loot,baseLand){
  const landGain=Math.max(1,Math.round(baseLand*(activeBuff('earth_spirit')?1.20:1)));
  S.resources.platinum+=loot; S.land.plain+=landGain; S.prestige+=Math.round(landGain*1.5);
  return landGain;
}
function doAttack(i){
  const r=S.rivals[i];
  if(armyCount()<50) return toast('Cần ít nhất 50 quân chính quy để tấn công.');
  if(S.morale<25) return toast('Sĩ khí quá thấp để xuất quân.');
  const me=combatPower(r.spellElement,r.branch), clash=activeCombatSpellAgainst(r.spellElement);
  const roll=.90+Math.random()*.20, attack=me.off*roll, def=enemyEffectiveDefense(r)*(.95+Math.random()*.10);
  if(attack>def){
    const loot=Math.min(r.wealth,Math.round(15000+r.wealth*.10));
    const baseLand=Math.max(3,Math.min(35,Math.round(r.land*.025)));
    const landGain=applyVictoryRewards(r,loot,baseLand);
    r.land=Math.max(200,r.land-landGain); r.wealth=Math.max(0,r.wealth-loot);
    if(activeBuff('burn_food')){ const burn=Math.round((r.food||0)*.05); r.food=Math.max(0,(r.food||0)-burn); log(`Thiêu Rụi Kho Lương đốt thêm ${fmt(burn)} lương thực của ${r.name}.`); }
    const loss=(.04+Math.random()*.05)*lossMultiplier(); loseArmy(loss); S.morale=Math.max(0,S.morale-4);
    log(`Chiến thắng trước ${r.name}: +${fmt(loot)} Bạch kim, +${landGain} mẫu Đồng bằng, tổn thất khoảng ${fmt(loss*100,1)}% quân.${clash?` Đè phép: ${clash.status} ×${clash.scale}.`:''}`);
    toast('Chiến thắng. Xem Tin tức để biết chiến lợi phẩm.');
  }else{
    const loss=(.11+Math.random()*.10)*lossMultiplier(); loseArmy(loss); S.morale=Math.max(0,S.morale-12); S.prestige=Math.max(0,S.prestige-10);
    log(`Thất bại trước ${r.name}: mất khoảng ${fmt(loss*100,1)}% quân, sĩ khí giảm.${clash?` Đè phép: ${clash.status} ×${clash.scale}.`:''}`);
    toast('Thất bại. Cần củng cố quân lực hoặc dùng phép phù hợp.');
  }
  save(true); render();
}
function doMission(id){
  const idx=WAR_MISSIONS.findIndex(m=>m.id===id), m=WAR_MISSIONS[idx];
  if(!m || !missionUnlocked(idx) || S.completedMissions.includes(id)) return;
  if(armyCount()<50) return toast('Cần ít nhất 50 quân chính quy để xuất chiến.');
  if(S.morale<25) return toast('Sĩ khí quá thấp để xuất quân.');
  const me=combatPower(m.element,m.branch), clash=activeCombatSpellAgainst(m.element);
  const attack=me.off*(.92+Math.random()*.18), defense=m.def*(.96+Math.random()*.08);
  if(attack>defense){
    const landGain=Math.max(1,Math.round(m.rewardLand*(activeBuff('earth_spirit')?1.20:1)));
    S.resources.platinum+=m.rewardP; S.resources.mana+=m.rewardMana; S.land.plain+=landGain; S.prestige+=20+idx*4;
    const loss=(.035+idx*.004+Math.random()*.04)*lossMultiplier(); loseArmy(Math.min(.22,loss)); S.morale=Math.max(0,S.morale-3);
    S.completedMissions.push(id);
    log(`Hoàn tất nhiệm vụ “${m.name}”: +${fmt(m.rewardP)} Bạch kim, +${landGain} đất, +${fmt(m.rewardMana)} Mana; tổn thất khoảng ${fmt(Math.min(.22,loss)*100,1)}%.${clash?` Đè phép: ${clash.status} ×${clash.scale}.`:''}`);
    toast(`Hoàn tất: ${m.name}`);
  }else{
    const loss=(.09+idx*.004+Math.random()*.08)*lossMultiplier(); loseArmy(Math.min(.28,loss)); S.morale=Math.max(0,S.morale-10);
    log(`Nhiệm vụ “${m.name}” thất bại; tổn thất khoảng ${fmt(Math.min(.28,loss)*100,1)}%. Có thể thử lại sau khi tăng quân lực/phép.`);
    toast('Nhiệm vụ thất bại. Có thể thử lại.');
  }
  save(true); render();
}
function renderRank(){
  const p=combatPower();
  const all=[...S.rivals.map(r=>({name:r.name,land:r.land,power:r.off+r.def,score:Math.round(r.land*10+(r.off+r.def)/10)})), {name:S.realmName+' (Bạn)',land:totalLand(),power:p.off+p.def,score:score(),me:true}].sort((a,b)=>b.score-a.score);
  return `${card('Bảng xếp hạng',`<div class="table-wrap"><table class="table"><thead><tr><th>#</th><th>Lãnh địa</th><th class="right">Đất</th><th class="right">Quân lực tổng</th><th class="right">Điểm</th></tr></thead><tbody>${all.map((x,i)=>`<tr ${x.me?'style="background:#1c3027"':''}><td>${i+1}</td><td><b>${x.name}</b></td><td class="right">${fmt(x.land)}</td><td class="right">${fmt(x.power)}</td><td class="right"><b>${fmt(x.score)}</b></td></tr>`).join('')}</tbody></table></div>`)}`;
}

function drawSymbol(ctx, icon, w, h, color1='#9ad8bb', color2='#214032'){
  ctx.clearRect(0,0,w,h);
  ctx.lineWidth=2.2; ctx.lineCap='round'; ctx.lineJoin='round';
  ctx.fillStyle='rgba(18,31,42,.9)'; ctx.strokeStyle='rgba(255,255,255,.08)';
  roundRect(ctx,1,1,w-2,h-2,10,true,true);
  ctx.strokeStyle=color1; ctx.fillStyle=color1;
  const m = 4;
  if(icon==='platinum'){ ctx.beginPath(); ctx.arc(w/2,h/2,7,0,Math.PI*2); ctx.stroke(); ctx.beginPath(); ctx.moveTo(w/2,h/2-4); ctx.lineTo(w/2,h/2+4); ctx.moveTo(w/2-3,h/2); ctx.lineTo(w/2+3,h/2); ctx.stroke(); }
  else if(icon==='food'){ ctx.beginPath(); ctx.moveTo(14,6); ctx.lineTo(14,22); ctx.stroke(); [[10,10],[18,10],[10,14],[18,14],[10,18],[18,18]].forEach(([x,y])=>{ctx.beginPath();ctx.moveTo(14,y);ctx.lineTo(x,y-2);ctx.stroke();}); }
  else if(icon==='lumber'){ ctx.strokeRect(7,8,14,11); ctx.beginPath(); ctx.moveTo(7,12); ctx.lineTo(21,12); ctx.moveTo(11,8); ctx.lineTo(11,19); ctx.stroke(); }
  else if(icon==='ore'){ ctx.beginPath(); ctx.moveTo(14,5); ctx.lineTo(22,12); ctx.lineTo(18,22); ctx.lineTo(8,22); ctx.lineTo(6,12); ctx.closePath(); ctx.stroke(); }
  else if(icon==='mana'){ ctx.beginPath(); ctx.moveTo(14,5); ctx.bezierCurveTo(20,10,20,16,14,22); ctx.bezierCurveTo(8,16,8,10,14,5); ctx.stroke(); }
  else if(icon==='peasants'){ ctx.beginPath(); ctx.arc(14,9,4,0,Math.PI*2); ctx.stroke(); ctx.beginPath(); ctx.moveTo(14,13); ctx.lineTo(14,22); ctx.moveTo(9,17); ctx.lineTo(19,17); ctx.moveTo(11,22); ctx.lineTo(14,18); ctx.lineTo(17,22); ctx.stroke(); }
  else if(icon==='draftees'){ ctx.beginPath(); ctx.moveTo(14,5); ctx.lineTo(22,9); ctx.lineTo(14,13); ctx.lineTo(6,9); ctx.closePath(); ctx.stroke(); ctx.beginPath(); ctx.moveTo(14,13); ctx.lineTo(14,22); ctx.stroke(); }
  else if(icon==='land'){ ctx.beginPath(); ctx.moveTo(6,18); ctx.lineTo(10,10); ctx.lineTo(15,14); ctx.lineTo(21,8); ctx.lineTo(22,18); ctx.closePath(); ctx.stroke(); }
  else if(icon==='infantry'){ ctx.beginPath(); ctx.moveTo(8,20); ctx.lineTo(20,8); ctx.moveTo(14,10); ctx.lineTo(22,18); ctx.stroke(); }
  else if(icon==='cavalry'){ ctx.beginPath(); ctx.moveTo(7,18); ctx.quadraticCurveTo(13,6,21,14); ctx.moveTo(10,18); ctx.lineTo(8,22); ctx.moveTo(18,17); ctx.lineTo(20,22); ctx.stroke(); }
  else if(icon==='navy'){ ctx.beginPath(); ctx.moveTo(7,17); ctx.lineTo(21,17); ctx.lineTo(17,21); ctx.lineTo(11,21); ctx.closePath(); ctx.stroke(); ctx.beginPath(); ctx.moveTo(14,8); ctx.lineTo(14,17); ctx.lineTo(20,13); ctx.closePath(); ctx.stroke(); }
  else if(icon==='air'){ ctx.beginPath(); ctx.moveTo(6,16); ctx.quadraticCurveTo(14,8,22,16); ctx.moveTo(14,8); ctx.lineTo(14,21); ctx.stroke(); }
  else if(icon==='building'){ ctx.strokeRect(7,10,14,11); ctx.beginPath(); ctx.moveTo(6,10); ctx.lineTo(14,5); ctx.lineTo(22,10); ctx.stroke(); }
}
function roundRect(ctx,x,y,w,h,r,fill,stroke){ ctx.beginPath(); ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r); ctx.arcTo(x+w,y+h,x,y+h,r); ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); if(fill) ctx.fill(); if(stroke) ctx.stroke(); }
function drawAllCanvases(){
  $$('.mini-canvas').forEach(cv => drawSymbol(cv.getContext('2d'), cv.dataset.icon, cv.width, cv.height));
  $$('.tab-icon').forEach(cv => drawSymbol(cv.getContext('2d'), cv.dataset.icon, cv.width, cv.height));
  $$('.unit-badge').forEach(cv => {
    const ctx = cv.getContext('2d');
    const element = cv.dataset.element;
    const branch = cv.dataset.branch || cv.dataset.icon;
    const color = element ? ELEMENT_META[element].color : '#93dbc0';
    drawSymbol(ctx, branch || 'building', cv.width, cv.height, color);
  });
}

function initNav(){ const n=$('#nav'); n.innerHTML=NAV.map(([k,v])=>`<button data-page="${k}">${v}</button>`).join(''); n.onclick=e=>{ const b=e.target.closest('[data-page]'); if(!b) return; page=b.dataset.page; render(); }; }
function initCompactTotals(){
  $$('input[data-kind="build"]').forEach(inp=>{
    const update=()=>{ const q=Math.max(1,parseInt(inp.value||1,10)); inp.value=q; const p=Number(inp.dataset.baseP||0), l=Number(inp.dataset.baseL||0); const el=$(`#build_total_${inp.dataset.key}`); if(el) el.textContent=`${fmt(p*q)} Bạch kim + ${fmt(l*q)} Gỗ`; };
    inp.oninput=update; update();
  });
  $$('input[data-kind="train"]').forEach(inp=>{
    const update=()=>{ const q=Math.max(1,parseInt(inp.value||1,10)); inp.value=q; const p=Number(inp.dataset.baseP||0), o=Number(inp.dataset.baseO||0); const el=$(`#train_total_${inp.dataset.key}`); if(el) el.textContent=`${fmt(p*q)} Bạch kim + ${fmt(o*q)} Quặng`; };
    inp.oninput=update; update();
  });
}
function bindGlobalTooltips(){
  let floating=$('#floatingTooltip');
  if(!floating){ floating=document.createElement('div'); floating.id='floatingTooltip'; floating.className='floating-tooltip'; document.body.appendChild(floating); }
  let hideTimer=null;
  const hide=()=>{ clearTimeout(hideTimer); floating.classList.remove('show'); };
  const scheduleHide=()=>{ clearTimeout(hideTimer); hideTimer=setTimeout(hide,180); };
  const show=(row)=>{
    clearTimeout(hideTimer);
    const source=row.querySelector('.tooltip-panel');
    if(!source) return;
    floating.innerHTML=source.innerHTML;
    floating.classList.add('show');
    const rr=row.getBoundingClientRect();
    const tw=Math.min(430,window.innerWidth-24);
    floating.style.width=tw+'px';
    const left=Math.min(Math.max(12,rr.left),window.innerWidth-tw-12);
    floating.style.left=left+'px';
    floating.style.top='12px';
    const th=Math.min(floating.scrollHeight,window.innerHeight-24);
    let top=rr.bottom+8;
    if(top+th>window.innerHeight-12) top=Math.max(12,rr.top-th-8);
    floating.style.top=top+'px';
    window.addEventListener('scroll',hide,{passive:true,once:true});
  };
  floating.onmouseenter=()=>clearTimeout(hideTimer);
  floating.onmouseleave=scheduleHide;
  $$('.hover-tip-row, .hover-tip-target').forEach(row=>{
    const trigger=row.classList.contains('hover-tip-target')?(row.querySelector('b')||row):row;
    trigger.tabIndex=0;
    trigger.onmouseenter=()=>show(row);
    trigger.onmouseleave=scheduleHide;
    trigger.onfocusin=()=>show(row);
    trigger.onfocusout=scheduleHide;
    trigger.addEventListener('click',e=>{ if(e.target.closest('button,input,label')) return; show(row); });
  });
}
function bindDynamic(){
  $$('[data-build]').forEach(b=>b.onclick=()=>doBuild(b.dataset.build));
  $$('[data-train]').forEach(b=>b.onclick=()=>doTrain(b.dataset.train));
  $$('[data-tech]').forEach(b=>b.onclick=()=>doTech(b.dataset.tech));
  $$('[data-spell]').forEach(b=>b.onclick=()=>doSpell(b.dataset.spell));
  $$('[data-attack]').forEach(b=>b.onclick=()=>doAttack(+b.dataset.attack));
  $$('[data-mission]').forEach(b=>b.onclick=()=>doMission(b.dataset.mission));
  $$('[data-military-tab]').forEach(b=>b.onclick=()=>{ militaryTab=b.dataset.militaryTab; render(); });
  $$('[data-magic-tab]').forEach(b=>b.onclick=()=>{ magicElementTab=b.dataset.magicTab; render(); });
  $$('[data-war-tab]').forEach(b=>b.onclick=()=>{ warTab=b.dataset.warTab; render(); });
  const e=$('#exploreBtn'); if(e) e.onclick=doExplore;
  initCompactTotals();
  bindGlobalTooltips();
}
function render(){
  $$('#nav [data-page]').forEach(b=>b.classList.toggle('active',b.dataset.page===page));
  $('#pageTitle').textContent=(NAV.find(x=>x[0]===page)||[])[1]||'Tổng quan';
  $('#realmName').textContent=S.realmName; resourceBar();
  const views={overview:renderOverview, build:renderBuild, explore:renderExplore, military:renderMilitary, research:renderResearch, magic:renderMagic, war:renderWar, rank:renderRank};
  $('#content').innerHTML=(views[page]||renderOverview)();
  bindDynamic();
  drawAllCanvases();
}


function sanitizeSquadAssignments(){
  if(!Array.isArray(S.squads)||!S.units)return;
  const remaining={};Object.entries(S.units).forEach(([id,q])=>remaining[id]=Math.max(0,Math.floor(Number(q)||0)));
  S.squads.slice().sort((a,b)=>Number(a.id)-Number(b.id)).forEach(sq=>{const clean={};Object.entries(sq.composition||{}).forEach(([id,raw])=>{if(!UNITS[id])return;const wanted=Math.max(0,Math.floor(Number(raw)||0)),allowed=Math.min(wanted,remaining[id]||0);if(allowed>0){clean[id]=allowed;remaining[id]=Math.max(0,(remaining[id]||0)-allowed)}});sq.composition=clean;});
}
function ensureV5State(){
  if(!Array.isArray(S.claims)) S.claims=[];
  if(!Array.isArray(S.guides)) S.guides=[];
  if(!Array.isArray(S.squads) || S.squads.length!==5){
    S.squads=[1,2,3,4,5].map(i=>({id:i,name:`Đội ${i}`,composition:{},status:'idle',busyUntil:0,target:''}));
  } else {
    S.squads=S.squads.map((sq,i)=>({
      id:i+1,name:sq.name||`Đội ${i+1}`,
      composition:(sq.composition && typeof sq.composition==='object')?sq.composition:{},
      status:(Number(sq.busyUntil)||0)>S.hour?'busy':'idle',busyUntil:Number(sq.busyUntil)||0,target:sq.target||''
    }));
  }
  sanitizeSquadAssignments();
}
function terrainBuildings(k){ return Object.entries(BUILDINGS).filter(([,b])=>b.land===k).map(([,b])=>b.name); }
function branchUnitCount(branch){ return UNIT_LIST.filter(u=>u.branch===branch).reduce((a,u)=>a+(S.units[u.id]||0),0); }
function branchPower(branch){ let off=0,def=0; UNIT_LIST.filter(u=>u.branch===branch).forEach(u=>{const q=S.units[u.id]||0;off+=q*u.off;def+=q*u.def;}); return off+def; }
function unitTier(u){
  const peers=UNIT_LIST.filter(x=>x.branch===u.branch).slice().sort((a,b)=>((a.off*1.15+a.def)-(b.off*1.15+b.def)));
  const idx=Math.max(0,peers.findIndex(x=>x.id===u.id));
  return Math.min(5,1+Math.floor(idx*5/Math.max(1,peers.length)));
}
function tierLabel(t){ return ['','I','II','III','IV','V'][t]||String(t); }
function effectiveUnitCost(u,disc=smithyDiscount()){
  const mult=[0,1,1.35,1.85,2.55,3.5][unitTier(u)];
  return {p:Math.ceil(u.costP*mult*(1-disc)),o:Math.ceil(u.costO*mult*(1-disc))};
}
function assignedUnitCount(unitId,excludeSquadId=null){
  ensureV5State();
  return S.squads.filter(s=>s.id!==excludeSquadId).reduce((a,s)=>a+Number(s.composition?.[unitId]||0),0);
}
function availableUnitCount(unitId,excludeSquadId=null){ return Math.max(0,(S.units[unitId]||0)-assignedUnitCount(unitId,excludeSquadId)); }
function squadUnitCount(sq){ return Object.values(sq.composition||{}).reduce((a,b)=>a+Number(b||0),0); }
function squadPower(sq){
  let power=0;
  Object.entries(sq.composition||{}).forEach(([id,qty])=>{const u=UNITS[id];if(u)power+=Number(qty||0)*(u.off+u.def);});
  return Math.round(power);
}
function squadSummary(sq){
  const entries=Object.entries(sq.composition||{}).filter(([,q])=>Number(q)>0);
  if(!entries.length) return 'Chưa xếp quân';
  return entries.slice(0,3).map(([id,q])=>`${UNITS[id]?.name||id} ×${fmt(q)}`).join(' · ')+(entries.length>3?` · +${entries.length-3} loại`:``);
}
function ensureV7Logic(){
  ensureV5State();
  if(S.logicV8Fixed) return;
  let cancelled=0;
  const keep=[];
  for(const q of S.queue){
    if(q.type==='expedition'){
      const squads=(q.squads||[]).map(id=>S.squads.find(s=>s.id===id)).filter(Boolean);
      const hasRealArmy=squads.some(s=>squadUnitCount(s)>0 && squadPower(s)>0);
      if(!hasRealArmy){ squads.forEach(s=>{s.status='idle';s.busyUntil=0;s.target='';}); cancelled++; continue; }
    }
    keep.push(q);
  }
  S.queue=keep;
  if(cancelled) log(`Đã hủy ${cancelled} nhiệm vụ cũ không có đội hình quân thật.`);
  S.logicV8Fixed=true;
  save(true);
}
function queueProgressPct(q){ return Math.max(0,Math.min(100,Math.round(((S.hour-q.start)/Math.max(1,q.done-q.start))*100))); }
function addClaim(claim){ if(!Array.isArray(S.claims)) S.claims=[]; S.claims.unshift({id:'cl_'+Date.now()+'_'+Math.random().toString(36).slice(2,7), ...claim}); }
function pendingClaims(){ return (S.claims||[]).length; }
function hintItems(){
  const hints=[];
  if(pendingClaims()) hints.push({page:'overview',text:`Có ${pendingClaims()} phần thưởng chờ nhận.`});
  if(S.queue.some(q=>q.type==='expedition')) hints.push({page:'explore',text:'Có đội khám phá đang thực hiện nhiệm vụ.'});
  if(totalBarren()<15) hints.push({page:'explore',text:'Đất trống thấp, nên mở rộng thêm diện tích.'});
  if(armyCount()<200) hints.push({page:'military',text:'Quân số còn thấp, nên huấn luyện thêm quân.'});
  return hints;
}
function doClaim(id){
  const idx=(S.claims||[]).findIndex(x=>x.id===id); if(idx<0) return;
  const c=S.claims[idx];
  if(c.rewards?.platinum) S.resources.platinum += c.rewards.platinum;
  if(c.rewards?.food) S.resources.food += c.rewards.food;
  if(c.rewards?.lumber) S.resources.lumber += c.rewards.lumber;
  if(c.rewards?.ore) S.resources.ore += c.rewards.ore;
  if(c.rewards?.mana) S.resources.mana += c.rewards.mana;
  if(c.rewards?.landKey && c.rewards?.landGain) S.land[c.rewards.landKey] += c.rewards.landGain;
  if(c.rewards?.prestige) S.prestige += c.rewards.prestige;
  S.claims.splice(idx,1);
  log(`Đã nhận thưởng: ${c.title}.`);
  save(true); render(); toast(`Đã nhận: ${c.title}`);
}
function claimHtml(limit=3){
  if(!pendingClaims()) return '<div class="muted">Chưa có phần thưởng chờ nhận.</div>';
  return `<div class="claim-list">${S.claims.slice(0,limit).map(c=>`<div class="claim-item"><div><b>${c.title}</b><div class="small muted">${c.desc||''}</div></div><button class="btn primary" data-claim="${c.id}">Nhận</button></div>`).join('')}</div>`;
}
function processQueue(){
  ensureV5State();
  const ready = S.queue.filter(q=>q.done<=S.hour), keep=S.queue.filter(q=>q.done>S.hour); S.queue=keep;
  ready.forEach(q => {
    if(q.type==='build'){ S.buildings[q.key]+=q.amount; log(`Hoàn tất xây ${fmt(q.amount)} ${BUILDINGS[q.key].name}.`); }
    else if(q.type==='explore'){ const gain=Math.max(1,Math.round(q.amount*(q.earthBonus?1.20:1))); S.land[q.key]+=gain; log(`Đội thám hiểm trở về: +${fmt(gain)} mẫu ${LAND[q.key]}.`); }
    else if(q.type==='train'){ S.units[q.key]+=q.amount; log(`Huấn luyện xong ${fmt(q.amount)} ${UNITS[q.key].name}.`); }
    else if(q.type==='expedition'){
      (q.squads||[]).forEach(id=>{ const sq=S.squads.find(x=>x.id===id); if(sq){ sq.status='idle'; sq.busyUntil=0; sq.target=''; } });
      addClaim({title:`Thám hiểm ${LAND[q.landKey]} hoàn tất`, desc:`Các đội ${q.squads?.join(', ')} đã quay về. Bấm nhận để lấy đất và tài nguyên.`, page:'explore', rewards:q.rewards, next:'build'});
      log(`Nhiệm vụ khám phá ${LAND[q.landKey]} đã hoàn tất. Có phần thưởng chờ nhận.`);
    }
  });
}
function qLabel(q){
  if(q.type==='build') return `${fmt(q.amount)} ${BUILDINGS[q.key].name}`;
  if(q.type==='explore') return `${fmt(q.amount)} mẫu ${LAND[q.key]}`;
  if(q.type==='expedition') return `Thám hiểm ${LAND[q.landKey]} (${fmt(q.amount)} mẫu)`;
  return `${fmt(q.amount)} ${UNITS[q.key].name}`;
}
function queueHtml(){
  if(!S.queue.length) return '<div class="muted">Không có lệnh đang chờ.</div>';
  return `<div class="queue">${S.queue.sort((a,b)=>a.done-b.done).map(q=>`<div class="queue-item"><div><b>${qLabel(q)}</b><div class="small muted">${q.type==='expedition'?`Đội ${q.squads.join(', ')} · ${q.done-S.hour} giờ còn lại`:q.type==='explore'?'Khám phá':q.type==='train'?'Huấn luyện':'Xây dựng'}</div>${q.type==='expedition'?`<div class="mini-progress"><span style="width:${queueProgressPct(q)}%"></span></div>`:''}</div><div><b>${Math.max(0,q.done-S.hour)} giờ</b><div class="small muted">còn lại</div></div></div>`).join('')}</div>`;
}
function renderOverview(){
  const p=production(), cp=combatPower(), foodHours=p.food<0?Math.floor(S.resources.food/Math.abs(p.food)):9999;
  const hints=hintItems();
  return `${hints.length?`<div class="notice-bar">${hints.slice(0,3).map(h=>`<button class="notice-pill" data-jumppage="${h.page}">! ${h.text}</button>`).join('')}</div>`:''}<div class="grid four">
    ${card('Kinh tế',`<div class="metric">${fmt(p.platinum+p.lumber+p.ore,0)}</div><div class="submetric">Tổng sản xuất thô/giờ</div><div class="stat-line"><span>Lương thực tạo ra</span><b>${fmt(p.foodGross)}/h</b></div><div class="stat-line"><span>Dân tiêu thụ</span><b>${fmt(p.foodUse)}/h</b></div>`) }
    ${card('Quân lực',`<div class="metric">${fmt(cp.off)} / ${fmt(cp.def)}</div><div class="submetric">Công / Thủ tổng</div><div class="stat-line"><span>Quân chính quy</span><b>${fmt(armyCount())}</b></div><div class="stat-line"><span>Dự bị</span><b>${fmt(S.draftees)}</b></div>`) }
    ${card('Đất đai',`<div class="metric">${fmt(totalLand())}</div><div class="submetric">Tổng mẫu đất</div><div class="stat-line"><span>Đất trống</span><b>${fmt(totalBarren())}</b></div><div class="stat-line"><span>Đã xây/đã đặt xây</span><b>${fmt(totalLand()-totalBarren())}</b></div>`) }
    ${card('Tình trạng',`<div class="metric">${fmt(S.morale,0)}%</div><div class="submetric">Sĩ khí</div><div class="progress"><span style="width:${S.morale}%"></span></div><div class="stat-line"><span>Uy tín</span><b>${fmt(S.prestige)}</b></div><div class="stat-line"><span>Điểm</span><b>${fmt(score())}</b></div>`) }
  </div>
  <div class="grid two">
    ${card('Việc cần nhận / gợi ý tiếp theo',`${claimHtml(4)}<div style="height:10px"></div>${hints.length?`<div class="claim-list">${hints.map(h=>`<button class="notice-pill left" data-jumppage="${h.page}">! ${h.text}</button>`).join('')}</div>`:'<div class="muted">Hiện chưa có nhắc việc nổi bật.</div>'}`)}
    ${card('Lệnh đang xử lý',queueHtml())}
  </div>
  <div class="grid two">
    ${card('Cảnh báo chiến lược',`${p.food<0?`<div class="section-note danger-text"><b>Thiếu cân đối lương thực:</b> đang âm ${fmt(Math.abs(p.food))}/giờ. Dự trữ đủ khoảng ${foodHours} giờ.</div>`:`<div class="section-note good-text"><b>Lương thực an toàn:</b> đang dư ${fmt(p.food)}/giờ.</div>`}<div style="height:10px"></div>${totalBarren()<20?'<div class="section-note warning"><b>Đất trống thấp:</b> nên khám phá thêm trước khi mở rộng sản xuất.</div>':'<div class="section-note">Mục tiêu gợi ý: cân bằng kinh tế → huấn luyện quân → đánh mục tiêu yếu hơn để lấy đất và Bạch kim.</div>'}`)}
    ${card('Tin tức gần đây',`<div class="news-list">${S.news.slice(0,8).map(n=>`<div class="news-item"><div class="t">${timeLabel(n.h)}</div>${n.text}</div>`).join('')}</div>`)}
  </div>`;
}
function renderExplore(){
  ensureV5State();
  const c=exploreCost();
  const squads=visibleSquads();
  const idleCount=squads.filter(s=>s.status==='idle').length;
  const exploreQueue=S.queue.filter(q=>q.type==='expedition');
  const terrainRows=Object.keys(LAND).map(k=>{
    const builds=terrainBuildings(k);
    const terrainTip=compactTooltip(LAND[k],[['Có thể xây',builds.length?builds.join(', '):'Chưa có công trình phù hợp'],['Gợi ý',`Tăng ${LAND[k]} để mở thêm chỗ xây công trình đúng địa hình.`]]);
    const haveTip=compactTooltip('Đang có',[['Ý nghĩa','Tổng số mẫu đất loại này bạn đang sở hữu.'],['Hiện tại',`${fmt(S.land[k])} mẫu ${LAND[k]}`]]);
    const freeTip=compactTooltip('Đất trống',[['Ý nghĩa','Số mẫu cùng loại chưa dùng để xây công trình.'],['Hiện tại',`${fmt(barren(k))} mẫu còn trống`]]);
    return `<div class="compact-row terrain-row"><div class="terrain-left"><div class="terrain-name-chip hover-tip-row"><b>${LAND[k]}</b>${terrainTip}</div></div><div class="terrain-right"><div class="metric-chip hover-tip-row">Đang có: <b>${fmt(S.land[k])}</b>${haveTip}</div><div class="metric-chip hover-tip-row">Đất trống: <b>${fmt(barren(k))}</b>${freeTip}</div><label class="sl-wrap">Số mẫu<input class="compact-input narrow" id="exp_${k}" type="number" min="0" value="0"></label><button class="btn ghost small-btn" data-pick-land="${k}">Chọn</button></div></div>`;
  }).join('');
  const squadRows=squads.map(sq=>{
    const count=squadUnitCount(sq), power=squadPower(sq), noArmy=count<=0;
    const disabled=sq.status==='busy'||noArmy;
    const status=sq.status==='busy'?`Đang bận: ${sq.target} · còn ${Math.max(0,sq.busyUntil-S.hour)} giờ`:noArmy?'Chưa xếp quân vào đội hình':`${fmt(count)} quân · ${squadSummary(sq)}`;
    return `<div class="compact-row ${sq.status==='busy'?'squad-busy':''} ${noArmy?'squad-empty':''}"><div class="row-main"><div class="row-name"><label class="check-wrap"><input type="checkbox" class="sq-check" value="${sq.id}" ${disabled?'disabled':''}> <b>${sq.name}</b></label><div class="small ${noArmy?'danger-text':'muted'}">${status}</div></div></div><div class="row-side"><div class="price-box ${noArmy?'zero-power':''}">${noArmy?'Chưa có đội hình':`Sức mạnh ${fmt(power)}`}</div><button class="btn" data-jumppage="military">Xếp đội hình</button></div></div>`;
  }).join('');
  const hidden=5-unlockedSquadCount();
  return `${pendingClaims()?`<div class="notice-bar">${S.claims.map(c=>`<button class="notice-pill" data-claim="${c.id}">! ${c.title}</button>`).join('')}</div>`:''}<div class="grid explore-grid">
    ${card('Khám phá đất',`<div class="section-note"><b>Mỗi mẫu</b> hiện tốn <b>${fmt(c.p)} Bạch kim + ${fmt(c.d)} lính dự bị</b>. Muốn xuất phát, đội phải được <b>xếp quân thật</b> trong trang Quân đội. Có thể chọn 1–${unlockedSquadCount()} đội cùng tham gia. ${techDone('earth_survey')?'<b>Trắc địa địa mạch</b> đang giảm chi phí khám phá.':''}</div><div style="height:12px"></div><div class="compact-list terrain-list">${terrainRows}</div><button id="exploreBtn" class="btn primary" style="margin-top:12px">Bắt đầu khám phá</button>`)}
    <div class="grid explore-side">
      ${card(`Chọn đội tham gia (${idleCount}/${unlockedSquadCount()} đội đang rảnh)`,`<div class="section-note">Đội hình được quản lý tập trung tại trang <b>Quân đội → Bảng xếp đội hình</b>. Tại đây chỉ chọn đội nào sẽ đi.${hidden?` Còn <b>${hidden}</b> đội đang khóa, mở bằng nghiên cứu <b>Liên đội</b>.`:''}</div><div style="height:10px"></div><div class="compact-list squad-list">${squadRows}</div>`)}
      ${card('Hoạt động đang diễn ra',`${exploreQueue.length?`<div class="claim-list">${exploreQueue.map(q=>`<div class="claim-item"><div><b>${qLabel(q)}</b><div class="small muted">Đội ${q.squads.join(', ')} · ${q.done-S.hour} giờ còn lại · Sức mạnh ${fmt(q.power||0)}</div><div class="mini-progress"><span style="width:${queueProgressPct(q)}%"></span></div></div><div class="small"><b>${queueProgressPct(q)}%</b></div></div>`).join('')}</div>`:'<div class="muted">Chưa có đội nào đang đi khám phá.</div>'}${pendingClaims()?`<div style="height:10px"></div>${claimHtml(5)}`:''}`)}
    </div>
  </div>`;
}
function doExplore(){
  ensureV5State();
  const c=exploreCost();
  const arr=Object.keys(LAND).map(k=>[k,Math.max(0,parseInt($(`#exp_${k}`)?.value||0,10))]).filter(([,q])=>q>0);
  if(!arr.length) return toast('Hãy nhập số mẫu muốn khám phá.');
  if(arr.length>1) return toast('Mỗi lượt chỉ chọn 1 loại địa hình để dễ quản lý tiến độ.');
  const squadIds=$$('.sq-check:checked').map(x=>Number(x.value));
  if(!squadIds.length) return toast('Hãy chọn ít nhất 1 đội đã được xếp quân.');
  const selected=visibleSquads().filter(s=>squadIds.includes(s.id) && s.status==='idle');
  if(!selected.length) return toast('Các đội bạn chọn hiện không khả dụng.');
  for(const sq of selected){ if(squadUnitCount(sq)<=0||squadPower(sq)<=0) return toast(`${sq.name} chưa có quân trong đội hình.`); }
  const [landKey,q]=arr[0], pc=c.p*q, dc=c.d*q;
  if(S.resources.platinum<pc || S.draftees<dc) return toast('Không đủ Bạch kim hoặc lính dự bị.');
  const power=selected.reduce((a,s)=>a+squadPower(s),0);
  const hours=Math.max(3,Math.min(14,12-Math.floor(selected.length/2)-Math.floor(power/12000)-(techDone('expedition_tactics')?1:0)));
  const landGain=Math.max(1,Math.round(q*(activeBuff('earth_spirit')?1.2:1)*(techDone('earth_survey')?1.10:1)));
  const rewardP=Math.round(pc*.35 + power*.35);
  const rewardOre=['mountain','cavern','hill'].includes(landKey)?Math.round(q*45 + power*.02):Math.round(q*12);
  const rewardMana=['swamp','cavern'].includes(landKey)?Math.round(q*8):0;
  S.resources.platinum-=pc; S.draftees-=dc; S.morale=Math.max(0,S.morale-Math.max(1,Math.floor((q+2)/3)));
  selected.forEach(s=>{s.status='busy';s.busyUntil=S.hour+hours;s.target=`Khám phá ${LAND[landKey]}`;});
  S.queue.push({type:'expedition',landKey,amount:q,start:S.hour,done:S.hour+hours,squads:selected.map(s=>s.id),power,rewards:{landKey,landGain,platinum:rewardP,ore:rewardOre,mana:rewardMana}});
  log(`Bắt đầu khám phá ${q} mẫu ${LAND[landKey]} với ${selected.length} đội; sức mạnh ${fmt(power)}; hoàn tất sau ${hours} giờ.`);
  save(true); render(); toast(`Đã phái ${selected.length} đội đi khám phá.`);
}
function initNav(){ const n=$('#nav'); n.innerHTML=NAV.map(([k,v])=>{ let badge=''; if(k==='overview'&&pendingClaims()) badge=`<span class="nav-badge">!</span>`; if(k==='explore'&&(S.queue.some(q=>q.type==='expedition')||hintItems().some(h=>h.page==='explore'))) badge=`<span class="nav-badge">!</span>`; return `<button data-page="${k}">${v}${badge}</button>`; }).join(''); n.onclick=e=>{ const b=e.target.closest('[data-page]'); if(!b) return; page=b.dataset.page; render(); }; }
function bindDynamic(){
  $$('[data-build]').forEach(b=>b.onclick=()=>doBuild(b.dataset.build));
  $$('[data-train]').forEach(b=>b.onclick=()=>doTrain(b.dataset.train));
  $$('[data-tech]').forEach(b=>b.onclick=()=>doTech(b.dataset.tech));
  $$('[data-spell]').forEach(b=>b.onclick=()=>doSpell(b.dataset.spell));
  $$('[data-attack]').forEach(b=>b.onclick=()=>doAttack(+b.dataset.attack));
  $$('[data-mission]').forEach(b=>b.onclick=()=>doMission(b.dataset.mission));
  $$('[data-claim]').forEach(b=>b.onclick=()=>doClaim(b.dataset.claim));
  $$('[data-jumppage]').forEach(b=>b.onclick=()=>{ page=b.dataset.jumppage; render(); });
  $$('[data-pick-land]').forEach(b=>b.onclick=()=>{ const key=b.dataset.pickLand; Object.keys(LAND).forEach(k=>{ const el=$(`#exp_${k}`); if(el && k!==key) el.value=0; }); const target=$(`#exp_${key}`); if(target && Number(target.value||0)===0) target.value=1; target?.focus(); });
  $$('[data-military-tab]').forEach(b=>b.onclick=()=>{ militaryTab=b.dataset.militaryTab; render(); });
  $$('[data-magic-tab]').forEach(b=>b.onclick=()=>{ magicElementTab=b.dataset.magicTab; render(); });
  $$('[data-war-tab]').forEach(b=>b.onclick=()=>{ warTab=b.dataset.warTab; render(); });
  $$('[data-add-squad-unit]').forEach(b=>b.onclick=()=>addSquadUnit(b.dataset.addSquadUnit));
  $$('[data-remove-squad-unit]').forEach(b=>b.onclick=()=>removeSquadUnit(b.dataset.removeSquadUnit));
  $$('[data-inc-land]').forEach(b=>b.onclick=()=>{ const inp=$(`#exp_${b.dataset.incLand}`); if(inp){ inp.value=Math.max(0,parseInt(inp.value||0,10)+1); } });
  const e=$('#exploreBtn'); if(e) e.onclick=doExplore;
  initCompactTotals(); bindGlobalTooltips();
}
function render(){
  initNav();
  $$('#nav [data-page]').forEach(b=>b.classList.toggle('active',b.dataset.page===page));
  $('#pageTitle').textContent=(NAV.find(x=>x[0]===page)||[])[1]||'Tổng quan';
  $('#realmName').textContent=S.realmName; resourceBar();
  const views={overview:renderOverview, build:renderBuild, explore:renderExplore, military:renderMilitary, research:renderResearch, magic:renderMagic, war:renderWar, rank:renderRank};
  $('#content').innerHTML=(views[page]||renderOverview)();
  bindDynamic(); drawAllCanvases();
}
ensureV5State();
ensureV7Logic();


// ===== V10: nâng cấp nhịp chơi, AI, sự kiện, nghiên cứu =====
Object.assign(TECHS, {
  royal_mint:{name:'Xưởng đúc hoàng gia',tier:1,cost:540,category:'Kinh tế',desc:'+8% sản lượng Bạch kim.',req:['farmers_growth']},
  timber_chain:{name:'Chuỗi xưởng gỗ',tier:1,cost:560,category:'Kinh tế',desc:'+10% sản lượng Gỗ.',req:['fruits_of_labor']},
  deep_mining:{name:'Khai mỏ sâu',tier:2,cost:760,category:'Kinh tế',desc:'+12% sản lượng Quặng.',req:['ore_processing']},
  mana_reservoir:{name:'Hồ chứa mana',tier:2,cost:780,category:'Ma pháp',desc:'+15% sản lượng Mana.',req:['mana_theory']},
  civic_census:{name:'Tổng điều tra dân cư',tier:1,cost:520,category:'Quản trị',desc:'+8% trần dân số và tăng trưởng dân ổn định hơn.',req:[]},
  rapid_mustering:{name:'Động viên thần tốc',tier:2,cost:860,category:'Quân sự',desc:'+15% tốc độ bổ sung quân dự bị.',req:['disciplined_army']},
  time_efficiency:{name:'Lịch vụ tăng tốc',tier:2,cost:880,category:'Quản trị',desc:'Giảm 8% chi phí các nút + giờ.',req:[]},
  field_fortress:{name:'Thế trận tiền tiêu',tier:2,cost:920,category:'Phòng thủ',desc:'+8% Thủ tổng.',req:['fortification']},
  war_engineering:{name:'Công binh chiến trận',tier:3,cost:1100,category:'Quân sự',desc:'+10% Công tổng.',req:['disciplined_army']},
  academy_network:{name:'Liên minh học viện',tier:2,cost:930,category:'Nghiên cứu',desc:'+18% điểm nghiên cứu mỗi giờ.',req:['academy_method']},
  fortress_watch:{name:'Mạng lưới vọng gác',tier:3,cost:1180,category:'Phòng thủ',desc:'AI tập kích thưa hơn và dễ bị phát hiện.',req:['granary_bunker_1']},
  expedition_charters:{name:'Đặc lệnh thám hiểm',tier:3,cost:1040,category:'Khám phá',desc:'Giảm 15% chi phí khám phá và rút ngắn 1 giờ hành quân.',req:['earth_survey']},
  royal_arsenal:{name:'Kho quân khí hoàng gia',tier:4,cost:1450,category:'Quân sự',desc:'Giảm 10% chi phí huấn luyện quân.',req:['smithing_mastery','war_engineering']},
  spell_matrix:{name:'Ma trận thi pháp',tier:4,cost:1520,category:'Ma pháp',desc:'Buff kinh tế mạnh hơn, Mana dồi dào hơn.',req:['mana_theory','academy_network']},
  granary_bunker_3:{name:'Hầm quân lương III',tier:5,cost:1950,category:'Phòng thủ',desc:'Bảo vệ 85% tài nguyên khỏi các đợt cướp phá của AI.',req:['granary_bunker_2']}
});
const V10_RIVALS = [
  {name:'An Khê',land:560,off:6200,def:6900,wealth:110000,food:78000,element:'Thổ',spellElement:'Thổ',branch:'infantry',aiTier:'Trung bình'},
  {name:'Lam Giang',land:610,off:6900,def:7200,wealth:125000,food:82000,element:'Thủy',spellElement:'Thủy',branch:'navy',aiTier:'Trung bình'},
  {name:'Phong Lĩnh',land:660,off:7600,def:7600,wealth:138000,food:88000,element:'Mộc',spellElement:'Mộc',branch:'cavalry',aiTier:'Trung bình'},
  {name:'Thiết Môn',land:720,off:8600,def:9000,wealth:155000,food:94000,element:'Kim',spellElement:'Kim',branch:'infantry',aiTier:'Khá'},
  {name:'Vân Hải',land:780,off:9300,def:9800,wealth:175000,food:102000,element:'Thủy',spellElement:'Thủy',branch:'navy',aiTier:'Khá'},
  {name:'Xích Dương',land:860,off:10600,def:10200,wealth:198000,food:110000,element:'Hỏa',spellElement:'Hỏa',branch:'air',aiTier:'Khá'},
  {name:'Thanh Mộc',land:950,off:12200,def:11900,wealth:235000,food:126000,element:'Mộc',spellElement:'Mộc',branch:'cavalry',aiTier:'Khá'},
  {name:'Bạch Hải',land:1040,off:13600,def:13200,wealth:270000,food:138000,element:'Thủy',spellElement:'Thủy',branch:'navy',aiTier:'Khá'},
  {name:'Kim Thành',land:1320,off:19800,def:21200,wealth:420000,food:185000,element:'Kim',spellElement:'Kim',branch:'cavalry',aiTier:'Mạnh'},
  {name:'Hỏa Vân',land:1520,off:23800,def:23000,wealth:510000,food:215000,element:'Hỏa',spellElement:'Hỏa',branch:'air',aiTier:'Mạnh'}
];
const EVENT_TEMPLATES = [
  ()=>({title:'Thương hội viễn chinh cập thành',text:'Một đoàn thương nhân xin giao dịch nhanh theo giá ưu đãi.',options:[
    {label:'Mua vật tư',cost:{platinum:12000},gain:{lumber:2600,ore:2100},message:'Vật tư mới được nhập kho.'},
    {label:'Đánh thuế',gain:{platinum:9000},prestige:-2,morale:-2,message:'Kho bạc tăng lên nhưng dân thương không vui.'}
  ]}),
  ()=>({title:'Học giả hang cổ cầu viện',text:'Một nhóm học giả xin ngân sách để giải mã thư tịch cổ.',options:[
    {label:'Tài trợ nghiên cứu',cost:{platinum:8000,food:2500},research:280,prestige:2,message:'Tri thức mới được khai mở.'},
    {label:'Tịch thu bản thảo',gain:{platinum:5000},prestige:-3,message:'Kho bạc tăng nhẹ nhưng giới học giả bất mãn.'}
  ]}),
  ()=>({title:'Lễ hội mùa màng',text:'Dân chúng đề nghị mở lễ hội để nâng sĩ khí toàn thành.',options:[
    {label:'Tổ chức lễ hội',cost:{food:6500,platinum:3500},morale:10,prestige:4,message:'Sĩ khí được củng cố rõ rệt.'},
    {label:'Bán nông sản',cost:{food:7000},gain:{platinum:15000},message:'Một mùa đổi lấy tiền mặt.'}
  ]}),
  ()=>({title:'Tuyển dân binh tình nguyện',text:'Nhiều thanh niên xin gia nhập lực lượng dự bị.',options:[
    {label:'Tiếp nhận',cost:{food:4200,platinum:4800},draftees:160,peasants:-60,message:'Lực lượng dự bị được bổ sung.'},
    {label:'Giữ lại sản xuất',peasants:120,morale:2,message:'Lực lượng lao động được ưu tiên.'}
  ]}),
  ()=>({title:'Di tích cổ vừa lộ thiên',text:'Một khu di tích ngầm xuất hiện sau trận mưa lớn.',options:[
    {label:'Nghiên cứu di tích',cost:{mana:320},research:240,prestige:3,message:'Cổ thư và ký hiệu ma pháp đem lại kiến thức quý.'},
    {label:'Khai thác vật liệu',gain:{platinum:7000,ore:2200},message:'Hiện vật được quy đổi thành của cải.'}
  ]}),
  ()=>({title:'Mỏ quặng lộ vỉa',text:'Thợ mỏ phát hiện một mạch quặng mới gần sườn núi.',options:[
    {label:'Đầu tư khai thác',cost:{platinum:7000,lumber:1800},gain:{ore:4600},research:60,message:'Sản lượng quặng tăng tức thì.'},
    {label:'Khai thác nhẹ',gain:{ore:1800},message:'Thu hồi nhanh một phần quặng.'}
  ]}),
  ()=>({title:'Gián điệp bị lộ',text:'Nội thành phát hiện dấu vết thám báo của đối thủ.',options:[
    {label:'Phản gián quy mô lớn',cost:{platinum:6500,mana:120},prestige:3,delayRaid:18,message:'Mạng lưới phản gián hoạt động hiệu quả.'},
    {label:'Theo dõi âm thầm',research:90,message:'Thu được ít nhiều tài liệu hữu ích.'}
  ]}),
  ()=>({title:'Đoàn người tị nạn kéo đến',text:'Một nhóm dân phiêu tán xin được tá túc trong thành.',options:[
    {label:'Thu nhận',cost:{food:3800},peasants:240,morale:3,message:'Dân cư và sinh khí của thành đều tăng.'},
    {label:'Từ chối',prestige:-4,message:'Quyết định cứng rắn gây ảnh hưởng danh tiếng.'}
  ]}),
  ()=>({title:'Lễ cầu phúc ở đền thiêng',text:'Tăng lữ đề nghị hiến tế để nhận phúc lành ngắn hạn.',options:[
    {label:'Cúng tế đúng lễ',cost:{food:2200,mana:150},morale:5,prestige:2,gain:{mana:180},message:'Phúc khí lan tỏa khắp thành.'},
    {label:'Giữ ngân khố',message:'Không có biến động lớn nào xảy ra.'}
  ]}),
  ()=>({title:'Thương nhân hải hồ mời hợp tác',text:'Một tuyến trao đổi ngắn hạn đang mở ra ngoài bến cảng.',options:[
    {label:'Ký hợp đồng',cost:{food:4000,lumber:1000},gain:{platinum:14500},message:'Thương vụ đem về lợi nhuận tốt.'},
    {label:'Dự trữ hậu cần',gain:{food:2800,lumber:1200},message:'Kho lương và kho gỗ được bổ sung.'}
  ]})
];
function ensureV10State(){
  S.events = Array.isArray(S.events) ? S.events : [];
  S.lastEventHour = Number.isFinite(Number(S.lastEventHour)) ? Number(S.lastEventHour) : -18;
  if(!S.aiProfileV10){
    S.rivals = V10_RIVALS.map(r=>({ ...r }));
    S.aiProfileV10 = true;
  }else{
    S.rivals = V10_RIVALS.map(r=>({ ...r, ...(S.rivals.find(x=>x.name===r.name)||{}) }));
  }
  S.version = 10;
}
function pendingEvents(){ return (S.events||[]).length; }
function addResSafe(k, v){ S.resources[k] = Math.max(0, Math.round((S.resources[k]||0) + v)); }
function costToText(cost){ return Object.entries(cost||{}).filter(([,v])=>v>0).map(([k,v])=> `${fmt(v)} ${({platinum:'Bạch kim',food:'Lương thực',lumber:'Gỗ',ore:'Quặng',mana:'Mana'}[k]||k)}`).join(' · '); }
function canAfford(cost){ return Object.entries(cost||{}).every(([k,v])=> (S.resources[k]||0) >= v); }
function payCost(cost){ Object.entries(cost||{}).forEach(([k,v])=> addResSafe(k,-v)); }
function gainBundle(gain){ Object.entries(gain||{}).forEach(([k,v])=> addResSafe(k,v)); }
function spawnEvent(){
  if(pendingEvents()>=2) return;
  const tmpl = EVENT_TEMPLATES[Math.floor(Math.random()*EVENT_TEMPLATES.length)]();
  const id = `ev_${Date.now()}_${Math.floor(Math.random()*9999)}`;
  S.events.push({id, ...tmpl});
  log(`Sự kiện mới: ${tmpl.title}.`);
}
function maybeSpawnEvent(){
  if(S.hour < 8) return;
  if(pendingEvents()>=2) return;
  if(S.hour - S.lastEventHour < 18) return;
  const chance = techDone('fortress_watch') ? 0.34 : 0.26;
  if(Math.random() < chance){
    spawnEvent();
    S.lastEventHour = S.hour;
  }
}
function applyEventChoice(id, idx){
  const evIndex = (S.events||[]).findIndex(e=>e.id===id);
  if(evIndex<0) return;
  const ev = S.events[evIndex];
  const opt = ev.options[idx];
  if(!opt) return;
  if(!canAfford(opt.cost)) return toast('Không đủ tài nguyên cho lựa chọn này.');
  payCost(opt.cost);
  gainBundle(opt.gain);
  if(opt.research) addResSafe('research', opt.research);
  if(opt.morale) S.morale = Math.max(0, Math.min(100, S.morale + opt.morale));
  if(opt.prestige) S.prestige = Math.max(0, S.prestige + opt.prestige);
  if(opt.draftees) S.draftees = Math.max(0, S.draftees + opt.draftees);
  if(opt.peasants) S.peasants = Math.max(0, S.peasants + opt.peasants);
  if(opt.delayRaid) S.lastAiRaidHour = Math.max(S.lastAiRaidHour, S.hour + opt.delayRaid - 36);
  log(`${ev.title}: ${opt.message||opt.label}.`);
  S.events.splice(evIndex,1);
  save(true); render(); toast(opt.message||'Đã xử lý sự kiện.');
}
function eventDeckHtml(){
  if(!pendingEvents()) return '<div class="muted">Hiện chưa có sự kiện nào chờ xử lý. Các sự kiện mới sẽ xuất hiện theo tiến trình phát triển của vương quốc.</div>';
  return `<div class="event-stack">${S.events.map(ev=>`<div class="event-card"><div class="event-top"><b>${ev.title}</b><span class="pill good">Sự kiện</span></div><div class="small muted" style="margin-top:6px">${ev.text}</div><div class="event-actions">${ev.options.map((opt,i)=>`<button class="btn ${i===0?'primary':''}" data-event-choice="${ev.id}|${i}" title="${opt.cost?`Chi phí: ${costToText(opt.cost)}. `:''}${opt.gain?`Nhận: ${costToText(opt.gain)}. `:''}${opt.research?`+${fmt(opt.research)} nghiên cứu. `:''}${opt.morale?`${opt.morale>0?'+':''}${opt.morale} sĩ khí. `:''}${opt.prestige?`${opt.prestige>0?'+':''}${opt.prestige} uy tín.`:''}">${opt.label}</button>`).join('')}</div></div>`).join('')}</div>`;
}
function timeSkipCost(hours){
  const p = production();
  const mult = ({1:0.06,6:0.26,12:0.44,24:0.74}[hours] || Math.min(0.8, hours*0.035));
  const disc = techDone('time_efficiency') ? 0.92 : 1;
  return {
    platinum: Math.max(300, Math.round(p.platinum*hours*mult*disc)),
    food: Math.max(180, Math.round(Math.max(400,p.foodGross)*hours*mult*0.28*disc)),
    lumber: Math.max(90, Math.round(Math.max(120,p.lumber||0)*hours*mult*0.16*disc)),
    ore: Math.max(90, Math.round(Math.max(120,p.ore||0)*hours*mult*0.16*disc)),
    mana: Math.max(15, Math.round(Math.max(20,p.mana||0)*hours*mult*0.10*disc))
  };
}
function refreshAdvanceButtons(){
  $$('[data-advance]').forEach(b=>{
    const h = Number(b.dataset.advance||0);
    const c = timeSkipCost(h);
    b.classList.add('advance-btn');
    b.innerHTML = `<span class="advance-main">+${h} giờ</span><span class="advance-sub">${fmt(c.platinum)} BK</span>`;
    b.title = `Chi phí tăng tốc: ${costToText(c)}.`;
  });
}
const advanceCore = advance;
advance = function(hours){
  advanceCore(hours);
  maybeSpawnEvent();
  save(true); render();
};
function advanceWithCost(hours){
  const c = timeSkipCost(hours);
  if(!canAfford(c)) return toast('Không đủ tài nguyên để tăng tốc thời gian.');
  payCost(c);
  log(`Kích hoạt +${hours} giờ, tiêu hao ${costToText(c)}.`);
  advance(hours);
}
const baseProduction = production;
production = function(){
  const p = baseProduction();
  if(techDone('royal_mint')) p.platinum *= 1.08;
  if(techDone('timber_chain')) p.lumber *= 1.10;
  if(techDone('deep_mining')) p.ore *= 1.12;
  if(techDone('mana_reservoir')) p.mana *= 1.15;
  if(techDone('academy_network')) p.research *= 1.18;
  if(techDone('spell_matrix') && activeBuff('midas')) p.platinum *= 1.04;
  if(techDone('spell_matrix') && activeBuff('gaia')) { p.food *= 1.04; p.foodGross *= 1.04; p.lumber *= 1.04; }
  return p;
};
const baseCombatPower = combatPower;
combatPower = function(enemySpellElement=null, enemyBranch=null){
  const p = baseCombatPower(enemySpellElement, enemyBranch);
  if(techDone('war_engineering')) p.off = Math.floor(p.off * 1.10);
  if(techDone('field_fortress')) p.def = Math.floor(p.def * 1.08);
  return p;
};
const baseMaxPopulation = maxPopulation;
maxPopulation = function(){ return Math.floor(baseMaxPopulation() * (techDone('civic_census') ? 1.08 : 1)); };
const baseStorageProtection = storageProtection;
storageProtection = function(){ const v = baseStorageProtection(); return techDone('granary_bunker_3') ? 0.85 : v; };
const baseEvolveRivals = evolveRivals;
evolveRivals = function(){
  S.rivals.forEach(r=>{
    const base = r.aiTier==='Mạnh' ? .030 : r.aiTier==='Khá' ? .022 : .014;
    const f = base + Math.random()*0.012;
    r.land = Math.round(r.land*(1+f*.24));
    r.off = Math.round(r.off*(1+f));
    r.def = Math.round(r.def*(1+f*.95));
    r.wealth = Math.round(r.wealth*(1+f));
    r.food = Math.round((r.food||0)*(1+f*.8));
  });
  if(Math.random()<.18) log('Tin tình báo: các lãnh địa lân cận đang điều chỉnh binh lực.');
};
const baseMaybeAiRaid = maybeAiRaid;
maybeAiRaid = function(){
  if(techDone('fortress_watch')){
    S.lastAiRaidHour = Number(S.lastAiRaidHour||0);
    if(S.hour<24 || S.hour%24!==0) return;
    if(S.hour - S.lastAiRaidHour < 48) return;
    if(Math.random()>=.11) return;
    const pool = S.rivals.filter(r=>r.aiTier!=='Mạnh').length ? S.rivals.filter(r=>r.aiTier!=='Mạnh') : S.rivals;
    const rival=pool[Math.floor(Math.random()*Math.min(pool.length,6))];
    const atk=rival.off*(.82+Math.random()*.26);
    const def=combatPower(rival.spellElement,rival.branch).def*(.95+Math.random()*.18);
    S.lastAiRaidHour=S.hour;
    const prot=storageProtection();
    if(atk>def){
      const ratio=Math.max(.04,.20*(1-prot));
      const loot={}; ['platinum','food','lumber','ore','mana'].forEach(k=>{ loot[k]=Math.floor((S.resources[k]||0)*ratio); S.resources[k]=Math.max(0,(S.resources[k]||0)-loot[k]); });
      log(`Cảnh báo: ${rival.name} tập kích thành công, cướp ${fmt(loot.platinum)} Bạch kim, ${fmt(loot.food)} Lương thực, ${fmt(loot.lumber)} Gỗ, ${fmt(loot.ore)} Quặng và ${fmt(loot.mana)} Mana.${prot?` Hầm quân lương đã bảo vệ ${(prot*100).toFixed(0)}% tài nguyên bị nhắm tới.`:''}`);
      toast('Bị tập kích. Kiểm tra tin tức để xem thiệt hại.');
    }else{
      const gainP=Math.floor((rival.wealth||0)*.20), gainF=Math.floor((rival.food||0)*.20), gainO=Math.floor((rival.wealth||0)*.06), gainL=Math.floor((rival.wealth||0)*.04), gainM=Math.max(20,Math.floor((rival.wealth||0)*.01));
      S.resources.platinum+=gainP; S.resources.food+=gainF; S.resources.ore+=gainO; S.resources.lumber+=gainL; S.resources.mana+=gainM;
      rival.wealth=Math.max(0,(rival.wealth||0)-gainP); rival.food=Math.max(0,(rival.food||0)-gainF);
      log(`Phòng thủ thành công trước ${rival.name}. Chiến lợi phẩm thu được: ${fmt(gainP)} Bạch kim, ${fmt(gainF)} Lương thực, ${fmt(gainL)} Gỗ, ${fmt(gainO)} Quặng và ${fmt(gainM)} Mana.`);
      toast('Đã đẩy lùi đợt tập kích.');
    }
    return;
  }
  return baseMaybeAiRaid();
};
const oldRenderOverview = renderOverview;
renderOverview = function(){
  const p=production(), cp=combatPower(), foodHours=p.food<0?Math.floor(S.resources.food/Math.abs(p.food)):9999;
  const accelNote = Object.entries({1:timeSkipCost(1),6:timeSkipCost(6),12:timeSkipCost(12),24:timeSkipCost(24)}).map(([h,c])=>`<div class="stat-line"><span>+${h} giờ</span><b>${fmt(c.platinum)} BK · ${fmt(c.food)} LT</b></div>`).join('');
  return `<div class="grid four">
    ${card('Kinh tế',`<div class="metric">${fmt(p.platinum+p.lumber+p.ore,0)}</div><div class="submetric">Tổng sản xuất thô/giờ</div><div class="stat-line"><span>Lương thực tạo ra</span><b>${fmt(p.foodGross)}/h</b></div><div class="stat-line"><span>Dân tiêu thụ</span><b>${fmt(p.foodUse)}/h</b></div>`) }
    ${card('Quân lực',`<div class="metric">${fmt(cp.off)} / ${fmt(cp.def)}</div><div class="submetric">Công / Thủ tổng</div><div class="stat-line"><span>Quân chính quy</span><b>${fmt(armyCount())}</b></div><div class="stat-line"><span>Dự bị</span><b>${fmt(S.draftees)}</b></div>`) }
    ${card('Đất đai',`<div class="metric">${fmt(totalLand())}</div><div class="submetric">Tổng mẫu đất</div><div class="stat-line"><span>Đất trống</span><b>${fmt(totalBarren())}</b></div><div class="stat-line"><span>Đã xây/đã đặt xây</span><b>${fmt(totalLand()-totalBarren())}</b></div>`) }
    ${card('Tình trạng',`<div class="metric">${fmt(S.morale,0)}%</div><div class="submetric">Sĩ khí</div><div class="progress"><span style="width:${S.morale}%"></span></div><div class="stat-line"><span>Uy tín</span><b>${fmt(S.prestige)}</b></div><div class="stat-line"><span>Điểm</span><b>${fmt(score())}</b></div>`) }
  </div>
  <div class="grid two">
    ${card('Cảnh báo chiến lược',`${p.food<0?`<div class="section-note danger-text"><b>Thiếu cân đối lương thực:</b> đang âm ${fmt(Math.abs(p.food))}/giờ. Dự trữ đủ khoảng ${foodHours} giờ.</div>`:`<div class="section-note good-text"><b>Lương thực an toàn:</b> đang dư ${fmt(p.food)}/giờ.</div>`}<div style="height:10px"></div>${totalBarren()<20?'<div class="section-note warning"><b>Đất trống thấp:</b> nên khám phá thêm trước khi mở rộng sản xuất.</div>':'<div class="section-note">Mục tiêu gợi ý: cân bằng kinh tế → mở nghiên cứu → xếp đội hình → đánh mục tiêu vừa sức.</div>'}`)}
    ${card('Gói tăng tốc',`${accelNote}<div class="section-note" style="margin-top:10px">Chi phí đầy đủ được hiển thị trực tiếp trên các nút + giờ ở góc trên.</div>`)}
  </div>
  <div class="grid two">
    ${card('Sự kiện vương quốc',eventDeckHtml(),pendingEvents()?`<span class="pill warning">${pendingEvents()} chờ xử lý</span>`:'')}
    ${card('Lệnh đang xử lý',queueHtml())}
  </div>
  <div class="grid two">
    ${card('Tin tức gần đây',`<div class="news-list">${S.news.slice(0,8).map(n=>`<div class="news-item"><div class="t">${timeLabel(n.h)}</div>${n.text}</div>`).join('')}</div>`)}
    ${card('Quân theo nhánh',Object.keys(BRANCH_META).map(k=>`<div class="stat-line"><span>${BRANCH_META[k].name}</span><b>${fmt(unitCountByBranch(k))}</b></div>`).join(''))}
  </div>`;
};
const oldRenderRank = renderRank;
renderRank = function(){
  const p=combatPower();
  const all=[...S.rivals.map(r=>({name:r.name,land:r.land,power:r.off+r.def,score:Math.round(r.land*10+(r.off+r.def)/10),tier:r.aiTier||'Trung bình'})), {name:S.realmName+' (Bạn)',land:totalLand(),power:p.off+p.def,score:score(),me:true,tier:'Người chơi'}].sort((a,b)=>b.score-a.score);
  return `${card('Bảng xếp hạng',`<div class="section-note"><b>Phân bố AI:</b> phần lớn lãnh địa ở mức <b>Trung bình/Khá</b>; chỉ có <b>1-2 đối thủ mạnh</b> ở nhóm đầu. Mục tiêu là giữ nhịp cạnh tranh vừa đủ, tránh gây ức chế khi cân bằng sức mạnh.</div><div style="height:10px"></div><div class="table-wrap"><table class="table"><thead><tr><th>#</th><th>Lãnh địa</th><th>Nhóm</th><th class="right">Đất</th><th class="right">Quân lực tổng</th><th class="right">Điểm</th></tr></thead><tbody>${all.map((x,i)=>`<tr ${x.me?'style="background:#1c3027"':''}><td>${i+1}</td><td><b>${x.name}</b></td><td>${x.tier}</td><td class="right">${fmt(x.land)}</td><td class="right">${fmt(x.power)}</td><td class="right"><b>${fmt(x.score)}</b></td></tr>`).join('')}</tbody></table></div>`)}`;
};
const oldRenderRivalWar = renderRivalWar;
renderRivalWar = function(){
  return `<div class="compact-list war-list">${S.rivals.map((r,i)=>{
    const me=combatPower(r.spellElement,r.branch), ed=enemyEffectiveDefense(r), [risk,cls]=battleRisk(me.off,ed);
    return `<div class="compact-row hover-tip-row"><div class="row-main"><div class="row-name"><canvas class="unit-badge" data-branch="${r.branch}" data-element="${r.element}" width="28" height="28"></canvas><div><b style="color:${ELEMENT_META[r.element].color}">${r.name}</b><div class="small muted">${fmt(r.land)} mẫu · ${BRANCH_META[r.branch].name} · Nhóm ${r.aiTier||'Trung bình'}</div></div></div>${warTargetTooltip(r)}</div><div class="row-side"><div class="inline-info">Thủ hiệu dụng: <b>${fmt(ed)}</b></div><span class="pill ${cls}">${risk}</span><div class="price-box">Kho bạc ~${fmt(r.wealth)}</div><button class="btn ${risk==='Có lợi'?'primary':''}" data-attack="${i}">Tấn công</button></div></div>`;
  }).join('')}</div>`;
};
const oldDoTech = doTech;
doTech = function(k){ oldDoTech(k); };
const oldBindDynamic = bindDynamic;
bindDynamic = function(){
  $$('[data-build]').forEach(b=>b.onclick=()=>doBuild(b.dataset.build));
  $$('[data-train]').forEach(b=>b.onclick=()=>doTrain(b.dataset.train));
  $$('[data-tech]').forEach(b=>b.onclick=()=>doTech(b.dataset.tech));
  $$('[data-spell]').forEach(b=>b.onclick=()=>doSpell(b.dataset.spell));
  $$('[data-attack]').forEach(b=>b.onclick=()=>doAttack(+b.dataset.attack));
  $$('[data-mission]').forEach(b=>b.onclick=()=>doMission(b.dataset.mission));
  $$('[data-claim]').forEach(b=>b.onclick=()=>doClaim(b.dataset.claim));
  $$('[data-jumppage]').forEach(b=>b.onclick=()=>{ page=b.dataset.jumppage; render(); });
  $$('[data-pick-land]').forEach(b=>b.onclick=()=>{ const key=b.dataset.pickLand; Object.keys(LAND).forEach(k=>{ const el=$(`#exp_${k}`); if(el && k!==key) el.value=0; }); const target=$(`#exp_${key}`); if(target && Number(target.value||0)===0) target.value=1; target?.focus(); });
  $$('[data-military-tab]').forEach(b=>b.onclick=()=>{ militaryTab=b.dataset.militaryTab; render(); });
  $$('[data-magic-tab]').forEach(b=>b.onclick=()=>{ magicElementTab=b.dataset.magicTab; render(); });
  $$('[data-war-tab]').forEach(b=>b.onclick=()=>{ warTab=b.dataset.warTab; render(); });
  $$('[data-add-squad-unit]').forEach(b=>b.onclick=()=>addSquadUnit(b.dataset.addSquadUnit));
  $$('[data-remove-squad-unit]').forEach(b=>b.onclick=()=>removeSquadUnit(b.dataset.removeSquadUnit));
  $$('[data-inc-land]').forEach(b=>b.onclick=()=>{ const inp=$(`#exp_${b.dataset.incLand}`); if(inp){ inp.value=Math.max(0,parseInt(inp.value||0,10)+1); } });
  $$('[data-event-choice]').forEach(b=>b.onclick=()=>{ const [id,idx]=b.dataset.eventChoice.split('|'); applyEventChoice(id, Number(idx)); });
  $$('[data-world-tab]').forEach(b=>b.onclick=()=>{ S.campaignWorld=Number(b.dataset.worldTab); render(); });
  $$('[data-mission-v12]').forEach(b=>b.onclick=()=>doMission(b.dataset.missionV12));
  const e=$('#exploreBtn'); if(e) e.onclick=doExplore;
  initCompactTotals(); bindGlobalTooltips(); refreshAdvanceButtons();
};
initNav = function(){ const n=$('#nav'); n.innerHTML=NAV.map(([k,v])=>{ let badge=''; if(k==='overview'&&(pendingClaims()||pendingEvents())) badge=`<span class="nav-badge">!</span>`; if(k==='explore'&&(S.queue.some(q=>q.type==='expedition')||hintItems().some(h=>h.page==='explore'))) badge=`<span class="nav-badge">!</span>`; return `<button data-page="${k}">${v}${badge}</button>`; }).join(''); n.onclick=e=>{ const b=e.target.closest('[data-page]'); if(!b) return; page=b.dataset.page; render(); }; };

/* ===== v11 economy + unlock overhaul ===== */
const _baseInitialState_v11 = initialState;
initialState = function(){
  const s = _baseInitialState_v11();
  s.resources = {...s.resources, meat:6000, gold:2600};
  delete s.resources.gems;
  s.buildings = {...s.buildings, hunting_ground:12, gold_mine:8, ranch:6, stable:4, shipyard:2, aerie:1, granary:2};
  s.news = (s.news||[]).concat([{h:0,text:'Bản v11 bổ sung chuỗi tài nguyên Thịt/Vàng, mở khóa quân theo nghiên cứu và chi phí huấn luyện đa tài nguyên.'}]);
  return s;
};
Object.assign(BUILDINGS, {
  hunting_ground:{name:'Khu săn bắn', land:'forest', group:'economy', desc:'+55 Thịt mỗi giờ.', benefit:'+55 Thịt/giờ', effect:'meat'},
  ranch:{name:'Trại chăn nuôi', land:'plain', group:'economy', desc:'+35 Thịt/giờ và +20 Lương thực/giờ.', benefit:'+35 Thịt/giờ', effect:'ranch'},
  gold_mine:{name:'Mỏ vàng', land:'mountain', group:'economy', desc:'+22 Vàng mỗi giờ.', benefit:'+22 Vàng/giờ', effect:'gold'},
  stable:{name:'Chuồng chiến mã', land:'hill', group:'military', desc:'Điều kiện mở các nhánh Kỵ binh bậc cao.', benefit:'Mở kỵ binh cao cấp', effect:'stable'},
  shipyard:{name:'Xưởng tàu chiến', land:'water', group:'military', desc:'Điều kiện huấn luyện Thủy binh nâng cao.', benefit:'Mở thủy binh cao cấp', effect:'shipyard'},
  aerie:{name:'Tháp phi hành', land:'mountain', group:'military', desc:'Điều kiện huấn luyện Không quân nâng cao.', benefit:'Mở không quân cao cấp', effect:'aerie'},
  granary:{name:'Hầm quân lương', land:'cavern', group:'infra', desc:'Tăng bảo vệ tài nguyên khi bị cướp phá.', benefit:'Tăng sức chứa & bảo vệ kho', effect:'granary'},
  mint:{name:'Xưởng đúc vàng', land:'hill', group:'infra', desc:'+8 Vàng/giờ và tăng uy tín kinh tế.', benefit:'+8 Vàng/giờ', effect:'mint'}
});
Object.assign(TECHS, {
  hunting_methods:{name:'Phương pháp săn bắn',tier:1,cost:520,category:'Kinh tế',desc:'Mở công trình Khu săn bắn và +12% sản lượng Thịt.',req:[]},
  gold_smelting:{name:'Luyện vàng cơ bản',tier:1,cost:560,category:'Kinh tế',desc:'Mở Mỏ vàng và +10% sản lượng Vàng.',req:[]},
  beast_husbandry:{name:'Chăn nuôi quân dụng',tier:2,cost:900,category:'Kinh tế',desc:'Mở Trại chăn nuôi và +15% sản lượng Thịt.',req:['hunting_methods']},
  coin_minting:{name:'Tiền tệ quý kim',tier:2,cost:980,category:'Kinh tế',desc:'Mở Xưởng đúc vàng và +15% sản lượng Vàng.',req:['gold_smelting']},
  infantry_doctrine:{name:'Học thuyết Bộ binh',tier:2,cost:960,category:'Quân sự',desc:'Mở quân Bộ binh bậc II.',req:['barracks_logistics']},
  infantry_elite:{name:'Bộ binh tinh nhuệ',tier:3,cost:1180,category:'Quân sự',desc:'Mở quân Bộ binh bậc III-IV.',req:['infantry_doctrine']},
  infantry_mastery:{name:'Đại quân Bộ binh',tier:4,cost:1480,category:'Quân sự',desc:'Mở quân Bộ binh bậc V.',req:['infantry_elite']},
  cavalry_doctrine:{name:'Học thuyết Kỵ binh',tier:2,cost:980,category:'Quân sự',desc:'Mở quân Kỵ binh bậc II và công trình Chuồng chiến mã.',req:['barracks_logistics']},
  cavalry_elite:{name:'Kỵ binh tinh nhuệ',tier:3,cost:1220,category:'Quân sự',desc:'Mở quân Kỵ binh bậc III-IV.',req:['cavalry_doctrine']},
  cavalry_mastery:{name:'Đại quân Kỵ binh',tier:4,cost:1520,category:'Quân sự',desc:'Mở quân Kỵ binh bậc V.',req:['cavalry_elite']},
  naval_doctrine:{name:'Học thuyết Thủy binh',tier:2,cost:1020,category:'Quân sự',desc:'Mở quân Thủy binh bậc II và Xưởng tàu chiến.',req:['earth_survey']},
  naval_elite:{name:'Thủy binh tinh nhuệ',tier:3,cost:1260,category:'Quân sự',desc:'Mở quân Thủy binh bậc III-IV.',req:['naval_doctrine']},
  naval_mastery:{name:'Đại quân Thủy binh',tier:4,cost:1560,category:'Quân sự',desc:'Mở quân Thủy binh bậc V.',req:['naval_elite']},
  air_doctrine:{name:'Học thuyết Không quân',tier:3,cost:1280,category:'Quân sự',desc:'Mở quân Không quân bậc II và Tháp phi hành.',req:['mana_theory']},
  air_elite:{name:'Không quân tinh nhuệ',tier:4,cost:1580,category:'Quân sự',desc:'Mở quân Không quân bậc III-IV.',req:['air_doctrine']},
  air_mastery:{name:'Đại quân Không quân',tier:5,cost:1920,category:'Quân sự',desc:'Mở quân Không quân bậc V.',req:['air_elite']},
  protected_storage:{name:'Kho ngầm chiến lược',tier:4,cost:1380,category:'Phòng thủ',desc:'Tăng thêm 10% mức tài nguyên được bảo vệ khi bị cướp.',req:['granary_bunker_1']},
  war_forage:{name:'Quân lương dã chiến',tier:3,cost:1120,category:'Quân sự',desc:'Giảm 8% chi phí Lương thực/Thịt khi huấn luyện quân.',req:['beast_husbandry']}
});
BUILDINGS.diamond_mine={name:'Kho bảo vật', land:'cavern', group:'economy', desc:'+12 Vàng mỗi giờ.', benefit:'+12 Vàng/giờ', effect:'gold'};
const RESOURCE_META_V11 = {
  platinum:{label:'Bạch kim'}, gold:{label:'Vàng'}, food:{label:'Lương thực'}, meat:{label:'Thịt'}, lumber:{label:'Gỗ'}, ore:{label:'Quặng'}, mana:{label:'Mana'}
};
function ensureV11State(){
  S.resources = {...initialState().resources, ...(S.resources||{})};
  if(S.resources.meat==null) S.resources.meat = 4500;
  if(S.resources.gold==null) S.resources.gold = 1800;
  if(S.resources.research==null) S.resources.research = 1050;
  delete S.resources.gems;
  S.buildings = {...initialState().buildings, ...(S.buildings||{})};
  ['hunting_ground','gold_mine','ranch','stable','shipyard','aerie','granary','mint'].forEach(k=>{ if(S.buildings[k]==null) S.buildings[k]=0; });
  if(!Array.isArray(S.techs)) S.techs = [];
  if(!Array.isArray(S.news)) S.news = [];
  if(S.version<11){ S.version=11; log('Đã cập nhật lên bản v11: mở tài nguyên Thịt/Vàng, quân cấp cao cần nghiên cứu mới huấn luyện được.'); }
}
const _oldDrawSymbolV11 = drawSymbol;
drawSymbol = function(ctx, icon, w, h, color1='#9ad8bb', color2='#214032'){
  if(icon==='gold'){
    ctx.clearRect(0,0,w,h); ctx.lineWidth=2.2; ctx.lineCap='round'; ctx.lineJoin='round'; ctx.fillStyle='rgba(18,31,42,.9)'; ctx.strokeStyle='rgba(255,255,255,.08)'; roundRect(ctx,1,1,w-2,h-2,10,true,true); ctx.strokeStyle='#f0cd63'; ctx.fillStyle='#f0cd63'; ctx.beginPath(); ctx.arc(w/2,h/2,7,0,Math.PI*2); ctx.stroke(); ctx.beginPath(); ctx.moveTo(10,14); ctx.lineTo(18,14); ctx.moveTo(14,10); ctx.lineTo(14,18); ctx.stroke(); return; }
  if(icon==='meat'){
    ctx.clearRect(0,0,w,h); ctx.lineWidth=2.2; ctx.lineCap='round'; ctx.lineJoin='round'; ctx.fillStyle='rgba(18,31,42,.9)'; ctx.strokeStyle='rgba(255,255,255,.08)'; roundRect(ctx,1,1,w-2,h-2,10,true,true); ctx.strokeStyle='#ff927d'; ctx.fillStyle='#ff927d'; ctx.beginPath(); ctx.arc(13,14,6,0,Math.PI*2); ctx.stroke(); ctx.beginPath(); ctx.arc(19,11,2.5,0,Math.PI*2); ctx.stroke(); return; }
  _oldDrawSymbolV11(ctx, icon, w, h, color1, color2);
};
const _baseProductionV11 = production;
production = function(){
  let food=S.buildings.farm*80+S.buildings.dock*40+S.buildings.ranch*20;
  let lumber=S.buildings.lumberyard*50;
  let platinum=S.buildings.alchemy*45;
  let ore=S.buildings.ore_mine*60;
  let mana=S.buildings.tower*25+S.buildings.wizard_guild*5;
  let research=Math.max(0,S.buildings.school*(1-S.buildings.school/Math.max(1,totalLand())));
  let boats=S.buildings.dock*.05;
  let meat=S.buildings.hunting_ground*55 + S.buildings.ranch*35;
  let gold=S.buildings.gold_mine*22 + S.buildings.mint*8 + (S.buildings.diamond_mine||0)*12;
  if(techDone('farmers_growth')) food*=1.10;
  if(techDone('fruits_of_labor')) lumber*=1.20;
  if(techDone('ore_processing')) ore*=1.15;
  if(techDone('mana_theory')) mana*=1.12;
  if(techDone('academy_method')) research*=1.25;
  if(techDone('hunting_methods')) meat*=1.12;
  if(techDone('beast_husbandry')) meat*=1.15;
  if(techDone('gold_smelting')) gold*=1.10;
  if(techDone('coin_minting')) gold*=1.15;
  if(activeBuff('gaia')){ food*=1.15; lumber*=1.15; }
  if(activeBuff('midas')) platinum*=1.08*(techDone('spell_weaving')?1.08:1);
  if(activeBuff('earth_spirit')) ore*=1.20;
  const population=S.peasants+S.draftees+S.spies+S.wizards+armyCount();
  const foodUse=population*.25;
  return {platinum, gold, food:food-foodUse, meat, lumber, mana, ore, research, boats, foodGross:food, foodUse};
};
currentSnapshot = function(){
  return { platinum:S.resources.platinum, gold:S.resources.gold||0, food:S.resources.food, meat:S.resources.meat||0, lumber:S.resources.lumber, ore:S.resources.ore, mana:S.resources.mana };
};
resourceBar = function(){
  const p=production();
  const items=['platinum','gold','food','meat','lumber','ore','mana'].map(k=>({key:k,label:RESOURCE_META_V11[k].label,value:Number(S.resources[k]||0),hourly:(p[k]??null)}));
  $('#resourceBar').innerHTML = items.map(item=>{
    const deltaValue = lastResourceSnapshot ? Math.round(item.value - (lastResourceSnapshot[item.key] ?? item.value)) : 0;
    const bubble = deltaValue !== 0 ? `<div class="float-num ${deltaValue>=0?'up':'down'}">${deltaValue>=0?'+':''}${fmt(deltaValue)}</div>` : '';
    return `<div class="resource" data-resource="${item.key}">${bubble}<div class="resource-head"><canvas class="mini-canvas" data-icon="${item.key}" width="28" height="28"></canvas><div><div class="label">${item.label}</div><div class="value">${fmt(item.value)}</div></div></div><div class="delta ${item.hourly>=0?'positive':'negative'}">${item.hourly>=0?'+':''}${fmt(item.hourly,0)}/giờ</div></div>`;
  }).join('');
};
const _oldAdvanceV11 = advance;
advance = function(hours){
  hours=Math.max(1,Math.floor(hours));
  for(let i=0;i<hours;i++){
    S.hour++;
    const p=production();
    ['platinum','gold','meat','lumber','mana','ore','research','boats'].forEach(k=>{ S.resources[k]=(S.resources[k]||0)+(p[k]||0); });
    S.resources.food=Math.max(0, (S.resources.food||0)+p.food);
    const cap=maxPeasants();
    const templeBonus=1+Math.min(.6,(S.buildings.temple/Math.max(1,totalLand()))*6);
    const growth=Math.max(0,Math.floor(S.peasants*.003*templeBonus));
    S.peasants=Math.min(cap,S.peasants+growth);
    const draftRate=.003*(activeBuff('old_forest')?1.10:1);
    const draft=Math.min(S.peasants, Math.max(0, Math.floor(S.peasants*draftRate)));
    S.peasants-=draft; S.draftees+=draft;
    S.morale=Math.min(100,S.morale+0.35);
    S.resources.food*=.99; S.resources.lumber*=.99; S.resources.meat*=.997; S.resources.gold*=.999;
    S.bank*=1.0005;
    if(S.hour%6===0) evolveRivals();
    processQueue();
    maybeAiRaid();
    if(S.resources.food<=0){ S.morale=Math.max(0,S.morale-4); S.peasants=Math.max(0,Math.floor(S.peasants*.995)); }
  }
  save(true); render(); toast(`Đã mô phỏng ${hours} giờ · ${timeLabel()}`);
};
const _baseStorageProtectionV11 = storageProtection;
storageProtection = function(){ return Math.min(.85, _baseStorageProtectionV11() + (S.buildings.granary||0)*0.01 + (techDone('protected_storage')?.10:0)); };
maybeAiRaid = function(){
  S.lastAiRaidHour = Number(S.lastAiRaidHour||0);
  if(S.hour<24 || S.hour%24!==0) return;
  if(S.hour - S.lastAiRaidHour < 48) return;
  if(Math.random()>=.11) return;
  const rival=S.rivals[Math.floor(Math.random()*Math.min(6,S.rivals.length))];
  const atk=rival.off*(.82+Math.random()*.25);
  const def=combatPower(rival.spellElement,rival.branch).def*(.92+Math.random()*.18);
  S.lastAiRaidHour=S.hour;
  const prot=storageProtection();
  if(atk>def){
    const ratio=Math.max(.03,.20*(1-prot));
    const loot={};
    ['platinum','food','lumber','ore','mana','gold','meat'].forEach(k=>{ loot[k]=Math.floor((S.resources[k]||0)*ratio); S.resources[k]=Math.max(0,(S.resources[k]||0)-loot[k]); });
    log(`Cảnh báo: ${rival.name} tập kích thành công, cướp ${fmt(loot.platinum)} Bạch kim, ${fmt(loot.food)} Lương thực, ${fmt(loot.meat)} Thịt, ${fmt(loot.lumber)} Gỗ, ${fmt(loot.ore)} Quặng, ${fmt(loot.gold)} Vàng và ${fmt(loot.mana)} Mana.`);
    toast('Bị AI tập kích. Xem Tin tức để biết thiệt hại.');
  }else{
    const gain={platinum:Math.floor((rival.wealth||0)*.20), food:Math.floor((rival.food||0)*.20), meat:Math.floor((rival.food||0)*.08), ore:Math.floor((rival.wealth||0)*.06), lumber:Math.floor((rival.wealth||0)*.04), gold:Math.floor((rival.wealth||0)*.02), mana:Math.max(20,Math.floor((rival.wealth||0)*.01))};
    Object.keys(gain).forEach(k=>S.resources[k]=(S.resources[k]||0)+gain[k]);
    rival.wealth=Math.max(0,(rival.wealth||0)-gain.platinum); rival.food=Math.max(0,(rival.food||0)-gain.food);
    log(`Phản kích thành công cuộc tập kích của ${rival.name}. Thu được ${fmt(gain.platinum)} Bạch kim, ${fmt(gain.food)} Lương thực, ${fmt(gain.meat)} Thịt, ${fmt(gain.lumber)} Gỗ, ${fmt(gain.ore)} Quặng, ${fmt(gain.gold)} Vàng và ${fmt(gain.mana)} Mana.`);
    toast('Đã đánh lui AI và thu chiến lợi phẩm.');
  }
};
function formatCost(cost){
  return Object.entries(cost).filter(([,v])=>Number(v)>0).map(([k,v])=>`${fmt(v)} ${RESOURCE_META_V11[k]?.label||k}`).join(' + ');
}
function scaleCost(cost, qty){ const out={}; Object.entries(cost).forEach(([k,v])=>out[k]=Math.ceil(v*qty)); return out; }
function hasCost(cost){ return Object.entries(cost).every(([k,v])=>(S.resources[k]||0)>=v); }
function payCost(cost){ Object.entries(cost).forEach(([k,v])=>{ S.resources[k]=Math.max(0,(S.resources[k]||0)-v); }); }
function branchTechKey(branch,tier){
  const map={
    infantry:{2:'infantry_doctrine',3:'infantry_elite',4:'infantry_elite',5:'infantry_mastery'},
    cavalry:{2:'cavalry_doctrine',3:'cavalry_elite',4:'cavalry_elite',5:'cavalry_mastery'},
    navy:{2:'naval_doctrine',3:'naval_elite',4:'naval_elite',5:'naval_mastery'},
    air:{2:'air_doctrine',3:'air_elite',4:'air_elite',5:'air_mastery'}
  };
  return map[branch]?.[tier] || null;
}
function branchBuildingReq(branch,tier){
  if(branch==='cavalry' && tier>=2) return ['stable','Chuồng chiến mã'];
  if(branch==='navy' && tier>=2) return ['shipyard','Xưởng tàu chiến'];
  if(branch==='air' && tier>=2) return ['aerie','Tháp phi hành'];
  return null;
}
function unitRequirementText(u){
  const t=unitTier(u); if(t<=1) return 'Mở sẵn';
  const parts=[]; const tech=branchTechKey(u.branch,t); if(tech) parts.push(TECHS[tech]?.name||tech); const b=branchBuildingReq(u.branch,t); if(b && !(S.buildings[b[0]]>0)) parts.push(b[1]);
  return parts.join(' + ');
}
function unitUnlockedV11(u){
  const t=unitTier(u); if(t<=1) return true;
  const tech=branchTechKey(u.branch,t); if(tech && !techDone(tech)) return false;
  const b=branchBuildingReq(u.branch,t); if(b && !(S.buildings[b[0]]>0)) return false;
  return true;
}
effectiveUnitCost = function(u,disc=smithyDiscount()){
  const t=unitTier(u), power=(u.off*1.28+u.def*1.1), m=[0,0.92,1.08,1.28,1.58,1.92][t];
  const c={};
  if(u.branch==='infantry'){ c.platinum=power*14*m; c.food=power*6*m; if(['Kim','Thổ'].includes(u.element)) c.ore=power*4*m; else c.lumber=power*4*m; if(u.element==='Hỏa') c.meat=power*2.1*m; }
  if(u.branch==='cavalry'){ c.platinum=power*15*m; c.food=power*4*m; c.meat=power*6.5*m; if(['Kim','Thổ'].includes(u.element)) c.ore=power*3.6*m; else c.lumber=power*3*m; }
  if(u.branch==='navy'){ c.platinum=power*16*m; c.food=power*4*m; c.lumber=power*8*m; if(['Kim','Thổ'].includes(u.element)) c.ore=power*3.5*m; if(u.element==='Hỏa') c.mana=power*1.4*m; }
  if(u.branch==='air'){ c.platinum=power*17*m; c.food=power*3*m; c.meat=power*3*m; c.mana=power*5*m; if(['Kim','Thổ'].includes(u.element)) c.ore=power*3*m; else c.lumber=power*3.5*m; }
  if(u.element==='Thủy') c.mana=(c.mana||0)+power*1.1*m;
  if(u.element==='Hỏa') c.gold=(c.gold||0)+power*(t>=4?1.6:.8)*m;
  if(u.element==='Kim' && t>=4) c.gold=(c.gold||0)+power*1.3*m;
  if(['cavalry','air'].includes(u.branch) && t>=4) c.gold=(c.gold||0)+power*1.5*m;
  const foodFactor = techDone('war_forage')?0.92:1;
  return Object.fromEntries(Object.entries(c).map(([k,v])=>[k, Math.max(1, Math.ceil(v*(1-disc)*(k==='food'||k==='meat'?foodFactor:1)/10))]));
};
initCompactTotals = function(){
  $$('input[data-kind="build"]').forEach(inp=>{
    const update=()=>{ const q=Math.max(1,parseInt(inp.value||1,10)); inp.value=q; const p=Number(inp.dataset.baseP||0), l=Number(inp.dataset.baseL||0); const el=$(`#build_total_${inp.dataset.key}`); if(el) el.textContent=`${fmt(p*q)} Bạch kim + ${fmt(l*q)} Gỗ`; };
    inp.oninput=update; update();
  });
  $$('input[data-kind="train"]').forEach(inp=>{
    const update=()=>{ const q=Math.max(1,parseInt(inp.value||1,10)); inp.value=q; const costs={}; String(inp.dataset.costs||'').split('|').filter(Boolean).forEach(part=>{ const [k,v]=part.split(':'); costs[k]=Number(v||0)*q; }); const el=$(`#train_total_${inp.dataset.key}`); if(el) el.textContent=formatCost(costs); };
    inp.oninput=update; update();
  });
};
function buildingReqTextV11(k){ const map={hunting_ground:'Phương pháp săn bắn', ranch:'Chăn nuôi quân dụng', gold_mine:'Luyện vàng cơ bản', mint:'Tiền tệ quý kim', stable:'Học thuyết Kỵ binh', shipyard:'Học thuyết Thủy binh', aerie:'Học thuyết Không quân'}; return map[k]||''; }
doBuild = function(k){
  ensureV11State();
  const req=buildingReqTextV11(k);
  if(req && !Object.values(TECHS).some(t=>t.name===req && techDone(Object.keys(TECHS).find(id=>TECHS[id]===t)))){}
  const lockMap={hunting_ground:'hunting_methods', ranch:'beast_husbandry', gold_mine:'gold_smelting', mint:'coin_minting', stable:'cavalry_doctrine', shipyard:'naval_doctrine', aerie:'air_doctrine'};
  if(lockMap[k] && !techDone(lockMap[k])) return toast(`Chưa mở ${BUILDINGS[k].name}. Cần nghiên cứu: ${TECHS[lockMap[k]].name}.`);
  const q=Math.max(1,parseInt($(`#qty_${k}`)?.value||1,10));
  const b=BUILDINGS[k], c=buildingCost();
  if(q>barren(b.land)) return toast(`Không đủ đất trống loại ${LAND[b.land]}.`);
  if(S.resources.platinum<c.p*q || S.resources.lumber<c.l*q) return toast('Không đủ Bạch kim hoặc Gỗ.');
  S.resources.platinum-=c.p*q; S.resources.lumber-=c.l*q;
  const buildHours=activeBuff('earth_reinforce')?6:12;
  S.queue.push({type:'build',key:k,amount:q,done:S.hour+buildHours});
  log(`Khởi công ${q} ${b.name}; hoàn tất sau ${buildHours} giờ${buildHours===6?' nhờ Đại Địa Gia Cố':''}.`);
  save(true); render(); toast(`Đã đặt xây ${q} ${b.name} · ${buildHours} giờ.`);
};
renderMilitary = function(){
  ensureV5State(); ensureV11State();
  const disc=smithyDiscount(), cap=armyCapacity();
  const units=UNIT_LIST.filter(u=>u.branch===militaryTab);
  const training=S.queue.filter(q=>q.type==='train');
  const tierColors={1:'#9fb0bf',2:'#7fd4a8',3:'#77b5ff',4:'#e2c18a',5:'#ffb37f',6:'#ff8d7d'};
  const trainingHtml=training.length?training.map(q=>{const u=UNITS[q.key];const pct=queueProgressPct({start:q.start??Math.max(0,q.done-6),done:q.done});return `<div class="train-progress-item"><div class="progress-head"><div><b style="color:${ELEMENT_META[u.element].color}">${u.name}</b><div class="small muted">${fmt(q.amount)} quân · còn ${Math.max(0,q.done-S.hour)} giờ</div></div><b>${pct}%</b></div><div class="mini-progress"><span style="width:${pct}%"></span></div></div>`;}).join(''):'<div class="muted">Chưa có lệnh huấn luyện nào.</div>';
  const unlocked=unlockedSquadCount();
  const squads=visibleSquads();
  const squadHtml=squads.map((sq,idx)=>{
    const entries=Object.entries(sq.composition||{}).filter(([,q])=>Number(q)>0);
    const options=UNIT_LIST.filter(u=>unitUnlockedV11(u) && (availableUnitCount(u.id)>0)).map(u=>`<option value="${u.id}">${u.name} · có thể dùng ${fmt(availableUnitCount(u.id))}</option>`).join('');
    return `<details class="squad-builder" ${idx===0?'open':''}><summary><div><b>${sq.name}</b><div class="small muted">${squadSummary(sq)}</div></div><div class="squad-score">${fmt(squadUnitCount(sq))} quân · Sức mạnh ${fmt(squadPower(sq))}</div></summary><div class="squad-builder-body">${entries.length?`<div class="formation-list">${entries.map(([id,q])=>{const u=UNITS[id];return `<div class="formation-line"><span style="color:${ELEMENT_META[u.element].color}">${u.name}</span><b>× ${fmt(q)}</b><button class="icon-remove" data-remove-squad-unit="${sq.id}|${id}" ${sq.status==='busy'?'disabled':''}>×</button></div>`;}).join('')}</div>`:'<div class="muted">Đội này chưa có quân.</div>'}<div class="formation-add"><select class="compact-input squad-unit-select" id="squad_unit_${sq.id}" ${sq.status==='busy'?'disabled':''}><option value="">Chọn quân available...</option>${options}</select><input class="compact-input narrow" id="squad_qty_${sq.id}" type="number" min="1" value="10" ${sq.status==='busy'?'disabled':''}><button class="btn" data-add-squad-unit="${sq.id}" ${sq.status==='busy'?'disabled':''}>Thêm</button></div>${sq.status==='busy'?`<div class="small warning">Đội đang bận: ${sq.target}. Không thể đổi đội hình.</div>`:''}</div></details>`;
  }).join('');
  const lockedLines=Array.from({length:5-unlocked}, (_,i)=>{ const no=unlocked+i+1; return `<div class="locked-squad-line">Đội ${no} đang khóa · ${teamUnlockHints()[no]||'Chưa mở'}</div>`; }).join('');
  return `<div class="grid military-main-grid">
    ${card('Huấn luyện quân',`<div class="tabs military-tabs">${Object.entries(BRANCH_META).map(([k,v])=>`<button class="btn ${militaryTab===k?'active':''}" data-military-tab="${k}"><canvas class="tab-icon" data-icon="${v.icon}" width="18" height="18"></canvas> ${v.name}</button>`).join('')}</div><div style="height:10px"></div><div class="section-note"><b>Phân tầng quân:</b> quân bậc cao cần <b>nghiên cứu</b> và một số nhánh còn cần <b>công trình chuyên dụng</b> mới huấn luyện được. Chi phí huấn luyện đã đổi sang hệ <b>đa tài nguyên</b> để tạo bài toán chiến lược rõ hơn.</div><div class="element-legend">${Object.keys(ELEMENT_META).map(el=>`<span class="element-chip" style="color:${ELEMENT_META[el].color};border-color:${ELEMENT_META[el].color}55">${el}</span>`).join('')}</div><div class="compact-list military-list">${units.map(u=>{const cost=effectiveUnitCost(u,disc),tier=unitTier(u),ok=unitUnlockedV11(u),req=unitRequirementText(u),tip=compactTooltip(u.name,[['Bậc',`<span style="color:${tierColors[tier]}">Bậc ${tierLabel(tier)}</span>`],['Hệ',`<span style="color:${ELEMENT_META[u.element].color}">${u.element}</span>`],['Vai trò',u.role],['Mô tả',u.desc],['Công / Thủ',`${u.off} / ${u.def}`],['Mạnh hơn',`<span style="color:${ELEMENT_META[u.strong].color}">${u.strong}</span>`],['Yếu hơn',`<span style="color:${ELEMENT_META[u.weak].color}">${u.weak}</span>`],['Mở khóa',ok?'Đã mở':req],['Giá 1 đơn vị',formatCost(cost)]]); const dataCosts=Object.entries(cost).map(([k,v])=>`${k}:${v}`).join('|'); return `<div class="compact-row ${ok?'':'locked-row'}"><div class="row-main"><div class="row-name hover-tip-target"><canvas class="unit-badge" data-branch="${u.branch}" data-element="${u.element}" width="28" height="28"></canvas><div><div class="unit-title-line"><b style="color:${ELEMENT_META[u.element].color}">${u.name}</b><span class="tier-badge" style="color:${tierColors[tier]};border-color:${tierColors[tier]}66">Bậc ${tierLabel(tier)}</span>${ok?'':`<span class="tier-badge" style="color:#ffb37f;border-color:#ffb37f66">Chưa mở</span>`}</div><div class="small muted"><span style="color:${ELEMENT_META[u.element].color}">Hệ ${u.element}</span> · Công ${u.off} / Thủ ${u.def} · ${u.role}${ok?'':` · Yêu cầu: ${req}`}</div></div>${tip}</div></div><div class="row-side"><div class="inline-info muted">Đang có: <b>${fmt(S.units[u.id])}</b></div><label class="sl-wrap">SL<input id="unit_${u.id}" class="compact-input narrow" data-kind="train" data-key="${u.id}" data-costs="${dataCosts}" type="number" min="1" value="10" ${ok?'':'disabled'}></label><div class="price-box" id="train_total_${u.id}">${formatCost(scaleCost(cost,10))}</div><button class="btn ${ok?'':'ghost'}" data-train="${u.id}" ${ok?'':'disabled'}>${ok?'Huấn luyện':'Chưa mở'}</button></div></div>`;}).join('')}</div>`)}
    <div class="military-side-stack">
      ${card('Sức mạnh hiện tại',(()=>{const p=combatPower();return `<div class="kpi-row"><div class="kpi"><div class="tag">Công tổng</div><div class="n">${fmt(p.off)}</div></div><div class="kpi"><div class="tag">Thủ tổng</div><div class="n">${fmt(p.def)}</div></div><div class="kpi"><div class="tag">Dự bị</div><div class="n">${fmt(S.draftees)}</div></div><div class="kpi"><div class="tag">Sức chứa</div><div class="n">${fmt(armyCount())}/${fmt(cap)}</div></div></div><div class="stat-line"><span>Thịt còn lại</span><b>${fmt(S.resources.meat||0)}</b></div><div class="stat-line"><span>Vàng còn lại</span><b>${fmt(S.resources.gold||0)}</b></div><div class="small muted" style="margin-top:8px">Liên đội đã mở: <b>${unlocked}/5</b>. Muốn mở thêm hãy nghiên cứu <b>Liên đội II-V</b> ở trang Nghiên cứu.</div>`;})())}
      <details class="right-accordion" open><summary><b>Tiến trình huấn luyện</b><span class="pill">${training.length} lệnh</span></summary><div class="right-accordion-body">${trainingHtml}</div></details>
      <details class="right-accordion" open><summary><b>Bảng xếp đội hình</b><span class="pill">${unlocked}/5 đội</span></summary><div class="right-accordion-body"><div class="section-note">Quân phải <b>huấn luyện xong</b> mới xuất hiện trong danh sách available. Một đơn vị quân chỉ được xếp vào <b>một đội</b> tại một thời điểm.</div><div class="squad-builder-list">${squadHtml}${lockedLines?`<div class="locked-squad-box">${lockedLines}</div>`:''}</div></div></details>
    </div>
  </div>`;
};
doTrain = function(id){
  ensureV11State();
  const q=Math.max(1,parseInt($(`#unit_${id}`)?.value||1,10)), u=UNITS[id], disc=smithyDiscount();
  const queued=S.queue.filter(x=>x.type==='train').reduce((a,x)=>a+x.amount,0);
  if(!unitUnlockedV11(u)) return toast(`Chưa mở ${u.name}. Hãy nghiên cứu: ${unitRequirementText(u)}.`);
  if(armyCount()+queued+q > armyCapacity()) return toast('Vượt sức chứa doanh trại.');
  if(S.draftees<q) return toast('Không đủ lính dự bị.');
  const unitCost=effectiveUnitCost(u,disc), total=scaleCost(unitCost,q);
  if(!hasCost(total)) return toast(`Không đủ tài nguyên. Cần: ${formatCost(total)}.`);
  payCost(total); S.draftees-=q;
  const hours=Math.max(3,4+unitTier(u));
  S.queue.push({type:'train',key:id,amount:q,start:S.hour,done:S.hour+hours});
  log(`Huấn luyện ${q} ${u.name} (Bậc ${tierLabel(unitTier(u))}); chi phí ${formatCost(total)}; hoàn tất sau ${hours} giờ.`);
  save(true); render(); toast(`Đã đưa ${u.name} vào hàng chờ ${hours} giờ.`);
};
renderResearch = function(){
  ensureV11State();
  const doneCount=S.techs.length;
  const tiers=[1,2,3,4,5];
  const body=tiers.map(tier=>{
    const items=Object.entries(TECHS).filter(([,t])=>t.tier===tier);
    return `<details class="accordion" ${tier<=2?'open':''}><summary><div><b>Cấp ${tier}</b><div class="small muted">${tier===1?'Nền tảng & tài nguyên':tier===2?'Mở kinh tế và nhánh quân cơ bản':tier===3?'Tinh nhuệ & phòng thủ':tier===4?'Lực lượng cao cấp':'Nội dung cuối nhánh'}</div></div><span class="pill">${items.length} công nghệ</span></summary><div class="compact-list">${items.map(([k,t])=>{const done=techDone(k), unlocked=techUnlocked(k); const reqNames=(t.req||[]).map(id=>TECHS[id]?.name||id).join(', ')||'Không có'; const tip=compactTooltip(t.name,[['Nhóm',t.category],['Hiệu ứng',t.desc],['Chi phí',`${fmt(t.cost)} điểm nghiên cứu`],['Yêu cầu',reqNames],['Trạng thái',done?'Đã nghiên cứu':unlocked?'Có thể nghiên cứu':'Chưa mở']]); return `<div class="compact-row ${!done&&!unlocked?'locked-row':''}"><div class="row-main"><div class="row-name hover-tip-target"><canvas class="unit-badge" data-icon="building" width="28" height="28"></canvas><div><div class="unit-title-line"><b>${t.name}</b><span class="tier-badge" style="color:${['','#7fd4a8','#77b5ff','#e2c18a','#ffb37f','#ff8d7d'][tier]};border-color:${['','#7fd4a855','#77b5ff55','#e2c18a55','#ffb37f55','#ff8d7d55'][tier]}">Cấp ${tier}</span></div><div class="small muted">${t.category} · ${t.desc}</div></div>${tip}</div></div><div class="row-side"><div class="price-box">${fmt(t.cost)} điểm</div>${done?'<span class="pill good">Đã nghiên cứu</span>':unlocked?`<button class="btn primary" data-tech="${k}">Nghiên cứu</button>`:`<span class="pill">Chưa mở</span>`}</div></div>`;}).join('')}</div></details>`;
  }).join('');
  return `<div class="grid two">${card('Công nghệ',`<div class="section-note"><b>Điểm nghiên cứu hiện có:</b> ${fmt(S.resources.research)}. Điểm này sinh ra từ <b>Học viện</b> tại <b>Hang động</b>. Nhánh mới đã mở thêm <b>Thịt/Vàng</b>, công trình chuyên dụng và các học thuyết quân sự theo từng nhánh.</div><div style="height:10px"></div><div class="section-note"><b>Gợi ý lộ trình:</b> Học viện → săn bắn/luyện vàng → học thuyết quân sự → quân tinh nhuệ → liên đội & hầm quân lương.</div><div style="height:12px"></div><div class="accordion-stack">${body}</div>`)}${card('Hiệu quả Học viện',`<div class="metric">+${fmt(production().research,1)}</div><div class="submetric">Điểm nghiên cứu mỗi giờ</div><div class="stat-line"><span>Học viện</span><b>${fmt(S.buildings.school)}</b></div><div class="stat-line"><span>Công nghệ đã mở</span><b>${doneCount}/${Object.keys(TECHS).length}</b></div><div class="stat-line"><span>Đội đã mở</span><b>${unlockedSquadCount()}/5</b></div><div class="stat-line"><span>Bảo vệ khỏi cướp phá</span><b>${fmt(storageProtection()*100)}%</b></div><div class="section-note" style="margin-top:10px"><b>Cách lấy điểm nghiên cứu:</b> xây <b>Học viện</b> ở <b>Hang động</b>. Mỗi giờ game sẽ cộng điểm tự động. Công nghệ <b>Phương pháp học viện</b> còn tăng thêm tốc độ này.</div>`)}</div>`;
};
warTargetTooltip = function(r){
  const clash=activeCombatSpellAgainst(r.spellElement);
  return compactTooltip(r.name,[['Đất',`${fmt(r.land)} mẫu`],['Kho bạc',`${fmt(r.wealth)} Bạch kim`],['Lương thực',fmt(r.food||0)],['Thịt ước tính',fmt(Math.floor((r.food||0)*0.35))],['Vàng ước tính',fmt(Math.floor((r.wealth||0)*0.08))],['Hệ chủ lực',r.element],['Nhánh chủ lực',BRANCH_META[r.branch]?.name||r.branch],['Pháp hệ đối thủ',r.spellElement],['Phòng thủ gốc',fmt(r.def)],['Phòng thủ hiệu dụng',fmt(enemyEffectiveDefense(r))],['Đè phép',clash?`${clash.spell.name}: ${clash.status} ×${clash.scale}`:'Chưa có phép chiến đấu đang hoạt động']]);
};
renderCampaignWar = function(){
  return `<div class="compact-list war-list">${WAR_MISSIONS.map((m,i)=>{ const unlocked=missionUnlocked(i), done=S.completedMissions.includes(m.id); const me=combatPower(m.element,m.branch), enemyDef=m.def; const [risk,cls]=battleRisk(me.off,enemyDef); const tip=compactTooltip(m.name,[['Nhiệm vụ',m.desc],['Hệ đối thủ',m.element],['Nhánh chủ lực',BRANCH_META[m.branch].name],['Phòng thủ',fmt(enemyDef)],['Thưởng Bạch kim',fmt(m.rewardP)],['Thưởng đất',`${m.rewardLand} mẫu`],['Thưởng Mana',fmt(m.rewardMana)],['Tương khắc phép',activeCombatSpellAgainst(m.element)?`${activeCombatSpellAgainst(m.element).status} ×${activeCombatSpellAgainst(m.element).scale}`:'Chưa có phép chiến đấu']]); return `<div class="compact-row ${!unlocked?'locked-row':''}"><div class="row-main"><div class="row-name hover-tip-target"><canvas class="unit-badge" data-branch="${m.branch}" data-element="${m.element}" width="28" height="28"></canvas><div><b style="color:${ELEMENT_META[m.element].color}">${i+1}. ${m.name}</b><div class="small muted">${m.desc}</div></div>${tip}</div></div><div class="row-side"><div class="inline-info">Thủ: <b>${fmt(enemyDef)}</b></div><span class="pill ${cls}">${done?'Đã hoàn tất':unlocked?risk:'Chưa mở'}</span><div class="price-box">+${fmt(m.rewardP)} Bạch kim · +${m.rewardLand} đất · +${fmt(m.rewardMana)} Mana</div><button class="btn ${unlocked&&!done?'primary':''}" data-mission="${m.id}" ${!unlocked||done?'disabled':''}>${done?'Đã thắng':'Xuất quân'}</button></div></div>`; }).join('')}</div>`;
};
renderRivalWar = function(){
  return `<div class="compact-list war-list">${S.rivals.map((r,i)=>{ const me=combatPower(r.spellElement,r.branch), ed=enemyEffectiveDefense(r), [risk,cls]=battleRisk(me.off,ed); return `<div class="compact-row"><div class="row-main"><div class="row-name hover-tip-target"><canvas class="unit-badge" data-branch="${r.branch}" data-element="${r.element}" width="28" height="28"></canvas><div><b style="color:${ELEMENT_META[r.element].color}">${r.name}</b><div class="small muted">${fmt(r.land)} mẫu · ${BRANCH_META[r.branch].name} · Nhóm ${r.aiTier||'Trung bình'}</div></div>${warTargetTooltip(r)}</div></div><div class="row-side"><div class="inline-info">Thủ hiệu dụng: <b>${fmt(ed)}</b></div><span class="pill ${cls}">${risk}</span><div class="price-box">Kho bạc ~${fmt(r.wealth)}</div><button class="btn ${risk==='Có lợi'?'primary':''}" data-attack="${i}">Tấn công</button></div></div>`; }).join('')}</div>`;
};
doAttack = function(i){
  const r=S.rivals[i]; if(!r) return;
  if(armyCount()<50) return toast('Cần ít nhất 50 quân chính quy để tấn công.');
  if(S.morale<25) return toast('Sĩ khí quá thấp để xuất quân.');
  const me=combatPower(r.spellElement,r.branch), enemyDef=enemyEffectiveDefense(r), clash=activeCombatSpellAgainst(r.spellElement);
  const attack=me.off*(.92+Math.random()*.18), defense=enemyDef*(.96+Math.random()*.08);
  if(attack>defense){
    const ratio=.20;
    const loot={platinum:Math.floor((r.wealth||0)*ratio), food:Math.floor((r.food||0)*ratio), meat:Math.floor((r.food||0)*.08), gold:Math.floor((r.wealth||0)*.02), lumber:Math.floor((r.wealth||0)*.04), ore:Math.floor((r.wealth||0)*.06), mana:Math.max(30,Math.floor((r.wealth||0)*.01))};
    Object.entries(loot).forEach(([k,v])=>S.resources[k]=(S.resources[k]||0)+v);
    const landGain=applyVictoryRewards(r,0,Math.max(2,Math.round(r.land*.03)));
    const loss=(.04+Math.random()*.06)*lossMultiplier(); loseArmy(Math.min(.18,loss)); S.morale=Math.max(0,S.morale-4); r.wealth=Math.max(0,(r.wealth||0)-loot.platinum); r.food=Math.max(0,(r.food||0)-loot.food); S.prestige+=18;
    log(`Đánh thắng ${r.name}: cướp ${fmt(loot.platinum)} Bạch kim, ${fmt(loot.food)} Lương thực, ${fmt(loot.meat)} Thịt, ${fmt(loot.lumber)} Gỗ, ${fmt(loot.ore)} Quặng, ${fmt(loot.gold)} Vàng, ${fmt(loot.mana)} Mana và chiếm ${landGain} đất.${clash?` Đè phép: ${clash.status} ×${clash.scale}.`:''}`);
    toast(`Đã đánh bại ${r.name}.`);
  }else{
    const loss=(.09+Math.random()*.08)*lossMultiplier(); loseArmy(Math.min(.28,loss)); S.morale=Math.max(0,S.morale-10);
    log(`Tấn công ${r.name} thất bại; tổn thất khoảng ${fmt(Math.min(.28,loss)*100,1)}%.`); toast('Thất bại. Cần củng cố quân lực hoặc dùng phép phù hợp.');
  }
  save(true); render();
};
const _resetBtnOldV11 = $('#resetBtn');

/* ===== v12: 10 thế giới, phép ẩn, khóa phép, sắp xếp ưu tiên, cố vấn thất bại ===== */
const CAMPAIGN_WORLDS_V12 = [
  {id:'mist_border',name:'Biên Cương Sương Mù',element:'Thủy',branch:'infantry',terrain:'Biên giới sương lạnh',specialty:'lumber',specialtyName:'Gỗ',research:0,days:'1–9',hidden:'mist_seal',intro:'Biên thùy bị sơn tặc và thám báo che phủ bởi sương mù.',missions:[
    ['Dẹp loạn tiền đồn','Quét sạch toán cướp đang uy hiếp đường vận lương.'],['Hộ tống thương lộ','Bảo vệ đoàn xe vượt qua vùng sương dày.'],['Phá trại cướp đêm','Đột kích cứ điểm trước khi đối thủ kịp tập hợp.'],['Mở lại mỏ cổ','Giành quyền kiểm soát tuyến khai thác bị bỏ hoang.'],['Bao vây Thành Gỗ','Bẻ gãy tuyến phòng thủ nhiều lớp bằng chiến thuật phù hợp.'],['Chủ Sương Vân Lãnh','Trùm thế giới: thủ lĩnh sương mù nắm giữ một ấn chú thất truyền.']
  ]},
  {id:'bloodwood',name:'Rừng Máu Huyền Mộc',element:'Mộc',branch:'infantry',terrain:'Rừng cổ thụ',specialty:'meat',specialtyName:'Thịt',research:4,days:'10–18',hidden:'ancient_seed',intro:'Rừng cổ sinh trưởng bất thường, thú dữ và cung thủ du kích chiếm ưu thế.',missions:[
    ['Dọn bãi săn','Giành lại khu săn bắn để bảo đảm quân lương.'],['Cứu đoàn tiều phu','Phá vòng vây quanh đoàn khai thác gỗ.'],['Đốt tổ phục binh','Lật thế trận trước các toán nỏ thủ ẩn trong rừng.'],['Truy vết độc tiễn','Săn đội trinh sát dùng độc và bẫy rừng.'],['Chặt đường rút lui','Khóa các ngả rừng, buộc quân địch giao chiến chính diện.'],['Nữ Vương Mộc Yêu','Trùm thế giới: kẻ điều khiển rừng già và sinh lực cổ thụ.']
  ]},
  {id:'golden_desert',name:'Sa Thành Kim Sa',element:'Kim',branch:'cavalry',terrain:'Sa mạc & ốc đảo',specialty:'gold',specialtyName:'Vàng',research:8,days:'19–27',hidden:'golden_scale',intro:'Các tuyến vàng chạy xuyên sa mạc, nơi kỵ binh và thương hội tranh quyền kiểm soát.',missions:[
    ['Bảo vệ ốc đảo','Giữ nguồn nước và lương thực trước đội kỵ phỉ.'],['Phá bọn cướp cát','Đánh tan đội hình cơ động chuyên cướp đoàn vàng.'],['Tranh tuyến vận vàng','Chiếm tuyến thương vận đem lại Vàng chiến lược.'],['Hạ pháo đài cồn','Công phá thành lũy xây giữa biển cát.'],['Chặn kỵ du mục','Dùng khắc chế thích hợp để khóa xung kích kỵ binh.'],['Vua Cát Khải La','Trùm thế giới: chủ nhân kho vàng và bí thuật cân bằng lợi tức.']
  ]},
  {id:'inferno',name:'Vực Lửa Hỏa Diệm',element:'Hỏa',branch:'cavalry',terrain:'Địa mạch núi lửa',specialty:'ore',specialtyName:'Quặng',research:13,days:'28–36',hidden:'immortal_flame',intro:'Địa mạch nóng đỏ, quân Hỏa thiên về công bùng nổ và phá giáp.',missions:[
    ['Khóa miệng núi lửa','Giữ tuyến công binh trước các đợt bộc hỏa.'],['Giải cứu xưởng rèn','Đoạt lại trung tâm luyện quân khí.'],['Trấn áp cuồng binh','Chống đội hình dồn sát thương trong thời gian ngắn.'],['Phá kho dầu lửa','Cắt nguồn hỏa công của quân địch.'],['Công Hỏa Đài','Vượt tường lửa và phá cứ điểm phòng thủ.'],['Ma Tướng Xích Viêm','Trùm thế giới: chiến tướng dùng hỏa lực vượt ngưỡng thông thường.']
  ]},
  {id:'blue_tide',name:'Hải Quốc Lam Triều',element:'Thủy',branch:'navy',terrain:'Quần đảo & hải cảng',specialty:'food',specialtyName:'Lương thực',research:18,days:'37–45',hidden:'tailwind_banner',intro:'Hải trình rộng mở, thủy binh và tiếp vận quyết định cục diện.',missions:[
    ['Dọn cướp cảng','Mở lại cửa biển cho thương thuyền.'],['Hộ tống hạm thương','Giữ đội vận tải trước thủy quân phục kích.'],['Săn tàu lặn','Phát hiện và tiêu diệt lực lượng phá hoại từ dưới nước.'],['Phá thủy lôi','Mở hành lang an toàn qua vùng biển bị phong tỏa.'],['Vây Hải Thành','Đánh một pháo đài nổi có khả năng tự tiếp tế.'],['Hải Vương Lam Triều','Trùm thế giới: hạm đội trưởng sở hữu Cờ Thuận Phong cổ đại.']
  ]},
  {id:'sky_realm',name:'Thiên Không Vực',element:'Kim',branch:'air',terrain:'Cao nguyên & không vực',specialty:'mana',specialtyName:'Mana',research:23,days:'46–54',hidden:'judgment_feather',intro:'Không chiến trở thành trọng tâm, tốc độ và đòn đánh đầu tiên cực kỳ quan trọng.',missions:[
    ['Mở trạm gió','Chiếm điểm trung chuyển cho phi đoàn.'],['Hộ tống phi đoàn','Bảo vệ đội vận tải trên không.'],['Phá tháp nỏ trời','Loại bỏ tuyến phòng không của đối thủ.'],['Cắt đường tiếp tế mây','Đánh vào hậu cần của pháo đài bay.'],['Công pháo đài bay','Giao chiến dài hơi trong không vực.'],['Chúa Tể Lôi Dực','Trùm thế giới: kẻ làm chủ đòn đánh mở màn từ bầu trời.']
  ]},
  {id:'stone_empire',name:'Đế Quốc Đá Xám',element:'Thổ',branch:'infantry',terrain:'Thành trì đá',specialty:'ore',specialtyName:'Quặng',research:29,days:'55–63',hidden:'endless_wall',intro:'Một đế quốc thiên thủ với thành lũy dày và kho ngầm khổng lồ.',missions:[
    ['Chiếm mỏ đá','Cắt nguồn vật liệu phòng thủ của đối thủ.'],['Mở hầm quân lương','Đánh vào tuyến tiếp tế dưới lòng đất.'],['Bẻ gãy trường thương','Khắc chế tuyến chống xung phong dày đặc.'],['Hạ cổng thành','Phá lớp cửa thành được gia cố bằng quặng.'],['Vây đại pháo đài','Giằng co với thành lũy có khả năng hồi phục.'],['Tể Tướng Nham Thiết','Trùm thế giới: bậc thầy phòng thủ giữ bí pháp Thành Vô Tận.']
  ]},
  {id:'shadow_marsh',name:'Đầm Lầy Hắc Ảnh',element:'Thủy',branch:'infantry',terrain:'Đầm lầy độc sương',specialty:'mana',specialtyName:'Mana',research:35,days:'64–72',hidden:'mirror_water',intro:'Tình báo sai lệch, độc sương và phản phép khiến mọi quyết định đều có rủi ro.',missions:[
    ['Tìm lối rút','Mở một hành lang an toàn giữa đầm độc.'],['Giải lời nguyền sình','Bảo vệ pháp sư khi phá kết giới.'],['Bắt thủ lĩnh độc sương','Truy kích đối thủ chuyên đánh rồi rút.'],['Cứu viện pháp sư','Giữ đội pháp sư sống sót trước phản phép.'],['Phá hồ tế lễ','Vô hiệu nguồn sức mạnh của quân Hắc Ảnh.'],['Mẫu Hậu Bóng Nước','Trùm thế giới: pháp sư phản chiếu hiệu ứng của đối phương.']
  ]},
  {id:'clockwork',name:'Thành Quốc Cơ Quan',element:'Kim',branch:'air',terrain:'Đô thị cơ giới',specialty:'gold',specialtyName:'Vàng',research:41,days:'73–81',hidden:'clockwork_die',intro:'Máy móc, cơ nỏ và biến số ngẫu nhiên làm đảo lộn những kế hoạch quá cứng nhắc.',missions:[
    ['Đột nhập xưởng máy','Đánh nhanh trước khi dây chuyền phòng thủ khởi động.'],['Đoạt bản đồ cơ giới','Tranh quyền kiểm soát mạng lưới thành phố.'],['Phá đội cơ nỏ','Loại bỏ hỏa lực tự động tuyến sau.'],['Chặn đoàn xe thép','Cắt nguồn tiếp tế cơ giới.'],['Bao vây Thành Máy','Đối đầu hệ thống phòng thủ thay đổi theo chu kỳ.'],['Hoàng Đế Đồng Hồ','Trùm thế giới: kẻ sử dụng Cơ Giới Xúc Xắc để bẻ luật trận đấu.']
  ]},
  {id:'void_crown',name:'Vương Miện Hư Không',element:'Hỏa',branch:'air',terrain:'Địa giới cuối cùng',specialty:'platinum',specialtyName:'Bạch kim',research:48,days:'82–90+',hidden:'void_crown',intro:'Thế giới cuối: mọi hệ thống kinh tế, quân sự, phép thuật và đội hình đều bị thử thách.',missions:[
    ['Hồi thu phục địa giới','Ổn định lãnh thổ trước làn sóng hư ảnh.'],['Triệt hạ bốn trụ ấn','Phá các điểm neo giữ kết giới cuối.'],['Giải phong ấn cựu thần','Đánh đội hộ vệ của thực thể cổ.'],['Phản công quân hư ảnh','Chống lực lượng có khả năng sao chép chiến thuật.'],['Công thành cuối cùng','Tập hợp toàn bộ sức mạnh để mở Cổng Hư Không.'],['Vua Không Vực','Trùm cuối: trận chiến được cân chỉnh cho cuối hành trình khoảng 3 tháng của người chơi trung bình khá.']
  ]}
];
const HIDDEN_SPELLS_V12 = {
  mist_seal:{name:'Ấn Sương Vô Ảnh',element:'Thủy',mana:680,hours:5,cooldown:16,desc:'+10% Công, giảm tổn thất và che giấu thế trận trong 5 giờ.',key:'mist_seal',kind:'combat',hidden:true},
  ancient_seed:{name:'Hạt Mầm Cổ Thụ',element:'Mộc',mana:720,hours:6,cooldown:18,desc:'+12% Thủ, giảm tổn thất và tăng nhẹ Thịt/Gỗ trong 6 giờ.',key:'ancient_seed',kind:'combat',hidden:true},
  golden_scale:{name:'Bàn Cân Hoàng Kim',element:'Kim',mana:760,hours:6,cooldown:18,desc:'Tăng 15% Bạch kim/Vàng và chiến lợi phẩm chiến dịch trong 6 giờ.',key:'golden_scale',kind:'economy',hidden:true},
  immortal_flame:{name:'Tim Lửa Bất Diệt',element:'Hỏa',mana:820,hours:3,cooldown:20,desc:'+18% Công nhưng giảm nhẹ Thủ; dành cho các đợt dồn sát thương.',key:'immortal_flame',kind:'combat',hidden:true},
  tailwind_banner:{name:'Cờ Thuận Phong Cổ',element:'Thủy',mana:800,hours:5,cooldown:18,desc:'+12% Công toàn quân, mạnh hơn khi đội hình có Thủy binh.',key:'tailwind_banner',kind:'combat',hidden:true},
  judgment_feather:{name:'Lông Vũ Phán Quyết',element:'Kim',mana:900,hours:4,cooldown:20,desc:'Tăng mạnh sức công khi đội hình có Không quân.',key:'judgment_feather',kind:'combat',hidden:true},
  endless_wall:{name:'Khiên Thành Vô Tận',element:'Thổ',mana:920,hours:6,cooldown:22,desc:'+22% Thủ và giảm mạnh tổn thất/phần tài nguyên có thể bị cướp.',key:'endless_wall',kind:'combat',hidden:true},
  mirror_water:{name:'Bóng Nước Phản Ảnh',element:'Thủy',mana:940,hours:4,cooldown:22,desc:'Tăng hiệu quả khi đối đầu Hỏa/Kim và giảm tổn thất phản kích.',key:'mirror_water',kind:'combat',hidden:true},
  clockwork_die:{name:'Xúc Xắc Cơ Giới',element:'Kim',mana:980,hours:6,cooldown:22,desc:'Mỗi lần dùng tạo một biến số chiến thuật ngẫu nhiên trong 6 giờ.',key:'clockwork_die',kind:'utility',hidden:true},
  void_crown:{name:'Vương Miện Hư Không',element:'Hỏa',mana:1200,hours:4,cooldown:24,desc:'+25% Công, +12% Thủ và giảm tổn thất; phần thưởng cuối hành trình.',key:'void_crown',kind:'combat',hidden:true}
};
Object.assign(SPELLS,HIDDEN_SPELLS_V12);
const NORMAL_SPELL_REQ_V12={
  midas:'coin_minting',quartz_shield:'fortification',magnetic_array:'smithing_mastery',gaia:'farmers_growth',old_forest:'hunting_methods',ancient_vitality:'infantry_doctrine',mist_illusion:'mana_theory',tailwind:'naval_doctrine',ice_array:'spell_weaving',ares:'disciplined_army',hellfire:'war_engineering',burn_food:'war_engineering',earth_spirit:'earth_survey',great_wall:'fortification',stone_quake:'granary_bunker_1',earth_reinforce:'efficient_build'
};
function ensureV12State(){
  ensureV11State();
  S.unlockedHiddenSpells=Array.isArray(S.unlockedHiddenSpells)?S.unlockedHiddenSpells:[];
  S.campaignWorld=Number.isInteger(S.campaignWorld)?S.campaignWorld:0;
  S.campaignVictories=Number(S.campaignVictories||0);
  S.version=12;
}
function spellUnlockedV12(k,s){
  if(s.hidden) return S.unlockedHiddenSpells.includes(k);
  const req=NORMAL_SPELL_REQ_V12[k];
  return !req || techDone(req);
}
function spellRequirementV12(k,s){
  if(s.hidden) return S.unlockedHiddenSpells.includes(k)?'Đã tìm thấy':'Phép ẩn của một Trùm Thế Giới';
  const req=NORMAL_SPELL_REQ_V12[k];
  return req?(TECHS[req]?.name||req):'Mở sẵn';
}
function campaignMissionsV12(){
  const out=[]; let idx=0;
  CAMPAIGN_WORLDS_V12.forEach((w,wi)=>w.missions.forEach((pair,mi)=>{
    const boss=mi===5;
    let def=2200*Math.pow(1.095,idx)*(boss?1.12:1);
    def=Math.round(def/100)*100;
    const rewardP=Math.round((18000*Math.pow(1.052,idx))/100)*100;
    const rewardLand=4+Math.floor(idx/4)+(boss?3:0);
    const rewardMana=110+Math.floor(idx*12)+(boss?100:0);
    const special=Math.round((350+idx*80)*(boss?1.5:1));
    out.push({id:`${w.id}_${mi+1}`,world:wi,stage:mi+1,name:pair[0],desc:pair[1],def,element:w.element,branch:w.branch,boss,rewardP,rewardLand,rewardMana,specialKey:w.specialty,specialName:w.specialtyName,specialReward:special,sideType:idx%3,hidden:w.hidden});
    idx++;
  }));
  return out;
}
const CAMPAIGN_MISSIONS_V12=campaignMissionsV12();
function worldBossIdV12(wi){ return `${CAMPAIGN_WORLDS_V12[wi].id}_6`; }
function worldUnlockedV12(wi){
  if(wi===0) return true;
  return S.completedMissions.includes(worldBossIdV12(wi-1)) && S.techs.length>=CAMPAIGN_WORLDS_V12[wi].research;
}
function missionUnlockedV12(m){
  if(!worldUnlockedV12(m.world)) return false;
  if(m.stage===1) return true;
  return S.completedMissions.includes(`${CAMPAIGN_WORLDS_V12[m.world].id}_${m.stage-1}`);
}
function worldProgressV12(wi){ return CAMPAIGN_MISSIONS_V12.filter(m=>m.world===wi&&S.completedMissions.includes(m.id)).length; }
function sideObjectiveV12(m){
  if(m.sideType===0) return {text:'Giữ tổn thất dưới 8%',check:(loss,spell)=>loss<.08,bonus:`+${fmt(Math.round(m.specialReward*.45))} ${m.specialName}`};
  if(m.sideType===1) return {text:'Chiến thắng không dùng phép chiến đấu',check:(loss,spell)=>!spell,bonus:`+${fmt(Math.round(m.rewardMana*.5))} Mana`};
  return {text:'Xuất trận với sĩ khí từ 80% trở lên',check:(loss,spell)=>S.morale>=80,bonus:`+${fmt(Math.round(80+m.world*35))} điểm nghiên cứu`};
}
function tacticDataV12(key,m){
  const map={balanced:{name:'Cân bằng',atk:1,loss:1},assault:{name:'Đột kích',atk:1.12,loss:1.18},siege:{name:'Bao vây',atk:m.branch==='infantry'?1.08:.98,loss:.80},feint:{name:'Nghi binh',atk:['cavalry','air'].includes(m.branch)?1.08:.99,loss:.90}};
  return map[key]||map.balanced;
}
function campaignTerrainBonusV12(m){
  const own=branchPower(CAMPAIGN_WORLDS_V12[m.world].branch), total=Math.max(1,Object.keys(BRANCH_META).reduce((a,b)=>a+branchPower(b),0));
  return own/total>=.30?1.08:1;
}
const _combatPowerV12= combatPower;
combatPower=function(enemyElement=null,enemyBranch=null){
  let p=_combatPowerV12(enemyElement,enemyBranch);
  if(activeBuff('mist_seal')){p.off=Math.floor(p.off*1.10);p.def=Math.floor(p.def*1.04);}
  if(activeBuff('ancient_seed')) p.def=Math.floor(p.def*1.12);
  if(activeBuff('immortal_flame')){p.off=Math.floor(p.off*1.18);p.def=Math.floor(p.def*.94);}
  if(activeBuff('tailwind_banner')) p.off=Math.floor(p.off*(unitCountByBranch('navy')>0?1.16:1.12));
  if(activeBuff('judgment_feather')){const ratio=unitCountByBranch('air')/Math.max(1,armyCount());p.off=Math.floor(p.off*(1+Math.min(.20,.10+ratio*.20)));}
  if(activeBuff('endless_wall')) p.def=Math.floor(p.def*1.22);
  if(activeBuff('mirror_water')&&['Hỏa','Kim'].includes(enemyElement)) p.off=Math.floor(p.off*1.16);
  if(activeBuff('void_crown')){p.off=Math.floor(p.off*1.25);p.def=Math.floor(p.def*1.12);}
  if(activeBuff('clockwork_die')){const roll=S.clockworkRoll||'off'; if(roll==='off')p.off=Math.floor(p.off*1.18); if(roll==='def')p.def=Math.floor(p.def*1.18);}
  return p;
};
const _productionV12=production;
production=function(){
  const p=_productionV12();
  if(activeBuff('ancient_seed')){p.meat*=1.10;p.lumber*=1.10;}
  if(activeBuff('golden_scale')){p.platinum*=1.15;p.gold*=1.15;}
  if(activeBuff('clockwork_die')&&S.clockworkRoll==='eco'){p.platinum*=1.18;p.gold*=1.18;}
  return p;
};
const _lossMultiplierV12=lossMultiplier;
lossMultiplier=function(){
  let m=_lossMultiplierV12();
  if(activeBuff('mist_seal'))m*=.90;
  if(activeBuff('ancient_seed'))m*=.88;
  if(activeBuff('endless_wall'))m*=.78;
  if(activeBuff('mirror_water'))m*=.90;
  if(activeBuff('void_crown'))m*=.78;
  return Math.max(.45,m);
};
const _storageProtectionV12=storageProtection;
storageProtection=function(){ return Math.min(.92,_storageProtectionV12()+(activeBuff('endless_wall')?.08:0)); };
function openDefeatAdvisorV12(m,tactic,attack,defense,loss){
  const w=CAMPAIGN_WORLDS_V12[m.world], gap=Math.max(0,Math.ceil((defense*1.10-attack)/Math.max(1,attack)*100));
  const counter=ELEMENT_META[m.element].weak;
  const counterUnits=UNIT_LIST.filter(u=>u.element===counter&&unitUnlockedV11(u)).sort((a,b)=>unitTier(b)-unitTier(a)).slice(0,3).map(u=>u.name);
  const rec=[];
  if(gap>0) rec.push(`Tăng sức công hiệu dụng khoảng <b>${Math.max(8,gap)}%</b> trước lần thử tiếp theo.`);
  if(counterUnits.length) rec.push(`Ưu tiên quân <b>Hệ ${counter}</b>: ${counterUnits.join(', ')} để khai thác tương khắc với Hệ ${m.element}.`);
  const combatSpell=Object.entries(SPELLS).find(([k,s])=>spellUnlockedV12(k,s)&&s.kind==='combat'&&s.element===counter&&cooldownRemaining(s.key)===0);
  if(combatSpell) rec.push(`Có thể dùng <b>${combatSpell[1].name}</b> trước khi xuất trận.`);
  if(tactic.key==='assault'&&loss>.12) rec.push('Đổi từ <b>Đột kích</b> sang <b>Bao vây</b> hoặc <b>Cân bằng</b> để giảm tổn thất.');
  if(S.morale<80) rec.push(`Khôi phục sĩ khí lên khoảng <b>80%+</b>; hiện tại ${fmt(S.morale)}%.`);
  const nextTech=Object.entries(TECHS).filter(([k,t])=>!techDone(k)&&techUnlocked(k)&&['Quân sự','Phòng thủ','Ma pháp'].includes(t.category)).sort((a,b)=>a[1].cost-b[1].cost)[0];
  if(nextTech) rec.push(`Nghiên cứu gần nhất đáng cân nhắc: <b>${nextTech[1].name}</b>.`);
  $('#modalTitle').textContent=`Hội đồng chiến lược · ${m.name}`;
  $('#modalBody').innerHTML=`<div class="defeat-hero"><div class="defeat-title">Chưa vượt qua được ải</div><div class="small muted">${w.name} · Chiến dịch ${m.stage}/6</div></div><div class="advisor-kpis"><div><span>Sức công thực tế</span><b>${fmt(attack)}</b></div><div><span>Phòng thủ đối phương</span><b>${fmt(defense)}</b></div><div><span>Tổn thất</span><b>${fmt(loss*100,1)}%</b></div></div><div class="section-note"><b>Đề xuất lần thử tiếp theo</b></div><div class="advisor-list">${rec.slice(0,5).map(x=>`<div class="advisor-item">${x}</div>`).join('')}</div><div class="advisor-actions"><button class="btn" data-advice-page="military">Quân đội</button><button class="btn" data-advice-page="research">Nghiên cứu</button><button class="btn" data-advice-page="magic">Phép thuật</button></div>`;
  $('#modal').classList.remove('hidden');
  $$('[data-advice-page]').forEach(b=>b.onclick=()=>{page=b.dataset.advicePage;$('#modal').classList.add('hidden');render();});
}
renderMilitary = (function(old){ return function(){
  ensureV12State();
  const original=UNIT_LIST.slice();
  const sorted=UNIT_LIST.filter(u=>u.branch===militaryTab).sort((a,b)=>{
    const ua=unitUnlockedV11(a)?0:1, ub=unitUnlockedV11(b)?0:1;
    return ua-ub || unitTier(a)-unitTier(b) || (a.off+a.def)-(b.off+b.def);
  });
  const backup=UNIT_LIST.filter;
  UNIT_LIST.filter=function(fn){ const arr=Array.prototype.filter.call(original,fn); if(arr.every(u=>u&&u.branch===militaryTab||true)){} return arr; };
  UNIT_LIST.filter=backup;
  const html=old();
  return html;
};})(renderMilitary);
/* V12 render quân đội được thay bằng thao tác sắp xếp mảng tạm thời qua wrapper riêng bên dưới. */
const _renderMilitaryV11=renderMilitary;
renderMilitary=function(){
  const oldList=UNIT_LIST.slice();
  oldList.sort((a,b)=>{
    if(a.branch!==b.branch) return 0;
    const ua=unitUnlockedV11(a)?0:1,ub=unitUnlockedV11(b)?0:1;
    return ua-ub||unitTier(a)-unitTier(b)||(a.off+a.def)-(b.off+b.def);
  });
  const order=new Map(oldList.map((u,i)=>[u.id,i]));
  const nativeFilter=Array.prototype.filter;
  const savedFilter=UNIT_LIST.filter;
  UNIT_LIST.filter=function(fn,thisArg){ return nativeFilter.call(UNIT_LIST,fn,thisArg).sort((a,b)=>(order.get(a.id)||0)-(order.get(b.id)||0)); };
  try{return _renderMilitaryV11();}finally{UNIT_LIST.filter=savedFilter;}
};
function researchStatusV12(k,t){ if(techDone(k))return 1; if(techUnlocked(k)&&S.resources.research>=t.cost)return 0; if(techUnlocked(k))return .5; return 2; }
renderResearch=function(){
  ensureV12State();
  const entries=Object.entries(TECHS).sort((a,b)=>researchStatusV12(a[0],a[1])-researchStatusV12(b[0],b[1])||a[1].tier-b[1].tier||a[1].cost-b[1].cost);
  const groups=[['Có thể nghiên cứu',entries.filter(([k,t])=>!techDone(k)&&techUnlocked(k)),true],['Đã nghiên cứu',entries.filter(([k])=>techDone(k)),false],['Chưa mở',entries.filter(([k,t])=>!techDone(k)&&!techUnlocked(k)),false]];
  const rows=(items)=>items.map(([k,t])=>{const done=techDone(k),open=techUnlocked(k),afford=S.resources.research>=t.cost;const req=(t.req||[]).map(id=>TECHS[id]?.name||id).join(', ')||'Không có';const tip=compactTooltip(t.name,[['Nhóm',t.category],['Cấp',t.tier],['Hiệu ứng',t.desc],['Chi phí',`${fmt(t.cost)} điểm nghiên cứu`],['Yêu cầu',req],['Trạng thái',done?'Đã nghiên cứu':open?(afford?'Sẵn sàng':'Thiếu điểm nghiên cứu'):'Chưa mở']]);return `<div class="compact-row ${open||done?'':'locked-row'}"><div class="row-main"><div class="row-name hover-tip-target"><canvas class="unit-badge" data-icon="building" width="28" height="28"></canvas><div><div class="unit-title-line"><b>${t.name}</b><span class="tier-badge">Cấp ${t.tier}</span></div><div class="small muted">${t.category} · ${t.desc}</div></div>${tip}</div></div><div class="row-side"><div class="price-box">${fmt(t.cost)} điểm</div>${done?'<span class="pill good">Đã nghiên cứu</span>':open?`<button class="btn ${afford?'primary':''}" data-tech="${k}">Nghiên cứu</button>`:'<span class="pill">Chưa mở</span>'}</div></div>`;}).join('');
  return `<div class="grid two">${card('Công nghệ',`<div class="section-note"><b>${fmt(S.resources.research)} điểm nghiên cứu</b> · Học viện tại Hang động tạo <b>+${fmt(production().research,1)}/giờ</b>. Nội dung có thể nghiên cứu được ưu tiên lên đầu; nhánh bị khóa nằm cuối.</div><div class="accordion-stack research-status-stack">${groups.map(([name,items,open])=>`<details class="accordion" ${open?'open':''}><summary><div><b>${name}</b><div class="small muted">${items.length} công nghệ</div></div><span class="pill">${items.length}</span></summary><div class="compact-list">${rows(items)}</div></details>`).join('')}</div>`)}${card('Lộ trình phát triển',`<div class="metric">${S.techs.length}/${Object.keys(TECHS).length}</div><div class="submetric">Công nghệ đã hoàn tất</div><div class="stat-line"><span>Đội đã mở</span><b>${unlockedSquadCount()}/5</b></div><div class="stat-line"><span>Bảo vệ tài nguyên</span><b>${fmt(storageProtection()*100)}%</b></div><div class="stat-line"><span>Thế giới chiến dịch</span><b>${CAMPAIGN_WORLDS_V12.findIndex((w,i)=>!worldUnlockedV12(i))===-1?10:Math.max(1,CAMPAIGN_WORLDS_V12.findIndex((w,i)=>!worldUnlockedV12(i)))}/10</b></div><div class="section-note" style="margin-top:10px">Muốn tiến sâu vào Chiến dịch, cần kết hợp <b>Học viện → tài nguyên → học thuyết quân → phép thuật → liên đội</b>, không chỉ tăng một chỉ số đơn lẻ.</div>`)}</div>`;
};
renderMagic=function(){
  ensureV12State();
  const visible=Object.entries(SPELLS).filter(([k,s])=>s.element===magicElementTab&&(!s.hidden||S.unlockedHiddenSpells.includes(k)));
  const rank=([k,s])=>{if(!spellUnlockedV12(k,s))return 3;const active=buffRemaining(s.key),cd=cooldownRemaining(s.key);if(active>0)return 1;if(cd>0||S.resources.mana<s.mana)return 2;return 0;};
  visible.sort((a,b)=>rank(a)-rank(b)||a[1].mana-b[1].mana);
  return `<div class="grid two">${card('Phép thuật',`<div class="tabs magic-tabs">${Object.keys(ELEMENT_META).map(el=>`<button class="btn ${magicElementTab===el?'active':''}" data-magic-tab="${el}" style="border-color:${magicElementTab===el?ELEMENT_META[el].color:''};color:${ELEMENT_META[el].color}">Hệ ${el}</button>`).join('')}</div><div style="height:10px"></div><div class="section-note">Phép <b>đã mở và sẵn sàng</b> được đưa lên đầu. Phép chưa đủ nghiên cứu nằm cuối và làm mờ. <b>Phép ẩn của Trùm Thế Giới không xuất hiện cho tới khi tìm thấy.</b></div><div class="compact-list magic-list">${visible.map(([k,s])=>{const open=spellUnlockedV12(k,s),cd=cooldownRemaining(s.key),active=buffRemaining(s.key),can=open&&cd===0&&active===0&&S.resources.mana>=s.mana;const tip=compactTooltip(s.name,[['Hệ',s.element],['Hiệu ứng',s.desc],['Mana',fmt(s.mana)],['Hiệu lực',`${s.hours} giờ`],['Hồi chiêu',`${s.cooldown} giờ`],['Mở khóa',spellRequirementV12(k,s)],['Khắc chế',`Hệ ${ELEMENT_META[s.element].strong}`],['Bị khắc',`Hệ ${ELEMENT_META[s.element].weak}`]]);let status=!open?'Chưa mở':active>0?`Đang hiệu lực ${active}h`:cd>0?`Hồi chiêu ${cd}h`:S.resources.mana<s.mana?'Thiếu Mana':'Sẵn sàng';return `<div class="compact-row building-row ${open?'':'locked-row'}"><div class="row-main"><div class="row-name hover-tip-target"><canvas class="unit-badge" data-icon="mana" data-element="${s.element}" width="28" height="28"></canvas><div><div class="unit-title-line"><b style="color:${ELEMENT_META[s.element].color}">${s.name}</b>${s.hidden?'<span class="tier-badge hidden-spell-badge">Phép ẩn</span>':''}</div><div class="small muted">${s.desc}${open?'':` · Yêu cầu: ${spellRequirementV12(k,s)}`}</div></div>${tip}</div></div><div class="row-side"><span class="pill ${can?'good':active>0?'good':cd>0?'warn':''}">${status}</span><div class="price-box">${fmt(s.mana)} Mana · ${s.hours}h</div><button class="btn ${can?'primary':''}" data-spell="${k}" ${can?'':'disabled'}>${can?'Thi triển':status}</button></div></div>`;}).join('')}</div>`)}${card('Kho ấn chú',(()=>{const hidden=S.unlockedHiddenSpells.map(k=>SPELLS[k]).filter(Boolean);return `<div class="metric">${hidden.length}/10</div><div class="submetric">Phép ẩn đã tìm thấy</div>${hidden.length?`<div class="news-list" style="margin-top:12px">${hidden.map(s=>`<div class="news-item"><b style="color:${ELEMENT_META[s.element].color}">${s.name}</b><div class="small muted">${s.desc}</div></div>`).join('')}</div>`:'<div class="section-note" style="margin-top:12px">Đánh bại Trùm cuối mỗi Thế Giới để tìm ấn chú ẩn.</div>'}`;})())}</div>`;
};
doSpell=function(k){
  const s=SPELLS[k];if(!s)return;
  if(!spellUnlockedV12(k,s))return toast(`Chưa mở ${s.name}. ${spellRequirementV12(k,s)}.`);
  const cd=cooldownRemaining(s.key);if(cd>0)return toast(`${s.name} còn hồi chiêu ${cd} giờ.`);if(S.resources.mana<s.mana)return toast('Không đủ Mana.');
  S.resources.mana-=s.mana;S.buffs[s.key]=S.hour+s.hours;S.spellCooldowns[s.key]=S.hour+s.cooldown;
  if(k==='clockwork_die'){S.clockworkRoll=['off','def','eco'][Math.floor(Math.random()*3)];log(`Xúc Xắc Cơ Giới: hiệu ứng lần này là ${S.clockworkRoll==='off'?'Công kích':S.clockworkRoll==='def'?'Phòng thủ':'Kinh tế'}.`);}
  log(`Thi triển ${s.name}; hiệu lực ${s.hours} giờ.`);save(true);render();toast(`${s.name} đã có hiệu lực.`);
};
renderWar=function(){
  ensureV12State();
  const completed=CAMPAIGN_MISSIONS_V12.filter(m=>S.completedMissions.includes(m.id)).length;
  return `<div class="tabs war-tabs"><button class="btn ${warTab==='campaign'?'active':''}" data-war-tab="campaign">Chiến dịch (${completed}/60)</button><button class="btn ${warTab==='rivals'?'active':''}" data-war-tab="rivals">Lãnh địa đối địch (${S.rivals.length})</button></div><div style="height:10px"></div>${warTab==='campaign'?renderCampaignWar():renderRivalWar()}`;
};
renderCampaignWar=function(){
  ensureV12State();
  let wi=Math.max(0,Math.min(9,S.campaignWorld||0)); if(!worldUnlockedV12(wi)){wi=Math.max(0,wi-1);S.campaignWorld=wi;}
  const w=CAMPAIGN_WORLDS_V12[wi], missions=CAMPAIGN_MISSIONS_V12.filter(m=>m.world===wi), progress=worldProgressV12(wi);
  const tabs=CAMPAIGN_WORLDS_V12.map((x,i)=>{const open=worldUnlockedV12(i),p=worldProgressV12(i);return `<button class="world-tab ${i===wi?'active':''} ${open?'':'locked'}" data-world-tab="${i}" ${open?'':'disabled'}><span>${i+1}</span><div><b>${x.name}</b><small>${p}/6</small></div></button>`;}).join('');
  const rows=missions.map(m=>{const open=missionUnlockedV12(m),done=S.completedMissions.includes(m.id),me=combatPower(m.element,m.branch),terrain=campaignTerrainBonusV12(m),risk=battleRisk(me.off*terrain,m.def),side=sideObjectiveV12(m),hiddenFound=S.unlockedHiddenSpells.includes(m.hidden);const tip=compactTooltip(m.name,[['Nhiệm vụ',m.desc],['Địa hình',w.terrain],['Hệ đối thủ',m.element],['Nhánh chủ lực',BRANCH_META[m.branch].name],['Phòng thủ',fmt(m.def)],['Sức công khuyến nghị',fmt(Math.round(m.def*1.10))],['Mục tiêu phụ',side.text],['Đặc sản',`${fmt(m.specialReward)} ${m.specialName}`],['Phép ẩn',m.boss?(hiddenFound?SPELLS[m.hidden].name:'???'):'—']]);return `<div class="compact-row campaign-mission campaign-row ${open||done?'':'locked-row'} ${m.boss?'boss-row':''}"><div class="row-main"><div class="row-name hover-tip-target"><canvas class="unit-badge" data-branch="${m.branch}" data-element="${m.element}" width="28" height="28"></canvas><div><div class="unit-title-line"><b style="color:${ELEMENT_META[m.element].color}">${m.stage}. ${m.name}</b>${m.boss?'<span class="boss-badge">TRÙM</span>':''}</div><div class="small muted">${m.desc}</div><div class="mission-sub"><span>Phòng thủ ${fmt(m.def)}</span><span>${side.text}</span>${m.boss?`<span>${hiddenFound?SPELLS[m.hidden].name:'Phép ẩn: ???'}</span>`:''}</div></div>${tip}</div></div><div class="row-side"><select class="compact-input tactic-select" id="tactic_${m.id}" ${open&&!done?'':'disabled'}><option value="balanced">Cân bằng</option><option value="assault">Đột kích</option><option value="siege">Bao vây</option><option value="feint">Nghi binh</option></select><span class="pill ${done?'good':open?risk[1]:''}">${done?'Đã hoàn tất':open?risk[0]:'Chưa mở'}</span><div class="price-box">+${fmt(m.rewardP)} BK · +${m.rewardLand} đất · +${fmt(m.specialReward)} ${m.specialName}</div><button class="btn ${open&&!done?'primary':''}" data-mission-v12="${m.id}" ${open&&!done?'':'disabled'}>${done?'Đã thắng':'Xuất quân'}</button></div></div>`;}).join('');
  return `<div class="campaign-world-tabs">${tabs}</div><div class="world-hero"><div><div class="eyebrow">Thế giới ${wi+1}/10 · Nhịp đề xuất ${w.days}</div><h2>${w.name}</h2><p>${w.intro}</p></div><div class="world-stats"><div><span>Tiến độ</span><b>${progress}/6</b></div><div><span>Yêu cầu nghiên cứu</span><b>${w.research}</b></div><div><span>Đặc sản</span><b>${w.specialtyName}</b></div></div></div>${!worldUnlockedV12(wi)?`<div class="section-note warning">Cần hoàn tất Trùm Thế Giới trước và đạt ${w.research} công nghệ.</div>`:''}<div class="compact-list war-list">${rows}</div>`;
};
doMission=function(id){
  const m=CAMPAIGN_MISSIONS_V12.find(x=>x.id===id); if(!m||!missionUnlockedV12(m)||S.completedMissions.includes(id))return;
  if(armyCount()<50)return toast('Cần ít nhất 50 quân chính quy để xuất chiến.'); if(S.morale<25)return toast('Sĩ khí quá thấp để xuất quân.');
  const tacticKey=$(`#tactic_${m.id}`)?.value||'balanced',tactic=tacticDataV12(tacticKey,m),spell=activeCombatSpellAgainst(m.element),terrain=campaignTerrainBonusV12(m),me=combatPower(m.element,m.branch);
  const attack=me.off*tactic.atk*terrain*(.94+Math.random()*.12),defense=m.def*(.97+Math.random()*.06);
  if(attack>defense){
    const loss=Math.min(.24,(.035+m.world*.006+Math.random()*.035)*tactic.loss*lossMultiplier()); loseArmy(loss);S.morale=Math.max(0,S.morale-3);
    let rewardP=m.rewardP,rewardSpecial=m.specialReward;if(activeBuff('golden_scale')){rewardP=Math.round(rewardP*1.15);rewardSpecial=Math.round(rewardSpecial*1.15);}
    S.resources.platinum+=rewardP;S.resources.mana+=m.rewardMana;S.resources[m.specialKey]=(S.resources[m.specialKey]||0)+rewardSpecial;S.land.plain+=m.rewardLand;S.prestige+=20+m.world*7;S.completedMissions.push(m.id);S.campaignVictories++;
    const side=sideObjectiveV12(m);if(side.check(loss,spell)){if(m.sideType===0)S.resources[m.specialKey]=(S.resources[m.specialKey]||0)+Math.round(m.specialReward*.45);else if(m.sideType===1)S.resources.mana+=Math.round(m.rewardMana*.5);else S.resources.research+=Math.round(80+m.world*35);log(`Mục tiêu phụ hoàn tất: ${side.text}.`);}
    if(m.boss&&!S.unlockedHiddenSpells.includes(m.hidden)){S.unlockedHiddenSpells.push(m.hidden);log(`Phát hiện Phép Ẩn: ${SPELLS[m.hidden].name}.`);toast(`Trùm bị hạ · Nhận Phép Ẩn ${SPELLS[m.hidden].name}`);if(m.world<9){S.campaignWorld=m.world+1;}}
    else toast(`Hoàn tất: ${m.name}`);
    log(`Chiến thắng “${m.name}”: +${fmt(rewardP)} Bạch kim, +${m.rewardLand} đất, +${fmt(rewardSpecial)} ${m.specialName}; tổn thất ${fmt(loss*100,1)}%.`);
  }else{
    const loss=Math.min(.28,(.075+m.world*.007+Math.random()*.055)*tactic.loss*lossMultiplier());loseArmy(loss);S.morale=Math.max(0,S.morale-8);log(`Thất bại tại “${m.name}”; tổn thất ${fmt(loss*100,1)}%. Hội đồng chiến lược đã lập phương án mới.`);save(true);render();openDefeatAdvisorV12(m,{...tactic,key:tacticKey},attack,defense,loss);return;
  }
  save(true);render();
};

/* ===== v13 · Tiến trình thời gian thực + Thử thách Hoàn thành ngay ===== */
const QUICK_V13 = { freeSeconds:2.0, totalSeconds:10, wrongMinFee:.35, tickMs:100 };
let quickChallengeV13=null;

function ensureV13State(){
  ensureV5State(); ensureV10State(); ensureV11State(); ensureV12State();
  S.version=13;
  S.queue=(S.queue||[]).map((q,i)=>({
    ...q,
    id:q.id||`q_${q.type}_${q.key||q.landKey||'x'}_${q.start??S.hour}_${i}_${Math.random().toString(36).slice(2,6)}`,
    start:Number.isFinite(Number(q.start))?Number(q.start):Math.max(0,Number(q.done||S.hour)-({build:12,train:6,expedition:10,research:8}[q.type]||8))
  }));
  S.lastRealTickV13=Number(S.lastRealTickV13||Date.now());
}
function queueByIdV13(id){ return (S.queue||[]).find(q=>q.id===id); }
function isTechQueuedV13(k){ return (S.queue||[]).some(q=>q.type==='research'&&q.key===k); }
function qTypeNameV13(type){ return ({build:'Xây dựng',train:'Huấn luyện',research:'Nghiên cứu',expedition:'Khám phá',explore:'Khám phá'}[type]||'Tiến trình'); }
function qLabelV13(q){
  if(q.type==='build') return `${fmt(q.amount)} ${BUILDINGS[q.key]?.name||'công trình'}`;
  if(q.type==='train') return `${fmt(q.amount)} ${UNITS[q.key]?.name||'đơn vị'}`;
  if(q.type==='research') return TECHS[q.key]?.name||'Nghiên cứu';
  if(q.type==='expedition') return `Thám hiểm ${LAND[q.landKey]||''} (${fmt(q.amount)} mẫu)`;
  if(q.type==='explore') return `${fmt(q.amount)} mẫu ${LAND[q.key]||''}`;
  return 'Tiến trình';
}
function qProgressV13(q){
  const total=Math.max(1,(q.done||S.hour)-(q.start??S.hour));
  return Math.max(0,Math.min(100,Math.round(((S.hour-(q.start??S.hour))/total)*100)));
}
function remainingHoursV13(q){ return Math.max(0,Math.ceil((q.done||S.hour)-S.hour)); }
function ensureQuickModalV13(){
  if($('#quickChallengeV13')) return;
  document.body.insertAdjacentHTML('beforeend',`<div id="quickChallengeV13" class="quick-overlay hidden" aria-modal="true" role="dialog">
    <div class="quick-card">
      <div class="quick-head"><div><div class="eyebrow" id="quickKindV13">THỬ THÁCH TÍNH NHANH</div><h2 id="quickTitleV13">Hoàn thành ngay</h2></div><button id="quickAbortV13" class="icon-btn">×</button></div>
      <div class="quick-timer"><span id="quickTimerBarV13"></span></div>
      <div class="quick-body">
        <div class="quick-context" id="quickContextV13"></div>
        <div class="quick-question" id="quickQuestionV13">0 + 0 = ?</div>
        <div class="quick-answers" id="quickAnswersV13"></div>
        <div class="quick-cost-wrap"><div class="quick-cost-title"><span>Chi phí đang phát sinh</span><b id="quickTimeV13">10.0s</b></div><div id="quickCostV13" class="quick-cost-grid"></div></div>
        <div id="quickResultV13" class="quick-result">Trả lời càng sớm, chi phí càng thấp.</div>
      </div>
    </div>
  </div>`);
  $('#quickAbortV13').onclick=()=>abortQuickChallengeV13();
}
function randV13(a,b){ return Math.floor(Math.random()*(b-a+1))+a; }
function pickV13(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function makeChoicesV13(answer,spread=8){
  const set=new Set([answer]); let guard=0;
  while(set.size<4&&guard++<100){
    const d=pickV13([-1,1])*randV13(1,Math.max(2,spread));
    const v=answer+d; if(v>=0) set.add(v);
  }
  return [...set].sort(()=>Math.random()-.5);
}
function challengeQuestionV13(type,tier=1){
  const lvl=Math.max(1,Math.min(5,tier||1));
  if(type==='build'){
    const mode=pickV13(['sum','change','bundle']);
    if(mode==='sum'){
      const a=randV13(24,75)+lvl*3,b=randV13(16,58),c=randV13(7,25); const ans=a+b-c;
      return {context:'Vật tư xây dựng',prompt:`Kho có ${a} kiện, nhập thêm ${b} kiện rồi dùng ${c} kiện. Còn bao nhiêu kiện?`,answer:ans,choices:makeChoicesV13(ans,9)};
    }
    if(mode==='change'){
      const qty=randV13(2,5), price=pickV13([12,15,18,20,25,30]), total=qty*price, paid=Math.ceil((total+15)/50)*50, ans=paid-total;
      return {context:'Tính tiền vật tư · đơn vị nghìn',prompt:`Mua ${qty} món giá ${price} nghìn/món, trả ${paid} nghìn. Tiền thừa là bao nhiêu nghìn?`,answer:ans,choices:makeChoicesV13(ans,10)};
    }
    const boxes=randV13(3,8),each=randV13(6,14),used=randV13(4,Math.min(20,boxes*each-1)),ans=boxes*each-used;
    return {context:'Kiểm kho',prompt:`Có ${boxes} thùng, mỗi thùng ${each} món. Đã dùng ${used} món. Còn bao nhiêu món?`,answer:ans,choices:makeChoicesV13(ans,12)};
  }
  if(type==='train'){
    const mode=pickV13(['mul','div','groups']);
    if(mode==='mul'){
      const a=randV13(6,12+lvl),b=randV13(4,9),ans=a*b;
      return {context:'Huấn luyện · nhân nhanh',prompt:`${a} tổ, mỗi tổ ${b} quân. Tổng cộng bao nhiêu quân?`,answer:ans,choices:makeChoicesV13(ans,12)};
    }
    if(mode==='div'){
      const d=randV13(4,12),q=randV13(5,14),n=d*q;
      return {context:'Chia đội hình',prompt:`${n} quân chia đều thành ${d} tổ. Mỗi tổ có bao nhiêu quân?`,answer:q,choices:makeChoicesV13(q,5)};
    }
    const groups=randV13(3,7),each=randV13(8,16),reserve=randV13(5,20),ans=groups*each+reserve;
    return {context:'Điều quân',prompt:`Có ${groups} đội × ${each} quân và thêm ${reserve} quân dự bị. Tổng là bao nhiêu?`,answer:ans,choices:makeChoicesV13(ans,15)};
  }
  if(type==='research'){
    const mode=pickV13(['percent','twostep','ratio']);
    if(mode==='percent'){
      const pct=pickV13([10,20,25,50]),base=pickV13([120,160,200,240,300,320,400,480]),ans=base*pct/100;
      return {context:'Nghiên cứu · tỷ lệ',prompt:`${pct}% của ${base} bằng bao nhiêu?`,answer:ans,choices:makeChoicesV13(ans,20)};
    }
    if(mode==='ratio'){
      const unit=randV13(6,15),qty=randV13(4,10),bonus=randV13(8,30),ans=unit*qty+bonus;
      return {context:'Phân bổ điểm',prompt:`${qty} hạng mục × ${unit} điểm, cộng thêm ${bonus} điểm thưởng. Tổng bao nhiêu điểm?`,answer:ans,choices:makeChoicesV13(ans,15)};
    }
    const a=randV13(10,35),b=randV13(8,25),m=randV13(2,4),ans=(a+b)*m;
    return {context:'Nghiên cứu · hai bước',prompt:`(${a} + ${b}) × ${m} = ?`,answer:ans,choices:makeChoicesV13(ans,18)};
  }
  const mode=pickV13(['time','distance','convert','pace']);
  if(mode==='time'){
    const h=randV13(1,4),m=pickV13([10,15,20,30,40,45]),ans=h*60+m;
    return {context:'Khám phá · tính thời gian',prompt:`${h} giờ ${m} phút bằng bao nhiêu phút?`,answer:ans,choices:makeChoicesV13(ans,20)};
  }
  if(mode==='convert'){
    const kg=randV13(2,9),ans=kg*1000;
    return {context:'Hậu cần · quy đổi đơn vị',prompt:`${kg} kg bằng bao nhiêu gram?`,answer:ans,choices:makeChoicesV13(ans,500)};
  }
  if(mode==='distance'){
    const speed=pickV13([4,5,6,8,10,12]),hours=randV13(2,6),ans=speed*hours;
    return {context:'Hành quân',prompt:`Đi ${speed} km mỗi giờ trong ${hours} giờ. Quãng đường là bao nhiêu km?`,answer:ans,choices:makeChoicesV13(ans,10)};
  }
  const trips=randV13(3,7),minutes=pickV13([15,20,25,30,35,40]),ans=trips*minutes;
  return {context:'Lịch vận chuyển',prompt:`${trips} chuyến, mỗi chuyến ${minutes} phút. Tổng thời gian bao nhiêu phút?`,answer:ans,choices:makeChoicesV13(ans,25)};
}
function quickFullCostV13(q){
  const remain=Math.max(1,remainingHoursV13(q));
  const total=Math.max(remain,(q.done||S.hour)-(q.start??S.hour));
  const ratio=Math.max(.18,Math.min(1,remain/Math.max(1,total)));
  let c={};
  if(q.type==='build'){
    const bc=buildingCost(),amount=Math.max(1,q.amount||1); c={platinum:Math.round(bc.p*amount*.45*ratio),lumber:Math.round(bc.l*amount*.45*ratio)};
  }else if(q.type==='train'){
    const u=UNITS[q.key],base=u?effectiveUnitCost(u,smithyDiscount()):{platinum:300,food:100}; c=scaleCost(base,Math.max(1,q.amount||1)); Object.keys(c).forEach(k=>c[k]=Math.max(1,Math.round(c[k]*.34*ratio)));
  }else if(q.type==='research'){
    const t=TECHS[q.key]||{cost:500,tier:1}; c={platinum:Math.round(t.cost*(5+t.tier)*ratio),mana:Math.round(t.cost*.10*ratio)}; if(t.tier>=4)c.gold=Math.round(t.cost*.05*ratio);
  }else{
    const amount=Math.max(1,q.amount||1); c={platinum:Math.round(260*amount*ratio),food:Math.round(150*amount*ratio),meat:Math.round(80*amount*ratio)};
  }
  Object.keys(c).forEach(k=>{ if(c[k]<=0) delete c[k]; }); return c;
}
function canCoverQuickV13(cost){ return Object.entries(cost).every(([k,v])=>(S.resources[k]||0)>=v); }
function applyQuickChargeFractionV13(fraction){
  if(!quickChallengeV13)return;
  const f=Math.max(0,Math.min(1,fraction));
  Object.entries(quickChallengeV13.fullCost).forEach(([k,max])=>{
    const target=Math.floor(max*f),already=quickChallengeV13.charged[k]||0,delta=Math.max(0,target-already);
    if(delta>0){ S.resources[k]=Math.max(0,(S.resources[k]||0)-delta); quickChallengeV13.charged[k]=already+delta; }
  });
  updateQuickCostV13(); updateVisibleResourcesV13();
}
function updateVisibleResourcesV13(){
  Object.keys(RESOURCE_META_V11).forEach(k=>{ const el=$(`[data-resource="${k}"] .value`); if(el)el.textContent=fmt(S.resources[k]||0); });
}
function updateQuickCostV13(){
  if(!quickChallengeV13)return;
  const el=$('#quickCostV13'); if(!el)return;
  el.innerHTML=Object.entries(quickChallengeV13.fullCost).map(([k,max])=>`<div class="quick-cost-chip"><span>${RESOURCE_META_V11[k]?.label||k}</span><b>-${fmt(quickChallengeV13.charged[k]||0)}</b><small>/ ${fmt(max)}</small></div>`).join('');
}
function startQuickChallengeV13(qid){
  ensureV13State(); const q=queueByIdV13(qid); if(!q)return toast('Tiến trình không còn tồn tại.');
  const cost=quickFullCostV13(q); if(!canCoverQuickV13(cost))return toast(`Cần đủ tài nguyên dự phòng: ${formatCost(cost)}.`);
  ensureQuickModalV13();
  const tier=q.type==='research'?(TECHS[q.key]?.tier||2):q.type==='train'?unitTier(UNITS[q.key]||UNIT_LIST[0]):Math.min(5,Math.ceil(remainingHoursV13(q)/4));
  const question=challengeQuestionV13(q.type==='expedition'?'expedition':q.type,tier);
  const duration=q.type==='research'?11:q.type==='train'?9:q.type==='build'?9:10;
  quickChallengeV13={qId:q.id,q,question,fullCost:cost,charged:{},start:performance.now(),finished:false,timer:null,totalSeconds:duration};
  $('#quickKindV13').textContent=`${qTypeNameV13(q.type).toUpperCase()} · ${remainingHoursV13(q)} GIỜ CÒN LẠI`;
  $('#quickTitleV13').textContent=qLabelV13(q);
  $('#quickContextV13').textContent=question.context;
  $('#quickQuestionV13').textContent=question.prompt;
  $('#quickResultV13').textContent=`Miễn phí trong ${QUICK_V13.freeSeconds.toFixed(1)} giây đầu. Sau đó tài nguyên sẽ giảm dần.`;
  $('#quickAnswersV13').innerHTML=question.choices.map(x=>`<button class="quick-answer" data-quick-answer="${x}">${fmt(x)}</button>`).join('');
  updateQuickCostV13();
  $('#quickChallengeV13').classList.remove('hidden');
  $$('[data-quick-answer]').forEach(b=>b.onclick=()=>answerQuickV13(b,Number(b.dataset.quickAnswer)));
  quickChallengeV13.timer=setInterval(tickQuickChallengeV13,QUICK_V13.tickMs); tickQuickChallengeV13();
}
function tickQuickChallengeV13(){
  if(!quickChallengeV13||quickChallengeV13.finished)return;
  const sec=(performance.now()-quickChallengeV13.start)/1000,total=quickChallengeV13.totalSeconds||QUICK_V13.totalSeconds,remain=Math.max(0,total-sec);
  $('#quickTimeV13').textContent=`${remain.toFixed(1)}s`;
  $('#quickTimerBarV13').style.width=`${Math.max(0,remain/total*100)}%`;
  const frac=sec<=QUICK_V13.freeSeconds?0:(sec-QUICK_V13.freeSeconds)/(total-QUICK_V13.freeSeconds);
  applyQuickChargeFractionV13(frac);
  if(sec>=total)finishQuickV13('timeout');
}
function answerQuickV13(btn,value){
  if(!quickChallengeV13||quickChallengeV13.finished)return;
  if(value===quickChallengeV13.question.answer){ btn.classList.add('correct'); finishQuickV13('correct'); }
  else{ btn.classList.add('wrong'); const correct=$(`[data-quick-answer="${quickChallengeV13.question.answer}"]`); if(correct)correct.classList.add('correct'); finishQuickV13('wrong'); }
}
function completeQueueImmediatelyV13(id){ const q=queueByIdV13(id); if(!q)return; q.done=S.hour; processQueue(); }
function finishQuickV13(result){
  if(!quickChallengeV13||quickChallengeV13.finished)return;
  quickChallengeV13.finished=true; clearInterval(quickChallengeV13.timer);
  const sec=(performance.now()-quickChallengeV13.start)/1000;
  if(result==='wrong') applyQuickChargeFractionV13(Math.max(QUICK_V13.wrongMinFee,sec<=QUICK_V13.freeSeconds?0:((sec-QUICK_V13.freeSeconds)/((quickChallengeV13.totalSeconds||QUICK_V13.totalSeconds)-QUICK_V13.freeSeconds))));
  if(result==='timeout') applyQuickChargeFractionV13(1);
  $$('[data-quick-answer]').forEach(b=>b.disabled=true);
  if(result==='correct'){
    $('#quickResultV13').innerHTML=sec<=QUICK_V13.freeSeconds?'<b>Chính xác · Miễn phí</b>':'<b>Chính xác · Tiến trình hoàn tất ngay</b>';
    const completedId=quickChallengeV13.qId;
    setTimeout(()=>{ closeQuickV13(false); if(completedId){completeQueueImmediatelyV13(completedId);save(true);render();toast('Tiến trình đã hoàn thành.');}},650);
  }else if(result==='wrong'){
    $('#quickResultV13').innerHTML='<b>Chưa chính xác.</b> Tiến trình vẫn tiếp tục theo thời gian.';
    setTimeout(()=>{closeQuickV13(false);save(true);render();},1100);
  }else{
    const correct=$(`[data-quick-answer="${quickChallengeV13.question.answer}"]`); if(correct)correct.classList.add('correct');
    $('#quickResultV13').innerHTML='<b>Hết thời gian.</b> Đã phát sinh toàn bộ chi phí; tiến trình chưa hoàn tất.';
    setTimeout(()=>{closeQuickV13(false);save(true);render();},1400);
  }
}
function abortQuickChallengeV13(){
  if(!quickChallengeV13){$('#quickChallengeV13')?.classList.add('hidden');return;}
  if(!quickChallengeV13.finished){ applyQuickChargeFractionV13(.25); quickChallengeV13.finished=true; clearInterval(quickChallengeV13.timer); save(true); }
  closeQuickV13(false); render();
}
function closeQuickV13(clear=true){
  if(quickChallengeV13?.timer)clearInterval(quickChallengeV13.timer);
  $('#quickChallengeV13')?.classList.add('hidden'); if(clear)quickChallengeV13=null; else setTimeout(()=>{quickChallengeV13=null;},0);
}
function quickProgressRowsV13(types){
  const arr=(S.queue||[]).filter(q=>types.includes(q.type));
  if(!arr.length)return '<div class="muted">Không có tiến trình đang chờ.</div>';
  return `<div class="quick-progress-list">${arr.map(q=>{const cost=quickFullCostV13(q),cover=canCoverQuickV13(cost);return `<div class="quick-progress-row"><div class="quick-progress-main"><div><b>${qLabelV13(q)}</b><div class="small muted">${remainingHoursV13(q)} giờ còn lại · ${qProgressV13(q)}%</div></div><div class="mini-progress"><span style="width:${qProgressV13(q)}%"></span></div></div><button class="btn ${cover?'primary':''}" data-quick-complete="${q.id}" ${cover?'':'disabled'} title="Chi phí tối đa nếu hết giờ: ${formatCost(cost)}">Hoàn thành ngay</button></div>`;}).join('')}</div>`;
}
const _processQueueV12ForV13=processQueue;
processQueue=function(){
  ensureV13State();
  const ready=S.queue.filter(q=>q.done<=S.hour), keep=S.queue.filter(q=>q.done>S.hour); S.queue=keep;
  ready.forEach(q=>{
    if(q.type==='research'){
      if(!S.techs.includes(q.key)){S.techs.push(q.key);log(`Hoàn tất nghiên cứu: ${TECHS[q.key]?.name||q.key}.`);}
    }else if(q.type==='build'){S.buildings[q.key]+=q.amount;log(`Hoàn tất xây ${fmt(q.amount)} ${BUILDINGS[q.key].name}.`);}
    else if(q.type==='train'){S.units[q.key]+=q.amount;log(`Huấn luyện xong ${fmt(q.amount)} ${UNITS[q.key].name}.`);}
    else if(q.type==='explore'){const gain=Math.max(1,Math.round(q.amount*(q.earthBonus?1.20:1)));S.land[q.key]+=gain;log(`Đội thám hiểm trở về: +${fmt(gain)} mẫu ${LAND[q.key]}.`);}
    else if(q.type==='expedition'){
      (q.squads||[]).forEach(id=>{const sq=S.squads.find(x=>x.id===id);if(sq){sq.status='idle';sq.busyUntil=0;sq.target='';}});
      addClaim({title:`Thám hiểm ${LAND[q.landKey]} hoàn tất`,desc:`Các đội ${q.squads?.join(', ')} đã quay về.`,page:'explore',rewards:q.rewards,next:'build'});log(`Nhiệm vụ khám phá ${LAND[q.landKey]} đã hoàn tất. Có phần thưởng chờ nhận.`);
    }
  });
};
qLabel=function(q){return qLabelV13(q);};
queueHtml=function(){return quickProgressRowsV13(['build','train','research','expedition','explore']);};

doTech=function(k){
  const t=TECHS[k];if(!t||techDone(k)||isTechQueuedV13(k))return;
  if(!techUnlocked(k))return toast('Công nghệ này chưa đủ điều kiện mở.');
  if(S.resources.research<t.cost)return toast('Không đủ điểm nghiên cứu.');
  if(S.queue.some(q=>q.type==='research'))return toast('Học viện đang thực hiện một nghiên cứu khác.');
  S.resources.research-=t.cost;const hours=4+t.tier*3;
  S.queue.push({id:`q_research_${k}_${Date.now()}`,type:'research',key:k,start:S.hour,done:S.hour+hours,amount:1});
  log(`Bắt đầu nghiên cứu ${t.name}; dự kiến ${hours} giờ.`);save(true);render();toast(`Đã bắt đầu nghiên cứu ${t.name}.`);
};

const _renderBuildV12ForV13=renderBuild;
renderBuild=function(){
  const c=buildingCost();
  const lockMap={hunting_ground:'hunting_methods',ranch:'beast_husbandry',gold_mine:'gold_smelting',mint:'coin_minting',stable:'cavalry_doctrine',shipyard:'naval_doctrine',aerie:'air_doctrine'};
  const groups=Object.entries(BUILDING_GROUPS).map(([g,info],idx)=>`<details class="accordion" ${idx<2?'open':''}><summary><div><b>${info.name}</b><div class="small muted">${info.desc}</div></div><span class="pill">${Object.values(BUILDINGS).filter(x=>x.group===g).length} loại</span></summary><div class="compact-list">${Object.entries(BUILDINGS).filter(([,b])=>b.group===g).map(([k,b])=>{const tech=lockMap[k],open=!tech||techDone(tech),tip=compactTooltip(b.name,[['Mô tả',b.desc],['Lợi ích',buildBenefitText(b)],['Địa hình',LAND[b.land]],['Đang có',fmt(S.buildings[k])],['Đất trống',fmt(barren(b.land))],['Chi phí',`${fmt(c.p)} Bạch kim + ${fmt(c.l)} Gỗ`],['Mở khóa',open?'Đã mở':TECHS[tech].name]]);return `<div class="compact-row building-row ${open?'':'locked-row'}"><div class="row-main"><div class="row-name"><canvas class="unit-badge" data-icon="building" width="28" height="28"></canvas><div><span class="name-only-tip hover-tip-target"><b>${b.name}</b>${tip}</span><div class="small muted">${buildBenefitText(b)}${open?'':` · Cần ${TECHS[tech].name}`}</div></div></div></div><div class="row-side"><div class="inline-info muted">Đang có: <b>${fmt(S.buildings[k])}</b></div><label class="sl-wrap">SL<input id="qty_${k}" class="compact-input narrow" data-kind="build" data-key="${k}" data-base-p="${c.p}" data-base-l="${c.l}" type="number" min="1" value="1" ${open?'':'disabled'}></label><div class="price-box" id="build_total_${k}">${fmt(c.p)} Bạch kim + ${fmt(c.l)} Gỗ</div><button class="btn ${open?'primary':''}" data-build="${k}" ${open?'':'disabled'}>${open?'Xây':'Chưa mở'}</button></div></div>`;}).join('')}</div></details>`).join('');
  return `<div class="section-note"><b>Chi phí hiện tại mỗi công trình:</b> ${fmt(c.p)} Bạch kim + ${fmt(c.l)} Gỗ. Nhà máy đang giảm khoảng ${fmt(factoryDiscount()*100,1)}%.</div><div class="accordion-stack">${groups}</div>${card('Tiến trình xây dựng',quickProgressRowsV13(['build']))}`;
};

const _renderMilitaryV12ForV13=renderMilitary;
renderMilitary=function(){
  let html=_renderMilitaryV12ForV13();
  html=html.replace(/<div class="compact-row/g,'<div class="compact-row military-row');
  return html;
};

const _renderResearchV12ForV13=renderResearch;
renderResearch=function(){
  let html=_renderResearchV12ForV13();
  html=html.replace(' Nội dung có thể nghiên cứu được ưu tiên lên đầu; nhánh bị khóa nằm cuối.','');
  html=html.replace(/<button class="btn ([^"]*)" data-tech="([^"]+)">Nghiên cứu<\/button>/g,(m,cls,k)=>isTechQueuedV13(k)?'<span class="pill warn">Đang nghiên cứu</span>':m);
  html=html.replace(/<div class="compact-row/g,'<div class="compact-row research-row');
  html+=card('Tiến trình nghiên cứu',quickProgressRowsV13(['research']));
  return html;
};

const _renderMagicV12ForV13=renderMagic;
renderMagic=function(){
  let html=_renderMagicV12ForV13();
  html=html.replace(/<div class="section-note">Phép <b>đã mở và sẵn sàng<\/b>[\s\S]*?<\/div><div style="height:10px"><\/div>/,'');
  html=html.replace(/<div class="compact-row/g,'<div class="compact-row magic-row');
  return html;
};

const _renderExploreV12ForV13=renderExplore;
renderExplore=function(){ return _renderExploreV12ForV13(); };

function tacticDataV13(key,m){
  const map={
    balanced:{key:'balanced',name:'Cân bằng',atk:1,loss:1,enemyDef:1,label:'Công ±0% · Thủ địch ±0% · Tổn thất ±0%'},
    assault:{key:'assault',name:'Đột kích',atk:1.15,loss:1.25,enemyDef:1,label:'Công +15% · Tổn thất +25%'},
    siege:{key:'siege',name:'Bao vây',atk:1.05,loss:.80,enemyDef:.92,label:'Công +5% · Thủ địch -8% · Tổn thất -20%'},
    feint:{key:'feint',name:'Nghi binh',atk:.95,loss:.90,enemyDef:.88,label:'Công -5% · Thủ địch -12% · Tổn thất -10%'}
  };return map[key]||map.balanced;
}
tacticDataV12=function(key,m){return tacticDataV13(key,m);};
renderCampaignWar=function(){
  ensureV13State();
  let wi=Math.max(0,Math.min(9,S.campaignWorld||0));if(!worldUnlockedV12(wi)){wi=Math.max(0,wi-1);S.campaignWorld=wi;}
  const w=CAMPAIGN_WORLDS_V12[wi],missions=CAMPAIGN_MISSIONS_V12.filter(m=>m.world===wi),progress=worldProgressV12(wi);
  const tabs=CAMPAIGN_WORLDS_V12.map((x,i)=>{const open=worldUnlockedV12(i),p=worldProgressV12(i);return `<button class="world-tab ${i===wi?'active':''} ${open?'':'locked'}" data-world-tab="${i}" ${open?'':'disabled'}><span>${i+1}</span><div><b>${x.name}</b><small>${p}/6</small></div></button>`;}).join('');
  const options=['balanced','assault','siege','feint'].map(k=>{const t=tacticDataV13(k,{});return `<option value="${k}">${t.name} · ${t.label}</option>`;}).join('');
  const rows=missions.map(m=>{const open=missionUnlockedV12(m),done=S.completedMissions.includes(m.id),me=combatPower(m.element,m.branch),terrain=campaignTerrainBonusV12(m),risk=battleRisk(me.off*terrain,m.def),side=sideObjectiveV12(m),hiddenFound=S.unlockedHiddenSpells.includes(m.hidden);const tip=compactTooltip(m.name,[['Nhiệm vụ',m.desc],['Địa hình',w.terrain],['Hệ đối thủ',m.element],['Nhánh chủ lực',BRANCH_META[m.branch].name],['Phòng thủ',fmt(m.def)],['Sức công khuyến nghị',fmt(Math.round(m.def*1.10))],['Mục tiêu phụ',side.text],['Đặc sản',`${fmt(m.specialReward)} ${m.specialName}`],['Phép ẩn',m.boss?(hiddenFound?SPELLS[m.hidden].name:'???'):'—']]);return `<div class="compact-row campaign-mission campaign-row ${open||done?'':'locked-row'} ${m.boss?'boss-row':''}"><div class="row-main"><div class="row-name"><canvas class="unit-badge" data-branch="${m.branch}" data-element="${m.element}" width="28" height="28"></canvas><div><span class="name-only-tip hover-tip-target"><b style="color:${ELEMENT_META[m.element].color}">${m.stage}. ${m.name}</b>${tip}</span>${m.boss?'<span class="boss-badge">TRÙM</span>':''}<div class="small muted">${m.desc}</div><div class="mission-sub"><span>Phòng thủ ${fmt(m.def)}</span><span>${side.text}</span>${m.boss?`<span>${hiddenFound?SPELLS[m.hidden].name:'Phép ẩn: ???'}</span>`:''}</div></div></div></div><div class="row-side tactic-side-v13"><select class="compact-input tactic-select" id="tactic_${m.id}" ${open&&!done?'':'disabled'}>${options}</select><div class="tactic-live-v13" id="tactic_info_${m.id}">${tacticDataV13('balanced',m).label}</div><span class="pill ${done?'good':open?risk[1]:''}">${done?'Đã hoàn tất':open?risk[0]:'Chưa mở'}</span><div class="price-box">+${fmt(m.rewardP)} BK · +${m.rewardLand} đất · +${fmt(m.specialReward)} ${m.specialName}</div><button class="btn ${open&&!done?'primary':''}" data-mission-v12="${m.id}" ${open&&!done?'':'disabled'}>${done?'Đã thắng':'Xuất quân'}</button></div></div>`;}).join('');
  return `<div class="campaign-world-tabs">${tabs}</div><div class="world-hero"><div><div class="eyebrow">Thế giới ${wi+1}/10 · Nhịp đề xuất ${w.days}</div><h2>${w.name}</h2><p>${w.intro}</p></div><div class="world-stats"><div><span>Tiến độ</span><b>${progress}/6</b></div><div><span>Yêu cầu nghiên cứu</span><b>${w.research}</b></div><div><span>Đặc sản</span><b>${w.specialtyName}</b></div></div></div><div class="compact-list war-list">${rows}</div>`;
};
renderRivalWar=function(){
  return `<div class="compact-list war-list">${S.rivals.map((r,i)=>{const me=combatPower(r.spellElement,r.branch),ed=enemyEffectiveDefense(r),[risk,cls]=battleRisk(me.off,ed),tip=warTargetTooltip(r);return `<div class="compact-row rival-row"><div class="row-main"><div class="row-name"><canvas class="unit-badge" data-branch="${r.branch}" data-element="${r.element}" width="28" height="28"></canvas><div><span class="name-only-tip hover-tip-target"><b style="color:${ELEMENT_META[r.element].color}">${r.name}</b>${tip}</span><div class="small muted">${fmt(r.land)} mẫu · ${BRANCH_META[r.branch].name} · Nhóm ${r.aiTier||'Trung bình'}</div></div></div></div><div class="row-side"><div class="inline-info">Thủ hiệu dụng: <b>${fmt(ed)}</b></div><span class="pill ${cls}">${risk}</span><div class="price-box">Kho bạc ~${fmt(r.wealth)}</div><button class="btn ${risk==='Có lợi'?'primary':''}" data-attack="${i}">Tấn công</button></div></div>`;}).join('')}</div>`;
};

const _doMissionV12ForV13=doMission;
doMission=function(id){
  const m=CAMPAIGN_MISSIONS_V12.find(x=>x.id===id);if(!m||!missionUnlockedV12(m)||S.completedMissions.includes(id))return;
  if(armyCount()<50)return toast('Cần ít nhất 50 quân chính quy để xuất chiến.');if(S.morale<25)return toast('Sĩ khí quá thấp để xuất quân.');
  const tacticKey=$(`#tactic_${m.id}`)?.value||'balanced',tactic=tacticDataV13(tacticKey,m),spell=activeCombatSpellAgainst(m.element),terrain=campaignTerrainBonusV12(m),me=combatPower(m.element,m.branch);
  const attack=me.off*tactic.atk*terrain*(.94+Math.random()*.12),defense=m.def*tactic.enemyDef*(.97+Math.random()*.06);
  if(attack>defense){
    const loss=Math.min(.24,(.035+m.world*.006+Math.random()*.035)*tactic.loss*lossMultiplier());loseArmy(loss);S.morale=Math.max(0,S.morale-3);
    let rewardP=m.rewardP,rewardSpecial=m.specialReward;if(activeBuff('golden_scale')){rewardP=Math.round(rewardP*1.15);rewardSpecial=Math.round(rewardSpecial*1.15);}
    S.resources.platinum+=rewardP;S.resources.mana+=m.rewardMana;S.resources[m.specialKey]=(S.resources[m.specialKey]||0)+rewardSpecial;S.land.plain+=m.rewardLand;S.prestige+=20+m.world*7;S.completedMissions.push(m.id);S.campaignVictories++;
    const side=sideObjectiveV12(m);if(side.check(loss,spell)){if(m.sideType===0)S.resources[m.specialKey]=(S.resources[m.specialKey]||0)+Math.round(m.specialReward*.45);else if(m.sideType===1)S.resources.mana+=Math.round(m.rewardMana*.5);else S.resources.research+=Math.round(80+m.world*35);log(`Mục tiêu phụ hoàn tất: ${side.text}.`);}
    if(m.boss&&!S.unlockedHiddenSpells.includes(m.hidden)){S.unlockedHiddenSpells.push(m.hidden);log(`Phát hiện Phép Ẩn: ${SPELLS[m.hidden].name}.`);toast(`Trùm bị hạ · Nhận Phép Ẩn ${SPELLS[m.hidden].name}`);if(m.world<9)S.campaignWorld=m.world+1;}else toast(`Hoàn tất: ${m.name}`);
    log(`Chiến thắng “${m.name}” bằng ${tactic.name}: +${fmt(rewardP)} Bạch kim, +${m.rewardLand} đất; tổn thất ${fmt(loss*100,1)}%.`);
  }else{
    const loss=Math.min(.28,(.075+m.world*.007+Math.random()*.055)*tactic.loss*lossMultiplier());loseArmy(loss);S.morale=Math.max(0,S.morale-8);log(`Thất bại tại “${m.name}” với ${tactic.name}; tổn thất ${fmt(loss*100,1)}%.`);save(true);render();openDefeatAdvisorV12(m,tactic,attack,defense,loss);return;
  }
  save(true);render();
};

const _renderOverviewV12ForV13=renderOverview;
renderOverview=function(){
  const p=production(),cp=combatPower(),foodHours=p.food<0?Math.floor(S.resources.food/Math.abs(p.food)):9999;
  return `<div class="grid four">${card('Kinh tế',`<div class="metric">${fmt(p.platinum+p.gold+p.meat+p.lumber+p.ore,0)}</div><div class="submetric">Tổng sản xuất chiến lược/giờ</div><div class="stat-line"><span>Lương thực ròng</span><b>${p.food>=0?'+':''}${fmt(p.food)}/h</b></div><div class="stat-line"><span>Điểm nghiên cứu</span><b>+${fmt(p.research,1)}/h</b></div>`)}${card('Quân lực',`<div class="metric">${fmt(cp.off)} / ${fmt(cp.def)}</div><div class="submetric">Công / Thủ tổng</div><div class="stat-line"><span>Quân chính quy</span><b>${fmt(armyCount())}</b></div><div class="stat-line"><span>Dự bị</span><b>${fmt(S.draftees)}</b></div>`)}${card('Đất đai',`<div class="metric">${fmt(totalLand())}</div><div class="submetric">Tổng mẫu đất</div><div class="stat-line"><span>Đất trống</span><b>${fmt(totalBarren())}</b></div><div class="stat-line"><span>Đội đã mở</span><b>${unlockedSquadCount()}/5</b></div>`)}${card('Tình trạng',`<div class="metric">${fmt(S.morale,0)}%</div><div class="submetric">Sĩ khí</div><div class="progress"><span style="width:${S.morale}%"></span></div><div class="stat-line"><span>Uy tín</span><b>${fmt(S.prestige)}</b></div><div class="stat-line"><span>Chiến dịch</span><b>${S.completedMissions.length}/60</b></div>`)}</div><div class="grid two">${card('Tình hình vương quốc',`${p.food<0?`<div class="section-note danger-text"><b>Thiếu lương thực:</b> âm ${fmt(Math.abs(p.food))}/giờ; dự trữ khoảng ${foodHours} giờ.</div>`:`<div class="section-note good-text"><b>Lương thực ổn định:</b> dư ${fmt(p.food)}/giờ.</div>`}<div style="height:10px"></div>${totalBarren()<20?'<div class="section-note warning"><b>Đất trống thấp:</b> nên mở rộng trước khi xây thêm.</div>':'<div class="section-note">Tiến trình tự hoàn thành theo thời gian. Có thể dùng thử thách tính nhanh để hoàn tất riêng từng tiến trình.</div>'}`)}${card('Tiến trình đang chạy',queueHtml())}</div><div class="grid two">${card('Sự kiện vương quốc',eventDeckHtml(),pendingEvents()?`<span class="pill warning">${pendingEvents()} chờ xử lý</span>`:'')}${card('Tin tức gần đây',`<div class="news-list">${S.news.slice(0,8).map(n=>`<div class="news-item"><div class="t">${timeLabel(n.h)}</div>${n.text}</div>`).join('')}</div>`)}</div>`;
};

function updateGameClockV13(){const e=$('#gameClockV13');if(e)e.textContent=timeLabel();}
function advanceNaturalV13(hours){
  hours=Math.max(1,Math.floor(hours));
  for(let i=0;i<hours;i++){
    S.hour++;
    const p=production();
    ['platinum','gold','meat','lumber','mana','ore','research','boats'].forEach(k=>{S.resources[k]=(S.resources[k]||0)+(p[k]||0);});
    S.resources.food=Math.max(0,(S.resources.food||0)+p.food);
    const cap=maxPeasants(),templeBonus=1+Math.min(.6,(S.buildings.temple/Math.max(1,totalLand()))*6),growth=Math.max(0,Math.floor(S.peasants*.003*templeBonus));
    S.peasants=Math.min(cap,S.peasants+growth);
    const draftRate=.003*(activeBuff('old_forest')?1.10:1),draft=Math.min(S.peasants,Math.max(0,Math.floor(S.peasants*draftRate)));S.peasants-=draft;S.draftees+=draft;
    S.morale=Math.min(100,S.morale+0.35);S.resources.food*=.99;S.resources.lumber*=.99;S.resources.meat*=.997;S.resources.gold*=.999;S.bank*=1.0005;
    if(S.hour%6===0)evolveRivals();processQueue();maybeAiRaid();maybeSpawnEvent();
    if(S.resources.food<=0){S.morale=Math.max(0,S.morale-4);S.peasants=Math.max(0,Math.floor(S.peasants*.995));}
  }
}
function syncRealtimeV13(){
  ensureV13State();const now=Date.now(),elapsed=Math.max(0,now-S.lastRealTickV13),hours=Math.floor(elapsed/3600000);
  if(hours>0){S.lastRealTickV13+=hours*3600000;advanceNaturalV13(hours);save(true);render();}else updateGameClockV13();
}
const _bindDynamicV12ForV13=bindDynamic;
bindDynamic=function(){
  _bindDynamicV12ForV13();
  const trainingQs=(S.queue||[]).filter(q=>q.type==='train');
  $$('.train-progress-item').forEach((el,i)=>{const q=trainingQs[i];if(q&&!el.querySelector('[data-quick-complete]')){const b=document.createElement('button');b.className='btn quick-inline-btn';b.dataset.quickComplete=q.id;b.textContent='Hoàn thành ngay';el.appendChild(b);}});
  const expeditionQs=(S.queue||[]).filter(q=>['expedition','explore'].includes(q.type));
  $$('#content .claim-item').filter(el=>el.querySelector('.mini-progress')).forEach((el,i)=>{const q=expeditionQs[i];if(q&&!el.querySelector('[data-quick-complete]')){const b=document.createElement('button');b.className='btn quick-inline-btn';b.dataset.quickComplete=q.id;b.textContent='Hoàn thành ngay';el.appendChild(b);}});
  $$('[data-quick-complete]').forEach(b=>b.onclick=()=>startQuickChallengeV13(b.dataset.quickComplete));
  $$('[data-tech]').forEach(b=>{if(isTechQueuedV13(b.dataset.tech)){b.disabled=true;b.textContent='Đang nghiên cứu';}else b.onclick=()=>doTech(b.dataset.tech);});
  $$('.tactic-select').forEach(sel=>sel.onchange=()=>{const m=CAMPAIGN_MISSIONS_V12.find(x=>x.id===sel.id.replace('tactic_',''));const info=$(`#tactic_info_${m?.id}`);if(info)info.textContent=tacticDataV13(sel.value,m||{}).label;});
};
const _renderV12ForV13=render;
render=function(){ensureV13State();_renderV12ForV13();updateGameClockV13();};



/* ===== v17 · Phản hồi chi phí trực quan + chiến tranh có tiến trình ===== */
function ensureQuickLossLayerV17(){
  ensureQuickModalV13();
  const cardEl=$('#quickChallengeV13 .quick-card');
  if(cardEl && !$('#quickLossLayerV17')) cardEl.insertAdjacentHTML('beforeend','<div id="quickLossLayerV17" class="quick-loss-layer-v17" aria-hidden="true"></div>');
}
let quickLossBufferV17={},quickLossTimerV17=null;
function showQuickLossBurstNowV17(){
  if(!quickLossBufferV17||!Object.keys(quickLossBufferV17).length)return;
  ensureQuickLossLayerV17();
  const layer=$('#quickLossLayerV17'); if(!layer)return;
  const parts=Object.entries(quickLossBufferV17).filter(([,v])=>v>0).map(([k,v])=>`<span><b>−${fmt(v)}</b> ${RESOURCE_META_V11[k]?.label||k}</span>`);
  quickLossBufferV17={}; if(!parts.length)return;
  const pop=document.createElement('div'); pop.className='quick-loss-pop-v17'; pop.innerHTML=`<div class="quick-loss-caption-v17">CHI PHÍ TĂNG TỐC</div>${parts.join('')}`;
  layer.appendChild(pop); setTimeout(()=>pop.remove(),1150);
}
function pushQuickLossV17(delta){
  Object.entries(delta||{}).forEach(([k,v])=>{if(v>0)quickLossBufferV17[k]=(quickLossBufferV17[k]||0)+v;});
  if(!quickLossTimerV17) quickLossTimerV17=setTimeout(()=>{quickLossTimerV17=null;showQuickLossBurstNowV17();},360);
}
const _applyQuickChargeFractionV17Base=applyQuickChargeFractionV13;
applyQuickChargeFractionV13=function(fraction){
  if(!quickChallengeV13)return;
  const before={...(quickChallengeV13.charged||{})};
  _applyQuickChargeFractionV17Base(fraction);
  const delta={}; Object.entries(quickChallengeV13.charged||{}).forEach(([k,v])=>{const d=v-(before[k]||0);if(d>0)delta[k]=d;});
  if(Object.keys(delta).length)pushQuickLossV17(delta);
};
function negativeCostTextV17(cost){
  return Object.entries(cost||{}).filter(([,v])=>v>0).map(([k,v])=>`−${fmt(v)} ${RESOURCE_META_V11[k]?.label||k}`).join(' · ');
}
function quickButtonHtmlV17(q){
  const cost=quickFullCostV13(q); return `<span class="quick-btn-main-v17">Hoàn thành ngay</span><span class="quick-btn-cost-v17">Tối đa: ${negativeCostTextV17(cost)}</span>`;
}
const _quickFullCostV17Base=quickFullCostV13;
quickFullCostV13=function(q){
  if(q?.type!=='war')return _quickFullCostV17Base(q);
  const remain=Math.max(1,remainingHoursV13(q)),total=Math.max(remain,(q.done||S.hour)-(q.start??S.hour)),ratio=Math.max(.16,Math.min(1,remain/Math.max(1,total)));
  if(q.targetKind==='campaign'){
    const m=CAMPAIGN_MISSIONS_V12.find(x=>x.id===q.missionId); if(!m)return {lumber:1200,gold:250};
    return {lumber:Math.max(300,Math.round((1200+m.world*420+m.stage*180+(m.boss?800:0))*ratio)),gold:Math.max(80,Math.round((250+m.world*95+m.stage*45+(m.boss?250:0))*ratio))};
  }
  const r=S.rivals.find(x=>x.name===q.rivalName); const land=r?.land||700;
  return {lumber:Math.max(350,Math.round((1400+land*1.9)*ratio)),gold:Math.max(100,Math.round((300+land*.55)*ratio))};
};
const _qTypeNameV17Base=qTypeNameV13;
qTypeNameV13=function(type){return type==='war'?'Chiến tranh':_qTypeNameV17Base(type);};
const _qLabelV17Base=qLabelV13;
qLabelV13=function(q){
  if(q?.type==='war'){
    if(q.targetKind==='campaign')return `Chiến dịch · ${CAMPAIGN_MISSIONS_V12.find(x=>x.id===q.missionId)?.name||'Mục tiêu'}`;
    return `Viễn chinh · ${q.rivalName||'Lãnh địa đối địch'}`;
  }
  return _qLabelV17Base(q);
};
qLabel=function(q){return qLabelV13(q);};
const _challengeQuestionV17Base=challengeQuestionV13;
challengeQuestionV13=function(type,tier=1){
  if(type!=='war')return _challengeQuestionV17Base(type,tier);
  const mode=pickV13(['supply','division','loss','march','cargo']);
  if(mode==='supply'){
    const teams=randV13(4,9),each=pickV13([25,30,35,40,45]),reserve=pickV13([20,30,40,50]),ans=teams*each+reserve;
    return {context:'Hậu cần chiến dịch',prompt:`${teams} toán, mỗi toán ${each} suất quân lương, cộng ${reserve} suất dự phòng. Tổng bao nhiêu suất?`,answer:ans,choices:makeChoicesV13(ans,30)};
  }
  if(mode==='division'){
    const teams=randV13(4,8),each=pickV13([40,50,60,70,80]),total=teams*each,ans=each;
    return {context:'Chia đội hình',prompt:`${fmt(total)} quân chia đều thành ${teams} đội. Mỗi đội có bao nhiêu quân?`,answer:ans,choices:makeChoicesV13(ans,20)};
  }
  if(mode==='loss'){
    const pct=pickV13([10,20,25]),base=pickV13([400,480,600,640,800]),lost=base*pct/100,ans=base-lost;
    return {context:'Tính quân còn lại',prompt:`Có ${fmt(base)} quân, tổn thất ${pct}%. Còn lại bao nhiêu quân?`,answer:ans,choices:makeChoicesV13(ans,50)};
  }
  if(mode==='march'){
    const speed=pickV13([4,5,6,8,10,12]),hours=randV13(2,6),ans=speed*hours;
    return {context:'Hành quân',prompt:`Đội quân đi ${speed} km/giờ trong ${hours} giờ. Đi được bao nhiêu km?`,answer:ans,choices:makeChoicesV13(ans,12)};
  }
  const carts=randV13(3,8),boxes=pickV13([24,30,36,40,48]),used=pickV13([20,30,40,50,60]),total=carts*boxes,ans=total-used;
  return {context:'Tiếp vận chiến trường',prompt:`${carts} xe, mỗi xe ${boxes} thùng. Đã dùng ${used} thùng. Còn bao nhiêu thùng?`,answer:ans,choices:makeChoicesV13(ans,35)};
};
function warPhaseV17(q){
  const p=qProgressV13(q); if(p<34)return 'Hành quân đến mục tiêu'; if(p<67)return 'Đang giao chiến'; return 'Đang dẫn quân trở về';
}
function activeWarV17(){return (S.queue||[]).find(q=>q.type==='war');}
function warForMissionV17(id){return (S.queue||[]).find(q=>q.type==='war'&&q.targetKind==='campaign'&&q.missionId===id);}
function warForRivalV17(name){return (S.queue||[]).find(q=>q.type==='war'&&q.targetKind==='rival'&&q.rivalName===name);}
function warDurationCampaignV17(m){return Math.max(5,Math.min(22,4+m.stage+Math.floor(m.world*1.15)+(m.boss?3:0)));}
function warDurationRivalV17(r){return Math.max(6,Math.min(20,6+Math.round((r.land||600)/180)));}
function warProgressCardV17(){
  const q=activeWarV17(); if(!q)return '';
  const pct=qProgressV13(q),cost=quickFullCostV13(q),cover=canCoverQuickV13(cost);
  const phase=warPhaseV17(q);
  return `<div class="war-progress-card-v17"><div class="war-progress-head-v17"><div><div class="eyebrow">CHIẾN DỊCH ĐANG DIỄN RA</div><b>${qLabelV13(q)}</b><div class="small muted">${phase} · ${remainingHoursV13(q)} giờ còn lại</div></div><div class="war-progress-percent-v17">${pct}%</div></div><div class="war-journey-v17"><span class="${pct<34?'active':''}">1 · Hành quân</span><span class="${pct>=34&&pct<67?'active':''}">2 · Giao chiến</span><span class="${pct>=67?'active':''}">3 · Trở về</span></div><div class="mini-progress war-mini-progress-v17"><span style="width:${pct}%"></span></div><button class="btn ${cover?'primary':''} quick-cost-button-v17" data-quick-complete="${q.id}" ${cover?'':'disabled'}>${quickButtonHtmlV17(q)}</button></div>`;
}
function resolveCampaignWarV17(q){
  const m=CAMPAIGN_MISSIONS_V12.find(x=>x.id===q.missionId);if(!m)return;
  const tactic=tacticDataV13(q.tacticKey||'balanced',m),spell=q.spellActive?{}:null,attack=q.attackRoll,defense=q.defenseRoll;
  if(attack>defense){
    const loss=Math.min(.24,q.lossWin??((.035+m.world*.006+.02)*tactic.loss*lossMultiplier()));loseArmy(loss);S.morale=Math.max(0,S.morale-3);
    let rewardP=m.rewardP,rewardSpecial=m.specialReward;if(activeBuff('golden_scale')){rewardP=Math.round(rewardP*1.15);rewardSpecial=Math.round(rewardSpecial*1.15);}
    S.resources.platinum+=rewardP;S.resources.mana+=m.rewardMana;S.resources[m.specialKey]=(S.resources[m.specialKey]||0)+rewardSpecial;S.land.plain+=m.rewardLand;S.prestige+=20+m.world*7;
    if(!S.completedMissions.includes(m.id))S.completedMissions.push(m.id);S.campaignVictories++;
    const side=sideObjectiveV12(m),sideOk=m.sideType===0?loss<.08:m.sideType===1?!q.spellActive:(q.moraleStart??0)>=80;
    if(sideOk){if(m.sideType===0)S.resources[m.specialKey]=(S.resources[m.specialKey]||0)+Math.round(m.specialReward*.45);else if(m.sideType===1)S.resources.mana+=Math.round(m.rewardMana*.5);else S.resources.research+=Math.round(80+m.world*35);log(`Mục tiêu phụ hoàn tất: ${side.text}.`);}
    if(m.boss&&!S.unlockedHiddenSpells.includes(m.hidden)){S.unlockedHiddenSpells.push(m.hidden);log(`Phát hiện Phép Ẩn: ${SPELLS[m.hidden].name}.`);toast(`Trùm bị hạ · Nhận Phép Ẩn ${SPELLS[m.hidden].name}`);if(m.world<9)S.campaignWorld=m.world+1;}else toast(`Đoàn quân trở về chiến thắng: ${m.name}`);
    log(`Chiến thắng “${m.name}” bằng ${tactic.name}: +${fmt(rewardP)} Bạch kim, +${m.rewardLand} đất; tổn thất ${fmt(loss*100,1)}%.`);
  }else{
    const loss=Math.min(.28,q.lossFail??((.075+m.world*.007+.035)*tactic.loss*lossMultiplier()));loseArmy(loss);S.morale=Math.max(0,S.morale-8);log(`Thất bại tại “${m.name}” với ${tactic.name}; tổn thất ${fmt(loss*100,1)}%.`);toast(`Đoàn quân trở về sau thất bại tại ${m.name}.`);
    setTimeout(()=>openDefeatAdvisorV12(m,tactic,attack,defense,loss),80);
  }
}
function resolveRivalWarV17(q){
  const i=S.rivals.findIndex(x=>x.name===q.rivalName),r=S.rivals[i];if(!r)return;
  if(q.attackRoll>q.defenseRoll){
    const loot={platinum:Math.floor((r.wealth||0)*.20),food:Math.floor((r.food||0)*.20),meat:Math.floor((r.food||0)*.08),gold:Math.floor((r.wealth||0)*.02),lumber:Math.floor((r.wealth||0)*.04),ore:Math.floor((r.wealth||0)*.06),mana:Math.max(30,Math.floor((r.wealth||0)*.01))};
    Object.entries(loot).forEach(([k,v])=>S.resources[k]=(S.resources[k]||0)+v);const landGain=applyVictoryRewards(r,0,Math.max(2,Math.round(r.land*.03)));const loss=q.lossWin;loseArmy(Math.min(.18,loss));S.morale=Math.max(0,S.morale-4);r.wealth=Math.max(0,(r.wealth||0)-loot.platinum);r.food=Math.max(0,(r.food||0)-loot.food);S.prestige+=18;
    log(`Đánh thắng ${r.name}: cướp ${fmt(loot.platinum)} Bạch kim, ${fmt(loot.food)} Lương thực, ${fmt(loot.meat)} Thịt, ${fmt(loot.lumber)} Gỗ, ${fmt(loot.ore)} Quặng, ${fmt(loot.gold)} Vàng, ${fmt(loot.mana)} Mana và chiếm ${landGain} đất.`);toast(`Đoàn quân trở về sau chiến thắng tại ${r.name}.`);
  }else{
    const loss=q.lossFail;loseArmy(Math.min(.28,loss));S.morale=Math.max(0,S.morale-10);log(`Tấn công ${r.name} thất bại; tổn thất khoảng ${fmt(Math.min(.28,loss)*100,1)}%.`);toast('Đoàn quân đã trở về sau thất bại.');
  }
}
processQueue=function(){
  ensureV13State();
  const ready=S.queue.filter(q=>q.done<=S.hour),keep=S.queue.filter(q=>q.done>S.hour);S.queue=keep;
  ready.forEach(q=>{
    if(q.type==='research'){if(!S.techs.includes(q.key)){S.techs.push(q.key);log(`Hoàn tất nghiên cứu: ${TECHS[q.key]?.name||q.key}.`);}}
    else if(q.type==='build'){S.buildings[q.key]+=q.amount;log(`Hoàn tất xây ${fmt(q.amount)} ${BUILDINGS[q.key].name}.`);}
    else if(q.type==='train'){S.units[q.key]+=q.amount;log(`Huấn luyện xong ${fmt(q.amount)} ${UNITS[q.key].name}.`);}
    else if(q.type==='explore'){const gain=Math.max(1,Math.round(q.amount*(q.earthBonus?1.20:1)));S.land[q.key]+=gain;log(`Đội thám hiểm trở về: +${fmt(gain)} mẫu ${LAND[q.key]}.`);}
    else if(q.type==='expedition'){(q.squads||[]).forEach(id=>{const sq=S.squads.find(x=>x.id===id);if(sq){sq.status='idle';sq.busyUntil=0;sq.target='';}});addClaim({title:`Thám hiểm ${LAND[q.landKey]} hoàn tất`,desc:`Các đội ${q.squads?.join(', ')} đã quay về.`,page:'explore',rewards:q.rewards,next:'build'});log(`Nhiệm vụ khám phá ${LAND[q.landKey]} đã hoàn tất. Có phần thưởng chờ nhận.`);}
    else if(q.type==='war'){if(q.targetKind==='campaign')resolveCampaignWarV17(q);else resolveRivalWarV17(q);}
  });
};
queueHtml=function(){return quickProgressRowsV13(['build','train','research','expedition','explore','war']);};
quickProgressRowsV13=function(types){
  const arr=(S.queue||[]).filter(q=>types.includes(q.type));if(!arr.length)return '<div class="muted">Không có tiến trình đang chờ.</div>';
  return `<div class="quick-progress-list">${arr.map(q=>{const cost=quickFullCostV13(q),cover=canCoverQuickV13(cost),phase=q.type==='war'?` · ${warPhaseV17(q)}`:'';return `<div class="quick-progress-row"><div class="quick-progress-main"><div><b>${qLabelV13(q)}</b><div class="small muted">${remainingHoursV13(q)} giờ còn lại · ${qProgressV13(q)}%${phase}</div></div><div class="mini-progress"><span style="width:${qProgressV13(q)}%"></span></div></div><button class="btn ${cover?'primary':''} quick-cost-button-v17" data-quick-complete="${q.id}" ${cover?'':'disabled'}>${quickButtonHtmlV17(q)}</button></div>`;}).join('')}</div>`;
};
doMission=function(id){
  const m=CAMPAIGN_MISSIONS_V12.find(x=>x.id===id);if(!m||!missionUnlockedV12(m)||S.completedMissions.includes(id))return;
  if(activeWarV17())return toast('Một đạo quân đang thực hiện chiến dịch khác.');
  if(armyCount()<50)return toast('Cần ít nhất 50 quân chính quy để xuất chiến.');if(S.morale<25)return toast('Sĩ khí quá thấp để xuất quân.');
  const tacticKey=$(`#tactic_${m.id}`)?.value||'balanced',tactic=tacticDataV13(tacticKey,m),spell=activeCombatSpellAgainst(m.element),terrain=campaignTerrainBonusV12(m),me=combatPower(m.element,m.branch),duration=warDurationCampaignV17(m);
  const attack=me.off*tactic.atk*terrain*(.94+Math.random()*.12),defense=m.def*tactic.enemyDef*(.97+Math.random()*.06);
  const q={id:`q_war_campaign_${m.id}_${Date.now()}`,type:'war',targetKind:'campaign',missionId:m.id,tacticKey,start:S.hour,done:S.hour+duration,attackRoll:attack,defenseRoll:defense,spellActive:!!spell,moraleStart:S.morale,lossWin:Math.min(.24,(.035+m.world*.006+Math.random()*.035)*tactic.loss*lossMultiplier()),lossFail:Math.min(.28,(.075+m.world*.007+Math.random()*.055)*tactic.loss*lossMultiplier())};
  S.queue.push(q);S.morale=Math.max(0,S.morale-1);log(`Đã xuất quân tới “${m.name}” bằng ${tactic.name}; tổng hành trình dự kiến ${duration} giờ.`);save(true);render();toast(`Đã xuất quân · ${duration} giờ cho cả hành quân, giao chiến và trở về.`);
};
doAttack=function(i){
  const r=S.rivals[i];if(!r)return;if(activeWarV17())return toast('Một đạo quân đang thực hiện chiến dịch khác.');if(armyCount()<50)return toast('Cần ít nhất 50 quân chính quy để tấn công.');if(S.morale<25)return toast('Sĩ khí quá thấp để xuất quân.');
  const me=combatPower(r.spellElement,r.branch),enemyDef=enemyEffectiveDefense(r),duration=warDurationRivalV17(r),attack=me.off*(.92+Math.random()*.18),defense=enemyDef*(.96+Math.random()*.08);
  S.queue.push({id:`q_war_rival_${i}_${Date.now()}`,type:'war',targetKind:'rival',rivalName:r.name,start:S.hour,done:S.hour+duration,attackRoll:attack,defenseRoll:defense,lossWin:(.04+Math.random()*.06)*lossMultiplier(),lossFail:(.09+Math.random()*.08)*lossMultiplier()});S.morale=Math.max(0,S.morale-1);log(`Đã xuất quân tới ${r.name}; dự kiến ${duration} giờ cho toàn bộ chiến dịch.`);save(true);render();toast(`Đã xuất quân tới ${r.name}.`);
};
renderCampaignWar=function(){
  ensureV13State();let wi=Math.max(0,Math.min(9,S.campaignWorld||0));if(!worldUnlockedV12(wi)){wi=Math.max(0,wi-1);S.campaignWorld=wi;}
  const w=CAMPAIGN_WORLDS_V12[wi],missions=CAMPAIGN_MISSIONS_V12.filter(m=>m.world===wi),progress=worldProgressV12(wi),busy=activeWarV17();
  const tabs=CAMPAIGN_WORLDS_V12.map((x,i)=>{const open=worldUnlockedV12(i),p=worldProgressV12(i);return `<button class="world-tab ${i===wi?'active':''} ${open?'':'locked'}" data-world-tab="${i}" ${open?'':'disabled'}><span>${i+1}</span><div><b>${x.name}</b><small>${p}/6</small></div></button>`;}).join('');
  const strategyGuide=`<div class="strategy-guide-v16"><div class="sg-title">Chiến thuật trước trận</div><div><b>Công</b> = sức tấn công · <b>Thủ</b> = phòng thủ mục tiêu.</div><div><b>Cân bằng</b>: không đổi · <b>Đột kích</b>: Công +15%, tổn thất +25% · <b>Bao vây</b>: Công +5%, Thủ địch -8%, tổn thất -20% · <b>Nghi binh</b>: Công -5%, Thủ địch -12%, tổn thất -10%.</div></div>`;
  const rows=missions.map(m=>{const open=missionUnlockedV12(m),done=S.completedMissions.includes(m.id),active=warForMissionV17(m.id),me=combatPower(m.element,m.branch),terrain=campaignTerrainBonusV12(m),risk=battleRisk(me.off*terrain,m.def),side=sideObjectiveV12(m),hiddenFound=S.unlockedHiddenSpells.includes(m.hidden),disabled=!open||done||!!busy;const tip=compactTooltip(m.name,[['Nhiệm vụ',m.desc],['Địa hình',w.terrain],['Hệ đối thủ',m.element],['Nhánh chủ lực',BRANCH_META[m.branch].name],['Phòng thủ',fmt(m.def)],['Sức công khuyến nghị',fmt(Math.round(m.def*1.10))],['Mục tiêu phụ',side.text],['Đặc sản',`${fmt(m.specialReward)} ${m.specialName}`],['Phép ẩn',m.boss?(hiddenFound?SPELLS[m.hidden].name:'???'):'—']]);return `<div class="compact-row campaign-mission campaign-row ${open||done?'':'locked-row'} ${m.boss?'boss-row':''}"><div class="row-main"><div class="row-name"><canvas class="unit-badge" data-branch="${m.branch}" data-element="${m.element}" width="28" height="28"></canvas><div><div class="unit-title-line"><span class="name-only-tip hover-tip-target"><b style="color:${ELEMENT_META[m.element].color}">${m.stage}. ${m.name}</b>${tip}</span>${m.boss?'<span class="boss-badge">TRÙM</span>':''}</div><div class="small muted">${m.desc}</div><div class="mission-sub"><span>Phòng thủ ${fmt(m.def)}</span><span>${side.text}</span>${active?`<span>${warPhaseV17(active)} · ${qProgressV13(active)}%</span>`:''}</div></div></div></div><div class="row-side campaign-actions-v16"><select class="compact-input tactic-select tactic-select-v16" id="tactic_${m.id}" ${disabled?'disabled':''}><option value="balanced">Cân bằng</option><option value="assault">Đột kích</option><option value="siege">Bao vây</option><option value="feint">Nghi binh</option></select><span class="pill ${done?'good':active?'warn':open?risk[1]:''}">${done?'Đã hoàn tất':active?'Đang xuất chiến':open?risk[0]:'Chưa mở'}</span><div class="price-box reward-box-v16">+${fmt(m.rewardP)} BK · +${m.rewardLand} đất · +${fmt(m.specialReward)} ${m.specialName}</div><button class="btn ${open&&!done&&!busy?'primary':''}" data-mission-v12="${m.id}" ${disabled?'disabled':''}>${done?'Đã thắng':active?'Đang tiến hành':'Xuất quân'}</button></div></div>`;}).join('');
  return `<div class="campaign-world-tabs">${tabs}</div><div class="world-hero world-hero-v16"><div class="world-intro-v16"><div class="eyebrow">Thế giới ${wi+1}/10 · Nhịp đề xuất ${w.days}</div><h2>${w.name}</h2><p>${w.intro}</p></div>${strategyGuide}<div class="world-stats"><div><span>Tiến độ</span><b>${progress}/6</b></div><div><span>Yêu cầu nghiên cứu</span><b>${w.research}</b></div><div><span>Đặc sản</span><b>${w.specialtyName}</b></div></div></div>${warProgressCardV17()}<div class="compact-list war-list">${rows}</div>`;
};
renderRivalWar=function(){
  const busy=activeWarV17();return `${warProgressCardV17()}<div class="compact-list war-list">${S.rivals.map((r,i)=>{const active=warForRivalV17(r.name),me=combatPower(r.spellElement,r.branch),ed=enemyEffectiveDefense(r),[risk,cls]=battleRisk(me.off,ed),tip=warTargetTooltip(r),disabled=!!busy;return `<div class="compact-row rival-row"><div class="row-main"><div class="row-name"><canvas class="unit-badge" data-branch="${r.branch}" data-element="${r.element}" width="28" height="28"></canvas><div><span class="name-only-tip hover-tip-target"><b style="color:${ELEMENT_META[r.element].color}">${r.name}</b>${tip}</span><div class="small muted">${fmt(r.land)} mẫu · ${BRANCH_META[r.branch].name} · Nhóm ${r.aiTier||'Trung bình'}${active?` · ${warPhaseV17(active)} ${qProgressV13(active)}%`:''}</div></div></div></div><div class="row-side"><div class="inline-info">Thủ hiệu dụng: <b>${fmt(ed)}</b></div><span class="pill ${active?'warn':cls}">${active?'Đang xuất chiến':risk}</span><div class="price-box">Kho bạc ~${fmt(r.wealth)}</div><button class="btn ${risk==='Có lợi'&&!busy?'primary':''}" data-attack="${i}" ${disabled?'disabled':''}>${active?'Đang tiến hành':'Tấn công'}</button></div></div>`;}).join('')}</div>`;
};
const _bindDynamicV17Base=bindDynamic;
bindDynamic=function(){
  _bindDynamicV17Base();
  $$('[data-quick-complete]').forEach(b=>{const q=queueByIdV13(b.dataset.quickComplete);if(q){b.innerHTML=quickButtonHtmlV17(q);b.title=`Chi phí tối đa nếu hết thời gian: ${formatCost(quickFullCostV13(q))}`;}b.onclick=()=>startQuickChallengeV13(b.dataset.quickComplete);});
};


/* ===== v20 · fix triệt để thử thách tính nhanh ===== */
function makeNumericQuestionV20(type,tier=1){
  const lvl=Math.max(1,Math.min(5,Number(tier)||1));
  const rnd=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
  const pick=arr=>arr[Math.floor(Math.random()*arr.length)];
  const mk=(expr,answer,spread=10)=>({context:'',prompt:expr,answer:Math.trunc(answer),choices:makeChoicesV13(Math.trunc(answer),spread)});
  const pools={
    build:['sum','change','stock','percent'],
    train:['mul','div','groups','ratio'],
    research:['percent','twostep','average','ratio'],
    expedition:['time','distance','convert','pace'],
    explore:['time','distance','convert','pace'],
    war:['groups','div','percent','distance','stock']
  };
  const mode=pick(pools[type]||['sum','mul','div','percent']);
  if(mode==='sum'){
    const a=rnd(25,90+lvl*10),b=rnd(12,60),c=rnd(5,35); return mk(`${a} + ${b} − ${c} = ?`,a+b-c,14);
  }
  if(mode==='change'){
    const q=rnd(2,8),price=pick([12,15,18,20,25,30,35,40]),total=q*price,paid=Math.ceil((total+20)/50)*50;
    return mk(`${paid} − (${q} × ${price}) = ?`,paid-total,15);
  }
  if(mode==='stock'){
    const a=rnd(3,9),b=pick([12,18,24,30,36,40,48]),c=pick([10,20,30,40,50]);
    const ans=Math.max(0,a*b-c); return mk(`(${a} × ${b}) − ${c} = ?`,ans,24);
  }
  if(mode==='percent'){
    const pct=pick([10,20,25,50]),base=pick([120,160,200,240,300,320,400,480,600,800]);
    return mk(`${base} × ${pct}% = ?`,base*pct/100,30);
  }
  if(mode==='mul'){
    const a=rnd(6,14+lvl),b=rnd(4,10); return mk(`${a} × ${b} = ?`,a*b,14);
  }
  if(mode==='div'){
    const d=rnd(4,12),q=rnd(5,18),n=d*q; return mk(`${n} ÷ ${d} = ?`,q,7);
  }
  if(mode==='groups'){
    const g=rnd(3,9),e=pick([8,10,12,15,18,20,25,30,35,40]),r=pick([5,10,15,20,25,30,40]);
    return mk(`(${g} × ${e}) + ${r} = ?`,g*e+r,28);
  }
  if(mode==='ratio'){
    const d=rnd(3,8),q=rnd(8,20),bonus=rnd(5,30),n=d*q; return mk(`(${n} ÷ ${d}) + ${bonus} = ?`,q+bonus,14);
  }
  if(mode==='twostep'){
    const a=rnd(10,40),b=rnd(8,30),m=rnd(2,5); return mk(`(${a} + ${b}) × ${m} = ?`,(a+b)*m,24);
  }
  if(mode==='average'){
    const avg=rnd(20,80),d=rnd(3,15),a=avg-d,b=avg,c=avg+d; return mk(`(${a} + ${b} + ${c}) ÷ 3 = ?`,avg,15);
  }
  if(mode==='time'){
    const h=rnd(1,5),m=pick([10,15,20,30,40,45]); return mk(`(${h} × 60) + ${m} = ?`,h*60+m,35);
  }
  if(mode==='distance'){
    const speed=pick([4,5,6,8,10,12,15]),hours=rnd(2,7); return mk(`${speed} × ${hours} = ?`,speed*hours,18);
  }
  if(mode==='convert'){
    const kg=rnd(2,9); return mk(`${kg} × 1000 = ?`,kg*1000,700);
  }
  if(mode==='pace'){
    const trips=rnd(3,8),minutes=pick([15,20,25,30,35,40,45]); return mk(`${trips} × ${minutes} = ?`,trips*minutes,40);
  }
  return mk('12 + 8 = ?',20,5);
}
challengeQuestionV13=function(type,tier=1){ return makeNumericQuestionV20(type,tier); };

ensureQuickModalV13=function(){
  const old=$('#quickChallengeV13');
  if(old && !old.classList.contains('quick-v20')) old.remove();
  if($('#quickChallengeV13')) return;
  document.body.insertAdjacentHTML('beforeend',`<div id="quickChallengeV13" class="quick-overlay quick-v20 hidden" aria-modal="true" role="dialog">
    <div class="quick-shell-v20">
      <div class="quick-card quick-card-v20">
        <div class="quick-head"><div><div class="eyebrow" id="quickKindV13">TÍNH NHANH</div><h2 id="quickTitleV13">Hoàn thành ngay</h2></div><button id="quickAbortV13" class="icon-btn">×</button></div>
        <div class="quick-timer"><span id="quickTimerBarV13"></span></div>
        <div class="quick-body">
          <div class="quick-context" id="quickContextV13" style="display:none"></div>
          <div class="quick-question quick-question-v20" id="quickQuestionV13">0 + 0 = ?</div>
          <div class="quick-answers quick-answers-v20" id="quickAnswersV13"></div>
          <div class="quick-cost-wrap"><div class="quick-cost-title"><span>Chi phí đang phát sinh</span><b id="quickTimeV13">10.0s</b></div><div id="quickCostV13" class="quick-cost-grid"></div></div>
          <div id="quickResultV13" class="quick-result">Trả lời càng sớm, chi phí càng thấp.</div>
        </div>
      </div>
      <aside id="quickLossLayerV17" class="quick-loss-rail-v20" aria-live="polite">
        <div class="quick-loss-rail-title-v20">TÀI NGUYÊN ĐANG BỊ TRỪ</div>
        <div class="quick-loss-rail-hint-v20">Khoản trừ phát sinh sẽ hiện ở đây, không che đáp án.</div>
      </aside>
    </div>
  </div>`);
  $('#quickAbortV13').onclick=()=>abortQuickChallengeV13();
};
ensureQuickLossLayerV17=function(){ ensureQuickModalV13(); };
showQuickLossBurstNowV17=function(){
  if(!quickLossBufferV17||!Object.keys(quickLossBufferV17).length)return;
  ensureQuickLossLayerV17();
  const rail=$('#quickLossLayerV17'); if(!rail)return;
  const parts=Object.entries(quickLossBufferV17).filter(([,v])=>v>0).map(([k,v])=>`<span><b>−${fmt(v)}</b> ${RESOURCE_META_V11[k]?.label||k}</span>`);
  quickLossBufferV17={}; if(!parts.length)return;
  const hint=rail.querySelector('.quick-loss-rail-hint-v20'); if(hint) hint.style.display='none';
  const pop=document.createElement('div');
  pop.className='quick-loss-pop-v20';
  pop.innerHTML=`<div class="quick-loss-caption-v20">− CHI PHÍ</div>${parts.join('')}`;
  rail.prepend(pop);
  while(rail.querySelectorAll('.quick-loss-pop-v20').length>5){ rail.querySelector('.quick-loss-pop-v20:last-of-type')?.remove(); }
  setTimeout(()=>pop.classList.add('fade-v20'),900);
  setTimeout(()=>pop.remove(),1500);
};
const _startQuickChallengeV20Base=startQuickChallengeV13;
startQuickChallengeV13=function(qid){
  _startQuickChallengeV20Base(qid);
  const ctx=$('#quickContextV13'); if(ctx){ctx.textContent='';ctx.style.display='none';}
  if(quickChallengeV13?.question){
    const q=quickChallengeV13.q;
    const tier=q?.type==='research'?(TECHS[q.key]?.tier||2):q?.type==='train'?unitTier(UNITS[q.key]||UNIT_LIST[0]):Math.min(5,Math.ceil(remainingHoursV13(q)/4));
    const fresh=makeNumericQuestionV20(q?.type==='expedition'?'expedition':q?.type,tier);
    quickChallengeV13.question=fresh;
    const qEl=$('#quickQuestionV13'); if(qEl) qEl.textContent=fresh.prompt;
    const aEl=$('#quickAnswersV13'); if(aEl){
      aEl.innerHTML=fresh.choices.map(x=>`<button class="quick-answer" data-quick-answer="${x}">${fmt(x)}</button>`).join('');
      $$('[data-quick-answer]').forEach(b=>b.onclick=()=>answerQuickV13(b,Number(b.dataset.quickAnswer)));
    }
  }
};



/* ===== v21 · Kết quả thử thách giữ lại đến khi người chơi xác nhận ===== */
function quickCostPlainV21(cost){
  const parts=Object.entries(cost||{}).filter(([,v])=>v>0).map(([k,v])=>`−${fmt(v)} ${RESOURCE_META_V11[k]?.label||k}`);
  return parts.length?parts.join(' · '):'Miễn phí';
}
function previewQuickFractionV21(fraction){
  if(!quickChallengeV13)return;
  const f=Math.max(0,Math.min(1,fraction));
  const before={...(quickChallengeV13.charged||{})};
  const next={};
  Object.entries(quickChallengeV13.fullCost||{}).forEach(([k,max])=>{ next[k]=Math.floor(max*f); });
  quickChallengeV13.charged=next;
  updateQuickCostV13();
  const delta={};
  Object.entries(next).forEach(([k,v])=>{ const d=v-(before[k]||0); if(d>0)delta[k]=d; });
  if(Object.keys(delta).length)pushQuickLossV17(delta);
}
applyQuickChargeFractionV13=function(fraction){ previewQuickFractionV21(fraction); };

const _ensureQuickModalV21Base=ensureQuickModalV13;
ensureQuickModalV13=function(){
  _ensureQuickModalV21Base();
  const rail=$('#quickLossLayerV17');
  if(rail){
    const title=rail.querySelector('.quick-loss-rail-title-v20'); if(title)title.textContent='CHI PHÍ DỰ KIẾN';
    const hint=rail.querySelector('.quick-loss-rail-hint-v20'); if(hint)hint.textContent='Tài nguyên chưa bị trừ. Chi phí chỉ được áp dụng sau khi đóng kết quả.';
  }
  const result=$('#quickResultV13');
  if(result && !$('#quickApplyCloseV21')){
    result.insertAdjacentHTML('afterend',`<div id="quickSettlementV21" class="quick-settlement-v21 hidden"></div><div id="quickActionRowV22" class="quick-action-row-v22 hidden"><button id="quickRetryV22" class="btn ghost quick-retry-v22">Thử lại</button><button id="quickApplyCloseV21" class="btn primary quick-apply-close-v21">Đóng & hoàn tất</button></div>`);
  }
  const closeBtn=$('#quickApplyCloseV21'); if(closeBtn)closeBtn.onclick=()=>commitAndCloseQuickV21();
  const retryBtn=$('#quickRetryV22'); if(retryBtn)retryBtn.onclick=()=>retryQuickV22();
  const x=$('#quickAbortV13'); if(x)x.onclick=()=>abortQuickChallengeV13();
};
function resetQuickSettlementV21(){
  const box=$('#quickSettlementV21'); if(box){box.className='quick-settlement-v21 hidden';box.innerHTML='';}
  const row=$('#quickActionRowV22'); if(row)row.classList.add('hidden');
  const btn=$('#quickApplyCloseV21'); if(btn){btn.disabled=false;btn.textContent='Đóng & hoàn tất';}
  const retry=$('#quickRetryV22'); if(retry){retry.disabled=false;retry.textContent='Thử lại';}
  const rail=$('#quickLossLayerV17'); if(rail){
    rail.querySelectorAll('.quick-loss-pop-v20').forEach(x=>x.remove());
    const hint=rail.querySelector('.quick-loss-rail-hint-v20'); if(hint){hint.style.display='block';hint.textContent='Tài nguyên chưa bị trừ. Chi phí chỉ được áp dụng sau khi đóng kết quả.';}
  }
}
const _startQuickChallengeV21Base=startQuickChallengeV13;
startQuickChallengeV13=function(qid){
  _startQuickChallengeV21Base(qid);
  if(!quickChallengeV13)return;
  quickChallengeV13.pendingResult=null;
  quickChallengeV13.pendingCommitted=false;
  quickChallengeV13.elapsedSec=0;
  resetQuickSettlementV21();
  $('#quickResultV13').textContent=`Miễn phí trong ${QUICK_V13.freeSeconds.toFixed(1)} giây đầu. Sau đó chỉ hiển thị chi phí dự kiến; chưa trừ tài nguyên.`;
};
function settlementTextV21(result,cost,sec){
  const fee=quickCostPlainV21(cost);
  const hasCost=Object.values(cost||{}).some(v=>v>0);
  if(result==='correct'){
    return {cls:'good',status:'ĐÚNG',time:`${sec.toFixed(1)} giây.`,detail:hasCost?`Tài nguyên tốn: ${fee}.`:'Miễn phí tài nguyên.'};
  }
  if(result==='wrong')return {cls:'bad',status:'SAI',time:`${sec.toFixed(1)} giây.`,detail:hasCost?`Tài nguyên tốn: ${fee}.`:'Miễn phí tài nguyên.'};
  return {cls:'bad',status:'HẾT GIỜ',time:`${sec.toFixed(1)} giây.`,detail:hasCost?`Tài nguyên tốn: ${fee}.`:'Miễn phí tài nguyên.'};
}
function retryQuickV22(){
  if(!quickChallengeV13)return;
  const qid=quickChallengeV13.qId;
  closeQuickV13(true);
  setTimeout(()=>startQuickChallengeV13(qid),20);
}
finishQuickV13=function(result){
  if(!quickChallengeV13||quickChallengeV13.finished)return;
  quickChallengeV13.finished=true;
  clearInterval(quickChallengeV13.timer);
  const sec=(performance.now()-quickChallengeV13.start)/1000;
  const total=quickChallengeV13.totalSeconds||QUICK_V13.totalSeconds;
  let fraction=sec<=QUICK_V13.freeSeconds?0:(sec-QUICK_V13.freeSeconds)/(total-QUICK_V13.freeSeconds);
  if(result==='wrong')fraction=Math.max(QUICK_V13.wrongMinFee,fraction);
  if(result==='timeout')fraction=1;
  previewQuickFractionV21(fraction);
  quickChallengeV13.elapsedSec=sec;
  quickChallengeV13.pendingResult=result;
  quickChallengeV13.pendingCost={...(quickChallengeV13.charged||{})};
  $$('[data-quick-answer]').forEach(b=>b.disabled=true);
  if(result==='timeout'){
    const correct=$(`[data-quick-answer="${quickChallengeV13.question.answer}"]`); if(correct)correct.classList.add('correct');
  }
  const info=settlementTextV21(result,quickChallengeV13.pendingCost,sec);
  $('#quickResultV13').innerHTML='<b>Kết quả đã được khóa. Có thể thử lại hoặc đóng để áp dụng.</b>';
  const box=$('#quickSettlementV21');
  if(box){
    box.className=`quick-settlement-v21 ${info.cls}`;
    box.innerHTML=`<div class="quick-settlement-title-v21">KẾT QUẢ ĐÃ KHÓA</div><div class="quick-settlement-line-v22"><span>Thời gian tốn:</span> <b>${info.time}</b></div><div class="quick-settlement-line-v22"><span>Kết quả:</span> <b class="quick-status-v22 ${info.cls}">${info.status}</b> <span>(${info.detail})</span></div>`;
  }
  const row=$('#quickActionRowV22'); if(row)row.classList.remove('hidden');
  const apply=$('#quickApplyCloseV21');
  if(apply){
    apply.textContent='Đóng & hoàn tất';
  }
  const x=$('#quickAbortV13'); if(x)x.setAttribute('aria-label','Đóng và áp dụng kết quả');
};
function deductPendingCostV21(cost){
  const applied={};
  Object.entries(cost||{}).forEach(([k,v])=>{
    const amount=Math.max(0,Math.min(Math.floor(v),Math.floor(S.resources[k]||0)));
    if(amount>0){S.resources[k]=Math.max(0,(S.resources[k]||0)-amount);applied[k]=amount;}
  });
  updateVisibleResourcesV13();
  return applied;
}
function commitAndCloseQuickV21(){
  if(!quickChallengeV13||!quickChallengeV13.finished)return;
  if(quickChallengeV13.pendingCommitted)return;
  quickChallengeV13.pendingCommitted=true;
  const result=quickChallengeV13.pendingResult;
  const completedId=quickChallengeV13.qId;
  const cost=deductPendingCostV21(quickChallengeV13.pendingCost||{});
  const feeText=quickCostPlainV21(cost);
  const apply=$('#quickApplyCloseV21'); if(apply){apply.disabled=true;apply.textContent='Đã áp dụng';}
  const retry=$('#quickRetryV22'); if(retry){retry.disabled=true;retry.textContent='Thử lại';}
  const box=$('#quickSettlementV21');
  if(box){
    box.classList.add('applied');
    box.innerHTML=`<div class="quick-settlement-title-v21">ĐÃ ÁP DỤNG</div><div>${Object.keys(cost).length?`Đã trừ: ${feeText}`:'Không trừ tài nguyên.'}</div>`;
  }
  if(result==='correct'&&completedId)completeQueueImmediatelyV13(completedId);
  save(true);
  setTimeout(()=>{
    closeQuickV13(true);
    render();
    toast(result==='correct'?(Object.keys(cost).length?`Hoàn tất · ${feeText}`:'Hoàn tất miễn phí.'):(Object.keys(cost).length?`Đã áp dụng ${feeText}.`:'Đã đóng kết quả.'));
  },650);
}
abortQuickChallengeV13=function(){
  if(!quickChallengeV13){$('#quickChallengeV13')?.classList.add('hidden');return;}
  if(quickChallengeV13.finished){commitAndCloseQuickV21();return;}
  const sec=(performance.now()-quickChallengeV13.start)/1000;
  const total=quickChallengeV13.totalSeconds||QUICK_V13.totalSeconds;
  const fraction=Math.max(.25,sec<=QUICK_V13.freeSeconds?0:(sec-QUICK_V13.freeSeconds)/(total-QUICK_V13.freeSeconds));
  quickChallengeV13.finished=true; clearInterval(quickChallengeV13.timer);
  previewQuickFractionV21(fraction);
  quickChallengeV13.elapsedSec=sec;
  quickChallengeV13.pendingResult='wrong';
  quickChallengeV13.pendingCost={...(quickChallengeV13.charged||{})};
  $$('[data-quick-answer]').forEach(b=>b.disabled=true);
  $('#quickResultV13').innerHTML='<b>Đã dừng thử thách.</b>';
  const box=$('#quickSettlementV21'); if(box){box.className='quick-settlement-v21 bad';box.innerHTML=`<div class="quick-settlement-title-v21">KẾT QUẢ ĐÃ KHÓA</div><div class="quick-settlement-line-v22"><span>Thời gian tốn:</span> <b>${sec.toFixed(1)} giây.</b></div><div class="quick-settlement-line-v22"><span>Kết quả:</span> <b class="quick-status-v22 bad">SAI</b> <span>(Tài nguyên tốn: ${quickCostPlainV21(quickChallengeV13.pendingCost)}.)</span></div>`;}
  const row=$('#quickActionRowV22'); if(row)row.classList.remove('hidden');
  const apply=$('#quickApplyCloseV21'); if(apply){apply.textContent='Đóng & hoàn tất';}
};
closeQuickV13=function(clear=true){
  if(quickChallengeV13?.finished&&!quickChallengeV13?.pendingCommitted){ commitAndCloseQuickV21(); return; }
  if(quickChallengeV13?.timer)clearInterval(quickChallengeV13.timer);
  $('#quickChallengeV13')?.classList.add('hidden');
  if(clear)quickChallengeV13=null;
};



/* ===== v23 · Trung tâm rèn luyện & Kiếm tài nguyên ===== */
if(!NAV.some(x=>x[0]==='practice')) NAV.splice(NAV.length-1,0,['practice','Rèn luyện']);
const PRACTICE_RES_V23=['platinum','gold','food','meat','lumber','ore','mana'];
const PRACTICE_META_V23={
  platinum:{name:'Bạch kim',icon:'platinum'},gold:{name:'Vàng',icon:'gold'},food:{name:'Lương thực',icon:'food'},meat:{name:'Thịt',icon:'meat'},lumber:{name:'Gỗ',icon:'lumber'},ore:{name:'Quặng',icon:'ore'},mana:{name:'Mana',icon:'mana'}
};
let practiceRunV23=null;
function ensurePracticeStateV23(){
  if(!S.mathTrainingV23||typeof S.mathTrainingV23!=='object') S.mathTrainingV23={skill:2,recent:[],signatures:[],total:0,correct:0,totalTime:0,sessions:0,totalEarned:{},contracts:[],contractDay:-1};
  const m=S.mathTrainingV23;
  m.skill=Math.max(1,Math.min(5,Number(m.skill)||2));
  if(!Array.isArray(m.recent))m.recent=[]; if(!Array.isArray(m.signatures))m.signatures=[]; if(!m.totalEarned)m.totalEarned={}; if(!Array.isArray(m.contracts))m.contracts=[];
  ensureContractsV23();
}
function practiceRateV23(k){
  const p=production();
  if(k==='food') return Math.max(0,Number(p.foodGross||0));
  return Math.max(0,Number(p[k]||0));
}
function practiceTimeLimitV23(mode,skill){
  skill=Math.max(1,Math.min(5,skill||2));
  return mode==='word'?[34,32,30,28,26][skill-1]:[15,14,13,12,11][skill-1];
}
function practiceModeNameV23(m){return m==='word'?'Tình huống đời sống':'Tính nhẩm';}
function randV23(a,b){return Math.floor(Math.random()*(b-a+1))+a;}
function pickV23(a){return a[Math.floor(Math.random()*a.length)];}
function shuffleV23(a){const x=[...a];for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]];}return x;}
function choicesV23(answer,spread=10){
  answer=Math.trunc(answer); const set=new Set([answer]); let guard=0;
  while(set.size<4&&guard++<50){let d=randV23(1,Math.max(3,spread)); if(Math.random()<.5)d=-d; let v=answer+d; if(v>=0)set.add(v);}
  while(set.size<4)set.add(answer+set.size*2+1);
  return shuffleV23([...set]);
}
function registerQuestionSigV23(sig){
  const m=S.mathTrainingV23; m.signatures.push(sig); if(m.signatures.length>100)m.signatures.splice(0,m.signatures.length-100);
}
function seenSigV23(sig){return S.mathTrainingV23.signatures.includes(sig);}
function qV23(mode,template,variant,prompt,answer,spread,data=[]){
  answer=Number(answer); const sig=`${mode}|${template}|${variant}|${data.join(',')}`;
  return {mode,template,variant,prompt,answer,choices:choicesV23(answer,spread),sig};
}
function numericQuestionV23(skill){
  const s=Math.max(1,Math.min(5,skill));
  const modePool=s<=2?['add','sub','mul','div','money','time']:s===3?['add','sub','mul','div','twostep','percent','money','time']:['twostep','percent','discount','mul','div','money','time'];
  const t=pickV23(modePool);
  if(t==='add'){const a=randV23(20,80+s*40),b=randV23(10,60+s*25);return qV23('numeric','add',0,`${a} + ${b} = ?`,a+b,15,[a,b]);}
  if(t==='sub'){const b=randV23(10,50+s*15),a=b+randV23(20,100+s*35);return qV23('numeric','sub',0,`${a} − ${b} = ?`,a-b,15,[a,b]);}
  if(t==='mul'){const a=randV23(3,Math.min(15,7+s*2)),b=randV23(3,Math.min(15,8+s*2));return qV23('numeric','mul',0,`${a} × ${b} = ?`,a*b,12,[a,b]);}
  if(t==='div'){const b=randV23(2,Math.min(12,5+s*2)),ans=randV23(4,Math.min(30,10+s*4)),a=b*ans;return qV23('numeric','div',0,`${a} ÷ ${b} = ?`,ans,10,[a,b]);}
  if(t==='twostep'){const a=randV23(4,12),b=randV23(3,10),c=randV23(5,35);const plus=Math.random()<.65;const ans=plus?a*b+c:a*b-c;if(ans<0)return numericQuestionV23(skill);return qV23('numeric','twostep',plus?1:2,`(${a} × ${b}) ${plus?'+':'−'} ${c} = ?`,ans,15,[a,b,c]);}
  if(t==='percent'){const pct=pickV23(s<=3?[10,20,25,50]:[5,10,15,20,25,50]);let base=pickV23([80,100,120,160,200,240,300,400,500,600,800,1000]); while((base*pct)%100!==0)base+=20;return qV23('numeric','percent',pct,`${base} × ${pct}% = ?`,base*pct/100,20,[base,pct]);}
  if(t==='discount'){const pct=pickV23([10,20,25,50]);let base=pickV23([80,100,120,160,200,240,300,400,500,600,800,1000]);while((base*pct)%100!==0)base+=20;return qV23('numeric','discount',pct,`${base} − (${base} × ${pct}%) = ?`,base-base*pct/100,20,[base,pct]);}
  if(t==='time'){const n=randV23(2,6),mins=pickV23([15,20,25,30,40,45]);const extra=pickV23([0,5,10,15,20]);return qV23('numeric','time',0,`(${n} × ${mins}) + ${extra} = ?`,n*mins+extra,15,[n,mins,extra]);}
  const qty=randV23(2,8),price=pickV23([5,10,15,20,25,30,40,50]),paid=Math.ceil((qty*price+20)/50)*50;return qV23('numeric','money',0,`${paid} − (${qty} × ${price}) = ?`,paid-qty*price,15,[qty,price,paid]);
}
function wordQuestionV23(skill){
  const s=Math.max(1,Math.min(5,skill));
  const templates=s<=2?['share','change','packing','duration','inventory','unitprice']:s===3?['share','change','packing','duration','inventory','unitprice','discount','distance']:['share','change','packing','duration','inventory','unitprice','discount','distance','production','percent'];
  const t=pickV23(templates),v=randV23(0,3);
  if(t==='share'){const groups=randV23(2,10),each=randV23(3,18),total=groups*each;const ph=[`${total} phần hàng được chia đều cho ${groups} tổ. Mỗi tổ nhận bao nhiêu phần?`, `Kho có ${total} kiện và chia đều cho ${groups} nhóm. Mỗi nhóm nhận bao nhiêu kiện?`, `${groups} đội cùng chia đều ${total} suất tiếp tế. Mỗi đội nhận bao nhiêu suất?`, `Có ${total} món hàng đóng đều vào ${groups} thùng. Mỗi thùng có bao nhiêu món?`];return qV23('word','share',v,ph[v],each,10,[groups,each,total]);}
  if(t==='change'){const qty=randV23(2,8),price=pickV23([5,10,15,20,25,30,40,50])*1000,total=qty*price,paid=Math.ceil((total+20000)/50000)*50000;const ph=[`Mua ${qty} món, mỗi món ${fmt(price)} đồng và trả ${fmt(paid)} đồng. Tiền thừa là bao nhiêu đồng?`,`Một đơn hàng có ${qty} sản phẩm giá ${fmt(price)} đồng/sản phẩm. Khách đưa ${fmt(paid)} đồng. Cần trả lại bao nhiêu?`,`Mua ${qty} phần hàng cùng giá ${fmt(price)} đồng. Thanh toán ${fmt(paid)} đồng. Số tiền còn thừa là bao nhiêu?`,`Có ${qty} món giá bằng nhau, mỗi món ${fmt(price)} đồng. Đưa ${fmt(paid)} đồng. Nhận lại bao nhiêu đồng?`];return qV23('word','change',v,ph[v],paid-total,15000,[qty,price,paid]);}
  if(t==='packing'){const per=randV23(4,15),boxes=randV23(3,12),total=per*boxes;const ph=[`Mỗi thùng chứa ${per} kiện. ${boxes} thùng chứa tổng cộng bao nhiêu kiện?`,`Một xe chở ${boxes} thùng, mỗi thùng có ${per} gói. Tổng số gói là bao nhiêu?`,`Có ${boxes} kệ, mỗi kệ xếp ${per} hộp. Tổng cộng có bao nhiêu hộp?`,`Đóng ${per} món vào mỗi kiện. Với ${boxes} kiện cần bao nhiêu món?`];return qV23('word','packing',v,ph[v],total,15,[per,boxes]);}
  if(t==='duration'){const start=randV23(6,15),dur=randV23(2,7),end=start+dur;const ph=[`Một công việc bắt đầu lúc ${start}:00 và kết thúc lúc ${end}:00. Công việc kéo dài bao nhiêu giờ?`,`Ca làm bắt đầu ${start}:00, kéo dài đến ${end}:00. Tổng thời gian là bao nhiêu giờ?`,`Đoàn xe khởi hành lúc ${start}:00 và tới nơi lúc ${end}:00. Thời gian đi là bao nhiêu giờ?`,`Buổi học từ ${start}:00 đến ${end}:00. Thời lượng là bao nhiêu giờ?`];return qV23('word','duration',v,ph[v],dur,6,[start,dur]);}
  if(t==='inventory'){const start=randV23(80,300+s*80),out=randV23(20,Math.min(start-10,120+s*20)),add=randV23(10,90);const ans=start-out+add;const ph=[`Kho có ${start} đơn vị, xuất ${out} rồi nhập thêm ${add}. Kho còn bao nhiêu?`,`Ban đầu có ${start} kiện. Dùng ${out} kiện và bổ sung ${add} kiện. Hiện có bao nhiêu kiện?`,`Một kho ghi nhận ${start} món, giao đi ${out} món rồi nhận thêm ${add} món. Số còn lại là bao nhiêu?`,`Có ${start} phần hàng, tiêu thụ ${out} và nhập thêm ${add}. Tổng tồn cuối là bao nhiêu?`];return qV23('word','inventory',v,ph[v],ans,18,[start,out,add]);}
  if(t==='unitprice'){const qty=randV23(2,10),unit=pickV23([5,10,15,20,25,30,40,50])*1000,total=qty*unit;const ph=[`${qty} món hàng có tổng giá ${fmt(total)} đồng. Giá mỗi món là bao nhiêu đồng?`,`Một lô ${qty} sản phẩm giá tổng cộng ${fmt(total)} đồng. Đơn giá một sản phẩm là bao nhiêu?`,`Thanh toán ${fmt(total)} đồng cho ${qty} phần bằng giá nhau. Mỗi phần giá bao nhiêu?`,`Có ${qty} món giống nhau, tổng tiền ${fmt(total)} đồng. Một món giá bao nhiêu đồng?`];return qV23('word','unitprice',v,ph[v],unit,15000,[qty,unit]);}
  if(t==='discount'){const pct=pickV23([10,20,25,50]);let price=pickV23([80000,100000,120000,160000,200000,240000,300000,400000,500000]);while((price*pct)%100!==0)price+=10000;const ans=price-price*pct/100;const ph=[`Một món giá ${fmt(price)} đồng được giảm ${pct}%. Giá sau giảm là bao nhiêu đồng?`,`Giá niêm yết ${fmt(price)} đồng, khuyến mãi giảm ${pct}%. Cần thanh toán bao nhiêu?`,`Một sản phẩm trị giá ${fmt(price)} đồng giảm ${pct}%. Giá mới là bao nhiêu đồng?`,`Hóa đơn ${fmt(price)} đồng được giảm ${pct}%. Số tiền phải trả còn bao nhiêu?`];return qV23('word','discount',v,ph[v],ans,20000,[price,pct]);}
  if(t==='distance'){const speed=pickV23([20,30,40,50,60]),hours=randV23(2,5),ans=speed*hours;const ph=[`Đi đều với tốc độ ${speed} km/giờ trong ${hours} giờ. Quãng đường đi được là bao nhiêu km?`,`Một xe chạy ${speed} km/giờ trong ${hours} giờ. Xe đi được bao nhiêu km?`,`Đoàn vận tải giữ tốc độ ${speed} km/giờ suốt ${hours} giờ. Tổng quãng đường là bao nhiêu km?`,`Di chuyển liên tục ${hours} giờ với vận tốc ${speed} km/giờ. Quãng đường là bao nhiêu km?`];return qV23('word','distance',v,ph[v],ans,20,[speed,hours]);}
  if(t==='production'){const rate=pickV23([20,30,40,50,60,80,100]),hours=randV23(2,6),ans=rate*hours;const ph=[`Một xưởng tạo ${rate} đơn vị mỗi giờ. Sau ${hours} giờ tạo được bao nhiêu?`,`Sản lượng là ${rate} đơn vị/giờ. Trong ${hours} giờ thu được bao nhiêu đơn vị?`,`Mỗi giờ kho nhận ${rate} đơn vị. Sau ${hours} giờ tổng cộng nhận bao nhiêu?`,`Một dây chuyền làm ${rate} sản phẩm/giờ. Chạy ${hours} giờ được bao nhiêu sản phẩm?`];return qV23('word','production',v,ph[v],ans,25,[rate,hours]);}
  const pct=pickV23([10,20,25,50]);let base=pickV23([80,100,120,160,200,240,300,400,500,600,800,1000]);while((base*pct)%100!==0)base+=20;const ans=base*pct/100;const ph=[`${pct}% của ${base} là bao nhiêu?`,`Một kho lấy ra ${pct}% từ ${base} đơn vị. Số lấy ra là bao nhiêu?`,`Cần dành ${pct}% của tổng ${base} đơn vị. Cần dành bao nhiêu?`,`Một khoản ${base} được phân bổ ${pct}%. Phần được phân bổ là bao nhiêu?`];return qV23('word','percent',v,ph[v],ans,20,[base,pct]);
}
function validQuestionV23(q){return q&&Number.isInteger(q.answer)&&q.answer>=0&&Array.isArray(q.choices)&&q.choices.length===4&&new Set(q.choices).size===4&&q.choices.every(Number.isInteger)&&q.choices.includes(q.answer);}
function generatePracticeQuestionV23(mode,skill){
  for(let i=0;i<60;i++){
    const q=mode==='word'?wordQuestionV23(skill):numericQuestionV23(skill);
    if(validQuestionV23(q)&&!seenSigV23(q.sig)){registerQuestionSigV23(q.sig);return q;}
  }
  const a=randV23(20,90),b=randV23(10,50);const q=qV23(mode,'fallback',0,mode==='word'?`Có ${a} đơn vị và nhận thêm ${b} đơn vị. Tổng cộng có bao nhiêu?`:`${a} + ${b} = ?`,a+b,12,[a,b,Date.now()]);registerQuestionSigV23(q.sig);return q;
}
function ensureContractsV23(){
  const m=S.mathTrainingV23,day=Math.floor((S.hour||0)/24);
  if(m.contractDay===day&&m.contracts.length===3)return;
  const open=PRACTICE_RES_V23.filter(k=>practiceRateV23(k)>0); const pool=open.length?open:['platinum','food'];
  const names={platinum:'Thương hội Bạch kim',gold:'Khế ước Mỏ vàng',food:'Hợp đồng Quân lương',meat:'Đơn hàng Săn bắn',lumber:'Đơn hàng Xưởng gỗ',ore:'Khế ước Khai khoáng',mana:'Ủy nhiệm Học viện'};
  m.contracts=[0,1,2].map(i=>{
    const res=pool[(day+i*2)%pool.length],mode=i===1?'word':(i===2&&day%2?'word':'numeric'),count=[5,8,10][i],target=[.70,.80,.85][i],bonus=[1.15,1.25,1.35][i];
    return {id:`c_${day}_${i}`,name:names[res],resource:res,mode,count,target,bonus,completed:false};
  }); m.contractDay=day;
}
function rewardPerCorrectV23(resource,mode,skill,streak){
  const rate=practiceRateV23(resource); const mins=mode==='word'?5:4; const difficulty=1+(skill-1)*.04; const combo=1+Math.min(5,Math.max(0,streak-1))*.02;
  return Math.max(1,Math.round(rate*(mins/60)*difficulty*combo));
}
function adaptiveSummaryV23(){
  const m=S.mathTrainingV23,rec=m.recent.slice(-20); if(!rec.length)return {acc:0,avg:0};
  const acc=rec.filter(x=>x.ok).length/rec.length,avg=rec.reduce((a,x)=>a+x.sec,0)/rec.length; return {acc,avg};
}
function updateAdaptiveV23(ok,sec,limit,mode){
  const m=S.mathTrainingV23;m.total++;if(ok)m.correct++;m.totalTime+=sec;m.recent.push({ok,sec,limit,mode});if(m.recent.length>40)m.recent.shift();
  if(m.total%10!==0)return;
  const r=m.recent.slice(-20); if(r.length>=10){const acc=r.filter(x=>x.ok).length/r.length,avg=r.reduce((a,x)=>a+x.sec/x.limit,0)/r.length;if(acc>=.90&&avg<=.58)m.skill=Math.min(5,m.skill+1);else if(acc<.68)m.skill=Math.max(1,m.skill-1);}
}
function renderPracticeV23(){
  ensurePracticeStateV23(); const m=S.mathTrainingV23,summary=adaptiveSummaryV23();
  const resources=PRACTICE_RES_V23.map(k=>{const rate=practiceRateV23(k),open=rate>0;return `<button class="practice-resource-v23 ${open?'':'locked'}" data-practice-resource="${k}" ${open?'':'disabled'}><canvas class="mini-canvas" data-icon="${PRACTICE_META_V23[k].icon}" width="28" height="28"></canvas><div><b>${PRACTICE_META_V23[k].name}</b><span>${open?`${fmt(rate)}/giờ`:'Chưa có sản lượng'}</span></div></button>`;}).join('');
  const contracts=m.contracts.map(c=>{const rate=practiceRateV23(c.resource),open=rate>0;return `<div class="practice-contract-v23 ${c.completed?'done':''}"><div><div class="eyebrow">HỢP ĐỒNG TÀI NGUYÊN</div><h4>${c.name}</h4><div class="small muted">${practiceModeNameV23(c.mode)} · ${c.count} câu · cần ${Math.round(c.target*100)}% chính xác</div></div><div class="contract-reward-v23"><span>Thưởng</span><b>×${c.bonus.toFixed(2)}</b></div><button class="btn ${open&&!c.completed?'primary':''}" data-start-contract-v23="${c.id}" ${open&&!c.completed?'':'disabled'}>${c.completed?'Đã hoàn thành':'Nhận hợp đồng'}</button></div>`;}).join('');
  return `<div class="practice-hero-v23"><div><div class="eyebrow">TRUNG TÂM RÈN LUYỆN</div><h2>Kiếm tài nguyên bằng tính toán</h2><p>Luyện tính nhẩm, hoàn thành hợp đồng và tích lũy thêm tài nguyên.</p></div><div class="practice-skill-v23"><span>Độ khó thích nghi</span><b>Cấp ${m.skill}/5</b><small>${summary.acc?`${Math.round(summary.acc*100)}% đúng · ${summary.avg.toFixed(1)}s/câu`:'Chưa có dữ liệu luyện tập.'}</small></div></div>
  <div class="grid two practice-grid-v23">
    ${card('Kiếm tài nguyên',`<div class="section-note">Chọn tài nguyên, kiểu câu hỏi và số câu. <b>Tính nhẩm</b> có nhịp nhanh; <b>Tình huống đời sống</b> có thời gian đọc dài hơn.</div><div class="practice-resource-grid-v23">${resources}</div><div class="practice-config-v23"><label>Kiểu bài<select id="practiceModeV23" class="compact-input"><option value="numeric">Tính nhẩm</option><option value="word">Tình huống đời sống</option></select></label><label>Số câu<select id="practiceCountV23" class="compact-input"><option value="5">5 câu · Luyện nhẹ</option><option value="10" selected>10 câu · Tiêu chuẩn</option><option value="15">15 câu · Thử thách</option></select></label><button id="practiceStartV23" class="btn primary" disabled>Bắt đầu luyện</button></div>`) }
    ${card('Thống kê luyện tập',`<div class="practice-stats-v23"><div><span>Tổng câu</span><b>${fmt(m.total)}</b></div><div><span>Đúng</span><b>${m.total?Math.round(m.correct/m.total*100):0}%</b></div><div><span>Thời gian TB</span><b>${m.total?(m.totalTime/m.total).toFixed(1):'0.0'}s</b></div><div><span>Buổi luyện</span><b>${fmt(m.sessions)}</b></div></div>`) }
  </div>
  ${card('Hợp đồng tài nguyên',`<div class="contract-list-v23">${contracts}</div>`)} `;
}
function ensurePracticeModalV23(){
  if($('#practiceOverlayV23'))return;
  document.body.insertAdjacentHTML('beforeend',`<div id="practiceOverlayV23" class="practice-overlay-v23 hidden" role="dialog" aria-modal="true"><div class="practice-modal-v23"><div class="practice-modal-head-v23"><div><div class="eyebrow" id="practiceRunKindV23">RÈN LUYỆN</div><h2 id="practiceRunTitleV23">Kiếm tài nguyên</h2></div><button id="practiceCloseV23" class="icon-btn">×</button></div><div class="practice-run-top-v23"><div><span id="practiceProgressTextV23">Câu 1/10</span><b id="practiceTimerV23">15.0s</b></div><div class="mini-progress"><span id="practiceTimerBarV23" style="width:100%"></span></div><div class="practice-bank-v23"><span>Kho luyện tập</span><b id="practiceBankV23">+0</b></div></div><div id="practiceQuestionV23" class="practice-question-v23"></div><div id="practiceAnswersV23" class="practice-answers-v23"></div><div id="practiceFeedbackV23" class="practice-feedback-v23"></div><div id="practiceFinalV23" class="practice-final-v23 hidden"></div></div></div>`);
  $('#practiceCloseV23').onclick=()=>closePracticeV23();
}
function startPracticeV23(resource,mode,count,contractId=null){
  ensurePracticeStateV23();ensurePracticeModalV23();const rate=practiceRateV23(resource);if(rate<=0)return toast('Tài nguyên này chưa có nguồn sản xuất.');
  practiceRunV23={resource,mode,count:Number(count),contractId,index:0,correct:0,streak:0,bank:0,totalTime:0,answers:[],timer:null,current:null,start:0,finished:false};
  $('#practiceOverlayV23').classList.remove('hidden');$('#practiceFinalV23').classList.add('hidden');$('#practiceQuestionV23').classList.remove('hidden');$('#practiceAnswersV23').classList.remove('hidden');nextPracticeQuestionV23();
}
function nextPracticeQuestionV23(){
  const r=practiceRunV23;if(!r||r.finished)return;if(r.index>=r.count)return finishPracticeSessionV23();
  const skill=S.mathTrainingV23.skill,q=generatePracticeQuestionV23(r.mode,skill),limit=practiceTimeLimitV23(r.mode,skill);r.current=q;r.start=performance.now();r.limit=limit;
  $('#practiceRunKindV23').textContent=`${PRACTICE_META_V23[r.resource].name.toUpperCase()} · ${practiceModeNameV23(r.mode).toUpperCase()}`;$('#practiceRunTitleV23').textContent=r.contractId?'Hợp đồng tài nguyên':'Kiếm tài nguyên';$('#practiceProgressTextV23').textContent=`Câu ${r.index+1}/${r.count}`;$('#practiceQuestionV23').textContent=q.prompt;$('#practiceFeedbackV23').textContent=`Câu đúng hiện tại: +${fmt(rewardPerCorrectV23(r.resource,r.mode,skill,r.streak+1))} ${PRACTICE_META_V23[r.resource].name}`;$('#practiceAnswersV23').innerHTML=q.choices.map(x=>`<button class="practice-answer-v23" data-practice-answer="${x}">${fmt(x)}</button>`).join('');$$('[data-practice-answer]').forEach(b=>b.onclick=()=>answerPracticeV23(b,Number(b.dataset.practiceAnswer)));updatePracticeBankV23();
  clearInterval(r.timer);r.timer=setInterval(()=>{const sec=(performance.now()-r.start)/1000,remain=Math.max(0,limit-sec);$('#practiceTimerV23').textContent=`${remain.toFixed(1)}s`;$('#practiceTimerBarV23').style.width=`${Math.max(0,remain/limit*100)}%`;if(sec>=limit){clearInterval(r.timer);timeoutPracticeV23();}},100);
}
function updatePracticeBankV23(){if(!practiceRunV23)return;$('#practiceBankV23').textContent=`+${fmt(practiceRunV23.bank)} ${PRACTICE_META_V23[practiceRunV23.resource].name}`;}
function answerPracticeV23(btn,value){
  const r=practiceRunV23;if(!r||r.finished||!r.current)return;clearInterval(r.timer);const sec=(performance.now()-r.start)/1000,ok=value===r.current.answer;$$('[data-practice-answer]').forEach(b=>b.disabled=true);if(ok){btn.classList.add('correct');r.correct++;r.streak++;const gain=rewardPerCorrectV23(r.resource,r.mode,S.mathTrainingV23.skill,r.streak);r.bank+=gain;$('#practiceFeedbackV23').innerHTML=`<b class="good-text">Đúng</b> · +${fmt(gain)} ${PRACTICE_META_V23[r.resource].name}`;}else{btn.classList.add('wrong');r.streak=0;const c=$(`[data-practice-answer="${r.current.answer}"]`);if(c)c.classList.add('correct');$('#practiceFeedbackV23').innerHTML=`<b class="danger-text">Chưa đúng</b> · đáp án: ${fmt(r.current.answer)}`;}r.totalTime+=sec;r.answers.push({ok,sec});updateAdaptiveV23(ok,sec,r.limit,r.mode);updatePracticeBankV23();r.index++;setTimeout(nextPracticeQuestionV23,900);
}
function timeoutPracticeV23(){const r=practiceRunV23;if(!r||r.finished)return;$$('[data-practice-answer]').forEach(b=>b.disabled=true);const c=$(`[data-practice-answer="${r.current.answer}"]`);if(c)c.classList.add('correct');r.streak=0;r.totalTime+=r.limit;r.answers.push({ok:false,sec:r.limit});updateAdaptiveV23(false,r.limit,r.limit,r.mode);$('#practiceFeedbackV23').innerHTML=`<b class="warning">Hết thời gian</b> · đáp án: ${fmt(r.current.answer)}`;r.index++;setTimeout(nextPracticeQuestionV23,1000);}
function finishPracticeSessionV23(){
  const r=practiceRunV23;if(!r)return;r.finished=true;clearInterval(r.timer);const accuracy=r.count?r.correct/r.count:0,avg=r.count?r.totalTime/r.count:0;let multiplier=1,bonusText='';const c=r.contractId?S.mathTrainingV23.contracts.find(x=>x.id===r.contractId):null;if(c&&accuracy>=c.target){multiplier=c.bonus;c.completed=true;bonusText=`Hợp đồng đạt yêu cầu · thưởng ×${c.bonus.toFixed(2)}`;}
  if(accuracy>=1){multiplier*=1.15;bonusText+=(bonusText?' · ':'')+'100% chính xác +15%';}else if(accuracy>=.9){multiplier*=1.10;bonusText+=(bonusText?' · ':'')+'≥90% chính xác +10%';}
  const rate=practiceRateV23(r.resource),cap=rate*(r.mode==='word'?1.35:1.15)*(c?1.25:1);r.bank=Math.min(Math.round(r.bank*multiplier),Math.round(cap));r.finalReward=r.bank;
  $('#practiceQuestionV23').classList.add('hidden');$('#practiceAnswersV23').classList.add('hidden');$('#practiceFeedbackV23').textContent='';const f=$('#practiceFinalV23');f.classList.remove('hidden');f.innerHTML=`<div class="practice-final-title-v23">HOÀN TẤT BUỔI LUYỆN</div><div class="practice-final-stats-v23"><div><span>Chính xác</span><b>${Math.round(accuracy*100)}%</b></div><div><span>Thời gian TB</span><b>${avg.toFixed(1)}s</b></div><div><span>Độ khó hiện tại</span><b>Cấp ${S.mathTrainingV23.skill}/5</b></div></div>${bonusText?`<div class="section-note good-text">${bonusText}</div>`:''}<div class="practice-final-reward-v23"><span>Nhận</span><b>+${fmt(r.finalReward)} ${PRACTICE_META_V23[r.resource].name}</b></div><div class="practice-final-actions-v23"><button id="practiceAgainV23" class="btn ghost">Luyện tiếp</button><button id="practiceClaimV23" class="btn primary">Nhận tài nguyên</button></div>`;$('#practiceClaimV23').onclick=()=>claimPracticeRewardV23(false);$('#practiceAgainV23').onclick=()=>claimPracticeRewardV23(true);
}
function claimPracticeRewardV23(again){const r=practiceRunV23;if(!r||!r.finished)return;S.resources[r.resource]=(S.resources[r.resource]||0)+(r.finalReward||0);const m=S.mathTrainingV23;m.sessions++;m.totalEarned[r.resource]=(m.totalEarned[r.resource]||0)+(r.finalReward||0);const cfg={resource:r.resource,mode:r.mode,count:r.count,contractId:null};save(true);toast(`+${fmt(r.finalReward||0)} ${PRACTICE_META_V23[r.resource].name}`);practiceRunV23=null;if(again){startPracticeV23(cfg.resource,cfg.mode,cfg.count,null);}else{closePracticeV23();render();}}
function closePracticeV23(){if(practiceRunV23?.timer)clearInterval(practiceRunV23.timer);practiceRunV23=null;$('#practiceOverlayV23')?.classList.add('hidden');}
function bindPracticeV23(){
  let selected=null;$$('[data-practice-resource]').forEach(b=>b.onclick=()=>{$$('[data-practice-resource]').forEach(x=>x.classList.remove('active'));b.classList.add('active');selected=b.dataset.practiceResource;const start=$('#practiceStartV23');if(start)start.disabled=false;});
  const start=$('#practiceStartV23');if(start)start.onclick=()=>{if(!selected)return;startPracticeV23(selected,$('#practiceModeV23').value,Number($('#practiceCountV23').value));};
  $$('[data-start-contract-v23]').forEach(b=>b.onclick=()=>{const c=S.mathTrainingV23.contracts.find(x=>x.id===b.dataset.startContractV23);if(c)startPracticeV23(c.resource,c.mode,c.count,c.id);});
}
const _bindDynamicV23Base=bindDynamic;
bindDynamic=function(){_bindDynamicV23Base();if(page==='practice')bindPracticeV23();};
const _renderV23Base=render;
render=function(){
  ensurePracticeStateV23();
  if(page!=='practice'){_renderV23Base();return;}
  initNav();$$('#nav [data-page]').forEach(b=>b.classList.toggle('active',b.dataset.page===page));$('#pageTitle').textContent='Rèn luyện';$('#realmName').textContent=S.realmName;resourceBar();$('#content').innerHTML=renderPracticeV23();bindDynamic();drawAllCanvases();updateGameClockV13();
};

ensureV10State(); ensureV11State(); ensureV12State(); ensureV13State(); ensurePracticeStateV23(); save(true);

initNav();
$('#saveBtn').onclick=()=>save();
bindSaveSlots();
const closeGameBtn=$('#kanbanCloseGame'); if(closeGameBtn) closeGameBtn.onclick=()=>{ autosaveNow(); window.parent?.postMessage({type:'vuong-quoc-so-lieu-close'},'*'); };
window.addEventListener('pagehide',autosaveNow);
window.addEventListener('beforeunload',autosaveNow);
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')autosaveNow();});
setInterval(autosaveNow,10000);
$('#resetBtn').onclick=()=>{ if(confirm('Xoá tiến trình của ván hiện tại và chơi lại từ đầu?')){ localStorage.removeItem(storageKey()); S=initialState(); ensureV10State(); ensureV11State(); ensureV12State(); ensureV13State(); ensurePracticeStateV23(); page='overview'; militaryTab='infantry'; magicElementTab='Kim'; warTab='campaign'; lastResourceSnapshot=null; save(true); render(); updateSaveSlotUI(); toast(`Đã tạo Ván ${activeSaveSlot} mới.`); } };
$('#modalClose').onclick=()=>$('#modal').classList.add('hidden');
$('#modal').onclick=e=>{ if(e.target.id==='modal') $('#modal').classList.add('hidden'); };
render();
ensureQuickModalV13();
syncRealtimeV13();
setInterval(syncRealtimeV13,60000);
})();
