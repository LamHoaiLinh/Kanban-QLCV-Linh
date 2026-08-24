// Farm V2 - toàn bộ dữ liệu cân bằng tập trung tại đây.
export const SAVE_KEY='farmSaveV2';
export const LEGACY_SAVE_KEY='farmTycoonSave';
export const SAVE_VERSION=2;
export const MAX_PLOTS=24;
export const INITIAL_PLOTS=8;
export const INITIAL_GOLD=450;
export const INITIAL_WAREHOUSE=50;

export const MATERIAL_CONFIG={
  wood:{name:'Gỗ',icon:'🪵'},stone:{name:'Đá',icon:'🪨'},brick:{name:'Gạch',icon:'🧱'},iron:{name:'Sắt',icon:'⚙️'},glass:{name:'Kính',icon:'🔷'},paint:{name:'Sơn',icon:'🎨'},fabric:{name:'Vải',icon:'🧵'},rich_soil:{name:'Đất tốt',icon:'🟫'},fertilizer:{name:'Phân hữu cơ',icon:'🌿'},special_seed:{name:'Hạt giống đặc biệt',icon:'🌟'}
};

// growMin là thời gian thật. Cây dài ngày không nhất thiết có ROI/phút cao nhất.
export const CROP_CONFIG=[
{id:'carrot',name:'Cà rốt',level:1,seedCost:8,growMin:2,yield:3,basePrice:5,waterNeed:.55,disease:.18,exp:3,group:'rau',rarity:'thường',shape:'root',colors:['#3f9b4d','#f28c28']},
{id:'potato',name:'Khoai tây',level:1,seedCost:12,growMin:4,yield:4,basePrice:6,waterNeed:.45,disease:.17,exp:4,group:'củ',rarity:'thường',shape:'root',colors:['#559b48','#c99b62']},
{id:'lettuce',name:'Xà lách',level:2,seedCost:15,growMin:3,yield:4,basePrice:7,waterNeed:.70,disease:.22,exp:5,group:'rau',rarity:'thường',shape:'leaf',colors:['#71bd55','#a7df72']},
{id:'corn',name:'Bắp',level:3,seedCost:22,growMin:8,yield:5,basePrice:10,waterNeed:.58,disease:.22,exp:7,group:'rau',rarity:'thường',shape:'corn',colors:['#4e9e45','#f4cf43']},
{id:'tomato',name:'Cà chua',level:4,seedCost:28,growMin:10,yield:5,basePrice:13,waterNeed:.68,disease:.28,exp:9,group:'rau',rarity:'thường',shape:'berry',colors:['#41994c','#e94c3d']},
{id:'cabbage',name:'Bắp cải',level:5,seedCost:34,growMin:14,yield:5,basePrice:17,waterNeed:.70,disease:.24,exp:11,group:'rau',rarity:'thường',shape:'leaf',colors:['#4e9a63','#8ecb89']},
{id:'sweet_potato',name:'Khoai lang',level:6,seedCost:42,growMin:18,yield:5,basePrice:21,waterNeed:.42,disease:.18,exp:13,group:'củ',rarity:'thường',shape:'root',colors:['#559b48','#a85761']},
{id:'strawberry',name:'Dâu tây',level:7,seedCost:54,growMin:16,yield:4,basePrice:29,waterNeed:.75,disease:.32,exp:17,group:'trái',rarity:'khá',shape:'berry',colors:['#389548','#e73e4e']},
{id:'pumpkin',name:'Bí đỏ',level:8,seedCost:68,growMin:28,yield:4,basePrice:37,waterNeed:.48,disease:.20,exp:19,group:'rau',rarity:'khá',shape:'melon',colors:['#4f9849','#ed8b2e']},
{id:'onion',name:'Hành tây',level:9,seedCost:72,growMin:12,yield:5,basePrice:33,waterNeed:.45,disease:.18,exp:20,group:'củ',rarity:'khá',shape:'root',colors:['#4e9c52','#d9bd84']},
{id:'bell_pepper',name:'Ớt chuông',level:10,seedCost:88,growMin:22,yield:5,basePrice:42,waterNeed:.68,disease:.30,exp:23,group:'rau',rarity:'khá',shape:'berry',colors:['#399248','#e04b3d']},
{id:'watermelon',name:'Dưa hấu',level:11,seedCost:110,growMin:35,yield:3,basePrice:72,waterNeed:.72,disease:.26,exp:27,group:'trái',rarity:'khá',shape:'melon',colors:['#3d9046','#2e7d4e']},
{id:'pineapple',name:'Dứa',level:12,seedCost:126,growMin:50,yield:3,basePrice:86,waterNeed:.42,disease:.22,exp:29,group:'trái',rarity:'khá',shape:'pine',colors:['#4c9650','#d7a832']},
{id:'grape',name:'Nho',level:13,seedCost:145,growMin:42,yield:5,basePrice:66,waterNeed:.62,disease:.30,exp:34,group:'trái',rarity:'hiếm',shape:'vine',colors:['#448f4b','#7b55aa']},
{id:'orange',name:'Cam',level:14,seedCost:165,growMin:65,yield:4,basePrice:92,waterNeed:.55,disease:.26,exp:37,group:'trái',rarity:'hiếm',shape:'tree',colors:['#438d45','#ed8d2f']},
{id:'lemon',name:'Chanh',level:15,seedCost:176,growMin:55,yield:5,basePrice:79,waterNeed:.52,disease:.24,exp:39,group:'trái',rarity:'hiếm',shape:'tree',colors:['#438d45','#e5d84b']},
{id:'apple',name:'Táo',level:16,seedCost:210,growMin:75,yield:4,basePrice:108,waterNeed:.55,disease:.26,exp:45,group:'trái',rarity:'hiếm',shape:'tree',colors:['#438d45','#d94b4b']},
{id:'mango',name:'Xoài',level:18,seedCost:250,growMin:90,yield:4,basePrice:128,waterNeed:.48,disease:.23,exp:51,group:'trái',rarity:'hiếm',shape:'tree',colors:['#438d45','#f0b83f']},
{id:'dragon_fruit',name:'Thanh long',level:20,seedCost:300,growMin:105,yield:4,basePrice:152,waterNeed:.35,disease:.18,exp:58,group:'trái',rarity:'quý',shape:'cactus',colors:['#388c59','#e65f85']},
{id:'blueberry',name:'Việt quất',level:22,seedCost:360,growMin:120,yield:6,basePrice:124,waterNeed:.65,disease:.30,exp:65,group:'trái',rarity:'quý',shape:'berry',colors:['#3e8e4f','#4d5fa8']}
];

