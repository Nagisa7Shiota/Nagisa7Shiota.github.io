const VideoList = ["3RLhCbVtjEg", "JeOJi3tNIDs", "2SvpviExw1o"];
var index = 0;
var srcmain;
var srcright;
var srcleft;
var helper;

function SlideToRight() {
    index = (VideoList.indexOf(srcmain) + 1) % VideoList.length;
    CurrentSlide();
}

function SlideToLeft() {
    index = VideoList.indexOf(srcmain) - 1;
    if (index < 0) {
        index = VideoList.length - 1;
    }
    CurrentSlide();
}

function CurrentSlide() {
    srcmain = VideoList[index];
    srcright = VideoList[(index + 1) % VideoList.length];
    if (index - 1 < 0) {
        srcleft = VideoList[VideoList.length - 1];
    }
    else {
        srcleft = VideoList[index - 1];
    }

    document.getElementById("VSM0").src = "https://youtube.com/embed/" + srcmain;
    document.getElementById("VSM1").src = "http://img.youtube.com/vi/" + srcright + "/hqdefault.jpg";
    document.getElementById("VSM2").src = "http://img.youtube.com/vi/" + srcleft + "/hqdefault.jpg";
}