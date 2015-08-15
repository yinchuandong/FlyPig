/**
 *
 * @author 
 *
 */
class GameScene extends egret.DisplayObjectContainer{
    
    private stageWidth: number;
    private stageHeight: number;
    
    private bgScene: BgScene;
    private pig: Pig;
    private starList: Star[] = [];
    
    private starsTimer: egret.Timer = new egret.Timer(3000);
    
   
    
	public constructor() {
        super();
        
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
	}
	
	private onAddToStage(event:egret.Event){
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        this.stageWidth = this.stage.stageWidth;
        this.stageHeight = this.stage.stageHeight;
        
        this.initData();
        this.preCreate();
        this.start();
        
	}
	
	private initData(): void{
    	  // 处理背景
        this.bgScene = new BgScene();
        this.addChild(this.bgScene);
        this.bgScene.start();
        
        this.pig = new Pig();
        this.addChild(this.pig);
        
        var star: Star = Star.produce("shizi");
        star.x = this.stageWidth / 2 - star.width / 2;
        star.y = 100;
        this.addChild(star);
        this.starList.push(star);
        Star.reclaim(star, "shizi");
        
       
	}
	
	public start(): void{
        this.touchEnabled=true;
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchHandler,this);
        egret.Ticker.getInstance().register(this.onTickerHandler, this);
        this.starsTimer.addEventListener(egret.TimerEvent.TIMER, this.createStars, this);
        this.starsTimer.start();
	}
	
	public pause(): void{
        egret.Ticker.getInstance().unregister(this.onTickerHandler, this);
        this.bgScene.pause();
	}
	
	private preCreate():void{
        var i: number;
        for(i = 0;i < 10; i++){
            var star: Star = Star.produce("shizi");
            Star.reclaim(star, "shizi");
        }
	}
	
	private createStars(evt: egret.TimerEvent):void{
        var star: Star = Star.produce("shizi");
        star.x = Math.random() * (this.stageWidth - star.width);
        star.y = -star.height - Math.random() * 300;
        this.addChild(star);
        this.starList.push(star);
	}
	
	private touchHandler(evt:egret.TouchEvent):void{
	    if(evt.type == egret.TouchEvent.TOUCH_MOVE){
            var tx: number = evt.localX;
            tx = Math.max(this.pig.width / 2,tx);
            tx = Math.min(this.stageWidth - this.pig.width / 2, tx);
            this.pig.x = tx - this.pig.width / 2;
            
	    }
	}
	
	
	private onTickerHandler(frameTime:number):void{
	    //防止当帧率下降时运动卡顿，需要计算offset系数，使得帧率慢时加快运动速率
	    var offset = (60 / (1000 / frameTime));
        var starNum = this.starList.length;
        var i: number;
        var delArr: Star[] = [];
        for(i = 0; i < starNum; i++){
            var star: Star = this.starList[i];
            star.y += 12 * offset;
            //猪没有吃到星星
            if(star.y > this.stageHeight){
                delArr.push(star);
            }
            
            if(GameUtil.hitPigTest(star, this.pig)){
                this.pause();
            }
	    }
	    
        for(i = 0;i < delArr.length; i++){
            var star = delArr[i];
            this.removeChild(star);
            this.starList.splice(this.starList.indexOf(star),1);
        }
	}
	
	
	
}
