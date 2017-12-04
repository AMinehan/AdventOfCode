function partOne(str){
  str = str.split('\n');
  var phrase;
  var set;
  var totalValid = 0;
  var valid = true;

  for (var i = 0; i < str.length; i++){
    phrase = str[i].split(' ');
    set = new Set();
    for (var j = 0; j < phrase.length; j++){
      if (set.has(phrase[j])){
        valid = false;
        break;
      } else {
        set.add(phrase[j]);
      }
    }
    if (valid){
      totalValid += 1;
    }
    valid = true;
  }

  return totalValid;
}

function partTwo(str){
  str = str.split('\n');
  str = str.map(function(c){return c.split(' ').map(function(x){return x.split('').sort(sortyfunc).join('')})})
  var phrase;
  var set;
  var totalValid = 0;
  var valid = true;

  for (var i = 0; i < str.length; i++){
    phrase = str[i];
    set = new Set();
    for (var j = 0; j < phrase.length; j++){
      if (set.has(phrase[j])){
        valid = false;
        break;
      } else {
        set.add(phrase[j]);
      }
    }
    if (valid){
      totalValid += 1;
    }
    valid = true;
  }

  return totalValid;
}

function sortyfunc(a, b) {
  return a.charCodeAt(0) - b.charCodeAt(0);
}

