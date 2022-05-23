// output/Control.Semigroupoid/index.js
var semigroupoidFn = {
  compose: function(f) {
    return function(g) {
      return function(x) {
        return f(g(x));
      };
    };
  }
};

// output/Control.Category/index.js
var identity = function(dict) {
  return dict.identity;
};
var categoryFn = {
  identity: function(x) {
    return x;
  },
  Semigroupoid0: function() {
    return semigroupoidFn;
  }
};

// output/Data.Function/index.js
var flip = function(f) {
  return function(b) {
    return function(a) {
      return f(a)(b);
    };
  };
};
var $$const = function(a) {
  return function(v) {
    return a;
  };
};

// output/Data.Functor/foreign.js
var arrayMap = function(f) {
  return function(arr) {
    var l = arr.length;
    var result = new Array(l);
    for (var i = 0; i < l; i++) {
      result[i] = f(arr[i]);
    }
    return result;
  };
};

// output/Data.Unit/foreign.js
var unit = void 0;

// output/Data.Functor/index.js
var map = function(dict) {
  return dict.map;
};
var $$void = function(dictFunctor) {
  return map(dictFunctor)($$const(unit));
};
var functorArray = {
  map: arrayMap
};

// output/Control.Apply/index.js
var apply = function(dict) {
  return dict.apply;
};
var applySecond = function(dictApply) {
  return function(a) {
    return function(b) {
      return apply(dictApply)(map(dictApply.Functor0())($$const(identity(categoryFn)))(a))(b);
    };
  };
};

// output/Control.Applicative/index.js
var pure = function(dict) {
  return dict.pure;
};
var liftA1 = function(dictApplicative) {
  return function(f) {
    return function(a) {
      return apply(dictApplicative.Apply0())(pure(dictApplicative)(f))(a);
    };
  };
};

// output/Control.Bind/index.js
var bind = function(dict) {
  return dict.bind;
};
var composeKleisli = function(dictBind) {
  return function(f) {
    return function(g) {
      return function(a) {
        return bind(dictBind)(f(a))(g);
      };
    };
  };
};

// output/Data.Array/foreign.js
var range = function(start) {
  return function(end) {
    var step = start > end ? -1 : 1;
    var result = new Array(step * (end - start) + 1);
    var i = start, n = 0;
    while (i !== end) {
      result[n++] = i;
      i += step;
    }
    result[n] = i;
    return result;
  };
};
var replicateFill = function(count) {
  return function(value) {
    if (count < 1) {
      return [];
    }
    var result = new Array(count);
    return result.fill(value);
  };
};
var replicatePolyfill = function(count) {
  return function(value) {
    var result = [];
    var n = 0;
    for (var i = 0; i < count; i++) {
      result[n++] = value;
    }
    return result;
  };
};
var replicate = typeof Array.prototype.fill === "function" ? replicateFill : replicatePolyfill;
var fromFoldableImpl = function() {
  function Cons(head, tail) {
    this.head = head;
    this.tail = tail;
  }
  var emptyList = {};
  function curryCons(head) {
    return function(tail) {
      return new Cons(head, tail);
    };
  }
  function listToArray(list) {
    var result = [];
    var count = 0;
    var xs = list;
    while (xs !== emptyList) {
      result[count++] = xs.head;
      xs = xs.tail;
    }
    return result;
  }
  return function(foldr2) {
    return function(xs) {
      return listToArray(foldr2(curryCons)(emptyList)(xs));
    };
  };
}();
var sortByImpl = function() {
  function mergeFromTo(compare2, fromOrdering, xs1, xs2, from, to) {
    var mid;
    var i;
    var j;
    var k;
    var x;
    var y;
    var c;
    mid = from + (to - from >> 1);
    if (mid - from > 1)
      mergeFromTo(compare2, fromOrdering, xs2, xs1, from, mid);
    if (to - mid > 1)
      mergeFromTo(compare2, fromOrdering, xs2, xs1, mid, to);
    i = from;
    j = mid;
    k = from;
    while (i < mid && j < to) {
      x = xs2[i];
      y = xs2[j];
      c = fromOrdering(compare2(x)(y));
      if (c > 0) {
        xs1[k++] = y;
        ++j;
      } else {
        xs1[k++] = x;
        ++i;
      }
    }
    while (i < mid) {
      xs1[k++] = xs2[i++];
    }
    while (j < to) {
      xs1[k++] = xs2[j++];
    }
  }
  return function(compare2) {
    return function(fromOrdering) {
      return function(xs) {
        var out;
        if (xs.length < 2)
          return xs;
        out = xs.slice(0);
        mergeFromTo(compare2, fromOrdering, out, xs.slice(0), 0, xs.length);
        return out;
      };
    };
  };
}();

