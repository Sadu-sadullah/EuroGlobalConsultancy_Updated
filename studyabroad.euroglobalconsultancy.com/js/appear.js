!function($){$.fn.appear=function(fn,options){var settings=$.extend({data:void 0,one:!0,accX:0,accY:0},options);return this.each((function(){var t=$(this);if(t.appeared=!1,fn){var w=$(window),check=function(){if(t.is(":visible")){var a=w.scrollLeft(),b=w.scrollTop(),o=t.offset(),x=o.left,y=o.top,ax=settings.accX,ay=settings.accY,th=t.height(),wh=w.height(),tw=t.width(),ww=w.width();y+th+ay>=b&&y<=b+wh+ay&&x+tw+ax>=a&&x<=a+ww+ax?t.appeared||t.trigger("appear",settings.data):t.appeared=!1}else t.appeared=!1},modifiedFn=function(){if(t.appeared=!0,settings.one){w.unbind("scroll",check);var i=$.inArray(check,$.fn.appear.checks);i>=0&&$.fn.appear.checks.splice(i,1)}fn.apply(this,arguments)};settings.one?t.one("appear",settings.data,modifiedFn):t.bind("appear",settings.data,modifiedFn),w.scroll(check),$.fn.appear.checks.push(check),check()}else t.trigger("appear",settings.data)}))},$.extend($.fn.appear,{checks:[],timeout:null,checkAll:function(){var length=$.fn.appear.checks.length;if(length>0)for(;length--;)$.fn.appear.checks[length]()},run:function(){$.fn.appear.timeout&&clearTimeout($.fn.appear.timeout),$.fn.appear.timeout=setTimeout($.fn.appear.checkAll,20)}}),$.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],(function(i,n){var old=$.fn[n];old&&($.fn[n]=function(){var r=old.apply(this,arguments);return $.fn.appear.run(),r})}))}(jQuery);