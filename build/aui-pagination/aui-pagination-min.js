YUI.add("aui-pagination",function(e,t){var n=e.Lang,r=n.isBoolean,i=n.isFunction,s=n.isNumber,o=e.getClassName,u=o("active"),a=o("disabled"),f=o("pagination","control"),l=e.Component.create({NAME:"pagination",ATTRS:{circular:{validator:r,value:!0},formatter:{validator:i,valueFn:"_formatterValueFn"},items:{},offset:{setter:"_setInt",value:1},page:{setter:"_setInt",value:0},total:{setter:"_setInt",value:0},showControls:{validator:r,value:!0},strings:{value:{next:"Next",prev:"Prev"}}},HTML_PARSER:{items:function(e){return this._queryItemsIfNotSet(e)},total:function(){return this._countItemsInDoc()}},BIND_UI_ATTRS:["offset","page","showControls","total"],UI_ATTRS:["page"],prototype:{CONTENT_TEMPLATE:'<ul class="pagination"></ul>',ITEM_TEMPLATE:'<li class="{cssClass}"><a href="#">{content}</a></li>',TOTAL_CONTROLS:2,items:null,lastState:null,syncUI:function(){var e=this,t=e.get("page");t>0&&e._dispatchRequest({page:t})},bindUI:function(){var e=this,t=e.get("boundingBox");e.on("pageChange",e._onPageChange),e.publish("changeRequest",{defaultFn:e._defChangeRequest}),t.delegate("click",e._onClickItem,"li",e)},renderUI:function(){var e=this;e._renderItemsUI(e.get("total"))},getItem:function(e){var t=this;if(s(e)){var n=t.get("items");n&&(e=n.item(e))}return e},getOffsetPageNumber:function(){var e=this;return e.get("offset")+e.get("page")},getOffsetTotalPages:function(){var e=this;return e.get("offset")+e.get("total")},getTotalItems:function(){var e=this;return e.get("total")+e.TOTAL_CONTROLS},next:function(){var e=this,t=e.get("total");if(t===0)return;var n=e.get("page");return e._dispatchRequest({page:e.get("circular")&&n===t?1:Math.min(t,++n)}),e},prev:function(){var e=this,t=e.get("total");if(t===0)return;var n=e.get("page");return e._dispatchRequest({page:e.get("circular")&&n===1?t:Math.max(1,--n)}),e},setState:function(e){var t=this,n=e.page;t.set("page",n),t.lastState=e},_countItemsInDoc:function(){var e=this,t=e.get("srcNode");return Math.max(0,e._queryItemsIfNotSet(t).size()-e.TOTAL_CONTROLS)},_defChangeRequest:function(e){var t=this;t.setState(e.state)},_dispatchRequest:function(e){var t=this;t.fire("changeRequest",{lastState:t.lastState,state:e})},_formatterValueFn:function(){return function(e){var t=this;return n.sub(t.ITEM_TEMPLATE,{content:e,cssClass:""})}},_queryItemsIfNotSet:function(e){var t=this;return t.items||(t.items=e.all("li")),t.items},_onClickItem:function(e){var t=this,n=e.currentTarget;e.preventDefault();if(n.hasClass(a)||n.hasClass(u))return;var r=t.get("items"),i=r.indexOf(n),s=r.size()-1;switch(i){case 0:t.prev();break;case s:t.next();break;default:t._dispatchRequest({page:i})}},_onPageChange:function(e){var t=this;if(e.prevVal!==e.newVal){var n=t.getItem(e.prevVal);n&&n.removeClass(u)}},_renderItemsUI:function(t){var r=this,i=r.ITEM_TEMPLATE,s=r.get("formatter"),o=r.get("offset"),u,a="";a+=n.sub(i,{content:r.getString("prev"),cssClass:f});for(u=o;u<=o+t-1;u++)a+=s.apply(r,[u]);a+=n.sub(i,{content:r.getString("next"),cssClass:f});var l=e.NodeList.create(a);r.set("items",l),r.get("contentBox").setContent(l),r.get("showControls")||(l.first().remove(),l.last().remove())},_setInt:function(e){return n.toInt(e)},_syncNavigationUI:function(){var e=this,t=e.get("items");t.first().toggleClass(a,e.get("page")===1),t.last().toggleClass(a,e.get("page")===e.get("total"))},_uiSetOffset:function(){var e=this;e._renderItemsUI(e.get("total"))},_uiSetPage:function(e){var t=this;t.get("circular")||t._syncNavigationUI();if(e===0||e===t.getTotalItems())return;var n=t.getItem(e);n&&n.addClass(u)},_uiSetShowControls:function(){var e=this;e._renderItemsUI(e.get("total"))},_uiSetTotal:function(e){var t=this;t._renderItemsUI(e)}}});e.Pagination=l},"3.0.3-deprecated.64",{requires:["node-event-delegate","aui-node","aui-component","widget-htmlparser"],skinnable:!0});
