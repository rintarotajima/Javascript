let youtuber = {
    list: {
        business: {
            youtuber: [
                { name: "しまぶー", age:20, teachProgramming() {} },
                { name: "あっちゃん", age:37, teachHistory() {} }
            ],
            teach() {}
        },
        entertainment: {
            youtuber: [
                { name: "ヒカキン" },
                { name: "はじめしゃちょー"}
            ],
            makeSmile() {}
        }
    },
    plan() {},
    uploadVideo() {}
};
youtuber.list.business.youtuber[0].teachProgramming();

youtuber.plan();

youtuber.list.entertainment.makeSmile();