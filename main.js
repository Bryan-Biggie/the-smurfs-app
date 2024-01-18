(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bryan.Zikhayi\OneDrive - Konsise\Desktop\The Smurfs Website\smurfs-website-app\src\main.ts */"zUnb");


/***/ }),

/***/ "4N5w":
/*!**********************************************************************!*\
  !*** ./src/app/main-list/list-item-edit/list-item-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: ListItemEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemEditComponent", function() { return ListItemEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _main_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main-list.service */ "zzWv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class ListItemEditComponent {
    constructor(listService, activatedRoute) {
        this.listService = listService;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.itemId = +this.activatedRoute.snapshot.paramMap.get('id');
        this.item = this.listService.getItems().find(x => x.id === this.itemId);
    }
    onUpdateItem() {
        this.listService.updateItem(this.item);
        alert('The changes made to Smurf have been saved!');
    }
}
ListItemEditComponent.ɵfac = function ListItemEditComponent_Factory(t) { return new (t || ListItemEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_main_list_service__WEBPACK_IMPORTED_MODULE_1__["MainListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ListItemEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListItemEditComponent, selectors: [["app-list-item-edit"]], decls: 34, vars: 10, consts: [[1, "form-container"], [1, "image"], ["mat-card-image", "", "alt", "Photo of a Papa Smurf", 3, "src"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "maxlength", "50", "required", "", 3, "ngModel", "ngModelChange"], ["for", "description"], ["id", "description", "name", "description", "maxlength", "500", "required", "", 3, "ngModel", "ngModelChange"], ["for", "imagePath"], ["type", "text", "id", "imagePath", "name", "imagePath", "required", "", 3, "ngModel", "ngModelChange"], ["for", "sex"], ["id", "sex", "name", "sex", "required", "", 3, "ngModel", "ngModelChange"], ["disabled", "", 3, "value"], ["value", "Male"], ["value", "Female"], ["value", "Other"], ["for", "height"], ["type", "number", "id", "height", "name", "height", "required", "", "min", "1", "max", "300", 3, "ngModel", "ngModelChange"], ["for", "age"], ["type", "number", "id", "age", "name", "age", "required", "", "min", "1", "max", "100", 3, "ngModel", "ngModelChange"], ["type", "submit", 3, "routerLink", "click"]], template: function ListItemEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListItemEditComponent_Template_input_ngModelChange_8_listener($event) { return ctx.item.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListItemEditComponent_Template_textarea_ngModelChange_11_listener($event) { return ctx.item.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Image Path:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListItemEditComponent_Template_input_ngModelChange_14_listener($event) { return ctx.item.imagePath = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sex:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListItemEditComponent_Template_select_ngModelChange_17_listener($event) { return ctx.item.sex = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Select Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Height (cm):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListItemEditComponent_Template_input_ngModelChange_28_listener($event) { return ctx.item.height = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Age:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListItemEditComponent_Template_input_ngModelChange_31_listener($event) { return ctx.item.age = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListItemEditComponent_Template_button_click_32_listener() { return ctx.onUpdateItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "SAVE CHANGES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.item.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Edit The Smurf ID: ", ctx.item.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.item.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.item.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.item.imagePath);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.item.sex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.item.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.item.age);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/mainList/itemDetails/", ctx.item.id, "");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["*[_ngcontent-%COMP%]{\r\n    box-sizing: border-box;\r\n}\r\n.form-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n  }\r\nh1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-family: 'Comic Neue', cursive;\r\n    text-transform: uppercase;\r\n  }\r\nimg[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n.image[_ngcontent-%COMP%]{\r\n    width: 20vw;\r\n  }\r\nform[_ngcontent-%COMP%] {\r\n    max-width: 400%;\r\n    width: 60%;\r\n    margin: 0 auto;\r\n    padding: 20px;\r\n    background-color: #4695D6;\r\n    border-radius: 8px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n  }\r\nlabel[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 8px;\r\n  }\r\ninput[type=\"text\"][_ngcontent-%COMP%], input[type=\"number\"][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 8px;\r\n    margin-bottom: 16px;\r\n    box-sizing: border-box;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n  }\r\nbutton[_ngcontent-%COMP%] {\r\n    background-color: #152D40;\r\n    color: #fff;\r\n    padding: 10px 15px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n  }\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n    background-color: #ccc;\r\n    cursor: not-allowed;\r\n  }\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    background-color: #234B6B;\r\n  }\r\n\r\n@media screen and (max-width: 1225px) {\r\n\r\n  }\r\n@media screen and (max-width: 850px) {\r\n    .form-container[_ngcontent-%COMP%] {\r\n      flex-direction: column; \r\n      align-items: center;\r\n    }\r\n    form[_ngcontent-%COMP%] {\r\n      max-width: 400%;\r\n      width: 100%;\r\n    }\r\n    .image[_ngcontent-%COMP%]{\r\n      width: 30vw;\r\n    }\r\n\r\n  }\r\n@media screen and (max-width: 600px) {\r\n\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtaXRlbS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7RUFDckI7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixjQUFjO0lBQ2QsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsdUNBQXVDO0VBQ3pDO0FBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0FBRUE7O0lBRUUsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjtBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBRUUsc0JBQXNCO0FBQ3hCOztFQUVBO0FBRUE7SUFDRTtNQUNFLHNCQUFzQixFQUFFLDJCQUEyQjtNQUNuRCxtQkFBbUI7SUFDckI7SUFDQTtNQUNFLGVBQWU7TUFDZixXQUFXO0lBQ2I7SUFDQTtNQUNFLFdBQVc7SUFDYjs7RUFFRjtBQUVBOztFQUVBIiwiZmlsZSI6Imxpc3QtaXRlbS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKntcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0NvbWljIE5ldWUnLCBjdXJzaXZlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5pbWFnZXtcclxuICAgIHdpZHRoOiAyMHZ3O1xyXG4gIH1cclxuZm9ybSB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMCU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2OTVENjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbiAgXHJcbiAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXHJcbiAgdGV4dGFyZWEsIHNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTJENDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIH1cclxuICBcclxuICBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzNEI2QjtcclxuICB9XHJcblxyXG4gICAgLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjI1cHgpIHtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICAuZm9ybS1jb250YWluZXIge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTdGFjayBpdGVtcyB2ZXJ0aWNhbGx5ICovXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBmb3JtIHtcclxuICAgICAgbWF4LXdpZHRoOiA0MDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5pbWFnZXtcclxuICAgICAgd2lkdGg6IDMwdnc7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cclxuICB9Il19 */"] });


/***/ }),

