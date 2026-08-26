const GAME_DATA = (() => {
  const rarityMeta = {
    common:    { name:'Phổ thông',  color:'#d9dde8', rank:1 },
    uncommon:  { name:'Cải tiến',   color:'#69d17d', rank:2 },
    rare:      { name:'Hiếm',       color:'#5ca8ff', rank:3 },
    epic:      { name:'Sử thi',     color:'#bd78ff', rank:4 },
    legendary: { name:'Truyền thuyết', color:'#ffb84d', rank:5 },
    mythic:    { name:'Thần thoại', color:'#55e7dc', rank:6 }
  };
  const rarityByIndex = i => i <= 3 ? 'common' : i <= 5 ? 'uncommon' : i <= 7 ? 'rare' : i <= 9 ? 'epic' : i <= 11 ? 'legendary' : 'mythic';
  const icon = id => `assets/generated/${id}.svg`;
  const items = {};
  const addItem = (id,name,basePrice,group,rarity,description,extra={}) => {
    items[id] = { id,name,icon:icon(id),basePrice,group,rarity,description,...extra };
    return items[id];
  };

  const gatheringDefs = [
    ['pebble','Đá vụn',4,1,4000,'Mảnh đá nhỏ dùng cho các công thức rất sớm.'],
    ['branch','Cành khô',5,2,5000,'Nguyên liệu gỗ thô để chế tạo dụng cụ ban đầu.'],
    ['herb','Thảo dược',9,3,6200,'Dược liệu cơ bản; về sau dùng cho chế phẩm và nhiệm vụ.'],
    ['wild_berry','Quả rừng',12,4,7600,'Lương thực tự nhiên, có giá trị bán và dùng cho chế biến.'],
    ['flax','Cây lanh',18,5,9000,'Sợi thực vật bền, dùng cho túi và trang bị nhẹ.'],
    ['resin','Nhựa cây',25,6,10800,'Chất kết dính tự nhiên dùng trong chế tác.'],
    ['wild_honey','Mật ong rừng',38,7,13200,'Nguyên liệu hiếm cho thực phẩm và hợp đồng giá cao.'],
    ['moon_flower','Hoa trăng',62,9,16000,'Hoa chỉ nở ở vùng đặc biệt, dùng trong đồ nghề cao cấp.'],
    ['crystal_moss','Rêu tinh thể',95,11,19500,'Rêu hấp thụ khoáng lực, thường được thương nhân săn tìm.'],
    ['spirit_root','Linh căn',150,14,24500,'Rễ cổ chứa năng lượng, nên giữ cho công thức trung-cao cấp.'],
    ['star_seed','Hạt sao',240,18,32000,'Hạt quý hiếm có giá trị lớn và liên quan đến vùng cuối game.'],
    ['ancient_essence','Tinh hoa cổ đại',420,24,43000,'Tinh chất cực hiếm, dùng cho vật phẩm tối thượng.']
  ];
  gatheringDefs.forEach((d,i)=>addItem(d[0],d[1],d[2],'Tài nguyên',rarityByIndex(i+1),d[5]));

  const miningDefs = [
    ['copper_ore','Quặng đồng',9,1,5200,'Quặng kim loại cơ bản để luyện Phôi đồng.'],
    ['tin_ore','Quặng thiếc',11,2,6100,'Quặng mềm dùng trong hợp kim và dụng cụ sơ cấp.'],
    ['iron_ore','Quặng sắt',13,3,7200,'Nguyên liệu nền của Luyện kim, Rèn và mở khóa nghề.'],
    ['coal','Than',12,4,8400,'Nhiên liệu quan trọng để luyện sắt, thép và kim loại cao cấp.'],
    ['silver_ore','Quặng bạc',28,6,10500,'Quặng quý dùng cho phôi bạc và hàng giá trị cao.'],
    ['gold_ore','Quặng vàng',45,8,13200,'Kim loại quý, giá bán cao nhưng còn dùng cho chế tác.'],
    ['mithril_ore','Quặng Mithril',72,10,16800,'Quặng hiếm nhẹ và bền, dùng cho dụng cụ cao cấp.'],
    ['obsidian','Hắc diện thạch',105,13,21500,'Khoáng vật siêu cứng dùng cho tấm chịu lực và trang bị.'],
    ['crystal_ore','Quặng tinh thể',155,16,27800,'Tinh thể khoáng lực cho các công cụ Sử thi.'],
    ['titanium_ore','Quặng Titan',230,20,36000,'Kim loại cao cấp cần cho dụng cụ và công trình lớn.'],
    ['star_metal_ore','Tinh quặng sao',360,25,47500,'Khoáng vật từ thiên thạch, cực kỳ giá trị.'],
    ['void_ore','Hư không khoáng',620,32,65000,'Khoáng vật tối thượng chỉ xuất hiện ở vùng rất sâu.']
  ];
  miningDefs.forEach((d,i)=>addItem(d[0],d[1],d[2],'Quặng',rarityByIndex(i+1),d[5]));

  const woodDefs = [
    ['softwood','Gỗ mềm',8,1,5500,'Gỗ phổ thông dùng cho chuôi, cán và đồ nghề sớm.'],
    ['pinewood','Gỗ thông',10,2,6500,'Gỗ nhẹ, dễ gia công và thường dùng cho dụng cụ.'],
    ['oakwood','Gỗ sồi',14,3,7600,'Gỗ chắc, dùng cho cán dụng cụ và đơn hàng.'],
    ['hardwood','Gỗ cứng',18,4,9000,'Gỗ bền dùng cho vũ khí và công cụ tốt hơn.'],
    ['cedarwood','Gỗ tuyết tùng',26,6,11200,'Gỗ thơm, bền ẩm, có giá trị thương mại tốt.'],
    ['ironwood','Thiết mộc',42,8,14200,'Gỗ cứng như kim loại, dùng cho công cụ Hiếm.'],
    ['redwood','Hồng mộc',68,10,18000,'Gỗ quý lâu năm, giá trị cao và khó khai thác.'],
    ['ebonywood','Gỗ mun',98,13,22800,'Gỗ đen quý hiếm, dùng cho trang bị cao cấp.'],
    ['ancient_wood','Cổ mộc',145,16,29200,'Gỗ từ cây cổ thụ, nên giữ cho các công thức Sử thi.'],
    ['moonwood','Nguyệt mộc',220,20,37500,'Gỗ hấp thụ ánh trăng, dùng cho đồ nghề Truyền thuyết.'],
    ['dragonwood','Long mộc',340,25,49000,'Gỗ cứng và hiếm, dùng cho vật phẩm đỉnh cao.'],
    ['worldtree_branch','Nhánh Thế Giới Thụ',590,32,68000,'Vật liệu Thần thoại từ cây cổ đại nhất.']
  ];
  woodDefs.forEach((d,i)=>addItem(d[0],d[1],d[2],'Gỗ',rarityByIndex(i+1),d[5]));

  const smeltDefs = [
    ['copper_bar','Phôi đồng',30,1,7200,{copper_ore:3},'Phôi kim loại cơ bản cho dụng cụ đầu game.'],
    ['tin_bar','Phôi thiếc',36,2,7900,{tin_ore:3},'Phôi mềm dùng trong hợp kim và hàng thủ công.'],
    ['iron_ingot','Phôi sắt',42,3,8800,{iron_ore:2,coal:1},'Vật liệu lõi để chế tạo công cụ và vũ khí.'],
    ['steel','Thép',118,4,11000,{iron_ingot:2,coal:2},'Hợp kim mạnh, rất quan trọng; thường nên giữ lại.'],
    ['silver_bar','Phôi bạc',105,6,13500,{silver_ore:3,coal:1},'Kim loại quý cho chế tác và hợp đồng giá cao.'],
    ['gold_bar','Phôi vàng',160,8,16500,{gold_ore:3,coal:1},'Phôi quý, vừa để bán vừa là nguyên liệu cao cấp.'],
    ['mithril_bar','Phôi Mithril',264,10,20500,{mithril_ore:3,coal:2},'Phôi nhẹ và bền cho dụng cụ Hiếm.'],
    ['obsidian_plate','Tấm Hắc Diện',475,13,26000,{obsidian:3,steel:1},'Tấm siêu cứng dùng cho đồ nghề Sử thi.'],
    ['crystal_alloy','Hợp kim Tinh Thể',800,16,33000,{crystal_ore:3,mithril_bar:1},'Hợp kim chứa khoáng lực cho dụng cụ đặc biệt.'],
    ['titanium_bar','Phôi Titan',798,20,42000,{titanium_ore:3,coal:3},'Phôi chịu lực cao, dùng ở giai đoạn cuối.'],
    ['star_alloy','Hợp kim Tinh Sao',2065,25,54000,{star_metal_ore:3,titanium_bar:1},'Hợp kim Truyền thuyết dùng cho công cụ tối thượng.'],
    ['void_alloy','Hợp kim Hư Không',4318,32,72000,{void_ore:3,star_alloy:1},'Hợp kim Thần thoại, cực hiếm và cực đắt.']
  ];
  smeltDefs.forEach((d,i)=>addItem(d[0],d[1],d[2],'Vật liệu luyện',rarityByIndex(i+1),d[6]));

  const craftingDefs = [
    ['gather_pouch','Túi thu nhặt gia cố',70,1,7000,{branch:5,flax:2}, {skill:'gathering',speed:.08}, 'Dụng cụ tự động giảm 8% thời gian Thu nhặt khi sở hữu.'],
    ['copper_pickaxe','Cuốc đồng',80,2,8500,{copper_bar:2,branch:2}, {skill:'mining',speed:.10}, 'Dụng cụ tự động giảm 10% thời gian Khai khoáng khi sở hữu.'],
    ['iron_axe','Rìu sắt',125,3,10000,{iron_ingot:2,oakwood:2}, {skill:'woodcutting',speed:.10}, 'Dụng cụ tự động giảm 10% thời gian Đốn gỗ khi sở hữu.'],
    ['iron_sword','Kiếm sắt',165,4,13000,{iron_ingot:3,hardwood:1}, null, 'Vũ khí cơ bản và là điều kiện mở nghề Chiến đấu.'],
    ['steel_pickaxe','Cuốc thép',430,6,16000,{steel:3,hardwood:2}, {skill:'mining',speed:.18}, 'Cuốc tốt giảm 18% thời gian Khai khoáng.'],
    ['steel_axe','Rìu thép',445,8,18000,{steel:3,cedarwood:2}, {skill:'woodcutting',speed:.18}, 'Rìu tốt giảm 18% thời gian Đốn gỗ.'],
    ['ranger_pack','Ba lô thám hiểm',370,10,21000,{steel:1,flax:8,resin:3}, {skill:'gathering',speed:.16}, 'Ba lô chuyên dụng giảm 16% thời gian Thu nhặt.'],
    ['mithril_pickaxe','Cuốc Mithril',960,13,26500,{mithril_bar:3,ironwood:2}, {skill:'mining',speed:.28}, 'Cuốc Hiếm giảm 28% thời gian Khai khoáng.'],
    ['ancient_axe','Rìu Cổ Mộc',1000,16,33000,{obsidian_plate:1,ancient_wood:3}, {skill:'woodcutting',speed:.28}, 'Rìu Sử thi giảm 28% thời gian Đốn gỗ.'],
    ['crystal_toolkit','Bộ dụng cụ Tinh Thể',1960,20,41000,{crystal_alloy:2,moon_flower:3}, {skill:'gathering',speed:.28}, 'Bộ dụng cụ Sử thi giảm 28% thời gian Thu nhặt.'],
    ['legendary_hammer','Búa Luyện Tinh Sao',4400,25,53000,{titanium_bar:2,star_alloy:1,dragonwood:1}, {skill:'smelting',speed:.22}, 'Búa Truyền thuyết giảm 22% thời gian Luyện kim.'],
    ['starforge_tool','Thần cụ Tinh Luyện',9300,32,70000,{star_alloy:2,void_alloy:1}, {skill:'all',speed:.18}, 'Thần cụ giảm 18% thời gian của mọi nghề sản xuất.']
  ];
  craftingDefs.forEach((d,i)=>addItem(d[0],d[1],d[2],d[6]?'Dụng cụ':'Trang bị',rarityByIndex(i+1),d[7],d[6]?{tool:d[6]}:{equipment:true}));
  Object.assign(items.iron_sword,{equipment:true,requiredCraftingLevel:4,combat:{slot:'weapon',attack:12,attackSpeed:1.00,crit:.03,armorPen:0,requiredLevel:1},description:'Vũ khí nhập môn. Có thể trang bị từ Chiến đấu Lv1; dùng để mở nghề Chiến đấu.'});
  const weaponDefs=[
    ['steel_sword','Kiếm thép',435,'uncommon','Vũ khí cân bằng cho giai đoạn đầu-trung.',{attack:20,attackSpeed:1.02,crit:.04,armorPen:.03,requiredLevel:4},8,25000,{steel:3,hardwood:2}],
    ['mithril_blade','Kiếm Mithril',990,'rare','Lưỡi kiếm nhẹ, tốc đánh và chí mạng tốt.',{attack:32,attackSpeed:1.10,crit:.07,armorPen:.06,requiredLevel:8},13,33000,{mithril_bar:3,ironwood:2}],
    ['obsidian_greatsword','Đại kiếm Hắc Diện',1210,'epic','Vũ khí nặng, xuyên giáp cao nhưng tốc đánh chậm.',{attack:48,attackSpeed:.88,crit:.08,armorPen:.14,requiredLevel:13},18,42000,{obsidian_plate:2,ancient_wood:1}],
    ['titan_blade','Đại kiếm Titan',2920,'epic','Sát thương lớn và xuyên giáp mạnh.',{attack:70,attackSpeed:.95,crit:.10,armorPen:.18,requiredLevel:18},24,52000,{titanium_bar:3,ebonywood:2}],
    ['star_saber','Tinh Kiếm',5350,'legendary','Vũ khí Truyền thuyết thiên về DPS và chí mạng.',{attack:96,attackSpeed:1.12,crit:.14,armorPen:.22,requiredLevel:24},28,62000,{star_alloy:2,dragonwood:2}],
    ['void_reaver','Ma Đao Hư Không',10250,'mythic','Vũ khí cuối game, sát thương và xuyên giáp cực cao.',{attack:135,attackSpeed:1.05,crit:.18,armorPen:.30,requiredLevel:30},32,76000,{void_alloy:2,worldtree_branch:1}]
  ];
  weaponDefs.forEach(d=>addItem(d[0],d[1],d[2],'Trang bị',d[3],d[4],{equipment:true,combat:{slot:'weapon',...d[5]},requiredCraftingLevel:d[6]}));

  const combatDefs = [
    ['slime_gel','Dịch nhầy',10,1,8000,'Dịch quái cơ bản, thường dùng trong hợp đồng và chế phẩm.'],
    ['wolf_fang','Nanh sói',28,2,9500,'Chiến lợi phẩm có giá trị; về sau dùng cho trang bị săn bắn.'],
    ['boar_hide','Da lợn rừng',45,3,10800,'Da dày để chế tác và bán cho thợ thuộc da.'],
    ['bandit_badge','Huy hiệu đạo tặc',70,4,12200,'Bằng chứng tiêu diệt đạo tặc, giá trị nhiệm vụ cao.'],
    ['cave_core','Lõi động đá',100,6,14500,'Lõi quái vật chứa khoáng lực.'],
    ['venom_sac','Túi độc',140,8,17500,'Độc liệu hiếm, nên giữ cho chế phẩm sau này.'],
    ['wyvern_scale','Vảy Wyvern',220,10,21500,'Vảy cứng dùng cho trang bị Hiếm.'],
    ['demon_horn','Sừng ma',320,13,27000,'Chiến lợi phẩm Sử thi từ quái mạnh.'],
    ['phoenix_feather','Lông Phượng',500,16,34000,'Nguyên liệu Sử thi có giá trị đặc biệt.'],
    ['dragon_scale','Vảy Rồng',750,20,43000,'Vật liệu Truyền thuyết dùng cho trang bị tối thượng.'],
    ['titan_core','Lõi Titan',1100,25,55000,'Lõi Truyền thuyết cực hiếm.'],
    ['celestial_shard','Mảnh Thiên Giới',1800,32,73000,'Chiến lợi phẩm Thần thoại, giá trị tối thượng.']
  ];
  combatDefs.forEach((d,i)=>addItem(d[0],d[1],d[2],'Chiến lợi phẩm',rarityByIndex(i+1),d[5]));

  const mkGather = (d,i)=>({id:`g_${d[0]}`,name:i===0?'Nhặt đá vụn':i===1?'Nhặt cành khô':`Thu thập ${d[1]}`,icon:icon(d[0]),level:d[3],duration:d[4],xp:10+i*3,outputs:{[d[0]]:[1,i<4?2:1]},masteryKey:d[0]});
  const mkMine = (d,i)=>({id:`m_${d[0]}`,name:`Khai ${d[1].toLowerCase()}`,icon:icon(d[0]),level:d[3],duration:d[4],xp:12+i*4,outputs:{[d[0]]:[1,i<4?2:1]},masteryKey:d[0]});
  const mkWood = (d,i)=>({id:`w_${d[0]}`,name:`Đốn ${d[1].toLowerCase()}`,icon:icon(d[0]),level:d[3],duration:d[4],xp:12+i*4,outputs:{[d[0]]:[1,i<4?2:1]},masteryKey:d[0]});
  const mkSmelt = (d,i)=>({id:`s_${d[0]}`,name:`Luyện ${d[1].toLowerCase()}`,icon:icon(d[0]),level:d[3],duration:d[4],xp:16+i*5,inputs:d[5],outputs:{[d[0]]:[1,1]},masteryKey:d[0]});
  const mkCraft = (d,i)=>({id:`c_${d[0]}`,name:`Chế tạo ${d[1]}`,icon:icon(d[0]),level:d[3],duration:d[4],xp:18+i*6,inputs:d[5],outputs:{[d[0]]:[1,1]},masteryKey:d[0]});
  const enemyNames=['Quái Nhầy','Sói Xám','Lợn Rừng','Đạo Tặc','Thạch Quái','Nhện Độc','Wyvern','Ma Sừng','Phượng Lửa','Rồng Cổ','Titan Đá','Sứ Giả Thiên Giới'];
  const mkCombat=(d,i)=>({id:`f_${d[0]}`,name:`Săn ${enemyNames[i]}`,icon:icon(d[0]),level:d[3],duration:d[4],xp:18+i*6,coinReward:[4+i*3,9+i*5],outputs:{[d[0]]:[i<2?0:1,1]},masteryKey:d[0]});

  const skills = {
    gathering: { id:'gathering', name:'Thu nhặt', icon:'assets/gather.svg', order:1, startUnlocked:true },
    mining: { id:'mining', name:'Khai khoáng', icon:'assets/mining.svg', order:2, unlock:{ skill:'gathering', level:3, coins:20 }, unlockText:'Thu nhặt Lv3 + 20 xu' },
    woodcutting: { id:'woodcutting', name:'Đốn gỗ', icon:'assets/woodcut.svg', order:3, unlock:{ totalLevel:6, coins:60 }, unlockText:'Tổng cấp 6 + 60 xu' },
    smelting: { id:'smelting', name:'Luyện kim', icon:'assets/smelting.svg', order:4, unlock:{ skill:'mining', level:4, item:'iron_ore', qty:10, coins:120 }, unlockText:'Khai khoáng Lv4 + 10 Quặng sắt + 120 xu' },
    crafting: { id:'crafting', name:'Chế tác', icon:'assets/crafting.svg', order:5, unlock:{ skills:{ smelting:3, woodcutting:3 }, coins:220 }, unlockText:'Luyện kim Lv3 + Đốn gỗ Lv3 + 220 xu' },
    combat: { id:'combat', name:'Chiến đấu', icon:'assets/combat.svg', order:6, unlock:{ skill:'crafting', level:4, item:'iron_sword', qty:1, consumeItem:false }, unlockText:'Chế tác Lv4 + sở hữu Kiếm sắt' }
  };

  const actions = {
    gathering:gatheringDefs.map(mkGather),
    mining:miningDefs.map(mkMine),
    woodcutting:woodDefs.map(mkWood),
    smelting:smeltDefs.map(mkSmelt),
    crafting:craftingDefs.map(mkCraft),
    combat:combatDefs.map(mkCombat)
  };

  weaponDefs.forEach(d=>actions.crafting.push({id:`c_${d[0]}`,name:`Chế tạo ${d[1]}`,icon:icon(d[0]),level:d[6],duration:d[7],xp:24+Math.round(d[6]*2.2),inputs:d[8],outputs:{[d[0]]:[1,1]},masteryKey:d[0]}));

  const enemyStats=[
    [180,3,10],[260,5,13],[380,8,17],[540,12,22],[760,18,28],[1100,25,36],[1550,34,46],[2200,45,58],[3100,58,72],[4400,74,90],[6200,95,112],[9000,120,138]
  ];
  actions.combat.forEach((a,i)=>{a.enemy={hp:enemyStats[i][0],defense:enemyStats[i][1],attack:enemyStats[i][2]};a.outputs={[combatDefs[i][0]]:[0,1]};a.coinReward=[[2,4],[3,6],[4,7],[5,9],[7,12],[9,15],[12,19],[16,25],[21,32],[28,42],[38,55],[50,72]][i];});

  const zones = [
    {id:'starter',name:'Trấn Khởi Đầu',icon:icon('zone_starter'),startUnlocked:true,unlockText:'Mở sẵn',description:'Nơi bắt đầu hành trình nghề nghiệp.'},
    {id:'graymine',name:'Đồi Đá Xám',icon:icon('zone_graymine'),unlock:{skill:'mining',level:2},unlockText:'Khai khoáng Lv2',description:'Khu mỏ sơ cấp, giàu đồng và thiếc.'},
    {id:'mistforest',name:'Rừng Sương',icon:icon('zone_mistforest'),unlock:{skill:'woodcutting',level:2},unlockText:'Đốn gỗ Lv2',description:'Rừng ẩm với nguồn gỗ và thảo dược.'},
    {id:'riverbank',name:'Bờ Sông Lam',icon:icon('zone_riverbank'),unlock:{skill:'gathering',level:5},unlockText:'Thu nhặt Lv5',description:'Vùng nguyên liệu tự nhiên phong phú.'},
    {id:'forgeward',name:'Phường Lò Rèn',icon:icon('zone_forgeward'),unlock:{skill:'smelting',level:2},unlockText:'Luyện kim Lv2',description:'Khu thợ luyện kim và xưởng thủ công.'},
    {id:'merchantcity',name:'Thành Thương Hội',icon:icon('zone_merchantcity'),unlock:{totalLevel:20,coins:300},unlockText:'Tổng cấp 20 + 300 xu',description:'Trung tâm giao thương và hợp đồng lớn.'},
    {id:'wolfvalley',name:'Thung Lũng Sói',icon:icon('zone_wolfvalley'),unlock:{skill:'combat',level:2},unlockText:'Chiến đấu Lv2',description:'Vùng săn bắn nguy hiểm đầu tiên.'},
    {id:'silverridge',name:'Dãy Bạc Phong',icon:icon('zone_silverridge'),unlock:{skill:'mining',level:8},unlockText:'Khai khoáng Lv8',description:'Nguồn bạc, vàng và khoáng hiếm.'},
    {id:'ancientforest',name:'Cổ Lâm',icon:icon('zone_ancientforest'),unlock:{skill:'woodcutting',level:10},unlockText:'Đốn gỗ Lv10',description:'Rừng cổ với thiết mộc và hồng mộc.'},
    {id:'obsidianpass',name:'Đèo Hắc Diện',icon:icon('zone_obsidianpass'),unlock:{skills:{mining:13,combat:6}},unlockText:'Khai khoáng Lv13 + Chiến đấu Lv6',description:'Địa hình khắc nghiệt chứa khoáng vật Sử thi.'},
    {id:'starfall',name:'Cánh Đồng Tinh Lạc',icon:icon('zone_starfall'),unlock:{totalLevel:60},unlockText:'Tổng cấp 60',description:'Nơi thiên thạch rơi và xuất hiện vật liệu Truyền thuyết.'},
    {id:'voidgate',name:'Cổng Hư Không',icon:icon('zone_voidgate'),unlock:{totalLevel:90,item:'star_alloy',qty:1,consumeItem:false},unlockText:'Tổng cấp 90 + sở hữu Hợp kim Tinh Sao',description:'Khu vực cuối demo với tài nguyên Thần thoại.'}
  ];

  const npcProfiles = [
    {name:'Trần Bá',role:'Thợ rèn',bias:{iron_ore:1.16,coal:1.12,steel:1.10,iron_sword:.92}},
    {name:'Mai Linh',role:'Nhà buôn',bias:{herb:1.08,flax:1.10,wild_honey:1.12,softwood:1.03}},
    {name:'Đoàn Phong',role:'Đầu cơ',bias:{iron_ore:1.18,steel:1.15,gold_ore:1.14,star_metal_ore:1.12}},
    {name:'Phúc An',role:'Thợ mộc',bias:{softwood:1.15,hardwood:1.18,ironwood:1.16,ancient_wood:1.12}},
    {name:'Minh Châu',role:'Chủ quán',bias:{herb:1.12,wild_berry:1.15,wild_honey:1.18}},
    {name:'Vũ Sơn',role:'Thợ mỏ',bias:{copper_ore:.88,iron_ore:.90,coal:.92,mithril_ore:.95}},
    {name:'Ngọc Hà',role:'Người thu mua',bias:{pebble:1.05,branch:1.05,herb:1.06,resin:1.08}},
    {name:'Gia Huy',role:'Thợ luyện kim',bias:{iron_ore:1.12,coal:1.15,iron_ingot:.94,steel:.96,mithril_bar:1.08}},
    {name:'Thanh Vân',role:'Thương nhân',bias:{copper_bar:1.08,iron_ingot:1.10,steel:1.08,gold_bar:1.12}},
    {name:'Bảo Long',role:'Trang bị',bias:{iron_sword:1.14,copper_pickaxe:1.10,steel_pickaxe:1.15,mithril_pickaxe:1.20}},
    {name:'Hải Yến',role:'Nhà sưu tầm',bias:{wolf_fang:1.22,phoenix_feather:1.25,dragon_scale:1.25,celestial_shard:1.30}},
    {name:'Tùng Lâm',role:'Buôn chuyến',bias:{copper_ore:1.03,hardwood:1.10,steel:1.04,silver_bar:1.08}}
  ];

  return {
    version:3,
    mailLifetimeMs:2*24*60*60*1000,
    offlineCapMs:24*60*60*1000,
    questCooldownMs:3*60*1000,
    rarityMeta,skills,items,actions,zones,npcProfiles
  };
})();