var input = 'oaoe rxeq vssdqtu xrk cjv yaoqp loo\nmveua dogbam szydvri hyzk lbega abzqw xwjn wniug kwbre\nnpaoy uivpxwd oynpa rcdk uixpvdw\nyserir iikzcm ieuroca iuwcfov rvb giti crdpdcv mxpps\nspyuhgo lucasl ucllsa bymnjig yflbv nxitmlf\nxlxyhwz xla mpye fvjegwg fezlfrt inetrh vhg xpvstx ydhvq\nxgue cvtmh myg ontvvyw ygm oqzrdrw\nsrdfsjf dli kccb kauk kauk apa doefc cdffkhh cdffkhh\nmsizb elqiov lqn epamk onmnlst baawab ncafwaf jrataml iyzhy svycuec\nwdzqpcn dkgdumv wdzqpcn qxdmwib cjsigi bgcihgh fmua\nkpvbzf kpvbzf svyq flg shwtgp\nywrynt cesjtgk hsvitr brpiul lxgvvrl cesjtgk cesjtgk xuflpfn\ntik mrpht gkv unqp wypscc vmwiu ldrigk okbc wztc\nzpy kyzvijv bilpf etbrgk edza vuz jzgn\nyoa rgppd kzpopd cffjk murcb jmt raace iwt\naobgkja drc ztkd qskxxbv lve lev rhhoqex bmd eolf ybxjr yiiut\nzhjcfms fpabnu aozp delsc mge yqi eovg pwefafe\ngukf iys qztqxz xhsssz pfqq slg jdbp pfqq yabztc asow ygh\nfmr ijgmjrc zbhwsmx ylgccz ycydcyx hjjset\nzybsr iqisbs hffmij ikby lwufzvg gwd\nruk rku kur ydurp upmebe\nbaqide zdijcf ezqfe ovrldez delzrov szimd irmk busim ppv zepqk mlwpl\nbxlvp dxumme byaada cgyn diz\nxlxr jhili bmcke nkl vuhqsn lxzb zmyuxgk qcqr tyxe\nwvth gyerrd yewrta kgri yewrta\nfall jpyuusu lffybb ivmtmzx alfl yjupusu\nlzvcg xwnt mjyiklh vwlz qejj mjyiklh dmcwq qejj\nvgutb smc yvnsbgd bxmjd qmhia krxz luhgg emnrp\nuuvhtia aiuutvh brstbr tsrbrb\nhowd japlq lhk qtsfdq htfufj qkyywy anxxxqw jtmryw cdtajh\npksswl jprpccl wpklss yyrbo\nfurp pfru bftha iekamfc bixwmr sslovex\nnrqobo hyb byh hby\nmugix kzlbtuq hmju ysstccs hmju btsuh\nhsrlhw zilj jtvto zilj fjq\nlvol xic hqqdeo gmsug yqe wue vhmrq buj juv wxexdot\nlqeybb odpv mttm bxqy vqbqr ylbei wyjcxco urufsuz kyq\nyoubiz kvrea xsfcp zaz zybiou earvk qpf\nbowsref ooobtic apiushu kplpyza\nhxfhoyy ybbe ceebt recegzz ftnlv ukaf gpvx opvd lqnvk ybbe ygnwa\njpbgc aahm aahm aahm\nqyvheb xyb elt oaksuj dvgpmel poiowc ykgbgpz dxpit ytg\nvgsv yrjo vjss kyfvim izwo yrjo vgsv\nhkk xmqx crlki dtp nuh okef okef xomktit viia nuh tplhrx\nbmkjclx sbwe bwes bsbnqd nqbsbd\ngfwrl vocwln hsuxkz zpclb qprrvlt bkcluvs pqy sxucrla npb fensz\nadjklj nyr btmav roxv jrri vqfnis gzsab ogskmaj\nbvjm fer ztgfx mtp vvhps hptzrar wpy yhvmh qklfwpf edgrdts vmhhy\nlngra nrlga xokqu mgq\nmksdk bkkbfsq hazlai nixee vyxh hpvebeg jujoqe wkw mzpxixm\nkxrkkx qivtt xsm xsm rqvgdjl jilosjs rji\nxiqga rez igqxa odiilj izoiwf xgqia\naepioo krcr aepioo jhigtx krcr qubkv jgo zybyvy wbsguz\nntyscmf duwvvb kga xvaypk sfjlg daguzm kqat otj zmnki\nggxaery jazo ggxaery zevobo zux wfnd wbyd hmhmo oaakvab jsimsw\nvqdnvgy qiex yqeweds yqvdvgn iqcukgc bvrc osi\nesjzak krwe ivbri hnbah iuvb begybsk ctxmlym gjqi lcscum\nhyxdilx tsv evckza bdbscwj jlihiqk dciuj hamd dqsm ydihxxl\nlurtwhx ygwf pwhj whxtrlu zfvywxr gcrl zvl wienpqb woto\nmfaektr ocvho ukfx ukfx old daqwotk pybjtiz kumkiq tmql lqou tmql\nguwy ceqsyvs svteymr nrovwz tesymrv rmsveyt\npigilsu zpyiohn zpyiohn xzl pryi zpyiohn ohdz\npziqfg hhrzdr wxl zpqigf\npsnmnxz oed edo deo\ntkdp tkdp auozn tfyo wmp jtp wjyskeh dag ojdvw gbptp deiqi\nxkr nmsbk mreiv occcvva eca bupc gvaoopu jdhr flh ptgdumz mks\ndlevn vmwzws dlevn dlevn\nqwx qnuqgc rtzc yvym sft wxq fhv fts nyvrfxz ydjvcq tnwz\ndebkk pullndo ezaibw ldnloup nllupdo wiiw nij\nhng rpd aud epq opzjh jnzge\nrmtauf nwinyl nwnliy pjzahm lywnin\ncgiv omva fos irse uytiqu iqjo riplx capa dhdl echbyjw cutfam\nfqrqmi jfrj zllh gfhhq fqrqmi mmyqv\nyoepae uabuxlz jzqy yoepae sxena jzqy\nbfr jlrycal ndg xejwjdp khwg wckevqb tud xljzem ntfbazf lkr\naomdwt sji sij jsi wlsvvva kgjzqj whhf\nogorbil orlgiob iorlbog xapwiqs jxb\ntnn sxgdikv ynick ynick aumwthl rwhx eqxd jdbzyk kbil pmnifp dpeips\nvzeoilq son olqvh jawmny\nvsifce kcighpn mubl zkgwm\nncagxs ilohd lyq oqhjf nfeij qmtvf qpru tfmtaj\npfjkcpr dqrfde efqddr edqdrf\nwdyygax hscx ptmro wqko ecnfkhj ywui\ngdv nrnrzdc vyq vyq vesrj vyq jwxg\noqhrr daoew zpoduh zwmoss nfkh vubf xza kju rhrpt fvsc\noqp ppyq swvin mut uacwd swivn ucdaw icfj ldcujh cejl\ndar bqp ajdhuej sxwt bqp tppexrh tppexrh\nsitplaj xnb ldopp mqd gwtk uhnvozu ljz dqm ylzy qltf gwtjksx\neqkvncb jdp pahwje avhrer awb zqnwfhx zohmcz fitbyab\nxlnel gjzviy cndpuoj jvwxs qsd kwli quisju kyoix imzg\nczqjkk evyima ixpelbv eobpd wwuxxof pbxc dgj\nczsigs lbdaynp amsexn aemsxn easnmx rsitdzf\nxdpc xfbp lrjwlo ntnnob sbe bse\nsuud fws zgn kvfimsi\nwnexa diexvky oemdq uasxzhq qxa kevyixd lpw unluohs\nylruxt beqvn vbenq ogsov mvftu sovog gshtb qriaxko vthgfr jwj\ngmz wcjb cqjlb hijz qwuluuf xdpu jybdf ajiv xizwb\nfcxos spz idg rjb uhr ert bxia urh xfxp ixba bnvxy\nuxiie eixiu wgmwbj euiix qknyd wtaojk naeqfz qmhnulk uscgwxa\nqwyxd jno xelqd isdjht qxz dbwnr bfzhewu opxmkgj igfiuck\nljpphwc ijzic pfsemsc mfedoxy pad wsk beqjpbj gbjr imce xumhr\ncausc ogypj csacu pdokc itpgjl xfx nyt yytg srhrup bontz xbalwnj\nasohjj qer pfgwo qgdw wgdq\ngpzvyhh tsnx tyu kswlgb whju zkkpdm bmh hdov\nunux lhrn unux lhrn rxr\nepq ksew pqct jib pqebafk jib pyfjy gnu pqct\nanzbbs oyhm moyh mhyo\ndpk zael zael mxots zfcum\naehljyc wrj lfhife xbss ztszba vlg eljycah ihffle coypll\naoqedco bogk bogk aoqedco sanwwo\nudmbz yxe dft rzolgtp nwwjpti\nefu qcls rtx mestnqt pkh ciekj scrv uswd oroowx lcztvt\nurnwt uapni ood lzce\nzjiqxt jzqxti infgde xbmi kawilp kaipwl\nlsfn kxfw zgzdfq meqwql zpqqu otert\ntaajsho gbeoguv bpi nxeuy\ndpoyzi rqlzx rqlzx udhuwjm qnu bnuma udhuwjm gfezx cbjpfp woir\nmjbv isni ixjtjue fwsk ncgwpn vqnmq pivz jbmv qoakqou argval dacvksc\nxxjcn amdgdhh iup hlk xxjcn elx\ngyhocay ofqosv nldfqay aqu dsrz lmekze bus lmekze gfoq lmekze vkor\nxidyqq bimvxu zrkg rpcdca ymg nmxkkqu gygcmp euemr\ngvd ywog ywog gvd hwjzzq\nbyu ggpwrl lpexjcf hgy jee febgcae valcgc tcfwicu texqi lxfjepc qeraxcs\nlkjejsb eonp jtsbps pfvlos neop ikwnb avzxnk\nbig pjgttfb eetr jobjfae odvl jheh tuz ystrh tuz tuz ige\nczubaxq czubaxq pbxgs jhuopn snmhhc qwmcka xdhxfuz jhuopn eummw\nxdwduc sqcano zopaco ozbbc bczob eas cbbzo\noanpgo tiav bbssup ttzchih tpb xmfnqwa ghdx uepmz fzqbx\nahha zsbdq jggv zfcjdp dzcfpj dkew jxmelbf jgsohj oghsjj\nawdy plulzw gdi jiiq lod rog mrf uihaz sebk guvb\ntlhwro sapaws ovlbbfh xctruk spzpzm latyy\nligaot xfhacs jvk xbnpu yuanx yvvi gjek\nnfwuug nxccj dxpfvfq pvxcvy ayss lfwz wwole ewowl xceybeb efs zfwl\nlzowlql armo yrlgfg kbl vudahci yav evdi ofak ysmfjk upe\nqtmmqrl gxi rrhbi pydbopp yvevlq ovwwdrt mrppov lzzs yjyrxh srzo\nhytkyas wpuqvf fftiso fftiso\nyutais qjdbzo kewsi opy ysl zyvyoty wkp\nqtbad bxfjkwa stcdk lyre tabdq yler\nfriyh ivp hshy ksmanzq mzdbbub ncbx mhzki friyh vyjk hshy\nijeysr aww evn ttqvshg xkd zjy honvuqy zyj quvyohn gphcir\nokft smja fkto etb\npbi zhyy kyjdho mqsuyic vegocmw gdkskg kgavjag dbqh wamfijz ktihnrg\ncsqix soz ingra gvslgk\nugxgzqt pdn hiynufo lpfabmi rmwj uhsqoo pmlzad ferdup guzqtxg voxd\nwkixiq vck vck sylv ttqcbwv ywqta vblz mhohx frv\nphns ozeghgm dfodkyv iyc psnh tedotyz xqz gqbyj ydttezo kxgju mvip\nchc jdjo pyq usyn vtrbnq ohnx dsxpdzn mgbc ysun mlalmu mqemyuw\nqrkosx wcwcv brvbwo nvxwg bvrwob\nbovt gpb rwm gpb pitttl rwm rvfzn tbo\nzczkb tmpwtj kackkx yzqkzso rsg ema ereo jptvfd jptvfd flbjfii\nfcdyetv jqelvx jlevqx cfvetyd\ndtyp wfh rxtpwr nolbro iozrs mnshu tkesvyk pkmkf\nlvecoh ohpb brlqwx immgqe dzfac bwlrxq hng clxmpd qodfyv\nsjbc dsoqk dqosk iyla lqzrsgi tjgt mfxshtd ztmc\nnxveg vmxf jwnub kujji aqkonjl xtit xitt\njsft pmojruo vtvjox wimrlhj rezqi rnv hjnvdka\nvnl vzgltnl mry kkqf fekwjw knsrvt nct kqy infvys\njbvm igq gvcl crry ylia nbqcq ouduen jklepay\nermsf emrsf uksuvz zrnlun\necksf dkydasw wddasky pmfhi yltmedt bdovedg vfnyoze ufcki civrjs ohozga\nhvf gfqgc adbeykt jdz zmgonhi yua kifxyoy umsza ivnbvoc whnpi gtbinze\nnmy fsdu myn iiw\nyrkwca jkxc yrkwca yrkwca kxqtvqh\nildxc taopx spykdz dzbpcxp wzgka cbyr xpvrzbk\nqqp axdmvo cmppp shx\nuldyu luyud uduly rgcmugh\nwoc vjdpyq cwshqq tlh fzyuz cbwgp egpy sfw\nadyv cnrn bhaxvx ofdbkn yxrtir cnrn\nycz ednsydc bqsdcpx adnq bydb tqy tqy vqzpy erdcnv\nmouv ouiy gld stdv gwr lxlfq gdl ldg\ngtx bbvr fxytm veofwp bvbr opefvw\npcf scu ovso rawtjxs kzxgnuy ifcn tvibap\nugcbob xkjgtx ugcbob ilkkx dikca wpxyq retqhlu ugcbob ylmt tigcmmm\ngmnde ool qeuwc ctux\nwpajwn gooy fedmjur pxiq xkyniyp xtgi eyfpc gjx\nuaivt kvfyn mpsya qxu kvnyf wvoeaz mbt fkyvn\njth awxbprn kpcodj qxegybo\nsfvitld mdzczg pdptzm fmz himb eutpyi mgrde gubsta tfsldvi dfistvl\npiabmr fckmhrv twnlnka jyb selqflm iwcutk pvvann\nuxjfm rmleg ochuj ruiq aobxbb tpuusot uhwjojw tutopus\ndzj qdyxzk oan rtpz ona qkdzyx nkunr\nurjydh dfreifg tmbetd aakc vdr dkdkldw xgvtfsa ivv doadb axgvstf\nfdjhr ujgbj ulkm dfzh tmhx zfdh ckt ortg\nobe ywwge rgqmt cfcnyt atn fdkdrwz lmb zwpe sqfoc yllxs akdlsso\nckhbu jfqhkml abenw ckp xvjy wsyhxox jzsz hqksq\ntjx zlh zgyrjpe bdorry uofh hgkzl ezixges kaxlkjw ztijupu hlgkz\nbelj ipbygk dxe cqoyukw jnncelh ihvom qstbowu rocqsz ifiztlf fjrf nsit\nvyswalv reaqae hzoqyun lbci ibqfljz cgjflqf kos\nnjrzfvu nxw nxw bdsgnxp\ngxlgn qrx nspbvl pzuob nggxl ipak wjr lggxn zas\nxkd sooef fsayaob tfsiyl\necldvh jugto ghfpbev xzlc\nrpyattn spb ajdplq eaorgi ackirxg knrap cobdeu qca pkp zkc\nbhh tczwffg bhh bhh hrjx jwyu gry kkgghnx\nzsav frsakbr bvzd gafr homzjw frsakbr yasgz homzjw kqa\nnbd mekhfif mekhfif keuoag nbd\nmzv vzm utuxhuf uufuhtx\nsiy tdbii qtu yrxar ruubale yrxar lsvnr yqxq ruubale\nwstykuz fxnuszr tgmkw eovvrd ohheh raf degh hzoeun tiou wpt cqnw\ndzbyhrv vzlbvn ncoa xfglcye ncoa sykfps ghi\nlvi ilv xalhd ztejzb\nzaeu diz zaeu gtdjsz fmoxgju diz uvh\nzef lmkqlcs jnhgqww qsm fuatcq ixfa\nwgp gvu rpmxrjh yokepvc yokepvc lywdl bbvvbf yokepvc\netjfs gjh tvmxb agovg yihn rmmh nue jfil\nzgcco slios jbfodb wpthe ydvit regizw regizw qosou slios cto jfz\nkmmq lnafaha ddos hrsjtxk zjch rfynx eovks\nezeuzu jfpv oinrstv vsw naoz enrcy svw jfvp kgmfwf cfisxzo\nljtv watps equf ljtv equf\naxijki zotolsi ryqujrm xmhug fhz lkgaw umzokxh ktr jsdsfat trk iosoztl\nvpqvvvn ydjz tcqc asffcxr rxb fyt vyham fys\nagxrcxl obcncq htod ved ozesk obcncq iwqmksk fsijtg iidyy lxu ozesk\norsyqt otqrys pnaax qtrsoy\noyisc chu ahdp abhbtry kjsqve tkpux tkpux sxzu sxzu\nwquw umlbwf mxzdbvb upp fopxe aub bau eritni punrpfc esnkyg\njjlzy hozskgo jjlzy aiq jjlzy sgfyhsd\nejghc ejghc ejghc igacslu\nunzmg fugzotb nxkdlds ewn hydj fbr iuly oiwwkbg scnozau sfi dsishk\nxuhjduu hfloaga xhuuduj mbavfkd nrnl ral erc mntev elpoqgq\nseydro onpi qjey skgkiox fbdgyt xhr rhvz dpsjcj tfzd spjdcj btqn\ndifyxz cdm jlzsz oycm txyssd wckqshu ihya yjyb\nnmrhlif wcreso chtqfov qcftvoh lqp egd erc myep plq cjdh\nhcnwgkq kkrpxxj gwe xqgea kkrpxxj nxz mumqbw kwxhlz kkrpxxj otqy\nrxbioyf cszah mhu mhu mhu\nqpbrf jzink ojy idt nrjykzu\nomnrq kkol dex eaqdmej dnpaum ynnntw ddwewsh ztcenhc zqdrq hmi\nngmqpu owmcuz gop gdbsfc nyott cdsflq ngmqpu\nsrus lrexy aqgkqvm tiyjm\nwxa qopky glaaekv ykopq lna gyxvpx xwa hly dbvo\nvqf sqrqw phxn xiw gejyzip ugg gghhugl zyqae\nylj cyolrx giim yrchuu yrchuu ylj\nrixa yfusuqn yfusuqn yfusuqn\nlpm gboakz ylyv gje yxu ahokxb ixwnpu hlcka cndhbbm nkmvts xdtqbc\nveul zjvz regtyp njwfpm\npdlyjbn edawa xbcmyew gme yuk yek nfknzgn ehjz\nrcgun ulv ntbwnvg ptf givapv bych gmxxxf iajqpb gwh ipavvg\nqvpwk grbb gptdgrh sij vunv hsb uegsmt uos vkxdd\niun aagzlj elqcq vkrk awl yyt dxfhkwq hbkeht\ncgf omofuz zddgwef iyosk hmou\nmvjorn zseyo wpfjlac kpxb dlh ggo zgxoso txzuy jfbmv lacjpwf vha\ntwrsrw pxv iklzg rtfcl kfbcjix uyvowpa kfbcjix ofnsf adqm\nqvi ivr plxfrg awugjh fxbv ztlljk qvi jdkfts xyq jdkfts uqwgdr\nphs eimuuf lmxq wmp\nlaf gmuowr rplgkh orentm whor lkrhgp mjwr zapz mdqtqyq ttkfkf\nfxk wdbl fjh ojqxp yvs fkx ysv ngksb\noclyxqu tpajqun vvmj twin zclk\nsrcwxs xiduxd tqpfc sbqybp sdtzw gizfn bpji kaolpuy\npfkmk olmsaz uffy uyff\ncrpazh pcrzha lew lkhcjij stfxq\nnkbb rnlo icnzg rnlo ejanu mofx ujblud\nabte xnjfo boz fnxzid nqfhifm jmnmsgh\nlvck nfll szdgrxc nghig szdgrxc oytahh cibk szdgrxc\nsduf jgv rrt spxw fdus\ngplutjv ufep fuzrnj tmko zzpj cpd mvtrzq\nycdiav qvr ycdiav tjngezs mphk oykgcei ycdiav\negbkscg ksgcbeg qmw jdbj\nkbgx otnfyc agouh iai lyhqd yzihyq ouagh snzhxa xyxrgz\nkdpqljx rin dlxms ukdzedc duezdkc ikgplm ffk vdmie qziajdf ftfwl\nprrzhj okffaot tlrxpjd aquc dbonaef enfdoab nwbtuh\nvyzf ijo cdhek bvlgxt kvldmp kvldmp vfvg\nzhijgyb yfkkal utb brew vfj ztiftq\nkodsuol ubnbdv iozwfum ayqxgnj qkp yiiv wbkgi psi wnfa epw\niok mecjsp lccn nrb kobca wkznctc afjjlrt\nyrw yhsva hgx nxjfbb\ndbdj vef xjssylt hjlld bqbmx ihfmz uhij zoh opzrmy mfq\nwqhcq usyfuc wqhcq pmf aryq nhvtkh\nnkviwge snpfdza nadzfsp evvdnrl qled ekqs qumle myhky\nrgljws kjuk txgeein ajmph pjhdy pmvr upae yfh\nvmepn wekgc qfwybl midbac vmepn ddqmbu vmepn uhfccp yuh zzz gnx\nhyqv fud xdc bssziiv mwo xfrsn xqehs mwo\ndjhr qxhfy vdjs ueoi mbmwa lkeumzd hyxfq krbyy ywvcstf wdkum xfqyh\nheprtex wgxpign lvm vlm ypswfxr ggxipwn hdszz blrv ppy\nfwalim sbqj zewxcaf qjsb cjgujwr uclxro wceu wmaifl rnd\ngmivd spncot jxeycn notspc nzb wie ceyjxn xlam\ncfujai hfvux hhtwe hfvux oputz oam\ngmwu xwthnkp xwthnkp mdxa xwthnkp\nshfqzi hdq uyyqjrd wczfvy wciko hdq nuywebl\ndtkq qnb uzmo ypxfja cekqe cekqe tnaibc uzmo pmtnb\napdz exdze pop pvm pce hywvftx jrjezgd jkajq jcdjli\nsatq czv cfhyca cshnyh cshnyh rcu cshnyh\nmxp ujq fmrnzxx xqv mxp\nnel whnnxak lwzlre mrxq kpo pko bsa gimtzwb\nokssco iuke vcnv okssco liawwc vcnv aztl\nkjvq rye eawplkw qzxt jkqv bxbfyv\nbphssax ylemih wsm jnpxce jgh repsyj ieypbz asx\ndwivit ptcwt qwectqk ttwcp bklpa ivditw\nies knj zemmcto mczotme yanr kjdrwr mcry ndols\ndqzdpg adb ulsv ulsv qux ppmoru sjcn dpihqz\nakazkk kssdguo cgigktm indfh wwh kevuhv dclpjv kgtd ehjxous\nspogxy jyzhag qumd brk cbu akbpjxb spie\njgyn cxbar axtkwh hktgcm cfsla xll rpauwl cgpziuh dyc brcxa\ndodey dysnjxe kzmyytw tzddd cnupwmv\nnqab whxkb kvc kvc jcjhywy mbbpfwj fxozlt whxkb qwz\nihmif xhjc lmfk yjrsioo uvtd qvtqsgt dqd\nuvzedxd afli hkrigd lkzkzu ncki toam hoaefui\nzmvywjv jsjf nrbrgt mbs yog eexuo\nukzab euwb qnkanyt lgeqf qefgl ewub\nzbol bolz ilncu ciunl\nhjryu qyl ajwju rplplr skbdsl xvto\nojfotbx zvta jofxtbo ejjnhi jyeiz yzeij\nivr pvrwef ivr zgnm jscgaoq hfjuzju cea hfjuzju ehszaz\nyikp gul ugbniac jehm fwqxb hqbhi hlfr iyuuf vacrao fwqxb\nplsjh efu napxwe jfxfjz efacqcp sythfxc sythfxc napxwe qncqc\nmeuf rcjzf mhluz kbrk tzjrcn omoiprl khs oyzad yuzbz\nexvzzuc ckqfivf uoyidkg mwztyf wxtg uzrls gudioyk wfihpzn tdmwhf\nqoovwqm bldswvy xkb yqrcluk qyrclku cluqyrk qgakbv urclhse\nrmmymgg ytpqtuq ibt tmedibz tmbsdg ytpqtuq cxbnng\nqkyeo frjjht vkpt ikztq avzqon diw noqzva dvkhwdt\nopz usos kdqseyb cdxvve nahjc hbr rhsfm hcjna wnczls kky\nsgeml uyaoe ked utxab hxqa glems wbdo kzrjsq\nisp bmebt becira ixoz yeakj fmueu\njrd qyys cik bmaief zxllza rsu swvodiv ivvdsow ikpvwaj jdr qte\ngzjjre tkjhdn lrqmvw gues ositymc xhfiutm\nkcnble oxoh zggvo zjz auub kunoj snil zggvo lgql\nyyfmd wbwmizs vmb clba bpzzjz nlt wgukoe hedlp osxz\nskic mgcr chkj eiiy kdhch gcanziz dpecug fccp\njhnejy akpwbj mhrunvm wjzwyhe lwxostl gfe niuhj iuf bewur\nnuursk gehzvck szm fllr bfaq ijpjp gehzvck bfaq\necx etrsadp lyekp lxf flx tadreps\ngbo wzkner hky ggoqu\nyiitvf tyvifi xpnbk iiytfv\nokpjxyq mmxcha pujgv ltgfdk wpporh bfle tuupth ukyyjgv vlnwhz\nphbs qtpolnh udito ukx kjqsi jbwf sgkkwgm udito mwwb wihg\nmces dhc qccy sxyilmb qmki dyqnr qsh aigaemz oofdw hbifiz\nyyben jjklnz whwswg tox vgytp noijcv jjsa ybney eyrvg htjl vxli\ndetb tus rloz zymvmg zpe\nusvkehi kxgvo rna scnaljd jmowud ipfkkf rxvpie nxysvj pvquagf fjhsvef\nytosun puwdoix oyc qdufuw ysunot\nhtw biy htw oxot oxot\nxgzi nbq lxxtmt nbq lxxtmt fnzmmno\nlko bdbj kcqvc torg enbfbj sbooco afjbclm dendwq\ncgih ikmfn lyhzhxd ubq ixrori tofbo\nglfhfzs gihsccj yic mlci slne\nwdiu lhl hdlhzo voo yhqckcy axnz yqyi fyss qhvtsbc\naotbk zfokegh uax myhehay terwus hmzic fdwojh wjuwlp\nucbiex eigq qqe ifqw sxakwl xkwsal qeq\npknvybh qkrwi povvd phairw qst inklob yrryv bcuv dolvr okwe iexrpbw\nkkah qrt dihygsm nly rblqvrm sxguxj yspmre\ngzhhkjt uimif bssle vdiaa wkohq nrgboi htkojiw\naeb xihgva vwcjbjh lri nlwbxun sargiey uyekrc\nfnnwfbj yyccaxu fhqb nlmwhc ymbqky ooljix mfijg ryykirn womn rygezi qsdwgpw\nitfs udfr sitf gml\ngknztly vay ypy jpid pyy mbpfmwz pfmzbwm qqec\nbbhmw uus xffgd xcjzrlk kyecv zcerxe\nncpc otqzotf godtu yhcpsyw ncpc fbs\nggoiqm ofk pryqt kqdbo ktek kklhlju iqgmgo gqoimg flscx\ngsgmvy tktzj kgi ikyz pthtk hxt gik\nbunvugy fefqpkk juwk aent\natm tma dzyret jmuqke xbayiit jumqke\ndilfw qws ldwfi lnujld ywrogk kjh adaj khmlb hkbml\nveaemc xugf udpphf mydi jbvebgp ngyhly pufdph vbgepbj\nvyd tisntn qmc yzal\nuxdlc piw mwjnk qiar xwpspf sxktemh jmw\nqhhvar pox aed bgwq doe uyktv pox vriy ndel pzx aed\ntswei dtfb yhj krxu yqio wtzpm wtzpm yqio\nbjzp zzp qdzdfv tzkbl nggbfqs vquqds xiud xgrkb\nffvjfwp jbzslqo ffvjfwp pchzrqv ffvjfwp pkd nlav\nczepixn yurmsw ucckih qqlnxjj exipznc\nxeu llc jnmp dmz pnmj stqzao\nfzvu uscqp xerkzkg roivhri fzvu yiwae xguz ajpg\nqdzk uyyoi cspmnc qdzk nwknfx fnngvla cbl\nacg utwrv cahupdm xgat elb aemkf wmkdzj kfmae ahlrwu yxfcj\nvdumh rcd rgc hpqk qeum fpgva qkhmuji rjxpuzk ommk\nztvm ntxkav ajv avj ippodg sukg bivcslu tes gdlrbnt bdlkaye xpgslef\naygsym pwq owxmx xjw\ndkhykf pfqeyo lfq saoewy qldrky sdgrrcr frdqn tkfezop doo saoewy\ncwof mqlscm iqxhb nnkex nxx glgpbn\nnoq zikmeyx yodahj ssu qqmifa plcbv rsahsd\nnvc fuwiyq myv hjn rtuoq zoyp rqnt xchlrg\ndziscfa nbzsuvp rbnrban cjdprp dkj zcry ckxtm\nstpm ifcbmmw dpkpzo sot ydpeydw nusp nkciqa psnr\nudikjfr foqnxl whq ojuspzz ddyz emdktzb gfio mnd hyb\nvchdphx zkrtky ucyifqx ryzl txdixd cip aid cip\nwcz ywzwpp viswpsm qfus uzopaq mhps sidjky kipvjg\nwehhc rzujn urprwzw gkwzhk rhrpph xkzzl rzujn yddlb\nwlhif foh rpvylg gruiqdv daih yflhbr coe yflhbr hvluddj\nhfzi ffjntj fdth crkrzdr nyel nlxm cawze bfjz neixnw uygqvmw zayf\nguthfwn kcinec glhaiqv rfgbi cbrm\nmvqv lszqu eyjn suq lavyjbh ujivbza aianl wik noy zth\nzkn ren ncoyj fppsy dwgtgqz til\nybxepr hrzcrxs zhrscxr uvpxxl eprxby vzgg\nxhi zess zet mtpcu ibz nkwq cbzb etz kjjcns\nkvmu rxgw xboplw enlqcxi uxysl xboplw kvmu oqxislh xeg qwhdc spsddge\ndxaao ltjjn cpsvnxe core aojgu pbss nudwi\nllro yoy tixzyc beim qirnb lffcr gzm\nquxetbf gfpll gqyav dckhp xbfetqu xaebz xuqfteb\nfblkc hsydxqt bvmwujr rak\nepeohq olrwyft cmrvov fbdyxbg\nuzqk pkhizw jbrnlvx aqkq mtmjmy gpcln gaqt rinrz gwis gpcln\nttkcu ttkcu mcq xao lhnxdph djj ylet atdln xao\npmwn svqktkm isopar krrfbna knrw kbm zsohxrk xlsmm knrw cmoikq etqeggc\nundrw issrttk mcoe pvufl bwjwqkx jdz undrw vje\nkfzqbb djpcjv ixctsvb rqsntv fcqz\nagezraf ezrfaga pftdwrk slsxu axw\nezvkn smwko utdlu nizby\nygl dwtrpsh qzz cuntrr hdrn lujcx iwc bll qvjhg\njrdrvj ledrjp noqx igodve odgiev\nzonvzgy ujnzj ujnzj zonvzgy ckzd\nrmg lmib fdn nfd gfobw wrc iro nsz\nacgxvh sdn zcef sdn jvgnmhi xitkqgy tbascbh\nykuzk ovp mikolx xxgpylt secuf yrtilra wnoypy mty lmnagx\nwwmlins mxwye kjntv sadc wnvyoov rzdawl\nali ncsrq tcbjzpu oiw iimxlbp mwi hdvdl dqnicf lxit\nsql vywv vycj nprzb tdqe qwvljm myhpvxy hdixbk ywqpn xvue vrno\netncz etncz czqw moz uaxbtm axlslow fhephy moz\nwsriuaj umjkx mhxau luzf wmo kyx jidl ufuoz cbk\nmsfrvbt bxnd msfrvbt yut qwbx\nrhag vfkqf rekoz buw qffvk wxs ghra\nmeignx dhdu xacg hmiqkd nrijc gcxa gwap lov ybtyr vol\nqoqns swib mlegyjn ojdtt tvdrrhg oetg xdret nzpq\nntc zowllt dwiyht ztdeifx velaumx jfxxsqt uefmb gwn\nbgykxl bykan tvvgcpa wdcsj coonage hpocfz sqmihw pnagv uozsh\nwass vve ngyd yyvxmsq rsaypsa newxyc adqmbm xqsvymy ygdn idysq\nybo vpjcf tsbpc hcdszr qrxwjqr bzz tgjhkpu hgtxkt stpbc woro\nogszrg rszt owufa cohmv msygfw fud fzi lhts sfiy dfu gxsuj\nfclumcq ejuj jkbu hbsv ythmpoo xdzg dkvrdue\nrbf sunzzl sokgih rngqli xndnuj rbf smiea mqzpzb fwpcx smiea\nuuuxchs uuuxchs fzna qlj tcjnv oghk fzna\nzuiyk tbn nqma wptoecs xndgbqm mqan wmcahvm qpir\nztexf pqsc icxqsuf tkgr itnn yorg oyvqaj yoxggqk lep\nehm hysd jfv iugyt jyvh\nfenjp zjtvvhb xfe dgxoah ljn ixvdyi fenjp odnlr\nuosxyy euicgp lrsc euicgp mcszotm kvxrpk jfo oxu xyeiv fhdwl wbw\ntsmdp gshgm kpb tlx kfznsu gglefv pkb gcnydo eavgrc rgd lgefvg\nxuq svh cmzt bxxlvfm rtblxpu imuexhl lbre hqyedxa hwkgaak\nhhlfj mlrdv dlsn zgcy hciiuzw uwciihz iizhcwu gwx\nukqoj kjqou hlk nfyz lusf kebvmrw ccaj ewmicq useba\njlnnl jsmox vnw ucr ggithr usqe allzc pfumkkm jlnnl\nmswpbk lffjwq icc kef zlba uolrrl fqlfwj tbc\nbfmra hdgczrw dgmnod afbmr fnczx\ndcqrso cgbymsg jbx ofpbp rmtygip syly\nyrmn wzkt lqys tzkw sqyl fxoc\nwal zgjy cwnqyaf bhz dbpft owx\nxnrautk dlsyot nzbohog xmzsbh soec wyy\nkde jpkvbs eyzw ukgiv ggrtzcd vikgu mxqy jyh crdtgzg ebzet\npsg jsykdw drpqzl qzqbge ldqpzr wsdykj lmhbldv hbognjp nqej fmxoq guuf\nueo ncedaju ijasprn rvxb mxkddl qvgdlbx bpj bpf pxewuf chvo lvrq\nzlmg eciyqi xfbeoq pupyrc bfqexo ituqab pycrpu\njsk clo vqxzl aja jfbce ldov\nmuss tzg iksvdej zpw fxwhrv eeye fxwhrv\nkjjd dzf zkppx qdwlx irudds kjgd pdrz rgogy qdwlx egx rjxldp\nszjpf aouvl ehxq exqh\nnzweop qlkje welkfs jqmvqi coc\nivmjzk usk auvmc vvcnwn qubihx vkms fbt udn uyto jjt kxqy\nrayw ijaklcr ywra qkj qytxeh pmnfh qffvsft tyxheq\npea cqy tkg qidvx qidvx pea skgrndq\niijm xgwq zzpskl qtjezqt yqjwy dhbq\ndfuv iqw iejb bjei iwq\nogrmldp xdc dcx cqhbwlp\nwzwb xrjl keciql ckky litdr bmurdk anjs nyggesn ygwt svmee\nbvkkzj rcr lozrw mgpwkm lwm yecsr ykl tzny aeus jmq mchopp\nrsnvaa oikce angqn rnvsaa mhc\nhsiov kxqpxtc rzh vjrqlx xxtkpqc wiunol qckxtpx\naosek lhi ruqgd rmr\nagqvlao pvhcgz esw kwnpefs qsrvxz hgkgrs mpx odaiqi\ndvqkrzf dawioo jtaco oeutol ravp apvr frjunad\nwss nahhsh pfwgcfr rvvvq uqxxmhq qax vtrkfou medfj\nimdyfc sez gve kgtryl kmqklg\ncrmg yhkpa bsfouax kyttpa who mcrbzaj kcsktxe yfv\nzpw zlab pzw pwz okb\nfgqlb byhkhfn qglfb ladle ifa\nskr zwwjnr iub wekt biu jnrwwz\nmpvt mpvt havn ztf\nodqhd uxrswp ppj eztyj nxzwm fvxyadn tostwy odo abyp meqdm ktqkvh\nfgufup uabd vhxem imto imto vhxem\nvrpxxhi kii zwatqg nokg wesxju xplc sumte muwjj\nnsse iquhoc giuv pxaa qpqn zrfk kywjr spz kgzc lfa\ncjjgarr psvwoap ivijyt nfbxu ktiuy jajrgrc goyc\nyrfzf wyxda gsslsy oeyve jczghf cbuwf iwnu izyrtho dyoup toizyhr vzzrr\nbwqgxsr ufy cnouypd qwxbgsr efdkfe rwsblis bhvyws oodh\npiqpez yhqahjp oxu qtomld\nvjvpnwy kajjaim lcxmbyd fkdy ywvvnjp xcn nbwlklo\nqghq mihdp vuv ocrzsw mlmkn rgnbfcm qgufcks btlulb effsrih\npsazbfo vbpr efcspj yrjl pqjrfe relxjc nzzvb yviuhc\ntbbhdbm uxhawtk bmdhtbb rqxrr pspjzx krtmf pnaz srcej rsjec\nowikzec glvbqy jhknyuz jkaxu ldhnlpx wdp\nqvuv wteohr daynue nehs gzqu porzrsk cqokye zzsbqox rqh ogxtn pskorrz\ngnm grlfoon lxid isxa\njes iixswl umgbg qfixa xnecpns asm nopsmo axaopsm qahwpqd\norr auvlruu mqq uurlvua urauuvl fjrcuo mqht tkdgps tdvnhvq iezdv\ntxwyzy zzwk bzi etfg gtef\nqyydr lllgosq qyydr lllgosq\nxqm uyl ldpowm pxhi ievvvez hmhzwmr ldpowm jaw\nqlvfq efgivhr rfhhu gvw bxgsrp sgbnjh ekgbp cyof rvghph nxfekia xym\nlgladv ogj cir jxx msz fshf ayheu wpmke zckng vgrlv lxgmge\nfcmp aabxdp hpxbb bblpy mpcf eju pnkv jxwoy hmv fgynps pbdxaa\njcrh dgg lzyiv ojop vhk vdb uinoetv\nutlzcf ziizdo njffmxe uhyjxdb cztluf yjdhbxu\nubl cgz tyg nljl\nslwe qaos ybcwdoh ogazkj tqh opggnzt ffrscl opggnzt izeh\nevitfwb jpivmn dpnxzuf gdkx zprogl xehb\ndktt kpnkizb rreq gjmosa iekdtpj rcxk eweawk qrre olv\ncmcw vmw mujx mujx ypqfz\nnzxcl fzwa ftcrc immendi tmxzzi hslye eibc tmxzzi\nabfc jdqvk lichxx uiomtz tlq\nmnkthoj nohjktm eued izmcjj\nullh wju bxfsif icnrmmj qnufw zubcnmo yewz phovhv\nndfvd gcyt wnm badaww twm jahlat ndfdv mtw xrq bechxx dnp\nceg gcxgu gnudeib utsynwx dpg wpsnp ahbbvkt wpsnp iou\nwutcg congyz erkj ibtcics\nxsbq lyycse qbsx ppgutls lroo tyor\nhfiwoy hclhl gcwgqox ogo hlqr ultkaz yke iwohyf oog\nbcl nemims udwkmlm nokck tkwny ulkihcu knwty pngamqg yxtphkn kuihlcu\nnwsr enrutc eqcfb uxmdgju rfnzhsn tzk vysc\nwbtki vjmkk kvjkm ibwkt sckvbv\nxjxnow tli woxldj rotrtz nfkhcz ibh mla ybxldg\ncwtpkhr oxywg qpwrgfm dfjpfuc kpcopa\nbyczby tbfkonk ytlczzf bbyczy\nkhuvrne rnamlgt akjtu qlx odr git xmiazr icwsxsq\njfm bneh tkdzuad bsr oruvmqq uauw zjlp gwov hot jkjbex\njjo uvk vlpy lpxd irntb uvk ehhsqv fxhvt jjo fpa\nqrwu mgnw hvflf ytspp mco ikvbqg fflvh wts cbbf'

console.log(partOne(input));
console.log(partTwo(input));