export const SPEED_UPGRADES=[
{level:0,mult:1,cost:0},{level:1,mult:1.05,cost:1},{level:2,mult:1.10,cost:2},{level:3,mult:1.16,cost:3},{level:4,mult:1.22,cost:5},{level:5,mult:1.30,cost:8},{level:6,mult:1.38,cost:12},{level:7,mult:1.47,cost:18},{level:8,mult:1.57,cost:25}
];

export const DIAMOND_RECIPE_CONFIG=[
{id:'d1',name:'Giỏ nông sản xanh',level:4,crops:{carrot:45,corn:24,tomato:15},materials:{wood:3},diamond:1},
{id:'d2',name:'Giỏ trái cây tươi',level:8,crops:{strawberry:22,watermelon:8},materials:{fertilizer:3},diamond:1},
{id:'d3',name:'Thùng hàng nhà hàng',level:12,crops:{tomato:25,cabbage:20,pineapple:8},materials:{wood:4,brick:2},diamond:1},
{id:'d4',name:'Giỏ đặc sản',level:16,crops:{grape:14,orange:12,apple:10},materials:{glass:2,paint:2},diamond:1},
{id:'d5',name:'Giỏ nông sản quý',level:20,crops:{mango:10,dragon_fruit:8,blueberry:12},materials:{iron:2,special_seed:1},diamond:2}
];

