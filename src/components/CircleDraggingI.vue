<template>
<div>
  <a href="https://bl.ocks.org/mbostock/22994cc97fefaeede0d861e6815a847e"> Circle Dragging I</a>
  <svg :width="width" :height="height">
    <circle v-for="(circle, key) in circles"
      :key="key"
      :cx="circle.x"
      :cy="circle.y"
      :r="radius"
      :class="{ active: activeCircle == key}"
      :style="{fill: color(key)}"
      ><text>{{ key }} </text></circle>
  </svg>
</div>
</template>
<script>

import * as d3 from 'd3';

export default {
  name: 'circle-dragging',
  data() {
    return {
      width: 960,
      height: 500,
      radius: 32,
      circles: [],
      wrapper: null,
      color: d3.scaleOrdinal().range(d3.schemeCategory20),
      drag: d3.drag().on('start', this.dragStarted).on('drag', this.dragged).on('end', this.dragended),
      activeCircle: -1,
    };
  },
  methods: {
    initCircles() {
      const { width, height, radius } = this;
      this.circles = d3.range(20).map(() => ({
        x: Math.round(Math.random() * (width - radius * 2) + radius),
        y: Math.round(Math.random() * (height - radius * 2) + radius),
      }));
    },
    initDrag() {
      const circles = this.wrapper.selectAll('circle').data(this.circles);
      this.drag(circles);
    },
    dragStarted(d, i) {
      /* eslint-disable no-param-reassign */
      this.activeCircle = i;
    },
    dragged(d, i) {
      this.circles[i].x = d3.event.x;
      this.circles[i].y = d3.event.y;
    },
    dragended() {
      this.activeCircle = -1;
    },
  },
  mounted() {
    this.wrapper = d3.select(this.$el);
    this.initCircles();
    this.$nextTick(this.initDrag);
  },
};
</script>
<style scoped>

.active {
  stroke: #000;
  stroke-width: 2px;
}

</style>

