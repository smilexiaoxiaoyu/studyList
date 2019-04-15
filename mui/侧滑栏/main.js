$(document).ready(function(){
    mui.init();
     //侧滑容器父节点
    var offCanvasWrapper = mui('#offCanvasWrapper');
     //主界面容器
    var offCanvasInner = offCanvasWrapper[0].querySelector('.mui-inner-wrap');
     //菜单容器
    var offCanvasSide = document.getElementById("offCanvasSide");
     //移动效果是否为整体移动
    var moveTogether = false;
     //侧滑容器的class列表，增加.mui-slide-in即可实现菜单移动、主界面不动的效果；
    var classList = offCanvasWrapper[0].classList;
     //变换侧滑动画移动效果；
    // classList.add('mui-slide-in');
    document.getElementById('offCanvasShow').addEventListener('tap', function() {
        offCanvasWrapper.offCanvas('show');
    });
     //菜单界面，‘关闭侧滑菜单’按钮的点击事件
    document.getElementById('offCanvasHide').addEventListener('tap', function() {
        offCanvasWrapper.offCanvas('close');
    });
    //主界面和侧滑菜单界面均支持区域滚动；
    mui('#offCanvasSideScroll').scroll();
    mui('#offCanvasContentScroll').scroll();
    //禁止滑动主界面的时候出现侧滑菜单
    document.getElementsByClassName('mui-inner-wrap')[0].addEventListener('drag', function(event) {
    　　event.stopPropagation();
    });
     //实现ios平台原生侧滑关闭页面；
    /*if (mui.os.plus && mui.os.ios) {
        mui.plusReady(function() { //5+ iOS暂时无法屏蔽popGesture时传递touch事件，故该demo直接屏蔽popGesture功能
            plus.webview.currentWebview().setStyle({
                'popGesture': 'none'
            });
        });
    }*/
});