const villaNames=['Móng','Khung','Tường','Mái','Cửa chính','Cửa sổ','Hiên','Phòng khách','Nhà bếp','Phòng ngủ','Cổng','Hàng rào','Đường đá','Bồn hoa','Cây ăn trái','Ghế nghỉ','Đèn sân','Hồ cá','Cầu nhỏ','Giàn hoa','Xích đu','Bàn trà','Nhà kho','Giếng','Bồn nước','Nhà kính','Khu ươm giống','Kho lạnh','Hệ thống tưới','Khu đóng gói','Cối xay gió','Đài phun nước','Hồ sen','Vườn hoa','Chuồng thú','Biển tên Farm','Đèn dây','Tượng nhỏ','Vườn cây ăn trái','Góc nghỉ chân'];
export const VILLA_CONFIG=villaNames.map((name,i)=>({
 id:`villa_${i+1}`,name,category:i<10?'Nhà chính':i<22?'Sân vườn':i<30?'Khu nông nghiệp':'Trang trí',level:Math.max(3,Math.ceil((i+1)/2)+2),diamond:i<4?0:(i%5===0?2:1),materials:{wood:3+Math.floor(i/4),stone:2+Math.floor(i/6),...(i>10?{brick:1+Math.floor(i/8)}:{}),...(i>20?{iron:1+Math.floor(i/12)}:{})},gold:120+Math.round(i*i*14)
}));

export const WEATHER_CONFIG=[
{id:'sunny',name:'Nắng',icon:'☀️',waterFactor:1,growth:1,quality:0},
{id:'cloudy',name:'Nhiều mây',icon:'☁️',waterFactor:.9,growth:1.02,quality:.03},
{id:'rain',name:'Mưa',icon:'🌧️',waterFactor:.5,growth:1.03,quality:.04},
{id:'hot',name:'Nóng',icon:'🌤️',waterFactor:1.25,growth:1.03,quality:-.04},
{id:'breeze',name:'Gió nhẹ',icon:'🍃',waterFactor:.95,growth:1.01,quality:.02}
];

export const HELP_CONFIG={
 start:['Chọn một loại hạt giống rồi chạm vào ô đất trống để gieo.','Cây trưởng thành theo thời gian thật, kể cả khi đóng Farm.','Thu hoạch đưa nông sản vào Kho; không cộng Vàng trực tiếp.'],
 crop:['Mỗi cây có thời gian lớn, nhu cầu nước và độ nhạy bệnh khác nhau.','Màu biểu tượng trên ô đất giúp nhận biết cây khô, bệnh hoặc đã sẵn sàng thu hoạch.'],
 water:['Trong khoảng 18 giờ đầu cây gần như an toàn. Sau đó đất sẽ khô dần.','Mưa tự tưới cây. Nâng Hệ thống tưới trong Nhà Vườn giúp giảm thao tác về sau.'],
 disease:['Cây sẽ bắt đầu bệnh rõ hơn nếu bị khô lâu; khi thấy biểu tượng ⚠️ hãy dùng thao tác Chăm bệnh để cứu cây và giữ năng suất.','Có thể dùng Phân hữu cơ hoặc một ít Vàng để chăm bệnh; một số cây nhạy bệnh sẽ xuống sức nhanh hơn.'],
 warehouse:['Thu hoạch chỉ thực hiện khi Kho còn đủ chỗ.','1 Kim Cương mở thêm 5 chỗ và luôn cần bạn chủ động xác nhận.'],
 orders:['Có 6 ô đơn hàng. Hoàn thành đơn nhận Vàng, EXP, tình cảm và vật liệu.','Đơn dễ hồi lại rất nhanh, đơn khó tối đa cũng chỉ chờ khoảng 10 phút.'],
 diamond:['Kim Cương không mua bằng Vàng hoặc tiền thật.','Đổi nông sản + vật liệu, hoàn thành thành tựu và mục tiêu để nhận Kim Cương.'],
 villa:['Nhà Vườn là mục tiêu dài hạn gồm 40 hạng mục.','Cần phối hợp Vàng, vật liệu, Kim Cương và cấp độ.'],
 speed:['Nâng tốc độ cây chỉ dùng Kim Cương và là nâng cấp vĩnh viễn.','Tăng tốc có ích nhưng không nên dồn toàn bộ Kim Cương vào một lựa chọn.'],
 material:['Vật liệu đến từ đơn hàng, thành tựu và đổi nông sản.','Một phần vật liệu dùng cho Nhà Vườn và công thức đổi Kim Cương.'],
 weather:['Thời tiết thay đổi theo chu kỳ và chỉ tác động nhẹ.','Không có thiên tai phá Farm.'],
 dead:['Cây chỉ chết sau thời gian dài thiếu chăm sóc hoặc bệnh kéo dài.','Khi cây chết, Farm lưu nguyên nhân và thời điểm để giải thích.']
};
