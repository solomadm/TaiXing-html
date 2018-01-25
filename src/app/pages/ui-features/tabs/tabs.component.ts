import { Component } from '@angular/core';
import {SmartTableService} from '../../../@core/data/smart-table.service';

@Component({
  selector: 'ngx-tab1',
  template: `
    <p>Early home automation began with labor-saving machines. Self-contained electric or gas powered
      <a target="_blank" href="https://en.wikipedia.org/wiki/Home_appliances">home appliances</a>
      became viable in the 1900s with the introduction of
      <a target="_blank" href="https://en.wikipedia.org/wiki/Electric_power_distribution">electric power distribution
      </a> and led to the introduction of washing machines (1904), water heaters (1889), refrigerators, sewing machines,
      dishwashers, and clothes dryers.
    </p>
  `,
})
export class Tab1Component { }

@Component({
  selector: 'ngx-tab2',
  template: `
    <p>Tab 2 works!</p>
  `,
})
export class Tab2Component { }

@Component({
  selector: 'ngx-tabs',
  styleUrls: ['./tabs.component.scss'],
  templateUrl: './tabs.component.html',
})
export class TabsComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      Number: {
        title: 'Number',
        type: 'number',
      },
      MemberGroup: {
        title: 'Member Group',
        type: 'string',
      },
      Points: {
        title: 'Points',
        type: 'number',
      },
      Active: {
        title: 'Active',
        type: 'boolean',
      },
    },
  };

  source: any = [{
    Number: 1,
    MemberGroup: 'Member Group 1',
    Points: 15,
    Active: true,
  },
    {
    Number: 2,
    MemberGroup: 'Member Group 2',
    Points: 10,
    Active: true,
  }];

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  tabs: any[] = [
    {
      title: 'Sales Information',
      route: '/pages/ui-features/tabs/tab1',
    },
    {
      title: 'Purchase Information',
      route: '/pages/ui-features/tabs/tab2',
    },
  ];

}
