var cardData = {title:"八卦者", picName:"fu.jpg", description:"超级八卦"};
var allCards = [];
allCards.push(["不优秀者", "qiudi.jpg", "没有任何能力，纯粹的不优秀者，内心脆弱敏感。"]);
allCards.push(["不优秀者", "shihe.jpg", "没有任何能力，纯粹的不优秀者，内心脆弱敏感。据分析因生辰命犯孤星导致不容易优秀。"]);
allCards.push(["不优秀者", "zhikai.jpg", "没有任何能力的环境学家，纯粹的不优秀者，内心脆弱敏感。"]);
allCards.push(["不优秀者", "caidan.jpg", "没有任何能力，纯粹的不优秀者，内心残暴，擅长杀青蛙，小白鼠。"]);
allCards.push(["夫优秀者", "fu.jpg", "白天假装不优秀，每天晚上出来秀秀恩爱，并嘲讽一名不优秀者致死。"]);
allCards.push(["夫优秀者", "fu2.jpg", "白天假装不优秀，每天晚上出来秀秀恩爱，并嘲讽一名不优秀者致死。"]);
allCards.push(["夫优秀者", "fu3.jpg", "白天假装不优秀，每天晚上出来秀秀恩爱，并嘲讽一名不优秀者致死。"]);
allCards.push(["夫优秀者", "fu4.jpg", "白天假装不优秀，每天晚上出来秀秀恩爱，并嘲讽一名不优秀者致死。"]);
allCards.push(["暖男", "tengjiao.jpg", "每天晚上可以保护一名不优秀者免于被嘲讽。但是暖男/女从来不会两天保护同一个人。暖男自恋时，可以保护自己。"]);
allCards.push(["纯实力派/学霸", "zetao.jpg", "内心强大的生物，当被嘲讽或者被误认为夫优秀者投死时，可亮出学霸身份，使任意一名玩家羞愧难当致死。"]);
allCards.push(["已婚长者", "costa2.jpg", "极度优秀的已婚长者，人生经验丰富，可免于一次嘲讽。"]);
allCards.push(["八卦者", "wangxi.jpg", "各种八卦，每晚可以确定一人身份，是否优秀。"]);
allCards.push(["八卦者", "kexi2.jpg", "擅长各种爬虫技术，尝不小心爬遍某人关系网。每晚可以确定一人身份，是否优秀。"]);
// allCards.push(["纯偶像派/一脸", "xiaowu.jpg", "颜值奇高的生物，晚上可以刷脸，或嘲讽一名夫优秀者羞愧致死；或抚慰一颗被嘲讽过的心。"]);
allCards.push(["纯偶像派/一脸", "xiaolai.jpg", "颜值奇高的生物，晚上可以刷脸，或嘲讽一名夫优秀者羞愧致死；或抚慰一颗被嘲讽过的心。"]);
allCards.push(["Wand", "wand.jpg", "在第一天可以指定任意玩家成为伙伴。"]);
allCards.push(["三姐", "pavitra.jpg", "在被表决致死时，可以亮身份免死，但不能继续投票。亮身份后可以任意插话，但说话时必须摇头。"]);
allCards.push(["三哥", "sid.jpg", "在被表决致死时，可以亮身份免死，但不能继续投票。亮身份后可以任意插话，但说话时必须摇头。"]);
allCards.push(["女优秀者", "jue.jpg", "像夫优秀者一样，每晚嘲讽一个不优秀者；但每两晚可以选择嘲讽一个夫优秀者。自己一伙，很少在CS专业出现。"]);
allCards.push(["学神", "gege.jpg", "每晚可以带领两个人进入豪斯多夫log4/3维度的希尔伯特空间，在这个空间内的人可以查看对方是否优秀。当在场所有生还者都进入希尔伯特空间时，学神会在此空间藐视众生。"]);
allCards.push(["异国恋", "andy.jpg", "介于夫优秀者与不优秀者之间的群体，心理异常焦躁。当场面上出现平票时，被大家迁怒，卒。"]);
allCards.push(["异国恋", "fengge2.jpg", "介于夫优秀者与不优秀者之间的群体，心理异常焦躁。当场面上出现平票时，被大家迁怒，卒。"]);


for (cardIndex = 0; cardIndex < allCards.length; cardIndex++) {
    modPage = (cardIndex + 1) % 9;
    // the 1st card of a page
    if (modPage == 1) {
    	document.write("<div class='page'>");
    }
    cardData.title = allCards[cardIndex][0];
    cardData.picName = allCards[cardIndex][1];
    cardData.description = allCards[cardIndex][2];
    var mod = cardIndex % 3;
    if (mod == 1) {
    	generateCard(cardData, true);
    } else {
    	generateCard(cardData);
    }
    // the 9th card of a page
    if (modPage == 0 || cardIndex == allCards.length - 1) {
	document.write("</div>");
    }
}

function generateCard(cardData, center) {
    if(typeof center !== 'undefined') {
	document.write("<div class='card cardCenter'>");
    } else {
        document.write("<div class='card'>");
    }
    document.write("<div class='name'>");
    document.write("<h1>" + cardData.title + "</h1>");
    document.write("</div>");
    document.write("<div class='picture'>");
    document.write("<img src='img/"+ cardData.picName +"' alt='"+ cardData.title +"' >");
    document.write("</div>");
    document.write("<div class='description'>");
    document.write("<p>"+ cardData.description +"</p>");
    document.write("</div>");
    document.write("</div>");
}

