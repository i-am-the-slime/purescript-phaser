// Generated by purs bundle 0.14.4
var PS = {};
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Control.Semigroupoid"] = $PS["Control.Semigroupoid"] || {};
  var exports = $PS["Control.Semigroupoid"];
  var semigroupoidFn = {
      compose: function (f) {
          return function (g) {
              return function (x) {
                  return f(g(x));
              };
          };
      }
  };
  exports["semigroupoidFn"] = semigroupoidFn;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Control.Category"] = $PS["Control.Category"] || {};
  var exports = $PS["Control.Category"];
  var Control_Semigroupoid = $PS["Control.Semigroupoid"];                
  var identity = function (dict) {
      return dict.identity;
  };
  var categoryFn = {
      identity: function (x) {
          return x;
      },
      Semigroupoid0: function () {
          return Control_Semigroupoid.semigroupoidFn;
      }
  };
  exports["identity"] = identity;
  exports["categoryFn"] = categoryFn;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Data.Function"] = $PS["Data.Function"] || {};
  var exports = $PS["Data.Function"];
  var flip = function (f) {
      return function (b) {
          return function (a) {
              return f(a)(b);
          };
      };
  };
  var $$const = function (a) {
      return function (v) {
          return a;
      };
  };
  exports["flip"] = flip;
  exports["const"] = $$const;
})(PS);
(function(exports) {
  "use strict";

  exports.unit = {};
})(PS["Data.Unit"] = PS["Data.Unit"] || {});
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Data.Unit"] = $PS["Data.Unit"] || {};
  var exports = $PS["Data.Unit"];
  var $foreign = $PS["Data.Unit"];
  exports["unit"] = $foreign.unit;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Data.Functor"] = $PS["Data.Functor"] || {};
  var exports = $PS["Data.Functor"];
  var Data_Function = $PS["Data.Function"];
  var Data_Unit = $PS["Data.Unit"];                  
  var map = function (dict) {
      return dict.map;
  };
  var $$void = function (dictFunctor) {
      return map(dictFunctor)(Data_Function["const"](Data_Unit.unit));
  };
  exports["map"] = map;
  exports["void"] = $$void;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Control.Apply"] = $PS["Control.Apply"] || {};
  var exports = $PS["Control.Apply"];
  var Control_Category = $PS["Control.Category"];
  var Data_Function = $PS["Data.Function"];
  var Data_Functor = $PS["Data.Functor"];
  var apply = function (dict) {
      return dict.apply;
  };
  var applySecond = function (dictApply) {
      return function (a) {
          return function (b) {
              return apply(dictApply)(Data_Functor.map(dictApply.Functor0())(Data_Function["const"](Control_Category.identity(Control_Category.categoryFn)))(a))(b);
          };
      };
  };
  exports["apply"] = apply;
  exports["applySecond"] = applySecond;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Control.Applicative"] = $PS["Control.Applicative"] || {};
  var exports = $PS["Control.Applicative"];
  var Control_Apply = $PS["Control.Apply"];          
  var pure = function (dict) {
      return dict.pure;
  };
  var liftA1 = function (dictApplicative) {
      return function (f) {
          return function (a) {
              return Control_Apply.apply(dictApplicative.Apply0())(pure(dictApplicative)(f))(a);
          };
      };
  };
  exports["pure"] = pure;
  exports["liftA1"] = liftA1;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Control.Bind"] = $PS["Control.Bind"] || {};
  var exports = $PS["Control.Bind"];
  var bind = function (dict) {
      return dict.bind;
  };
  exports["bind"] = bind;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Control.Monad"] = $PS["Control.Monad"] || {};
  var exports = $PS["Control.Monad"];
  var Control_Applicative = $PS["Control.Applicative"];
  var Control_Bind = $PS["Control.Bind"];
  var ap = function (dictMonad) {
      return function (f) {
          return function (a) {
              return Control_Bind.bind(dictMonad.Bind1())(f)(function (f$prime) {
                  return Control_Bind.bind(dictMonad.Bind1())(a)(function (a$prime) {
                      return Control_Applicative.pure(dictMonad.Applicative0())(f$prime(a$prime));
                  });
              });
          };
      };
  };
  exports["ap"] = ap;
})(PS);
(function(exports) {
  "use strict";

  exports.foldrArray = function (f) {
    return function (init) {
      return function (xs) {
        var acc = init;
        var len = xs.length;
        for (var i = len - 1; i >= 0; i--) {
          acc = f(xs[i])(acc);
        }
        return acc;
      };
    };
  };

  exports.foldlArray = function (f) {
    return function (init) {
      return function (xs) {
        var acc = init;
        var len = xs.length;
        for (var i = 0; i < len; i++) {
          acc = f(acc)(xs[i]);
        }
        return acc;
      };
    };
  };
})(PS["Data.Foldable"] = PS["Data.Foldable"] || {});
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Data.Monoid"] = $PS["Data.Monoid"] || {};
  var exports = $PS["Data.Monoid"];
  var mempty = function (dict) {
      return dict.mempty;
  };
  exports["mempty"] = mempty;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Data.Semigroup"] = $PS["Data.Semigroup"] || {};
  var exports = $PS["Data.Semigroup"];
  var append = function (dict) {
      return dict.append;
  };
  exports["append"] = append;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Data.Foldable"] = $PS["Data.Foldable"] || {};
  var exports = $PS["Data.Foldable"];
  var $foreign = $PS["Data.Foldable"];
  var Control_Applicative = $PS["Control.Applicative"];
  var Control_Apply = $PS["Control.Apply"];
  var Data_Function = $PS["Data.Function"];
  var Data_Monoid = $PS["Data.Monoid"];
  var Data_Semigroup = $PS["Data.Semigroup"];
  var Data_Unit = $PS["Data.Unit"];                
  var foldr = function (dict) {
      return dict.foldr;
  };
  var traverse_ = function (dictApplicative) {
      return function (dictFoldable) {
          return function (f) {
              return foldr(dictFoldable)((function () {
                  var $316 = Control_Apply.applySecond(dictApplicative.Apply0());
                  return function ($317) {
                      return $316(f($317));
                  };
              })())(Control_Applicative.pure(dictApplicative)(Data_Unit.unit));
          };
      };
  };
  var for_ = function (dictApplicative) {
      return function (dictFoldable) {
          return Data_Function.flip(traverse_(dictApplicative)(dictFoldable));
      };
  };
  var foldMapDefaultR = function (dictFoldable) {
      return function (dictMonoid) {
          return function (f) {
              return foldr(dictFoldable)(function (x) {
                  return function (acc) {
                      return Data_Semigroup.append(dictMonoid.Semigroup0())(f(x))(acc);
                  };
              })(Data_Monoid.mempty(dictMonoid));
          };
      };
  };
  var foldableArray = {
      foldr: $foreign.foldrArray,
      foldl: $foreign.foldlArray,
      foldMap: function (dictMonoid) {
          return foldMapDefaultR(foldableArray)(dictMonoid);
      }
  };
  exports["for_"] = for_;
  exports["foldableArray"] = foldableArray;
})(PS);
(function(exports) {
  "use strict";

  exports.pureE = function (a) {
    return function () {
      return a;
    };
  };

  exports.bindE = function (a) {
    return function (f) {
      return function () {
        return f(a())();
      };
    };
  };
})(PS["Effect"] = PS["Effect"] || {});
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Effect"] = $PS["Effect"] || {};
  var exports = $PS["Effect"];
  var $foreign = $PS["Effect"];
  var Control_Applicative = $PS["Control.Applicative"];
  var Control_Monad = $PS["Control.Monad"];                  
  var monadEffect = {
      Applicative0: function () {
          return applicativeEffect;
      },
      Bind1: function () {
          return bindEffect;
      }
  };
  var bindEffect = {
      bind: $foreign.bindE,
      Apply0: function () {
          return applyEffect;
      }
  };
  var applyEffect = {
      apply: Control_Monad.ap(monadEffect),
      Functor0: function () {
          return functorEffect;
      }
  };
  var applicativeEffect = {
      pure: $foreign.pureE,
      Apply0: function () {
          return applyEffect;
      }
  };
  var functorEffect = {
      map: Control_Applicative.liftA1(applicativeEffect)
  };
  exports["functorEffect"] = functorEffect;
  exports["applicativeEffect"] = applicativeEffect;
  exports["bindEffect"] = bindEffect;
})(PS);
(function(exports) {
  "use strict";

  exports.runEffectFn2 = function runEffectFn2(fn) {
    return function(a) {
      return function(b) {
        return function() {
          return fn(a, b);
        };
      };
    };
  };

  exports.runEffectFn3 = function runEffectFn3(fn) {
    return function(a) {
      return function(b) {
        return function(c) {
          return function() {
            return fn(a, b, c);
          };
        };
      };
    };
  };

  exports.runEffectFn4 = function runEffectFn4(fn) {
    return function(a) {
      return function(b) {
        return function(c) {
          return function(d) {
            return function() {
              return fn(a, b, c, d);
            };
          };
        };
      };
    };
  };

  exports.runEffectFn5 = function runEffectFn5(fn) {
    return function(a) {
      return function(b) {
        return function(c) {
          return function(d) {
            return function(e) {
              return function() {
                return fn(a, b, c, d, e);
              };
            };
          };
        };
      };
    };
  };
})(PS["Effect.Uncurried"] = PS["Effect.Uncurried"] || {});
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Effect.Uncurried"] = $PS["Effect.Uncurried"] || {};
  var exports = $PS["Effect.Uncurried"];
  var $foreign = $PS["Effect.Uncurried"];
  exports["runEffectFn2"] = $foreign.runEffectFn2;
  exports["runEffectFn3"] = $foreign.runEffectFn3;
  exports["runEffectFn4"] = $foreign.runEffectFn4;
  exports["runEffectFn5"] = $foreign.runEffectFn5;
})(PS);
(function(exports) {
  'use strict';

  function create() {
    return new Phaser.Game();
  }

  exports.create = create;

  exports.setGameDimensionsImpl = function ({ width, height }, game) {
    game.config.width = width;
    game.config.height = height;
    return game;
  };

  exports.addSceneImpl = function (
    { key, init, create, update, preload, state },
    autoStart,
    game
  ) {
    const config = {
      init: function (data_) {
        init(this)(data_)();
      },
      preload: function () {
        preload(this)();
      },
      create: function (data_) {
        create(this)(data_)();
      },
      update: function () {
        update(this)();
      },
    };
    game.scene.add(key, config, autoStart, state);
    return game;
  };
})(PS["Graphics.Phaser"] = PS["Graphics.Phaser"] || {});
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Graphics.Phaser"] = $PS["Graphics.Phaser"] || {};
  var exports = $PS["Graphics.Phaser"];
  var $foreign = $PS["Graphics.Phaser"];
  var Effect_Uncurried = $PS["Effect.Uncurried"];                
  var setGameDimensions = Effect_Uncurried.runEffectFn2($foreign.setGameDimensionsImpl);
  var addScene = Effect_Uncurried.runEffectFn3($foreign.addSceneImpl);
  exports["setGameDimensions"] = setGameDimensions;
  exports["addScene"] = addScene;
  exports["create"] = $foreign.create;
})(PS);
(function(exports) {
  "use strict";

  exports.loadSpritesheetImpl = (key, textureURL, config, scene) => {
    scene.load.spritesheet(key, textureURL, config);
    return scene;
  };
})(PS["Graphics.Phaser.Loader"] = PS["Graphics.Phaser.Loader"] || {});
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Graphics.Phaser.Loader"] = $PS["Graphics.Phaser.Loader"] || {};
  var exports = $PS["Graphics.Phaser.Loader"];
  var $foreign = $PS["Graphics.Phaser.Loader"];
  var Effect_Uncurried = $PS["Effect.Uncurried"];                                           
  var loadSpritesheet = Effect_Uncurried.runEffectFn4($foreign.loadSpritesheetImpl);
  exports["loadSpritesheet"] = loadSpritesheet;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Graphics.Phaser.Scene"] = $PS["Graphics.Phaser.Scene"] || {};
  var exports = $PS["Graphics.Phaser.Scene"];
  var Control_Applicative = $PS["Control.Applicative"];
  var Data_Unit = $PS["Data.Unit"];
  var Effect = $PS["Effect"];
  var defaultSceneConfig = {
      key: "",
      create: function (_scene) {
          return Control_Applicative.pure(Effect.applicativeEffect)(Data_Unit.unit);
      },
      init: function (_scene) {
          return Control_Applicative.pure(Effect.applicativeEffect)(Data_Unit.unit);
      },
      update: function (_scene) {
          return Control_Applicative.pure(Effect.applicativeEffect)(Data_Unit.unit);
      },
      preload: function (_scene) {
          return Control_Applicative.pure(Effect.applicativeEffect)(Data_Unit.unit);
      }
  };
  exports["defaultSceneConfig"] = defaultSceneConfig;
})(PS);
(function(exports) {
  'use strict';

  exports.addImpl = function (key, { x, y }, scene) {
    return scene.add.sprite(x, y, key);
  };

  exports.createAnimationImpl = function (key, frames, frameRate, repeat, scene) {
    scene.anims.create({
      key,
      frames,
      frameRate,
      repeat,
    });

    return scene;
  };

  exports.playAnimationImpl = function (key, sprite) {
    sprite.play(key);

    return sprite;
  };

  /** https://photonstorm.github.io/phaser3-docs/Phaser.Animations.AnimationManager.html#generateFrameNumbers */
  exports.generateFrameNumbersImpl = function (key, start, end, scene) {
    return scene.anims.generateFrameNumbers(key, { start, end });
  };

  exports.setFrameImpl = function (frame, sprite) {
    return sprite.setFrame(frame);
  };
})(PS["Graphics.Phaser.Sprite"] = PS["Graphics.Phaser.Sprite"] || {});
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Graphics.Phaser.Sprite"] = $PS["Graphics.Phaser.Sprite"] || {};
  var exports = $PS["Graphics.Phaser.Sprite"];
  var $foreign = $PS["Graphics.Phaser.Sprite"];
  var Effect_Uncurried = $PS["Effect.Uncurried"];                                 
  var setFrame = Effect_Uncurried.runEffectFn2($foreign.setFrameImpl);              
  var playAnimation = Effect_Uncurried.runEffectFn2($foreign.playAnimationImpl);
  var generateFrameNumbers = Effect_Uncurried.runEffectFn4($foreign.generateFrameNumbersImpl);
  var createAnimation = Effect_Uncurried.runEffectFn5($foreign.createAnimationImpl);
  var add = Effect_Uncurried.runEffectFn3($foreign.addImpl);
  exports["add"] = add;
  exports["createAnimation"] = createAnimation;
  exports["playAnimation"] = playAnimation;
  exports["generateFrameNumbers"] = generateFrameNumbers;
  exports["setFrame"] = setFrame;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.4
  "use strict";
  $PS["Main"] = $PS["Main"] || {};
  var exports = $PS["Main"];
  var Control_Bind = $PS["Control.Bind"];
  var Data_Foldable = $PS["Data.Foldable"];
  var Data_Functor = $PS["Data.Functor"];
  var Effect = $PS["Effect"];
  var Graphics_Phaser = $PS["Graphics.Phaser"];
  var Graphics_Phaser_Loader = $PS["Graphics.Phaser.Loader"];
  var Graphics_Phaser_Scene = $PS["Graphics.Phaser.Scene"];
  var Graphics_Phaser_Sprite = $PS["Graphics.Phaser.Sprite"];                
  var ghRoot = "https://raw.githubusercontent.com/photonstorm/phaser3-examples/master/public/assets/sprites/";
  var preload = function (scene) {
      return Data_Functor["void"](Effect.functorEffect)(Data_Foldable.for_(Effect.applicativeEffect)(Data_Foldable.foldableArray)([ Graphics_Phaser_Loader.loadSpritesheet("explosion")(ghRoot + "explosion.png")({
          frameWidth: 64.0,
          frameHeight: 64.0,
          startFrame: 0,
          endFrame: 23,
          margin: 0,
          spacing: 0
      }), Graphics_Phaser_Loader.loadSpritesheet("balls")(ghRoot + "balls.png")({
          frameWidth: 17.0,
          frameHeight: 17.0,
          startFrame: 0,
          endFrame: 4,
          margin: 0,
          spacing: 0
      }) ])(function (fn) {
          return fn(scene);
      }));
  };
  var explodeSpriteKey = "explosion";
  var explodeAnimationKey = "explodeAnimation";
  var create = function (scene) {
      return Data_Functor["void"](Effect.functorEffect)(function __do() {
          var explosionFrames = Graphics_Phaser_Sprite.generateFrameNumbers(explodeSpriteKey)(0)(23)(scene)();
          Graphics_Phaser_Sprite.createAnimation(explodeAnimationKey)(explosionFrames)(20.0)(-1 | 0)(scene)();
          Control_Bind.bind(Effect.bindEffect)(Graphics_Phaser_Sprite.add(explodeSpriteKey)({
              x: 100.0,
              y: 100.0
          })(scene))(Graphics_Phaser_Sprite.playAnimation(explodeAnimationKey))();
          return Control_Bind.bind(Effect.bindEffect)(Graphics_Phaser_Sprite.add("balls")({
              x: 100.0,
              y: 100.0
          })(scene))(Graphics_Phaser_Sprite.setFrame(3))();
      });
  };
  var mainScene = {
      key: "main",
      create: create,
      init: Graphics_Phaser_Scene.defaultSceneConfig.init,
      update: Graphics_Phaser_Scene.defaultSceneConfig.update,
      preload: preload
  };
  var main = Control_Bind.bind(Effect.bindEffect)(Control_Bind.bind(Effect.bindEffect)(Graphics_Phaser.create)(Graphics_Phaser.setGameDimensions({
      width: 800.0,
      height: 600.0
  })))(Graphics_Phaser.addScene(mainScene)(true));
  exports["ghRoot"] = ghRoot;
  exports["preload"] = preload;
  exports["main"] = main;
  exports["explodeSpriteKey"] = explodeSpriteKey;
  exports["explodeAnimationKey"] = explodeAnimationKey;
  exports["create"] = create;
  exports["mainScene"] = mainScene;
})(PS);
PS["Main"].main();