/***/ "5hVl":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class NavBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 7, vars: 2, consts: [[3, "routerLink"], ["id", "logo", "src", "https://upload.wikimedia.org/wikipedia/commons/d/dc/The_Smurfs_logo_%282019%29.png", "alt", "The Logo"], ["id", "div-btn"], ["id", "btn", "mat-raised-button", "", 3, "routerLink"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " SMURF LIST ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/landingPage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/mainList");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"]], styles: [".example-spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n  }\r\n\r\n  .mat-toolbar[_ngcontent-%COMP%]{\r\n    background-color: rgb(233, 233, 240);\r\n    color: #4695D6;\r\n    margin: 0;\r\n    padding: 0 80px;\r\n    position: fixed;\r\n  }\r\n\r\n  #logo[_ngcontent-%COMP%]{\r\n    padding-top: 10px;\r\n    width: 130px;\r\n  }\r\n\r\n  .mat-toolbar[_ngcontent-%COMP%]{\r\n    z-index: 100000;\r\n  }\r\n\r\n  #btn[_ngcontent-%COMP%]{\r\n  background:#a5cbeb;\r\n    color:#0f76ca;\r\n    opacity:0.8;\r\n}\r\n\r\n  #btn[_ngcontent-%COMP%]:hover{\r\n  cursor:pointer;\r\n    opacity:1;\r\n  }\r\n\r\n  .mat-toolbar-row[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  \r\n\r\n  \r\n\r\n  @media screen and (max-width: 1225px) {\r\n\r\n  }\r\n\r\n  @media screen and (max-width: 850px) {\r\n\r\n  }\r\n\r\n  @media screen and (max-width: 600px) {\r\n    #logo[_ngcontent-%COMP%]{\r\n      width: 100px;\r\n    }\r\n  }\r\n\r\n  @media screen and (max-width: 450px) {\r\n    .mat-toolbar[_ngcontent-%COMP%]{\r\n      padding: 0 20px;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxvQ0FBb0M7SUFDcEMsY0FBYztJQUNkLFNBQVM7SUFDVCxlQUFlO0lBQ2YsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVGO0VBQ0Usa0JBQWtCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0VBRUE7RUFDRSxjQUFjO0lBQ1osU0FBUztFQUNYOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtFQUNoQzs7RUFFQSxzQkFBc0I7O0VBQ3RCOzs7Ozs7Ozs7O0tBVUc7O0VBRUg7O0VBRUE7O0VBRUE7O0VBRUE7O0VBRUE7SUFDRTtNQUNFLFlBQVk7SUFDZDtFQUNGOztFQUVBO0lBQ0U7TUFDRSxlQUFlO0lBQ2pCO0VBQ0YiLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLm1hdC10b29sYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjMzLCAyNDApO1xyXG4gICAgY29sb3I6ICM0Njk1RDY7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwIDgwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgfVxyXG5cclxuICAjbG9nb3tcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1hdC10b29sYmFye1xyXG4gICAgei1pbmRleDogMTAwMDAwO1xyXG4gIH1cclxuXHJcbiNidG57XHJcbiAgYmFja2dyb3VuZDojYTVjYmViO1xyXG4gICAgY29sb3I6IzBmNzZjYTtcclxuICAgIG9wYWNpdHk6MC44O1xyXG59XHJcblxyXG4jYnRuOmhvdmVye1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgb3BhY2l0eToxO1xyXG4gIH1cclxuXHJcbiAgLm1hdC10b29sYmFyLXJvd3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAvKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xyXG4gIC8qIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMjVweCkge1xyXG5cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcblxyXG4gIH0gKi9cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIyNXB4KSB7XHJcblxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG5cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICNsb2dve1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgLm1hdC10b29sYmFye1xyXG4gICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "PI13":
/*!*************************************************************!*\
  !*** ./src/app/angular-material/angular-material.module.ts ***!
  \*************************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AngularMaterialModule {
}
AngularMaterialModule.ɵfac = function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); };
AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        ], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AngularMaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'smurfs-website-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "header"], [1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./angular-material/angular-material.module */ "PI13");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "mSt+");
/* harmony import */ var _main_list_main_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-list/main-list.component */ "fUvo");
/* harmony import */ var _main_list_the_list_items_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-list/the-list-items/list-item/list-item.component */ "jnub");
/* harmony import */ var _main_list_list_item_detail_list_item_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main-list/list-item-detail/list-item-detail.component */ "tkQa");
/* harmony import */ var _main_list_list_item_edit_list_item_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main-list/list-item-edit/list-item-edit.component */ "4N5w");
/* harmony import */ var _main_list_new_list_item_new_list_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main-list/new-list-item/new-list-item.component */ "ZrMM");
/* harmony import */ var _main_list_the_list_items_the_list_items_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main-list/the-list-items/the-list-items.component */ "zX+C");
/* harmony import */ var _main_list_main_list_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main-list/main-list.service */ "zzWv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [_main_list_main_list_service__WEBPACK_IMPORTED_MODULE_14__["MainListService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
        _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__["LandingPageComponent"],
        _main_list_main_list_component__WEBPACK_IMPORTED_MODULE_8__["MainListComponent"],
        _main_list_the_list_items_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_9__["ListItemComponent"],
        _main_list_list_item_detail_list_item_detail_component__WEBPACK_IMPORTED_MODULE_10__["ListItemDetailComponent"],
        _main_list_list_item_edit_list_item_edit_component__WEBPACK_IMPORTED_MODULE_11__["ListItemEditComponent"],
        _main_list_new_list_item_new_list_item_component__WEBPACK_IMPORTED_MODULE_12__["NewListItemComponent"],
        _main_list_the_list_items_the_list_items_component__WEBPACK_IMPORTED_MODULE_13__["TheListItemsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]] }); })();


/***/ }),

/***/ "ZrMM":
/*!********************************************************************!*\
  !*** ./src/app/main-list/new-list-item/new-list-item.component.ts ***!
  \********************************************************************/
