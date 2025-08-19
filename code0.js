gdjs.startCode = {};
gdjs.startCode.localVariables = [];
gdjs.startCode.GDNewTiledSpriteObjects1= [];
gdjs.startCode.GDNewTiledSpriteObjects2= [];
gdjs.startCode.GDNewTiledSpriteObjects3= [];
gdjs.startCode.GDNewSpriteObjects1= [];
gdjs.startCode.GDNewSpriteObjects2= [];
gdjs.startCode.GDNewSpriteObjects3= [];
gdjs.startCode.GDRedButtonWithShadowObjects1= [];
gdjs.startCode.GDRedButtonWithShadowObjects2= [];
gdjs.startCode.GDRedButtonWithShadowObjects3= [];
gdjs.startCode.GDoptionsObjects1= [];
gdjs.startCode.GDoptionsObjects2= [];
gdjs.startCode.GDoptionsObjects3= [];
gdjs.startCode.GDNewSprite2Objects1= [];
gdjs.startCode.GDNewSprite2Objects2= [];
gdjs.startCode.GDNewSprite2Objects3= [];


gdjs.startCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "skebob_FUNK.ogg", 1, true, runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber(), 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "main_theme.ogg", 1, true, runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber(), 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "flip_flop.ogg", 1, true, runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber(), 1);
}}

}


};gdjs.startCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.startCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithShadow"), gdjs.startCode.GDRedButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDRedButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDRedButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDRedButtonWithShadowObjects1[k] = gdjs.startCode.GDRedButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDRedButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Безымянная сцена", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.startCode.GDoptionsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDoptionsObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDoptionsObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDoptionsObjects1[k] = gdjs.startCode.GDoptionsObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDoptionsObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Options", false);
}}

}


};

gdjs.startCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.startCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.startCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDNewSpriteObjects3.length = 0;
gdjs.startCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.startCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.startCode.GDRedButtonWithShadowObjects3.length = 0;
gdjs.startCode.GDoptionsObjects1.length = 0;
gdjs.startCode.GDoptionsObjects2.length = 0;
gdjs.startCode.GDoptionsObjects3.length = 0;
gdjs.startCode.GDNewSprite2Objects1.length = 0;
gdjs.startCode.GDNewSprite2Objects2.length = 0;
gdjs.startCode.GDNewSprite2Objects3.length = 0;

gdjs.startCode.eventsList1(runtimeScene);
gdjs.startCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.startCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.startCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDNewSpriteObjects3.length = 0;
gdjs.startCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.startCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.startCode.GDRedButtonWithShadowObjects3.length = 0;
gdjs.startCode.GDoptionsObjects1.length = 0;
gdjs.startCode.GDoptionsObjects2.length = 0;
gdjs.startCode.GDoptionsObjects3.length = 0;
gdjs.startCode.GDNewSprite2Objects1.length = 0;
gdjs.startCode.GDNewSprite2Objects2.length = 0;
gdjs.startCode.GDNewSprite2Objects3.length = 0;


return;

}

gdjs['startCode'] = gdjs.startCode;
