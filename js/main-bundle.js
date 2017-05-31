System.register('components/siteNav.js', [], function (_export) {
	'use strict';

	var siteNav;
	return {
		setters: [],
		execute: function () {
			siteNav = function siteNav(config) {

				if (config.headerEl !== null) {
					(function () {
						var init = function init() {
							navTriggerEl.addEventListener('click', navToggle);
							primaryNavEl.addEventListener('click', closeNav);
						};

						var navToggle = function navToggle(e) {
							e.preventDefault();
							config.bodyEl.classList.toggle('is-open');
						};

						var closeNav = function closeNav(e) {
							var clickedEl = e.target;
							if (clickedEl.classList.contains('js-section-anchor')) {
								navToggle(e);
							}
						};

						var navTriggerEl = config.headerEl.querySelector('.js-primary-nav__toggle'),
						    primaryNavEl = config.headerEl.querySelector('.js-primary-nav__list');

						init();
					})();
				}
			};

			_export('default', siteNav);
		}
	};
});

System.register("github:DEGJS/easing@1.0.1/easing.js", [], function (_export) {
	/* */
	"use strict";

	_export("linear", linear);

	_export("easeInOutCubic", easeInOutCubic);

	_export("easeOutCubic", easeOutCubic);

	_export("easeInCubic", easeInCubic);

	function linear(currentIteration, startValue, changeInValue, totalIterations) {
		return changeInValue * currentIteration / totalIterations + startValue;
	}

	function easeInOutCubic(currentIteration, startValue, changeInValue, totalIterations) {
		if ((currentIteration /= totalIterations / 2) < 1) {
			return changeInValue / 2 * Math.pow(currentIteration, 3) + startValue;
		}
		return changeInValue / 2 * (Math.pow(currentIteration - 2, 3) + 2) + startValue;
	}

	function easeOutCubic(currentIteration, startValue, changeInValue, totalIterations) {
		return changeInValue * (Math.pow(currentIteration / totalIterations - 1, 3) + 1) + startValue;
	}

	function easeInCubic(currentIteration, startValue, changeInValue, totalIterations) {
		return changeInValue * Math.pow(currentIteration / totalIterations, 3) + startValue;
	}

	return {
		setters: [],
		execute: function () {}
	};
});

System.register("github:DEGJS/easing@1.0.1.js", ["github:DEGJS/easing@1.0.1/easing.js"], function (_export) {
  "use strict";

  return {
    setters: [function (_githubDEGJSEasing101EasingJs) {
      var _exportObj = {};

      for (var _key in _githubDEGJSEasing101EasingJs) {
        if (_key !== "default") _exportObj[_key] = _githubDEGJSEasing101EasingJs[_key];
      }

      _exportObj["default"] = _githubDEGJSEasing101EasingJs["default"];

      _export(_exportObj);
    }],
    execute: function () {}
  };
});

System.register("github:DEGJS/scrollTo@1.0.1/scrollTo.js", ["npm:babel-runtime@5.8.38/core-js/object/assign.js", "github:DEGJS/easing@1.0.1.js"], function (_export) {
    var _Object$assign, easing, scrollTo;

    return {
        setters: [function (_npmBabelRuntime5838CoreJsObjectAssignJs) {
            _Object$assign = _npmBabelRuntime5838CoreJsObjectAssignJs["default"];
        }, function (_githubDEGJSEasing101Js) {
            easing = _githubDEGJSEasing101Js;
        }],
        execute: function () {
            /* */
            "use strict";

            scrollTo = function scrollTo(options) {

                var fps = 60;

                var currentIteration = 0,
                    totalIterations = undefined,
                    initialPosition = undefined,
                    totalPositionChange = undefined,
                    easingFunction = undefined,
                    settings = undefined,
                    defaults = {
                    element: null,
                    position: null,
                    duration: 500,
                    easing: 'easeOut'
                };;

                function init() {
                    settings = _Object$assign({}, defaults, options);

                    var finalPosition = getFinalPosition();

                    if (!window.requestAnimationFrame || settings.duration === 0) {
                        move(finalPosition);
                    } else {

                        initialPosition = getInitialPosition();
                        totalIterations = Math.ceil(fps * (settings.duration / 1000));
                        totalPositionChange = finalPosition - initialPosition;
                        easingFunction = getEasingFunction();

                        animateScroll();
                    }
                }

                function move(amount) {
                    document.documentElement.scrollTop = amount;
                    document.body.parentNode.scrollTop = amount;
                    document.body.scrollTop = amount;
                }

                function getFinalPosition() {
                    var finalPosition = settings.element ? settings.element.offsetTop : settings.position;
                    var viewportHeight = getViewportHeight();
                    var documentHeight = getDocumentHeight();
                    var maxPosition = documentHeight - viewportHeight;

                    if (finalPosition > maxPosition) {
                        finalPosition = maxPosition;
                    }

                    return finalPosition;
                }

                function getInitialPosition() {
                    return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
                }

                function getViewportHeight() {
                    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                }

                function getDocumentHeight() {
                    return Math.max(document.documentElement.clientHeight, document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight);
                }

                function animateScroll() {

                    if (currentIteration < totalIterations) {
                        currentIteration++;

                        var val = Math.round(easingFunction(currentIteration, initialPosition, totalPositionChange, totalIterations));

                        move(val);

                        window.requestAnimationFrame(animateScroll);
                    }
                };

                function getEasingFunction() {
                    switch (settings.easing) {
                        case "easeOut":
                            return easing.easeOutCubic;
                        case "easeInOut":
                            return easing.easeInOutCubic;
                        case "easeIn":
                            return easing.easeInCubic;
                        default:
                            return easing.linear;
                    }
                }

                init();
            };

            _export("default", scrollTo);
        }
    };
});

