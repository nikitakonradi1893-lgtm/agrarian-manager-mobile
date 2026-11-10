const CATALOG=[
 ['Нива СК-5','harvest',1,65,'Советская классика','Закалка', 'resist'],['Енисей-1200','harvest',1,75,'Советская классика','Стабильный обмолот','quality'],['МТЗ-82','tractor',1,58,'Советская классика','Надёжный помощник','guard'],['Т-150К','tractor',2,83,'Советская классика','Тяговый резерв','boost'],['Кировец К-700','tractor',3,120,'Советская классика','Полный привод','terrain'],['Дон-1500Б','harvest',2,105,'Советская классика','Зерновой поток','harvestboost'],['КамАЗ-55102','transport',1,57,'Советская классика','Быстрая разгрузка','logistics'],
 ['Claas Dominator 108','harvest',2,112,'Европейская инженерия','Точный обмолот','quality'],['Claas Lexion 8900','harvest',4,220,'Европейская инженерия','Максимальный обмолот','harvestboost'],['Fendt 1050 Vario','tractor',4,175,'Европейская инженерия','Точная тяга','boost'],['Lemken Diamant','tillage',3,140,'Европейская инженерия','Глубокая обработка','tillageboost'],['Horsch Pronto','sowing',3,150,'Европейская инженерия','Равномерный посев','sowboost'],['Amazone UX','spray',3,132,'Европейская инженерия','Защитный контур','cleanse'],['MAN TGS','transport',2,90,'Европейская инженерия','Без остановок','logistics'],
 ['John Deere 8R','tractor',4,200,'Американская мощь','Пиковая нагрузка','boost'],['John Deere X9','harvest',4,240,'Американская мощь','Поток зерна','harvestboost'],['Case IH Magnum','tractor',3,154,'Американская мощь','Уверенная тяга','terrain'],['Case IH Axial-Flow','harvest',3,172,'Американская мощь','Роторный обмолот','quality'],['New Holland CR11','harvest',5,290,'Американская мощь','Безупречная жатва','harvestboost'],['Kinze 4905','sowing',4,205,'Американская мощь','Точный высев','sowboost'],
 ['КПС-4','tillage',1,58,'Советская классика','Лёгкий ход','tillageboost'],['ПЛН-5-35','tillage',2,92,'Советская классика','Глубокая борозда','tillageboost'],['СЗ-3.6','sowing',1,57,'Советская классика','Ровные ряды','sowboost'],['Amazone D9','sowing',2,99,'Европейская инженерия','Высев без пропусков','quality'],['ОП-2000','spray',1,64,'Советская классика','Профилактика','cleanse'],['John Deere R4150i','spray',4,194,'Американская мощь','Чистое поле','cleanse'],['Ростсельмаш RSM 161','harvest',3,169,'Советская классика','Широкий захват','harvestboost'],['ПС-60','transport',2,97,'Советская классика','Перегрузка на ходу','logistics'],['Kubota M7','tractor',3,129,'Восточные технологии','Манёвренность','boost'],['Lovol P7000','harvest',2,115,'Восточные технологии','Бережная жатва','quality'],['Yanmar YH6115','harvest',3,148,'Восточные технологии','Экономный расход','resist'],['Туман-3','spray',2,98,'Советская классика','Защитное облако','cleanse'],
 // v0.5 — 36 дополнительных моделей; существующие индексы 1–32 не изменяются.
 ['Bizon Z056','harvest',1,70,'Европейская инженерия','Проверенный обмолот','resist'],
 ['Fortschritt E516','harvest',2,108,'Европейская инженерия','Ритм жатвы','quality'],
 ['Ростсельмаш VECTOR 410','harvest',2,116,'Советская классика','Плотный поток','harvestboost'],
 ['Claas Tucano 570','harvest',3,155,'Европейская инженерия','Ровный обмолот','quality'],
 ['New Holland CX8.90','harvest',4,218,'Американская мощь','Широкая жатва','harvestboost'],
 ['Fendt IDEAL 10T','harvest',5,285,'Европейская инженерия','Идеальная уборка','harvestboost'],
 ['ЮМЗ-6','tractor',1,60,'Советская классика','Рабочая лошадка','guard'],
 ['Т-40АМ','tractor',1,55,'Советская классика','На любом поле','terrain'],
 ['Беларус 1221','tractor',2,99,'Советская классика','Тяговая опора','boost'],
 ['Valtra T235','tractor',3,145,'Европейская инженерия','Точная тяга','boost'],
 ['Case IH Steiger 620','tractor',4,222,'Американская мощь','Тяжёлый ход','terrain'],
 ['John Deere 9RX 640','tractor',5,275,'Американская мощь','Четыре гусеницы','terrain'],
 ['БДТ-7','tillage',1,68,'Советская классика','Дисковая борона','tillageboost'],
 ['БДМ-4×4','tillage',2,101,'Советская классика','Глубокое рыхление','tillageboost'],
 ['Kverneland PN/RN','tillage',3,143,'Европейская инженерия','Ровная борозда','quality'],
 ['Lemken Rubin 10','tillage',3,155,'Европейская инженерия','Дисковый захват','tillageboost'],
 ['Horsch Tiger 4 MT','tillage',4,205,'Европейская инженерия','Глубокая культивация','tillageboost'],
 ['Kuhn Multi-Master 183','tillage',2,105,'Европейская инженерия','Плавный оборот','resist'],
 ['СУПН-8','sowing',1,64,'Советская классика','Точный ряд','sowboost'],
 ['СПУ-6','sowing',2,94,'Советская классика','Экономный высев','quality'],
 ['Väderstad Rapid A 600S','sowing',3,145,'Европейская инженерия','Быстрый посев','sowboost'],
 ['Great Plains YP-1625','sowing',3,155,'Американская мощь','Пунктирный высев','quality'],
 ['Horsch Maestro 24 SV','sowing',4,215,'Европейская инженерия','Точная синхронизация','sowboost'],
 ['John Deere 1775NT','sowing',4,202,'Американская мощь','Высев без пропусков','quality'],
 ['ОПШ-15','spray',1,65,'Советская классика','Полевой заслон','cleanse'],
 ['Amazone UF 1801','spray',2,110,'Европейская инженерия','Чистая полоса','cleanse'],
 ['Berthoud Raptor 4240','spray',3,160,'Европейская инженерия','Контроль сорняков','cleanse'],
 ['Hardi Commander 4500','spray',3,152,'Европейская инженерия','Равномерное внесение','quality'],
 ['Case IH Patriot 4440','spray',4,204,'Американская мощь','Полное покрытие','cleanse'],
 ['Agrifac Condor Endurance','spray',5,270,'Европейская инженерия','Защитный купол','cleanse'],
 ['ГАЗ-53','transport',1,60,'Советская классика','Смена рейса','logistics'],
 ['ЗИЛ-130','transport',1,66,'Советская классика','Плечо доставки','logistics'],
 ['МАЗ-5551','transport',2,98,'Советская классика','Зерновой маршрут','logistics'],
 ['КамАЗ-6520','transport',2,111,'Советская классика','Большой рейс','logistics'],
 ['Fliegl ASW 271','transport',3,148,'Европейская инженерия','Перевозка без потерь','logistics'],
 ['Bergmann GTW 330','transport',4,195,'Европейская инженерия','Перегрузка на ходу','logistics']
].map((a,i)=>({id:i+1,name:a[0],role:a[1],rarity:a[2],base:a[3],faction:a[4],skill:a[5],effect:a[6]}));
const ROLE_PLURALS={harvest:'Комбайны',tractor:'Тракторы',transport:'Транспорт',tillage:'Почвообрабатывающая техника',sowing:'Сеялки',spray:'Опрыскиватели'};
const ROLES={harvest:['Комбайн','🌾'],tractor:['Трактор','🚜'],transport:['Транспорт','🚚'],tillage:['Почвообработка','⚙️'],sowing:['Сеялка','🌱'],spray:['Опрыскиватель','💧']};
const RAR=['','Обычная','Редкая','Эпическая','Легендарная','Мифическая'];
const JOBS={harvest:{name:'Уборочная',emoji:'🌾',primary:'harvest',secondary:'transport',obstacle:'Засорение жатки'},tillage:{name:'Обработка почвы',emoji:'⚙️',primary:'tillage',secondary:'tractor',obstacle:'Тяжёлая почва'},sowing:{name:'Посевная',emoji:'🌱',primary:'sowing',secondary:'tractor',obstacle:'Неровные всходы'},spray:{name:'Защита посевов',emoji:'💧',primary:'spray',secondary:'tractor',obstacle:'Вспышка сорняков'}};
const fmt=n=>Math.floor(n).toLocaleString('ru-RU');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const rnd=(lo,hi)=>Math.floor(Math.random()*(hi-lo+1))+lo;
const starter=()=>({version:1,coins:5500,parts:140,gems:250,tickets:3,roster:[{uid:1,id:40,level:5,stars:1},{uid:2,id:1,level:5,stars:1},{uid:3,id:21,level:4,stars:1},{uid:4,id:23,level:4,stars:1},{uid:5,id:7,level:4,stars:1},{uid:6,id:25,level:4,stars:1},{uid:7,id:3,level:1,stars:1}],squad:[1,2,3,4,5],nextUid:8,campaign:1,tower:1,wins:0,losses:0,pity:0,basicPity:0,classPity:{},challengeProgress:{},challengeSquads:{},opened:0,claimed:0,history:[{time:'Старт игры',msg:'Хозяйство основано. В гараже уже ждёт стартовая техника.'}],battle:null,lastReward:null,contractSeed:1});
let S;try{S=JSON.parse(localStorage.getItem('agrarian_manager_v1'))||starter();if(!S.roster||!S.squad)throw Error('bad')}catch(e){S=starter()}
let catalogueRole='all',catalogueRarity='all';
let selectedChallenge='class_harvest',challengeFilter='all';
let tab='overview',filterRole='all',filterRarity='all',squadRole='all',squadRarity='all',chosenMission='campaign',selectedTarget=null,toastTimer=null;

