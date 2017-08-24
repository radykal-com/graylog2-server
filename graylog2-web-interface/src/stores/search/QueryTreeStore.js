import React from 'react';
import Reflux from 'reflux';

import { QueryTreeNode } from 'components/search';
import ActionsProvider from 'injection/ActionsProvider';

const QueryTreeActions = ActionsProvider.getActions('QueryTree');

const renderTitle = ({ node }) => <QueryTreeNode node={node} />;
const renderSubtitle = ({ node }) => <span>{JSON.stringify(node.parameters)}</span>;
const QueryTreeStore = Reflux.createStore({
  listenables: [QueryTreeActions],
  tree: [{
    title: renderTitle,
    subtitle: renderSubtitle,
    type: 'query',
    id: 'rootquery',
    parameters: { query: '*', time_range: { type: 'relative', relative: 300 } },
    noDragging: true,
    expanded: true,
    children: [{
      title: renderTitle,
      subtitle: renderSubtitle,
      type: 'aggregation',
      id: 'aggregation-1',
      parameters: { type: 'top-n', limit: 5 },
      expanded: true,
      children: [{
        title: renderTitle,
        subtitle: renderSubtitle,
        id: 'graph-1',
        parameters: { type: 'pie' },
        type: 'graph',
        expanded: true,
      }, {
        title: renderTitle,
        subtitle: renderSubtitle,
        id: 'alert-1',
        type: 'alert',
        parameters: { threshold: 42 },
        expanded: true,
      }],
    }],
  }],
  init() {
    this.trigger({ tree: this.tree });
  },

  getInitialState() {
    return {
      tree: this.tree,
    };
  },

  update(tree) {
    this.tree = tree;
    this.init();
  },
});

export default QueryTreeStore;