System.register("github:DEGJS/scrollTo@1.0.1.js", ["github:DEGJS/scrollTo@1.0.1/scrollTo.js"], function (_export) {
  "use strict";

  return {
    setters: [function (_githubDEGJSScrollTo101ScrollToJs) {
      var _exportObj = {};

      for (var _key in _githubDEGJSScrollTo101ScrollToJs) {
        if (_key !== "default") _exportObj[_key] = _githubDEGJSScrollTo101ScrollToJs[_key];
      }

      _exportObj["default"] = _githubDEGJSScrollTo101ScrollToJs["default"];

      _export(_exportObj);
    }],
    execute: function () {}
  };
});

System.register('components/sectionAnchors.js', ['github:DEGJS/scrollTo@1.0.1.js'], function (_export) {
	'use strict';

	var scrollTo, sectionAnchors;
	return {
		setters: [function (_githubDEGJSScrollTo101Js) {
			scrollTo = _githubDEGJSScrollTo101Js['default'];
		}],
		execute: function () {
			sectionAnchors = function sectionAnchors(clickCallback) {

				function init() {
					window.addEventListener('click', onWindowClick);
				}

				function onWindowClick(e) {
					if (e.target.classList.contains('js-section-anchor')) {
						e.preventDefault();

						var sectionId = e.target.getAttribute('href').replace('#', '');
						scrollToSection(sectionId);
					}
				}

				function scrollToSection(sectionId) {
					if (clickCallback && clickCallback(sectionId)) {
						return;
					}

					var sectionEl = document.querySelector('#' + sectionId);

					if (sectionEl) {
						scrollTo({
							element: sectionEl
						});
					}
				}

				init();
			};

			_export('default', sectionAnchors);
		}
	};
});