/*! exports provided: NewListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewListItemComponent", function() { return NewListItemComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item.model */ "cRaf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _main_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main-list.service */ "zzWv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class NewListItemComponent {
    constructor(formBuilder, listService) {
        this.formBuilder = formBuilder;
        this.listService = listService;
    }
    ngOnInit() {
        this.listSize = this.listService.getListSize();
        this.smurfForm = this.formBuilder.group({
            itemName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            itemDescription: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            itemImagePath: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            itemSex: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            itemHeight: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            itemAge: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
    }
    onAddToList() {
        if (this.smurfForm.valid) {
            const newItem = new _item_model__WEBPACK_IMPORTED_MODULE_1__["Item"](this.listSize + 1, this.smurfForm.value.itemName, this.smurfForm.value.itemDescription, this.smurfForm.value.itemImagePath, this.smurfForm.value.itemSex, this.smurfForm.value.itemAge, this.smurfForm.value.itemHeight);
            this.listService.addItem(newItem);
            this.smurfForm.reset();
            alert('The smurf has been added to the list.');
            // console.log(this.listService.getItems());
        }
        else {
            alert('Form is not valid. Please fill in all required fields.');
        }
    }
}
NewListItemComponent.ɵfac = function NewListItemComponent_Factory(t) { return new (t || NewListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_main_list_service__WEBPACK_IMPORTED_MODULE_3__["MainListService"])); };
NewListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NewListItemComponent, selectors: [["app-new-list-item"]], decls: 23, vars: 2, consts: [[1, "form-container"], [1, "overlay"], [1, "wrap"], [3, "formGroup"], [1, "btn"], ["id", "back", "routerLinkActive", "active", "routerLink", "/mainList", "type", "submit", "value", "BACK TO LIST"], ["id", "create", "type", "submit", "value", "CREATE", 3, "click"], ["type", "text", "id", "name", "maxlength", "50", "placeholder", "Smurf Name", "required", "", "formControlName", "itemName"], ["id", "description", "maxlength", "900", "placeholder", "Details about the Smurf", "required", "", "formControlName", "itemDescription"], ["type", "text", "id", "imagePath", "placeholder", "IMAGE URL:  https://imgage.com/image.png ", "required", "", "formControlName", "itemImagePath"], ["id", "sex", "required", "", "formControlName", "itemSex"], ["disabled", "", 3, "value"], ["value", "Male"], ["value", "Female"], ["value", "Other"], ["type", "number", "id", "height", "placeholder", "Height (cm)", "required", "", "min", "1", "max", "300", "formControlName", "itemHeight"], ["type", "number", "id", "age", "placeholder", "Age", "required", "", "min", "1", "max", "700", "formControlName", "itemAge"]], template: function NewListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " \u2665 New Smurf! \u2665");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewListItemComponent_Template_input_click_8_listener() { return ctx.onAddToList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Select Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.smurfForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", null);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"]], styles: ["*[_ngcontent-%COMP%]{\r\n    box-sizing: border-box;\r\n}\r\n.form-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n    height: 100%;\r\n}\r\n.overlay[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    overflow: hidden;\r\n   height:100vh;\r\n  }\r\n.overlay[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url(https://wallpapercave.com/wp/wp3515244.jpg);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    background-attachment: fixed;\r\n    filter: blur(4px);\r\n    z-index: -1;\r\n  }\r\nh1[_ngcontent-%COMP%]{\r\n    text-align:center;\r\n    color:#4695D6  !important;\r\n    margin-top:20%;\r\n    font:60px Lobster;\r\n    text-shadow: 0px 4px 3px rgba(0,0,0,0.4),\r\n               0px 8px 13px rgba(0,0,0,0.1),\r\n               0px 18px 23px rgba(0,0,0,0.1);\r\n  }\r\np[_ngcontent-%COMP%]{\r\n    color:#FFF;\r\n    text-align:center;\r\n    font:15px Lobster;\r\n    text-shadow: 0px 4px 3px rgba(0,0,0,0.4),\r\n               0px 8px 13px rgba(0,0,0,0.1),\r\n               0px 18px 23px rgba(0,0,0,0.1);\r\n  }\r\n.wrap[_ngcontent-%COMP%]{\r\n    height: 100vh;\r\n    width:50%;\r\n    margin:0 auto;\r\n  }\r\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{\r\n    background-color: #e2e2e2\r\n    ;\r\n    width:100%;\r\n    padding:10px;\r\n    margin-bottom:20px;\r\n    border-radius:5px;\r\n    border:none;\r\n    outline:none;\r\n    font:13px Raleway;\r\n  }\r\ninput[type=\"submit\"][_ngcontent-%COMP%]{\r\n    background:#941068;\r\n    color:#FFF;\r\n    width:126px;\r\n    padding:15px;\r\n    font-weight:700;\r\n    opacity:0.8;\r\n  }\r\n#create[_ngcontent-%COMP%]{\r\n    background:#941068;\r\n\r\n  }\r\n#back[_ngcontent-%COMP%]{\r\n    background:#061944;\r\n  }\r\n.btn[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\ninput[type=\"submit\"][_ngcontent-%COMP%]:hover{\r\n  cursor:pointer;\r\n    opacity:1;\r\n  }\r\ninput[type=\"text\"][_ngcontent-%COMP%]:focus{\r\n    border-left:5px solid #6BAADE;\r\n    -webkit-transition:0.4s ease;\r\n  }\r\ninput[type=\"number\"][_ngcontent-%COMP%]:focus{\r\n    border-left:5px solid #6BAADE;\r\n    -webkit-transition:0.4s ease;\r\n  }\r\ntextarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{\r\n    border-left:5px solid #6BAADE;\r\n    -webkit-transition:0.4s ease;\r\n  }\r\n\r\n@media screen and (max-width: 1225px) {\r\n\r\n  }\r\n@media screen and (max-width: 850px) {\r\n    .wrap[_ngcontent-%COMP%]{\r\n      width:80%;\r\n    }\r\n\r\n  }\r\n@media screen and (max-width: 600px) {\r\n    h1[_ngcontent-%COMP%]{\r\n\r\n      \r\n      font-size: 2em;\r\n    }\r\n\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1saXN0LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztFQUVFO0lBQ0Usc0JBQXNCO0FBQzFCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0lBQ1QsWUFBWTtBQUNoQjtBQUNFO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0dBQ2pCLFlBQVk7RUFDYjtBQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUVBQWlFO0lBQ2pFLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsV0FBVztFQUNiO0FBRUE7SUFDRSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakI7OzRDQUV3QztFQUMxQztBQUVBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakI7OzRDQUV3QztFQUMxQztBQUdBO0lBQ0UsYUFBYTtJQUNiLFNBQVM7SUFDVCxhQUFhO0VBQ2Y7QUFFQTtJQUNFO0lBQ0E7SUFDQSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztFQUNiO0FBRUY7SUFDSSxrQkFBa0I7O0VBRXBCO0FBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7RUFDaEM7QUFHQTtFQUNBLGNBQWM7SUFDWixTQUFTO0VBQ1g7QUFFQTtJQUNFLDZCQUE2QjtJQUM3Qiw0QkFBNEI7RUFDOUI7QUFFQTtJQUNFLDZCQUE2QjtJQUM3Qiw0QkFBNEI7RUFDOUI7QUFFQTtJQUNFLDZCQUE2QjtJQUM3Qiw0QkFBNEI7RUFDOUI7QUFHRSxzQkFBc0I7QUFDeEI7O0VBRUE7QUFFQTtJQUNFO01BQ0UsU0FBUztJQUNYOztFQUVGO0FBRUE7SUFDRTs7TUFFRSxzQkFBc0I7TUFDdEIsY0FBYztJQUNoQjs7RUFFRiIsImZpbGUiOiJuZXctbGlzdC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiAgKntcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuICAub3ZlcmxheXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICBoZWlnaHQ6MTAwdmg7XHJcbiAgfVxyXG5cclxuICAub3ZlcmxheTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vd2FsbHBhcGVyY2F2ZS5jb20vd3Avd3AzNTE1MjQ0LmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcbiAgXHJcbiAgaDF7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGNvbG9yOiM0Njk1RDYgICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOjIwJTtcclxuICAgIGZvbnQ6NjBweCBMb2JzdGVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCA0cHggM3B4IHJnYmEoMCwwLDAsMC40KSxcclxuICAgICAgICAgICAgICAgMHB4IDhweCAxM3B4IHJnYmEoMCwwLDAsMC4xKSxcclxuICAgICAgICAgICAgICAgMHB4IDE4cHggMjNweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIHB7XHJcbiAgICBjb2xvcjojRkZGO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBmb250OjE1cHggTG9ic3RlcjtcclxuICAgIHRleHQtc2hhZG93OiAwcHggNHB4IDNweCByZ2JhKDAsMCwwLDAuNCksXHJcbiAgICAgICAgICAgICAgIDBweCA4cHggMTNweCByZ2JhKDAsMCwwLDAuMSksXHJcbiAgICAgICAgICAgICAgIDBweCAxOHB4IDIzcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIH1cclxuICBcclxuICBcclxuICAud3JhcHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gIH1cclxuICBcclxuICBpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmUyZTJcclxuICAgIDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgb3V0bGluZTpub25lO1xyXG4gICAgZm9udDoxM3B4IFJhbGV3YXk7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJzdWJtaXRcIl17XHJcbiAgICBiYWNrZ3JvdW5kOiM5NDEwNjg7XHJcbiAgICBjb2xvcjojRkZGO1xyXG4gICAgd2lkdGg6MTI2cHg7XHJcbiAgICBwYWRkaW5nOjE1cHg7XHJcbiAgICBmb250LXdlaWdodDo3MDA7XHJcbiAgICBvcGFjaXR5OjAuODtcclxuICB9XHJcblxyXG4jY3JlYXRle1xyXG4gICAgYmFja2dyb3VuZDojOTQxMDY4O1xyXG5cclxuICB9XHJcblxyXG4gICNiYWNre1xyXG4gICAgYmFja2dyb3VuZDojMDYxOTQ0O1xyXG4gIH1cclxuICAuYnRue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlcntcclxuICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIG9wYWNpdHk6MTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXN7XHJcbiAgICBib3JkZXItbGVmdDo1cHggc29saWQgIzZCQUFERTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjowLjRzIGVhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJudW1iZXJcIl06Zm9jdXN7XHJcbiAgICBib3JkZXItbGVmdDo1cHggc29saWQgIzZCQUFERTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjowLjRzIGVhc2U7XHJcbiAgfVxyXG5cclxuICB0ZXh0YXJlYTpmb2N1cywgc2VsZWN0OmZvY3Vze1xyXG4gICAgYm9yZGVyLWxlZnQ6NXB4IHNvbGlkICM2QkFBREU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246MC40cyBlYXNlO1xyXG4gIH1cclxuICBcclxuXHJcbiAgICAvKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMjVweCkge1xyXG5cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAgIC53cmFwe1xyXG4gICAgICB3aWR0aDo4MCU7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgaDF7XHJcblxyXG4gICAgICAvKiBmb250OjRlbSBMb2JzdGVyOyAqL1xyXG4gICAgICBmb250LXNpemU6IDJlbTtcclxuICAgIH1cclxuXHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "cRaf":
/*!*****************************************!*\
  !*** ./src/app/main-list/item.model.ts ***!
  \*****************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
class Item {
    constructor(id, name, desc, imagePath, sex, age, height) {
        this.id = id;
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.sex = sex;
        this.height = height;
        this.age = age;
    }
}


/***/ }),

/***/ "fUvo":
/*!**************************************************!*\
  !*** ./src/app/main-list/main-list.component.ts ***!
  \**************************************************/
/*! exports provided: MainListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainListComponent", function() { return MainListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class MainListComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainListComponent.ɵfac = function MainListComponent_Factory(t) { return new (t || MainListComponent)(); };
MainListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainListComponent, selectors: [["app-main-list"]], decls: 2, vars: 0, consts: [[1, "container"]], template: function MainListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%]{\r\n    padding: 90px;\r\n    \r\n}\r\n\r\n  \r\n\r\n  @media screen and (max-width: 1225px) {\r\n\r\n  }\r\n\r\n  @media screen and (max-width: 850px) {\r\n\r\n  }\r\n\r\n  @media screen and (max-width: 600px) {\r\n    .container[_ngcontent-%COMP%]{\r\n        padding-left: 20px;\r\n        padding-right: 20px;\r\n        \r\n    }\r\n\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTs7QUFFakI7O0VBRUUsc0JBQXNCOztFQUNyQjs7RUFFRDs7RUFFQTs7RUFFQTs7RUFFQTtJQUNFO1FBQ0ksa0JBQWtCO1FBQ2xCLG1CQUFtQjs7SUFFdkI7O0VBRUYiLCJmaWxlIjoibWFpbi1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogOTBweDtcclxuICAgIFxyXG59XHJcblxyXG4gIC8qIFJlc3BvbnNpdmUgU3R5bGVzICovXHJcbiAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMjVweCkge1xyXG5cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICB9Il19 */"] });


/***/ }),

