"use client";

import { useMemo } from "react";
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  type Node,
  type Edge,
  type NodeProps,
} from "@xyflow/react";
import "@xyflow/react/dist/base.css";
import { skills } from "@/data/skills";

const GOLDEN_ANGLE = 137.5 * (Math.PI / 180);

/** Custom node: a plain pill with a slow CSS drift, no react-flow chrome. */
function DriftNode({ data, id }: NodeProps) {
  const index = Number(id.split("-")[1] ?? 0);
  const style = {
    "--drift-duration": `${6 + (index % 5)}s`,
    "--drift-delay": `${(index % 7) * 0.4}s`,
    "--drift-x": `${((index % 3) - 1) * 10}px`,
    "--drift-y": `${((index % 4) - 2) * 8}px`,
  } as React.CSSProperties;

  return (
    <div
      className="hero-node rounded-full border border-border bg-surface/80 px-4 py-2 font-mono text-xs text-foreground/80 shadow-lg"
      style={style}
    >
      {String(data.label)}
    </div>
  );
}

const nodeTypes = { drift: DriftNode };

function buildGraph(): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = skills.map((skill, i) => {
    const angle = i * GOLDEN_ANGLE;
    const radius = 60 + i * 34;
    return {
      id: `skill-${i}`,
      type: "drift",
      position: {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle),
      },
      data: { label: skill.name },
      draggable: false,
      selectable: false,
      connectable: false,
    };
  });

  const edges: Edge[] = nodes.slice(1).map((node, i) => ({
    id: `edge-${i}`,
    source: nodes[i].id,
    target: node.id,
    type: "straight",
    animated: true,
    style: { stroke: "var(--accent)", opacity: 0.25 },
  }));

  return { nodes, edges };
}

/**
 * Purely decorative React Flow canvas used as the hero background. No user
 * interaction — panning, zooming and selection are all disabled so it reads
 * as ambient motion rather than a tool.
 */
export function HeroFlowBackground() {
  const { nodes, edges } = useMemo(() => buildGraph(), []);

  return (
    <div className="hero-flow absolute inset-0" aria-hidden="true">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.3 }}
        panOnDrag={false}
        panOnScroll={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        proOptions={{ hideAttribution: false }}
      >
        <Background variant={BackgroundVariant.Dots} gap={28} size={1} color="var(--border)" />
      </ReactFlow>
    </div>
  );
}