// v0.3: additive migration; existing progress stays untouched.
function migrate03(){
 if(!Number.isFinite(S.basicPity))S.basicPity=0;
 if(!S.classPity||typeof S.classPity!=='object')S.classPity={};
 for(const role of Object.keys(ROLES))if(!Number.isFinite(S.classPity[role]))S.classPity[role]=0;
 if(!Array.isArray(S.supplyLastItems))S.supplyLastItems=[];
 if(!Array.isArray(S.presets))S.presets=[];
 if(!S.stats||typeof S.stats!=='object')S.stats={};
 for(const k of ['battles','repeatWins','levelUps','starUps','opens','campaignWins','towerWins'])if(!Number.isFinite(S.stats[k]))S.stats[k]=0;
 if(!S.quests||typeof S.quests!=='object')S.quests={};
 if(!S.achievementClaims||typeof S.achievementClaims!=='object')S.achievementClaims={};
 if(!S.challengeProgress||typeof S.challengeProgress!=='object')S.challengeProgress={};
 if(!S.challengeSquads||typeof S.challengeSquads!=='object')S.challengeSquads={};
 S.version=8;
}
migrate03();
function bump(k,n=1){S.stats[k]=(S.stats[k]||0)+n}
function strongest(xs){return xs.slice().sort((a,b)=>stat(b)-stat(a)||a.uid-b.uid)}
function roleFilters(selRole,selRarity,fn){return `<div class="row filters"><select class="form-select" onchange="${fn}Role=this.value;render()"><option value="all">Все классы</option>${Object.keys(ROLES).map(r=>`<option value="${r}" ${selRole===r?'selected':''}>${nameRole(r)}</option>`).join('')}</select><select class="form-select" onchange="${fn}Rarity=this.value;render()"><option value="all">Все редкости</option>${[1,2,3,4,5].map(n=>`<option value="${n}" ${selRarity==n?'selected':''}>${RAR[n]}</option>`).join('')}</select></div>`}
function presetPanel(){return `<div class="panel pad preset-panel"><div class="row between"><div><div class="kicker">СОХРАНЁННЫЕ СОСТАВЫ</div><h3>Пресеты бригад (${S.presets.length}/8)</h3></div><button class="btn primary" onclick="savePreset()" ${!S.squad.length?'disabled':''}>+ Сохранить текущую</button></div><p class="small muted">Сохраняются конкретные экземпляры машин. Пресет можно загрузить одним нажатием. При сохранении под существующим названием состав перезаписывается.</p><div class="preset-list">${S.presets.length?S.presets.map(p=>`<div class="preset-item"><div><b>${esc(p.name)}</b><div class="tiny muted">${p.uids.map(u=>owned(u)?esc(machine(owned(u).id).name):'⚠ Нет в гараже').join(' · ')}</div></div><div class="row"><button class="btn primary" onclick="loadPreset(${p.id})">Применить</button><button class="btn soft" onclick="deletePreset(${p.id})">Удалить</button></div></div>`).join(''):'<div class="empty">Пока нет сохранённых бригад. Соберите команду для уборки или посева и нажмите «Сохранить текущую».</div>'}</div></div>`}
function savePreset(){if(!S.squad.length)return;const answer=prompt('Название бригады (например, Уборочная):','Уборочная');if(answer===null)return;const name=answer.trim().slice(0,36);if(!name){notify('Введите название пресета');return}let p=S.presets.find(p=>p.name.toLocaleLowerCase('ru')===name.toLocaleLowerCase('ru'));if(p){p.uids=S.squad.slice()}else{if(S.presets.length>=8){notify('Максимум 8 пресетов — удалите один из старых');return}S.presets.push({id:Math.max(0,...S.presets.map(x=>x.id))+1,name,uids:S.squad.slice()})}log(`Сохранён состав «${name}».`);notify('Пресет сохранён');render()}
function loadPreset(id){const p=S.presets.find(x=>x.id===id);if(!p)return;const valid=[...new Set(p.uids)].filter(u=>owned(u)).slice(0,5);if(!valid.length){notify('Машины пресета отсутствуют в гараже');return}S.squad=valid;log(`Применён состав «${p.name}».`);render();notify(valid.length===p.uids.length?'Бригада применена':'Бригада применена частично: некоторые машины отсутствуют')}
function deletePreset(id){const p=S.presets.find(x=>x.id===id);if(!p)return;if(!confirm(`Удалить сохранённый состав «${p.name}»?`))return;S.presets=S.presets.filter(x=>x.id!==id);render()}
const QUESTS=[
 {id:'battles',stat:'battles',title:'Полевой план',desc:'Успешно завершить любые операции',base:3,step:2,coins:800,parts:18},
 {id:'repeat',stat:'repeatWins',title:'Наработка моточасов',desc:'Повторно пройти этапы кампании',base:5,step:3,coins:1000,parts:25},
 {id:'levels',stat:'levelUps',title:'План модернизации',desc:'Повысить уровни техники',base:2,step:1,coins:650,parts:35},
 {id:'summon',stat:'opens',title:'Снабжение хозяйства',desc:'Открыть любые контейнеры',base:3,step:2,coins:1400,parts:25},
 {id:'campaign',stat:'campaignWins',title:'Освоение земель',desc:'Пройти новые этапы кампании',base:2,step:1,coins:1400,parts:35},
 {id:'tower',stat:'towerWins',title:'Полигон испытаний',desc:'Пройти этажи башни',base:2,step:1,coins:1350,parts:40}
];
function questState(q){if(!S.quests[q.id])S.quests[q.id]={tier:0,base:S.stats[q.stat]||0};return S.quests[q.id]}
function questProgress(q){const z=questState(q),target=q.base+Math.min(12,z.tier)*q.step,progress=Math.max(0,(S.stats[q.stat]||0)-z.base);return {z,target,progress,ready:progress>=target}}
function questReward(q){const z=questState(q),mult=1+Math.min(12,z.tier)*.23+Math.min(30,Math.max(0,S.campaign-1))*.025;return {coins:Math.round(q.coins*mult/10)*10,parts:Math.round(q.parts*mult)}}
function questReadyCount(){return QUESTS.filter(q=>questProgress(q).ready).length}
function claimQuest(id){const q=QUESTS.find(x=>x.id===id);if(!q)return;const p=questProgress(q);if(!p.ready)return;const r=questReward(q);S.coins+=r.coins;S.parts+=r.parts;p.z.tier++;p.z.base=S.stats[q.stat]||0;log(`Задание «${q.title}»: +${fmt(r.coins)} монет и +${fmt(r.parts)} запчастей.`);notify('Награда за задание получена');render()}
function questsView(){return `${title('ПОВТОРЯЕМЫЕ ЦЕЛИ','Производственные задания','Без календарей и ожидания: задания повторяются сразу после получения награды. У каждого собственный счётчик, сложность и награда растут после выполнения.')}
<div class="notice">Задания засчитывают действия с версии 0.3. Предыдущий прогресс кампании, гаража и ресурсов сохранён. После получения награды можно сразу выполнять следующее задание.</div><div class="quest-grid">${QUESTS.map(q=>{const p=questProgress(q),r=questReward(q);return `<div class="panel pad quest-card"><div class="row between"><h3>${esc(q.title)}</h3><span class="tag rarity-2">Цикл ${p.z.tier+1}</span></div><p class="small muted">${esc(q.desc)}</p><div class="row between"><b>${Math.min(p.progress,p.target)} / ${p.target}</b><span class="small muted">${fmt(r.coins)} 🪙 · ${fmt(r.parts)} 🔩</span></div><div class="progress"><div style="width:${Math.min(100,p.progress/p.target*100)}%"></div></div><button class="btn ${p.ready?'primary':''}" onclick="claimQuest('${q.id}')" ${p.ready?'':'disabled'}>${p.ready?'Забрать награду':'В процессе'}</button></div>`}).join('')}</div>`}
// v0.8: independent 30-stage challenge ladders with dedicated squads.
// "Eastern" has three catalogue models, so its challenge uses three slots; all other branches require five.
const VINTAGE_MODELS=new Set([1,2,3,4,5,6,7,21,22,23,24,27,28,33,34,39,40,45,46,51,57,63,64,65,66]);
const CHALLENGES=[
 ...Object.keys(ROLES).map(role=>({id:'class_'+role,title:ROLE_PLURALS[role],desc:'Только один класс техники. Полная бригада из пяти машин.',group:'class',role,slots:5})),
 {id:'origin_soviet',title:'Проверенная классика',desc:'Техника фракции «Советская классика»: от Нивы до Кировца.',group:'origin',faction:'Советская классика',slots:5},
 {id:'origin_europe',title:'Европейская школа',desc:'Только европейская инженерия.',group:'origin',faction:'Европейская инженерия',slots:5},
 {id:'origin_america',title:'Американские гиганты',desc:'Только техника фракции «Американская мощь».',group:'origin',faction:'Американская мощь',slots:5},
 {id:'origin_east',title:'Восточные технологии',desc:'Особый компактный состав: три машины восточной фракции.',group:'origin',faction:'Восточные технологии',slots:3},
 {id:'era_vintage',title:'Ретро-парк',desc:'Избранные классические машины прежних поколений.',group:'era',era:'vintage',slots:5},
 {id:'era_modern',title:'Новая эпоха',desc:'Только эпическая, легендарная и мифическая техника.',group:'era',era:'modern',slots:5}
];
function getChallenge(id){return CHALLENGES.find(x=>x.id===id)}
function challengeEligible(ch,m){const c=machine(m.id);return !!c&&(ch.group==='class'?c.role===ch.role:ch.group==='origin'?c.faction===ch.faction:ch.era==='vintage'?VINTAGE_MODELS.has(c.id):c.rarity>=3)}
function challengeSquad(ch){const saved=S.challengeSquads[ch.id]||[];return [...new Set(saved)].map(owned).filter(m=>m&&challengeEligible(ch,m)).slice(0,ch.slots)}
function challengeStage(ch){return Math.min(30,1+(S.challengeProgress[ch.id]||0))}
function challengeJob(ch,n){if(ch.group==='class')return ch.role==='tractor'?'tillage':ch.role==='transport'?'harvest':ch.role;return ['harvest','tillage','sowing','spray'][(n-1)%4]}
function challengeMission(ch,n){const job=challengeJob(ch,n),scalar=ch.slots===3?.64:1;
 return {key:'challenge',id:n,challengeId:ch.id,job,name:`${ch.title} — этап ${n}`,difficulty:Math.round((390+n*155+n*n*17)*scalar),turns:12,coins:Math.round(380+n*95+(n%5===0?350:0)),parts:24+n*5,gems:n%10===0?20:0}}
function changeChallenge(id){if(!getChallenge(id))return;selectedChallenge=id;render()}
function chooseChallengeUnit(uid){const ch=getChallenge(selectedChallenge),m=owned(uid);if(!ch||!m||!challengeEligible(ch,m))return;
 let ids=challengeSquad(ch).map(x=>x.uid);
 if(ids.includes(uid))ids=ids.filter(x=>x!==uid);else if(ids.length>=ch.slots){notify(`Допускается ${ch.slots} машин`);return}else ids.push(uid);
 S.challengeSquads[ch.id]=ids;render()}
function fillChallengeSquad(){const ch=getChallenge(selectedChallenge);if(!ch)return;
 S.challengeSquads[ch.id]=strongest(S.roster.filter(m=>challengeEligible(ch,m))).slice(0,ch.slots).map(m=>m.uid);render()}
