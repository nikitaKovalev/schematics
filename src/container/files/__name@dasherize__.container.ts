import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: '<%=dasherize(name)%>-container',
  templateUrl: '<%=dasherize(name)%>.container.html',
  styleUrls: ['./<%=dasherize(name)%>.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class <%= classify(name) %>Container {}