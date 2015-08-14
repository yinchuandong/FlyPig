/**
 *
 * @author 
 *
 */
class Star extends egret.Bitmap{
    
    private static cacheDict: Object = {};
    
    public textureName: string;
    
	public constructor(texture:egret.Texture) {
        super(texture);
        
//        this.anchorX = 0.5;
        this.width = this.width * 0.4;
        this.height = this.height * 0.4;
	}
	
	/**
	 * 生产一个星星对象
	 */ 
	public static produce(textureName: string):Star{
    	  if(Star.cacheDict[textureName] == null){
            Star.cacheDict[textureName] = [];
    	  }
        var arr: Star[] = Star.cacheDict[textureName];
        var star: Star;
        
        if(arr.length > 0){
            star = arr.pop();
        }else{
            star = new Star(RES.getRes(textureName));
        }
        
        star.textureName = textureName;
        return star;
	}
	
    public static reclaim(star: Star,textureName: string):void{
        if(Star.cacheDict[textureName] == null){
            Star.cacheDict[textureName] = [];
        }
        
        var arr: Star[] = Star.cacheDict[textureName];
        if(arr.indexOf(star) == -1){
            arr.push(star);
        }
    }
	
	
}
