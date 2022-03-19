import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: '<%=dasherize(name)%>-view',
  templateUrl: '<%=dasherize(name)%>.view.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class <%= classify(name) %>View {}