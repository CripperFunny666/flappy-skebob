gdjs.gameoverCode = {};
gdjs.gameoverCode.localVariables = [];
gdjs.gameoverCode.GDNewTextObjects1= [];
gdjs.gameoverCode.GDNewTextObjects2= [];
gdjs.gameoverCode.GDRedButtonWithShadowObjects1= [];
gdjs.gameoverCode.GDRedButtonWithShadowObjects2= [];
gdjs.gameoverCode.GDschetObjects1= [];
gdjs.gameoverCode.GDschetObjects2= [];
gdjs.gameoverCode.GDNewTiledSpriteObjects1= [];
gdjs.gameoverCode.GDNewTiledSpriteObjects2= [];
gdjs.gameoverCode.GDmenuObjects1= [];
gdjs.gameoverCode.GDmenuObjects2= [];


gdjs.gameoverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("schet"), gdjs.gameoverCode.GDschetObjects1);
{for(var i = 0, len = gdjs.gameoverCode.GDschetObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDschetObjects1[i].getBehavior("Text").setText("счёт: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithShadow"), gdjs.gameoverCode.GDRedButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameoverCode.GDRedButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.gameoverCode.GDRedButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameoverCode.GDRedButtonWithShadowObjects1[k] = gdjs.gameoverCode.GDRedButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.gameoverCode.GDRedButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Безымянная сцена", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.gameoverCode.GDmenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameoverCode.GDmenuObjects1.length;i<l;++i) {
    if ( gdjs.gameoverCode.GDmenuObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameoverCode.GDmenuObjects1[k] = gdjs.gameoverCode.GDmenuObjects1[i];
        ++k;
    }
}
gdjs.gameoverCode.GDmenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


};

gdjs.gameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameoverCode.GDNewTextObjects1.length = 0;
gdjs.gameoverCode.GDNewTextObjects2.length = 0;
gdjs.gameoverCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.gameoverCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.gameoverCode.GDschetObjects1.length = 0;
gdjs.gameoverCode.GDschetObjects2.length = 0;
gdjs.gameoverCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.gameoverCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.gameoverCode.GDmenuObjects1.length = 0;
gdjs.gameoverCode.GDmenuObjects2.length = 0;

gdjs.gameoverCode.eventsList0(runtimeScene);
gdjs.gameoverCode.GDNewTextObjects1.length = 0;
gdjs.gameoverCode.GDNewTextObjects2.length = 0;
gdjs.gameoverCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.gameoverCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.gameoverCode.GDschetObjects1.length = 0;
gdjs.gameoverCode.GDschetObjects2.length = 0;
gdjs.gameoverCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.gameoverCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.gameoverCode.GDmenuObjects1.length = 0;
gdjs.gameoverCode.GDmenuObjects2.length = 0;


return;

}

gdjs['gameoverCode'] = gdjs.gameoverCode;
