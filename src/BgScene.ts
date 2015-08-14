/**
 *
 * @author 
 *
 */
class BgScene extends egret.DisplayObjectContainer{
    
    private bitmap1: egret.Bitmap;
    private bitmap2: egret.Bitmap;
    
    private bgHeight: number;
    
    private speed: number;
    
    private bgTimer: egret.Timer = new egret.Timer(5000);
    
    
	public constructor() {
        super();
        
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
	}
	
	private onAddToStage(event: egret.Event){
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        this.initData();
        
	}
	
	
	private initData(): void{
        this.bitmap1 = GameUtil.createBitmapByName("black2");
        this.addChild(this.bitmap1);
                
        this.bitmap2  = GameUtil.createBitmapByName("black2");
        this.addChild(this.bitmap2);
        
        this.bgHeight = this.bitmap1.height;
        this.bitmap1.y = 0;
        this.bitmap2.y = -this.bgHeight;
        
        this.speed = 4;
	}
	
	/**
	 * 开始滚动
	 */ 
	public start(): void{
          egret.Ticker.getInstance().unregister(this.onTickerHandler, this);
          egret.Ticker.getInstance().register(this.onTickerHandler, this);
//        this.bgTimer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
//        this.bgTimer.start();
	}
	
	private onTimer(evt:egret.TimerEvent): void{
        this.pause();
	}
	
    /**
     * 暂停滚动
     */
    public pause():void {
        egret.Ticker.getInstance().unregister(this.onTickerHandler, this);
        
    }
	
    /**
     * @number frameTime 执行每一帧耗时ms
     */ 
    private onTickerHandler(frameTime:number){
        if(this.bitmap1.y > this.bgHeight){
            this.bitmap1.y = this.bitmap2.y - this.bgHeight;
        }
                	    
        if(this.bitmap2.y > this.bgHeight){
            this.bitmap2.y = this.bitmap1.y - this.bgHeight;
        }
        
        //防止当帧率下降时运动卡顿，需要计算offset系数，使得帧率慢时加快运动速率
        var span = (60 / (1000 / frameTime)) * this.speed; 
                	    
        this.bitmap1.y += span;
        this.bitmap2.y += span;
    }
	
	
}
