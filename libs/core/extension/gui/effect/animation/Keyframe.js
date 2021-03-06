//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var egret;
(function (egret) {
    var gui;
    (function (gui) {
        /**
         * @class egret.gui.Keyframe
         * @classdesc
         * Keyframe 类用于定义位于效果过程中某个特定时间的属性的值。
         */
        var Keyframe = (function () {
            /**
             * @param time 以毫秒为单位的时间，此关键帧的效果目标应该在此时间处具有 value 参数指定的值。
             * @param value 效果目标在给定的 time 处应该具有的值。
             * @param valueBy 可选参数，如果提供该可选参数，
             * 则可以通过将 valueBy 与 MotionPath 对象的关键帧集合中的前一个关键帧的 value 相加来动态地计算 value。
             * 如果是序列中的第一个 Keyframe，则会忽略此值
             * @method egret.gui.Keyframe#constructor
             */
            function Keyframe(time, value, valueBy) {
                if (time === void 0) { time = NaN; }
                if (value === void 0) { value = null; }
                if (valueBy === void 0) { valueBy = null; }
                this.value = value;
                this.time = time;
                this.valueBy = valueBy;
            }
            var __egretProto__ = Keyframe.prototype;
            /**
             * 返回此 Keyframe 对象的副本。
             */
            __egretProto__.clone = function () {
                var kf = new Keyframe(this.time, this.value, this.valueBy);
                kf.easer = this.easer;
                kf._timeFraction = this._timeFraction;
                return kf;
            };
            return Keyframe;
        })();
        gui.Keyframe = Keyframe;
        Keyframe.prototype.__class__ = "egret.gui.Keyframe";
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