// output/Data.Semigroup/foreign.js
var concatArray = function(xs) {
  return function(ys) {
    if (xs.length === 0)
      return ys;
    if (ys.length === 0)
      return xs;
    return xs.concat(ys);
  };
};

// output/Data.Semigroup/index.js
var semigroupArray = {
  append: concatArray
};
var append = function(dict) {
  return dict.append;
};

// output/Control.Monad/index.js
var ap = function(dictMonad) {
  return function(f) {
    return function(a) {
      return bind(dictMonad.Bind1())(f)(function(f$prime) {
        return bind(dictMonad.Bind1())(a)(function(a$prime) {
          return pure(dictMonad.Applicative0())(f$prime(a$prime));
        });
      });
    };
  };
};

// output/Data.Bounded/foreign.js
var topChar = String.fromCharCode(65535);
var bottomChar = String.fromCharCode(0);
var topNumber = Number.POSITIVE_INFINITY;
var bottomNumber = Number.NEGATIVE_INFINITY;

// output/Data.Show/foreign.js
var showIntImpl = function(n) {
  return n.toString();
};

// output/Data.Show/index.js
var showInt = {
  show: showIntImpl
};
var show = function(dict) {
  return dict.show;
};

// output/Data.Maybe/index.js
var Nothing = /* @__PURE__ */ function() {
  function Nothing2() {
  }
  ;
  Nothing2.value = new Nothing2();
  return Nothing2;
}();
var Just = /* @__PURE__ */ function() {
  function Just2(value0) {
    this.value0 = value0;
  }
  ;
  Just2.create = function(value0) {
    return new Just2(value0);
  };
  return Just2;
}();

// output/Data.Monoid/index.js
var mempty = function(dict) {
  return dict.mempty;
};

// output/Effect/foreign.js
var pureE = function(a) {
  return function() {
    return a;
  };
};
var bindE = function(a) {
  return function(f) {
    return function() {
      return f(a())();
    };
  };
};