/***/ "jnub":
/*!***************************************************************************!*\
  !*** ./src/app/main-list/the-list-items/list-item/list-item.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemComponent", function() { return ListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0, a1, a2) { return { imageMale: a0, imageFemale: a1, imageOther: a2 }; };
class ListItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
ListItemComponent.ɵfac = function ListItemComponent_Factory(t) { return new (t || ListItemComponent)(); };
ListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListItemComponent, selectors: [["app-list-item"]], inputs: { item: "item" }, decls: 8, vars: 8, consts: [[3, "routerLink"], [1, "example-card"], [1, "image", 3, "ngClass"], ["mat-card-image", "", "alt", "Photo of a Smurf", 3, "src"], [1, "name"]], template: function ListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/mainList/itemDetails/", ctx.item.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c0, ctx.item.sex === "Male", ctx.item.sex === "Female", ctx.item.sex === "Other"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.item.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.name);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"]], styles: [".example-card[_ngcontent-%COMP%] {\r\n    background-color: #4695D6;\r\n    width: 300px;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n.name[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    text-transform: uppercase;\r\n    \r\n}\r\n\r\n.mat-card-title[_ngcontent-%COMP%]{\r\n  font-family: 'Brush Script', cursive, sans-serif;\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 200px;\r\n  overflow: hidden; \r\n  margin-bottom: 20px;\r\n}\r\n\r\n.imageMale[_ngcontent-%COMP%] {\r\n    background-color: #234B6B;\r\n\r\n  }\r\n\r\n.imageFemale[_ngcontent-%COMP%] {\r\n    background-color: #bb067e;\r\n\r\n  }\r\n\r\n.imageOther[_ngcontent-%COMP%] {\r\n    background-color: #590266;\r\n    \r\n\r\n  }\r\n\r\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-top: 1px;\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: contain; \r\n  }\r\n\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n  }\r\n\r\n.example-card[_ngcontent-%COMP%]:hover{\r\n    background-color: #6BAADE;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDO0lBQ0cseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7O0FBRUY7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHlCQUF5Qjs7QUFFN0I7O0FBRUE7RUFDRSxnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUU7SUFDRSx5QkFBeUI7O0VBRTNCOztBQUVBO0lBQ0UseUJBQXlCOztFQUUzQjs7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixnR0FBZ0c7O0VBRWxHOztBQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCIiwiZmlsZSI6Imxpc3QtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5leGFtcGxlLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2OTVENjtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuLm5hbWV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgXHJcbn1cclxuXHJcbi5tYXQtY2FyZC10aXRsZXtcclxuICBmb250LWZhbWlseTogJ0JydXNoIFNjcmlwdCcsIGN1cnNpdmUsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuOyBcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbiAgXHJcbiAgLmltYWdlTWFsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM0QjZCO1xyXG5cclxuICB9XHJcblxyXG4gIC5pbWFnZUZlbWFsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmIwNjdlO1xyXG5cclxuICB9XHJcbiAgLmltYWdlT3RoZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU5MDI2NjtcclxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZTQwMzAzLCAjZmY4YzAwLCAjZmZlZDAwLCAjMDA4MDI2LCAjMDA0ZGZmLCAjNzUwNzg3KTsgKi9cclxuXHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZSBpbWcge1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluOyBcclxuICB9XHJcblxyXG4gIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1jYXJkOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZCQUFERTtcclxuICB9Il19 */"] });


/***/ }),

