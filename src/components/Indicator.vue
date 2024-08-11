<template>
    <svg width="100" height="100" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" stroke="gray" stroke-width="10" fill="none"></circle>
      <path :d="arcPath" stroke="blue" stroke-width="10" fill="none"></path>
    </svg>
  </template>
  
  <script>
  export default {
    props: {
      progress: {
        type: Number,
        required: true,
        validator: (value) => value >= 0 && value <= 100,
      },
    },
    computed: {
      arcPath() {
        const radius = 45;
        const circumference = 2 * Math.PI * radius;
        const dashLength = circumference * this.progress * 0.75 / 100;
        const dashOffset = circumference - dashLength;
  
        return `M 50,50 L ${50 + radius},50 A ${radius},${radius} 0 ${this.progress > 50 ? 1 : 0},1 ${50 + radius * Math.cos(Math.PI * this.progress * 0.75 / 50)},${50 + radius * Math.sin(Math.PI * this.progress * 0.75 / 50)}`;
      },
    },
  };
  </script>