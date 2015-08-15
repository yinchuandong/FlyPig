/**
 *
 * @author 
 *
 */
class ScorePanel extends egret.gui.SkinnableComponent{
    public scoreLabel: egret.gui.Label;
        
    public constructor() {
        super();
                
        //  Assign the skin name used by this Component
        this.skinName = "skins.scene.ScorePanelSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE , this.createCompleteEvent, this);
                
        }
        	
        public createCompleteEvent(event:egret.gui.UIEvent):void{
            this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE , this.createCompleteEvent, this);
        } 
        	
        public childrenCreated(){
//            this.scoreLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnLoadtestClick, this);
            this.addEventListener("scoreChange", this.onScoreChange, this);
        }
        	
        private onScoreChange(evt: egret.Event): void{
            var data: string = evt.data;
            this.scoreLabel.text = data;
        }
        	
        private onBtnLoadtestClick(event:egret.TouchEvent):void{
            console.log(event.stageX + "-" + event.stageY);
            console.log(event.target);
        }
}