// output/Effect/index.js
var $runtime_lazy = function(name, moduleName, init) {
  var state = 0;
  var val;
  return function(lineNumber) {
    if (state === 2)
      return val;
    if (state === 1)
      throw new ReferenceError(name + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
    state = 1;
    val = init();
    state = 2;
    return val;
  };
};
var monadEffect = {
  Applicative0: function() {
    return applicativeEffect;
  },
  Bind1: function() {
    return bindEffect;
  }
};
var bindEffect = {
  bind: bindE,
  Apply0: function() {
    return $lazy_applyEffect(0);
  }
};
var applicativeEffect = {
  pure: pureE,
  Apply0: function() {
    return $lazy_applyEffect(0);
  }
};
var $lazy_functorEffect = /* @__PURE__ */ $runtime_lazy("functorEffect", "Effect", function() {
  return {
    map: liftA1(applicativeEffect)
  };
});
var $lazy_applyEffect = /* @__PURE__ */ $runtime_lazy("applyEffect", "Effect", function() {
  return {
    apply: ap(monadEffect),
    Functor0: function() {
      return $lazy_functorEffect(0);
    }
  };
});
var functorEffect = /* @__PURE__ */ $lazy_functorEffect(20);

// output/Data.Array.ST/foreign.js
var sortByImpl2 = function() {
  function mergeFromTo(compare2, fromOrdering, xs1, xs2, from, to) {
    var mid;
    var i;
    var j;
    var k;
    var x;
    var y;
    var c;
    mid = from + (to - from >> 1);
    if (mid - from > 1)
      mergeFromTo(compare2, fromOrdering, xs2, xs1, from, mid);
    if (to - mid > 1)
      mergeFromTo(compare2, fromOrdering, xs2, xs1, mid, to);
    i = from;
    j = mid;
    k = from;
    while (i < mid && j < to) {
      x = xs2[i];
      y = xs2[j];
      c = fromOrdering(compare2(x)(y));
      if (c > 0) {
        xs1[k++] = y;
        ++j;
      } else {
        xs1[k++] = x;
        ++i;
      }
    }
    while (i < mid) {
      xs1[k++] = xs2[i++];
    }
    while (j < to) {
      xs1[k++] = xs2[j++];
    }
  }
  return function(compare2) {
    return function(fromOrdering) {
      return function(xs) {
        return function() {
          if (xs.length < 2)
            return xs;
          mergeFromTo(compare2, fromOrdering, xs, xs.slice(0), 0, xs.length);
          return xs;
        };
      };
    };
  };
}();

// output/Data.Foldable/foreign.js
var foldrArray = function(f) {
  return function(init) {
    return function(xs) {
      var acc = init;
      var len = xs.length;
      for (var i = len - 1; i >= 0; i--) {
        acc = f(xs[i])(acc);
      }
      return acc;
    };
  };
};
var foldlArray = function(f) {
  return function(init) {
    return function(xs) {
      var acc = init;
      var len = xs.length;
      for (var i = 0; i < len; i++) {
        acc = f(acc)(xs[i]);
      }
      return acc;
    };
  };
};

// output/Data.Foldable/index.js
var foldr = function(dict) {
  return dict.foldr;
};
var traverse_ = function(dictApplicative) {
  return function(dictFoldable) {
    return function(f) {
      return foldr(dictFoldable)(function() {
        var $316 = applySecond(dictApplicative.Apply0());
        return function($317) {
          return $316(f($317));
        };
      }())(pure(dictApplicative)(unit));
    };
  };
};
var for_ = function(dictApplicative) {
  return function(dictFoldable) {
    return flip(traverse_(dictApplicative)(dictFoldable));
  };
};
var foldMapDefaultR = function(dictFoldable) {
  return function(dictMonoid) {
    return function(f) {
      return foldr(dictFoldable)(function(x) {
        return function(acc) {
          return append(dictMonoid.Semigroup0())(f(x))(acc);
        };
      })(mempty(dictMonoid));
    };
  };
};
var foldableArray = {
  foldr: foldrArray,
  foldl: foldlArray,
  foldMap: function(dictMonoid) {
    return foldMapDefaultR(foldableArray)(dictMonoid);
  }
};

// output/Data.Traversable/foreign.js
var traverseArrayImpl = function() {
  function array1(a) {
    return [a];
  }
  function array2(a) {
    return function(b) {
      return [a, b];
    };
  }
  function array3(a) {
    return function(b) {
      return function(c) {
        return [a, b, c];
      };
    };
  }
  function concat2(xs) {
    return function(ys) {
      return xs.concat(ys);
    };
  }
  return function(apply2) {
    return function(map2) {
      return function(pure2) {
        return function(f) {
          return function(array) {
            function go(bot, top2) {
              switch (top2 - bot) {
                case 0:
                  return pure2([]);
                case 1:
                  return map2(array1)(f(array[bot]));
                case 2:
                  return apply2(map2(array2)(f(array[bot])))(f(array[bot + 1]));
                case 3:
                  return apply2(apply2(map2(array3)(f(array[bot])))(f(array[bot + 1])))(f(array[bot + 2]));
                default:
                  var pivot = bot + Math.floor((top2 - bot) / 4) * 2;
                  return apply2(map2(concat2)(go(bot, pivot)))(go(pivot, top2));
              }
            }
            return go(0, array.length);
          };
        };
      };
    };
  };
}();

// output/Data.Traversable/index.js
var traverse = function(dict) {
  return dict.traverse;
};
var sequenceDefault = function(dictTraversable) {
  return function(dictApplicative) {
    return traverse(dictTraversable)(dictApplicative)(identity(categoryFn));
  };
};
var traversableArray = {
  traverse: function(dictApplicative) {
    return traverseArrayImpl(apply(dictApplicative.Apply0()))(map(dictApplicative.Apply0().Functor0()))(pure(dictApplicative));
  },
  sequence: function(dictApplicative) {
    return sequenceDefault(traversableArray)(dictApplicative);
  },
  Functor0: function() {
    return functorArray;
  },
  Foldable1: function() {
    return foldableArray;
  }
};
var sequence = function(dict) {
  return dict.sequence;
};

// output/Data.Int/foreign.js
var toNumber = function(n) {
  return n;
};

// output/Effect.Class/index.js
var monadEffectEffect = {
  liftEffect: /* @__PURE__ */ identity(categoryFn),
  Monad0: function() {
    return monadEffect;
  }
};
var liftEffect = function(dict) {
  return dict.liftEffect;
};

// output/Effect.Console/foreign.js
var log2 = function(s) {
  return function() {
    console.log(s);
  };
};

// output/Effect.Class.Console/index.js
var log3 = function(dictMonadEffect) {
  var $33 = liftEffect(dictMonadEffect);
  return function($34) {
    return $33(log2($34));
  };
};

// output/Data.Foreign.EasyFFI/foreign.js
function unsafeForeignProcedure(args) {
  return function(stmt) {
    return Function(wrap(args.slice()))();
    function wrap() {
      return !args.length ? stmt : "return function (" + args.shift() + ") { " + wrap() + " };";
    }
  };
}

// output/Data.Foreign.EasyFFI/index.js
var unsafeForeignFunction = function(args) {
  return function(expr) {
    return unsafeForeignProcedure(args)("return " + (expr + ";"));
  };
};

// output/Data.Nullable/foreign.js
function nullable(a, r, f) {
  return a == null ? r : f(a);
}

// output/Data.Nullable/index.js
var toMaybe = function(n) {
  return nullable(n, Nothing.value, Just.create);
};

// output/Utils.FFI/index.js
var setProperty = function(name) {
  return function(value) {
    return function(obj) {
      return unsafeForeignFunction(["v1", "obj", ""])("obj." + (name + " = v1"))(value)(obj);
    };
  };
};
var getProperty = function(name) {
  return function(obj) {
    return unsafeForeignFunction(["obj", ""])("obj." + name)(obj);
  };
};
var argsN = function(n) {
  var values = function() {
    var $0 = n < 1;
    if ($0) {
      return [];
    }
    ;
    return map(functorArray)(function(i) {
      return "v" + show(showInt)(i);
    })(range(1)(n));
  }();
  return append(semigroupArray)(values)(["obj", ""]);
};
var return0 = function(expr) {
  return function(obj) {
    return unsafeForeignFunction(argsN(0))("obj." + expr)(obj);
  };
};
var method0 = function(expr) {
  return function(obj) {
    return function __do2() {
      $$void(functorEffect)(return0(expr)(obj))();
      return obj;
    };
  };
};
var return1 = function(expr) {
  return function(v1) {
    return function(obj) {
      return unsafeForeignFunction(argsN(1))("obj." + expr)(v1)(obj);
    };
  };
};
var getNullable = function(expr) {
  return function(obj) {
    return return1(expr)(obj);
  };
};
var safeGet = function(k) {
  return function(obj) {
    return function __do2() {
      var v = getNullable("children.getByName(v1)")(k)(obj)();
      return toMaybe(v);
    };
  };
};
var method1 = function(expr) {
  return function(value) {
    return function(obj) {
      return function __do2() {
        $$void(functorEffect)(return1(expr)(value)(obj))();
        return obj;
      };
    };
  };
};
var return2 = function(expr) {
  return function(v1) {
    return function(v2) {
      return function(obj) {
        return unsafeForeignFunction(argsN(2))("obj." + expr)(v1)(v2)(obj);
      };
    };
  };
};
var method2 = function(expr) {
  return function(v1) {
    return function(v2) {
      return function(obj) {
        return function __do2() {
          $$void(functorEffect)(return2(expr)(v1)(v2)(obj))();
          return obj;
        };
      };
    };
  };
};
var return3 = function(expr) {
  return function(v1) {
    return function(v2) {
      return function(v3) {
        return function(obj) {
          return unsafeForeignFunction(argsN(3))("obj." + expr)(v1)(v2)(v3)(obj);
        };
      };
    };
  };
};
var method3 = function(expr) {
  return function(v1) {
    return function(v2) {
      return function(v3) {
        return function(obj) {
          return function __do2() {
            $$void(functorEffect)(return3(expr)(v1)(v2)(v3)(obj))();
            return obj;
          };
        };
      };
    };
  };
};
var return4 = function(expr) {
  return function(v1) {
    return function(v2) {
      return function(v3) {
        return function(v4) {
          return function(obj) {
            return unsafeForeignFunction(argsN(4))("obj." + expr)(v1)(v2)(v3)(v4)(obj);
          };
        };
      };
    };
  };
};

// output/Graphics.Phaser/index.js
var setDimentions = function(v) {
  return function(game) {
    return function __do2() {
      setProperty("config.width=v1")(v.width)(game)();
      setProperty("config.height=v1")(v.height)(game)();
      return game;
    };
  };
};
var createWithConfig = /* @__PURE__ */ unsafeForeignProcedure(["config", ""])("return new Phaser.Game(config)");
var addScene = /* @__PURE__ */ method3("scene.add(v1,v2,v3)");

// output/Graphics.Phaser.ArcadePhysics/index.js
var setVelocityY = function() {
  return method1("body.setVelocityY(v1)");
};
var setVelocityX = function() {
  return method1("body.setVelocityX(v1)");
};
var setImmovable = function() {
  return method1("setImmovable(v1)");
};
var setCollideWorldBounds = function() {
  return method1("setCollideWorldBounds(v1)");
};
var setBounce = function() {
  return method1("body.setVelocityY(v1)");
};
var setAllowGravity = function() {
  return method1("body.setAllowGravity(v1)");
};
var refreshBody = function() {
  return method0("refreshBody()");
};
var getTouching = function() {
  return getProperty("body.touching");
};
var disableBody = function() {
  return method0("disableBody(true,true)");
};
var createStaticGroup = /* @__PURE__ */ return0("add.staticGroup()");
var createChild = function() {
  return return2("create(v1.x,v1.y,v2)");
};
var createArcadeSprite = /* @__PURE__ */ return2("add.sprite(v1.x,v1.y,v2)");
var createArcadeImage = /* @__PURE__ */ return2("add.image(v1.x,v1.y,v2)");
var addOverlap = function() {
  return function() {
    return function() {
      return function() {
        return method3("add.overlap(v1,v2,(a,b)=>v3(a)(b)())");
      };
    };
  };
};
var addCollider = function() {
  return function() {
    return method2("add.collider(v1,v2)");
  };
};

// output/Graphics.Phaser.GameObject/index.js
var setScale = function() {
  return method1("setScale(v1.x,v1.y)");
};
var setPosition = function() {
  return method1("setPosition(v1.x,v1.y)");
};
var setName = function() {
  return method1("setName(v1)");
};
var getX = function() {
  return getProperty("x");
};

// output/Graphics.Phaser.Image/index.js
var create = /* @__PURE__ */ return1("add.image(0, 0, v1)");

// output/Graphics.Phaser.Input/index.js
var isDown = /* @__PURE__ */ getProperty("isDown");
var createCursorKeys = /* @__PURE__ */ return0("input.keyboard.createCursorKeys()");

// output/Graphics.Phaser.Loader/index.js
var loadSpritesheet = /* @__PURE__ */ method2("load.spritesheet(v1.key,v1.path,v2)");
var loadImage = /* @__PURE__ */ method1("load.image(v1.key,v1.path)");

// output/Graphics.Phaser.Scene/index.js
var update = function(callback) {
  return function(scene) {
    return function __do2() {
      $$void(functorEffect)(unsafeForeignProcedure(["callback", "scene", ""])("scene.update = (time,delta) => callback(scene)()")(callback)(scene))();
      return scene;
    };
  };
};
var preload = function(callback) {
  return function(scene) {
    return function __do2() {
      $$void(functorEffect)(unsafeForeignProcedure(["callback", "scene", ""])("scene.preload = () => callback(scene)()")(callback)(scene))();
      return scene;
    };
  };
};
var newScene = /* @__PURE__ */ unsafeForeignProcedure(["key", ""])("return new Phaser.Scene(key)");
var getPhysicsPlugin = /* @__PURE__ */ getProperty("physics");
var getChildByName = function() {
  return safeGet;
};
var create2 = function(callback) {
  return function(scene) {
    return function __do2() {
      $$void(functorEffect)(unsafeForeignProcedure(["callback", "scene", ""])("scene.create = (data) => callback(scene)()")(callback)(scene))();
      return scene;
    };
  };
};

// output/Graphics.Phaser.Sprite/index.js
var playAnimation = function() {
  return method1("anims.play(v1.key,v1.ignoreIfPlaying)");
};
var generateFrameNumbers = /* @__PURE__ */ return3("anims.generateFrameNumbers(v1, {start: v2, end: v3})");
var createAnimation = /* @__PURE__ */ return4("anims.create({ key: v1, frames: v2, frameRate: v3, repeat: v4, })");

// output/Main/index.js
var onpreload = function(scene) {
  return function __do2() {
    for_(applicativeEffect)(foldableArray)(["sky", "platform", "star"])(function(key) {
      return bind(bindEffect)(loadImage({
        key,
        path: "https://raw.githubusercontent.com/photonstorm/phaser3-examples/master/public/src/games/firstgame/assets/" + (key + ".png")
      })(scene))(loadSpritesheet({
        key: "dude",
        path: "https://raw.githubusercontent.com/photonstorm/phaser3-examples/master/public/src/games/firstgame/assets/dude.png"
      })({
        frameWidth: 32,
        frameHeight: 48
      }));
    })();
    return scene;
  };
};
var move = function() {
  return function() {
    return function(cursors) {
      return function(sprite) {
        var stop = bind(bindEffect)(setVelocityX()(0)(sprite))(playAnimation()({
          key: "turn",
          ignoreIfPlaying: false
        }));
        var moveRight = bind(bindEffect)(setVelocityX()(150)(sprite))(playAnimation()({
          key: "right",
          ignoreIfPlaying: true
        }));
        var moveLeft = bind(bindEffect)(setVelocityX()(-150)(sprite))(playAnimation()({
          key: "left",
          ignoreIfPlaying: true
        }));
        return $$void(functorEffect)(function __do2() {
          var isRight = isDown(cursors.right)();
          var isLeft = isDown(cursors.left)();
          if (isRight) {
            return moveRight();
          }
          ;
          if (isLeft) {
            return moveLeft();
          }
          ;
          return stop();
        });
      };
    };
  };
};
var getPlayer = function(scene) {
  return getChildByName()("player")(scene);
};
var getPlatform = function(scene) {
  return getChildByName()("moving_platform")(scene);
};
var update2 = function(cursors) {
  return function(scene) {
    var movePlayer = function() {
      var jump = setVelocityY()(-350);
      return function __do2() {
        var player = getPlayer(scene)();
        if (player instanceof Just) {
          return $$void(functorEffect)(function __do3() {
            var touching = getTouching()(player.value0)();
            var isUp = isDown(cursors.up)();
            move()()(cursors)(player.value0)();
            var $3 = isUp && touching.down;
            if ($3) {
              return jump(player.value0)();
            }
            ;
            return player.value0;
          })();
        }
        ;
        if (player instanceof Nothing) {
          return log3(monadEffectEffect)("Sprite not found!")();
        }
        ;
        throw new Error("Failed pattern match at Main (line 132, column 5 - line 142, column 41): " + [player.constructor.name]);
      };
    }();
    var movePlatform = function __do2() {
      var platform = getPlatform(scene)();
      if (platform instanceof Just) {
        var x = getX()(platform.value0)();
        (function() {
          var $6 = x >= 500;
          if ($6) {
            return $$void(functorEffect)(setVelocityX()(-50)(platform.value0))();
          }
          ;
          return unit;
        })();
        var $7 = x <= 300;
        if ($7) {
          return $$void(functorEffect)(setVelocityX()(50)(platform.value0))();
        }
        ;
        return unit;
      }
      ;
      if (platform instanceof Nothing) {
        return log3(monadEffectEffect)("Platform image not found!")();
      }
      ;
      throw new Error("Failed pattern match at Main (line 148, column 5 - line 159, column 49): " + [platform.constructor.name]);
    };
    return function __do2() {
      movePlayer();
      movePlatform();
      return scene;
    };
  };
};
var collectStar = function(_a) {
  return function(b) {
    return bind(bindEffect)(disableBody()(b))($$const(pure(applicativeEffect)(unit)));
  };
};
var oncreate = function(scene) {
  var setupCollisions = function(player) {
    return function(stars) {
      return function(platformsGroup) {
        return function(movingPlatform) {
          return composeKleisli(bindEffect)(addCollider()()(player)(platformsGroup))(composeKleisli(bindEffect)(addCollider()()(player)(movingPlatform))(composeKleisli(bindEffect)(addCollider()()(stars)(movingPlatform))(composeKleisli(bindEffect)(addCollider()()(stars)(platformsGroup))(addOverlap()()()()(player)(stars)(collectStar)))));
        };
      };
    };
  };
  var createStars = function(phy) {
    return function __do2() {
      var starsEff = sequence(traversableArray)(applicativeEffect)(map(functorArray)(function(n) {
        return bind(bindEffect)(bind(bindEffect)(createArcadeImage({
          x: 50 + toNumber(n) * 40,
          y: 100
        })("star")(phy))(setBounce()(0.4)))(setCollideWorldBounds()(true));
      })(range(1)(15)))();
      return starsEff;
    };
  };
  var createPlayer = function(phy) {
    return bind(bindEffect)(bind(bindEffect)(bind(bindEffect)(createArcadeSprite({
      x: 50,
      y: 500
    })("dude")(phy))(setBounce()(0.4)))(setCollideWorldBounds()(true)))(setName()("player"));
  };
  var createPlatform = function(phy) {
    return bind(bindEffect)(bind(bindEffect)(bind(bindEffect)(bind(bindEffect)(createArcadeImage({
      x: 400,
      y: 400
    })("platform")(phy))(setImmovable()(true)))(setAllowGravity()(false)))(setVelocityX()(50)))(setName()("moving_platform"));
  };
  var createFloor = function(group) {
    return $$void(functorEffect)(bind(bindEffect)(bind(bindEffect)(createChild()({
      x: 400,
      y: 568
    })("platform")(group))(setScale()({
      x: 2,
      y: 2
    })))(refreshBody()));
  };
  var createBg = $$void(functorEffect)(bind(bindEffect)(create("sky")(scene))(setPosition()({
    x: 400,
    y: 300
  })));
  var createAnimations = $$void(functorEffect)(function __do2() {
    var leftWalkFrames = generateFrameNumbers("dude")(0)(3)(scene)();
    var rightWalkFrames = generateFrameNumbers("dude")(5)(8)(scene)();
    $$void(functorEffect)(createAnimation("left")(leftWalkFrames)(10)(-1 | 0)(scene))();
    $$void(functorEffect)(createAnimation("turn")([{
      key: "dude",
      frame: 4
    }])(10)(-1 | 0)(scene))();
    return $$void(functorEffect)(createAnimation("right")(rightWalkFrames)(10)(-1 | 0)(scene))();
  });
  return function __do2() {
    var phy = getPhysicsPlugin(scene)();
    createBg();
    var platformsGroup = createStaticGroup(phy)();
    createFloor(platformsGroup)();
    var movingPlatform = createPlatform(phy)();
    var player = createPlayer(phy)();
    var stars = createStars(phy)();
    var cursors = createCursorKeys(scene)();
    createAnimations();
    $$void(functorEffect)(setupCollisions(player)(stars)(platformsGroup)(movingPlatform)(phy))();
    return update(function(scn) {
      return update2(cursors)(scn);
    })(scene)();
  };
};
var mainScene = /* @__PURE__ */ bind(bindEffect)(/* @__PURE__ */ bind(bindEffect)(/* @__PURE__ */ newScene("main"))(/* @__PURE__ */ create2(oncreate)))(/* @__PURE__ */ preload(onpreload));
var main = function __do() {
  var scene = mainScene();
  return bind(bindEffect)(bind(bindEffect)(createWithConfig({}))(setDimentions({
    width: 800,
    height: 600
  })))(addScene("main")(scene)(true))();
};

// <stdin>
main();