function challengeView(){const ch=getChallenge(selectedChallenge)||CHALLENGES[0],n=challengeStage(ch),m=challengeMission(ch,n),squad=challengeSquad(ch),eligible=strongest(S.roster.filter(x=>challengeEligible(ch,x)));
 const baseFilter=(g,label)=>`<button class="btn ${challengeFilter===g?'primary':'soft'}" onclick="challengeFilter='${g}';render()">${label}</button>`;
 return `${title('30 УРОВНЕЙ В КАЖДОЙ ВЕТКЕ','Специализированные испытания','Каждое испытание требует отдельную бригаду: по классу, происхождению или эпохе. Прогресс независим от кампании и башни.')}<div class="row filters">${baseFilter('all','Все')}${baseFilter('class','По классам')}${baseFilter('origin','По происхождению')}${baseFilter('era','По эпохам')}</div>
 <div class="challenge-nav">${CHALLENGES.filter(x=>challengeFilter==='all'||x.group===challengeFilter).map(x=>{const progress=S.challengeProgress[x.id]||0;return `<button class="challenge-branch ${ch.id===x.id?'chosen':''}" onclick="changeChallenge('${x.id}')"><strong>${esc(x.title)}</strong><span>${progress}/30 · состав ${challengeSquad(x).length}/${x.slots}</span><span class="progress"><span style="display:block;width:${progress/30*100}%;height:100%;background:#8bba78"></span></span></button>`}).join('')}</div>
 <div class="panel pad"><div class="row between"><div><div class="kicker">${ch.group==='class'?'ИСПЫТАНИЕ КЛАССА':ch.group==='origin'?'ИСПЫТАНИЕ ПРОИСХОЖДЕНИЯ':'ИСПЫТАНИЕ ЭПОХИ'}</div><h2>${esc(ch.title)}</h2></div><span class="tag rarity-3">${S.challengeProgress[ch.id]||0} / 30</span></div><p class="small muted">${esc(ch.desc)} Комплект: строго ${ch.slots} подходящих экземпляров. Машины в других составах доступны и здесь.</p>
 <div class="row between" style="margin:16px 0 8px"><h3>Бригада (${squad.length}/${ch.slots})</h3><button class="btn soft" onclick="fillChallengeSquad()">Автоподбор сильнейших</button></div>
 <div class="challenge-units">${Array.from({length:ch.slots},(_,i)=>{const unit=squad[i];return `<div class="challenge-slot">${unit?`<b>${esc(machine(unit.id).name)}</b><small>${RAR[machine(unit.id).rarity]} · ${unit.stars}★ · сила ${fmt(stat(unit))}</small><button class="btn soft" onclick="chooseChallengeUnit(${unit.uid})">Убрать</button>`:`<b class="muted">Слот ${i+1}</b><small>Выберите машину ниже</small>`}</div>`}).join('')}</div>
 <div class="section"><h3>Допущенная техника (${eligible.length})</h3><span class="small muted">Сильнейшие сверху · ${squad.length}/${ch.slots} выбрано</span></div>
 <div class="challenge-candidates">${eligible.map(unit=>{const c=machine(unit.id),isOn=squad.some(x=>x.uid===unit.uid);return `<button class="challenge-machine ${isOn?'picked':''}" onclick="chooseChallengeUnit(${unit.uid})"><b>${esc(c.name)}</b><small>${esc(ROLES[c.role][0])} · ${RAR[c.rarity]} · ${unit.stars}★</small><strong>Сила ${fmt(stat(unit))} ${isOn?'✓':''}</strong></button>`}).join('')||'<div class="notice warn">В гараже пока нет подходящей техники.</div>'}</div></div>
 <div class="split" style="margin-top:18px"><div class="panel pad"><div class="kicker">${(S.challengeProgress[ch.id]||0)>=30?'ВЕТКА ПРОЙДЕНА':`ЭТАП ${n} / 30`}</div><h3>${esc(m.name)}</h3><div class="statrow"><span>Объём работ</span><b>${fmt(m.difficulty)}</b></div><div class="statrow"><span>Лимит</span><b>${m.turns} циклов</b></div><div class="statrow"><span>Награда</span><b>${rewardText(m)}</b></div><div class="notice" style="margin:12px 0">За этапы 5, 15 и 30 предусмотрены отдельные достижения. Награда за каждую успешную миссию выдаётся один раз.</div>
 ${squad.length===ch.slots?forecastPanel(m,squad):`<div class="forecast warn">Чтобы увидеть прогноз, назначьте ровно ${ch.slots} подходящих машин.</div>`}
 <button class="btn primary" style="width:100%;margin-top:12px" onclick="startChallenge('${ch.id}')" ${(S.challengeProgress[ch.id]||0)>=30||squad.length!==ch.slots?'disabled':''}>${(S.challengeProgress[ch.id]||0)>=30?'Все 30 этапов пройдены':'Начать испытание'}</button></div>${battlePanel()}</div>`;
}
function startChallenge(id){const ch=getChallenge(id);if(!ch)return;
 const n=1+(S.challengeProgress[ch.id]||0),t=challengeSquad(ch);
 if(n>30){notify('Все этапы испытания пройдены');return}
 if(t.length!==ch.slots){notify(`Нужно назначить ${ch.slots} подходящих машин`);return}
 const m=challengeMission(ch,n),b=calculate(m,false,t);if(!b)return;
 S.battle=b;S.lastReward=b.win?m:null;
 if(b.win){S.challengeProgress[ch.id]=n;S.coins+=m.coins;S.parts+=m.parts;S.gems+=m.gems;S.wins++;bump('battles');log(`Испытание «${ch.title}», этап ${n}: победа. ${rewardText(m)}`);notify(`Испытание ${n}/30 пройдено!`)}
 else{S.losses++;log(`Испытание «${ch.title}», этап ${n}: неудача (${Math.round(b.completed/m.difficulty*100)}%)`);notify('Испытание не пройдено — изучите протокол')}
 render();
}

const ACHIEVEMENTS=[
 {id:'first',title:'Первый урожай',desc:'Выиграть 1 операцию',measure:()=>S.wins,goal:1,reward:{coins:1500,parts:40,gems:20,tickets:0}},
 {id:'campaign5',title:'Первые пять полей',desc:'Пройти 5 этапов кампании',measure:()=>S.campaign-1,goal:5,reward:{coins:2500,parts:70,gems:25,tickets:0}},
 {id:'campaign15',title:'Опытный агроном',desc:'Пройти 15 этапов кампании',measure:()=>S.campaign-1,goal:15,reward:{coins:5500,parts:125,gems:80,tickets:1}},
 {id:'campaign30',title:'Властелин полей',desc:'Пройти все 30 этапов кампании',measure:()=>S.campaign-1,goal:30,reward:{coins:15000,parts:450,gems:200,tickets:3}},
 {id:'tower5',title:'Первые вершины',desc:'Пройти 5 этажей башни',measure:()=>S.tower-1,goal:5,reward:{coins:2400,parts:80,gems:30,tickets:0}},
 {id:'tower15',title:'Мастер полигона',desc:'Пройти 15 этажей башни',measure:()=>S.tower-1,goal:15,reward:{coins:6000,parts:170,gems:100,tickets:1}},
 {id:'roster15',title:'Коллекционер',desc:'Собрать 15 единиц техники',measure:()=>S.roster.length,goal:15,reward:{coins:2000,parts:50,gems:30,tickets:0}},
 {id:'unique20',title:'Парк разнообразия',desc:'Собрать 20 уникальных моделей',measure:()=>new Set(S.roster.map(m=>m.id)).size,goal:20,reward:{coins:5500,parts:130,gems:75,tickets:1}},
 {id:'wins30',title:'Рабочая смена',desc:'Победить в 30 операциях',measure:()=>S.wins,goal:30,reward:{coins:4200,parts:125,gems:60,tickets:1}},
 {id:'opens10',title:'Первые поставки',desc:'Открыть 10 контейнеров за всё время',measure:()=>S.opened,goal:10,reward:{coins:2500,parts:80,gems:40,tickets:0}},
 {id:'opens50',title:'Крупный заказчик',desc:'Открыть 50 контейнеров за всё время',measure:()=>S.opened,goal:50,reward:{coins:8000,parts:250,gems:150,tickets:2}},
 {id:'stars',title:'Высшая модернизация',desc:'Получить машину с 5 звёздами',measure:()=>Math.max(0,...S.roster.map(m=>m.stars)),goal:5,reward:{coins:2500,parts:100,gems:50,tickets:1}},
 {id:'level',title:'Ветеран полей',desc:'Прокачать любую машину до 20 уровня',measure:()=>Math.max(0,...S.roster.map(m=>m.level)),goal:20,reward:{coins:3500,parts:115,gems:60,tickets:1}}
];
// Achievements for all 12 challenge branches: milestones 5 / 15 / 30, claimed once.
for(const ch of CHALLENGES){for(const goal of [5,15,30])ACHIEVEMENTS.push({id:`challenge_${ch.id}_${goal}`,title:`${ch.title}: ${goal} уровней`,desc:`Пройти ${goal} из 30 этапов испытания «${ch.title}»`,measure:()=>S.challengeProgress[ch.id]||0,goal,reward:goal===5?{coins:2200,parts:65,gems:20,tickets:0}:goal===15?{coins:6800,parts:190,gems:70,tickets:1}:{coins:18000,parts:540,gems:200,tickets:2}})}
function rewardAll(r){return `${fmt(r.coins)} 🪙 · ${fmt(r.parts)} 🔩 · ${fmt(r.gems)} 💎${r.tickets?' · '+r.tickets+' 🎫':''}`}
function achievementsReady(){return ACHIEVEMENTS.filter(a=>!S.achievementClaims[a.id]&&a.measure()>=a.goal).length}
function claimAchievement(id){const a=ACHIEVEMENTS.find(x=>x.id===id);if(!a||S.achievementClaims[id]||a.measure()<a.goal)return;S.achievementClaims[id]=true;for(const k of ['coins','parts','gems','tickets'])S[k]+=(a.reward[k]||0);log(`Достижение «${a.title}»: ${rewardAll(a.reward)}.`);notify('Достижение получено!');render()}
function achievementsView(){return `${title('КОЛЛЕКЦИЯ НАГРАД','Достижения','Постоянные цели. Каждое достижение можно получить один раз; награда включает монеты, детали, кристаллы и иногда билеты на элитную поставку.')}
<div class="row" style="margin-bottom:16px"><span class="tag rarity-2">Получено: ${Object.keys(S.achievementClaims).filter(k=>S.achievementClaims[k]).length} / ${ACHIEVEMENTS.length}</span><span class="small muted">Достижения по кампании и коллекции учитывают уже достигнутый прогресс v0.2.</span></div><div class="quest-grid">${ACHIEVEMENTS.map(a=>{const value=a.measure(),got=!!S.achievementClaims[a.id],ready=!got&&value>=a.goal;return `<div class="panel pad quest-card ${got?'achieved':''}"><div class="row between"><h3>${got?'🏆 ':''}${esc(a.title)}</h3><span class="tag ${ready?'rarity-4':'rarity-2'}">${got?'Получено':ready?'Готово':'Цель'}</span></div><p class="small muted">${esc(a.desc)}</p><div class="row between"><b>${Math.min(value,a.goal)} / ${a.goal}</b><span class="small muted">${rewardAll(a.reward)}</span></div><div class="progress"><div style="width:${Math.min(100,value/a.goal*100)}%"></div></div><button class="btn ${ready?'gold':''}" onclick="claimAchievement('${a.id}')" ${ready?'':'disabled'}>${got?'Награда получена':ready?'Получить награду':'Не выполнено'}</button></div>`}).join('')}</div>`}


