import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * Add the template content to the DOM unless the condition is true.
 */

/* The directive's selector is typically the directive's 
attribute name in square brackets, [appUnless]. The brackets define a CSS attribute selector.
*/
@Directive({ selector: '[appUnless]'})
export class UnlessDirective {
  private hasView = false;

  /*
  A simple structural directive like this one creates an
  embedded view from the Angular-generated <ng-template> and
   inserts that view in a view container adjacent to the directive's original <p> host element.
  */

  /*
  You'll acquire the <ng-template> contents with a TemplateRef and access the view container through a ViewContainerRef.
  */
  constructor(
    // 访问<ng-template>内容
    private templateRef: TemplateRef<any>,
    // 访问view container
    private viewContainer: ViewContainerRef) { }

    /*
    The directive consumer expects to bind a true/false 
    condition to [appUnless]. That means the directive needs an appUnless property, decorated with @Input
    */
  @Input() set appUnless(condition: boolean) {
    // 如果condition不满足才显示view
    /*
    Angular sets the appUnless property whenever the value of 
    the condition changes. Because the appUnless property does work, it needs a setter.
    */
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}