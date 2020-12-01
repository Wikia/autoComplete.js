
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.autoCompleteJS = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var inputComponent = (function (config) {
    config.inputField.setAttribute("dir", "ltr");
    config.inputField.setAttribute("type", "text");
    config.inputField.setAttribute("spellcheck", false);
    config.inputField.setAttribute("autocorrect", "off");
    config.inputField.setAttribute("autocomplete", "off");
    config.inputField.setAttribute("autocapitalize", "off");
    config.inputField.setAttribute("title", config.name);
    config.inputField.setAttribute("aria-label", config.name);
    config.inputField.setAttribute("aria-controls", config.resultsList.idName);
    config.inputField.setAttribute("aria-labelledby", config.name);
    config.inputField.setAttribute("aria-autocomplete", "both");
  });

  var createList = (function (config) {
    var list = document.createElement(config.resultsList.element);
    list.setAttribute("id", config.resultsList.idName);
    list.setAttribute("aria-labelledby", config.name);
    list.setAttribute("class", config.resultsList.className);
    list.setAttribute("role", "listbox");
    list.setAttribute("tabindex", "-1");
    if (config.resultsList.container) config.resultsList.container(list);
    config.inputField.parentNode.appendChild(list);
    return list;
  });

  var createItem = (function (item, index, config) {
    var result = document.createElement(config.resultItem.element);
    result.setAttribute("id", "".concat(config.resultItem.className, "_").concat(index));
    result.setAttribute("data-value", item.value[item.key]);
    result.setAttribute("class", config.resultItem.className);
    result.setAttribute("role", "option");
    result.innerHTML = item.match;
    if (config.resultItem.content) config.resultItem.content(item.value, result);
    return result;
  });

  var closeAllLists = function closeAllLists(element, inputField) {
    var list = document.getElementsByClassName("autoCompleteJS_list");
    for (var index = 0; index < list.length; index++) {
      if (element !== list[index] && element !== inputField) list[index].parentNode.removeChild(list[index]);
    }
  };
  var generateList = function generateList(config, data, matches) {
    var list = createList(config);
    var _loop = function _loop(index) {
      var item = data.results[index];
      var resultItem = createItem(item, index, config);
      resultItem.addEventListener("click", function () {
        config.inputField.setAttribute("aria-activedescendant", "");
        var dataFeedback = {
          matches: matches,
          input: data.input,
          query: data.query,
          results: data.results,
          selection: _objectSpread2(_objectSpread2({}, item), {}, {
            index: index
          })
        };
        config.onSelection(dataFeedback);
      });
      list.appendChild(resultItem);
    };
    for (var index = 0; index < data.results.length; index++) {
      _loop(index);
    }
    return list;
  };

  var eventEmitter = (function (target, detail, name) {
    target.dispatchEvent(new CustomEvent(name, {
      bubbles: true,
      detail: detail,
      cancelable: true
    }));
  });

  var navigate = function navigate(config) {
    var currentFocus = -1;
    var update = function update(event, list, state, config) {
      event.preventDefault();
      if (state) {
        currentFocus++;
      } else {
        currentFocus--;
      }
      addActive(list);
      config.inputField.setAttribute("aria-activedescendant", list[currentFocus].dataset.value);
      eventEmitter(event.srcElement, {
        event: event,
        selection: list[currentFocus]
      }, "navigation");
    };
    var removeActive = function removeActive(list) {
      for (var index = 0; index < list.length; index++) {
        list[index].removeAttribute("aria-selected");
        list[index].classList.remove("autoCompleteJS_selected");
      }
    };
    var addActive = function addActive(list) {
      if (!list) return false;
      removeActive(list);
      if (currentFocus >= list.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = list.length - 1;
      list[currentFocus].setAttribute("aria-selected", "true");
      list[currentFocus].classList.add("autoCompleteJS_selected");
    };
    var navigation = function navigation(event) {
      var list = document.getElementById(config.resultsList.idName);
      if (!list) return config.inputField.removeEventListener("keydown", navigate);
      list = list.getElementsByTagName(config.resultItem.element);
      if (event.keyCode === 27) {
        config.inputField.value = "";
        closeAllLists(false, event.target);
      } else if (event.keyCode === 40 || event.keyCode === 9) {
        update(event, list, true, config);
      } else if (event.keyCode === 38 || event.keyCode === 9) {
        update(event, list, false, config);
      } else if (event.keyCode === 13) {
        event.preventDefault();
        if (currentFocus > -1) {
          if (list) list[currentFocus].click();
        }
      }
    };
    var navigate = config.resultsList.navigation || navigation;
    config.inputField.addEventListener("keydown", navigate);
  };

  var searchEngine = (function (query, record, config) {
    var recordLowerCase = record.toLowerCase();
    if (config.searchEngine === "loose") {
      query = query.replace(/ /g, "");
      var match = [];
      var searchPosition = 0;
      for (var number = 0; number < recordLowerCase.length; number++) {
        var recordChar = record[number];
        if (searchPosition < query.length && recordLowerCase[number] === query[searchPosition]) {
          recordChar = config.highlight ? "<span class=\"autoCompleteJS_highlighted\">".concat(recordChar, "</span>") : recordChar;
          searchPosition++;
        }
        match.push(recordChar);
      }
      if (searchPosition === query.length) {
        return match.join("");
      }
    } else {
      if (recordLowerCase.includes(query)) {
        var pattern = new RegExp("".concat(query), "i");
        query = pattern.exec(record);
        var _match = config.highlight ? record.replace(query, "<span class=\"autoCompleteJS_highlighted\">".concat(query, "</span>")) : record;
        return _match;
      }
    }
  });

  var getInputValue = function getInputValue(inputField) {
    return inputField instanceof HTMLInputElement || inputField instanceof HTMLTextAreaElement ? inputField.value.toLowerCase() : inputField.innerHTML.toLowerCase();
  };
  var prepareQueryValue = function prepareQueryValue(inputValue, query) {
    return query && query.manipulate ? query.manipulate(inputValue) : inputValue;
  };
  var checkTriggerCondition = function checkTriggerCondition(config, queryValue) {
    return config.trigger.condition ? config.trigger.condition(queryValue) : queryValue.length >= config.threshold && queryValue.replace(/ /g, "").length;
  };
  var listMatchingResults = function listMatchingResults(config, query, data) {
    var resList = [];
    var _loop = function _loop(index) {
      var record = data[index];
      var search = function search(key) {
        var recordValue = (key ? record[key] : record).toString();
        if (recordValue) {
          var match = typeof config.searchEngine === "function" ? config.searchEngine(query, recordValue) : searchEngine(query, recordValue, config);
          if (match && key) {
            resList.push({
              key: key,
              index: index,
              match: match,
              value: record
            });
          } else if (match && !key) {
            resList.push({
              index: index,
              match: match,
              value: record
            });
          }
        }
      };
      if (config.data.key) {
        var _iterator = _createForOfIteratorHelper(config.data.key),
            _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var key = _step.value;
            search(key);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        search();
      }
    };
    for (var index = 0; index < data.length; index++) {
      _loop(index);
    }
    var list = config.sort ? resList.sort(config.sort) : resList;
    return list;
  };

  var debouncer = (function (callback, delay) {
    var inDebounce;
    return function () {
      var context = this;
      var args = arguments;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(function () {
        return callback.apply(context, args);
      }, delay);
    };
  });

  var autoCompleteJS = function () {
    function autoCompleteJS(config) {
      _classCallCheck(this, autoCompleteJS);
      var _config$name = config.name,
          name = _config$name === void 0 ? "Search" : _config$name,
          _config$selector = config.selector,
          selector = _config$selector === void 0 ? "#autoCompleteJS" : _config$selector,
          _config$data = config.data,
          src = _config$data.src,
          key = _config$data.key,
          _config$data$cache = _config$data.cache,
          cache = _config$data$cache === void 0 ? true : _config$data$cache,
          query = config.query,
          _config$trigger = config.trigger;
      _config$trigger = _config$trigger === void 0 ? {} : _config$trigger;
      var _config$trigger$event = _config$trigger.event,
          event = _config$trigger$event === void 0 ? ["input"] : _config$trigger$event,
          _config$trigger$condi = _config$trigger.condition,
          condition = _config$trigger$condi === void 0 ? false : _config$trigger$condi,
          _config$searchEngine = config.searchEngine,
          searchEngine = _config$searchEngine === void 0 ? "strict" : _config$searchEngine,
          _config$threshold = config.threshold,
          threshold = _config$threshold === void 0 ? 0 : _config$threshold,
          _config$debounce = config.debounce,
          debounce = _config$debounce === void 0 ? 0 : _config$debounce,
          _config$resultsList = config.resultsList;
      _config$resultsList = _config$resultsList === void 0 ? {} : _config$resultsList;
      var _config$resultsList$r = _config$resultsList.render,
          render = _config$resultsList$r === void 0 ? true : _config$resultsList$r,
          _config$resultsList$c = _config$resultsList.container,
          container = _config$resultsList$c === void 0 ? false : _config$resultsList$c,
          destination = _config$resultsList.destination,
          _config$resultsList$p = _config$resultsList.position,
          position = _config$resultsList$p === void 0 ? "afterend" : _config$resultsList$p,
          _config$resultsList$e = _config$resultsList.element,
          resultsListElement = _config$resultsList$e === void 0 ? "ul" : _config$resultsList$e,
          _config$resultsList$i = _config$resultsList.idName,
          resultsListId = _config$resultsList$i === void 0 ? "autoCompleteJS_list" : _config$resultsList$i,
          _config$resultsList$c2 = _config$resultsList.className,
          resultsListClass = _config$resultsList$c2 === void 0 ? "autoCompleteJS_list" : _config$resultsList$c2,
          _config$resultsList$n = _config$resultsList.navigation,
          navigation = _config$resultsList$n === void 0 ? false : _config$resultsList$n,
          _config$sort = config.sort,
          sort = _config$sort === void 0 ? false : _config$sort,
          placeHolder = config.placeHolder,
          _config$maxResults = config.maxResults,
          maxResults = _config$maxResults === void 0 ? 5 : _config$maxResults,
          _config$resultItem = config.resultItem;
      _config$resultItem = _config$resultItem === void 0 ? {} : _config$resultItem;
      var _config$resultItem$co = _config$resultItem.content,
          content = _config$resultItem$co === void 0 ? false : _config$resultItem$co,
          _config$resultItem$el = _config$resultItem.element,
          resultItemElement = _config$resultItem$el === void 0 ? "li" : _config$resultItem$el,
          _config$resultItem$id = _config$resultItem.idName,
          resultItemId = _config$resultItem$id === void 0 ? "autoCompleteJS_result" : _config$resultItem$id,
          _config$resultItem$cl = _config$resultItem.className,
          resultItemClass = _config$resultItem$cl === void 0 ? "autoCompleteJS_result" : _config$resultItem$cl,
          noResults = config.noResults,
          _config$highlight = config.highlight,
          highlight = _config$highlight === void 0 ? false : _config$highlight,
          feedback = config.feedback,
          onSelection = config.onSelection;
      this.name = name;
      this.selector = selector;
      this.data = {
        src: src,
        key: key,
        cache: cache
      };
      this.query = query;
      this.trigger = {
        event: event,
        condition: condition
      };
      this.searchEngine = searchEngine;
      this.threshold = threshold;
      this.debounce = debounce;
      this.resultsList = {
        render: render,
        container: container,
        destination: destination || this.inputField,
        position: position,
        element: resultsListElement,
        idName: resultsListId,
        className: resultsListClass,
        navigation: navigation
      };
      this.sort = sort;
      this.placeHolder = placeHolder;
      this.maxResults = maxResults;
      this.resultItem = {
        content: content,
        element: resultItemElement,
        idName: resultItemId,
        className: resultItemClass
      };
      this.noResults = noResults;
      this.highlight = highlight;
      this.feedback = feedback;
      this.onSelection = onSelection;
      this.preInit();
    }
    _createClass(autoCompleteJS, [{
      key: "start",
      value: function start(data, input, query) {
        var _this = this;
        var results = listMatchingResults(this, query, data);
        var dataFeedback = {
          input: input,
          query: query,
          results: results.slice(0, this.maxResults)
        };
        eventEmitter(this.inputField, {
          input: input,
          query: query,
          results: results
        }, "results");
        if (!results.length) return this.noResults ? this.noResults() : null;
        if (!this.resultsList.render) return this.feedback(dataFeedback);
        var list = results.length ? generateList(this, dataFeedback, results) : null;
        eventEmitter(this.inputField, dataFeedback, "rendered");
        navigate(this);
        document.addEventListener("click", function (event) {
          return closeAllLists(event.target, _this.inputField);
        });
      }
    }, {
      key: "compose",
      value: function compose(event) {
        var _this2 = this;
        return new Promise(function ($return, $error) {
          var input, query, triggerCondition;
          input = getInputValue(_this2.inputField);
          query = prepareQueryValue(input, _this2.query);
          triggerCondition = checkTriggerCondition(_this2, query);
          if (triggerCondition) {
            var data;
            return new Promise(function ($return, $error) {
              if (typeof _this2.data.src === "function") {
                return _this2.data.src().then($return, $error);
              }
              return $return(_this2.data.src);
            }).then(function ($await_5) {
              try {
                data = $await_5;
                eventEmitter(_this2.inputField, data, "fetch");
                closeAllLists(false, _this2.inputField);
                _this2.start(data, input, query);
                return $If_2.call(_this2);
              } catch ($boundEx) {
                return $error($boundEx);
              }
            }, $error);
          } else {
            closeAllLists(false, _this2.inputField);
            return $If_2.call(_this2);
          }
          function $If_2() {
            return $return();
          }
        });
      }
    }, {
      key: "init",
      value: function init() {
        var _this3 = this;
        if (this.placeHolder) this.inputField.setAttribute("placeholder", this.placeHolder);
        this.hook = debouncer(function (event) {
          _this3.compose(event);
        }, this.debounce);
        this.inputField.addEventListener("input", this.hook);
        eventEmitter(this.inputField, null, "init");
      }
    }, {
      key: "preInit",
      value: function preInit() {
        var _this4 = this;
        var targetNode = document;
        var config = {
          childList: true,
          subtree: true
        };
        var callback = function callback(mutationsList, observer) {
          var _iterator = _createForOfIteratorHelper(mutationsList),
              _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var mutation = _step.value;
              if (targetNode.querySelector(_this4.selector)) {
                observer.disconnect();
                _this4.inputField = targetNode.querySelector(_this4.selector);
                inputComponent(_this4);
                eventEmitter(_this4.inputField, null, "connect");
                _this4.init();
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        };
        var observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
      }
    }, {
      key: "unInit",
      value: function unInit() {
        this.inputField.removeEventListener("input", this.hook);
        eventEmitter(this.inputField, null, "unInit");
      }
    }]);
    return autoCompleteJS;
  }();

  return autoCompleteJS;

})));
