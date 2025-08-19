gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code = {};
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.localVariables = [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects2= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects2= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite3Objects1= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite3Objects2= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects1= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects2= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDScoreTextObjects1= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDScoreTextObjects2= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewTiledSpriteObjects1= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewTiledSpriteObjects2= [];


gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_9546_95951041_95951077_95951079_95951099_95951084_95951103_95951085_95951085_95951072_95951103_959532_95951089_95951094_95951077_95951085_95951072Code_9546GDScoreTextObjects1Objects = Hashtable.newFrom({"ScoreText": gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDScoreTextObjects1});
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.asyncCallback11546308 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.localVariables.length = 0;
}
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.asyncCallback11546308(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( !(gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isFalling()) ) {
        isConditionTrue_0 = true;
        gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1[k] = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "jumpbetter.ogg", false, runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber(), 1);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}
{ //Subevents
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.asyncCallback11548460 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.localVariables.length = 0;
}
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.asyncCallback11548460(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( !(gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isFalling()) ) {
        isConditionTrue_0 = true;
        gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1[k] = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "jumpbetter.ogg", false, runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber(), 1);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}
{ //Subevents
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.asyncCallback11550676 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.localVariables.length = 0;
}
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.asyncCallback11550676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList5 = function(runtimeScene) {

{

/* Reuse gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( !(gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isFalling()) ) {
        isConditionTrue_0 = true;
        gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1[k] = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "jumpbetter.ogg", false, runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber(), 1);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}
{ //Subevents
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_9546_95951041_95951077_95951079_95951099_95951084_95951103_95951085_95951085_95951072_95951103_959532_95951089_95951094_95951077_95951085_95951072Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1});
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_9546_95951041_95951077_95951079_95951099_95951084_95951103_95951085_95951085_95951072_95951103_959532_95951089_95951094_95951077_95951085_95951072Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects1});
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_9546_95951041_95951077_95951079_95951099_95951084_95951103_95951085_95951085_95951072_95951103_959532_95951089_95951094_95951077_95951085_95951072Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1});
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_9546_95951041_95951077_95951079_95951099_95951084_95951103_95951085_95951085_95951072_95951103_959532_95951089_95951094_95951077_95951085_95951072Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite3Objects1});
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_9546_95951041_95951077_95951079_95951099_95951084_95951103_95951085_95951085_95951072_95951103_959532_95951089_95951094_95951077_95951085_95951072Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1});
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_9546_95951041_95951077_95951079_95951099_95951084_95951103_95951085_95951085_95951072_95951103_959532_95951089_95951094_95951077_95951085_95951072Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1});
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_9546_95951041_95951077_95951079_95951099_95951084_95951103_95951085_95951085_95951072_95951103_959532_95951089_95951094_95951077_95951085_95951072Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1});
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_9546_95951041_95951077_95951079_95951099_95951084_95951103_95951085_95951085_95951072_95951103_959532_95951089_95951094_95951077_95951085_95951072Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects1});
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDScoreTextObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gu");
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_9546_95951041_95951077_95951079_95951099_95951084_95951103_95951085_95951085_95951072_95951103_959532_95951089_95951094_95951077_95951085_95951072Code_9546GDScoreTextObjects1Objects, 720 / 2 - 40, 80, "sloi povishe");
}{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{ //Subevents
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{ //Subevents
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{ //Subevents
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.doesSceneExist(runtimeScene, "Безымянная сцена");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "gu") > 2;
if (isConditionTrue_0) {
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1.length = 0;

gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_9546_95951041_95951077_95951079_95951099_95951084_95951103_95951085_95951085_95951072_95951103_959532_95951089_95951094_95951077_95951085_95951072Code_9546GDNewSprite2Objects1Objects, 720, gdjs.randomInRange(-(700), -(100)), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_9546_95951041_95951077_95951079_95951099_95951084_95951103_95951085_95951085_95951072_95951103_959532_95951089_95951094_95951077_95951085_95951072Code_9546GDNewSprite4Objects1Objects, 810, 0, "");
}{for(var i = 0, len = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects1[i].getBehavior("Resizable").setHeight(9999);
}
}{for(var i = 0, len = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1[i].addForce(-(300), 0, 1);
}
}{for(var i = 0, len = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects1[i].addForce(-(300), 0, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gu");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1[i].getX() < -(250) ) {
        isConditionTrue_0 = true;
        gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1[k] = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_9546_95951041_95951077_95951079_95951099_95951084_95951103_95951085_95951085_95951072_95951103_959532_95951089_95951094_95951077_95951085_95951072Code_9546GDNewSpriteObjects1Objects, gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_9546_95951041_95951077_95951079_95951099_95951084_95951103_95951085_95951085_95951072_95951103_959532_95951089_95951094_95951077_95951085_95951072Code_9546GDNewSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "gu");
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "gameover");
}{gdjs.evtTools.sound.playSound(runtimeScene, "46de0aab24bdde4.mp3", false, runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber(), 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_9546_95951041_95951077_95951079_95951099_95951084_95951103_95951085_95951085_95951072_95951103_959532_95951089_95951094_95951077_95951085_95951072Code_9546GDNewSpriteObjects1Objects, gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_9546_95951041_95951077_95951079_95951099_95951084_95951103_95951085_95951085_95951072_95951103_959532_95951089_95951094_95951077_95951085_95951072Code_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "gu");
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "gameover");
}{gdjs.evtTools.sound.playSound(runtimeScene, "46de0aab24bdde4.mp3", false, runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber(), 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_9546_95951041_95951077_95951079_95951099_95951084_95951103_95951085_95951085_95951072_95951103_959532_95951089_95951094_95951077_95951085_95951072Code_9546GDNewSpriteObjects1Objects, gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_9546_95951041_95951077_95951079_95951099_95951084_95951103_95951085_95951085_95951072_95951103_959532_95951089_95951094_95951077_95951085_95951072Code_9546GDNewSprite4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects1 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDScoreTextObjects1);
{for(var i = 0, len = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDScoreTextObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "metallicheskiy-zvon.ogg", false, runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber(), 1);
}}

}


};

gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite3Objects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite3Objects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDScoreTextObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDScoreTextObjects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewTiledSpriteObjects2.length = 0;

gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList6(runtimeScene);
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite3Objects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite3Objects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDScoreTextObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDScoreTextObjects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewTiledSpriteObjects2.length = 0;


return;

}

gdjs['_1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code'] = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code;
