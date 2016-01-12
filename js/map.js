﻿$(function () {

var data = [
            //data from svg file
			{
				"name": "PR",
				"path": "M642,-386L648,-385L649,-386L650,-385L645,-384L643,-384L643,-384L639,-382L637,-383L633,-382L632,-383L631,-383L631,-384L639,-386L639,-386L642,-386zM646,-396L647,-395L647,-395L650,-395L651,-394L651,-394L650,-393L649,-394L648,-394L649,-393L649,-392L646,-394L645,-396L646,-396zM540,-404L544,-404L546,-403L551,-403L553,-403L556,-403L558,-403L561,-402L563,-402L563,-403L565,-403L568,-403L570,-403L572,-403L574,-403L578,-402L579,-403L581,-403L588,-402L589,-403L592,-402L594,-402L595,-401L597,-402L598,-402L603,-401L604,-401L605,-401L606,-402L610,-401L611,-401L613,-400L615,-400L617,-399L618,-400L619,-399L619,-399L621,-398L621,-397L622,-398L624,-397L626,-397L627,-398L629,-398L629,-397L628,-396L628,-395L628,-394L628,-392L629,-391L630,-390L629,-389L628,-388L626,-389L624,-388L623,-388L622,-387L619,-385L618,-381L615,-381L616,-380L616,-379L614,-378L613,-377L611,-377L607,-376L605,-377L604,-377L603,-376L601,-376L596,-374L595,-375L593,-376L591,-375L591,-374L588,-375L586,-377L584,-377L582,-375L577,-378L575,-377L570,-376L568,-377L565,-376L562,-378L560,-378L558,-377L555,-376L553,-376L551,-376L550,-375L550,-374L548,-375L545,-377L542,-376L541,-377L539,-375L536,-376L534,-376L534,-376L534,-375L533,-375L532,-376L532,-377L533,-378L534,-379L535,-379L532,-380L533,-382L534,-384L534,-385L534,-387L536,-389L535,-390L533,-393L531,-393L529,-397L532,-398L535,-399L536,-400L535,-402L535,-403L537,-404L540,-404z"
			},
			{
				"name": "US-AK",
				"path": "M133,-531L138,-524L141,-527L152,-526L152,-522L162,-519L169,-521L183,-516L196,-514L202,-512L211,-515L221,-510L228,-508L228,-508L228,-454L228,-384L235,-384L242,-381L246,-376L252,-369L259,-375L266,-379L270,-373L274,-369L280,-364L285,-357L292,-345L303,-339L303,-333L299,-328L296,-332L290,-335L288,-343L279,-351L275,-361L269,-362L258,-362L250,-365L236,-376L230,-378L218,-382L208,-381L195,-386L187,-391L179,-388L181,-381L177,-380L169,-378L163,-374L156,-372L155,-378L158,-389L165,-392L163,-395L154,-389L150,-382L140,-374L145,-369L138,-361L131,-357L124,-354L123,-349L112,-344L110,-340L102,-335L97,-336L91,-333L84,-330L78,-327L67,-324L66,-326L73,-330L80,-333L87,-339L95,-340L99,-344L108,-350L110,-352L115,-355L116,-363L119,-369L111,-366L109,-368L106,-364L101,-369L99,-366L97,-371L90,-367L86,-367L85,-373L86,-377L82,-381L73,-379L67,-384L63,-387L63,-393L58,-398L60,-404L66,-411L68,-417L74,-418L78,-416L84,-422L89,-421L94,-425L93,-430L89,-433L94,-438L90,-438L82,-435L80,-432L75,-435L65,-433L55,-436L53,-442L44,-449L54,-455L69,-461L74,-461L73,-455L88,-455L82,-464L74,-469L69,-476L62,-482L53,-487L57,-495L69,-495L78,-502L79,-510L86,-518L93,-519L106,-527L112,-526L122,-535L133,-531zM19,-425L24,-423L28,-424L33,-421L40,-419L40,-418L34,-415L29,-418L27,-420L21,-419L19,-420L19,-425zM61,-380L57,-378L53,-380L49,-383L55,-385L61,-384L61,-380zM147,-351L140,-347L136,-349L135,-354L142,-358L145,-359L150,-359L153,-355L147,-351z"
			},
			{
				"name": "US-AL",
				"path": "M678,-648L682,-627L686,-610L689,-605L690,-602L688,-599L687,-594L687,-591L687,-588L687,-585L688,-583L689,-581L653,-581L643,-580L643,-579L647,-575L646,-572L645,-570L629,-572L629,-597L632,-623L635,-645L633,-648L655,-648L678,-648z"
			},
			{
				"name": "US-AR",
				"path": "M607,-666L607,-664L605,-662L602,-660L602,-657L599,-655L599,-650L597,-649L597,-647L594,-646L594,-644L591,-639L589,-638L586,-636L584,-632L581,-626L580,-622L582,-618L581,-615L567,-615L548,-615L531,-615L532,-624L528,-624L524,-624L524,-625L524,-640L524,-657L521,-675L542,-675L561,-675L580,-675L600,-673L601,-671L599,-669L597,-668L596,-666L607,-666z"
			},
			{
				"name": "US-AZ",
				"path": "M270,-683L270,-587L235,-587L196,-599L169,-607L171,-610L173,-610L175,-613L172,-615L171,-618L171,-621L174,-625L175,-632L181,-636L177,-639L175,-642L174,-645L173,-648L172,-649L173,-653L173,-656L172,-659L172,-663L171,-665L172,-667L175,-667L179,-666L181,-666L182,-668L183,-669L183,-683L211,-683L245,-683L270,-683z"
			},
			{
				"name": "US-CA",
				"path": "M79,-773L79,-718L112,-694L143,-671L172,-649L173,-648L174,-645L175,-642L177,-639L181,-636L175,-632L174,-625L171,-621L171,-618L172,-615L175,-613L173,-610L171,-610L149,-608L129,-607L127,-613L120,-622L101,-632L94,-632L86,-638L73,-639L68,-642L66,-651L49,-668L35,-693L35,-697L28,-702L14,-717L12,-732L2,-742L6,-757L6,-774L79,-773z"
			},
			{
				"name": "US-CO",
				"path": "M392,-736L392,-709L392,-683L375,-683L354,-683L325,-683L297,-683L270,-683L270,-755L287,-755L305,-755L339,-755L357,-755L392,-755L392,-737L392,-736z"
			},
			{
				"name": "US-CT",
				"path": "M919,-774L919,-764L918,-761L910,-760L900,-759L886,-755L886,-757L889,-759L888,-760L889,-775L902,-774L919,-774z"
			},
			{
				"name": "US-DC",
				"path": "M827,-715L827,-716L826,-717L827,-718L830,-716L827,-715z"
			},
			{
				"name": "US-DE",
				"path": "M856,-733L853,-731L854,-727L857,-718L862,-708L850,-708L849,-731L850,-733L852,-734L856,-733z"
			},
			{
				"name": "US-FL",
				"path": "M750,-577L752,-565L759,-552L766,-540L766,-534L774,-518L775,-504L771,-491L764,-488L755,-490L753,-497L746,-500L737,-513L728,-525L727,-533L730,-542L726,-551L714,-561L704,-567L685,-560L681,-565L664,-572L645,-570L646,-572L647,-575L643,-579L643,-580L653,-581L689,-581L691,-577L709,-576L737,-574L738,-571L740,-573L741,-578L743,-579L746,-578L750,-577z"
			},
			{
				"name": "US-GA",
				"path": "M722,-648L720,-647L717,-643L722,-640L725,-639L728,-634L730,-631L737,-627L738,-625L742,-622L744,-618L749,-615L751,-611L752,-609L751,-608L754,-606L756,-603L756,-600L758,-599L761,-599L753,-587L750,-577L746,-578L743,-579L741,-578L740,-573L738,-571L737,-574L709,-576L691,-577L689,-581L688,-583L687,-585L687,-588L687,-591L687,-594L688,-599L690,-602L689,-605L686,-610L682,-627L678,-648L691,-648L700,-648L722,-648z"
			},
			{
				"name": "US-HI",
				"path": "M329,-473L326,-472L323,-472L319,-475L320,-477L323,-478L329,-478L330,-477L329,-473zM365,-463L367,-460L364,-460L361,-461L360,-461L360,-461L357,-461L353,-466L356,-466L360,-468L363,-464L365,-463zM388,-458L385,-456L375,-457L376,-459L388,-458zM391,-455L394,-453L398,-454L404,-450L404,-449L402,-448L395,-447L394,-451L390,-451L389,-454L390,-455L391,-455zM415,-418L413,-415L407,-417L407,-423L403,-430L408,-435L407,-438L407,-440L408,-440L422,-435L425,-433L425,-430L427,-430L428,-428L431,-426L426,-422L420,-421L415,-418z"
			},
			{
				"name": "US-IA",
				"path": "M580,-802L580,-801L583,-798L581,-797L581,-793L582,-791L583,-788L589,-786L590,-783L591,-782L593,-781L594,-779L597,-777L599,-775L598,-770L595,-766L593,-765L590,-764L584,-763L582,-760L584,-758L585,-755L583,-752L581,-749L577,-747L577,-743L574,-745L571,-748L552,-747L532,-747L516,-747L501,-747L499,-751L500,-754L500,-757L498,-762L497,-765L495,-765L495,-770L494,-773L491,-776L491,-778L490,-781L489,-783L489,-785L486,-787L488,-790L489,-793L489,-795L487,-797L487,-802L489,-802L508,-802L532,-802L557,-802L580,-802z"
			},
			{
				"name": "US-ID",
				"path": "M234,-822L235,-821L235,-774L183,-773L131,-774L131,-808L133,-813L131,-816L128,-817L128,-820L130,-825L134,-829L137,-835L139,-840L141,-843L140,-846L137,-848L133,-851L133,-855L131,-858L131,-887L131,-914L148,-914L149,-891L154,-886L154,-882L157,-879L161,-877L164,-874L169,-867L173,-864L179,-864L177,-860L175,-854L176,-849L174,-848L175,-843L178,-841L181,-843L183,-846L185,-845L187,-843L189,-836L192,-834L193,-829L194,-827L198,-827L200,-824L203,-819L206,-822L212,-821L212,-823L222,-822L226,-822L229,-826L231,-826L232,-823L234,-822z"
			},
			{
				"name": "US-IL",
				"path": "M640,-783L640,-783L640,-778L645,-768L645,-768L645,-768L645,-747L645,-725L643,-720L644,-719L645,-716L645,-714L643,-712L642,-710L638,-706L636,-701L635,-697L636,-696L634,-694L635,-692L632,-691L628,-689L629,-685L627,-684L622,-685L618,-686L616,-685L617,-682L614,-685L612,-684L610,-689L611,-691L609,-695L608,-696L603,-700L601,-700L598,-702L595,-705L596,-708L598,-711L599,-714L595,-717L592,-716L590,-717L590,-720L588,-723L587,-724L583,-726L580,-729L577,-733L575,-739L577,-743L577,-747L581,-749L583,-752L585,-755L584,-758L582,-760L584,-763L589,-764L593,-765L595,-766L598,-770L599,-775L597,-777L594,-779L593,-781L591,-782L590,-783L608,-783L626,-783L640,-783L640,-783L640,-783z"
			},
			{
				"name": "US-IN",
				"path": "M692,-767L692,-751L692,-733L692,-720L691,-719L692,-716L691,-714L688,-714L686,-713L682,-713L681,-710L679,-709L676,-706L674,-705L670,-700L667,-701L666,-703L663,-700L661,-698L657,-700L653,-698L651,-697L646,-699L642,-697L638,-699L638,-697L635,-697L636,-701L638,-706L642,-710L643,-712L645,-714L645,-716L644,-719L643,-720L645,-725L645,-747L645,-768L645,-768L646,-767L652,-767L657,-769L657,-769L676,-769L692,-769L692,-767z"
			},
			{
				"name": "US-KS",
				"path": "M521,-683L506,-683L474,-683L443,-683L426,-683L408,-683L392,-683L392,-709L392,-736L392,-736L422,-736L445,-736L485,-736L509,-736L513,-734L515,-734L516,-731L513,-728L515,-726L517,-723L521,-721L521,-702L521,-683z"
			},
			{
				"name": "US-KY",
				"path": "M731,-708L731,-706L731,-702L733,-700L734,-697L736,-695L738,-693L741,-692L734,-687L729,-685L729,-684L727,-682L722,-680L720,-678L717,-677L712,-676L700,-675L685,-676L680,-676L670,-676L659,-676L650,-677L639,-676L639,-677L635,-677L635,-674L610,-674L614,-676L617,-678L617,-680L617,-682L616,-685L618,-686L622,-685L627,-684L629,-685L628,-689L632,-691L635,-692L634,-694L636,-696L635,-697L638,-697L638,-699L642,-697L646,-699L651,-697L653,-698L657,-700L661,-698L663,-700L666,-703L667,-701L670,-700L674,-705L676,-706L679,-709L681,-710L682,-713L686,-713L688,-714L691,-714L692,-716L691,-719L692,-720L698,-720L701,-718L705,-714L709,-713L712,-711L716,-712L719,-711L723,-712L726,-712L727,-710L731,-708z"
			},
			{
				"name": "US-LA",
				"path": "M581,-615L583,-614L581,-611L584,-608L583,-606L585,-603L583,-601L582,-598L579,-596L577,-592L575,-588L573,-586L574,-582L589,-582L606,-582L605,-579L604,-576L605,-574L607,-573L608,-570L608,-568L606,-562L612,-552L588,-551L573,-555L563,-558L550,-560L535,-560L533,-563L535,-565L538,-567L538,-570L536,-571L538,-575L539,-577L541,-583L539,-585L537,-589L536,-593L535,-595L532,-597L531,-615L548,-615L567,-615L581,-615z"
			},
			{
				"name": "US-MA",
				"path": "M936,-790L936,-780L941,-770L948,-769L947,-776L952,-772L951,-767L939,-764L930,-764L930,-767L927,-769L926,-774L919,-774L902,-774L889,-775L893,-788L907,-787L928,-787L930,-789L934,-790L936,-790z"
			},
			{
				"name": "US-MD",
				"path": "M849,-731L850,-708L862,-708L863,-707L856,-701L852,-700L851,-699L842,-708L841,-721L838,-715L839,-699L828,-705L827,-707L824,-706L822,-707L824,-711L827,-713L827,-715L830,-716L827,-718L826,-717L823,-719L819,-720L820,-722L818,-724L815,-724L814,-726L812,-729L807,-730L803,-729L801,-728L796,-729L794,-727L790,-726L787,-724L785,-722L785,-731L801,-731L806,-731L819,-731L834,-731L849,-731z"
			},
			{
				"name": "US-ME",
				"path": "M939,-794L937,-794L936,-797L933,-800L933,-801L931,-837L938,-841L945,-850L950,-865L963,-881L969,-876L981,-879L988,-873L988,-845L1000,-834L1000,-826L983,-819L966,-815L946,-803L939,-794z"
			},
			{
				"name": "US-MI",
				"path": "M697,-862L697,-862L702,-862L702,-862L700,-860L709,-852L693,-850L693,-850L679,-852L666,-848L654,-846L644,-833L643,-834L643,-834L641,-836L642,-839L638,-839L639,-843L640,-844L639,-847L634,-848L633,-852L630,-852L625,-852L615,-855L600,-859L598,-863L596,-863L596,-863L595,-863L594,-863L595,-863L608,-868L622,-875L637,-882L632,-871L642,-868L654,-860L669,-865L687,-867L690,-861L695,-860L697,-862zM734,-792L734,-792L733,-792L725,-782L721,-775L721,-775L715,-768L715,-768L709,-768L701,-768L692,-767L692,-769L676,-769L657,-769L657,-769L657,-769L660,-772L667,-781L668,-793L662,-805L663,-813L668,-823L672,-830L679,-834L680,-828L684,-838L687,-840L690,-847L705,-843L718,-835L719,-826L717,-817L708,-810L709,-805L712,-805L723,-813L729,-811L733,-800L733,-792L734,-792z"
			},
			{
				"name": "US-MN",
				"path": "M609,-893L609,-893L591,-886L578,-877L567,-869L566,-866L562,-865L562,-853L562,-853L557,-851L554,-849L551,-845L555,-842L553,-837L553,-831L553,-827L558,-823L560,-823L566,-820L568,-819L569,-817L573,-813L579,-811L580,-809L580,-804L580,-802L557,-802L532,-802L508,-802L489,-802L489,-820L487,-839L484,-841L482,-844L483,-847L487,-849L488,-852L488,-855L487,-858L485,-862L484,-866L484,-871L483,-872L483,-878L483,-881L482,-883L481,-887L479,-891L477,-895L477,-899L477,-903L477,-906L478,-908L476,-911L476,-914L512,-914L512,-922L518,-922L521,-910L526,-907L538,-905L556,-902L573,-895L587,-898L609,-893z"
			},
			{
				"name": "US-MO",
				"path": "M577,-743L575,-739L577,-733L580,-729L583,-726L587,-724L588,-723L590,-720L590,-717L592,-716L596,-717L599,-714L598,-711L596,-708L595,-705L598,-702L601,-700L603,-700L608,-696L609,-695L611,-691L610,-689L612,-684L614,-685L617,-682L617,-680L617,-678L614,-676L610,-674L610,-673L609,-670L607,-666L596,-666L597,-668L599,-669L601,-671L600,-673L580,-675L561,-675L542,-675L521,-675L521,-683L521,-683L521,-702L521,-721L517,-723L515,-726L513,-728L516,-731L515,-734L513,-734L509,-736L507,-740L504,-743L501,-746L501,-747L516,-747L532,-747L552,-747L571,-748L574,-745L577,-743z"
			},
			{
				"name": "US-MS",
				"path": "M633,-648L635,-645L632,-623L629,-597L629,-572L618,-568L608,-568L608,-570L607,-573L605,-574L604,-576L605,-579L606,-582L589,-582L574,-582L573,-586L575,-588L577,-592L579,-596L582,-598L583,-601L585,-603L583,-606L584,-608L581,-611L583,-614L581,-615L582,-618L580,-622L581,-626L584,-632L586,-636L589,-638L591,-639L594,-644L594,-646L597,-647L597,-649L614,-649L633,-648z"
			},
			{
				"name": "US-MT",
				"path": "M357,-851L356,-832L327,-832L296,-832L269,-833L235,-832L235,-822L234,-822L232,-823L231,-826L229,-826L226,-822L222,-822L212,-823L212,-821L206,-822L203,-819L200,-824L198,-827L194,-827L193,-829L192,-834L189,-836L187,-843L185,-845L183,-846L181,-843L178,-841L175,-843L174,-848L176,-849L175,-854L177,-860L179,-864L173,-864L169,-867L164,-874L161,-877L157,-879L154,-882L154,-886L149,-891L148,-914L200,-914L252,-914L304,-914L356,-914L356,-875L357,-851z"
			},
			{
				"name": "US-NC",
				"path": "M848,-675L850,-658L839,-645L822,-638L807,-630L801,-629L781,-645L762,-645L762,-647L759,-650L758,-649L757,-650L749,-651L733,-651L724,-648L722,-648L700,-648L701,-652L705,-653L706,-655L708,-657L712,-657L716,-658L720,-659L722,-661L725,-662L725,-664L729,-666L731,-664L737,-668L740,-667L743,-670L746,-671L746,-673L746,-676L776,-675L811,-675L829,-675L848,-675z"
			},
			{
				"name": "US-ND",
				"path": "M476,-914L476,-911L478,-908L477,-906L477,-903L477,-899L477,-895L479,-891L481,-887L482,-883L483,-881L483,-878L483,-872L484,-871L484,-866L485,-862L487,-858L488,-855L488,-852L454,-851L426,-851L390,-851L357,-850L356,-875L356,-914L416,-914L476,-914z"
			},
			{
				"name": "US-NE",
				"path": "M489,-783L490,-781L491,-778L491,-776L494,-773L495,-770L495,-765L497,-765L498,-762L500,-757L500,-754L499,-751L501,-747L501,-746L504,-743L507,-740L509,-736L485,-736L445,-736L422,-736L392,-736L392,-736L392,-737L392,-755L357,-755L357,-793L391,-793L417,-793L452,-793L456,-790L463,-789L464,-789L468,-789L475,-790L479,-787L484,-786L485,-784L486,-783L489,-783z"
			},
			{
				"name": "US-NH",
				"path": "M939,-794L936,-790L934,-790L930,-789L928,-787L907,-787L906,-789L907,-792L907,-797L908,-798L909,-803L911,-806L912,-808L914,-813L914,-816L915,-818L918,-819L922,-821L923,-823L922,-826L924,-832L924,-832L925,-836L931,-837L933,-801L933,-800L936,-797L937,-794L939,-794z"
			},
			{
				"name": "US-NJ",
				"path": "M882,-754L876,-745L880,-744L877,-731L864,-717L863,-722L859,-723L855,-728L854,-727L853,-731L856,-733L859,-734L861,-736L865,-738L867,-740L861,-745L861,-747L859,-747L859,-750L861,-752L860,-755L863,-756L866,-761L868,-761L882,-754z"
			},
			{
				"name": "US-NM",
				"path": "M375,-683L375,-674L375,-629L375,-598L359,-598L328,-598L312,-598L312,-597L314,-594L284,-594L284,-587L270,-587L270,-683L297,-683L325,-683L354,-683L375,-683z"
			},
			{
				"name": "US-NV",
				"path": "M183,-773L183,-683L183,-669L182,-668L181,-666L179,-666L175,-667L172,-667L171,-665L172,-663L172,-659L173,-656L173,-653L172,-649L143,-671L112,-694L79,-718L79,-773L131,-773L131,-774L183,-773z"
			},
			{
				"name": "US-NY",
				"path": "M893,-788L889,-775L888,-760L889,-759L886,-757L886,-755L911,-757L916,-754L892,-748L881,-748L882,-754L868,-761L866,-763L863,-764L861,-767L862,-769L860,-771L856,-774L832,-774L807,-774L780,-774L780,-779L795,-790L795,-792L795,-792L792,-797L801,-800L815,-799L829,-797L842,-804L841,-811L839,-814L839,-814L839,-814L839,-814L857,-828L865,-831L892,-832L891,-828L891,-825L891,-819L892,-816L890,-812L892,-807L891,-804L891,-804L893,-803L893,-788z"
			},
			{
				"name": "US-OH",
				"path": "M767,-748L764,-747L765,-745L764,-741L762,-736L761,-732L760,-730L756,-726L754,-725L751,-725L749,-725L745,-722L745,-719L744,-717L743,-716L742,-718L740,-719L737,-715L737,-711L735,-708L731,-708L727,-710L726,-712L723,-712L719,-711L716,-712L712,-711L709,-713L705,-714L701,-718L698,-720L692,-720L692,-733L692,-751L692,-767L701,-768L709,-768L715,-768L715,-768L715,-768L726,-764L735,-763L747,-765L758,-771L767,-773L767,-748z"
			},
			{
				"name": "US-OK",
				"path": "M521,-675L524,-657L524,-640L524,-625L516,-628L511,-630L507,-629L501,-629L497,-629L494,-628L492,-627L489,-628L483,-627L481,-630L478,-628L473,-629L468,-631L463,-630L461,-634L453,-633L447,-634L442,-635L439,-639L434,-638L431,-639L427,-641L427,-657L427,-674L410,-674L392,-674L375,-674L375,-683L392,-683L408,-683L426,-683L443,-683L474,-683L506,-683L521,-683L521,-683L521,-675z"
			},
			{
				"name": "US-OR",
				"path": "M133,-851L137,-848L140,-846L141,-843L139,-840L137,-835L134,-829L130,-825L128,-820L128,-817L131,-816L133,-813L131,-808L131,-774L131,-773L79,-773L6,-774L0,-784L5,-805L7,-827L10,-857L13,-857L19,-857L23,-855L28,-854L31,-850L32,-847L33,-844L37,-843L41,-843L48,-845L52,-846L58,-845L61,-844L64,-845L68,-846L76,-846L83,-848L86,-850L91,-849L97,-851L133,-851z"
			},
			{
				"name": "US-PA",
				"path": "M868,-761L866,-761L863,-756L860,-755L861,-752L859,-750L859,-747L861,-747L861,-745L867,-740L865,-738L861,-736L859,-734L856,-733L852,-734L850,-733L849,-731L834,-731L819,-731L806,-731L801,-731L785,-731L767,-731L767,-748L767,-773L767,-773L780,-779L780,-779L780,-774L807,-774L832,-774L856,-774L860,-771L862,-769L861,-767L863,-764L866,-763L868,-761z"
			},
			{
				"name": "US-RI",
				"path": "M930,-764L918,-761L919,-764L919,-774L926,-774L927,-769L930,-767L930,-764z"
			},
			{
				"name": "US-SC",
				"path": "M801,-629L794,-617L779,-607L761,-599L758,-599L756,-600L756,-603L754,-606L751,-608L752,-609L751,-611L749,-615L744,-618L742,-622L738,-625L737,-627L730,-631L728,-634L725,-639L722,-640L717,-643L720,-647L722,-648L724,-648L733,-651L749,-651L757,-650L758,-649L759,-650L762,-647L762,-645L781,-645L801,-629z"
			},
			{
				"name": "US-SD",
				"path": "M489,-802L487,-802L487,-797L489,-795L489,-793L488,-790L486,-787L489,-785L489,-783L486,-783L485,-784L484,-786L479,-787L475,-790L468,-789L464,-789L463,-789L456,-790L452,-793L417,-793L391,-793L357,-793L356,-832L357,-851L390,-851L426,-851L454,-851L488,-852L487,-849L483,-847L482,-844L484,-841L487,-839L489,-820L489,-802z"
			},
			{
				"name": "US-TN",
				"path": "M712,-676L738,-675L746,-676L746,-673L746,-671L743,-670L740,-667L737,-668L731,-664L729,-666L725,-664L725,-662L722,-661L720,-659L716,-658L712,-657L708,-657L706,-655L705,-653L701,-652L700,-648L691,-648L678,-648L655,-648L633,-648L614,-649L597,-649L599,-650L599,-655L602,-657L602,-660L605,-662L607,-664L607,-666L609,-670L610,-673L610,-674L635,-674L635,-677L639,-677L639,-676L650,-677L659,-676L670,-676L680,-676L685,-676L700,-675L712,-676z"
			},
			{
				"name": "US-TX",
				"path": "M524,-625L524,-624L528,-624L532,-624L531,-615L532,-597L535,-595L536,-593L537,-589L539,-585L541,-583L539,-577L538,-575L536,-571L538,-570L538,-567L535,-565L533,-563L535,-560L520,-557L504,-545L487,-538L477,-531L473,-524L473,-513L474,-505L477,-500L470,-500L458,-503L444,-508L440,-515L436,-526L425,-535L419,-545L411,-555L398,-562L384,-562L373,-549L359,-554L350,-559L345,-567L340,-576L329,-583L320,-588L314,-594L312,-597L312,-598L328,-598L359,-598L375,-598L375,-629L375,-674L392,-674L410,-674L427,-674L427,-657L427,-641L432,-639L434,-638L439,-639L442,-635L447,-634L453,-633L461,-634L463,-630L468,-631L473,-629L478,-628L481,-630L483,-627L489,-628L492,-627L494,-628L497,-629L501,-629L507,-629L511,-630L516,-628L524,-625z"
			},
			{
				"name": "US-UT",
				"path": "M270,-755L270,-683L245,-683L211,-683L183,-683L183,-773L235,-774L235,-755L270,-755z"
			},
			{
				"name": "US-VA",
				"path": "M843,-686L848,-675L829,-675L811,-675L776,-675L746,-676L738,-675L712,-676L717,-677L720,-678L722,-680L727,-682L729,-684L729,-685L734,-687L741,-692L742,-689L744,-688L747,-686L752,-688L754,-687L761,-689L761,-690L763,-690L765,-691L768,-691L770,-692L771,-694L771,-696L773,-699L776,-701L777,-704L780,-707L782,-711L784,-709L787,-708L789,-709L790,-710L792,-713L794,-715L795,-714L798,-717L801,-719L803,-721L804,-726L813,-721L815,-724L818,-724L820,-722L819,-720L823,-719L826,-717L827,-716L827,-715L827,-713L824,-711L822,-707L824,-706L827,-707L828,-705L839,-695L842,-686L843,-686zM856,-701L852,-700L851,-699L845,-687L846,-687L856,-701z"
			},
			{
				"name": "US-VT",
				"path": "M907,-787L893,-788L893,-803L891,-804L891,-804L892,-807L890,-812L892,-816L891,-819L891,-825L891,-828L892,-832L924,-832L924,-832L922,-826L923,-823L922,-821L918,-819L915,-818L914,-816L914,-813L912,-808L911,-806L909,-803L908,-798L907,-797L907,-792L906,-789L907,-787z"
			},
			{
				"name": "US-WA",
				"path": "M131,-914L131,-887L131,-858L133,-855L133,-851L97,-851L91,-849L86,-850L83,-848L76,-846L68,-846L64,-845L61,-844L58,-845L52,-846L48,-845L41,-843L37,-843L33,-844L32,-847L31,-850L28,-854L23,-855L19,-857L13,-857L10,-857L5,-874L2,-894L26,-890L34,-874L38,-879L35,-896L27,-914L79,-914L131,-914z"
			},
			{
				"name": "US-WI",
				"path": "M594,-863L595,-863L596,-863L596,-863L598,-863L600,-859L615,-855L625,-852L630,-852L633,-852L634,-848L639,-847L640,-844L639,-843L638,-839L642,-839L641,-836L643,-834L643,-834L644,-833L643,-833L637,-826L639,-824L652,-837L654,-837L645,-821L641,-808L638,-797L640,-788L640,-783L640,-783L640,-783L626,-783L608,-783L590,-783L589,-786L583,-788L582,-791L581,-793L581,-797L583,-798L580,-801L580,-802L580,-804L580,-809L579,-811L573,-813L569,-817L568,-819L566,-820L560,-823L558,-823L553,-827L553,-831L553,-837L555,-842L551,-845L554,-849L557,-851L562,-853L562,-853L562,-865L566,-866L566,-866L584,-870L594,-863z"
			},
			{
				"name": "US-WV",
				"path": "M785,-731L785,-722L787,-724L790,-726L794,-727L796,-729L801,-728L803,-729L807,-730L812,-729L814,-726L815,-724L813,-721L805,-726L803,-721L801,-719L798,-717L795,-714L794,-715L792,-713L790,-710L789,-709L787,-708L784,-709L782,-711L780,-707L777,-704L776,-701L773,-699L771,-696L771,-694L771,-692L768,-691L765,-691L763,-690L761,-690L761,-689L754,-687L752,-688L747,-686L744,-688L742,-689L741,-692L738,-693L736,-695L734,-697L733,-700L731,-702L731,-706L731,-708L735,-708L737,-711L737,-715L740,-719L742,-718L743,-716L744,-717L745,-719L745,-722L749,-725L751,-725L754,-725L756,-726L760,-730L761,-732L762,-736L764,-741L765,-745L764,-747L767,-748L767,-731L785,-731z"
			},
			{
				"name": "US-WY",
				"path": "M356,-832L357,-793L357,-755L339,-755L305,-755L287,-755L270,-755L235,-755L235,-774L235,-821L234,-822L235,-822L235,-832L269,-833L296,-832L327,-832L356,-832z"
			}

];

    // Initiate the chart
    $('#container').highcharts('Map', {           

            title : {
                text : ' ' //if you need title type it here
            },
            mapNavigation: {
                enabled: false,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },
			legend: {
                layout: 'horizontal',
                borderWidth: 0,
                backgroundColor: 'rgba(255,255,255,0.85)',
                floating: true,
                verticalAlign: 'top',
                y: -100
            },

            colorAxis: {
            },
			tooltip: {
				headerFormat: '<span style="font-size:18px"><b>{point.name}</b></span>',
				shared: true,
				useHTML: true
			},

            series : [{
                data : data,
                joinBy: ['code_hasc', 'code'],
                name: '{point.name}',
                dataLabels: {
                    enabled: false,   //if you need titles of states change it to true
                    format: '{point.name}'
                }
            }]
    });
	      

	function clear(){
		$(".info").css("display", "none")
	}		
	
	//onclick events for states
	$('.highcharts-name-pr').click(function(){
       clear();
	   $("#pr").css("display", "block");
	});
	$('.highcharts-name-us-ak').click(function(){
	   clear();
	   $("#us-ak").css("display", "block");
	});
	$('.highcharts-name-us-al').click(function(){
	   clear();
	   $("#us-al").css("display", "block");
	});
	$('.highcharts-name-us-ar').click(function(){
	   clear();
	   $("#us-ar").css("display", "block");
	});
	$('.highcharts-name-us-az').click(function(){
	   clear();
	   $("#us-az").css("display", "block");
	});
	$('.highcharts-name-us-ca').click(function(){
	   clear();
	   $("#us-ca").css("display", "block");
	});
	$('.highcharts-name-us-co').click(function(){
	   clear();
	   $("#us-co").css("display", "block");
	});
	$('.highcharts-name-us-ct').click(function(){
	   clear();
	   $("#us-ct").css("display", "block");
	});
	$('.highcharts-name-us-dc').click(function(){
	   clear();
	   $("#us-dc").css("display", "block");
	});
	$('.highcharts-name-us-de').click(function(){
	   clear();
	   $("#us-de").css("display", "block");
	});
	$('.highcharts-name-us-fl').click(function(){
	   clear();
	   $("#us-fl").css("display", "block");
	});
	$('.highcharts-name-us-ga').click(function(){
	   clear();
	   $("#us-ga").css("display", "block");
	});
	$('.highcharts-name-us-hi').click(function(){
	   clear();
	   $("#us-hi").css("display", "block");
	});
	$('.highcharts-name-us-ia').click(function(){
	   clear();
	   $("#us-ia").css("display", "block");
	});
	$('.highcharts-name-us-id').click(function(){
	   clear();
	   $("#us-id").css("display", "block");
	});
	$('.highcharts-name-us-il').click(function(){
	   clear();
	   $("#us-il").css("display", "block");
	});
	$('.highcharts-name-us-in').click(function(){
	   clear();
	   $("#us-in").css("display", "block");
	});
	$('.highcharts-name-us-ks').click(function(){
	   clear();
	   $("#us-ks").css("display", "block");
	});
	$('.highcharts-name-us-ky').click(function(){
	   clear();
	   $("#us-ky").css("display", "block");
	});
	$('.highcharts-name-us-la').click(function(){
	   clear();
	   $("#us-la").css("display", "block");
	});
	$('.highcharts-name-us-ma').click(function(){
	   clear();
	   $("#us-ma").css("display", "block");
	});
	$('.highcharts-name-us-md').click(function(){
	   clear();
	   $("#us-md").css("display", "block");
	});
	$('.highcharts-name-us-me').click(function(){
	   clear();
	   $("#us-me").css("display", "block");
	});
	$('.highcharts-name-us-mi').click(function(){
	   clear();
	   $("#us-mi").css("display", "block");
	});
	$('.highcharts-name-us-mn').click(function(){
	   clear();
	   $("#us-mn").css("display", "block");
	});
	$('.highcharts-name-us-mo').click(function(){
	   clear();
	   $("#us-mo").css("display", "block");
	});
	$('.highcharts-name-us-ms').click(function(){
	   clear();
	   $("#us-ms").css("display", "block");
	});
	$('.highcharts-name-us-mt').click(function(){
	   clear();
	   $("#us-mt").css("display", "block");
	});
	$('.highcharts-name-us-nc').click(function(){
	   clear();
	   $("#us-nc").css("display", "block");
	});
	$('.highcharts-name-us-nd').click(function(){
	   clear();
	   $("#us-nd").css("display", "block");
	});
	$('.highcharts-name-us-ne').click(function(){
	   clear();
	   $("#us-ne").css("display", "block");
	});
	$('.highcharts-name-us-nh').click(function(){
	   clear();
	   $("#us-nh").css("display", "block");
	});
	$('.highcharts-name-us-nj').click(function(){
	   clear();
	   $("#us-nj").css("display", "block");
	});
	$('.highcharts-name-us-nm').click(function(){
	   clear();
	   $("#us-nm").css("display", "block");
	});
	$('.highcharts-name-us-nv').click(function(){
	   clear();
	   $("#us-nv").css("display", "block");
	});
	$('.highcharts-name-us-ny').click(function(){
	   clear();
	   $("#us-ny").css("display", "block");
	});
	$('.highcharts-name-us-oh').click(function(){
	   clear();
	   $("#us-oh").css("display", "block");
	});
	$('.highcharts-name-us-ok').click(function(){
	   clear();
	   $("#us-ok").css("display", "block");
	});
	$('.highcharts-name-us-or').click(function(){
	   clear();
	   $("#us-or").css("display", "block");
	});
	$('.highcharts-name-us-pa').click(function(){
	   clear();
	   $("#us-pa").css("display", "block");
	});
	$('.highcharts-name-us-ri').click(function(){
	   clear();
	   $("#us-ri").css("display", "block");
	});
	$('.highcharts-name-us-sc').click(function(){
	   clear();
	   $("#us-sc").css("display", "block");
	});
	$('.highcharts-name-us-sd').click(function(){
	   clear();
	   $("#us-sd").css("display", "block");
	});
	$('.highcharts-name-us-tn').click(function(){
	   clear();
	   $("#us-tn").css("display", "block");
	});
	$('.highcharts-name-us-tx').click(function(){
	   clear();
	   $("#us-tx").css("display", "block");
	});
	$('.highcharts-name-us-ut').click(function(){
	   clear();
	   $("#us-ut").css("display", "block");
	});
	$('.highcharts-name-us-va').click(function(){
	   clear();
	   $("#us-va").css("display", "block");
	});
	$('.highcharts-name-us-vt').click(function(){
	   clear();
	   $("#us-vt").css("display", "block");
	});
	$('.highcharts-name-us-wa').click(function(){
	   clear();
	   $("#us-wa").css("display", "block");
	});
	$('.highcharts-name-us-wi').click(function(){
	   clear();
	   $("#us-wi").css("display", "block");
	});
	$('.highcharts-name-us-wv').click(function(){
	   clear();
	   $("#us-wv").css("display", "block");
	});
	$('.highcharts-name-us-wy').click(function(){  
	   clear();
	   $("#us-wy").css("display", "block");
	});
		
})