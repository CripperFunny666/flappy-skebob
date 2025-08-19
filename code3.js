gdjs.OptionsCode = {};
gdjs.OptionsCode.localVariables = [];
gdjs.OptionsCode.GDNewTiledSpriteObjects1= [];
gdjs.OptionsCode.GDNewTiledSpriteObjects2= [];
gdjs.OptionsCode.GDmusic2Objects1= [];
gdjs.OptionsCode.GDmusic2Objects2= [];
gdjs.OptionsCode.GDNewTextObjects1= [];
gdjs.OptionsCode.GDNewTextObjects2= [];
gdjs.OptionsCode.GDNewText2Objects1= [];
gdjs.OptionsCode.GDNewText2Objects2= [];
gdjs.OptionsCode.GDsfxObjects1= [];
gdjs.OptionsCode.GDsfxObjects2= [];
gdjs.OptionsCode.GDRedButtonWithShadowObjects1= [];
gdjs.OptionsCode.GDRedButtonWithShadowObjects2= [];
gdjs.OptionsCode.GDskebob_9595themeObjects1= [];
gdjs.OptionsCode.GDskebob_9595themeObjects2= [];
gdjs.OptionsCode.GDskebob_9595funkObjects1= [];
gdjs.OptionsCode.GDskebob_9595funkObjects2= [];
gdjs.OptionsCode.GDflip_9595flapObjects1= [];
gdjs.OptionsCode.GDflip_9595flapObjects2= [];
gdjs.OptionsCode.GDNewText3Objects1= [];
gdjs.OptionsCode.GDNewText3Objects2= [];
gdjs.OptionsCode.GDNewText4Objects1= [];
gdjs.OptionsCode.GDNewText4Objects2= [];


