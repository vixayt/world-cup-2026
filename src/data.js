export const G = "good", W = "warn", F = "flag";

// [stage, homeTeam, homeScore, awayTeam, awayScore, date, note, confidence, goals]
// goals: [team, scorer, minute, tag, flagged]
export const DATA = [
["Group A","Mexico",2,"South Africa",0,"11 Jun",null,G,[
  ["Mexico","Quiñones","9'"],["Mexico","Jiménez","67'"]]],
["Group A","South Korea",2,"Czech Republic",1,"11 Jun",null,G,[
  ["South Korea","Hwang In-beom","67'"],["South Korea","Oh Hyeon-gyu","80'"],["Czech Republic","Krejčí","59'"]]],
["Group A","Czech Republic",1,"South Africa",1,"18 Jun",null,G,[
  ["Czech Republic","Sadílek","6'"],["South Africa","Mokoena","83'","pen"]]],
["Group A","Mexico",1,"South Korea",0,"18 Jun",null,G,[
  ["Mexico","Romo","50'"]]],
["Group A","Czech Republic",0,"Mexico",3,"24 Jun",null,G,[
  ["Mexico","Chávez","55'"],["Mexico","Quiñones","61'"],["Mexico","Fidalgo","90+4'"]]],
["Group A","South Africa",1,"South Korea",0,"24 Jun",null,G,[
  ["South Africa","Maseko","63'"]]],

["Group B","Canada",1,"Bosnia and Herzegovina",1,"12 Jun",null,G,[
  ["Canada","Larin","78'"],["Bosnia and Herzegovina","Lukić","21'"]]],
["Group B","Qatar",1,"Switzerland",1,"13 Jun",null,G,[
  ["Qatar","Muheim","90+4'","o.g."],["Switzerland","Embolo","17'","pen"]]],
["Group B","Switzerland",4,"Bosnia and Herzegovina",1,"18 Jun",null,G,[
  ["Switzerland","Manzambi","74'"],["Switzerland","Manzambi","90'"],["Switzerland","Vargas","84'"],["Switzerland","Xhaka","90+7'","pen"],["Bosnia and Herzegovina","Mahmić","90+3'"]]],
["Group B","Canada",6,"Qatar",0,"18 Jun",null,G,[
  ["Canada","Larin","16'"],["Canada","David","29'"],["Canada","David","45+3'"],["Canada","David","90+2'"],["Canada","Saliba","64'"],["Canada","Manai","75'","o.g."]]],
["Group B","Switzerland",2,"Canada",1,"24 Jun",null,G,[
  ["Switzerland","Vargas","46'"],["Switzerland","Manzambi","57'"],["Canada","P. David","76'"]]],
["Group B","Bosnia and Herzegovina",3,"Qatar",1,"24 Jun",null,G,[
  ["Bosnia and Herzegovina","Alajbegović","29'"],["Bosnia and Herzegovina","Abunada","34'","o.g."],["Bosnia and Herzegovina","Mahmić","80'"],["Qatar","Al-Haydos","42'"]]],

["Group C","Brazil",1,"Morocco",1,"13 Jun",null,G,[
  ["Brazil","Vinícius Jr","32'"],["Morocco","Saibari","21'"]]],
["Group C","Haiti",0,"Scotland",1,"13 Jun",null,G,[
  ["Scotland","McGinn","28'"]]],
["Group C","Scotland",0,"Morocco",1,"19 Jun",null,G,[
  ["Morocco","Saibari","2'"]]],
["Group C","Brazil",3,"Haiti",0,"19 Jun",null,G,[
  ["Brazil","Cunha","23'"],["Brazil","Cunha","36'"],["Brazil","Vinícius Jr","45+3'"]]],
["Group C","Scotland",0,"Brazil",3,"24 Jun",null,G,[
  ["Brazil","Vinícius Jr","7'"],["Brazil","Vinícius Jr","45+3'"],["Brazil","Cunha","60'"]]],
["Group C","Morocco",4,"Haiti",2,"24 Jun",null,G,[
  ["Morocco","Hakimi","39'"],["Morocco","Saibari","45+1'"],["Morocco","Rahimi","78'"],["Morocco","Yassine","89'"],["Haiti","Bounou","10'","o.g."],["Haiti","Isidor","43'"]]],

["Group D","United States",4,"Paraguay",1,"12 Jun",null,G,[
  ["United States","Bobadilla","7'","o.g."],["United States","Balogun","31'"],["United States","Balogun","45+5'"],["United States","Reyna","90+8'"],["Paraguay","Maurício","73'"]]],
["Group D","Australia",2,"Turkey",0,"13 Jun",null,G,[
  ["Australia","Irankunda","27'"],["Australia","Metcalfe","75'"]]],
["Group D","United States",2,"Australia",0,"19 Jun",null,G,[
  ["United States","Burgess","11'","o.g."],["United States","Freeman","43'"]]],
["Group D","Turkey",0,"Paraguay",1,"19 Jun",null,G,[
  ["Paraguay","Galarza","2'"]]],
["Group D","Turkey",3,"United States",2,"25 Jun",null,G,[
  ["Turkey","Güler","10'"],["Turkey","Alper Yılmaz","31'"],["Turkey","Ayhan","90+8'"],["United States","Trusty","3'"],["United States","Berhalter","49'"]]],
["Group D","Paraguay",0,"Australia",0,"25 Jun",null,G,[]],

["Group E","Germany",7,"Curaçao",1,"14 Jun",null,G,[
  ["Germany","Nmecha","6'"],["Germany","Schlotterbeck","38'"],["Germany","Havertz","45+5'","pen"],["Germany","Musiala","47'"],["Germany","Brown","68'"],["Germany","Undav","78'"],["Germany","Havertz","88'"],["Curaçao","Comenencia","21'"]]],
["Group E","Ivory Coast",1,"Ecuador",0,"14 Jun",null,G,[
  ["Ivory Coast","Diallo","90'"]]],
["Group E","Germany",2,"Ivory Coast",1,"20 Jun",null,G,[
  ["Germany","Undav","68'"],["Germany","Undav","90+4'"],["Ivory Coast","Kessié","30'"]]],
["Group E","Ecuador",0,"Curaçao",0,"20 Jun",null,G,[]],
["Group E","Curaçao",0,"Ivory Coast",2,"25 Jun",null,G,[
  ["Ivory Coast","Pépé","7'"],["Ivory Coast","Pépé","64'"]]],
["Group E","Ecuador",2,"Germany",1,"25 Jun",null,G,[
  ["Ecuador","Angulo","9'"],["Ecuador","Plata","77'"],["Germany","Sané","2'"]]],

["Group F","Netherlands",2,"Japan",2,"14 Jun",null,G,[
  ["Netherlands","Van Dijk","51'"],["Netherlands","Summerville","64'"],["Japan","Nakamura","57'"],["Japan","Kamada","88'"]]],
["Group F","Sweden",5,"Tunisia",1,"14 Jun",null,G,[
  ["Sweden","Ayari","7'"],["Sweden","Ayari","90+6'"],["Sweden","Isak","30'"],["Sweden","Gyökeres","59'"],["Sweden","Svanberg","84'"],["Tunisia","Rekik","43'"]]],
["Group F","Netherlands",5,"Sweden",1,"20 Jun",null,G,[
  ["Netherlands","Brobbey","5'"],["Netherlands","Brobbey","17'"],["Netherlands","Gakpo","47'"],["Netherlands","Gakpo","54'"],["Netherlands","Summerville","89'"],["Sweden","Elanga","59'"]]],
["Group F","Tunisia",0,"Japan",4,"20 Jun",null,G,[
  ["Japan","Kamada","4'"],["Japan","Ueda","31'"],["Japan","Ueda","83'"],["Japan","Itō","69'"]]],
["Group F","Japan",1,"Sweden",1,"25 Jun",null,G,[
  ["Japan","Maeda","56'"],["Sweden","Elanga","62'"]]],
["Group F","Tunisia",1,"Netherlands",3,"25 Jun",null,G,[
  ["Tunisia","Mastouri","54'"],["Netherlands","Skhiri","3'","o.g."],["Netherlands","Brobbey","7'"],["Netherlands","Van Hecke","62'"]]],

["Group G","Belgium",1,"Egypt",1,"15 Jun",null,G,[
  ["Egypt","Ashour","19'"],["Belgium","Hany","66'","o.g."]]],
["Group G","Iran",2,"New Zealand",2,"15 Jun",null,G,[
  ["Iran","Rezaeian","32'"],["Iran","Mohebi","64'"],["New Zealand","Just","7'"],["New Zealand","Just","54'"]]],
["Group G","Belgium",0,"Iran",0,"21 Jun",null,G,[]],
["Group G","New Zealand",1,"Egypt",3,"21 Jun",null,G,[
  ["New Zealand","Surman","15'"],["Egypt","Ziko","58'"],["Egypt","Salah","67'"],["Egypt","Trézéguet","82'"]]],
["Group G","Egypt",1,"Iran",1,"26 Jun",null,G,[
  ["Egypt","Saber","5'"],["Iran","Rezaeian","14'"]]],
["Group G","New Zealand",1,"Belgium",5,"26 Jun",null,G,[
  ["New Zealand","Just","84'"],["Belgium","Trossard","28'"],["Belgium","Trossard","50'"],["Belgium","De Bruyne","66'"],["Belgium","Lukaku","86'"],["Belgium","Saelemaekers","90+4'"]]],

["Group H","Spain",0,"Cape Verde",0,"15 Jun",null,G,[]],
["Group H","Saudi Arabia",1,"Uruguay",1,"15 Jun",null,G,[
  ["Saudi Arabia","Al-Amri","41'"],["Uruguay","M. Araújo","80'"]]],
["Group H","Spain",4,"Saudi Arabia",0,"21 Jun",null,G,[
  ["Spain","Yamal","10'"],["Spain","Oyarzabal","21'"],["Spain","Oyarzabal","24'"],["Spain","Al-Tambakti","49'","o.g."]]],
["Group H","Uruguay",2,"Cape Verde",2,"21 Jun",null,G,[
  ["Uruguay","M. Araújo","44'"],["Uruguay","Canobbio","45+6'"],["Cape Verde","K. Pina","21'"],["Cape Verde","Varela","61'"]]],
["Group H","Cape Verde",0,"Saudi Arabia",0,"26 Jun",null,G,[]],
["Group H","Uruguay",0,"Spain",1,"26 Jun",null,G,[
  ["Spain","Baena","42'"]]],

["Group I","France",3,"Senegal",1,"16 Jun",null,W,[
  ["France","Mbappé","66'"],["France","Mbappé","90+6'"],["France","Barcola","82'"],["Senegal","Mbaye","90+5'"]]],
["Group I","Iraq",1,"Norway",4,"16 Jun",null,W,[
  ["Iraq","Hussein","39'"],["Norway","Haaland","29'"],["Norway","Haaland","43'"],["Norway","Østigård","76'"],["Iraq","Hussein","90+6'","o.g."]]],
["Group I","France",3,"Iraq",0,"22 Jun",null,W,[
  ["France","Mbappé","14'"],["France","Mbappé","54'"],["France","Dembélé","66'"]]],
["Group I","Norway",3,"Senegal",2,"22 Jun",null,W,[
  ["Norway","Pedersen","43'"],["Norway","Haaland","48'"],["Norway","Haaland","58'"],["Senegal","Sarr","53'"],["Senegal","Sarr","90+3'"]]],
["Group I","Norway",1,"France",4,"26 Jun",null,W,[
  ["Norway","Aasgaard","21'"],["France","Dembélé","7'"],["France","Dembélé","20'"],["France","Dembélé","32'"],["France","Doué","90+4'"]]],
["Group I","Senegal",5,"Iraq",0,"26 Jun",null,W,[
  ["Senegal","Diarra","4'"],["Senegal","Sarr","56'"],["Senegal","Gueye","59'"],["Senegal","Gueye","71'"],["Senegal","Ndiaye","82'"]]],

["Group J","Argentina",3,"Algeria",0,"16 Jun",null,G,[
  ["Argentina","Messi","17'"],["Argentina","Messi","60'"],["Argentina","Messi","76'"]]],
["Group J","Austria",3,"Jordan",1,"16 Jun",null,F,[
  ["Austria","Schmid","20'"],["Austria","Al-Arab","76'","o.g."],["Austria","Arnautović","90+12'","pen",true],["Jordan","Olwan","50'"]]],
["Group J","Argentina",2,"Austria",0,"22 Jun",null,G,[
  ["Argentina","Messi","38'"],["Argentina","Messi","90+5'"]]],
["Group J","Jordan",1,"Algeria",2,"22 Jun",null,G,[
  ["Jordan","Al-Rashdan","36'"],["Algeria","Benbouali","69'"],["Algeria","Gouiri","82'"]]],
["Group J","Algeria",3,"Austria",3,"27 Jun",null,G,[
  ["Algeria","Belghali","45'"],["Algeria","Mahrez","60'"],["Algeria","Mahrez","90+3'"],["Austria","Arnautović","28'"],["Austria","Sabitzer","55'"],["Austria","Kalajdžić","90+6'"]]],
["Group J","Jordan",1,"Argentina",3,"27 Jun",null,G,[
  ["Jordan","Al-Taamari","55'"],["Argentina","Lo Celso","19'"],["Argentina","Lautaro Martínez","31'","pen"],["Argentina","Messi","80'"]]],

["Group K","Portugal",1,"DR Congo",1,"17 Jun",null,G,[
  ["Portugal","João Neves","6'"],["DR Congo","Wissa","45+5'"]]],
["Group K","Uzbekistan",1,"Colombia",3,"17 Jun",null,G,[
  ["Uzbekistan","Fayzullaev","60'"],["Colombia","Muñoz","40'"],["Colombia","Díaz","65'"],["Colombia","Campaz","90+9'"]]],
["Group K","Portugal",5,"Uzbekistan",0,"23 Jun",null,G,[
  ["Portugal","Ronaldo","6'"],["Portugal","Ronaldo","39'"],["Portugal","Mendes","17'"],["Portugal","Nematov","60'","o.g."],["Portugal","Leão","87'"]]],
["Group K","Colombia",1,"DR Congo",0,"23 Jun",null,G,[
  ["Colombia","Muñoz","76'"]]],
["Group K","Colombia",0,"Portugal",0,"27 Jun",null,G,[]],
["Group K","DR Congo",3,"Uzbekistan",1,"27 Jun",null,G,[
  ["DR Congo","Wissa","68'","pen"],["DR Congo","Wissa","90+1'"],["DR Congo","Mayele","78'"],["Uzbekistan","Shomurodov","10'"]]],

["Group L","England",4,"Croatia",2,"17 Jun",null,W,[
  ["England","Kane","12'","pen"],["England","Kane","42'"],["England","Bellingham","47'"],["England","Rashford","85'"],["Croatia","Baturina","36'"],["Croatia","Musa","45+5'"]]],
["Group L","Ghana",1,"Panama",0,"17 Jun",null,W,[
  ["Ghana","Yirenkyi","90+5'"]]],
["Group L","England",0,"Ghana",0,"23 Jun",null,W,[]],
["Group L","Panama",0,"Croatia",1,"23 Jun",null,W,[
  ["Croatia","Budimir","54'"]]],
["Group L","Panama",0,"England",2,"27 Jun",null,W,[
  ["England","Bellingham","62'"],["England","Kane","67'"]]],
["Group L","Croatia",2,"Ghana",1,"27 Jun",null,W,[
  ["Croatia","Sučić","31'"],["Croatia","Vlašić","83'"],["Ghana","Luckassen","73'"]]],

["Round of 32","South Africa",0,"Canada",1,"28 Jun",null,G,[
  ["Canada","Eustáquio","90+2'"]]],
["Round of 32","Brazil",2,"Japan",1,"29 Jun",null,G,[
  ["Japan","Sano","29'"],["Brazil","Casemiro","56'"],["Brazil","Martinelli","90+5'"]]],
["Round of 32","Germany",1,"Paraguay",1,"29 Jun","aet · Paraguay won 4–3 pens",G,[
  ["Paraguay","Enciso","42'"],["Germany","Havertz","54'"]]],
["Round of 32","Netherlands",1,"Morocco",1,"29 Jun","aet · Morocco won 3–2 pens",G,[
  ["Netherlands","Gakpo","72'"],["Morocco","Diop","90+1'"]]],
["Round of 32","Ivory Coast",1,"Norway",2,"30 Jun",null,G,[
  ["Norway","Nusa","39'"],["Ivory Coast","Diallo","74'"],["Norway","Haaland","86'"]]],
["Round of 32","France",3,"Sweden",0,"30 Jun",null,G,[
  ["France","Mbappé","45'"],["France","Barcola","53'"],["France","Mbappé","74'"]]],
["Round of 32","Mexico",2,"Ecuador",0,"30 Jun",null,G,[
  ["Mexico","Quiñones","22'"],["Mexico","Jiménez","31'"]]],
["Round of 32","England",2,"DR Congo",1,"1 Jul",null,G,[
  ["DR Congo","Cipenga","7'"],["England","Kane","75'"],["England","Kane","86'"]]],
["Round of 32","Belgium",3,"Senegal",2,"1 Jul","aet",G,[
  ["Senegal","Diarra","25'"],["Senegal","Sarr","51'"],["Belgium","Lukaku","86'"],["Belgium","Tielemans","89'"],["Belgium","Tielemans","120+5'","pen"]]],
["Round of 32","United States",2,"Bosnia and Herzegovina",0,"1 Jul",null,G,[
  ["United States","Balogun","45'"],["United States","Tillman","82'"]]],
["Round of 32","Spain",3,"Austria",0,"2 Jul",null,G,[
  ["Spain","Oyarzabal","36'"],["Spain","Porro","66'"],["Spain","Oyarzabal","89'"]]],
["Round of 32","Portugal",2,"Croatia",1,"2 Jul",null,G,[
  ["Croatia","Perišić","53'"],["Portugal","Ronaldo","68'","pen"],["Portugal","Ramos","90+4'"]]],
["Round of 32","Switzerland",2,"Algeria",0,"2 Jul",null,G,[
  ["Switzerland","Embolo","10'"],["Switzerland","Ndoye","46'"]]],
["Round of 32","Australia",1,"Egypt",1,"3 Jul","aet · Egypt won 4–2 pens",G,[
  ["Egypt","Ashour","13'"],["Australia","Hany","55'","o.g."]]],
["Round of 32","Argentina",3,"Cape Verde",2,"3 Jul","aet",G,[
  ["Argentina","Messi","29'"],["Cape Verde","D. Duarte","59'"],["Argentina","Lautaro Martínez","92'"],["Cape Verde","Lopes Cabral","103'"],["Argentina","Diney","111'","o.g."]]],
["Round of 32","Colombia",1,"Ghana",0,"3 Jul",null,G,[
  ["Colombia","Arias","14'"]]],

["Round of 16","Canada",0,"Morocco",3,"4 Jul",null,G,[
  ["Morocco","Ounahi","50'"],["Morocco","Ounahi","82'"],["Morocco","Rahimi","90+8'"]]],
["Round of 16","Paraguay",0,"France",1,"4 Jul",null,G,[
  ["France","Mbappé","70'","pen"]]],
["Round of 16","Brazil",1,"Norway",2,"5 Jul",null,G,[
  ["Norway","Haaland","79'"],["Brazil","Neymar","90+10'","pen"],["Norway","Haaland","90'"]]],
["Round of 16","Mexico",2,"England",3,"5 Jul",null,G,[
  ["England","Bellingham","36'"],["England","Bellingham","38'"],["Mexico","Quiñones","42'"],["England","Kane","60'","pen"],["Mexico","Jiménez","69'","pen"]]],
["Round of 16","Portugal",0,"Spain",1,"6 Jul",null,G,[
  ["Spain","Merino","90+1'"]]],
["Round of 16","United States",1,"Belgium",4,"6 Jul",null,G,[
  ["Belgium","De Ketelaere","9'"],["United States","Tillman","31'"],["Belgium","De Ketelaere","33'"],["Belgium","Vanaken","57'"],["Belgium","Lukaku","90+3'"]]],
["Round of 16","Argentina",3,"Egypt",2,"7 Jul",null,G,[
  ["Egypt","Ibrahim","15'"],["Egypt","Zico ","67'"],["Argentina","Romero","79'"],["Argentina","Messi","83'"],["Argentina","Fernández","90+2'"]]],
];

export const CONF_LABEL = { good: "Verified", warn: "Self-consistent", flag: "Flagged" };

export function parseMinute(str) {
  const m = str.match(/(\d+)(?:\+(\d+))?/);
  if (!m) return 0;
  const base = parseInt(m[1], 10);
  const added = m[2] ? parseInt(m[2], 10) : 0;
  return base + added;
}

export const STAGE_ORDER = [];
DATA.forEach((r) => { if (!STAGE_ORDER.includes(r[0])) STAGE_ORDER.push(r[0]); });

export const GOALS = [];
DATA.forEach((row) => {
  const [stageName, home, hs, away, as, date, note, conf, goals] = row;
  goals.forEach((g) => {
    const [team, scorer, minute, tag, flagged] = g;
    GOALS.push({
      stage: stageName,
      stageIdx: STAGE_ORDER.indexOf(stageName),
      minuteStr: minute,
      minuteVal: parseMinute(minute),
      team, scorer, tag: tag || null, flagged: !!flagged, conf,
      match: `${home} ${hs}–${as} ${away}`, date,
    });
  });
});

export const TOTAL_GOALS = GOALS.length;
export const TOTAL_MATCHES = DATA.length;