// v0.2: offline and online resource earnings; never grant retroactive rewards for old saves.
if(!Number.isFinite(S.idleLast))S.idleLast=Date.now();
function idleRates(){let cleared=Math.max(0,Math.min(30,S.campaign-1));return {coins:80+cleared*16,parts:2+Math.floor(cleared/3)}}
function idleCollect(){
 const now=Date.now();if(!Number.isFinite(S.idleLast)){S.idleLast=now;return null}
 if(S.idleLast>now){S.idleLast=now;return null}
 const elapsed=Math.min(now-S.idleLast,8*60*60*1000);const minutes=Math.floor(elapsed/60000);
 if(!minutes)return null;
 const rate=idleRates(),coins=rate.coins*minutes,parts=rate.parts*minutes;
 S.coins+=coins;S.parts+=parts;S.idleLast=now-((now-S.idleLast)%60000);
 S.lastIdle={coins,parts,minutes,time:now};
 log(`Пассивный доход: +${fmt(coins)} монет, +${fmt(parts)} запчастей за ${minutes} мин.`);
 return S.lastIdle;
}
function incomePanel(){const r=idleRates();return `<div class="panel pad idle-panel"><div class="row between"><div><div class="kicker">ПАССИВНЫЙ ДОХОД</div><h3>Работающая ферма</h3></div><span class="tag rarity-2">АВТОСБОР</span></div><p class="small muted">Ферма зарабатывает ресурсы автоматически, даже когда игра закрыта. Начисление раз в минуту, накопление — максимум за 8 часов.</p><div class="grid cols-2"><div class="resource-rate">🪙 <b>+${fmt(r.coins)}</b><span>монет / мин</span></div><div class="resource-rate">🔩 <b>+${fmt(r.parts)}</b><span>деталей / мин</span></div></div><p class="small muted">Доход растёт по мере прохождения кампании: пройдено ${Math.max(0,S.campaign-1)} этапов.</p>${S.lastIdle?`<div class="notice">Последнее начисление: +${fmt(S.lastIdle.coins)} 🪙 и +${fmt(S.lastIdle.parts)} 🔩 за ${S.lastIdle.minutes} мин.</div>`:''}</div>`}
function maxMachineLevel(m){return Math.min(100,10+m.stars*10)}
function isMaxLevel(m){return !!m&&m.level>=maxMachineLevel(m)}
function canLevel(m){return !!m&&m.level<maxMachineLevel(m)&&S.coins>=150+m.level*78&&S.parts>=4+Math.floor(m.level/3)}
// To craft N stars, use N machines of the same rarity and (N-1) stars:
// the main machine + at least ONE identical-model duplicate + any same-rarity fillers.
// All consumed materials must be outside the active squad.
const MAX_CRAFT_STARS=6;
function starRecipe(m){
 if(!m||m.stars>=MAX_CRAFT_STARS)return null;
 const target=m.stars+1,needed=target-1,c=machine(m.id);
 if(!c)return null;
 const pool=S.roster.filter(x=>x.uid!==m.uid&&x.stars===m.stars&&
   machine(x.id)?.rarity===c.rarity&&!S.squad.includes(x.uid));
 const sortLow=(a,b)=>a.level-b.level||stat(a)-stat(b)||a.uid-b.uid;
 const exact=pool.filter(x=>x.id===m.id).sort(sortLow);
 const other=pool.filter(x=>x.id!==m.id).sort(sortLow);
 // Consume one required identical-model duplicate, then use other models first.
 // Identical copies beyond the required one are used only if fillers run short.
 const materials=exact.length?[exact[0],...other,...exact.slice(1)]:[];
 return {target,needed,materials,available:pool.length,exactAvailable:exact.length,
   fillerAvailable:other.length,cost:45*m.stars,rarity:c.rarity};
}
function canStar(m){const r=starRecipe(m);return !!r&&isMaxLevel(m)&&r.exactAvailable>=1&&r.available>=r.needed&&S.parts>=r.cost}
function upBadge(m){return canLevel(m)||canStar(m)?`<span class="upgrade-dot" title="Доступно улучшение"></span>`:''}
function upgradeSummary(){let l=S.roster.filter(canLevel).length,st=S.roster.filter(canStar).length;return {l,st}}

