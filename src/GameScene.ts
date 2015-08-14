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
    
    
   
    
	public constructor() {
        super();
        
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
	}
	
	private onAddToStage(event:egret.Event){
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        this.stageWidth = this.stage.stageWidth;
        this.stageHeight = this.stage.stageHeight;
        
        this.initData();
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
        star.x = this.stageWidth / 2;
        star.y = 100;
//        star.scaleX = 0.4;
//        star.scaleY = 0.4;
        this.starList.push(star);
        this.addChild(star);
       
	}
	
	public start(): void{
        this.touchEnabled=true;
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchHandler,this);
        egret.Ticker.getInstance().register(this.onTickerHandler, this); 
	}
	
	public pause(): void{
        egret.Ticker.getInstance().unregister(this.onTickerHandler, this);
	}
	
	private touchHandler(evt:egret.TouchEvent):void{
	    if(evt.type == egret.TouchEvent.TOUCH_MOVE){
            var tx: number = evt.localX;
            tx = Math.max(this.pig.width / 2,tx);
            tx = Math.min(this.stageWidth - this.pig.width / 2, tx);
            this.pig.x = tx - this.pig.width / 2;
//            this.pig.
	    }
	}
	
	
	private onTickerHandler(frameTime:number):void{
	    //防止当帧率下降时运动卡顿，需要计算offset系数，使得帧率慢时加快运动速率
	    var offset = (60 / (1000 / frameTime)); 
        var star: Star = this.starList[0];
        star.y += 12 * offset;
        if(star.y > this.stageHeight){
            star.y = 0;
        }
	    
        if(GameUtil.hitTest(star, this.pig)){
            GameUtil.hitTest(star,this.pig);
            this.pause();
            this.bgScene.pause();
        }
        
//        console.log((star.x + star.width) + "---" + this.pig.x);
        console.log((star.anchorOffsetX) + "---" + star.x);
	}
	
	
	
	
}
