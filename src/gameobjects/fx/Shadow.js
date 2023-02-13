/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2013-2023 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = require('../../utils/Class');
var FX_CONST = require('./const');

/**
 * @classdesc
 *
 * @class Shadow
 * @memberof Phaser.GameObjects.FX
 * @constructor
 * @since 3.60.0
 *
 * @param {Phaser.GameObjects.GameObject} gameObject - A reference to the Game Object that has this fx.
 */
var Shadow = new Class({

    initialize:

    function Shadow (gameObject)
    {
        this.type = FX_CONST.SHADOW;

        this.gameObject = gameObject;

        this.active = true;

        this.x = 0;
        this.y = 0;
        this.decay = 0.1;
        this.power = 1.0;
        this._color = [ 0, 0, 0, 1 ];
        this.samples = 6; // max 12, min 1
        this.intensity = 1;
    },

    /**
     * The color of the shadow.
     *
     * @name Phaser.GameObjects.FX.Shadow#color
     * @type {number}
     * @since 3.60.0
     */
    color: {

        get: function ()
        {
            var color = this._color;

            return (((color[0] * 255) << 16) + ((color[1] * 255) << 8) + (color[2] * 255 | 0));
        },

        set: function (value)
        {
            var color = this._color;

            color[0] = ((value >> 16) & 0xFF) / 255;
            color[1] = ((value >> 8) & 0xFF) / 255;
            color[2] = (value & 0xFF) / 255;
        }

    },

    destroy: function ()
    {
        this.gameObject = null;
    }

});

module.exports = Shadow;