function save(){try{localStorage.setItem('agrarian_manager_v1',JSON.stringify(S))}catch(e){}}
function machine(id){return CATALOG.find(c=>c.id===id)}
function owned(uid){return S.roster.find(m=>m.uid===uid)}
function team(){return S.squad.map(owned).filter(Boolean)}
function stat(item){const c=machine(item.id);return Math.round(c.base*(1+(item.level-1)*0.085)*(1+(item.stars-1)*0.22))}
function nameRole(role){return ROLES[role][0]}
function log(msg){S.history.unshift({time:new Date().toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'}),msg});S.history=S.history.slice(0,30)}
function notify(s){const old=document.querySelector('.toast');if(old)old.remove();const el=document.createElement('div');el.className='toast';el.textContent=s;document.body.appendChild(el);clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.remove(),3200)}
function nav(k){tab=k;render();window.scrollTo(0,0)}
function render(){idleCollect();const titles={overview:'Обзор хозяйства',garage:'Гараж техники',squad:'Формирование бригады',campaign:'Кампания и контракты',supplies:'Центр поставок',workshop:'Мастерская',tower:'Башня испытаний',challenges:'Специализированные испытания',quests:'Производственные задания',achievements:'Достижения',help:'Правила игры'};const walletHTML=`<div class="wallet"><span>🪙 <b>${fmt(S.coins)}</b></span><span>🔩 <b>${fmt(S.parts)}</b></span><span>💎 <b>${fmt(S.gems)}</b></span><span>🎫 <b>${S.tickets}</b></span></div>`;document.getElementById('app').innerHTML=`<div class="shell"><aside class="sidebar"><div class="brand"><small>FM-STYLE / IDLE RPG</small><h1>AGRARIAN<br>MANAGER</h1><p>Коллекционная RPG о технике • v1.4</p></div><nav class="nav">${[['overview','▦','Обзор'],['garage','▤','Гараж'],['squad','☷','Бригада'],['campaign','▧','Кампания'],['supplies','◈','Поставки'],['workshop','⚙','Мастерская'],['tower','▲','Башня'],['challenges','◉','Испытания'],['quests','☑','Задания'],['achievements','🏆','Достижения'],['help','?','Правила']].map(x=>`<button class="${tab===x[0]?'active':''}" onclick="nav('${x[0]}')"><span class="symbol">${x[1]}</span>${x[2]}${x[0]==='workshop'&&upgradeSummary().l+upgradeSummary().st||x[0]==='quests'&&questReadyCount()||x[0]==='achievements'&&achievementsReady()?'<span class="menu-dot"></span>':''}</button>`).join('')}</nav><div class="sidebar-bottom">АВТОСОХРАНЕНИЕ: включено<br>Вся игра работает локально.<br>Данные хранятся в браузере.</div></aside><div class="main"><header class="topbar"><div><div class="title">${titles[tab]}</div><div class="subtitle">Сезон 1 · Регион «Центральные равнины» · Уровень ${Math.max(1,Math.floor((S.campaign-1)/5)+1)}</div></div>${walletHTML}</header><div class="mobile-wallet" aria-label="Ресурсы игрока">${walletHTML}</div><main class="content">${({overview:overview,garage:garage,squad:squadView,campaign:campaignView,supplies:supplies,workshop:workshop,tower:towerView,challenges:challengeView,quests:questsView,achievements:achievementsView,help:helpView})[tab]()}</main></div></div>`;document.querySelectorAll('.table-wrap table').forEach(table=>{const headers=[...table.querySelectorAll('thead th')].map(th=>th.textContent.trim()||'Действие');table.querySelectorAll('tbody tr').forEach(row=>[...row.children].forEach((td,i)=>{if(td.tagName==='TD')td.setAttribute('data-label',headers[i]||'Действие')}))});save()}
function title(k,h,desc){return `<div class="kicker">${k}</div><h1 class="heading">${h}</h1><p class="lead">${desc}</p>`}
function card(m,actions='garage'){let c=machine(m.id),selected=S.squad.includes(m.uid);return `<div class="card ${selected?'selected':''}">${upBadge(m)}<div class="top"><span class="tag rarity-${c.rarity}">${RAR[c.rarity]}</span><span class="tiny muted">#${String(m.uid).padStart(3,'0')}</span></div><div class="illustration">${ROLES[c.role][1]}</div><h3>${esc(c.name)}</h3><div class="small muted">${nameRole(c.role)} · ${esc(c.faction)}</div><div class="statrow"><span>Ур. <b>${m.level}</b> · <span class="stars">${'★'.repeat(m.stars)}</span></span><span>Сила <b>${fmt(stat(m))}</b></span></div><div class="actions">${actions==='garage'?`<button class="btn" onclick="toggleSquad(${m.uid})">${selected?'Убрать':'В отряд'}</button><button class="btn" onclick="openMachine(${m.uid})">Подробнее</button>`:actions==='select'?`<button class="btn ${selected?'primary':''}" onclick="toggleSquad(${m.uid})">${selected?'В отряде ✓':'В отряд'}</button>`:`<button class="btn" onclick="openMachine(${m.uid})">Улучшить</button>`}</div></div>`}
function overview(){return `${title('КОМАНДНЫЙ ЦЕНТР','Сводка руководителя','Развивайте парк техники, собирайте бригаду и проходите производственные испытания. Всё автоматическое, главное — состав и способности.')}
<div class="grid cols-4"><div class="panel metric"><div class="label">Техника в гараже</div><strong>${S.roster.length} <span class="small muted">ед.</span></strong><div class="note">${new Set(S.roster.map(m=>m.id)).size} уникальных моделей</div></div><div class="panel metric"><div class="label">Мощность бригады</div><strong>${fmt(team().reduce((a,m)=>a+stat(m),0))}</strong><div class="note">${team().length} / 5 машин</div></div><div class="panel metric"><div class="label">Кампания</div><strong>${S.campaign-1} <span class="small muted">этапов</span></strong><div class="note">Следующий: ${S.campaign} / 30</div></div><div class="panel metric"><div class="label">Результаты</div><strong>${S.wins} <span class="small muted">побед</span></strong><div class="note">${S.losses} неудачных операций</div></div></div>
<div class="section"><h2>Следующие шаги</h2></div><div class="grid cols-3"><div class="panel pad"><div class="kicker">01 / СОСТАВ</div><h3>Укомплектовать бригаду</h3><p class="small muted">Выбирайте до пяти машин. Специализация и сочетание важнее общей силы.</p><button class="btn" onclick="nav('squad')">Открыть бригаду →</button></div><div class="panel pad"><div class="kicker">02 / ПРОГРЕСС</div><h3>Пройти контракт</h3><p class="small muted">Бой состоит из рабочих циклов, а поле — из трёх участков с препятствиями.</p><button class="btn primary" onclick="nav('campaign')">Кампания →</button></div><div class="panel pad"><div class="kicker">03 / КОЛЛЕКЦИЯ</div><h3>Получить поставку</h3><p class="small muted">Контейнеры дают новые машины и дубликаты для повышения звёзд.</p><button class="btn" onclick="nav('supplies')">Центр поставок →</button></div></div>
${incomePanel()}<div class="row quick-links"><button class="btn" onclick="nav('quests')">☑ Производственные задания ${questReadyCount()?'('+questReadyCount()+' готовы)':''}</button><button class="btn" onclick="nav('achievements')">🏆 Достижения ${achievementsReady()?'('+achievementsReady()+' готовы)':''}</button><button class="btn" onclick="nav('squad')">☷ Пресеты бригад</button><button class="btn" onclick="nav('challenges')">◉ Испытания 30 × 12</button></div><div class="split" style="margin-top:20px"><div class="panel"><div class="panel-head"><h3>Текущая бригада</h3><button class="btn soft" onclick="nav('squad')">Изменить</button></div><div class="pad"><div class="grid cols-3">${team().map(m=>card(m,'details')).join('')||'<div class="empty">Пустой отряд</div>'}</div></div></div><div class="panel"><div class="panel-head"><h3>Журнал хозяйства</h3></div>${S.history.slice(0,9).map(x=>`<div class="activity"><time>${esc(x.time)}</time>${esc(x.msg)}</div>`).join('')}</div></div>`}
// v1.3: разбор свободных дубликатов. Всегда оставляем хотя бы одну машину модели.
function salvageProtected(){const ids=new Set(S.squad);for(const xs of Object.values(S.challengeSquads||{}))if(Array.isArray(xs))xs.forEach(uid=>ids.add(uid));for(const p of S.presets||[])for(const uid of p.uids||[])ids.add(uid);return ids}
function salvageValues(m){const c=machine(m.id);return {coins:Math.round(80+c.rarity*70+m.stars*25+m.level*4),parts:3+c.rarity*4+m.stars*2+Math.floor(m.level/5)}}
function salvageList(id){const same=S.roster.filter(x=>x.id===id),protectedIds=salvageProtected();const unused=same.filter(x=>!protectedIds.has(x.uid)).sort((a,b)=>a.level-b.level||a.stars-b.stars||stat(a)-stat(b)||a.uid-b.uid);return unused.slice(0,Math.max(0,same.length-1))}
function salvageGroupPanel(){const groups=[...new Set(S.roster.map(x=>x.id))].map(id=>({id,units:salvageList(id)})).filter(g=>g.units.length>0).sort((a,b)=>b.units.length-a.units.length||machine(a.id).name.localeCompare(machine(b.id).name,'ru'));
return `<details class="panel pad salvage-panel" style="margin-bottom:18px"><summary>🔩 Разбор лишней техники · ${groups.reduce((n,g)=>n+g.units.length,0)} доступно</summary><p class="small muted">Разберите дубликаты за монеты и запчасти. Сохраняется минимум один экземпляр модели. Машины активной бригады, составов испытаний и сохранённых пресетов защищены. Разбор необратим; ресурсы возвращаются по фиксированной формуле, а не по полной стоимости прокачки.</p>${groups.length?`<div class="salvage-list">${groups.map(g=>{const c=machine(g.id),one=salvageValues(g.units[0]);const total=g.units.reduce((a,m)=>{const v=salvageValues(m);a.coins+=v.coins;a.parts+=v.parts;return a},{coins:0,parts:0});return `<div class="salvage-row"><div><strong>${esc(c.name)}</strong><div class="small muted">${g.units.length} шт. для разбора · ${RAR[c.rarity]}</div><div class="small">За 1: 🪙 ${fmt(one.coins)} · 🔩 ${fmt(one.parts)}</div><div class="small">За все: 🪙 ${fmt(total.coins)} · 🔩 ${fmt(total.parts)}</div></div><div class="salvage-actions"><button class="btn" onclick="salvageMachines(${g.id},1)">Разобрать 1</button><button class="btn danger" onclick="salvageMachines(${g.id},${g.units.length})">Разобрать ${g.units.length}</button></div></div>`}).join('')}</div>`:'<div class="empty">Пока нет свободных дубликатов для разбора.</div>'}</details>`}
function salvageMachines(id,count){if(!Number.isSafeInteger(id)||!Number.isSafeInteger(count)||count<1)return;const available=salvageList(id);if(count>available.length){notify('Недостаточно свободных дубликатов');return}const take=available.slice(0,count),c=machine(id);const reward=take.reduce((a,m)=>{const v=salvageValues(m);a.coins+=v.coins;a.parts+=v.parts;return a},{coins:0,parts:0});if(!confirm(`Разобрать ${count} шт. «${c.name}»?\n\nПолучите: ${fmt(reward.coins)} монет и ${fmt(reward.parts)} запчастей.\n\nОтменить разбор будет невозможно.`))return;
const valid=salvageList(id).slice(0,count);if(valid.length!==count||valid.some((m,i)=>m.uid!==take[i].uid)){notify('Состав гаража изменился. Повторите разбор.');return}const uids=new Set(valid.map(x=>x.uid));S.roster=S.roster.filter(x=>!uids.has(x.uid));S.coins+=reward.coins;S.parts+=reward.parts;if(selectedTarget&&uids.has(selectedTarget))selectedTarget=null;log(`Разбор: ${count} × ${c.name}, +${fmt(reward.coins)} монет, +${fmt(reward.parts)} запчастей.`);render();notify(`Разобрано ${count} шт. · +${fmt(reward.coins)} 🪙 · +${fmt(reward.parts)} 🔩`)}
function garage(){const models=S.roster.filter(m=>(filterRole==='all'||machine(m.id).role===filterRole)&&(filterRarity==='all'||machine(m.id).rarity===+filterRarity)).sort((a,b)=>stat(b)-stat(a)||a.uid-b.uid);return `${title('КОЛЛЕКЦИЯ','Гараж техники','Машины отсортированы по производственной силе: самые мощные сверху. Красная точка — доступно улучшение.')}
${salvageGroupPanel()}<div class="row" style="margin-bottom:16px"><select class="form-select" onchange="filterRole=this.value;render()"><option value="all">Все классы</option>${Object.keys(ROLES).map(r=>`<option value="${r}" ${filterRole===r?'selected':''}>${nameRole(r)}</option>`).join('')}</select><select class="form-select" onchange="filterRarity=this.value;render()"><option value="all">Все редкости</option>${[1,2,3,4,5].map(n=>`<option value="${n}" ${filterRarity==n?'selected':''}>${RAR[n]}</option>`).join('')}</select><span class="muted small">Найдено: ${models.length} · сортировка по силе ↓</span></div><div class="grid cols-4">${models.map(m=>card(m)).join('')||'<div class="empty">Ничего не найдено.</div>'}</div>`}
function toggleSquad(uid){if(S.squad.includes(uid)){S.squad=S.squad.filter(x=>x!==uid)}else if(S.squad.length>=5){notify('В бригаде может быть только 5 машин');return}else S.squad.push(uid);render()}
function squadView(){const visible=S.roster.filter(m=>(squadRole==='all'||machine(m.id).role===squadRole)&&(squadRarity==='all'||machine(m.id).rarity===+squadRarity));return `${title('ТАКТИКА','Машинно-тракторная бригада','Составьте команду из пяти машин. В каждом классе техника отсортирована от самой мощной к слабой; используйте фильтры и сохранённые пресеты.')}
<div class="panel pad"><div class="section" style="margin-top:0"><h2>Активные слоты (${team().length}/5)</h2><span class="small muted">Общая мощность: ${fmt(team().reduce((s,m)=>s+stat(m),0))}</span></div><div class="grid cols-4">${Array.from({length:5},(_,i)=>{const m=owned(S.squad[i]);return `<div class="slot ${m?'filled':''}">${m?`<div class="tiny muted">Слот ${i+1}</div><div style="font-size:25px">${ROLES[machine(m.id).role][1]}</div><div class="machine">${esc(machine(m.id).name)}</div><button class="btn soft" onclick="toggleSquad(${m.uid})">Убрать</button>`:`<div class="muted">+ Свободный слот ${i+1}</div>`}</div>`}).join('')}</div><div class="notice" style="margin-top:15px">Совет: для уборки используйте комбайн + транспорт, для посевной — сеялку + трактор. Каждая операция использует роль машины по-разному.</div></div>
<div style="margin-top:18px">${presetPanel()}</div><div class="section"><h2>Выбор из гаража</h2><span class="small muted">Найдено: ${visible.length} · по силе ↓</span></div>${roleFilters(squadRole,squadRarity,'squad')}
${Object.keys(ROLES).filter(role=>squadRole==='all'||squadRole===role).map(role=>{const xs=strongest(visible.filter(m=>machine(m.id).role===role));return xs.length?`<section class="role-section"><div class="row between"><h3>${ROLES[role][1]} ${ROLE_PLURALS[role]}</h3><span class="small muted">${xs.length} ед. · самые сильные сначала</span></div><div class="grid cols-4">${xs.map(m=>card(m,'select')).join('')}</div></section>`:''}).join('')||'<div class="empty">По выбранным фильтрам техника не найдена.</div>'}`}

const CROP=['Пшеница','Ячмень','Рапс','Кукуруза','Подсолнечник','Соя'];
function campaignMission(n){const modes=['harvest','tillage','sowing','spray'];const job=modes[(n-1)%4];const level=Math.floor((n-1)/4);return {key:'campaign',id:n,job,name:`${JOBS[job].name}: ${CROP[Math.floor((n-1)/5)%CROP.length]}`,difficulty:Math.round(330+n*96+n*n*4),turns:11+(n%3),coins:370+n*100,parts:18+Math.ceil(n*2.1),gems:n%5===0?15:0}}
function towerMission(n){let job=['harvest','sowing','tillage','spray'][(n+1)%4];return {key:'tower',id:n,job,name:`Башня — участок ${n}`,difficulty:Math.round(420+n*145+n*n*5),turns:11,coins:230+n*62,parts:32+n*9,gems:n%5===0?30:0}}
function rewardText(m){return `🪙 ${fmt(m.coins)} · 🔩 ${fmt(m.parts)}${m.gems?' · 💎 '+m.gems:''}`}
function campaignView(){return `${title('ПРОХОЖДЕНИЕ','Кампания: Центральные равнины','30 автоматических миссий. Пройденные задания можно повторять ×10 для добычи монет и запчастей (45% и 50% награды, без кристаллов).')}
<div class="split"><div class="panel"><div class="panel-head"><h3>Карта контрактов</h3><span class="small muted">Открыто ${Math.min(S.campaign,30)} / 30</span></div><div class="table-wrap"><table><thead><tr><th>№</th><th>Операция</th><th>Сложность</th><th>Награда</th><th>Статус</th></tr></thead><tbody>${Array.from({length:30},(_,i)=>campaignMission(i+1)).map(m=>`<tr class="${m.id===S.campaign?'mission-current':''}"><td>${String(m.id).padStart(2,'0')}</td><td>${JOBS[m.job].emoji} ${esc(m.name)}</td><td>${fmt(m.difficulty)}</td><td>${rewardText(m)}</td><td>${m.id<S.campaign?`<button class="btn soft" title="Повтор ×10: 45% монет и 50% деталей, без кристаллов" onclick="repeatMission(${m.id},10)">↻ ×10</button>`:m.id===S.campaign?`<button class="btn primary" onclick="startBattle('campaign',${m.id})">Начать →</button>`:'🔒 Закрыто'}</td></tr>`).join('')}</tbody></table></div></div><div><div class="panel pad"><div class="kicker">СЛЕДУЮЩЕЕ ЗАДАНИЕ</div>${missionDetail(campaignMission(Math.min(S.campaign,30)))}<button class="btn primary" style="margin-top:15px;width:100%" onclick="startBattle('campaign',${Math.min(S.campaign,30)})" ${S.campaign>30?'disabled':''}>Начать операцию</button></div>${battlePanel()}</div></div>`}
function missionDetail(m){return `<h3>${JOBS[m.job].emoji} ${esc(m.name)}</h3><div class="statrow"><span>Объём работ</span><b>${fmt(m.difficulty)}</b></div><div class="divider"></div><div class="statrow"><span>Рабочих циклов</span><b>${m.turns}</b></div><div class="divider"></div><div class="statrow"><span>Награда</span><b>${rewardText(m)}</b></div><div class="divider"></div><div class="small muted">Специализация: <b style="color:#d4ecc8">${nameRole(JOBS[m.job].primary)}</b>. Машины другого профиля также работают, но заметно слабее.</div>${forecastPanel(m)}`}
function towerView(){const m=towerMission(S.tower);return `${title('ИСПЫТАНИЯ','Бесконечные гектары','Миссии постепенно становятся сложнее. За прохождение выдаются запчасти и монеты. Каждые пять этажей — дополнительная награда в кристаллах.')}
<div class="split"><div class="panel pad"><div class="kicker">ЭТАЖ ${S.tower}</div>${missionDetail(m)}<div class="notice" style="margin:18px 0">В башне всегда доступен один следующий этаж. Если не получается — улучшите технику, попробуйте другой состав или получите новые карточки.</div><button class="btn primary" onclick="startBattle('tower',${S.tower})">Начать испытание</button></div>${battlePanel()}</div>`}
function battlePanel(){const b=S.battle;return `<div class="panel" style="margin-top:15px"><div class="panel-head"><h3>Протокол операции</h3>${b?`<span class="tag ${b.win?'rarity-2':'rarity-5'}">${b.win?'УСПЕХ':'НЕУДАЧА'}</span>`:''}</div>${b?`<div class="pad"><div class="row between"><strong>${esc(b.name)}</strong><span class="small muted">${b.used}/${b.turns} циклов</span></div><div style="margin:13px 0" class="progress"><div style="width:${Math.min(100,Math.floor(b.completed/b.difficulty*100))}%"></div></div><div class="statrow"><span>Выполнено</span><b>${fmt(b.completed)} / ${fmt(b.difficulty)} (${Math.min(100,Math.floor(b.completed/b.difficulty*100))}%)</b></div><div class="divider"></div>${b.win?`<div class="results">✓ Контракт выполнен!<br><span class="small">Получено: ${rewardText(b.reward)}</span></div>`:`<div class="notice warn">Не хватило ${fmt(Math.max(0,b.difficulty-b.completed))} ед. работы (${Math.ceil(100*(b.difficulty-b.completed)/b.difficulty)}%). Средняя выработка: ${fmt(b.completed/b.used)} ед./цикл, требовалось ${fmt(Math.ceil(b.difficulty/b.turns))}. Подберите профильную технику, повысьте уровень или повторите операцию.</div>`}<h4>Ход операции</h4><div class="logs">${b.lines.map(x=>`<div class="logline">${esc(x)}</div>`).join('')}</div></div>`:'<div class="empty">Выберите операцию, чтобы увидеть подробный пошаговый протокол: вклад машин, способности, синергии и препятствия.</div>'}</div>`}
function calculate(m,preview=false,overrideTeam=null){const t=overrideTeam||team();if(t.length<1)return null;const job=JOBS[m.job];let remaining=m.difficulty,all=0,lines=[],boost=0,condition=0,quality=0,loaded=0;const factions={};t.forEach(x=>factions[machine(x.id).faction]=(factions[machine(x.id).faction]||0)+1);const factionBonus=Object.values(factions).some(n=>n>=3)?.08:0;const supportTransport=t.filter(x=>machine(x.id).role==='transport').length;const cleanse=t.some(x=>machine(x.id).effect==='cleanse');const terrain=t.some(x=>machine(x.id).effect==='terrain');let used=0;
lines.push(`СТАРТ | ${job.name}, объём ${fmt(m.difficulty)} ед., лимит ${m.turns} циклов`);if(factionBonus)lines.push('СИНЕРГИЯ | 3+ машины одной фракции: +8% производительности');
for(let turn=1;turn<=m.turns&&remaining>0;turn++){
 used++;let done=0;const phase=Math.min(3,Math.ceil(turn/(m.turns/3)));if(turn===1||phase!==Math.min(3,Math.ceil((turn-1)/(m.turns/3))))lines.push(`ЭТАП ${phase}/3 | ${phase===1?"Старт работ":phase===2?"Сложный участок":"Финальный участок"}`);let event=turn%4===0;let debuff=event?(cleanse?.90:terrain?.85:.62):1;
 if(event)lines.push(`ЦИКЛ ${turn} | ${job.obstacle} → коэффициент ${Math.round(debuff*100)}%`);
 let contributions=[];
 for(const x of t){let c=machine(x.id),base=stat(x),factor=c.role===job.primary?1:c.role===job.secondary?.66:(c.role==='tractor'?.43:c.role==='transport'?.32:.23);let ability=(turn%3===0);let skill=1;
 if(ability){if(c.effect==='harvestboost'&&m.job==='harvest')skill=1.65;else if(c.effect==='tillageboost'&&m.job==='tillage')skill=1.65;else if(c.effect==='sowboost'&&m.job==='sowing')skill=1.65;else if(c.effect==='boost')boost+=.035;else if(c.effect==='quality')quality+=1;else if(c.effect==='logistics')loaded+=1;else if(c.effect==='cleanse')condition+=1;else if(c.effect==='terrain')condition+=1;else if(c.effect==='resist')condition+=1;}
 let raw=base*factor*skill*(1+factionBonus+Math.min(.30,boost)+Math.min(.12,quality*.025)+Math.min(.12,loaded*.025)+supportTransport*.05)*debuff*(.92+(preview?0.5:Math.random())*.16);let output=Math.round(raw/3.65);done+=output;contributions.push(`${c.name} ${fmt(output)}${skill>1?' [НАВЫК]':''}`);
 }
 remaining=Math.max(0,remaining-done);all+=done;lines.push(`ЦИКЛ ${turn} | ${contributions.join(' · ')}`);lines.push(`     Выполнено +${fmt(done)}, осталось ${fmt(remaining)}`);
 }
 const win=remaining<=0;return {win,name:m.name,difficulty:m.difficulty,completed:Math.min(all,m.difficulty),turns:m.turns,used,lines,quality,condition,loaded,job:m.job,reward:m};}

function forecastPanel(m,overrideTeam=null){
 const t=overrideTeam||team();if(!t.length)return `<div class="forecast warn">Для прогноза назначьте технику в бригаду.</div>`;
 const b=calculate(m,true,overrideTeam),ratio=b.completed/m.difficulty,need=Math.ceil(m.difficulty/m.turns);
 const avg=Math.round(b.completed/Math.max(1,b.used));const strength=t.reduce((sum,x)=>sum+stat(x),0);
 const primary=t.filter(x=>machine(x.id).role===JOBS[m.job].primary).length;
 const short=Math.max(0,m.difficulty-b.completed);
 const status=ratio>=1?'Прогноз: должно хватить':ratio>=.9?'Почти хватает мощности':'Не хватает мощности';
 const advice=primary===0?`Нет профильной техники (${nameRole(JOBS[m.job].primary)}). Добавьте её для существенного бонуса.`:short>0?`Недостаёт примерно ${fmt(short)} ед. работы. Улучшите профильные машины или замените слабые карточки.`:'Команда соответствует задаче. Помехи и разброс выработки могут повлиять на результат.';
 return `<div class="forecast ${ratio>=1?'good':'warn'}"><div class="row between"><b>Прогноз бригады</b><b>${Math.min(100,Math.round(ratio*100))}%</b></div><div class="progress"><div style="width:${Math.min(100,ratio*100)}%"></div></div><div class="small"><b>${status}</b> · ${fmt(b.completed)} / ${fmt(m.difficulty)} ед.</div><div class="small muted">Сила отряда: ${fmt(strength)} · нужно: ${fmt(need)} ед./цикл · прогноз: ~${fmt(avg)} ед./цикл</div><div class="tiny muted">Сила ≠ выполненная работа. Выработка каждого цикла зависит от силы каждой машины × бонуса её роли (основная ×1, вспомогательная ×0,66, непрофильная ниже) ÷ 3,65, затем учитываются навыки, синергия и препятствия.</div><div class="small">${advice}</div><div class="tiny muted">Прогноз по действующей формуле боя при среднем разбросе, с учётом ролей, навыков, синергии и препятствий. Не гарантия победы.</div></div>`;
}
function repeatMission(id,count){
 if(id>=S.campaign||id<1){notify('Повтор доступен после прохождения этапа');return}
 let mission=campaignMission(id),wins=0,totalC=0,totalP=0,last=null;
 for(let i=0;i<count;i++){
   const b=calculate(mission);last=b;if(!b||!b.win)break;
   wins++;totalC+=Math.round(mission.coins*.45);totalP+=Math.round(mission.parts*.5);
 }
 S.coins+=totalC;S.parts+=totalP;S.wins+=wins;bump('repeatWins',wins);bump('battles',wins);
 if(last){S.battle=last;S.battle.reward={coins:Math.round(mission.coins*.45),parts:Math.round(mission.parts*.5),gems:0};}
 log(`Повтор этапа ${id}: ${wins}/${count} побед, +${fmt(totalC)} монет, +${fmt(totalP)} деталей.`);
 notify(wins?`Автоповтор: ${wins} побед. +${fmt(totalC)} монет, +${fmt(totalP)} деталей`:'Автоповтор не удался — смените бригаду');render();
}
function startBattle(type,id){if(team().length===0){notify('Сначала добавьте машины в бригаду');return}const m=type==='campaign'?campaignMission(id):towerMission(id);if(type==='campaign'&&id!==S.campaign){notify('Можно проходить только следующий этап');return}if(type==='tower'&&id!==S.tower){notify('Недоступный этаж башни');return}const b=calculate(m);S.battle=b;S.lastReward=b.win?m:null;if(b.win){S.coins+=m.coins;S.parts+=m.parts;S.gems+=m.gems;S.wins++;bump('battles');bump(type==='campaign'?'campaignWins':'towerWins');if(type==='campaign')S.campaign=Math.min(31,S.campaign+1);else S.tower++;log(`Успех: ${m.name}. Награда: ${rewardText(m)}`);notify('Контракт успешно выполнен!')}else{S.losses++;log(`Неудача: ${m.name}. Выполнено ${Math.round(b.completed/m.difficulty*100)}%.`);notify('Не хватило производительности — изучите протокол')}render()}
function cataloguePanel(){
 const list=CATALOG.filter(c=>(catalogueRole==='all'||c.role===catalogueRole)&&(catalogueRarity==='all'||c.rarity===+catalogueRarity)).sort((a,b)=>a.role.localeCompare(b.role)||b.base-a.base||a.id-b.id);
 const counts=Object.keys(ROLES).map(role=>`${ROLES[role][0]}: ${CATALOG.filter(c=>c.role===role).length}`).join(' · ');
 return `<details class="panel pad" style="margin-top:18px"><summary style="cursor:pointer;font-weight:750">📋 Каталог всей техники (${CATALOG.length} моделей) — посмотреть возможные находки</summary><p class="small muted" style="margin-top:12px">${counts}. В каталоге показана базовая сила без прокачки. Редкости определяют контейнеры, в которых может выпасть машина.</p><div class="row filters" style="margin-bottom:10px"><select class="form-select" onchange="catalogueRole=this.value;render();"><option value="all">Все классы</option>${Object.keys(ROLES).map(role=>`<option value="${role}" ${catalogueRole===role?'selected':''}>${ROLES[role][0]}</option>`).join('')}</select><select class="form-select" onchange="catalogueRarity=this.value;render();"><option value="all">Все редкости</option>${[1,2,3,4,5].map(r=>`<option value="${r}" ${catalogueRarity==r?'selected':''}>${RAR[r]}</option>`).join('')}</select></div><div class="table-wrap"><table><thead><tr><th>Модель</th><th>Класс</th><th>Редкость</th><th>Базовая сила</th><th>Способность</th></tr></thead><tbody>${list.map(c=>`<tr><td>${esc(c.name)}</td><td>${nameRole(c.role)}</td><td><span class="tag rarity-${c.rarity}">${RAR[c.rarity]}</span></td><td>${fmt(c.base)}</td><td>${esc(c.skill)}</td></tr>`).join('')}</tbody></table></div></details>`;
}
// v0.6: balance settings for transparent and testable supply rules.
const CLASS_BOX_PRICE=1800;
const EXTRA_MACHINE_CHANCE=.05;
const RESOURCE_CHANCE=.50;
const ELITE_GEM_CHANCE=.02;
// Weighted reward tables are conditional on the resource reward succeeding.
const COIN_REWARDS=[{value:200,weight:50},{value:500,weight:20},{value:800,weight:15},{value:1200,weight:10},{value:2000,weight:5}];
const PART_REWARDS=[{value:10,weight:50},{value:25,weight:20},{value:40,weight:15},{value:70,weight:10},{value:120,weight:5}];
function weightedPick(table){const total=table.reduce((a,v)=>a+v.weight,0);let r=Math.random()*total;for(const row of table){r-=row.weight;if(r<0)return row.value}return table[table.length-1].value}
function rarityRoll(elite,guaranteed){if(guaranteed)return 4;const r=Math.random();return elite?(r<.60?2:r<.91?3:r<.99?4:5):(r<.64?1:r<.92?2:r<.99?3:4)}
function supplyPity(kind){return kind==='basic'?S.basicPity:kind==='elite'?S.pity:S.classPity[kind]||0}
function setSupplyPity(kind,v){if(kind==='basic')S.basicPity=v;else if(kind==='elite')S.pity=v;else S.classPity[kind]=v}
function supplyLabel(kind){return kind==='basic'?'Базовый':kind==='elite'?'Элитный':`Классовый: ${ROLES[kind][0]}`}
function lastSupplyPanel(){const items=S.supplyLastItems;
 if(!items.length){if(!S.supplyLast)return '';const c=machine(S.supplyLast);return `<div class="section"><h2>Последняя поставка</h2></div><div class="panel pad">${ROLES[c.role][1]} <b>${esc(c.name)}</b> · ${RAR[c.rarity]}</div>`}
 const b=S.supplyLastBonus||{};
 return `<div class="section"><h2>Последняя поставка — ${esc(S.supplyLastKind||'контейнер')}</h2></div><div class="panel pad"><div class="supply-last-list">${items.map(id=>{const c=machine(id);return `<div class="supply-found"><span style="font-size:29px">${ROLES[c.role][1]}</span><div><span class="tag rarity-${c.rarity}">${RAR[c.rarity]}</span><b>${esc(c.name)}</b><div class="small muted">${nameRole(c.role)} · ${esc(c.skill)}</div></div></div>`}).join('')}</div><div class="divider"></div><div class="row"><b>Бонусы:</b> ${b.coins?`🪙 ${fmt(b.coins)}`:''} ${b.parts?`🔩 ${fmt(b.parts)}`:''} ${b.gems?`💎 ${b.gems}`:''} ${!b.coins&&!b.parts&&!b.gems?'<span class="muted">Без дополнительных ресурсов</span>':''}</div>${items.length>1?'<p class="small muted">✨ Бонусная вторая машина!</p>':''}${b.guaranteed?'<p class="small muted">★ Сработала гарантия легендарной техники.</p>':''}</div>`}
function supplies(){
 const classBoxes=Object.keys(ROLES).map(role=>`<div class="panel pad class-box"><div class="kicker">ЦЕЛЕВАЯ ПОСТАВКА</div><h3>${ROLES[role][1]} ${ROLES[role][0]}</h3><p class="muted small">Только ${ROLES[role][0].toLocaleLowerCase('ru')}. Редкости: 64% / 28% / 7% / 1%. Мифические недоступны.</p><div class="small">Гарантия: <b>${S.classPity[role]} / 100</b></div><div class="progress"><div style="width:${S.classPity[role]}%"></div></div><div class="divider"></div><div class="small">Цена: <b>🪙 ${fmt(CLASS_BOX_PRICE)}</b></div><button class="btn primary" style="margin-top:13px" onclick="summon('${role}')" ${S.coins<CLASS_BOX_PRICE?'disabled':''}>Открыть</button></div>`).join('');
 return `${title('СНАБЖЕНИЕ','Центр поставок','Каждый контейнер содержит технику. Шанс второй машины — 5%; ресурсного бонуса — 50%. Выпадение легендарной или мифической машины сбрасывает гарантию соответствующего контейнера.')}
 <div class="grid cols-3"><div class="panel pad"><div class="kicker">ОБЫЧНАЯ ПОСТАВКА</div><h3>Базовый контейнер</h3><p class="muted small">Обычная 64% · редкая 28% · эпическая 7% · легендарная 1%.</p><p class="small">Гарантия: <b>${S.basicPity} / 100</b></p><div class="progress"><div style="width:${S.basicPity}%"></div></div><div class="divider"></div><div class="small">Цена: <b>🪙 900</b></div><button class="btn primary" style="margin-top:13px" onclick="summon('basic')" ${S.coins<900?'disabled':''}>Открыть базовый</button></div>
 <div class="panel pad"><div class="kicker">РАСШИРЕННАЯ ПОСТАВКА</div><h3>Элитный контейнер</h3><p class="muted small">Редкая 60% · эпическая 31% · легендарная 8% · мифическая 1%. Дополнительно 2% на 💎 5.</p><p class="small">Гарантия: <b>${S.pity} / 20</b></p><div class="progress"><div style="width:${S.pity*5}%"></div></div><div class="divider"></div><div class="small">Цена: <b>🎫 1</b> или <b>💎 100</b></div><button class="btn gold" style="margin-top:13px" onclick="summon('elite')" ${S.tickets<1&&S.gems<100?'disabled':''}>Открыть элитный</button></div>
 <div class="panel pad"><div class="kicker">ПРАВИЛА НАГРАД</div><h3>Дополнительное содержимое</h3><p class="small muted">100%: одна машина · 5%: вторая машина.</p><p class="small muted">50%: бонус ресурсами, с равным шансом монеты или запчасти. У элитной поставки ресурс удвоен.</p><p class="small muted">Монеты: 200 (50%), 500 (20%), 800 (15%), 1 200 (10%), 2 000 (5%). Запчасти: 10 / 25 / 40 / 70 / 120 с такими же весами.</p><p class="tiny muted">Проценты сумм указаны при условии, что выпал соответствующий ресурс. Счётчики независимы. Всего поставок: ${S.opened}.</p></div></div>
 <div class="section"><h2>Классовые контейнеры · 🪙 ${fmt(CLASS_BOX_PRICE)}</h2></div><p class="small muted">У каждого класса своя гарантия 100 открытий. Цена выше базовой, зато выпадает только выбранная категория техники. Общие шансы редкости совпадают с базовыми контейнерами.</p>
 <div class="grid cols-3">${classBoxes}</div>
 ${lastSupplyPanel()}${cataloguePanel()}<div class="notice" style="margin-top:18px">Для повышения до N★ нужны N экземпляров одной модели с (N−1)★, включая улучшаемую машину. Максимум — 6★. Материалы из активной бригады не расходуются.</div>`
}
function summon(kind){
 const elite=kind==='elite',basic=kind==='basic',classBox=!elite&&!basic;
 if(classBox&&!ROLES[kind])return;
 const price=basic?900:CLASS_BOX_PRICE;
 if(!elite){if(S.coins<price)return;S.coins-=price}
 else if(S.tickets>0)S.tickets--;
 else if(S.gems>=100)S.gems-=100;
 else return;
 const nextPity=supplyPity(kind)+1,guaranteed=nextPity>=(elite?20:100);
 const count=Math.random()<EXTRA_MACHINE_CHANCE?2:1;
 const received=[];let gotLegend=false;
 for(let i=0;i<count;i++){
  const rarity=rarityRoll(elite,guaranteed&&i===0);
  const pool=CATALOG.filter(c=>c.rarity===rarity&&(!classBox||c.role===kind));
  // Every class currently contains at least one model per available basic rarity.
  if(!pool.length)throw Error('Пустой пул поставки: '+kind+' / '+rarity);
  const c=pool[rnd(0,pool.length-1)];
  received.push(c);if(rarity>=4)gotLegend=true;
  S.roster.push({uid:S.nextUid++,id:c.id,level:1,stars:Math.min(5,c.rarity)});
 }
 setSupplyPity(kind,gotLegend?0:nextPity);
 const bonus={coins:0,parts:0,gems:0,guaranteed};
 if(Math.random()<RESOURCE_CHANCE){
  if(Math.random()<.5)bonus.coins=weightedPick(COIN_REWARDS)*(elite?2:1);
  else bonus.parts=weightedPick(PART_REWARDS)*(elite?2:1);
 }
 if(elite&&Math.random()<ELITE_GEM_CHANCE)bonus.gems=5;
 S.coins+=bonus.coins;S.parts+=bonus.parts;S.gems+=bonus.gems;
 S.opened++;bump('opens');S.supplyLast=received[0].id;
 S.supplyLastItems=received.map(c=>c.id);S.supplyLastKind=supplyLabel(kind);S.supplyLastBonus=bonus;
 const desc=received.map(c=>`${c.name} (${RAR[c.rarity]})`).join(' + ');
 log(`${supplyLabel(kind)}: ${desc}.${bonus.coins?' +'+bonus.coins+' монет':''}${bonus.parts?' +'+bonus.parts+' деталей':''}${bonus.gems?' +'+bonus.gems+' кристаллов':''}`);
 notify(`Поставка: ${received.length} ед. техники${gotLegend?' ★ Легенда!':''}`);render();
}

function workshop(){if(selectedTarget&&!owned(selectedTarget))selectedTarget=null;const m=owned(selectedTarget)||S.roster[0];const c=machine(m.id);const upgradeCost=150+m.level*78,starsCost=45*m.stars;const recipe=starRecipe(m);return `${title('МОДЕРНИЗАЦИЯ','Мастерская','Красные индикаторы показывают доступные улучшения прямо сейчас. Для повышения звезды сначала прокачайте основную машину до максимального уровня её текущей звёздности. Для N★ нужны N машин одинаковой редкости и (N−1)★, включая основную. Из материалов минимум один дубль той же модели.')}
<div class="notice" style="margin-bottom:16px">🔴 Доступно повышение уровня: <b>${upgradeSummary().l}</b> · звёздности: <b>${upgradeSummary().st}</b>. При изменении ресурсов индикаторы обновляются.</div><div class="split"><div class="panel"><div class="panel-head"><h3>Выберите машину для модернизации</h3></div><div class="table-wrap"><table><thead><tr><th>Модель</th><th>Редкость</th><th>Уровень</th><th>Звёзды</th><th>Сила</th><th></th></tr></thead><tbody>${S.roster.slice().sort((a,b)=>(Number(canLevel(b)||canStar(b))-Number(canLevel(a)||canStar(a)))||stat(b)-stat(a)).map(x=>{let t=machine(x.id);return `<tr style="${x.uid===m.uid?'background:#2b4235':''}"><td>${upBadge(x)} ${esc(t.name)} ${canLevel(x)?`<span class="status-pill">Уровень ↑</span>`:''} ${canStar(x)?`<span class="status-pill star-pill">Звезда ★</span>`:''}</td><td><span class="tag rarity-${t.rarity}">${RAR[t.rarity]}</span></td><td>${x.level}</td><td class="stars">${'★'.repeat(x.stars)}</td><td>${fmt(stat(x))}</td><td><button class="btn" onclick="selectUpgrade(${x.uid})">Выбрать</button></td></tr>`}).join('')}</tbody></table></div></div><div><div class="panel pad"><div class="kicker">КАРТОЧКА ТЕХНИКИ</div><h2>${ROLES[c.role][1]} ${esc(c.name)}</h2><span class="tag rarity-${c.rarity}">${RAR[c.rarity]}</span><p class="small muted">${esc(c.faction)} · ${esc(c.skill)}</p><div class="divider"></div><div class="statrow"><span>Уровень</span><b>${m.level} / ${Math.min(100,10+m.stars*10)}</b></div><div class="statrow" style="margin-top:12px"><span>Звёзды</span><b class="stars">${'★'.repeat(m.stars)} / ${Math.max(MAX_CRAFT_STARS,m.stars)}</b></div><div class="statrow" style="margin-top:12px"><span>Производственная сила</span><b>${fmt(stat(m))}</b></div><div class="divider"></div><h3>Повысить уровень ${canLevel(m)?`<span class="upgrade-dot inline-dot"></span>`:''}</h3><p class="small muted">Следующий уровень усиливает базовую мощность на 8.5% базового значения.</p><p class="small">Цена: 🪙 ${fmt(upgradeCost)} · 🔩 ${4+Math.floor(m.level/3)}</p><button class="btn primary" onclick="upgradeLevel(${m.uid})" ${m.level>=Math.min(100,10+m.stars*10)||S.coins<upgradeCost||S.parts<4+Math.floor(m.level/3)?'disabled':''}>Повысить уровень</button><div class="divider"></div><h3>Повысить звёздность ${canStar(m)?`<span class="upgrade-dot inline-dot"></span>`:''}</h3>${recipe?`<div class="notice ${isMaxLevel(m)?'':'warn'}" style="margin:10px 0">${isMaxLevel(m)?'✓ Максимальный уровень достигнут. Можно объединять при наличии материалов.':`🔒 Сначала доведите основную машину до уровня <b>${maxMachineLevel(m)}</b>. Сейчас ${m.level}/${maxMachineLevel(m)}, осталось <b>${Math.max(0,maxMachineLevel(m)-m.level)}</b> уровней. Объединение заблокировано.`}</div><p class="small muted"><b>Рецепт ${m.stars}★ → ${recipe.target}★:</b> ${recipe.target} машин редкости «${RAR[c.rarity]}» со звёздностью ${m.stars}★, включая основную «${esc(c.name)}». Требуется <b>${recipe.needed} дополнительных материалов</b>: минимум <b>1 дубль «${esc(c.name)}»</b>, остальные — любые модели этой редкости и звёздности, не из активной бригады.</p><div class="statrow"><span>Дубли «${esc(c.name)}» ${m.stars}★</span><b class="${recipe.exactAvailable>=1?'stars':'muted'}">${recipe.exactAvailable} / 1</b></div><div class="statrow" style="margin-top:8px"><span>Все свободные материалы ${RAR[c.rarity]} ${m.stars}★</span><b class="${recipe.available>=recipe.needed?'stars':'muted'}">${recipe.available} / ${recipe.needed}</b></div><div class="small muted" style="margin-top:8px">Другие подходящие модели: ${recipe.fillerAvailable}. ${recipe.exactAvailable<1?'Нужен точный дубль.':recipe.available<recipe.needed?'Не хватает материалов нужной звёздности.':'Рецепт по экземплярам собран.'}</div><div class="statrow" style="margin-top:8px"><span>Стоимость</span><b>🔩 ${recipe.cost} ${S.parts>=recipe.cost?'':'(не хватает '+(recipe.cost-S.parts)+')'}</b></div><p class="small muted">Обязательно расходуется один точный дубль; остальные материалы выбираются среди других моделей, начиная с наименее прокачанных. Если их недостаточно, расходуются дополнительные дубли. Машины в бригаде защищены, но сохранённые пресеты могут ссылаться на расходуемую технику.</p><button class="btn gold" onclick="upgradeStars(${m.uid})" ${!canStar(m)?'disabled':''}>Объединить ${recipe.target} машин → ${recipe.target}★</button>`:`<p class="small muted">Максимум новой системы — 6★. ${m.stars>MAX_CRAFT_STARS?'Эта машина имеет звёздность из прежнего сохранения и сохранена без изменений.':'Машина достигла максимальной звёздности.'}</p><button class="btn gold" disabled>Максимальная звёздность</button>`}</div></div></div>`}
function selectUpgrade(uid){selectedTarget=uid;render()}
function upgradeLevel(uid){const m=owned(uid),cost=150+m.level*78,part=4+Math.floor(m.level/3);if(m.level>=Math.min(100,10+m.stars*10)||S.coins<cost||S.parts<part)return;S.coins-=cost;S.parts-=part;m.level++;bump('levelUps');log(`Модернизация: ${machine(m.id).name}, уровень ${m.level}.`);notify('Уровень повышен');render()}
function upgradeStars(uid){
 const m=owned(uid),r=starRecipe(m);
 if(!r||!canStar(m))return;
 const consumed=r.materials.slice(0,r.needed).map(x=>x.uid);
 if(consumed.length!==r.needed)return;
 S.parts-=r.cost;
 const ids=new Set(consumed);
 S.roster=S.roster.filter(x=>!ids.has(x.uid));
 m.stars=r.target;
 bump('starUps');
 log(`Объединение по редкости «${RAR[machine(m.id).rarity]}»: ${machine(m.id).name} повышена до ${m.stars}★ (1 точный дубль и ${r.needed-1} других материалов).`);
 notify(`Получена ${m.stars}★ техника! Израсходовано ${r.needed} материалов`);
 render();
}
function openMachine(uid){selectedTarget=uid;nav('workshop')}
function helpView(){return `${title('РУКОВОДСТВО','Как играть','Главная цель — собрать сильные команды и проходить всё более сложные производственные операции.')}
<div class="panel pad help"><h3>1. С чего начать?</h3><p>У вас есть семь стартовых машин. Откройте «Бригада» и выберите пять моделей. Затем откройте «Кампания» и выполните первый контракт. Вы получите монеты и запчасти.</p><h3>2. Как устроен бой?</h3><p>Это пошаговая автоматическая симуляция. Каждая машина выполняет работу на каждом цикле. За ограниченное число циклов необходимо закрыть весь объём работ. Поле может создавать помехи каждые четыре цикла. В протоколе отображается вклад каждой машины.</p><h3>3. Зачем разные классы?</h3><p>Каждая операция имеет основную специализацию: уборка → комбайны, обработка почвы → почвообрабатывающие агрегаты, посевная → сеялки, защита посевов → опрыскиватели. Поддерживающие классы могут повышать общую эффективность. Три машины одной фракции дают +8% командной производительности.</p><h3>4. Как работают способности?</h3><p>Каждый третий цикл срабатывают пассивно-активные эффекты. Профильные машины получают производственный множитель, тракторы усиливают бригаду, транспорт улучшает логистику, спецтехника снижает последствия препятствий.</p><h3>5. Как получить новую технику?</h3><p>Базовый контейнер стоит 900 монет, классовый — 1800 (только машины выбранного класса), элитный — 1 билет или 100 кристаллов. Каждый контейнер всегда даёт одну машину; с шансом 5% — вторую. С шансом 50% выдаются дополнительные монеты или детали. Элитный имеет отдельный шанс 2% на 5 кристаллов.</p><h3>6. Как усиливать карточки?</h3><p>В «Мастерской» повышайте уровень за монеты и запчасти. Повышение звёздности доступно только после достижения основной машиной максимального уровня для её текущих звёзд (1★ — 20, 2★ — 30, 3★ — 40, 4★ — 50, 5★ — 60). Материалы не обязаны быть максимального уровня. Чтобы получить N★, объедините N машин одной редкости с (N−1)★: основную машину, один точный дубль модели и остальные любые модели той же редкости. Основная машина входит в необходимое количество, остальные расходуются. Рецепты: 2×1★ → 2★; 3×2★ → 3★; 4×3★ → 4★; 5×4★ → 5★; 6×5★ → 6★. Максимальная звёздность новых улучшений — 6★. Машины из активного состава не используются как материалы.</p><h3>7. Где брать ресурсы, если не пройти следующий этап?</h3><p>Раздел «Обзор» показывает пассивный доход от кампании — он автоматически начисляется каждую минуту, в том числе после закрытия приложения (до 8 часов). В кампании можно повторить уже пройденные задания кнопкой ↻ ×10 за уменьшенную награду, без кристаллов.</p><h3>8. Почему бригада не проходит контракт?</h3><p>Откройте прогноз перед контрактом: он рассчитан той же формулой, что и операция. Влияют сила карточек, профиль работы, синергия, способности, препятствия и небольшой случайный разброс.</p><h3>9. Задания и достижения</h3><p>Задания повторяются без календаря и обновляются сразу после получения награды. Достижения дают одноразовые бонусы: монеты, детали, кристаллы и купоны на элитные контейнеры. Прогресс старой кампании учитывается в достижениях.</p><h3>10. Пресеты</h3><p>В разделе «Бригада» можно сохранить до восьми составов и позже применять их целиком. Пресеты ссылаются на конкретные экземпляры техники: расходуемые материалы исчезнут из соответствующего пресета. Машины активной бригады не расходуются.</p><h3>11. Каталог моделей</h3><p>В разделе «Поставки» находится каталог всех доступных моделей с классом, редкостью, базовой силой и навыком. Новые экземпляры добываются из обычных и элитных контейнеров. Каталог не изменяет вероятность выпадения редкости.</p><h3>12. Гарантии поставок</h3><p>Базовый контейнер гарантирует легендарную машину на 100-м открытии без легенды, элитный — на 20-м, каждый классовый — на 100-м. Каждый тип и класс имеют собственный независимый счётчик. Если в контейнере (в том числе как вторая бонусная машина) выпадает легендарная или мифическая техника, счётчик именно этого контейнера обнуляется.</p><h3>13. Специализированные испытания</h3><p>12 веток по 30 уровней. Шесть классовых — строго пять машин одного класса. Тематические испытания — техника одной игровой фракции или эпохи; восточная ветка допускает три машины, поскольку таких моделей сейчас три. Для каждой ветки сохраняется отдельная бригада. Достижения за 5, 15 и 30 пройденных уровней.</p><h3>14. Сохранение и новая игра</h3><p>Прогресс автоматически сохраняется в localStorage того браузера, в котором вы открыли игру. Для сохранности не используйте режим «Инкогнито» и не очищайте данные сайта. Программа не подключается к интернету.</p><p><b>Новая игра для тестирования:</b> кнопка внизу полностью сбросит ресурсы, гараж, составы и пресеты, кампанию, башню, испытания, задания, достижения и счётчики гарантии поставок. Начальные 7 машин и стартовые ресурсы выдаются повторно. Перед сбросом рекомендуем экспортировать текущее сохранение — его можно будет импортировать обратно.</p><div class="divider"></div><div class="row"><button class="btn" onclick="exportSave()">Экспорт сохранения (.json)</button><button class="btn" onclick="document.getElementById('importSave').click()">Импорт сохранения</button><input id="importSave" type="file" accept=".json,application/json" style="display:none" onchange="importSave(event)"><button class="btn danger" onclick="resetGame()">↻ Новая игра (сбросить прогресс)</button></div></div>`}
function exportSave(){const a=document.createElement('a');a.href='data:application/json;charset=utf-8,'+encodeURIComponent(JSON.stringify(S,null,2));a.download='agrarian-manager-save.json';a.click()}
function importSave(e){const f=e.target.files[0];if(!f)return;const reader=new FileReader;reader.onload=()=>{try{const data=JSON.parse(reader.result);if(!Array.isArray(data.roster)||!Array.isArray(data.squad)||typeof data.coins!=='number'||!Array.isArray(data.history))throw Error('Некорректный файл');S=data;migrate03();save();render();notify('Сохранение загружено')}catch(x){notify('Не удалось импортировать сохранение')}};reader.readAsText(f)}
function resetGame(){
 if(!confirm('НАЧАТЬ НОВУЮ ИГРУ?\n\nБудут сброшены ВСЕ ресурсы, гараж, бригады, пресеты, прогресс кампании и испытаний, задания, достижения и гарантии контейнеров.\n\nРекомендуем сначала экспортировать сохранение.'))return;
 if(!confirm('ПОСЛЕДНЕЕ ПОДТВЕРЖДЕНИЕ\n\nТекущий прогресс будет безвозвратно заменён стартовым. Продолжить?'))return;
 S=starter();
 migrate03();
 S.idleLast=Date.now();
 delete S.lastIdle;
 selectedTarget=null;selectedChallenge='class_harvest';challengeFilter='all';
 catalogueRole='all';catalogueRarity='all';
 filterRole='all';filterRarity='all';squadRole='all';squadRarity='all';
 chosenMission='campaign';tab='overview';
 save();render();window.scrollTo(0,0);
 notify('Новая игра: 7 обычных машин, стартовые ресурсы и нулевой прогресс.');
}
render();
setInterval(()=>{if(idleCollect())render()},15000);
