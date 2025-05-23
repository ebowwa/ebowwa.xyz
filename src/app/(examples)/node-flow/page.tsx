import Flow from '@/components/utility/node-flow/FlowContainer';

const initialData = {
  nodes: [
    { id: '1', data: { label: 'Node 1' }, position: { x: 0, y: 0 } },
    { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 100 } },
  ],
  edges: [
    { id: 'e1-2', source: '1', target: '2' },
  ],
};

export default function Page() {
  return (
    <Flow
      initialNodes={initialData.nodes}
      initialEdges={initialData.edges}
    />
  );
}