gdjs.OptionsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithShadow"), gdjs.OptionsCode.GDRedButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OptionsCode.GDRedButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDRedButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.OptionsCode.GDRedButtonWithShadowObjects1[k] = gdjs.OptionsCode.GDRedButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDRedButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("skebob_theme"), gdjs.OptionsCode.GDskebob_9595themeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OptionsCode.GDskebob_9595themeObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDskebob_9595themeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.OptionsCode.GDskebob_9595themeObjects1[k] = gdjs.OptionsCode.GDskebob_9595themeObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDskebob_9595themeObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.OptionsCode.GDNewText4Objects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "main_theme.ogg", 1, true, runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber(), 1);
}{for(var i = 0, len = gdjs.OptionsCode.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDNewText4Objects1[i].getBehavior("Text").setText("сейчас играет: skebob theme");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("skebob_funk"), gdjs.OptionsCode.GDskebob_9595funkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OptionsCode.GDskebob_9595funkObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDskebob_9595funkObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.OptionsCode.GDskebob_9595funkObjects1[k] = gdjs.OptionsCode.GDskebob_9595funkObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDskebob_9595funkObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.OptionsCode.GDNewText4Objects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "skebob_FUNK.ogg", 1, true, runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber(), 1);
}{for(var i = 0, len = gdjs.OptionsCode.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDNewText4Objects1[i].getBehavior("Text").setText("сейчас играет: skebob funk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("flip_flap"), gdjs.OptionsCode.GDflip_9595flapObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OptionsCode.GDflip_9595flapObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDflip_9595flapObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.OptionsCode.GDflip_9595flapObjects1[k] = gdjs.OptionsCode.GDflip_9595flapObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDflip_9595flapObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.OptionsCode.GDNewText4Objects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "flip_flop.ogg", 1, true, runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber(), 1);
}{for(var i = 0, len = gdjs.OptionsCode.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDNewText4Objects1[i].getBehavior("Text").setText("сейчас играет: flip flop");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("music2"), gdjs.OptionsCode.GDmusic2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OptionsCode.GDmusic2Objects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDmusic2Objects1[i].IsActivated((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.OptionsCode.GDmusic2Objects1[k] = gdjs.OptionsCode.GDmusic2Objects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDmusic2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OptionsCode.GDmusic2Objects1 */
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber((( gdjs.OptionsCode.GDmusic2Objects1.length === 0 ) ? 0 :gdjs.OptionsCode.GDmusic2Objects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 1, (( gdjs.OptionsCode.GDmusic2Objects1.length === 0 ) ? 0 :gdjs.OptionsCode.GDmusic2Objects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{for(var i = 0, len = gdjs.OptionsCode.GDmusic2Objects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDmusic2Objects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("sfx"), gdjs.OptionsCode.GDsfxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OptionsCode.GDsfxObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDsfxObjects1[i].IsActivated((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.OptionsCode.GDsfxObjects1[k] = gdjs.OptionsCode.GDsfxObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDsfxObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OptionsCode.GDsfxObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber((( gdjs.OptionsCode.GDsfxObjects1.length === 0 ) ? 0 :gdjs.OptionsCode.GDsfxObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{for(var i = 0, len = gdjs.OptionsCode.GDsfxObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDsfxObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("music2"), gdjs.OptionsCode.GDmusic2Objects1);
gdjs.copyArray(runtimeScene.getObjects("sfx"), gdjs.OptionsCode.GDsfxObjects1);
{for(var i = 0, len = gdjs.OptionsCode.GDmusic2Objects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDmusic2Objects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.OptionsCode.GDsfxObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDsfxObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.OptionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OptionsCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.OptionsCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.OptionsCode.GDmusic2Objects1.length = 0;
gdjs.OptionsCode.GDmusic2Objects2.length = 0;
gdjs.OptionsCode.GDNewTextObjects1.length = 0;
gdjs.OptionsCode.GDNewTextObjects2.length = 0;
gdjs.OptionsCode.GDNewText2Objects1.length = 0;
gdjs.OptionsCode.GDNewText2Objects2.length = 0;
gdjs.OptionsCode.GDsfxObjects1.length = 0;
gdjs.OptionsCode.GDsfxObjects2.length = 0;
gdjs.OptionsCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.OptionsCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.OptionsCode.GDskebob_9595themeObjects1.length = 0;
gdjs.OptionsCode.GDskebob_9595themeObjects2.length = 0;
gdjs.OptionsCode.GDskebob_9595funkObjects1.length = 0;
gdjs.OptionsCode.GDskebob_9595funkObjects2.length = 0;
gdjs.OptionsCode.GDflip_9595flapObjects1.length = 0;
gdjs.OptionsCode.GDflip_9595flapObjects2.length = 0;
gdjs.OptionsCode.GDNewText3Objects1.length = 0;
gdjs.OptionsCode.GDNewText3Objects2.length = 0;
gdjs.OptionsCode.GDNewText4Objects1.length = 0;
gdjs.OptionsCode.GDNewText4Objects2.length = 0;

gdjs.OptionsCode.eventsList0(runtimeScene);
gdjs.OptionsCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.OptionsCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.OptionsCode.GDmusic2Objects1.length = 0;
gdjs.OptionsCode.GDmusic2Objects2.length = 0;
gdjs.OptionsCode.GDNewTextObjects1.length = 0;
gdjs.OptionsCode.GDNewTextObjects2.length = 0;
gdjs.OptionsCode.GDNewText2Objects1.length = 0;
gdjs.OptionsCode.GDNewText2Objects2.length = 0;
gdjs.OptionsCode.GDsfxObjects1.length = 0;
gdjs.OptionsCode.GDsfxObjects2.length = 0;
gdjs.OptionsCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.OptionsCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.OptionsCode.GDskebob_9595themeObjects1.length = 0;
gdjs.OptionsCode.GDskebob_9595themeObjects2.length = 0;
gdjs.OptionsCode.GDskebob_9595funkObjects1.length = 0;
gdjs.OptionsCode.GDskebob_9595funkObjects2.length = 0;
gdjs.OptionsCode.GDflip_9595flapObjects1.length = 0;
gdjs.OptionsCode.GDflip_9595flapObjects2.length = 0;
gdjs.OptionsCode.GDNewText3Objects1.length = 0;
gdjs.OptionsCode.GDNewText3Objects2.length = 0;
gdjs.OptionsCode.GDNewText4Objects1.length = 0;
gdjs.OptionsCode.GDNewText4Objects2.length = 0;


return;

}

gdjs['OptionsCode'] = gdjs.OptionsCode;