System.registerDynamic('npm:core-js@1.2.7/library/modules/$.string-at.js', ['npm:core-js@1.2.7/library/modules/$.to-integer.js', 'npm:core-js@1.2.7/library/modules/$.defined.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toInteger = $__require('npm:core-js@1.2.7/library/modules/$.to-integer.js'),
      defined = $__require('npm:core-js@1.2.7/library/modules/$.defined.js');
  module.exports = function (TO_STRING) {
    return function (that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.library.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = true;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.redefine.js', ['npm:core-js@1.2.7/library/modules/$.hide.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.hide.js');
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.property-desc.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.descriptors.js', ['npm:core-js@1.2.7/library/modules/$.fails.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = !$__require('npm:core-js@1.2.7/library/modules/$.fails.js')(function () {
    return Object.defineProperty({}, 'a', { get: function () {
        return 7;
      } }).a != 7;
  });
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.hide.js', ['npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.property-desc.js', 'npm:core-js@1.2.7/library/modules/$.descriptors.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('npm:core-js@1.2.7/library/modules/$.js'),
      createDesc = $__require('npm:core-js@1.2.7/library/modules/$.property-desc.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.descriptors.js') ? function (object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.iter-create.js', ['npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.property-desc.js', 'npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js', 'npm:core-js@1.2.7/library/modules/$.hide.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var $ = $__require('npm:core-js@1.2.7/library/modules/$.js'),
      descriptor = $__require('npm:core-js@1.2.7/library/modules/$.property-desc.js'),
      setToStringTag = $__require('npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js'),
      IteratorPrototype = {};
  $__require('npm:core-js@1.2.7/library/modules/$.hide.js')(IteratorPrototype, $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('iterator'), function () {
    return this;
  });
  module.exports = function (Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, { next: descriptor(1, next) });
    setToStringTag(Constructor, NAME + ' Iterator');
  };
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.has.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function (it, key) {
    return hasOwnProperty.call(it, key);
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js', ['npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.has.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var def = $__require('npm:core-js@1.2.7/library/modules/$.js').setDesc,
      has = $__require('npm:core-js@1.2.7/library/modules/$.has.js'),
      TAG = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('toStringTag');
  module.exports = function (it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
      configurable: true,
      value: tag
    });
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.iter-define.js', ['npm:core-js@1.2.7/library/modules/$.library.js', 'npm:core-js@1.2.7/library/modules/$.export.js', 'npm:core-js@1.2.7/library/modules/$.redefine.js', 'npm:core-js@1.2.7/library/modules/$.hide.js', 'npm:core-js@1.2.7/library/modules/$.has.js', 'npm:core-js@1.2.7/library/modules/$.iterators.js', 'npm:core-js@1.2.7/library/modules/$.iter-create.js', 'npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js', 'npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var LIBRARY = $__require('npm:core-js@1.2.7/library/modules/$.library.js'),
      $export = $__require('npm:core-js@1.2.7/library/modules/$.export.js'),
      redefine = $__require('npm:core-js@1.2.7/library/modules/$.redefine.js'),
      hide = $__require('npm:core-js@1.2.7/library/modules/$.hide.js'),
      has = $__require('npm:core-js@1.2.7/library/modules/$.has.js'),
      Iterators = $__require('npm:core-js@1.2.7/library/modules/$.iterators.js'),
      $iterCreate = $__require('npm:core-js@1.2.7/library/modules/$.iter-create.js'),
      setToStringTag = $__require('npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js'),
      getProto = $__require('npm:core-js@1.2.7/library/modules/$.js').getProto,
      ITERATOR = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function () {
    return this;
  };
  module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
    if ($native) {
      var IteratorPrototype = getProto($default.call(new Base()));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
      if (DEF_VALUES && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: !DEF_VALUES ? $default : getMethod('entries')
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) redefine(proto, key, methods[key]);
      } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/es6.string.iterator.js', ['npm:core-js@1.2.7/library/modules/$.string-at.js', 'npm:core-js@1.2.7/library/modules/$.iter-define.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var $at = $__require('npm:core-js@1.2.7/library/modules/$.string-at.js')(true);
  $__require('npm:core-js@1.2.7/library/modules/$.iter-define.js')(String, 'String', function (iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function () {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length) return {
      value: undefined,
      done: true
    };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.is-object.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.an-object.js', ['npm:core-js@1.2.7/library/modules/$.is-object.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var isObject = $__require('npm:core-js@1.2.7/library/modules/$.is-object.js');
  module.exports = function (it) {
    if (!isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.iter-call.js', ['npm:core-js@1.2.7/library/modules/$.an-object.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var anObject = $__require('npm:core-js@1.2.7/library/modules/$.an-object.js');
  module.exports = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) anObject(ret.call(iterator));
      throw e;
    }
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.is-array-iter.js', ['npm:core-js@1.2.7/library/modules/$.iterators.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var Iterators = $__require('npm:core-js@1.2.7/library/modules/$.iterators.js'),
        ITERATOR = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('iterator'),
        ArrayProto = Array.prototype;
    module.exports = function (it) {
        return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
    };
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.to-integer.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // 7.1.4 ToInteger
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.to-length.js', ['npm:core-js@1.2.7/library/modules/$.to-integer.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toInteger = $__require('npm:core-js@1.2.7/library/modules/$.to-integer.js'),
      min = Math.min;
  module.exports = function (it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.classof.js', ['npm:core-js@1.2.7/library/modules/$.cof.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var cof = $__require('npm:core-js@1.2.7/library/modules/$.cof.js'),
        TAG = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('toStringTag'),
        ARG = cof(function () {
        return arguments;
    }()) == 'Arguments';
    module.exports = function (it) {
        var O, T, B;
        return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
    };
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.iterators.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = {};
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/core.get-iterator-method.js', ['npm:core-js@1.2.7/library/modules/$.classof.js', 'npm:core-js@1.2.7/library/modules/$.wks.js', 'npm:core-js@1.2.7/library/modules/$.iterators.js', 'npm:core-js@1.2.7/library/modules/$.core.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var classof = $__require('npm:core-js@1.2.7/library/modules/$.classof.js'),
        ITERATOR = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('iterator'),
        Iterators = $__require('npm:core-js@1.2.7/library/modules/$.iterators.js');
    module.exports = $__require('npm:core-js@1.2.7/library/modules/$.core.js').getIteratorMethod = function (it) {
        if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
    };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.shared.js', ['npm:core-js@1.2.7/library/modules/$.global.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var global = $__require('npm:core-js@1.2.7/library/modules/$.global.js'),
        SHARED = '__core-js_shared__',
        store = global[SHARED] || (global[SHARED] = {});
    module.exports = function (key) {
        return store[key] || (store[key] = {});
    };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.uid.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var id = 0,
      px = Math.random();
  module.exports = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.wks.js', ['npm:core-js@1.2.7/library/modules/$.shared.js', 'npm:core-js@1.2.7/library/modules/$.uid.js', 'npm:core-js@1.2.7/library/modules/$.global.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var store = $__require('npm:core-js@1.2.7/library/modules/$.shared.js')('wks'),
        uid = $__require('npm:core-js@1.2.7/library/modules/$.uid.js'),
        Symbol = $__require('npm:core-js@1.2.7/library/modules/$.global.js').Symbol;
    module.exports = function (name) {
        return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
    };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.iter-detect.js', ['npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var ITERATOR = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function () {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function () {
      throw 2;
    });
  } catch (e) {}
  module.exports = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[ITERATOR]();
      iter.next = function () {
        return { done: safe = true };
      };
      arr[ITERATOR] = function () {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/es6.array.from.js', ['npm:core-js@1.2.7/library/modules/$.ctx.js', 'npm:core-js@1.2.7/library/modules/$.export.js', 'npm:core-js@1.2.7/library/modules/$.to-object.js', 'npm:core-js@1.2.7/library/modules/$.iter-call.js', 'npm:core-js@1.2.7/library/modules/$.is-array-iter.js', 'npm:core-js@1.2.7/library/modules/$.to-length.js', 'npm:core-js@1.2.7/library/modules/core.get-iterator-method.js', 'npm:core-js@1.2.7/library/modules/$.iter-detect.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var ctx = $__require('npm:core-js@1.2.7/library/modules/$.ctx.js'),
      $export = $__require('npm:core-js@1.2.7/library/modules/$.export.js'),
      toObject = $__require('npm:core-js@1.2.7/library/modules/$.to-object.js'),
      call = $__require('npm:core-js@1.2.7/library/modules/$.iter-call.js'),
      isArrayIter = $__require('npm:core-js@1.2.7/library/modules/$.is-array-iter.js'),
      toLength = $__require('npm:core-js@1.2.7/library/modules/$.to-length.js'),
      getIterFn = $__require('npm:core-js@1.2.7/library/modules/core.get-iterator-method.js');
  $export($export.S + $export.F * !$__require('npm:core-js@1.2.7/library/modules/$.iter-detect.js')(function (iter) {
    Array.from(iter);
  }), 'Array', { from: function from(arrayLike) {
      var O = toObject(arrayLike),
          C = typeof this == 'function' ? this : Array,
          $$ = arguments,
          $$len = $$.length,
          mapfn = $$len > 1 ? $$[1] : undefined,
          mapping = mapfn !== undefined,
          index = 0,
          iterFn = getIterFn(O),
          length,
          result,
          step,
          iterator;
      if (mapping) mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
      if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
        }
      } else {
        length = toLength(O.length);
        for (result = new C(length); length > index; index++) {
          result[index] = mapping ? mapfn(O[index], index) : O[index];
        }
      }
      result.length = index;
      return result;
    } });
});
System.registerDynamic('npm:core-js@1.2.7/library/fn/array/from.js', ['npm:core-js@1.2.7/library/modules/es6.string.iterator.js', 'npm:core-js@1.2.7/library/modules/es6.array.from.js', 'npm:core-js@1.2.7/library/modules/$.core.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('npm:core-js@1.2.7/library/modules/es6.string.iterator.js');
  $__require('npm:core-js@1.2.7/library/modules/es6.array.from.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.core.js').Array.from;
});
System.registerDynamic("npm:babel-runtime@5.8.38/core-js/array/from.js", ["npm:core-js@1.2.7/library/fn/array/from.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("npm:core-js@1.2.7/library/fn/array/from.js"), __esModule: true };
});
System.register("github:DEGJS/scrollTracker@1.0.0/utils/debounce.js", [], function (_export) {
	/* */
	"use strict";

	var debounce;
	return {
		setters: [],
		execute: function () {
			debounce = function debounce(func, wait, immediate) {
				var timeout;
				return function () {
					var context = this,
					    args = arguments;
					var later = function later() {
						timeout = null;
						if (!immediate) func.apply(context, args);
					};
					var callNow = immediate && !timeout;
					clearTimeout(timeout);
					timeout = setTimeout(later, wait);
					if (callNow) func.apply(context, args);
				};
			};

			_export("default", debounce);
		}
	};
});

System.register('github:DEGJS/scrollTracker@1.0.0/offsetCalculator.js', [], function (_export) {
	/* */
	'use strict';

	function getOffsetNumber(offset) {
		return parseInt(offset.replace(/\D/g, ''));
	}

	function getOffsetUnits(offset) {
		return offset.replace(/\d/g, '');
	}

	function calculatePercentageOffset(elRect, offset) {
		var percentage = offset / 100;
		return elRect.height * percentage;
	}

	function calculateViewportHeightOffset(offset) {
		var percentage = offset / 100;
		return document.documentElement.clientHeight * percentage;
	}

	function calculateOffset(elRect, offset) {
		if (typeof offset == 'number') {
			return offset;
		}

		if (typeof offset == 'string') {
			var offsetNumber = getOffsetNumber(offset);
			var offsetUnits = getOffsetUnits(offset);

			switch (offsetUnits) {
				case "%":
					return calculatePercentageOffset(elRect, offsetNumber);
				case "vh":
					return calculateViewportHeightOffset(offsetNumber);
				default:
					return offsetNumber;
			}
		}

		return 0;
	}

	return {
		setters: [],
		execute: function () {
			_export('calculateOffset', calculateOffset);
		}
	};
});

System.registerDynamic('npm:core-js@1.2.7/library/modules/$.global.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.a-function.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.ctx.js', ['npm:core-js@1.2.7/library/modules/$.a-function.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var aFunction = $__require('npm:core-js@1.2.7/library/modules/$.a-function.js');
  module.exports = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };
      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function () {
      return fn.apply(that, arguments);
    };
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.export.js', ['npm:core-js@1.2.7/library/modules/$.global.js', 'npm:core-js@1.2.7/library/modules/$.core.js', 'npm:core-js@1.2.7/library/modules/$.ctx.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var global = $__require('npm:core-js@1.2.7/library/modules/$.global.js'),
      core = $__require('npm:core-js@1.2.7/library/modules/$.core.js'),
      ctx = $__require('npm:core-js@1.2.7/library/modules/$.ctx.js'),
      PROTOTYPE = 'prototype';
  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports) continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function (C) {
        var F = function (param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.defined.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // 7.2.1 RequireObjectCoercible(argument)
  module.exports = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.to-object.js', ['npm:core-js@1.2.7/library/modules/$.defined.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var defined = $__require('npm:core-js@1.2.7/library/modules/$.defined.js');
  module.exports = function (it) {
    return Object(defined(it));
  };
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.cof.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toString = {}.toString;

  module.exports = function (it) {
    return toString.call(it).slice(8, -1);
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.iobject.js', ['npm:core-js@1.2.7/library/modules/$.cof.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var cof = $__require('npm:core-js@1.2.7/library/modules/$.cof.js');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.fails.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.object-assign.js', ['npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.to-object.js', 'npm:core-js@1.2.7/library/modules/$.iobject.js', 'npm:core-js@1.2.7/library/modules/$.fails.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('npm:core-js@1.2.7/library/modules/$.js'),
      toObject = $__require('npm:core-js@1.2.7/library/modules/$.to-object.js'),
      IObject = $__require('npm:core-js@1.2.7/library/modules/$.iobject.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.fails.js')(function () {
    var a = Object.assign,
        A = {},
        B = {},
        S = Symbol(),
        K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function (k) {
      B[k] = k;
    });
    return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
  }) ? function assign(target, source) {
    var T = toObject(target),
        $$ = arguments,
        $$len = $$.length,
        index = 1,
        getKeys = $.getKeys,
        getSymbols = $.getSymbols,
        isEnum = $.isEnum;
    while ($$len > index) {
      var S = IObject($$[index++]),
          keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
          length = keys.length,
          j = 0,
          key;
      while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
    return T;
  } : Object.assign;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/es6.object.assign.js', ['npm:core-js@1.2.7/library/modules/$.export.js', 'npm:core-js@1.2.7/library/modules/$.object-assign.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('npm:core-js@1.2.7/library/modules/$.export.js');
  $export($export.S + $export.F, 'Object', { assign: $__require('npm:core-js@1.2.7/library/modules/$.object-assign.js') });
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.core.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var core = module.exports = { version: '1.2.6' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
System.registerDynamic('npm:core-js@1.2.7/library/fn/object/assign.js', ['npm:core-js@1.2.7/library/modules/es6.object.assign.js', 'npm:core-js@1.2.7/library/modules/$.core.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('npm:core-js@1.2.7/library/modules/es6.object.assign.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.core.js').Object.assign;
});
System.registerDynamic("npm:babel-runtime@5.8.38/core-js/object/assign.js", ["npm:core-js@1.2.7/library/fn/object/assign.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("npm:core-js@1.2.7/library/fn/object/assign.js"), __esModule: true };
});
System.register('github:DEGJS/scrollTracker@1.0.0/eventPublisher.js', ['npm:babel-runtime@5.8.38/core-js/object/assign.js', 'github:DEGJS/eventAggregator@1.0.2.js'], function (_export) {
	var _Object$assign, eventAggregator, eventNamespace, elementScrollEventName, elementInViewportChangeEventName;

	function createEventPayload(elInfo, elRect) {
		return {
			element: elInfo.el,
			rect: elRect,
			isInViewport: elInfo.isInViewport
		};
	}

	function publishEvent(eventName, payload) {
		var namespacedEventName = eventNamespace + '.' + eventName;
		var event = _Object$assign({
			type: namespacedEventName
		}, payload);

		eventAggregator.publish(event);
	}

	function publishElementScrollEvent(elInfo, elRect) {
		publishEvent(elementScrollEventName, createEventPayload(elInfo, elRect));
	}

	function publishElementInViewportChangeEvent(elInfo, elRect) {
		publishEvent(elementInViewportChangeEventName, createEventPayload(elInfo, elRect));
	}

	return {
		setters: [function (_npmBabelRuntime5838CoreJsObjectAssignJs) {
			_Object$assign = _npmBabelRuntime5838CoreJsObjectAssignJs['default'];
		}, function (_githubDEGJSEventAggregator102Js) {
			eventAggregator = _githubDEGJSEventAggregator102Js['default'];
		}],
		execute: function () {
			/* */
			'use strict';

			eventNamespace = 'scrollTracker';
			elementScrollEventName = 'elementScroll';
			elementInViewportChangeEventName = 'elementInViewportChange';

			_export('publishElementScrollEvent', publishElementScrollEvent);

			_export('publishElementInViewportChangeEvent', publishElementInViewportChangeEvent);
		}
	};
});

System.register("github:DEGJS/scrollTracker@1.0.0/scrollTracker.js", ["npm:babel-runtime@5.8.38/core-js/object/assign.js", "github:DEGJS/scrollTracker@1.0.0/utils/debounce.js", "github:DEGJS/scrollTracker@1.0.0/offsetCalculator.js", "github:DEGJS/scrollTracker@1.0.0/eventPublisher.js"], function (_export) {
	var _Object$assign, debounce, calculateOffset, publishElementScrollEvent, publishElementInViewportChangeEvent, scrollTracker;

	return {
		setters: [function (_npmBabelRuntime5838CoreJsObjectAssignJs) {
			_Object$assign = _npmBabelRuntime5838CoreJsObjectAssignJs["default"];
		}, function (_githubDEGJSScrollTracker100UtilsDebounceJs) {
			debounce = _githubDEGJSScrollTracker100UtilsDebounceJs["default"];
		}, function (_githubDEGJSScrollTracker100OffsetCalculatorJs) {
			calculateOffset = _githubDEGJSScrollTracker100OffsetCalculatorJs.calculateOffset;
		}, function (_githubDEGJSScrollTracker100EventPublisherJs) {
			publishElementScrollEvent = _githubDEGJSScrollTracker100EventPublisherJs.publishElementScrollEvent;
			publishElementInViewportChangeEvent = _githubDEGJSScrollTracker100EventPublisherJs.publishElementInViewportChangeEvent;
		}],
		execute: function () {
			/* */
			"use strict";

			scrollTracker = function scrollTracker(options) {

				var publishScrollEventsOptions = {
					never: 'never',
					inViewportOnly: 'inViewportOnly',
					always: 'always'

				};

				var isInited = false,
				    debouncedScrollHandler = undefined,
				    trackedEls = [],
				    settings = undefined,
				    defaultOptions = {
					debounceWait: 10
				},
				    defaultElOptions = {
					publishScrollEvents: publishScrollEventsOptions.never,
					offset: null
				};

				function init() {
					if (isInited) {
						return;
					}

					isInited = true;
					settings = _Object$assign({}, defaultOptions, options);
					bindScrollEvent();
				}

				function bindScrollEvent() {
					debouncedScrollHandler = debounce(handleScroll, settings.debounceWait);
					window.addEventListener('scroll', debouncedScrollHandler);
				}

				function unbindScrollEvent() {
					window.removeEventListener('scroll', debouncedScrollHandler);
				}

				function handleScroll() {
					trackedEls.forEach(handleScrollForEl);
				}

				function handleScrollForEl(elInfo) {
					var elRect = elInfo.el.getBoundingClientRect();

					var oldIsInViewport = elInfo.isInViewport;

					elInfo.isInViewport = isElementInViewport(elRect, elInfo.offset);

					if (oldIsInViewport != elInfo.isInViewport) {
						publishElementInViewportChangeEvent(elInfo, elRect);
					}

					if (shouldPublishScrollEvent(elInfo)) {
						publishElementScrollEvent(elInfo, elRect);
					}
				}

				function isElementInViewport(elRect, offset) {
					var topThreshold = window.innerHeight || document.documentElement.clientHeight;
					var bottomThreshold = 0;

					if (offset) {
						if (offset.top) {
							topThreshold -= calculateOffset(elRect, offset.top);
						}
						if (offset.bottom) {
							bottomThreshold += calculateOffset(elRect, offset.bottom);
						}
					}

					return elRect.top < topThreshold && elRect.bottom > bottomThreshold;
				}

				function shouldPublishScrollEvent(elInfo) {
					return elInfo.publishScrollEvents == publishScrollEventsOptions.always || elInfo.publishScrollEvents == publishScrollEventsOptions.inViewportOnly && elInfo.isInViewport;
				}

				function trackElement(el) {
					var elOptions = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

					var mergedElOptions = _Object$assign({}, defaultElOptions, elOptions);

					trackedEls.push({
						el: el,
						isInViewport: false,
						offset: mergedElOptions.offset,
						publishScrollEvents: mergedElOptions.publishScrollEvents
					});

					handleScrollForEl(trackedEls[trackedEls.length - 1]);

					init();
				}

				function untrackElement(el) {
					for (var i = 0; i < trackedEls.length; i++) {
						if (trackedEls[i].el === el) {
							trackedEls.splice(i, 1);
							break;
						}
					}

					if (trackedEls.length == 0) {
						unbindScrollEvent();
					}
				}

				function destroy() {
					isInited = false;
					trackedEls = [];
					debouncedScrollHandler = null;
					settings = null;
					unbindScrollEvent();
				}

				return {
					trackElement: trackElement,
					untrackElement: untrackElement,
					destroy: destroy
				};
			};

			_export("default", scrollTracker);
		}
	};
});

System.register("github:DEGJS/scrollTracker@1.0.0.js", ["github:DEGJS/scrollTracker@1.0.0/scrollTracker.js"], function (_export) {
  "use strict";

  return {
    setters: [function (_githubDEGJSScrollTracker100ScrollTrackerJs) {
      var _exportObj = {};

      for (var _key in _githubDEGJSScrollTracker100ScrollTrackerJs) {
        if (_key !== "default") _exportObj[_key] = _githubDEGJSScrollTracker100ScrollTrackerJs[_key];
      }

      _exportObj["default"] = _githubDEGJSScrollTracker100ScrollTrackerJs["default"];

      _export(_exportObj);
    }],
    execute: function () {}
  };
});

System.register("github:DEGJS/eventAggregator@1.0.2/eventAggregator.js", [], function (_export) {
  /* */
  "use strict";

  var eventAggregator, instance;
  return {
    setters: [],
    execute: function () {
      eventAggregator = function eventAggregator() {
        var listeners = {};

        function subscribe(eventType, listener) {
          if (typeof listeners[eventType] == "undefined") {
            listeners[eventType] = [];
          }

          listeners[eventType].push(listener);
        }

        function unsubscribe(eventType, listener) {
          if (listeners[eventType] instanceof Array) {
            var index = listeners[eventType].indexOf(listener);
            if (index >= 0) listeners[eventType].splice(index, 1);
          }
        }

        function publish(evt) {
          var _this = this;

          if (typeof evt == "string") {
            evt = { type: evt };
          }
          if (!evt.target) {
            evt.target = this;
          }

          if (!evt.type) {
            //falsy
            throw new Error("Event object missing 'type' property.");
          }

          if (listeners[evt.type] instanceof Array) {
            listeners[evt.type].forEach(function (listener) {
              listener.call(_this, evt);
            });
          }
        }

        return {
          subscribe: subscribe,
          unsubscribe: unsubscribe,
          publish: publish
        };
      };

      instance = eventAggregator();

      _export("default", instance);
    }
  };
});

System.register("github:DEGJS/eventAggregator@1.0.2.js", ["github:DEGJS/eventAggregator@1.0.2/eventAggregator.js"], function (_export) {
  "use strict";

  return {
    setters: [function (_githubDEGJSEventAggregator102EventAggregatorJs) {
      var _exportObj = {};

      for (var _key in _githubDEGJSEventAggregator102EventAggregatorJs) {
        if (_key !== "default") _exportObj[_key] = _githubDEGJSEventAggregator102EventAggregatorJs[_key];
      }

      _exportObj["default"] = _githubDEGJSEventAggregator102EventAggregatorJs["default"];

      _export(_exportObj);
    }],
    execute: function () {}
  };
});

System.register('components/wayfinding.js', ['npm:babel-runtime@5.8.38/core-js/array/from.js', 'github:DEGJS/scrollTracker@1.0.0.js', 'github:DEGJS/eventAggregator@1.0.2.js'], function (_export) {
	var _Array$from, scrollTracker, eventAggregator, wayfinding;

	return {
		setters: [function (_npmBabelRuntime5838CoreJsArrayFromJs) {
			_Array$from = _npmBabelRuntime5838CoreJsArrayFromJs['default'];
		}, function (_githubDEGJSScrollTracker100Js) {
			scrollTracker = _githubDEGJSScrollTracker100Js['default'];
		}, function (_githubDEGJSEventAggregator102Js) {
			eventAggregator = _githubDEGJSEventAggregator102Js['default'];
		}],
		execute: function () {
			'use strict';

			wayfinding = function wayfinding() {

				var wayfinderEl = document.querySelector('.js-wayfinder'),
				    elsToTrack = _Array$from(wayfinderEl.querySelectorAll('.js-section-anchor')),
				    scrollTrackerInst = scrollTracker();

				function init() {
					eventAggregator.subscribe('scrollTracker.elementInViewportChange', onElementInViewportChange);

					elsToTrack.forEach(function (el) {
						var elToTrack = el.getAttribute('href');
						scrollTrackerInst.trackElement(document.querySelector(elToTrack), {
							offset: {
								top: '99vh',
								bottom: '90vh'
							}
						});
					});
				}

				function onElementInViewportChange(e) {

					if (e.isInViewport) {
						var element = e.element.getAttribute('id'),
						    wayfinderLink = document.querySelector('.wayfinder__link--' + element);

						elsToTrack.forEach(function (el) {
							el.classList.remove('is-active');
						});
						wayfinderLink.classList.add('is-active');
					} else {
						wayfinderEl.classList.remove('is-active');
					}
				}

				init();
			};

			_export('default', wayfinding);
		}
	};
});

System.register("main.js", ["components/siteNav.js", "components/sectionAnchors.js", "components/wayfinding.js"], function (_export) {
	"use strict";

	var siteNav, sectionAnchors, wayfinding, main;
	return {
		setters: [function (_componentsSiteNavJs) {
			siteNav = _componentsSiteNavJs["default"];
		}, function (_componentsSectionAnchorsJs) {
			sectionAnchors = _componentsSectionAnchorsJs["default"];
		}, function (_componentsWayfindingJs) {
			wayfinding = _componentsWayfindingJs["default"];
		}],
		execute: function () {
			main = function main() {

				var bodyEl = document.body,
				    headerEl = bodyEl.querySelector('.site-header'),
				    config = {
					bodyEl: bodyEl,
					headerEl: headerEl
				};

				function init() {
					bodyEl.classList.add('js');

					sectionAnchors();
					wayfinding();
					siteNav(config);
				}

				init();
			};

			_export("default", main());
		}
	};
});
