/**
 * Created by shaorui on 14-6-6.
 */

class GameUtil{
    
    /**
    * 检测两个星星的碰撞
    */
    public static hitStarTest(star1:egret.DisplayObject,star2:egret.DisplayObject):boolean
    {
        var rect1:egret.Rectangle = star1.getBounds();
        var rect2:egret.Rectangle = star2.getBounds();
        rect1.x = star1.x;
        rect1.y = star1.y;
        rect2.x = star2.x 
        rect2.y = star2.y;
        return rect1.intersects(rect2);
    }
    
    /**
     * 检测星星和猪是否碰撞
     */
    public static hitPigTest(star:egret.DisplayObject,pig:egret.DisplayObject):boolean
    {
        var rect1:egret.Rectangle = star.getBounds();
        var rect2:egret.Rectangle = pig.getBounds();
        rect1.x = star.x;
        rect1.y = star.y;
        //保证重合了一定区域才算碰撞到
        rect2.x = pig.x + rect2.width * 0.1;
        rect2.y = pig.y + 20;
        rect2.width *= 0.5;
        return rect1.intersects(rect2);
    }
    
    /**
     * 通过图片名称创建文理
     */ 
    public static createBitmapByName(name:string):egret.Bitmap {
        var result:egret.Bitmap = new egret.Bitmap();
        var texture:egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}