/***/ "mSt+":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class LandingPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 8, vars: 0, consts: [[1, "blurry-background"], [1, "content-container"], ["id", "img-heading", "src", "https://fontmeme.com/permalink/240115/d36fe547ad6a8edcb0bce2f94e242300.png", "alt", "glow-effect", "border", "0"], ["mat-raised-button", "", "color", "primary", "routerLink", "/mainList"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Join the Smurfy adventure where the little blue characters come to life! Explore the magical world of Smurfs and have a blast managing your own list of Smurf characters. Add, remove, and edit with a sprinkle of smurfiness! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Explore Smurf Characters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Poppins:900i');\r\n\r\n*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\n.blurry-background[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: 100vh; \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    overflow: hidden;\r\n  }\r\n\r\n.blurry-background[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url('Smurf Background.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    background-attachment: fixed;\r\n    filter: blur(3px);\r\n    z-index: -1; \r\n  }\r\n\r\n.content-container[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #ffffff; \r\n    z-index: 1; \r\n  }\r\n\r\n.content-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-family: 'Comic Neue', cursive; \r\n    font-weight: bold; \r\n    font-size: 2.1em; \r\n    margin: 0 120px; \r\n    padding-bottom: 60px; \r\n    \r\n    line-height: 1.5;\r\n    \r\n  }\r\n\r\n\r\n\r\n@media screen and (max-width: 1225px) {\r\n\r\n  #img-heading[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n\r\n  .blurry-background[_ngcontent-%COMP%]::before {\r\n    filter: blur(8px);\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 850px) {\r\n  #img-heading[_ngcontent-%COMP%]{\r\n    margin-bottom: 40px;\r\n  }\r\n  .content-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-weight: 700; \r\n    font-size: 1.7em; \r\n    margin: 0 90px; \r\n    padding-bottom: 40px; \r\n    \r\n    line-height: 1.3;\r\n    \r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .content-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 1.2em; \r\n    margin: 0 40px; \r\n    \r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1FQUFtRTs7QUFFbkU7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUUsZ0JBQWdCOztBQUNsQjtJQUNJLGtCQUFrQjtJQUNsQixhQUFhLEVBQUUsZ0NBQWdDO0lBQy9DLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDZDQUF1RDtJQUN2RCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLFdBQVcsRUFBRSxnREFBZ0Q7RUFDL0Q7O0FBQ0Y7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYyxFQUFFLGtEQUFrRDtJQUNsRSxVQUFVLEVBQUUsdURBQXVEO0VBQ3JFOztBQUdBO0lBQ0Usa0NBQWtDLEVBQUUsaUNBQWlDO0lBQ3JFLGlCQUFpQixFQUFFLHFDQUFxQztJQUN4RCxnQkFBZ0IsRUFBRSxtQ0FBbUM7SUFDckQsZUFBZSxFQUFFLDBCQUEwQjtJQUMzQyxvQkFBb0IsRUFBRSw0QkFBNEI7SUFDbEQsMkJBQTJCO0lBQzNCLGdCQUFnQjs7RUFFbEI7O0FBRUEsc0JBQXNCOztBQUN4Qjs7RUFFRTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7QUFFRjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxnQkFBZ0IsRUFBRSxxQ0FBcUM7SUFDdkQsZ0JBQWdCLEVBQUUsbUNBQW1DO0lBQ3JELGNBQWMsRUFBRSwwQkFBMEI7SUFDMUMsb0JBQW9CLEVBQUUsNEJBQTRCO0lBQ2xELDJCQUEyQjtJQUMzQixnQkFBZ0I7O0VBRWxCOztBQUVGOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0IsRUFBRSxtQ0FBbUM7SUFDckQsY0FBYyxFQUFFLDBCQUEwQjs7RUFFNUM7O0FBRUYiLCJmaWxlIjoibGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6OTAwaScpO1xyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuICAvKiBDU1Mgc3R5bGluZyAqL1xyXG4uYmx1cnJ5LWJhY2tncm91bmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDsgLyogRW5zdXJlIGZ1bGwgdmlld3BvcnQgaGVpZ2h0ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLmJsdXJyeS1iYWNrZ3JvdW5kOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9pbWFnZXMvU211cmYgQmFja2dyb3VuZC5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgICB6LWluZGV4OiAtMTsgLyogUGxhY2UgdGhlIHBzZXVkby1lbGVtZW50IGJlaGluZCB0aGUgY29udGVudCAqL1xyXG4gIH1cclxuLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmZmZmOyAvKlNldCB0ZXh0IGNvbG9yIHRvIGNvbnRyYXN0IHdpdGggdGhlIGJhY2tncm91bmQgKi9cclxuICAgIHotaW5kZXg6IDE7IC8qIEVuc3VyZSB0aGUgY29udGVudCBpcyBhYm92ZSB0aGUgYmx1cnJlZCBiYWNrZ3JvdW5kICovXHJcbiAgfVxyXG5cclxuXHJcbiAgLmNvbnRlbnQtY29udGFpbmVyIHAge1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb21pYyBOZXVlJywgY3Vyc2l2ZTsgLyogVXNlIHRoZSBzZWxlY3RlZCBHb29nbGUgRm9udCAqL1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IC8qIEFkanVzdCB0aGUgZm9udCB3ZWlnaHQgYXMgbmVlZGVkICovXHJcbiAgICBmb250LXNpemU6IDIuMWVtOyAvKiBBZGp1c3QgdGhlIGZvbnQgc2l6ZSBhcyBuZWVkZWQgKi9cclxuICAgIG1hcmdpbjogMCAxMjBweDsgLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDsgLypBZGp1c3QgcGFkZGluZyBhcyBuZWVkZWQgKi9cclxuICAgIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC8qIFJlc3BvbnNpdmUgU3R5bGVzICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMjVweCkge1xyXG5cclxuICAjaW1nLWhlYWRpbmd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5ibHVycnktYmFja2dyb3VuZDo6YmVmb3JlIHtcclxuICAgIGZpbHRlcjogYmx1cig4cHgpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgI2ltZy1oZWFkaW5ne1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB9XHJcbiAgLmNvbnRlbnQtY29udGFpbmVyIHAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDsgLyogQWRqdXN0IHRoZSBmb250IHdlaWdodCBhcyBuZWVkZWQgKi9cclxuICAgIGZvbnQtc2l6ZTogMS43ZW07IC8qIEFkanVzdCB0aGUgZm9udCBzaXplIGFzIG5lZWRlZCAqL1xyXG4gICAgbWFyZ2luOiAwIDkwcHg7IC8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7IC8qQWRqdXN0IHBhZGRpbmcgYXMgbmVlZGVkICovXHJcbiAgICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXHJcbiAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuY29udGVudC1jb250YWluZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtOyAvKiBBZGp1c3QgdGhlIGZvbnQgc2l6ZSBhcyBuZWVkZWQgKi9cclxuICAgIG1hcmdpbjogMCA0MHB4OyAvKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cclxuICAgIFxyXG4gIH1cclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "tkQa":
/*!**************************************************************************!*\
  !*** ./src/app/main-list/list-item-detail/list-item-detail.component.ts ***!
  \**************************************************************************/
/*! exports provided: ListItemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemDetailComponent", function() { return ListItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _main_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main-list.service */ "zzWv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






const _c0 = function (a0, a1, a2) { return { imageMale: a0, imageFemale: a1, imageOther: a2 }; };
class ListItemDetailComponent {
    constructor(listService, activatedRoute) {
        this.listService = listService;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.itemId = +this.activatedRoute.snapshot.paramMap.get('id');
        this.item = this.listService.getItems().find(x => x.id === this.itemId);
    }
    onDelete() {
        this.listService.removeItem(this.itemId);
    }
}
ListItemDetailComponent.ɵfac = function ListItemDetailComponent_Factory(t) { return new (t || ListItemDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_main_list_service__WEBPACK_IMPORTED_MODULE_1__["MainListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ListItemDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListItemDetailComponent, selectors: [["app-list-item-detail"]], decls: 32, vars: 13, consts: [[1, "container"], [1, "example-card"], [1, "content-container"], [1, "image", 3, "ngClass"], ["mat-card-image", "", 3, "src", "alt"], [1, "text-container"], ["mat-raised-button", "", 3, "routerLink"], ["mat-raised-button", "", "color", "warn", "routerLink", "/mainList/", 3, "click"]], template: function ListItemDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sex: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Height: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Age: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "EDIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListItemDetailComponent_Template_button_click_30_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "DELETE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](9, _c0, ctx.item.sex === "Male", ctx.item.sex === "Female", ctx.item.sex === "Other"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.item.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Photo of ", ctx.item.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.item.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.sex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.item.height, " cm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.item.age, " Years");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/mainList/itemEdit/", ctx.item.id, "");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".example-card[_ngcontent-%COMP%] {\r\n    background-color: #4695D6;\r\n    width: 80%; \r\n    height: 100%;\r\n\r\n  }\r\n  \r\n  .content-container[_ngcontent-%COMP%] {\r\n    display: flex; \r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  \r\n  .image[_ngcontent-%COMP%] {\r\n    width: 40%; \r\n    height: 300px; \r\n    overflow: hidden; \r\n    margin-right: 40px;\r\n  }\r\n  \r\n  .imageMale[_ngcontent-%COMP%] {\r\n    background-color: #234B6B;\r\n\r\n  }\r\n  \r\n  .imageFemale[_ngcontent-%COMP%] {\r\n    background-color: #bb067e;\r\n\r\n  }\r\n  \r\n  .imageOther[_ngcontent-%COMP%] {\r\n    background-color: #590266;\r\n    \r\n\r\n  }\r\n  \r\n  .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-top: 1px;\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: contain; \r\n  }\r\n  \r\n  .text-container[_ngcontent-%COMP%] {\r\n    flex: 1; \r\n    padding: 0 10px; \r\n  }\r\n  \r\n  .mat-card-content[_ngcontent-%COMP%] {\r\n    margin-top: 10px; \r\n  }\r\n  \r\n  .container[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    \r\n  }\r\n  \r\n  h1[_ngcontent-%COMP%]{\r\n    font-family: 'Brush Script', cursive, sans-serif;\r\n    font-size: 350%;\r\n    padding: 30px 0;\r\n    line-height: 1.0;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  .mat-card-header[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n  \r\n  p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{\r\n    font-size: larger;\r\n  }\r\n  \r\n  .mat-card-actions[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  hr[_ngcontent-%COMP%]{\r\n      border: 3px solid #90BFE6\r\n      ;\r\n  border-radius: 5px;\r\n    }\r\n  \r\n  \r\n  \r\n  @media screen and (max-width: 1225px) {\r\n\r\n  }\r\n  \r\n  @media screen and (max-width: 920px) {\r\n    .content-container[_ngcontent-%COMP%] {\r\n      flex-direction: column; \r\n      align-items: center;\r\n    }\r\n    .image[_ngcontent-%COMP%] {\r\n      width: 70%; \r\n      height: 300px; \r\n      overflow: hidden; \r\n      margin-right: 0px;\r\n    }\r\n\r\n    .mat-card-actions[_ngcontent-%COMP%]{\r\n      display: flex;\r\n      justify-content: space-around;\r\n    }\r\n    h1[_ngcontent-%COMP%]{\r\n      margin: auto;\r\n    }\r\n    ul[_ngcontent-%COMP%]{\r\n      list-style: none;\r\n      padding: 20px 0;\r\n    }\r\n\r\n    p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{\r\n      font-size: medium;\r\n      text-align: center;\r\n    }\r\n    h1[_ngcontent-%COMP%]{\r\n      font-size: 300%;\r\n\r\n    }\r\n\r\n  }\r\n  \r\n  @media screen and (max-width: 600px) {\r\n    p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{\r\n      font-size: small;\r\n      text-align: center;\r\n    }\r\n    h1[_ngcontent-%COMP%]{\r\n      font-size: 230%;\r\n\r\n    }\r\n\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtaXRlbS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVLEVBQUUsc0NBQXNDO0lBQ2xELFlBQVk7O0VBRWQ7O0VBRUE7SUFDRSxhQUFhLEVBQUUsOENBQThDO0lBQzdELG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxVQUFVLEVBQUUsNENBQTRDO0lBQ3hELGFBQWEsRUFBRSxrREFBa0Q7SUFDakUsZ0JBQWdCLEVBQUUscUNBQXFDO0lBQ3ZELGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHlCQUF5Qjs7RUFFM0I7O0VBRUE7SUFDRSx5QkFBeUI7O0VBRTNCOztFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGdHQUFnRzs7RUFFbEc7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUIsRUFBRSwwRkFBMEY7RUFDakg7O0VBRUE7SUFDRSxPQUFPLEVBQUUseURBQXlEO0lBQ2xFLGVBQWUsRUFBRSx1REFBdUQ7RUFDMUU7O0VBRUE7SUFDRSxnQkFBZ0IsRUFBRSxxREFBcUQ7RUFDekU7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBQ0E7SUFDRSxnREFBZ0Q7SUFDaEQsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0VBQzNCOztFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtFQUNoQzs7RUFDRTtNQUNFO01BQ0E7RUFDSixrQkFBa0I7SUFDaEI7O0VBQ0Esc0JBQXNCOztFQUN6Qjs7RUFFQzs7RUFFQTtJQUNFO01BQ0Usc0JBQXNCLEVBQUUsMkJBQTJCO01BQ25ELG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsVUFBVSxFQUFFLDRDQUE0QztNQUN4RCxhQUFhLEVBQUUsa0RBQWtEO01BQ2pFLGdCQUFnQixFQUFFLHFDQUFxQztNQUN2RCxpQkFBaUI7SUFDbkI7O0lBRUE7TUFDRSxhQUFhO01BQ2IsNkJBQTZCO0lBQy9CO0lBQ0E7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLGdCQUFnQjtNQUNoQixlQUFlO0lBQ2pCOztJQUVBO01BQ0UsaUJBQWlCO01BQ2pCLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0UsZUFBZTs7SUFFakI7O0VBRUY7O0VBRUE7SUFDRTtNQUNFLGdCQUFnQjtNQUNoQixrQkFBa0I7SUFDcEI7SUFDQTtNQUNFLGVBQWU7O0lBRWpCOztFQUVGIiwiZmlsZSI6Imxpc3QtaXRlbS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2OTVENjtcclxuICAgIHdpZHRoOiA4MCU7IC8qIFNldCB0aGUgZGVzaXJlZCB3aWR0aCBvZiB0aGUgY2FyZCAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IC8qIFVzZSBmbGV4Ym94IHRvIGFycmFuZ2UgaXRlbXMgaG9yaXpvbnRhbGx5ICovXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZSB7XHJcbiAgICB3aWR0aDogNDAlOyAvKiBBZGp1c3QgdGhlIHdpZHRoIG9mIHRoZSBpbWFnZSBjb250YWluZXIgKi9cclxuICAgIGhlaWdodDogMzAwcHg7IC8qIFNldCB0aGUgZGVzaXJlZCBoZWlnaHQgb2YgdGhlIGltYWdlIGNvbnRhaW5lciAqL1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogSGlkZSBhbnkgb3ZlcmZsb3cgZnJvbSB0aGUgaW1hZ2UgKi9cclxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICB9XHJcblxyXG4gIC5pbWFnZU1hbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzNEI2QjtcclxuXHJcbiAgfVxyXG5cclxuICAuaW1hZ2VGZW1hbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiMDY3ZTtcclxuXHJcbiAgfVxyXG4gIC5pbWFnZU90aGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1OTAyNjY7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2U0MDMwMywgI2ZmOGMwMCwgI2ZmZWQwMCwgIzAwODAyNiwgIzAwNGRmZiwgIzc1MDc4Nyk7ICovXHJcblxyXG4gIH1cclxuICBcclxuICAuaW1hZ2UgaW1nIHtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjsgLyogRW5zdXJlIHRoZSBlbnRpcmUgaW1hZ2UgaXMgdmlzaWJsZSB3aXRoaW4gdGhlIGNvbnRhaW5lciwgbWFpbnRhaW5pbmcgaXRzIGFzcGVjdCByYXRpbyAqL1xyXG4gIH1cclxuICBcclxuICAudGV4dC1jb250YWluZXIge1xyXG4gICAgZmxleDogMTsgLyogQWxsb3cgdGhlIHRleHQgY29udGFpbmVyIHRvIHRha2UgdGhlIHJlbWFpbmluZyBzcGFjZSAqL1xyXG4gICAgcGFkZGluZzogMCAxMHB4OyAvKiBBZGQgcGFkZGluZyBmb3Igc3BhY2luZyBiZXR3ZWVuIHRoZSBpbWFnZSBhbmQgdGV4dCAqL1xyXG4gIH1cclxuICBcclxuICAubWF0LWNhcmQtY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyAvKiBBZGQgbWFyZ2luIGJldHdlZW4gdGhlIHRleHQgYW5kIHRoZSBtYWluIGNvbnRlbnQgKi9cclxuICB9XHJcblxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvKiBwYWRkaW5nOiA1JSAwOyAqL1xyXG4gIH1cclxuICBoMXtcclxuICAgIGZvbnQtZmFtaWx5OiAnQnJ1c2ggU2NyaXB0JywgY3Vyc2l2ZSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMzUwJTtcclxuICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAubWF0LWNhcmQtaGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgcCwgdWx7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICB9XHJcblxyXG4gIC5tYXQtY2FyZC1hY3Rpb25ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgICBocntcclxuICAgICAgYm9yZGVyOiAzcHggc29saWQgIzkwQkZFNlxyXG4gICAgICA7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gICAgLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cclxuIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMjVweCkge1xyXG5cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTIwcHgpIHtcclxuICAgIC5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIFN0YWNrIGl0ZW1zIHZlcnRpY2FsbHkgKi9cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5pbWFnZSB7XHJcbiAgICAgIHdpZHRoOiA3MCU7IC8qIEFkanVzdCB0aGUgd2lkdGggb2YgdGhlIGltYWdlIGNvbnRhaW5lciAqL1xyXG4gICAgICBoZWlnaHQ6IDMwMHB4OyAvKiBTZXQgdGhlIGRlc2lyZWQgaGVpZ2h0IG9mIHRoZSBpbWFnZSBjb250YWluZXIgKi9cclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogSGlkZSBhbnkgb3ZlcmZsb3cgZnJvbSB0aGUgaW1hZ2UgKi9cclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1jYXJkLWFjdGlvbnN7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgfVxyXG4gICAgaDF7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgIHVse1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcCwgdWx7XHJcbiAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBoMXtcclxuICAgICAgZm9udC1zaXplOiAzMDAlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBwLCB1bHtcclxuICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgaDF7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjMwJTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH0gIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "mSt+");
/* harmony import */ var _main_list_main_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-list/main-list.component */ "fUvo");
/* harmony import */ var _main_list_list_item_detail_list_item_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-list/list-item-detail/list-item-detail.component */ "tkQa");
/* harmony import */ var _main_list_list_item_edit_list_item_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-list/list-item-edit/list-item-edit.component */ "4N5w");
/* harmony import */ var _main_list_the_list_items_the_list_items_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-list/the-list-items/the-list-items.component */ "zX+C");
/* harmony import */ var _main_list_new_list_item_new_list_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-list/new-list-item/new-list-item.component */ "ZrMM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    { path: '', redirectTo: '/landingPage', pathMatch: 'full' },
    { path: 'landingPage', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__["LandingPageComponent"] },
    { path: 'mainList', component: _main_list_main_list_component__WEBPACK_IMPORTED_MODULE_2__["MainListComponent"], children: [
            { path: '', component: _main_list_the_list_items_the_list_items_component__WEBPACK_IMPORTED_MODULE_5__["TheListItemsComponent"] },
            { path: 'itemDetails/:id', component: _main_list_list_item_detail_list_item_detail_component__WEBPACK_IMPORTED_MODULE_3__["ListItemDetailComponent"] },
            { path: 'itemEdit/:id', component: _main_list_list_item_edit_list_item_edit_component__WEBPACK_IMPORTED_MODULE_4__["ListItemEditComponent"] },
            { path: 'addNewSmurf', component: _main_list_new_list_item_new_list_item_component__WEBPACK_IMPORTED_MODULE_6__["NewListItemComponent"] },
        ] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zX+C":
/*!**********************************************************************!*\
  !*** ./src/app/main-list/the-list-items/the-list-items.component.ts ***!
  \**********************************************************************/
/*! exports provided: TheListItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TheListItemsComponent", function() { return TheListItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _main_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main-list.service */ "zzWv");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-item/list-item.component */ "jnub");






