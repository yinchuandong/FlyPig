/**
 *
 * @author 
 *
 */
class Pig extends egret.DisplayObjectContainer{
    
    private stageWidth: number;
    private stageHeight: number;
    
    public blood: number = 4;
    
    private mcCry: egret.MovieClip;
    private timer: egret.Timer = new egret.Timer(1500);
    
    public constructor() { 
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    
    private onAddToStage(event: egret.Event) { 
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        this.stageWidth = this.stage.stageWidth;
        this.stageHeight = this.stage.stageHeight;
        
        this.initData();
    }
    
    private initData():void {
        //处理动画
        var mcCryJson = RES.getRes("cry_json");
        var mcCryPng = RES.getRes("cry_png");
        var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(mcCryJson, mcCryPng);
        this.mcCry = new egret.MovieClip(mcFactory.generateMovieClipData("cry"));
        this.addChild(this.mcCry);
        this.mcCry.scaleX = 0.4;
        this.mcCry.scaleY = 0.4;
        this.mcCry.anchorX = 0.5;
        this.mcCry.width *= 0.4;
        this.mcCry.height *= 0.4;
        this.width = this.mcCry.width;
        this.height = this.mcCry.height;
        
//        this.mcCry.x = this.stageWidth / 2 - this.mcCry.width / 2;
//        this.mcCry.y = this.stageHeight - this.mcCry.height / 2;
        
        
        this.x = this.stageWidth / 2 - this.mcCry.width / 2;
        this.y = this.stageHeight - this.mcCry.height - 20;
        this.mcCry.gotoAndPlay(0);
        
        
        //处理定时器
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        this.timer.start();
    }
    
    
    private onTimer(evt: egret.Event):void{
        this.mcCry.gotoAndPlay(0);
    }
    	
    
    
}
