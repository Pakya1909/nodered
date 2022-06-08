import { Component, OnInit } from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}
  
const TREE_DATA: FoodNode[] = [
  {
    name: 'Input',
    children: [{name: 'inject'}, {name: 'catch'}, {name: 'mtql'}, {name: 'http'}, {name: 'websocket'}, {name: 'tcp'}, {name: 'udp'}, {name: 'serial'}],
  },
  {
    name: 'Output',
    children: [{name: 'inject'}, {name: 'catch'}, {name: 'mtql'}],
  },
  {
    name: 'Function',
    children: [{name: 'inject'}, {name: 'catch'}, {name: 'mtql'}],
  },
  {
    name: 'Social',
    children: [{name: 'inject'}, {name: 'catch'}, {name: 'mtql'}],
  },
  {
    name: 'Storage',
    children: [{name: 'inject'}, {name: 'catch'}, {name: 'mtql'}],
  },
  {
    name: 'Analysis',
    children: [{name: 'inject'}, {name: 'catch'}, {name: 'mtql'}],
  },
  {
    name: 'Advanced',
    children: [{name: 'inject'}, {name: 'catch'}, {name: 'mtql'}],
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.css']
})
export class LeftbarComponent implements OnInit {

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  ngOnInit(): void {
  }

}
 