function TheListItemsComponent_app_list_item_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-list-item", 6);
} if (rf & 2) {
    const itemEl_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", itemEl_r1);
} }
class TheListItemsComponent {
    constructor(listService) {
        this.listService = listService;
        this.items = [];
    }
    ngOnInit() {
        this.items = this.listService.getItems();
    }
}
TheListItemsComponent.ɵfac = function TheListItemsComponent_Factory(t) { return new (t || TheListItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_main_list_service__WEBPACK_IMPORTED_MODULE_1__["MainListService"])); };
TheListItemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TheListItemsComponent, selectors: [["app-the-list-items"]], decls: 9, vars: 1, consts: [[1, "heading"], [1, "title"], [1, "sub-heading"], ["mat-raised-button", "", "color", "primary", "routerLink", "/mainList/addNewSmurf"], [1, "container"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"]], template: function TheListItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SMURF CHARACTERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " CREATE A NEW SMURF ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TheListItemsComponent_app_list_item_8_Template, 1, 1, "app-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_5__["ListItemComponent"]], styles: [".container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    \r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    padding-right: 20px;\r\n    \r\n    color:#0b2b46  !important;\r\n    \r\n    font:20px cursive;\r\n    text-shadow: 0px 4px 3px rgba(0,0,0,0.4),\r\n               0px 8px 13px rgba(0,0,0,0.1),\r\n               0px 18px 23px rgba(0,0,0,0.1);\r\n  }\r\n\r\n.sub-heading[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: right;\r\n    align-items: center;\r\n  }\r\n\r\n.heading[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n\r\n.title[_ngcontent-%COMP%]{\r\n    font-size: 300%;\r\n  }\r\n\r\n\r\n\r\n@media screen and (max-width: 1225px) {\r\n\r\n  }\r\n\r\n@media screen and (max-width: 850px) {\r\n    .container[_ngcontent-%COMP%]{\r\n      flex-direction: column; \r\n      align-items: center; \r\n      \r\n  }\r\n\r\n  .title[_ngcontent-%COMP%]{\r\n    font-size: 150%;\r\n  }\r\n\r\n  }\r\n\r\n@media screen and (max-width: 600px) {\r\n    .title[_ngcontent-%COMP%]{\r\n      font-size: 100%;\r\n    }\r\n\r\n    button[_ngcontent-%COMP%]{\r\n      font-size: 0.7em;\r\n    }\r\n\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZS1saXN0LWl0ZW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQjs7NENBRXdDO0VBQzFDOztBQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0VBQ2hDOztBQUVBO0lBQ0UsZUFBZTtFQUNqQjs7QUFJRSxzQkFBc0I7O0FBQ3ZCOztFQUVEOztBQUVBO0lBQ0U7TUFDRSxzQkFBc0IsRUFBRSwyQkFBMkI7TUFDbkQsbUJBQW1CLEVBQUUsOEJBQThCOztFQUV2RDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7O0FBRUE7SUFDRTtNQUNFLGVBQWU7SUFDakI7O0lBRUE7TUFDRSxnQkFBZ0I7SUFDbEI7O0VBRUYiLCJmaWxlIjoidGhlLWxpc3QtaXRlbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgXHJcbn1cclxuXHJcbmgxe1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIC8qIHRleHQtYWxpZ246Y2VudGVyOyAqL1xyXG4gICAgY29sb3I6IzBiMmI0NiAgIWltcG9ydGFudDtcclxuICAgIC8qIG1hcmdpbi10b3A6MjAlOyAqL1xyXG4gICAgZm9udDoyMHB4IGN1cnNpdmU7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDRweCAzcHggcmdiYSgwLDAsMCwwLjQpLFxyXG4gICAgICAgICAgICAgICAwcHggOHB4IDEzcHggcmdiYSgwLDAsMCwwLjEpLFxyXG4gICAgICAgICAgICAgICAwcHggMThweCAyM3B4IHJnYmEoMCwwLDAsMC4xKTtcclxuICB9XHJcbiAgLnN1Yi1oZWFkaW5ne1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRpbmd7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAzMDAlO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAgIC8qIFJlc3BvbnNpdmUgU3R5bGVzICovXHJcbiAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMjVweCkge1xyXG5cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIFN0YWNrIGl0ZW1zIHZlcnRpY2FsbHkgKi9cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudGVyIGl0ZW1zIGhvcml6b250YWxseSAqL1xyXG4gICAgICBcclxuICB9XHJcblxyXG4gIC50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxuICB9XHJcblxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLnRpdGxle1xyXG4gICAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9ue1xyXG4gICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgfVxyXG5cclxuICB9ICJdfQ== */"] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zzWv":
/*!************************************************!*\
  !*** ./src/app/main-list/main-list.service.ts ***!
  \************************************************/
/*! exports provided: MainListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainListService", function() { return MainListService; });
/* harmony import */ var _item_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.model */ "cRaf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MainListService {
    constructor() {
        this.items = [
            new _item_model__WEBPACK_IMPORTED_MODULE_0__["Item"](1, 'Poet Smurf', "With a flair for language and a passion for verse, this character brings eloquence and beauty to the series as he composes poems inspired by the world around him. His heartfelt compositions often provide insight into the emotions and experiences of his fellow Smurfs, emphasizing the importance of communication and self-expression. Furthermore, his talent for transforming thoughts and feelings into captivating poetry showcases the transformative power of words.", 'https://pngimg.com/uploads/smurf/smurf_PNG43.png', 'Male', 154, 25),
            new _item_model__WEBPACK_IMPORTED_MODULE_0__["Item"](2, 'Grouchy Smurf', "Famous for his grumbling and cantankerous attitude, this character brings depth and complexity to the show by highlighting the fact that not everyone is always sunshine and rainbows. Through his interactions with others, he demonstrates the power of empathy and understanding, even when dealing with someone who appears unapproachable. As the series progresses, his character evolves by learning the importance of opening up to others and embracing positivity.", 'https://pngimg.com/uploads/smurf/smurf_PNG7.png', 'Male', 153, 24),
            new _item_model__WEBPACK_IMPORTED_MODULE_0__["Item"](3, 'Smurfette', "As the sole female Smurf in the village, she brings a unique perspective and presence to the show, captivating audiences with her kindness, intelligence, and beauty. Her story arc of self-discovery and personal growth serves as an inspiring tale of empowerment and resilience, demonstrating the importance of embracing one's true identity. Her character reinforces the idea that we all have something special to offer and that our differences make us strong.", 'https://pngimg.com/uploads/smurf/smurf_PNG53.png', 'Female', 130, 21),
            new _item_model__WEBPACK_IMPORTED_MODULE_0__["Item"](4, 'Hefty Smurf', "With his impressive strength and unwavering determination, this character showcases the importance of physical fitness and perseverance. Whether he's lifting heavy objects or protecting his fellow Smurfs from harm, his bravery and dedication to his community make him an inspiring role model. His character also serves as a reminder that strength comes in many forms – both physical and emotional – and can be harnessed to overcome adversity.", 'https://pngimg.com/uploads/smurf/smurf_PNG9.png', 'Male', 157, 25),
            new _item_model__WEBPACK_IMPORTED_MODULE_0__["Item"](5, 'Willow', "The girls’ leader and the female equivalent of Papa Smurf.  She’s the matriarch, someone the girls trust and look up to. And for good reason. She’s wise, strong, brave, and funny. She knows the secrets of nature and the properties of every kind of plant. She can even communicate with them! Unlike Papa Smurf, Willow is more like a shaman than an alchemist.She has a lighter side too and she loves to tease Papa Smurf. Without a doubt, her favorite pastime is playing dominoes. And nobody dares challenge her because she’s just too good !", 'https://pngimg.com/uploads/smurf/smurf_PNG71.png', 'Female', 1, 22),
            new _item_model__WEBPACK_IMPORTED_MODULE_0__["Item"](6, 'Clumsy Smurf', "Despite being constantly tripped up by his own two feet, this endearing character never fails to bring humor and heart to every situation. His oafish appearances and lack of coordination lend themselves to frequent misunderstandings and comical mishaps, which often result in calamity for others. However, his optimism, adaptability, and unconditional love for his fellow Smurfs make him an incredibly lovable character whose value transcends his clumsiness.", 'https://pngimg.com/uploads/smurf/smurf_PNG40.png', 'Male', 151, 22),
            new _item_model__WEBPACK_IMPORTED_MODULE_0__["Item"](7, 'Sloppy Smurf', "A lover of filth and chaos, this character stands out among the meticulously clean and orderly Smurfs with his disheveled appearance and unique enjoyment of all things dirty. His fondness for sloppiness and untidiness creates both humor and conflict, reminding audiences that not everyone shares the same definition of cleanliness – and that's okay. His messy demeanor adds a touch of variety to the show, proving that diversity in character traits and personal preferences can enrich a community.", 'https://pngimg.com/uploads/smurf/smurf_PNG13.png', 'Male', 152, 24),
            new _item_model__WEBPACK_IMPORTED_MODULE_0__["Item"](8, 'Blossom', "Blossom is the cheerleader, overflowing with positive energy. She’s incredibly talkative, energetic, even exhausting. Blossom gets excited about everything and shows it, bouncing around and talking a mile a minute. She says whatever crosses her mind without thinking first, which can be inappropriate, but also very funny. She is a great friend and adores meeting new people.", 'https://pngimg.com/uploads/smurf/smurf_PNG14.png', 'Female', 2, 23),
            new _item_model__WEBPACK_IMPORTED_MODULE_0__["Item"](9, 'Chef Smurf', "Whether creating delicious feasts or baking mouthwatering treats, this culinary master showcases the power of food in bringing people together and uplifting spirits. His creativity and dedication to his craft not only keep the Smurf village well-fed but also highlight the importance of passion and the joy that can be found in sharing one's talents. Moreover, his character serves as a reminder that everyone has a unique role to play within a community, and that even seemingly small contributions can have a significant impact.", 'https://pngimg.com/uploads/smurf/smurf_PNG16.png', 'Male', 149, 23),
            new _item_model__WEBPACK_IMPORTED_MODULE_0__["Item"](10, 'Brainy Smurf', "As the village intellectual, this bespectacled character impresses with his vast knowledge, quick wit, and penchant for delivering eloquent speeches – albeit sometimes unsolicited. Although his know-it-all attitude often rubs others the wrong way, his expertise and problem-solving skills make him a valuable asset in overcoming countless obstacles. His character highlights the importance of intelligence and critical thinking, while also teaching the value of humility and listening to others' perspectives.", 'https://pngimg.com/uploads/smurf/smurf_PNG54.png', 'Male', 147, 23),
            new _item_model__WEBPACK_IMPORTED_MODULE_0__["Item"](11, 'Brainy Smurf', "As the village intellectual, this bespectacled character impresses with his vast knowledge, quick wit, and penchant for delivering eloquent speeches – albeit sometimes unsolicited. Although his know-it-all attitude often rubs others the wrong way, his expertise and problem-solving skills make him a valuable asset in overcoming countless obstacles. His character highlights the importance of intelligence and critical thinking, while also teaching the value of humility and listening to others' perspectives.", 'https://pngimg.com/uploads/smurf/smurf_PNG18.png', 'Male', 147, 23),
            new _item_model__WEBPACK_IMPORTED_MODULE_0__["Item"](12, 'Brainy Smurf', "As the village intellectual, this bespectacled character impresses with his vast knowledge, quick wit, and penchant for delivering eloquent speeches – albeit sometimes unsolicited. Although his know-it-all attitude often rubs others the wrong way, his expertise and problem-solving skills make him a valuable asset in overcoming countless obstacles. His character highlights the importance of intelligence and critical thinking, while also teaching the value of humility and listening to others' perspectives.", 'https://pngimg.com/uploads/smurf/smurf_PNG20.png', 'Male', 147, 23),
            new _item_model__WEBPACK_IMPORTED_MODULE_0__["Item"](13, 'Princess Salvina', "This courageous and kind-hearted princess brings a touch of royalty and enchantment to the series as she bravely stands up against evil forces. Her spirit of adventure and determination to help others make her an inspiration for both the Smurfs and viewers alike. Furthermore, her valiant efforts to protect her kingdom from harm demonstrate the importance of selflessness and bravery.", 'https://pngimg.com/uploads/smurf/smurf_PNG23.png', 'Female', 150, 20),
            new _item_model__WEBPACK_IMPORTED_MODULE_0__["Item"](14, 'Scaredy Smurf', "This timid and anxious character demonstrates the universal nature of fear and the need to confront it to grow and thrive. His trepidation often leads to humorous situations and misunderstandings, but his gradual building of confidence throughout the series showcases the importance of self-belief and courage. Through his experiences, viewers learn valuable lessons about facing one's fears and the power of supportive friendships.", 'https://pngimg.com/uploads/smurf/smurf_PNG24.png', 'Male', 148, 22),
            new _item_model__WEBPACK_IMPORTED_MODULE_0__["Item"](15, 'Vanity Smurf', "This character's preoccupation with his own appearance and self-admiration brings both humor and insight to the series. Although often perceived as shallow or narcissistic, he serves as an important reminder of the importance of self-love and confidence. Moreover, his personal growth throughout the show highlights the need for balancing self-esteem with humility and empathy for others.", 'https://pngimg.com/uploads/smurf/smurf_PNG67.png', 'Male', 155, 24),
            new _item_model__WEBPACK_IMPORTED_MODULE_0__["Item"](16, 'Vexy', "Vexy is the secondary antagonist turned deuteragonist of The Smurfs 2. and a cameo character of The Smurfs: The Legend of Smurfy Hollow. She is a smart and mischievous former Naughty who was created by Gargamel along with Hackus.", 'https://pngimg.com/uploads/smurf/smurf_PNG68.png', 'Other', 2, 24),
            new _item_model__WEBPACK_IMPORTED_MODULE_0__["Item"](17, 'Papa Smurf', "As the wise, knowledgeable, and authoritative leader of the Smurf village, he guides and mentors his fellow Smurfs through various challenges, conflicts, and adventures. His fatherly demeanor and distinct red clothing symbolize his crucial role in providing stability and direction for the village. His penchant for creating magical potions and offering sage advice highlights the significance of experience, wisdom, and leadership.", 'https://pngimg.com/uploads/smurf/smurf_PNG29.png', 'Male', 547, 27),
            new _item_model__WEBPACK_IMPORTED_MODULE_0__["Item"](18, 'Grouchy Smurf', 'Famous for his grumbling and cantankerous attitude, this character brings depth and complexity to the show by highlighting the fact that not everyone is always sunshine and rainbows. Through his interactions with others, he demonstrates the power of empathy and understanding, even when dealing with someone who appears unapproachable. As the series progresses, his character evolves by learning the importance of opening up to others and embracing positivity.', 'https://pngimg.com/uploads/smurf/smurf_PNG30.png', 'Male', 153, 24),
            new _item_model__WEBPACK_IMPORTED_MODULE_0__["Item"](19, 'Gutsy Smurf', "With his adventurous spirit and fearless approach to life, this character injects excitement and bravery into the show's storylines. His daring escapades often lead to thrilling and suspenseful adventures, showcasing the importance of courage and resilience in overcoming challenges. Through his actions, he encourages his fellow Smurfs to step out of their comfort zones and embrace new experiences with gusto.", 'https://pngimg.com/uploads/smurf/smurf_PNG32.png', 'Male', 155, 28),
            new _item_model__WEBPACK_IMPORTED_MODULE_0__["Item"](20, 'Hackus', "Hackus is one of the (former) tertiary antagonists in The Smurfs 2. He is a funny and physical Naughty who was created by Gargamel along with Vexy.", 'https://pngimg.com/uploads/smurf/smurf_PNG33.png', 'Other', 2, 26),
            new _item_model__WEBPACK_IMPORTED_MODULE_0__["Item"](21, 'Jokey Smurf', "As the village prankster, this character's mischievous sense of humor brings laughter and lightheartedness to even the most serious situations. Despite occasionally rubbing others the wrong way with his practical jokes, his good-hearted nature and genuine affection for his fellow Smurfs make his antics more endearing than malicious. Through his character, audiences learn the value of humor, playfulness, and the importance of not taking oneself too seriously.", 'https://pngimg.com/uploads/smurf/smurf_PNG42.png', 'Male', 153, 20),
            new _item_model__WEBPACK_IMPORTED_MODULE_0__["Item"](22, 'Lily', "Lily is very smart and rational, never acts without thinking something through, and has little time for silliness. Lily is quieter than the other girls, but when she speaks, she means it. She tells it like it is and pulls no punches. She’s one of the few girls who can calm Storm down when something – or someone – has gotten her riled up.", 'https://pngimg.com/uploads/smurf/smurf_PNG59.png', 'Female', 2, 20),
            new _item_model__WEBPACK_IMPORTED_MODULE_0__["Item"](23, 'Hefty Smurf', "With his impressive strength and unwavering determination, this character showcases the importance of physical fitness and perseverance. Whether he's lifting heavy objects or protecting his fellow Smurfs from harm, his bravery and dedication to his community make him an inspiring role model. His character also serves as a reminder that strength comes in many forms – both physical and emotional – and can be harnessed to overcome adversity.", 'https://pngimg.com/uploads/smurf/smurf_PNG36.png', 'Male', 157, 25),
            new _item_model__WEBPACK_IMPORTED_MODULE_0__["Item"](24, 'Storm', "The fiercest female Smurf, Storm is an expert markswoman, an outstanding athlete, brave as can be, and as tough as nails. She loves to challenge Hefty and show off how strong and agile she is. Storm is not the least bit touchy-feely and has no patience for the mushy stuff – except when it comes to kittens. At times, she can be rather abrasive. That said, she is extremely loyal and protective of her friends.", 'https://pngimg.com/uploads/smurf/smurf_PNG39.png', 'Female', 1, 21),
        ];
    }
    getListSize() {
        return this.items.length;
    }
    getItems() {
        return this.items;
    }
    getItemId(id) {
        return this.items[id];
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(id) {
        const indexToRemove = this.items.findIndex(item => item.id === id);
        if (indexToRemove !== -1) {
            this.items.splice(indexToRemove, 1);
            alert('Smurf has been removed!');
            // Alternatively
            // this.items = this.items.filter(item => item.id !== id);
        }
    }
    updateItem(itemInfo) {
        const foundItem = this.items.find(item => item.id === itemInfo.id);
        if (foundItem) {
            foundItem.name = itemInfo.name;
            foundItem.description = itemInfo.description;
            foundItem.imagePath = itemInfo.imagePath;
            foundItem.sex = itemInfo.sex;
            foundItem.height = itemInfo.height;
            foundItem.age = itemInfo.age;
        }
        else {
            alert(`Item with ID ${itemInfo.id} not found`);
        }
    }
}
MainListService.ɵfac = function MainListService_Factory(t) { return new (t || MainListService)(); };
MainListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MainListService, factory: MainListService.ɵfac });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map